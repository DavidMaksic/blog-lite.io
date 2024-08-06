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
})({"hycaY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_USE_SSE: boolean;
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
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _darkModeViewJs = require("./views/darkModeView.js");
var _darkModeViewJsDefault = parcelHelpers.interopDefault(_darkModeViewJs);
var _publishViewJs = require("./views/publishView.js");
var _publishViewJsDefault = parcelHelpers.interopDefault(_publishViewJs);
var _deleteViewJs = require("./views/deleteView.js");
var _deleteViewJsDefault = parcelHelpers.interopDefault(_deleteViewJs);
var _articleViewJs = require("./views/articleView.js");
var _articleViewJsDefault = parcelHelpers.interopDefault(_articleViewJs);
var _bookmarkViewJs = require("./views/bookmarkView.js");
var _bookmarkViewJsDefault = parcelHelpers.interopDefault(_bookmarkViewJs);
const controlArticle = function() {
    (0, _articleViewJsDefault.default).upload(controlAddArticles);
};
const controlAddArticles = function() {
    _modelJs.addArticle((0, _articleViewJsDefault.default).article);
};
const controlDeleteArticles = function() {
    _modelJs.deleteArticle((0, _deleteViewJsDefault.default).articleH2text);
};
const controlDarkMode = function() {
    (0, _darkModeViewJsDefault.default).loadTheme();
    (0, _darkModeViewJsDefault.default).toggleTheme();
};
const controlPublish = function() {
    (0, _publishViewJsDefault.default).showPublishModal();
    (0, _publishViewJsDefault.default).exitPublishModal();
};
const controlDelete = function() {
    (0, _deleteViewJsDefault.default).deleteArticleMarkup(controlDeleteArticles, controlRemoveBookmarkData2);
    (0, _deleteViewJsDefault.default).deleteMessageOnLoad(_modelJs.state.articles);
};
const renderArticlesOnLoad = function() {
    _modelJs.state.articles?.map((article)=>(0, _articleViewJsDefault.default).render(article));
};
const renderBookmarksOnLoad = function() {
    (0, _bookmarkViewJsDefault.default).renderBookmarks(_modelJs.state.bookmarks);
    (0, _bookmarkViewJsDefault.default).persistBookmarkIcon(_modelJs.state.articles);
};
const controlBookmarks = function() {
    (0, _bookmarkViewJsDefault.default).createBookmark(controlAddBookmark, controlRemoveBookmarkData);
    (0, _bookmarkViewJsDefault.default).toggleDropdown(_modelJs.state.bookmarks);
};
const controlAddBookmark = function() {
    _modelJs.addBookmark((0, _bookmarkViewJsDefault.default).articleH2);
    (0, _bookmarkViewJsDefault.default).renderBookmarks(_modelJs.state.bookmarks);
};
const controlRemoveBookmarkData = function() {
    _modelJs.deleteBookmarkData((0, _bookmarkViewJsDefault.default).articleH2);
};
const controlRemoveBookmarkData2 = function() {
    _modelJs.deleteBookmarkData2((0, _deleteViewJsDefault.default).articleH2text);
};
const init = function() {
    controlArticle();
    renderArticlesOnLoad();
    renderBookmarksOnLoad();
    controlBookmarks();
    controlPublish();
    controlDelete();
    controlDarkMode();
};
init();

},{"./model.js":"Y4A21","./views/darkModeView.js":"fven8","./views/publishView.js":"ly8K5","./views/deleteView.js":"4BAsC","./views/articleView.js":"5jNgA","./views/bookmarkView.js":"7YaI3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "addArticle", ()=>addArticle);
parcelHelpers.export(exports, "deleteArticle", ()=>deleteArticle);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "deleteBookmarkData", ()=>deleteBookmarkData);
parcelHelpers.export(exports, "deleteBookmarkData2", ()=>deleteBookmarkData2);
var _configJs = require("./config.js");
const state = {
    articles: [],
    bookmarks: []
};
const persistArticle = function(article, id) {
    localStorage.setItem("article-" + id, JSON.stringify(article));
};
const persistBookmark = function(bookmark, bookmarkID) {
    localStorage.setItem("bookmark-" + bookmarkID, JSON.stringify(bookmark));
};
const removeArticleFromStorage = function(id) {
    localStorage.removeItem("article-" + id);
};
const removeBookmarkFromStorage = function(bookmarkID) {
    localStorage.removeItem("bookmark-" + bookmarkID);
};
const addArticle = function(article) {
    state.articles?.push(article);
    persistArticle(article, article?.id);
};
const deleteArticle = function(articleH2text) {
    const content = state.articles.filter((el)=>el.title === articleH2text);
    const contentObject = content[0];
    removeArticleFromStorage(contentObject.id);
    const articleIndex = state.articles.indexOf(contentObject);
    state.articles.splice(articleIndex, 1);
};
const allStorage = function() {
    let archive = [], keys = Object.keys(localStorage), i = 0, key;
    for(; key = keys[i]; i++)archive.push(key + "=" + localStorage.getItem(key));
    return archive;
};
const addBookmark = function(h2content) {
    // - Fetch current article
    const [theArticle] = state.articles.filter((el)=>el.title === h2content);
    const articleIndex = state.articles.indexOf(theArticle);
    const currentArticle = state.articles[articleIndex];
    currentArticle.isBookmarked = true;
    const currentArticleID = currentArticle.id.toString();
    persistArticle(currentArticle, currentArticleID);
    // - Create current bookmark object
    const [bookmark] = state.articles.filter((el)=>el.title === h2content);
    state.bookmarks.push(bookmark);
    const bookmarkIndex = state.bookmarks.indexOf(bookmark);
    state.bookmarks[bookmarkIndex].rendered = undefined;
    state.bookmarks[bookmarkIndex].bookmarkID = Math.round(Math.random() * ((0, _configJs.MAX) - (0, _configJs.MIN)) + (0, _configJs.MIN));
    persistBookmark(bookmark, bookmark?.bookmarkID);
};
const deleteBookmarkData = function(articleH2) {
    // - Fetch current article
    const [theArticle] = state.articles.filter((el)=>el.title === articleH2);
    const articleIndex = state.articles.indexOf(theArticle);
    const currentArticle = state.articles[articleIndex];
    currentArticle.isBookmarked = false;
    const currentArticleID = currentArticle.id.toString();
    persistArticle(currentArticle, currentArticleID);
    // - Remove current bookmark object
    const [theBookmark] = state.bookmarks.filter((bookmark)=>bookmark.title === articleH2);
    removeBookmarkFromStorage(theBookmark.bookmarkID);
    const bookmarkIndex = state.bookmarks.indexOf(theBookmark);
    state.bookmarks.splice(bookmarkIndex, 1);
};
const deleteBookmarkData2 = function(articleh2) {
    // - Find article data to be deleted
    const [theBookmark] = state.bookmarks.filter((bookmark)=>bookmark.title === articleh2);
    const [theArticle] = state.articles.filter((el)=>el.title === articleh2);
    const articleIndex = state.articles.indexOf(theArticle);
    state.articles.length;
    removeBookmarkFromStorage(theBookmark.bookmarkID);
    const bookmarkIndex = state.bookmarks.indexOf(theBookmark);
    state.bookmarks.splice(bookmarkIndex, 1);
};
const init = function() {
    const allItems = allStorage();
    // Exclude all except article IDs
    const storageArticles = allItems.filter((item)=>!item.includes("selectedTheme=light"));
    const storageArticles2 = storageArticles.filter((item)=>!item.includes("selectedTheme=dark"));
    const storageArticles3 = storageArticles2.filter((item)=>!item.includes("bookmark-"));
    const articleIDs = storageArticles3?.map((item)=>item.slice(0, 18));
    articleIDs?.forEach((item)=>state.articles.push(JSON.parse(localStorage.getItem(item))));
    // Exclude all except bookmark IDs
    const storageBookmarks = allItems.filter((item)=>!item.includes("selectedTheme=light"));
    const storageBookmarks2 = storageBookmarks.filter((item)=>!item.includes("selectedTheme=dark"));
    const storageBookmarks3 = storageBookmarks2.filter((item)=>!item.includes("article-"));
    const bookmarkIDs = storageBookmarks3?.map((item)=>item.slice(0, 19));
    bookmarkIDs?.forEach((item)=>state.bookmarks.push(JSON.parse(localStorage.getItem(item))));
};
init(); // localStorage.clear();

},{"./config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MIN", ()=>MIN);
parcelHelpers.export(exports, "MAX", ()=>MAX);
const MIN = 1111111111;
const MAX = 9999999999;

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
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"fven8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class darkModeView {
    root = document.querySelector(":root");
    darkBtn = document.getElementById("dark-mode");
    dot = document.getElementById("dot");
    loadTheme() {
        document.addEventListener("DOMContentLoaded", ()=>{
            const theme = localStorage.getItem("selectedTheme");
            // When loading document select theme from localStorage
            if (theme === "dark") {
                this.root.classList.add("dark");
                this.dot.classList.toggle("translate-x-6");
            }
            if (theme === "light") this.root.classList.remove("dark");
            if (!theme) localStorage.setItem("selectedTheme", "light");
        });
    }
    toggleTheme() {
        this.darkBtn.addEventListener("click", ()=>{
            this.root.classList.toggle("dark");
            this.dot.classList.toggle("translate-x-6");
            // If user changes theme, save it to localStorage
            if (this.root.classList.contains("dark")) localStorage.setItem("selectedTheme", "dark");
            if (!this.root.classList.contains("dark")) localStorage.setItem("selectedTheme", "light");
        });
    }
}
exports.default = new darkModeView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ly8K5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class PublishView extends (0, _viewJsDefault.default) {
    #addPostBtn = document.getElementById("add-btn");
    #exitModalBtn = document.getElementById("exit-modal-btn");
    showPublishModal() {
        this.#addPostBtn?.addEventListener("click", this.togglePublishModal.bind(this));
    }
    exitPublishModal() {
        const thisObject = this;
        // - When ESC is pressed
        window.onkeydown = (e)=>{
            if (e.key === "Escape" && this.publishModal.classList.contains("active")) this.togglePublishModal();
        };
        // - By clicking outside
        this.publishModal?.addEventListener("click", this.togglePublishModal.bind(this));
        this.form?.addEventListener("click", (e)=>e.stopPropagation());
        this.#exitModalBtn?.addEventListener("click", function() {
            thisObject.togglePublishModal();
        });
    }
}
exports.default = new PublishView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWlJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    form = document.getElementById("modal-content");
    publishModal = document.getElementById("modal");
    message = document.getElementById("message");
    clearMessage() {
        this.message?.classList.add("hidden");
    }
    addMessage() {
        this.message?.classList.remove("hidden");
    }
    togglePublishModal() {
        this.publishModal.classList.toggle("active");
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4BAsC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class DeleteView extends (0, _viewJsDefault.default) {
    dropdownParent = document.querySelector(".bookmark-parent");
    articleH2text;
    articles;
    deleteMessageOnLoad(article) {
        if (article.length > 0) this.clearMessage();
        this.articles = article;
    }
    deleteArticleMarkup(handler, handleDelete) {
        window.addEventListener("click", (e)=>{
            if (e.target.closest("#delete-btn")) {
                const deleteBtn = e.target.closest("#delete-btn");
                const article = deleteBtn.closest(".article-element");
                this.articleH2text = article.querySelector(".article-h2").innerText;
                const h2 = article.querySelector(".article-h2");
                const h3 = article.querySelector(".delete-h3");
                const p = article.querySelector(".delete-p");
                const span = article.querySelector(".delete-span");
                const img = article.querySelector(".delete-img");
                const bookmark = article.querySelector(".bookmarks");
                const bookmarkChecked = bookmark.querySelector(".bookmark-full");
                const allElements = [];
                allElements.push(h2, h3, p, span, deleteBtn);
                allElements.map((el)=>el.textContent = "");
                // - For other devices
                article.classList.add("max-h-0");
                if (article.classList.contains("py-20")) article.classList.remove("py-20");
                if (article.classList.contains("pb-12")) article.classList.remove("pb-12");
                if (article.classList.contains("mt-10")) article.classList.remove("mt-10");
                // - For phones
                if (article.classList.contains("md:pt-16")) article.classList.remove("md:pt-16");
                if (article.classList.contains("md:pb-10")) article.classList.remove("md:pb-10");
                if (article.classList.contains("sm:p-8")) article.classList.remove("sm:p-8");
                if (article.classList.contains("sm:pb-6")) article.classList.remove("sm:pb-6");
                if (article.classList.contains("sm:mt-6")) article.classList.remove("sm:mt-6");
                img.classList.add("opacity-0");
                bookmark.classList.add("opacity-0");
                setTimeout(()=>{
                    article.remove();
                }, 400);
                handler();
                // - If current article is bookmarked, delete the bookmark too
                if (!bookmarkChecked.classList.contains("hidden")) {
                    // - Get bookmark data
                    const allBookmarks = [
                        ...document.querySelectorAll(".dropdown-item")
                    ];
                    const bookmarkHeaders = allBookmarks.map((item)=>item?.querySelector(".bookmark-h2").textContent.trim());
                    const [filteredString] = bookmarkHeaders.filter((bookmarkH2)=>bookmarkH2 === this.articleH2text);
                    const [theItem] = allBookmarks.filter((item)=>item?.querySelector(".bookmark-h2").textContent.trim() === filteredString);
                    handleDelete();
                    theItem.remove();
                    // - Delete currently clicked item's markup from this array
                    const [theBookmarkMarkup] = allBookmarks.filter((bookmark)=>bookmark.querySelector(".bookmark-h2").textContent.trim() === this.articleH2text);
                    const theBookmarkMarkupIndex = allBookmarks.indexOf(theBookmarkMarkup);
                    allBookmarks.splice(theBookmarkMarkupIndex, 1);
                    // - Delete clicked bookmark from bookmarkHeaders array
                    const [theBookmark] = bookmarkHeaders.filter((bookmark)=>bookmark === this.articleH2text);
                    const theBookmarkIndex = bookmarkHeaders.indexOf(theBookmark);
                    bookmarkHeaders.splice(theBookmarkIndex, 1);
                    if (allBookmarks.length === 0) this.renderBookmarkMessage();
                }
                if (this.articles.length === 0) this.addMessage();
            }
        });
    }
    renderBookmarkMessage() {
        this.dropdownParent?.insertAdjacentHTML("afterend", this.#generateBookmarkMessage());
    }
    #generateBookmarkMessage() {
        return `
         <span class="bookmark-message select-none border-2 border-slate-300 dark:border-transparent text-3xl text-slate-600 dark:text-slate-300 text-center bg-white dark:bg-slate-800 py-6 px-12 w-1/2 shadow-lg rounded-xl">You haven't saved any articles yet!</span>
      `;
    }
}
exports.default = new DeleteView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5jNgA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _configJs = require("../config.js");
class ArticleView extends (0, _viewJsDefault.default) {
    #btnParentEl = document.getElementById("btn-parent");
    article;
    upload(handler) {
        const thisObject = this;
        this.form?.addEventListener("submit", function(e) {
            e.preventDefault();
            const dataArr = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataArr);
            // - Close modal and delete starter message
            thisObject.togglePublishModal();
            thisObject.clearMessage();
            // - Create NEW article
            thisObject.article = data;
            thisObject.article.date = thisObject.#date();
            thisObject.article.id = thisObject.#getRandomNumber();
            thisObject.#clearInput();
            thisObject.render(data);
            handler();
        });
    }
    #clearInput() {
        const inputElements = document.querySelectorAll(".input-element");
        inputElements.forEach((el)=>el.value = "");
    }
    #getRandomNumber() {
        return Math.round(Math.random() * ((0, _configJs.MAX) - (0, _configJs.MIN)) + (0, _configJs.MIN));
    }
    render(data) {
        this.#btnParentEl?.insertAdjacentHTML("afterend", this.#generateMarkup(data));
    }
    #date() {
        const now = new Date();
        const options = {
            day: "numeric",
            month: "long",
            year: "numeric"
        };
        const locale = navigator.language;
        return new Intl.DateTimeFormat(locale, options).format(now);
    }
    #generateMarkup(data) {
        return `    
         <article 
         id="${data.id}"
         class="article-element relative flex flex-col justify-self-center w-1/2 gap-8 px-24 py-20 pb-12 mt-10 2xl:w-2/3 xl:w-2/3 lg:w-3/4 md:pt-16 md:pb-10 md:px-12 md:w-full sm:gap-6 sm:mt-6 sm:p-8 sm:pb-6 sm:px-6 bg-[#ebeff5] dark:bg-slate-600 "
         style="transition: all 0.4s">
            <div class="flex flex-col gap-2 sm:gap-2">
               <h2 class="article-h2 text-7xl sm:text-6xl pb-2 sm:pb-0 bg-gradient-to-r from-slate-600 to-[#7a75aa] dark:from-slate-200 dark:to-[#d2cfe4]" style="
               background-clip: text;
               -webkit-text-fill-color: transparent;
               ">${data.title}
               </h2>
               <h3 class="delete-h3 text-3xl text-slate-400 dark:text-slate-400 sm:text-2xl">${data.description}
               </h3>
            </div>

            <div id="bookmarks" class="bookmarks absolute top-[-9px] right-6 2xl:top-[-10px] md:right-10 sm:top-[-9px] sm:right-1">
               <img class="bookmark-thin cursor-pointer w-14 h-14 2xl:w-16 2xl:h-16 sm:w-14 sm:h-14" src="../../src/img/bookmark.png" alt="">
               <img class="bookmark-full hidden cursor-pointer w-14 h-14 2xl:w-16 2xl:h-16 sm:w-14 sm:h-14" src="../../src/img/bookmark-filled.png" alt="">
            </div>
            
            <div
               class="a-div mt-2 sm:mt-0 h-[1px] bg-gradient-to-r from-slate-400 to-slate-200 to-100% dark:from-slate-400 dark:to-slate-600"
            ></div>

            <span class="delete-span mt-[-12px] sm:mt-[-20px] text-slate-500 dark:text-slate-300 sm:text-base">Posted on ${data.date}</span>


            <img class="delete-img"  src="${data.imageURL}" alt="">

            <p class="delete-p text-3xl sm:leading-7 whitespace-pre-line text-slate-600 dark:text-slate-100 sm:text-xl sm:text-slate-700" style="font-family: 'Cormorant Garamond', serif;">${data.content}
            </p>

            <div
                  class="h-[1px] bg-gradient-to-l from-slate-400 to-slate-200 to-100% dark:from-slate-400 dark:to-slate-600"
               ></div>


            <div class="flex justify-end gap-8 sm:mt-2">          
               <button
               id="delete-btn"
               class="delete-btn text-4xl sm:text-3xl sm:mt-[-16px] transition duration-150 border-b-2 dark:text-redhover hover:text-redhover text-red2 border-b-transparent hover:border-b-redhover"
               >
               Delete
            </button>
         </div>
         </article>
      `;
    }
}
exports.default = new ArticleView();

},{"./view.js":"bWlJ9","../config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7YaI3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class BookmarkView extends (0, _viewJsDefault.default) {
    dropdownParent = document.querySelector(".bookmark-parent");
    dropdownBtn = document.querySelector(".dropdown-btn");
    bookmarkContainer = document.querySelector(".bookmark-container");
    dropdownItems = [];
    bookmarkH2s = [];
    articleH2;
    renderBookmarks(bookmarkObjects) {
        bookmarkObjects.forEach((obj)=>{
            if (!obj.rendered) {
                this.#render(obj);
                obj.rendered = true;
            }
        });
    }
    toggleDropdown(bookmarks) {
        const thisObject = this;
        thisObject.renderBookmarkMessage();
        this.dropdownBtn?.addEventListener("click", function() {
            // - Check if any bookmarks exist
            if (bookmarks.length === 0) {
                thisObject.bookmarkContainer.classList.toggle("dropdown-active");
                thisObject.dropdownBtn.classList.add("focus:dark:brightness-150");
                thisObject.dropdownBtn.classList.add("focus:brightness-50");
                thisObject.exitDropdown();
                return;
            }
            const bookmarkMsg = document.querySelector(".bookmark-message");
            bookmarkMsg?.remove();
            thisObject.bookmarkContainer.classList.toggle("dropdown-active");
            thisObject.dropdownBtn.classList.add("focus:dark:brightness-150");
            thisObject.dropdownBtn.classList.add("focus:brightness-50");
            thisObject.exitDropdown();
        });
    }
    renderBookmarkMessage() {
        this.dropdownParent?.insertAdjacentHTML("afterend", this.#generateBookmarkMessage());
    }
    #generateBookmarkMessage() {
        return `
         <span class="bookmark-message select-none border-2 border-slate-300 dark:border-transparent text-3xl text-slate-600 dark:text-slate-300 text-center bg-white dark:bg-slate-800 py-6 px-12 w-1/2 shadow-lg rounded-xl sm:w-full">You haven't saved any articles yet!</span>
      `;
    }
    exitDropdown() {
        const thisObject = this;
        // - Remove focus on container mouseleave
        this.bookmarkContainer.addEventListener("mouseleave", function() {
            thisObject.bookmarkContainer.classList.remove("dropdown-active");
            thisObject.dropdownBtn.classList.remove("focus:dark:brightness-150");
            thisObject.dropdownBtn.classList.remove("focus:brightness-50");
        });
    }
    persistBookmarkIcon(articles) {
        const theArticles = articles.filter((article)=>article.isBookmarked === true);
        const ids = theArticles.map((article)=>article.id);
        const allArticles = [
            ...document.getElementsByTagName("article")
        ];
        const articleIDs = allArticles.map((article)=>+article.id);
        const savedArticles = articleIDs.filter((articleID)=>ids.includes(articleID));
        const articleStringsID = savedArticles.map((article)=>article.toString());
        articleStringsID.map((currentStringID)=>{
            const currentMarkup = document.getElementById(`${currentStringID}`);
            // - Change icon
            const bookmarkBtnThin = currentMarkup.querySelector(".bookmark-thin");
            const bookmarkBtnFull = currentMarkup.querySelector(".bookmark-full");
            bookmarkBtnThin.classList.add("hidden");
            bookmarkBtnFull.classList.remove("hidden");
            // - Change article color
            if (currentMarkup.classList.contains("dark:bg-slate-600")) {
                currentMarkup.classList.remove("dark:bg-slate-600");
                currentMarkup.classList.add("dark:bg-[#404d5f]");
            }
            if (currentMarkup.classList.contains("bg-[#ebeff5]")) {
                currentMarkup.classList.remove("bg-[#ebeff5]");
                currentMarkup.classList.add("bg-slate-200");
            }
        });
    }
    createBookmark(handleAdd, handleDelete) {
        window.addEventListener("click", (e)=>{
            if (e.target.closest("#bookmarks")) {
                const bookmarks = e.target.closest("#bookmarks");
                const bookmarkBtnThin = bookmarks.querySelector(".bookmark-thin");
                const bookmarkBtnFull = bookmarks.querySelector(".bookmark-full");
                const articleMarkup = bookmarks.closest(".article-element");
                if (bookmarkBtnFull.classList.contains("hidden")) {
                    // - Change icon
                    bookmarkBtnThin.classList.add("hidden");
                    bookmarkBtnFull.classList.remove("hidden");
                    // - Change article color
                    if (articleMarkup.classList.contains("dark:bg-slate-600")) {
                        articleMarkup.classList.remove("dark:bg-slate-600");
                        articleMarkup.classList.add("dark:bg-[#404d5f]");
                    }
                    if (articleMarkup.classList.contains("bg-[#ebeff5]")) {
                        articleMarkup.classList.remove("bg-[#ebeff5]");
                        articleMarkup.classList.add("bg-slate-200");
                    }
                    // - Get header content
                    this.articleH2 = articleMarkup.querySelector(".article-h2").innerText;
                    handleAdd();
                    // - Get bookmark headers
                    const dropdownItem = document.querySelector(".dropdown-item");
                    this.dropdownItems?.push(dropdownItem);
                    this.bookmarkH2s = this.dropdownItems.map((item)=>item?.querySelector(".bookmark-h2").textContent.trim());
                //
                } else {
                    // - Get bookmark headers
                    const dropdownItem = document.querySelector(".dropdown-item");
                    if (!this.dropdownItems.includes(dropdownItem)) this.dropdownItems.push(dropdownItem);
                    this.bookmarkH2s = this.dropdownItems.map((item)=>item?.querySelector(".bookmark-h2").textContent.trim());
                    // - Change icon
                    bookmarkBtnFull.classList.add("hidden");
                    bookmarkBtnThin.classList.remove("hidden");
                    // - Change article color
                    if (!articleMarkup.classList.contains("dark:bg-slate-600")) {
                        articleMarkup.classList.remove("dark:bg-[#404d5f]");
                        articleMarkup.classList.add("dark:bg-slate-600");
                    }
                    if (!articleMarkup.classList.contains("bg-[#ebeff5]")) {
                        articleMarkup.classList.add("bg-[#ebeff5]");
                        articleMarkup.classList.remove("bg-slate-200");
                    }
                    // - Get header content
                    this.articleH2 = articleMarkup.querySelector(".article-h2").innerText;
                    const [filteredString] = this.bookmarkH2s.filter((bookmarkH2)=>bookmarkH2 === this.articleH2);
                    const [theItem] = this.dropdownItems.filter((item)=>item?.querySelector(".bookmark-h2").textContent.trim() === filteredString);
                    // - Delete currently clicked item's markup from this array
                    const [theBookmarkMarkup] = this.dropdownItems.filter((bookmark)=>bookmark.querySelector(".bookmark-h2").textContent.trim() === this.articleH2);
                    const theBookmarkMarkupIndex = this.dropdownItems.indexOf(theBookmarkMarkup);
                    this.dropdownItems.splice(theBookmarkMarkupIndex, 1);
                    // - Delete clicked bookmark from bookmarkh2s array
                    const [theBookmark] = this.bookmarkH2s.filter((bookmark)=>bookmark === this.articleH2);
                    const theBookmarkIndex = this.bookmarkH2s.indexOf(theBookmark);
                    this.bookmarkH2s.splice(theBookmarkIndex, 1);
                    // - Delete bookmark
                    handleDelete();
                    theItem?.remove();
                    const bookmarkMsg = document.querySelector(".bookmark-message");
                    if (!bookmarkMsg) this.renderBookmarkMessage();
                }
            }
        });
    }
    #render(data) {
        this.dropdownParent?.insertAdjacentHTML("afterend", this.#generateMarkup(data));
    }
    #generateMarkup(data) {
        return `
         <a href="#${data.id}" class="dropdown-item text-2xl text-slate-300" style="filter: drop-shadow(0 1.5rem 2rem rgba(0, 0, 0, 0.342))">
                  <div class="grid items-center grid-cols-2 transition-all sm:grid-cols-1 hover:brightness-110">
                     <img class="object-cover w-full h-48 sm:h-28" src="${data.imageURL}" alt="">
                     <div class="p-8 bg-slate-50 dark:bg-slate-800 sm:flex sm:flex-col sm:gap-1 sm:px-12 sm:pt-5 sm:pb-7 sm:bg-white">
                        <h2 class="bookmark-h2 text-3xl transition text-slate-500 dark:text-slate-200 sm:text-2xl sm:text-slate-600">${data.title}
                        </h2>
                        <h3 class="text-lg sm:text-base text-slate-400 dark:text-[#a9b5c6]">${data.description}
                        </h3>
                     </div>
                  </div>
               </a>
      `;
    }
}
exports.default = new BookmarkView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hycaY","aenu9"], "aenu9", "parcelRequire6ee7")

//# sourceMappingURL=index.e37f48ea.js.map
