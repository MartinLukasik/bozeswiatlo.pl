// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/vendors/lg-fullscreen.min.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**!
 * lg-fullscreen.js | 1.1.0 | February 23rd 2019
 * http://sachinchoolur.github.io/lg-fullscreen.js
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */
!function (e) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    var n;
    n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, n.LgFullscreen = e();
  }
}(function () {
  var e, n, l;
  return function () {
    function e(n, l, t) {
      function r(o, c) {
        if (!l[o]) {
          if (!n[o]) {
            var s = "function" == typeof require && require;
            if (!c && s) return s(o, !0);
            if (u) return u(o, !0);
            var i = new Error("Cannot find module '" + o + "'");
            throw i.code = "MODULE_NOT_FOUND", i;
          }

          var f = l[o] = {
            exports: {}
          };
          n[o][0].call(f.exports, function (e) {
            return r(n[o][1][e] || e);
          }, f, f.exports, e, n, l, t);
        }

        return l[o].exports;
      }

      for (var u = "function" == typeof require && require, o = 0; o < t.length; o++) {
        r(t[o]);
      }

      return r;
    }

    return e;
  }()({
    1: [function (n, l, t) {
      !function (n, l) {
        if ("function" == typeof e && e.amd) e([], l);else if (void 0 !== t) l();else {
          var r = {
            exports: {}
          };
          l(), n.lgFullscreen = r.exports;
        }
      }(this, function () {
        "use strict";

        function e() {
          return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
        }

        var n = Object.assign || function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var l = arguments[n];

            for (var t in l) {
              Object.prototype.hasOwnProperty.call(l, t) && (e[t] = l[t]);
            }
          }

          return e;
        },
            l = {
          fullScreen: !0
        },
            t = function e(t) {
          return this.el = t, this.core = window.lgData[this.el.getAttribute("lg-uid")], this.core.s = n({}, l, this.core.s), this.init(), this;
        };

        t.prototype.init = function () {
          var e = "";

          if (this.core.s.fullScreen) {
            if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) return;
            e = '<span class="lg-fullscreen lg-icon"></span>', this.core.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend", e), this.fullScreen();
          }
        }, t.prototype.requestFullscreen = function () {
          var e = document.documentElement;
          e.requestFullscreen ? e.requestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen();
        }, t.prototype.exitFullscreen = function () {
          document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
        }, t.prototype.fullScreen = function () {
          var n = this;
          utils.on(document, "fullscreenchange.lgfullscreen webkitfullscreenchange.lgfullscreen mozfullscreenchange.lgfullscreen MSFullscreenChange.lgfullscreen", function () {
            utils.hasClass(n.core.outer, "lg-fullscreen-on") ? utils.removeClass(n.core.outer, "lg-fullscreen-on") : utils.addClass(n.core.outer, "lg-fullscreen-on");
          }), utils.on(this.core.outer.querySelector(".lg-fullscreen"), "click.lg", function () {
            e() ? n.exitFullscreen() : n.requestFullscreen();
          });
        }, t.prototype.destroy = function () {
          e() && this.exitFullscreen(), utils.off(document, ".lgfullscreen");
        }, window.lgModules.fullscreen = t;
      });
    }, {}]
  }, {}, [1])(1);
});
},{}]},{},["js/vendors/lg-fullscreen.min.js"], null)
//# sourceMappingURL=/lg-fullscreen.min.e0dd7379.js.map