// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jC2qd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var _menu = require("./js/menu");
var _refs = require("./js/refs");
var _testItems = require("./js/test-items");
var _startTest = require("./js/start-test");
var _renderTestHeader = require("./js/render-test-header");
var _renderTestQuestion = require("./js/render-test-question");
var _renderTestCompletionTrack = require("./js/render-test-completion-track");

},{"./js/menu":"dTgwB","./js/refs":"2WoF2","./js/test-items":"iNIuW","./js/start-test":"dtKAy","./js/render-test-header":"dtL7i","./js/render-test-completion-track":"2VNBB","./js/render-test-question":"eg18s"}],"dTgwB":[function(require,module,exports) {
var _refs = require("./refs");
const handleOpenMenuClick = ()=>{
    (0, _refs.refs).btnContainer.classList.add("is-open");
    (0, _refs.refs).btnMenuOpen.setAttribute("aria-expanded", true);
    (0, _refs.refs).btnMenuOpen.removeEventListener("click", handleOpenMenuClick);
    (0, _refs.refs).btnMenuClose.addEventListener("click", handleCloseMenuClick);
    (0, _refs.refs).menuMain.addEventListener("click", handleCloseMenuClick);
    (0, _refs.refs).menuInfo.addEventListener("click", handleCloseMenuClick);
    (0, _refs.refs).menuTest.addEventListener("click", handleCloseMenuClick);
};
const handleCloseMenuClick = ()=>{
    (0, _refs.refs).btnContainer.classList.remove("is-open");
    (0, _refs.refs).btnMenuOpen.setAttribute("aria-expanded", false);
    (0, _refs.refs).btnMenuClose.removeEventListener("click", handleCloseMenuClick);
    (0, _refs.refs).menuMain.removeEventListener("click", handleCloseMenuClick);
    (0, _refs.refs).menuInfo.removeEventListener("click", handleCloseMenuClick);
    (0, _refs.refs).menuTest.removeEventListener("click", handleCloseMenuClick);
    (0, _refs.refs).btnMenuOpen.addEventListener("click", handleOpenMenuClick);
};
(0, _refs.refs).btnMenuOpen.addEventListener("click", handleOpenMenuClick);
(0, _refs.refs).btnMenuClose.addEventListener("click", handleCloseMenuClick);
(0, _refs.refs).menuMain.addEventListener("click", handleCloseMenuClick);
(0, _refs.refs).menuInfo.addEventListener("click", handleCloseMenuClick);
(0, _refs.refs).menuTest.addEventListener("click", handleCloseMenuClick);

},{"./refs":"2WoF2"}],"2WoF2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "refs", ()=>refs);
const refs = {
    // Menu
    btnMenuOpen: document.querySelector(".js-open-menu"),
    btnMenuClose: document.querySelector(".js-close-menu"),
    btnContainer: document.querySelector(".js-menu-container"),
    menuMain: document.querySelector(".js-menu-main"),
    menuInfo: document.querySelector(".js-menu-info"),
    menuTest: document.querySelector(".js-menu-test"),
    // Start test
    btnStartTest: document.querySelectorAll(".js-start"),
    appBody: document.querySelector("body"),
    // Header
    headerWrap: document.querySelector(".js-header-wrap"),
    // Main
    appMain: document.querySelector(".app-main"),
    // Footer
    appFooter: document.querySelector(".app-footer")
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"iNIuW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "testItems", ()=>testItems);
const testItems = [
    {
        itemNumber: 1,
        title: "Ваш пол:",
        image: [],
        type: "sex",
        style: "list",
        answers: [
            "мужчина",
            "женщина"
        ]
    },
    {
        itemNumber: 2,
        title: "Укажите ваш возраст:",
        image: [],
        type: "age",
        style: "list",
        answers: [
            "До 18",
            "От 18 до 28",
            "От 29 до 35",
            "От 36"
        ]
    },
    {
        itemNumber: 3,
        title: "Выберите лишнее:",
        image: [],
        type: "building",
        style: "list",
        answers: [
            "Дом",
            "Шалаш",
            "Бунгало",
            "Скамейка",
            "Хижина"
        ]
    },
    {
        itemNumber: 4,
        title: "Продолжите числовой ряд: 18 20 24 32",
        image: [],
        type: "number",
        style: "list",
        answers: [
            62,
            48,
            74,
            57,
            60,
            77
        ]
    },
    {
        itemNumber: 5,
        title: "Выберите цвет, который сейчас наиболее Вам приятен:",
        image: [],
        type: "first-color",
        style: "matrix",
        answers: [
            "#A8A8A8",
            "#0000A9",
            "#00A701",
            "#F60100",
            "#FDFF19",
            "#A95403",
            "#000000",
            "#850068",
            "#46B3AC"
        ]
    },
    {
        itemNumber: 6,
        title: "Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",
        image: [],
        type: "second-color",
        style: "matrix",
        answers: [
            "#A8A8A8",
            "#0000A9",
            "#00A701",
            "#F60100",
            "#FDFF19",
            "#A95403",
            "#000000",
            "#850068",
            "#46B3AC"
        ]
    },
    {
        itemNumber: 7,
        title: "Какой из городов лишний?",
        image: [],
        type: "city",
        style: "list",
        answers: [
            "Вашингтон",
            "Лондон",
            "Париж",
            "Нью-Йорк",
            "Москва",
            "Оттава"
        ]
    },
    {
        itemNumber: 8,
        title: "Выберите правильную фигуру из четырёх пронумерованных.",
        image: [
            "./images/webp/test8-img.webp",
            "./images/webp/test8-img-@2x.webp",
            "./images/png/test8-img.jpg",
            "./images/png/test8-img-@2x.jpg"
        ],
        type: "figurine",
        style: "cubes",
        answers: [
            1,
            2,
            3,
            4
        ]
    },
    {
        itemNumber: 9,
        title: "Вам привычнее и важнее:",
        image: [],
        type: "mindset",
        style: "list",
        answers: [
            "Наслаждаться каждой минутой проведенного времени",
            "Быть устремленными мыслями в будущее",
            "Учитывать в ежедневной практике прошлый опыт"
        ]
    },
    {
        itemNumber: 10,
        title: "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:",
        image: [
            "./images/webp/test10-img.webp",
            "./images/webp/test10-img-@2x.webp",
            "./images/png/test10-img.jpg",
            "./images/png/test10-img-@2x.jpg"
        ],
        type: "viewpoint",
        style: "list",
        answers: [
            "Оно остроконечное",
            "Оно устойчиво",
            "Оно находится в состоянии равновесия"
        ]
    },
    {
        itemNumber: 11,
        title: "Вставьте подходящее число",
        image: [
            "./images/webp/test11-img.webp",
            "./images/webp/test11-img-@2x.webp",
            "./images/png/test11-img.jpg",
            "./images/png/test11-img-@2x.jpg"
        ],
        type: "next-number",
        style: "cubes",
        answers: [
            34,
            36,
            53,
            44,
            66,
            42
        ]
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dtKAy":[function(require,module,exports) {
var _refs = require("./refs");
var _renderTestHeader = require("./render-test-header");
var _renderTestCompletionTrack = require("./render-test-completion-track");
const handleClickOnStartBtn = (event)=>{
    const target = event.target;
    console.log(target);
    if (event.target.nodeName !== "BUTTON") return;
    console.log("hello");
    // Clean main and footer
    (0, _refs.refs).appMain.innerHTML = "";
    (0, _refs.refs).appFooter.innerHTML = "";
    // Render header for test
    (0, _renderTestHeader.renderTestHeaderWrap)();
    // Render progress bar
    //   renderTestCompletionTrack();
    0, _renderTestCompletionTrack.renderTestCompletionTrack;
};
const handleClickOnMenuStartLink = ()=>{
    console.log("hello");
    // Clean main and footer
    (0, _refs.refs).appMain.innerHTML = "";
    (0, _refs.refs).appFooter.innerHTML = "";
    // Render header for test
    (0, _renderTestHeader.renderTestHeaderWrap)();
    // Render progress bar
    //   renderTestCompletionTrack();
    0, _renderTestCompletionTrack.renderTestCompletionTrack;
};
(0, _refs.refs).appBody.addEventListener("click", handleClickOnStartBtn);
(0, _refs.refs).menuTest.addEventListener("click", handleClickOnMenuStartLink);

},{"./refs":"2WoF2","./render-test-header":"dtL7i","./render-test-completion-track":"2VNBB"}],"dtL7i":[function(require,module,exports) {
// Function to render header elements for test
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderTestHeaderWrap", ()=>renderTestHeaderWrap);
var _refs = require("./refs");
const renderTestHeaderWrap = ()=>{
    const markupTestHeaderWrap = `
    <picture class="header__brain-picture">
            <source
              srcset="./images/webp/brain.webp 1x, ./images/webp/brain-@2x.webp 2x"
              type="image/webp"
            />
            <source
              srcset="./images/png/brain.png 1x, ./images/png/brain-@2x.png 2x"
              type="image/png"
            />
            <img
              class="header__brain-img"
              src="./images/png/brain.png"
              alt="brain"
              width="46"
              height="46"
            />
          </picture>
          <p class="header__text">тест на определение IQ</p>
          `;
    (0, _refs.refs).headerWrap.insertAdjacentHTML("beforeend", markupTestHeaderWrap);
};

},{"./refs":"2WoF2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2VNBB":[function(require,module,exports) {
// Function to render test completion track
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "markupTestCompletionTrack", ()=>markupTestCompletionTrack);
var _refs = require("./refs");
const markupTestCompletionTrack = `
        <div class="test__track-wrap">
          <div class="test__track"></div>
          <div class="test__track-completion"></div>
        </div>
          `;

},{"./refs":"2WoF2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eg18s":[function(require,module,exports) {
// Function to render test question
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderTestQuestion", ()=>renderTestQuestion);
var _refs = require("./refs");
var _renderTestCompletionTrack = require("./render-test-completion-track");
const renderTestQuestion = ()=>{
    const markupTestQuestion = `
    <section class="test">
      <div class="container test__container">
      ${(0, _renderTestCompletionTrack.markupTestCompletionTrack)}
      </div>
    </section>
          `;
    (0, _refs.refs).appMain.insertAdjacentHTML("beforeend", markupTestQuestion);
};

},{}]},["jC2qd","8lqZg"], "8lqZg", "parcelRequire94c2")

//# sourceMappingURL=index.975ef6c8.js.map
