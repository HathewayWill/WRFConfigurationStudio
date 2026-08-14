/* WRF Config Studio centralized public UI version.
 * Change these values once to update visible app labels.
 * Legacy WRF_DOMAIN_WIZARD_* aliases are retained for compatibility with older code hooks.
 */
(function (root) {
  'use strict';

  root.WRF_CONFIG_STUDIO_APP_NAME = 'WRF Configuration Studio';
  root.WRF_CONFIG_STUDIO_VERSION = 'v1.0.0';
  root.WRF_CONFIG_STUDIO_VERSION_TEXT = 'v1.0.0';

  root.WRF_DOMAIN_WIZARD_VERSION = root.WRF_CONFIG_STUDIO_VERSION;
  root.WRF_DOMAIN_WIZARD_VERSION_TEXT = root.WRF_CONFIG_STUDIO_VERSION_TEXT;

  function applyVersion() {
    var version = root.WRF_CONFIG_STUDIO_VERSION_TEXT || 'v1.0.0';
    var name = root.WRF_CONFIG_STUDIO_APP_NAME || 'WRF Config Studio';
    try {
      document.title = name + ' ' + version;
      document.querySelectorAll('[data-wrf-version-text]').forEach(function (el) {
        el.textContent = version;
      });
      document.querySelectorAll('[data-wrf-app-name]').forEach(function (el) {
        el.textContent = name;
      });
      document.querySelectorAll('[data-wrf-app-title]').forEach(function (el) {
        el.textContent = name + ' ' + version;
      });
    } catch (e) {
      /* version labels are non-critical */
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyVersion);
  } else {
    applyVersion();
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
