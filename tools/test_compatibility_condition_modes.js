#!/usr/bin/env node
const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('src/namelist/namelist-compatibility-engine.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

const Engine = sandbox.window.NamelistCompatibilityEngine;

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const catalog = {
  groups: {
    test: [
      { key: 'test.trigger', name: 'trigger' },
      { key: 'test.required', name: 'required' }
    ],
    physics: [
      { key: 'physics.lightning_option', name: 'lightning_option' },
      { key: 'physics.cu_physics', name: 'cu_physics' }
    ],
    domains: [
      { key: 'domains.dx', name: 'dx' }
    ]
  }
};

function issuesFor(rule, values) {
  const enabled = {};
  Object.keys(values).forEach((key) => { enabled[key] = true; });

  const engine = Engine.create({
    catalog,
    compatibility: { rules: [rule] },
    state: { enabled, values, userEditedFields: {} },
    targetWrfVersion: '4.8.0+'
  });

  return engine.getIssues();
}

function numericTriggerRule(mode, values) {
  return {
    id: 'TEST-' + mode,
    validationStatus: 'valid',
    strength: 'Hard',
    triggerGroup: 'test',
    triggerVariable: 'trigger',
    trigger: { mode, values },
    requirements: [
      { group: 'test', variable: 'required', mode: 'one_of', values: [1] }
    ],
    sourceExcerpt: 'test numeric trigger'
  };
}

[
  ['greater_than', [0], 1, 0],
  ['gt', [0], 1, 0],
  ['greater_than_or_equal', [1], 1, 0],
  ['gte', [1], 1, 0],
  ['less_than', [10], 1, 10],
  ['lt', [10], 1, 10],
  ['less_than_or_equal', [10], 10, 11],
  ['lte', [10], 10, 11],
  ['between', [10, 50], 25, 9],
  ['outside_range', [10, 50], 9, 25]
].forEach(([mode, conditionValues, triggerValue, nonTriggerValue]) => {
  let issues = issuesFor(numericTriggerRule(mode, conditionValues), {
    'test.trigger': triggerValue,
    'test.required': 0
  });
  assert(issues.length === 1, `${mode} should trigger`);

  issues = issuesFor(numericTriggerRule(mode, conditionValues), {
    'test.trigger': nonTriggerValue,
    'test.required': 0
  });
  assert(issues.length === 0, `${mode} should not trigger`);
});

const dExponentIssues = issuesFor(numericTriggerRule('greater_than', [0]), {
  'test.trigger': '1D-8',
  'test.required': 0
});
assert(dExponentIssues.length === 1, 'greater_than should support Fortran D exponents');

const requirementRule = {
  id: 'TEST-REQ-GT',
  validationStatus: 'valid',
  strength: 'Hard',
  triggerGroup: 'physics',
  triggerVariable: 'lightning_option',
  trigger: { mode: 'one_of', values: [11] },
  requirements: [
    { group: 'domains', variable: 'dx', mode: 'between', values: [10000, 50000] },
    { group: 'physics', variable: 'cu_physics', mode: 'one_of', values: [1, 3, 5, 10, 11, 93, 99] }
  ],
  sourceExcerpt: 'lightning option 11 range test'
};

let issues = issuesFor(requirementRule, {
  'physics.lightning_option': 11,
  'domains.dx': 9000,
  'physics.cu_physics': 3
});
assert(issues.length === 1, 'between requirement should fail outside range');

issues = issuesFor(requirementRule, {
  'physics.lightning_option': 11,
  'domains.dx': 25000,
  'physics.cu_physics': 3
});
assert(issues.length === 0, 'between requirement should pass inside range');

console.log('Compatibility numeric condition mode tests passed.');
