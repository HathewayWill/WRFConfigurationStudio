# Compatibility batch 5 remaining-rule decisions

Batch 5 reviewed the remaining non-valid compatibility rules after batch 4 promotion.

At this stage, the remaining pool should not be mass-promoted. Most remaining rules fall into one of four categories:

1. Default-active or default-nonzero controls that would create default-page warning noise if promoted directly.
2. Workflow rules that depend on external files, geogrid/metgrid setup, compile-time choices, or domain role.
3. Rules with no structured runtime requirement, which are documentation notes rather than enforceable browser rules.
4. Rules needing manual physics review before hard enforcement.

## Current post-batch-4 status

- Total compatibility rules: 93
- Valid/enforced rules: 59
- Remaining non-valid rules: 34
- Unreviewed: 29
- Needs review: 5

## Default-active or default-nonzero rules

These should not be promoted as hard rules in their current form because their trigger defaults are active or nonzero.

Some of these already have safer `*-USER` soft replacements using `user_edited_non_zero`.

| Rule | Reason | Decision |
|---|---|---|
| `CONVTRANS` | `convtrans_avglen_m` defaults to nonzero | Keep unreviewed; superseded by `CONVTRANS-AVGLEN-M-USER` soft rule |
| `KFETA` | `kfeta_trigger` defaults to nonzero | Keep unreviewed; superseded by `KFETA-TRIGGER-USER` soft rule |
| `MAXIENS` | `maxiens` defaults to nonzero | Keep unreviewed; superseded by `MAXIENS-USER` soft rule |
| `MAXENS` | `maxens` defaults to nonzero | Keep unreviewed; superseded by `MAXENS-USER` soft rule |
| `MAXENS2` | default behavior is catalog-sensitive and historically default-risky | Keep unreviewed; superseded by `MAXENS2-USER` soft rule |
| `MAXENS3` | `maxens3` defaults to nonzero | Keep unreviewed; superseded by `MAXENS3-USER` soft rule |
| `ENSDIM` | `ensdim` defaults to nonzero | Keep unreviewed; superseded by `ENSDIM-USER` soft rule |
| `CUGD-AVEDX` | `cugd_avedx` defaults to nonzero | Candidate for future `CUGD-AVEDX-USER` soft rule |
| `BUCKET-J` | `bucket_j` default is `-1`, which means inactive, but the current trigger uses `active` | Hold until numeric comparison trigger support is added |

## Workflow and external-resource rules

These are not simple runtime namelist compatibility checks. They depend on external files, geogrid/metgrid setup, compile-time choices, or domain role.

| Rule | Reason | Decision |
|---|---|---|
| `AHE-INPUT` | Requires anthropogenic heat input variables | Workflow warning candidate, not hard enforcement |
| `NOAHMP-IRR` | Requires Noah-MP geogrid table support | Workflow warning candidate |
| `NOAHMP-IRRM` | Requires `opt_irr > 0` and Noah-MP geogrid support | Hold until comparison support and workflow wording are added |
| `LIGHTNING-11` | Requires dx range and parameterized-convection scale logic | Hold until range/comparison support exists |
| `MULTI-BDY` | Depends on boundary file naming workflow | Workflow warning candidate |
| `NESTED-TRUE` | Depends on domain role | Hold until domain-role metadata exists |
| `WPS-HIRES` | Depends on compile environment, geog data resolution, and file path | Workflow warning candidate |
| `SLUCM-DRAG` | Requires WUDAPT/urban extra inputs and urban options | Workflow warning candidate |
| `OLD-FILES` | Compatibility with old WRF input behavior | Workflow warning candidate |

## Documentation-only or no-structured-requirement rules

These should not be promoted into active enforcement without new structured metadata.

| Rule | Reason | Decision |
|---|---|---|
| `NUM-LAND-CAT` | Depends on metgrid/geog dataset consistency | Documentation/workflow note only |
| `SPECIFIED-D01` | Depends on domain role | Hold until domain-role metadata exists |
| `CU-OFF` | `cu_physics=0` is allowed; this is not an error | Documentation note only |
| `SHCU-OFF` | `shcu_physics=0` is allowed; this is not an error | Documentation note only |

## Needs manual physics review

These should stay `needs_review` until checked against authoritative WRF documentation and known physics-suite behavior.

| Rule | Decision |
|---|---|
| `PBL-1` | Manual review |
| `PBL-5` | Manual review |
| `PBL-6` | Manual review |
| `PBL-7` | Manual review |
| `LES-PBL` | Manual review |

## Recommended next technical improvements

### 1. Add numeric comparison trigger modes

Future engine modes:

- `greater_than`
- `greater_than_or_equal`
- `less_than`
- `less_than_or_equal`
- `between`
- `outside_range`

These would support rules such as:

- `bucket_j > 0`
- `opt_irr > 0`
- `10 km < dx < 50 km`

### 2. Add workflow-warning rule type

Some rules should not be hard errors. They should explain external dependencies such as:

- required geogrid table
- required wrfinput extra variables
- required boundary file naming pattern
- required compile-time environment

### 3. Add domain-role metadata

Needed for rules such as:

- `SPECIFIED-D01`
- `NESTED-TRUE`

### 4. Add one more user-edited soft rule

Potential candidate:

- `CUGD-AVEDX-USER`

This should use `user_edited_non_zero`, similar to the previous tuning-control soft warnings.

## Batch 5 recommendation

Do not promote a large batch from the remaining pool yet.

Recommended next action:

1. Commit this batch 5 triage and decision report.
2. Start a targeted branch for comparison/range trigger modes.
3. Promote only rules unlocked by that engine support.
