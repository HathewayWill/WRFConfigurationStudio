/* WRF Config Studio desktop browser compatibility shim.
 * Targets desktop Chrome, Edge, Firefox, and Safari.
 * This file intentionally avoids mobile/touch-specific behavior.
 */
(function () {
  'use strict';

  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // Element.matches / closest for older desktop engines.
  if (window.Element && !Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector;
  }

  if (window.Element && !Element.prototype.closest) {
    Element.prototype.closest = function (selector) {
      var el = this;
      while (el && el.nodeType === 1) {
        if (el.matches && el.matches(selector)) {
          return el;
        }
        el = el.parentElement || el.parentNode;
      }
      return null;
    };
  }

  // NodeList.forEach / HTMLCollection.forEach for Safari consistency.
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }
  if (window.HTMLCollection && !HTMLCollection.prototype.forEach) {
    HTMLCollection.prototype.forEach = Array.prototype.forEach;
  }

  // Array.from fallback used by tool panels.
  if (!Array.from) {
    Array.from = function (arrayLike) {
      return Array.prototype.slice.call(arrayLike);
    };
  }

  // Object.assign fallback for older embedded desktop browser shells.
  if (typeof Object.assign !== 'function') {
    Object.assign = function (target) {
      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var to = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource != null) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    };
  }

  // CustomEvent fallback for Safari and older desktop webviews.
  try {
    new window.CustomEvent('wrfdw-compat-test');
  } catch (e) {
    window.CustomEvent = function (event, params) {
      params = params || { bubbles: false, cancelable: false, detail: null };
      var customEvent = document.createEvent('CustomEvent');
      customEvent.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return customEvent;
    };
    window.CustomEvent.prototype = window.Event.prototype;
  }

  // requestAnimationFrame/cancelAnimationFrame fallback for redraw timing.
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
      return window.setTimeout(function () {
        callback(Date.now());
      }, 16);
    };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }

  // Stable URL object lookup for download code.
  if (!window.URL && window.webkitURL) {
    window.URL = window.webkitURL;
  }

  // Clipboard fallback for desktop browsers without navigator.clipboard
  // or for non-secure local contexts where Clipboard API is blocked.
  if (!navigator.clipboard) {
    navigator.clipboard = {};
  }
  if (typeof navigator.clipboard.writeText !== 'function') {
    navigator.clipboard.writeText = function (text) {
      return new Promise(function (resolve, reject) {
        try {
          var textarea = document.createElement('textarea');
          textarea.value = String(text == null ? '' : text);
          textarea.setAttribute('readonly', '');
          textarea.style.position = 'fixed';
          textarea.style.left = '-9999px';
          textarea.style.top = '0';
          document.body.appendChild(textarea);
          textarea.select();
          var ok = document.execCommand('copy');
          document.body.removeChild(textarea);
          if (ok) {
            resolve();
          } else {
            reject(new Error('Copy command failed'));
          }
        } catch (err) {
          reject(err);
        }
      });
    };
  }

  // Desktop browser capability report for troubleshooting.
  window.WRFDW_BROWSER_COMPAT = {
    desktopOnly: true,
    userAgent: navigator.userAgent,
    hasFetch: typeof window.fetch === 'function',
    hasBlob: typeof window.Blob === 'function',
    hasFileReader: typeof window.FileReader === 'function',
    hasLocalStorage: (function () {
      try {
        var key = '__wrfdw_compat_test__';
        localStorage.setItem(key, '1');
        localStorage.removeItem(key);
        return true;
      } catch (e) {
        return false;
      }
    })(),
    hasDownloadAttribute: (function () {
      var a = document.createElement('a');
      return typeof a.download !== 'undefined';
    })()
  };
})();
