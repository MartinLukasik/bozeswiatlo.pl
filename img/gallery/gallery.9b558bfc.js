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
})({"node_modules/lightgallery.js/dist/css/lightgallery.css":[function(require,module,exports) {

},{"./../fonts/lg.eot":[["lg.ea24f667.eot","node_modules/lightgallery.js/dist/fonts/lg.eot"],"node_modules/lightgallery.js/dist/fonts/lg.eot"],"./../fonts/lg.woff":[["lg.1cc2e272.woff","node_modules/lightgallery.js/dist/fonts/lg.woff"],"node_modules/lightgallery.js/dist/fonts/lg.woff"],"./../fonts/lg.ttf":[["lg.0ff5ecf1.ttf","node_modules/lightgallery.js/dist/fonts/lg.ttf"],"node_modules/lightgallery.js/dist/fonts/lg.ttf"],"./../fonts/lg.svg":[["lg.9840913b.svg","node_modules/lightgallery.js/dist/fonts/lg.svg"],"node_modules/lightgallery.js/dist/fonts/lg.svg"],"./../img/vimeo-play.png":[["vimeo-play.bee79290.png","node_modules/lightgallery.js/dist/img/vimeo-play.png"],"node_modules/lightgallery.js/dist/img/vimeo-play.png"],"./../img/video-play.png":[["video-play.185b23d7.png","node_modules/lightgallery.js/dist/img/video-play.png"],"node_modules/lightgallery.js/dist/img/video-play.png"],"./../img/youtube-play.png":[["youtube-play.9b9140e2.png","node_modules/lightgallery.js/dist/img/youtube-play.png"],"node_modules/lightgallery.js/dist/img/youtube-play.png"],"./../img/loading.gif":[["loading.abc5a5e1.gif","node_modules/lightgallery.js/dist/img/loading.gif"],"node_modules/lightgallery.js/dist/img/loading.gif"]}],"js/modules/lightgallery.js":[function(require,module,exports) {
"use strict";

require("lightgallery.js/dist/css/lightgallery");

lightGallery(document.getElementById('lightgallery'));
console.log(lightGallery);
},{"lightgallery.js/dist/css/lightgallery":"node_modules/lightgallery.js/dist/css/lightgallery.css"}],"js/gallery.js":[function(require,module,exports) {
"use strict";

require("./modules/lightgallery");
},{"./modules/lightgallery":"js/modules/lightgallery.js"}]},{},["js/gallery.js"], null)
//# sourceMappingURL=/gallery.9b558bfc.js.map