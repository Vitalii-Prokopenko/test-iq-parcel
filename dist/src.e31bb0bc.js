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
})({"js/refs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refs = void 0;
var refs = {
  // Menu
  btnMenuOpen: document.querySelector('.js-open-menu'),
  btnMenuClose: document.querySelector('.js-close-menu'),
  btnContainer: document.querySelector('.js-menu-container'),
  menuMain: document.querySelector('.js-menu-main'),
  menuInfo: document.querySelector('.js-menu-info'),
  menuTest: document.querySelector('.js-menu-test'),
  // Start test
  btnStartTest: document.querySelectorAll('.js-start'),
  appBody: document.querySelector('body'),
  // Header
  headerWrap: document.querySelector('.js-header-wrap'),
  // Main
  appMain: document.querySelector('.app-main'),
  // Footer
  appFooter: document.querySelector('.app-footer')
};
exports.refs = refs;
},{}],"js/menu.js":[function(require,module,exports) {
"use strict";

var _refs = require("./refs");
var handleOpenMenuClick = function handleOpenMenuClick() {
  _refs.refs.btnContainer.classList.add('is-open');
  _refs.refs.btnMenuOpen.setAttribute('aria-expanded', true);
  _refs.refs.btnMenuOpen.removeEventListener('click', handleOpenMenuClick);
  _refs.refs.btnMenuClose.addEventListener('click', handleCloseMenuClick);
  _refs.refs.menuMain.addEventListener('click', handleCloseMenuClick);
  _refs.refs.menuInfo.addEventListener('click', handleCloseMenuClick);
  _refs.refs.menuTest.addEventListener('click', handleCloseMenuClick);
};
var handleCloseMenuClick = function handleCloseMenuClick() {
  _refs.refs.btnContainer.classList.remove('is-open');
  _refs.refs.btnMenuOpen.setAttribute('aria-expanded', false);
  _refs.refs.btnMenuClose.removeEventListener('click', handleCloseMenuClick);
  _refs.refs.menuMain.removeEventListener('click', handleCloseMenuClick);
  _refs.refs.menuInfo.removeEventListener('click', handleCloseMenuClick);
  _refs.refs.menuTest.removeEventListener('click', handleCloseMenuClick);
  _refs.refs.btnMenuOpen.addEventListener('click', handleOpenMenuClick);
};
_refs.refs.btnMenuOpen.addEventListener('click', handleOpenMenuClick);
_refs.refs.btnMenuClose.addEventListener('click', handleCloseMenuClick);
_refs.refs.menuMain.addEventListener('click', handleCloseMenuClick);
_refs.refs.menuInfo.addEventListener('click', handleCloseMenuClick);
_refs.refs.menuTest.addEventListener('click', handleCloseMenuClick);
},{"./refs":"js/refs.js"}],"js/test-items.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testItems = void 0;
var testItems = [{
  itemNumber: 1,
  title: 'Ваш пол:',
  image: [],
  type: 'sex',
  style: 'list',
  answers: ['мужчина', 'женщина']
}, {
  itemNumber: 2,
  title: 'Укажите ваш возраст:',
  image: [],
  type: 'age',
  style: 'list',
  answers: ['До 18', 'От 18 до 28', 'От 29 до 35', 'От 36']
}, {
  itemNumber: 3,
  title: 'Выберите лишнее:',
  image: [],
  type: 'building',
  style: 'list',
  answers: ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина']
}, {
  itemNumber: 4,
  title: 'Продолжите числовой ряд: 18 20 24 32',
  image: [],
  type: 'number',
  style: 'list',
  answers: [62, 48, 74, 57, 60, 77]
}, {
  itemNumber: 5,
  title: 'Выберите цвет, который сейчас наиболее Вам приятен:',
  image: [],
  type: 'first-color',
  style: 'matrix',
  answers: ['#A8A8A8', '#0000A9', '#00A701', '#F60100', '#FDFF19', '#A95403', '#000000', '#850068', '#46B3AC']
}, {
  itemNumber: 6,
  title: 'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
  image: [],
  type: 'second-color',
  style: 'matrix',
  answers: ['#A8A8A8', '#0000A9', '#00A701', '#F60100', '#FDFF19', '#A95403', '#000000', '#850068', '#46B3AC']
}, {
  itemNumber: 7,
  title: 'Какой из городов лишний?',
  image: [],
  type: 'city',
  style: 'list',
  answers: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава']
}, {
  itemNumber: 8,
  title: 'Выберите правильную фигуру из четырёх пронумерованных.',
  image: ['./images/webp/test8-img.webp', './images/webp/test8-img-@2x.webp', './images/png/test8-img.jpg', './images/png/test8-img-@2x.jpg'],
  type: 'figurine',
  style: 'cubes',
  answers: [1, 2, 3, 4]
}, {
  itemNumber: 9,
  title: 'Вам привычнее и важнее:',
  image: [],
  type: 'mindset',
  style: 'list',
  answers: ['Наслаждаться каждой минутой проведенного времени', 'Быть устремленными мыслями в будущее', 'Учитывать в ежедневной практике прошлый опыт']
}, {
  itemNumber: 10,
  title: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:',
  image: ['./images/webp/test10-img.webp', './images/webp/test10-img-@2x.webp', './images/png/test10-img.jpg', './images/png/test10-img-@2x.jpg'],
  type: 'viewpoint',
  style: 'list',
  answers: ['Оно остроконечное', 'Оно устойчиво', 'Оно находится в состоянии равновесия']
}, {
  itemNumber: 11,
  title: 'Вставьте подходящее число',
  image: ['./images/webp/test11-img.webp', './images/webp/test11-img-@2x.webp', './images/png/test11-img.jpg', './images/png/test11-img-@2x.jpg'],
  type: 'next-number',
  style: 'cubes',
  answers: [34, 36, 53, 44, 66, 42]
}];
exports.testItems = testItems;
},{}],"js/render-test-header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTestHeaderWrap = void 0;
var _refs = require("./refs");
// Function to render header elements for test

var renderTestHeaderWrap = function renderTestHeaderWrap() {
  var markupTestHeaderWrap = "\n    <picture class=\"header__brain-picture\">\n            <source\n              srcset=\"./images/webp/brain.webp 1x, ./images/webp/brain-@2x.webp 2x\"\n              type=\"image/webp\"\n            />\n            <source\n              srcset=\"./images/png/brain.png 1x, ./images/png/brain-@2x.png 2x\"\n              type=\"image/png\"\n            />\n            <img\n              class=\"header__brain-img\"\n              src=\"./images/png/brain.png\"\n              alt=\"brain\"\n              width=\"46\"\n              height=\"46\"\n            />\n          </picture>\n          <p class=\"header__text\">\u0442\u0435\u0441\u0442 \u043D\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 IQ</p>\n          ";
  _refs.refs.headerWrap.insertAdjacentHTML('beforeend', markupTestHeaderWrap);
};
exports.renderTestHeaderWrap = renderTestHeaderWrap;
},{"./refs":"js/refs.js"}],"js/render-test-completion-track.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markupTestCompletionTrack = void 0;
var _refs = require("./refs");
// Function to render test completion track

// export const renderTestCompletionTrack = () => {
//   const markupTestCompletionTrack = `
//         <div class="test__track-wrap">
//           <div class="test__track"></div>
//           <div class="test__track-completion"></div>
//         </div>
//           `;
//   refs.appMain.insertAdjacentHTML('beforeend', markupTestCompletionTrack);
// };

var markupTestCompletionTrack = "\n        <div class=\"test__track-wrap\">\n          <div class=\"test__track\"></div>\n          <div class=\"test__track-completion\"></div>\n        </div>\n          ";
exports.markupTestCompletionTrack = markupTestCompletionTrack;
},{"./refs":"js/refs.js"}],"js/start-test.js":[function(require,module,exports) {
"use strict";

var _refs = require("./refs");
var _renderTestHeader = require("./render-test-header");
var _renderTestCompletionTrack = require("./render-test-completion-track");
var handleClickOnStartBtn = function handleClickOnStartBtn(event) {
  var target = event.target;
  console.log(target);
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log('hello');
  // Clean main and footer
  _refs.refs.appMain.innerHTML = '';
  _refs.refs.appFooter.innerHTML = '';
  // Render header for test
  (0, _renderTestHeader.renderTestHeaderWrap)();
  // Render progress bar
  //   renderTestCompletionTrack();
  _renderTestCompletionTrack.renderTestCompletionTrack;
};
var handleClickOnMenuStartLink = function handleClickOnMenuStartLink() {
  console.log('hello');
  // Clean main and footer
  _refs.refs.appMain.innerHTML = '';
  _refs.refs.appFooter.innerHTML = '';
  // Render header for test
  (0, _renderTestHeader.renderTestHeaderWrap)();
  // Render progress bar
  //   renderTestCompletionTrack();
  _renderTestCompletionTrack.renderTestCompletionTrack;
};
_refs.refs.appBody.addEventListener('click', handleClickOnStartBtn);
_refs.refs.menuTest.addEventListener('click', handleClickOnMenuStartLink);
},{"./refs":"js/refs.js","./render-test-header":"js/render-test-header.js","./render-test-completion-track":"js/render-test-completion-track.js"}],"js/render-test-question.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTestQuestion = void 0;
var _refs = require("./refs");
var _renderTestCompletionTrack = require("./render-test-completion-track");
// Function to render test question

var renderTestQuestion = function renderTestQuestion() {
  var markupTestQuestion = "\n    <section class=\"test\">\n      <div class=\"container test__container\">\n      ".concat(_renderTestCompletionTrack.markupTestCompletionTrack, "\n      </div>\n    </section>\n          ");
  _refs.refs.appMain.insertAdjacentHTML('beforeend', markupTestQuestion);
};
exports.renderTestQuestion = renderTestQuestion;
},{"./refs":"js/refs.js","./render-test-completion-track":"js/render-test-completion-track.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./js/menu");
require("./js/refs");
require("./js/test-items");
require("./js/start-test");
require("./js/render-test-header");
require("./js/render-test-question");
require("./js/render-test-completion-track");
},{"./js/menu":"js/menu.js","./js/refs":"js/refs.js","./js/test-items":"js/test-items.js","./js/start-test":"js/start-test.js","./js/render-test-header":"js/render-test-header.js","./js/render-test-question":"js/render-test-question.js","./js/render-test-completion-track":"js/render-test-completion-track.js"}],"C:/Users/Igor/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50671" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["C:/Users/Igor/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map