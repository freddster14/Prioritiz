/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/check-all.svg */ "./src/img/check-all.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0px;\n    padding: 0px;\n    box-sizing:border-box;\n    font-family: 'Libre Baskerville', serif;\n}\n.main-content{\n    display: grid;\n    height: 100vh;\n    width: 100%;\n    grid-template-columns: 25% 75%;\n    grid-template-rows: auto 1fr;\n    background-color: #bbbbbb;\n}\n\n#title{\n    grid-column: 1/-1;\n    display: flex;\n    background-color: #f0f0f0ee;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px 2px 7px rgba(22, 22, 22, 0.411);\n    z-index: 1;\n}\nh1{\n    font-size: 45px;\n    padding: 30px 20px;\n    font-weight: 700;\n \n}\n#title img{width: 80px;}\n\n\n.folder-container{\n    margin-left: 10px;\n    \n}\n\n#folder-header{\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 2px;\n}\n\n.folder-container div.active{\n    box-shadow:1px 1px 10px 1px rgba(0, 0, 0, 0.411);\n\n}\ndiv h2 {\n    font-size: 30px;\n    color: #222222;\n}\n\n/* Trash Can in Folders Img */\ndiv div img{\n    width: 30px;\n    filter: drop-shadow(4px 3px 2px rgba(0, 0, 0, 0.308));\n}\n\n\n\n.main-folder-container{\n    padding: 20px 25px;\n    background-color: #e0e0e0;\n}\n\n.folder-add-container{\n    display: flex;\n    margin-top: 10px;\n    padding-top: 10px;\n    border-top: 1px solid gray;\n    font-size: 20px;\n    justify-content: space-between;\n    align-items: center;\n    transition: 0.7s;\n}\n\n#display-form-btn, #todo-btn{\n    border-radius: 20px;\n    font-size: 23px;\n    width: 30px;\n    height: 30px;\n    border: 2px solid black;\n    background-color: rgba(0, 134, 13, 0.281);\n}\n\n#form-folder{\n    background-color: transparent;\n    width: 0;\n    border-radius: 10px;\n    transition: 0.7s;\n}\n\n#form-folder.active{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    height: auto;\n    gap: 10px;\n    margin: 17px 0px;\n}\n\n.form-folder-input-box{\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    gap: 10px;\n}\n\n#form-folder input{\n    height: 23px;\n    font-size: 18px;\n    padding-left: 3px;\n    background-color: transparent;\n    border: none;\n    display: none;\n    border-left: 2px solid black;\n}\n#form-folder input.toggle{\n    display: inline;\n}\n\n\n#form-folder button{\n    border: none;\n    background-color: transparent;\n    display: none;\n    \n}\n#form-folder button.toggle{\n    border: none;\n    background-color: transparent;\n    display: inline;\n    \n}\n\n#form-folder button img{\n    width: 35px;\n}\n\n\n\n\n#task-container{\n    display: none;\t\n    align-items: center;\n    max-width: 2000px;\n    flex-direction: column;\n}\n\n/* \"Task(s)\" */\n#task-container h2{\n    width: 80%;\n    text-align: center;\n    margin-top: 10px;\n}\n\n\n\n\n#todo-list{\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n    margin: 10px 0px;\n\n}\n#todo-list li{\n    display: flex;\n    gap: 40px;\n    width: 100%;\n    border-radius: 7px;\n    padding: 1px 4px;\n    align-items: center;\n    font-size: 30px;\n}\nli input{\n    -webkit-appearance: none;\n\tbox-shadow: 1px 2px 0px 0.5px rgba(0, 0, 0, 0.151), inset -2px -2px 1px rgba(0, 0, 0, 0.199);\n\tpadding: 9px;\n    margin-left: 2px;\n    width: 25px;\n    height: 24px;\n\tborder-radius: 35px;\n\tdisplay: inline-block;\n\tposition: relative;\n    cursor: pointer;\n}\n\n\n\nli input:checked{\n    background-color: #ffffff;\n\tcolor: #ffffff;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: 20px;\n    background-position: center;\n    background-repeat: no-repeat;\n\n}\n\n\n#todo-list li p{\n    font-size: 30px;\n}\n\n.todo-title-delete{\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n\n\n#form-todo{\n    margin-bottom: 20px;\n    display: flex;\n    width: 80%;\n    justify-content: space-between;\n}\n\n.title-priority-container{\n    display: flex;\n}\n\n#todo-title{\n    font-size: 28px;\n    appearance: none;\n    background-color: transparent;\n    border: none;\n    padding-left: 5px;\n    border-left: 2px solid black;\n}\n\n#todo-priority{\n    background-color: transparent;\n    border: none;\n    font-size: 28px;\n\n}\n\n#todo-btn{\n\n}\n\n\n.low-priority {\n    background-color: rgb(109, 230, 121);\n}\n\n.medium-priority{ background-color: rgb(231, 172, 61);}\n\n.high-priority{background-color: rgb(185, 72, 72);}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');\n\n*{\n    margin: 0px;\n    padding: 0px;\n    box-sizing:border-box;\n    font-family: 'Libre Baskerville', serif;\n}\n.main-content{\n    display: grid;\n    height: 100vh;\n    width: 100%;\n    grid-template-columns: 25% 75%;\n    grid-template-rows: auto 1fr;\n    background-color: #bbbbbb;\n}\n\n#title{\n    grid-column: 1/-1;\n    display: flex;\n    background-color: #f0f0f0ee;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px 2px 7px rgba(22, 22, 22, 0.411);\n    z-index: 1;\n}\nh1{\n    font-size: 45px;\n    padding: 30px 20px;\n    font-weight: 700;\n \n}\n#title img{width: 80px;}\n\n\n.folder-container{\n    margin-left: 10px;\n    \n}\n\n#folder-header{\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 2px;\n}\n\n.folder-container div.active{\n    box-shadow:1px 1px 10px 1px rgba(0, 0, 0, 0.411);\n\n}\ndiv h2 {\n    font-size: 30px;\n    color: #222222;\n}\n\n/* Trash Can in Folders Img */\ndiv div img{\n    width: 30px;\n    filter: drop-shadow(4px 3px 2px rgba(0, 0, 0, 0.308));\n}\n\n\n\n.main-folder-container{\n    padding: 20px 25px;\n    background-color: #e0e0e0;\n}\n\n.folder-add-container{\n    display: flex;\n    margin-top: 10px;\n    padding-top: 10px;\n    border-top: 1px solid gray;\n    font-size: 20px;\n    justify-content: space-between;\n    align-items: center;\n    transition: 0.7s;\n}\n\n#display-form-btn, #todo-btn{\n    border-radius: 20px;\n    font-size: 23px;\n    width: 30px;\n    height: 30px;\n    border: 2px solid black;\n    background-color: rgba(0, 134, 13, 0.281);\n}\n\n#form-folder{\n    background-color: transparent;\n    width: 0;\n    border-radius: 10px;\n    transition: 0.7s;\n}\n\n#form-folder.active{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    height: auto;\n    gap: 10px;\n    margin: 17px 0px;\n}\n\n.form-folder-input-box{\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    gap: 10px;\n}\n\n#form-folder input{\n    height: 23px;\n    font-size: 18px;\n    padding-left: 3px;\n    background-color: transparent;\n    border: none;\n    display: none;\n    border-left: 2px solid black;\n}\n#form-folder input.toggle{\n    display: inline;\n}\n\n\n#form-folder button{\n    border: none;\n    background-color: transparent;\n    display: none;\n    \n}\n#form-folder button.toggle{\n    border: none;\n    background-color: transparent;\n    display: inline;\n    \n}\n\n#form-folder button img{\n    width: 35px;\n}\n\n\n\n\n#task-container{\n    display: none;\t\n    align-items: center;\n    max-width: 2000px;\n    flex-direction: column;\n}\n\n/* \"Task(s)\" */\n#task-container h2{\n    width: 80%;\n    text-align: center;\n    margin-top: 10px;\n}\n\n\n\n\n#todo-list{\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n    margin: 10px 0px;\n\n}\n#todo-list li{\n    display: flex;\n    gap: 40px;\n    width: 100%;\n    border-radius: 7px;\n    padding: 1px 4px;\n    align-items: center;\n    font-size: 30px;\n}\nli input{\n    -webkit-appearance: none;\n\tbox-shadow: 1px 2px 0px 0.5px rgba(0, 0, 0, 0.151), inset -2px -2px 1px rgba(0, 0, 0, 0.199);\n\tpadding: 9px;\n    margin-left: 2px;\n    width: 25px;\n    height: 24px;\n\tborder-radius: 35px;\n\tdisplay: inline-block;\n\tposition: relative;\n    cursor: pointer;\n}\n\n\n\nli input:checked{\n    background-color: #ffffff;\n\tcolor: #ffffff;\n    background-image: url(\"img/check-all.svg\");\n    background-size: 20px;\n    background-position: center;\n    background-repeat: no-repeat;\n\n}\n\n\n#todo-list li p{\n    font-size: 30px;\n}\n\n.todo-title-delete{\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n\n\n#form-todo{\n    margin-bottom: 20px;\n    display: flex;\n    width: 80%;\n    justify-content: space-between;\n}\n\n.title-priority-container{\n    display: flex;\n}\n\n#todo-title{\n    font-size: 28px;\n    appearance: none;\n    background-color: transparent;\n    border: none;\n    padding-left: 5px;\n    border-left: 2px solid black;\n}\n\n#todo-priority{\n    background-color: transparent;\n    border: none;\n    font-size: 28px;\n\n}\n\n#todo-btn{\n\n}\n\n\n.low-priority {\n    background-color: rgb(109, 230, 121);\n}\n\n.medium-priority{ background-color: rgb(231, 172, 61);}\n\n.high-priority{background-color: rgb(185, 72, 72);}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/folder.js":
/*!***********************!*\
  !*** ./src/folder.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Folder": () => (/* binding */ Folder),
/* harmony export */   "createFolder": () => (/* binding */ createFolder),
/* harmony export */   "displayFolder": () => (/* binding */ displayFolder),
/* harmony export */   "selectedFolder": () => (/* binding */ selectedFolder)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _img_trash_can_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/trash-can.svg */ "./src/img/trash-can.svg");




const todoListContainer = document.querySelector("#task-container");
const inputDescription = document.querySelector("#todo-description")
const inputFolder = document.querySelector("#folder-input");
const addFolderBtn = document.querySelector("#folder-btn");
const inputTitle = document.querySelector("#todo-title");
const showFolderFormBtn = document.querySelector("#display-form-btn")
const form = document.querySelector("#form-folder");

_index_js__WEBPACK_IMPORTED_MODULE_0__["default"] = JSON.parse(localStorage.getItem('folders'));


let addFolder = false
let i = -1
let selectedFolder = undefined

addFolderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(inputFolder.value == '' || inputFolder.value == "Common Name Found") return;
    if(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].some(folder => folder.name == inputFolder.value)) {
        setTimeout(() => inputFolder.value = "", 2000);
        return inputFolder.value = "Common Name Found"
    };
    addFolder = true;
    createFolder(inputFolder.value, inputDescription.value);
    addFolder = false;
    form.classList.toggle("active");
    addFolderBtn.classList.toggle("toggle");
    form.querySelectorAll("input").forEach(el => el.classList.toggle('toggle'))
    showFolderFormBtn.textContent = "+"
    showFolderFormBtn.style.backgroundColor = "rgba(0, 134, 13, 0.281)"
    localStorage.setItem('folders', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]))
});

showFolderFormBtn.addEventListener('click', () => {
    form.classList.toggle("active");
    addFolderBtn.classList.toggle("toggle");
    form.querySelectorAll("input").forEach(el => el.classList.toggle('toggle'))
    console.log(form.querySelectorAll("input"))
    if(showFolderFormBtn.textContent == "+"){
    showFolderFormBtn.textContent = "✕"
    showFolderFormBtn.style.backgroundColor = "rgb(185, 72, 72)"
    }else {
    showFolderFormBtn.textContent = "+";
     showFolderFormBtn.style.backgroundColor = "rgba(0, 134, 13, 0.281)"
    }
})



class Folder{
    constructor(name, description, id, todo){
        this.name = name;
        this.description = description;
        this.id = id;
        this.todo = todo;
    }

    addTodo(title, priority, complete, id){
        if(selectedFolder == undefined) return;
        let newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo(title, priority, complete)
        _index_js__WEBPACK_IMPORTED_MODULE_0__["default"][id].todo.push(newTodo)
        displayFolder(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"][id].todo);
        inputTitle.value = "";
        localStorage.setItem('folders', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]))
        return newTodo
    }
    

}
let newStorage = [];
let prevActive = null;

function createFolder(folderTitle, description, todo){
    const folderContainer = document.querySelector(".folder-container");
    const currentFolder = document.createElement("div");
    const folderHeader = document.createElement("div");
    const deleteFolder = new Image();
    const folderText = document.createElement("h2");
    const folderDescription = document.createElement("p");

    if(_todo_js__WEBPACK_IMPORTED_MODULE_1__.exampleFolder){

    }
    // makes new folder have a empty todo: array
    if (todo == undefined) todo = [];
    let newFolder = new Folder(folderTitle, description, getId(i), todo);

  //  console.log(newFolder)
    let deleted = false;
    newStorage.push(newFolder)
   // console.table(newStorage)
    i = getId(i);
    currentFolder.id = "folder" + i;

    deleteFolder.addEventListener('click', () => {
        
        deleted = true;
        let newStorage = _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].filter((r) => { return r.name != newFolder.name});
        _index_js__WEBPACK_IMPORTED_MODULE_0__["default"] = newStorage

        i = -1
        refreshFolder()

        localStorage.setItem('folders', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]))

        console.log(newStorage)
        console.log(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])

        })
    
    

    deleteFolder.src = _img_trash_can_svg__WEBPACK_IMPORTED_MODULE_2__;

    folderHeader.id = "folder-header";

    folderText.textContent = folderTitle;
    folderDescription.textContent = description;

    folderContainer.appendChild(currentFolder);
    currentFolder.appendChild(folderHeader);
    folderHeader.appendChild(folderText);
    folderHeader.appendChild(deleteFolder);
    currentFolder.appendChild(folderDescription);
    
    inputDescription.value = "";
    inputFolder.value = "";

    if(addFolder)_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].push(newFolder);
    
    currentFolder.addEventListener('click', (event) => {
        event.preventDefault();
    //prevents the folder which is to be deleted from opening
        if(deleted) return deleted = false;
    //prevents the folder to re-open
        if(selectedFolder == newFolder) return;
        displayFolder(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"][newFolder.id].todo);
        currentFolder.classList.toggle("active")
        if(prevActive !== null) prevActive.classList.toggle("active");
        prevActive = currentFolder;
        console.log(prevActive)
        selectedFolder = newFolder;
        todoListContainer.style.display = "flex"
    });

    localStorage.setItem('folders', JSON.stringify(newStorage))

    
}

function displayFolder(todoList){
    let todoListElement = document.getElementById("todo-list");
	todoListElement.innerHTML = "";
    console.log(todoList)
	for (let i = 0; i < todoList.length; i++) {
		let listItemElement = document.createElement("li");
        let listItemText = document.createElement("p");
        let listItemCompletion = document.createElement('input');
        let listItemDeleteBtn = new Image();
        let listContainer = document.createElement('div');

        if(todoList[i].priority == "Low"){listItemCompletion.classList.add("low-priority")}
        else if(todoList[i].priority == "Medium"){listItemCompletion.classList.add("medium-priority")}
        else{listItemCompletion.classList.add("high-priority")};

        listItemCompletion.setAttribute("type", "checkbox");
        listItemCompletion.addEventListener("change", () => {
            if(todoList[i].complete){todoList[i].complete = false;
            }else{todoList[i].complete = true};

            if(todoList[i].complete){
                listItemDeleteBtn.style.display = "block";
                listItemElement.style.boxShadow = "0 0 7px 2px rgba(0, 0, 0, 0.311)";
            }else{
                listItemDeleteBtn.style.display = "none";
                listItemElement.style.boxShadow = "none";            };

            localStorage.setItem('folders', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
        })

        listItemDeleteBtn.addEventListener('click', () => {
            ;(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.deleteTodo)(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"][selectedFolder.id].todo[i]);

        })

        listItemDeleteBtn.classList.add("todo-delete")
        listContainer.classList.add("todo-title-delete")
        
		listItemText.textContent = todoList[i].title;
        listItemCompletion.checked = todoList[i].complete;
        listItemDeleteBtn.src = _img_trash_can_svg__WEBPACK_IMPORTED_MODULE_2__;
        // Adds CSS to Task when displaying folder
        if(todoList[i].complete){
            listItemDeleteBtn.style.display = "block";
            listItemElement.style.boxShadow = "2px 0 7px 1px rgba(0, 0, 0, 0.311)";
        }else{
            listItemDeleteBtn.style.display = "none";
            listItemElement.style.boxShadow = "none";
        };

		todoListElement.appendChild(listItemElement);
        listItemElement.appendChild(listItemCompletion);
        listItemElement.appendChild(listContainer);
        listContainer.appendChild(listItemText);
        listContainer.appendChild(listItemDeleteBtn);

	}
}


function getId(i){
    i++;
    return i;
}

function refreshFolder(){
    removeChildren();
    newStorage = [];
    for(let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].length; i++){
        createFolder(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"][i].name, _index_js__WEBPACK_IMPORTED_MODULE_0__["default"][i].description, _index_js__WEBPACK_IMPORTED_MODULE_0__["default"][i].todo)
    }
}

function removeChildren(){
    const folderContainer = document.querySelector(".folder-container");
    while (folderContainer.firstChild){
        folderContainer.removeChild(folderContainer.firstChild)
    }
}







/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exampleFolder": () => (/* binding */ exampleFolder),
/* harmony export */   "folderStorage": () => (/* binding */ folderStorage)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _folder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder.js */ "./src/folder.js");



let folderStorage = [];
let exampleFolder = false;

if(!localStorage.getItem('folders')) {
    populateStorage();
} else {
    importInfo();
}

function populateStorage() {
    localStorage.setItem('folders', JSON.stringify(folderStorage));
    exampleFolder = true
    importInfo();
}

function importInfo() {
    folderStorage = JSON.parse(localStorage.getItem('folders'));
    console.log(folderStorage)
    for(let i = 0; i < folderStorage.length; i++){
        (0,_folder_js__WEBPACK_IMPORTED_MODULE_1__.createFolder)(folderStorage[i].name, folderStorage[i].description, folderStorage[i].todo)
    }
}


console.log(localStorage)



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo),
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _folder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder.js */ "./src/folder.js");



const addTodoBtn = document.querySelector("#todo-btn");
const todoPriority = document.querySelector("#todo-priority");
const inputTitle = document.querySelector("#todo-title");


addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(inputTitle.value == "" || todoPriority.value == "") return
    new _folder_js__WEBPACK_IMPORTED_MODULE_1__.Folder().addTodo(inputTitle.value, todoPriority.value, false, _folder_js__WEBPACK_IMPORTED_MODULE_1__.selectedFolder.id);
});

class Todo{
    constructor(title, priority, complete){
        this.title = title;
        this.priority = priority;
        this.complete = complete
    }
    
    
}



function deleteTodo(todo){
    console.log(todo)
    const index = _index_js__WEBPACK_IMPORTED_MODULE_0__["default"][_folder_js__WEBPACK_IMPORTED_MODULE_1__.selectedFolder.id].todo.indexOf(todo);
    console.log(index)
    if(index > -1){
        _index_js__WEBPACK_IMPORTED_MODULE_0__["default"][_folder_js__WEBPACK_IMPORTED_MODULE_1__.selectedFolder.id].todo.splice(index, 1);
    }
    localStorage.setItem('folders', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]))
    ;(0,_folder_js__WEBPACK_IMPORTED_MODULE_1__.displayFolder)(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"][_folder_js__WEBPACK_IMPORTED_MODULE_1__.selectedFolder.id].todo)
}




/***/ }),

/***/ "./src/img/check-all.svg":
/*!*******************************!*\
  !*** ./src/img/check-all.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "498fb8e2c7cf437f5146.svg";

/***/ }),

/***/ "./src/img/trash-can.svg":
/*!*******************************!*\
  !*** ./src/img/trash-can.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4a7b26be64c05d0f239.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlIQUFvQztBQUNoRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGlJQUFpSSxNQUFNLG9CQUFvQjtBQUMzSix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsNENBQTRDLGtCQUFrQixtQkFBbUIsNEJBQTRCLDhDQUE4QyxHQUFHLGdCQUFnQixvQkFBb0Isb0JBQW9CLGtCQUFrQixxQ0FBcUMsbUNBQW1DLGdDQUFnQyxHQUFHLFdBQVcsd0JBQXdCLG9CQUFvQixrQ0FBa0MsOEJBQThCLDBCQUEwQixzREFBc0QsaUJBQWlCLEdBQUcsS0FBSyxzQkFBc0IseUJBQXlCLHVCQUF1QixNQUFNLGFBQWEsYUFBYSx3QkFBd0Isd0JBQXdCLFNBQVMsbUJBQW1CLG9CQUFvQixxQ0FBcUMseUJBQXlCLEdBQUcsaUNBQWlDLHVEQUF1RCxLQUFLLFVBQVUsc0JBQXNCLHFCQUFxQixHQUFHLGdEQUFnRCxrQkFBa0IsNERBQTRELEdBQUcsK0JBQStCLHlCQUF5QixnQ0FBZ0MsR0FBRywwQkFBMEIsb0JBQW9CLHVCQUF1Qix3QkFBd0IsaUNBQWlDLHNCQUFzQixxQ0FBcUMsMEJBQTBCLHVCQUF1QixHQUFHLGlDQUFpQywwQkFBMEIsc0JBQXNCLGtCQUFrQixtQkFBbUIsOEJBQThCLGdEQUFnRCxHQUFHLGlCQUFpQixvQ0FBb0MsZUFBZSwwQkFBMEIsdUJBQXVCLEdBQUcsd0JBQXdCLG9CQUFvQiwwQkFBMEIscUNBQXFDLGtCQUFrQixtQkFBbUIsZ0JBQWdCLHVCQUF1QixHQUFHLDJCQUEyQixvQkFBb0IsNkJBQTZCLGlCQUFpQixnQkFBZ0IsR0FBRyx1QkFBdUIsbUJBQW1CLHNCQUFzQix3QkFBd0Isb0NBQW9DLG1CQUFtQixvQkFBb0IsbUNBQW1DLEdBQUcsNEJBQTRCLHNCQUFzQixHQUFHLDBCQUEwQixtQkFBbUIsb0NBQW9DLG9CQUFvQixTQUFTLDZCQUE2QixtQkFBbUIsb0NBQW9DLHNCQUFzQixTQUFTLDRCQUE0QixrQkFBa0IsR0FBRywwQkFBMEIsb0JBQW9CLDRCQUE0Qix3QkFBd0IsNkJBQTZCLEdBQUcsMENBQTBDLGlCQUFpQix5QkFBeUIsdUJBQXVCLEdBQUcscUJBQXFCLGlCQUFpQixvQkFBb0IsNkJBQTZCLDhCQUE4QixlQUFlLHVCQUF1QixLQUFLLGdCQUFnQixvQkFBb0IsZ0JBQWdCLGtCQUFrQix5QkFBeUIsdUJBQXVCLDBCQUEwQixzQkFBc0IsR0FBRyxXQUFXLCtCQUErQixpR0FBaUcsaUJBQWlCLHVCQUF1QixrQkFBa0IsbUJBQW1CLHdCQUF3QiwwQkFBMEIsdUJBQXVCLHNCQUFzQixHQUFHLHlCQUF5QixnQ0FBZ0MsbUJBQW1CLHdFQUF3RSw0QkFBNEIsa0NBQWtDLG1DQUFtQyxLQUFLLHNCQUFzQixzQkFBc0IsR0FBRyx1QkFBdUIsb0JBQW9CLHFDQUFxQyxrQkFBa0IsR0FBRyxpQkFBaUIsMEJBQTBCLG9CQUFvQixpQkFBaUIscUNBQXFDLEdBQUcsOEJBQThCLG9CQUFvQixHQUFHLGdCQUFnQixzQkFBc0IsdUJBQXVCLG9DQUFvQyxtQkFBbUIsd0JBQXdCLG1DQUFtQyxHQUFHLG1CQUFtQixvQ0FBb0MsbUJBQW1CLHNCQUFzQixLQUFLLGNBQWMsS0FBSyxxQkFBcUIsMkNBQTJDLEdBQUcsc0JBQXNCLHFDQUFxQyxtQkFBbUIsb0NBQW9DLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksY0FBYyxNQUFNLHNCQUFzQixNQUFNLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFNBQVMsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFVBQVUsU0FBUyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLE9BQU8sTUFBTSxPQUFPLEtBQUssWUFBWSxPQUFPLHlCQUF5QixtSUFBbUksTUFBTSxxQkFBcUIsTUFBTSxrQkFBa0IsbUJBQW1CLDRCQUE0Qiw4Q0FBOEMsR0FBRyxnQkFBZ0Isb0JBQW9CLG9CQUFvQixrQkFBa0IscUNBQXFDLG1DQUFtQyxnQ0FBZ0MsR0FBRyxXQUFXLHdCQUF3QixvQkFBb0Isa0NBQWtDLDhCQUE4QiwwQkFBMEIsc0RBQXNELGlCQUFpQixHQUFHLEtBQUssc0JBQXNCLHlCQUF5Qix1QkFBdUIsTUFBTSxhQUFhLGFBQWEsd0JBQXdCLHdCQUF3QixTQUFTLG1CQUFtQixvQkFBb0IscUNBQXFDLHlCQUF5QixHQUFHLGlDQUFpQyx1REFBdUQsS0FBSyxVQUFVLHNCQUFzQixxQkFBcUIsR0FBRyxnREFBZ0Qsa0JBQWtCLDREQUE0RCxHQUFHLCtCQUErQix5QkFBeUIsZ0NBQWdDLEdBQUcsMEJBQTBCLG9CQUFvQix1QkFBdUIsd0JBQXdCLGlDQUFpQyxzQkFBc0IscUNBQXFDLDBCQUEwQix1QkFBdUIsR0FBRyxpQ0FBaUMsMEJBQTBCLHNCQUFzQixrQkFBa0IsbUJBQW1CLDhCQUE4QixnREFBZ0QsR0FBRyxpQkFBaUIsb0NBQW9DLGVBQWUsMEJBQTBCLHVCQUF1QixHQUFHLHdCQUF3QixvQkFBb0IsMEJBQTBCLHFDQUFxQyxrQkFBa0IsbUJBQW1CLGdCQUFnQix1QkFBdUIsR0FBRywyQkFBMkIsb0JBQW9CLDZCQUE2QixpQkFBaUIsZ0JBQWdCLEdBQUcsdUJBQXVCLG1CQUFtQixzQkFBc0Isd0JBQXdCLG9DQUFvQyxtQkFBbUIsb0JBQW9CLG1DQUFtQyxHQUFHLDRCQUE0QixzQkFBc0IsR0FBRywwQkFBMEIsbUJBQW1CLG9DQUFvQyxvQkFBb0IsU0FBUyw2QkFBNkIsbUJBQW1CLG9DQUFvQyxzQkFBc0IsU0FBUyw0QkFBNEIsa0JBQWtCLEdBQUcsMEJBQTBCLG9CQUFvQiw0QkFBNEIsd0JBQXdCLDZCQUE2QixHQUFHLDBDQUEwQyxpQkFBaUIseUJBQXlCLHVCQUF1QixHQUFHLHFCQUFxQixpQkFBaUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsZUFBZSx1QkFBdUIsS0FBSyxnQkFBZ0Isb0JBQW9CLGdCQUFnQixrQkFBa0IseUJBQXlCLHVCQUF1QiwwQkFBMEIsc0JBQXNCLEdBQUcsV0FBVywrQkFBK0IsaUdBQWlHLGlCQUFpQix1QkFBdUIsa0JBQWtCLG1CQUFtQix3QkFBd0IsMEJBQTBCLHVCQUF1QixzQkFBc0IsR0FBRyx5QkFBeUIsZ0NBQWdDLG1CQUFtQixtREFBbUQsNEJBQTRCLGtDQUFrQyxtQ0FBbUMsS0FBSyxzQkFBc0Isc0JBQXNCLEdBQUcsdUJBQXVCLG9CQUFvQixxQ0FBcUMsa0JBQWtCLEdBQUcsaUJBQWlCLDBCQUEwQixvQkFBb0IsaUJBQWlCLHFDQUFxQyxHQUFHLDhCQUE4QixvQkFBb0IsR0FBRyxnQkFBZ0Isc0JBQXNCLHVCQUF1QixvQ0FBb0MsbUJBQW1CLHdCQUF3QixtQ0FBbUMsR0FBRyxtQkFBbUIsb0NBQW9DLG1CQUFtQixzQkFBc0IsS0FBSyxjQUFjLEtBQUsscUJBQXFCLDJDQUEyQyxHQUFHLHNCQUFzQixxQ0FBcUMsbUJBQW1CLG9DQUFvQyxtQkFBbUI7QUFDbDhWO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDWDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZzQztBQUNtQjtBQUNaOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpREFBYTs7O0FBR2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sc0RBQWtCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsaURBQWE7QUFDaEUsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLDBDQUFJO0FBQzlCLFFBQVEsaURBQWE7QUFDckIsc0JBQXNCLGlEQUFhO0FBQ25DO0FBQ0EsdURBQXVELGlEQUFhO0FBQ3BFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyxtREFBYTs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix3REFBb0IsVUFBVSxnQ0FBZ0M7QUFDdkYsUUFBUSxpREFBYTs7QUFFckI7QUFDQTs7QUFFQSx1REFBdUQsaURBQWE7O0FBRXBFO0FBQ0Esb0JBQW9CLGlEQUFhOztBQUVqQyxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSx1QkFBdUIsK0NBQVc7O0FBRWxDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0RBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEM7QUFDMUMsa0RBQWtEO0FBQ2xELGFBQWE7O0FBRWI7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxhQUFhLEtBQUs7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLDJEQUEyRCxpREFBYTtBQUN4RSxTQUFTOztBQUVUO0FBQ0EsWUFBWSxxREFBVSxDQUFDLGlEQUFhOztBQUVwQyxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsK0NBQVc7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLElBQUksd0RBQW9CLEVBQUU7QUFDN0MscUJBQXFCLGlEQUFhLFVBQVUsaURBQWEsaUJBQWlCLGlEQUFhO0FBQ3ZGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSTZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNU94QztBQUNtQjs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDLFFBQVEsd0RBQVk7QUFDcEI7QUFDQTs7O0FBR0E7QUFDc0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCRztBQUMyQjs7QUFFcEU7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhDQUFNLHdEQUF3RCx5REFBaUI7QUFDdkYsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0Esa0JBQWtCLGlEQUFhLENBQUMseURBQWlCO0FBQ2pEO0FBQ0E7QUFDQSxRQUFRLGlEQUFhLENBQUMseURBQWlCO0FBQ3ZDO0FBQ0EsbURBQW1ELGlEQUFhO0FBQ2hFLElBQUksMERBQWEsQ0FBQyxpREFBYSxDQUFDLHlEQUFpQjtBQUNqRDs7QUFFMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JDMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZm9sZGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJpbWcvY2hlY2stYWxsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGlicmUrQmFza2VydmlsbGU6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZjtcXG59XFxuLm1haW4tY29udGVudHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDc1JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYmJiYjtcXG59XFxuXFxuI3RpdGxle1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMGVlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA3cHggcmdiYSgyMiwgMjIsIDIyLCAwLjQxMSk7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcbmgxe1xcbiAgICBmb250LXNpemU6IDQ1cHg7XFxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gXFxufVxcbiN0aXRsZSBpbWd7d2lkdGg6IDgwcHg7fVxcblxcblxcbi5mb2xkZXItY29udGFpbmVye1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgXFxufVxcblxcbiNmb2xkZXItaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcXG59XFxuXFxuLmZvbGRlci1jb250YWluZXIgZGl2LmFjdGl2ZXtcXG4gICAgYm94LXNoYWRvdzoxcHggMXB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC40MTEpO1xcblxcbn1cXG5kaXYgaDIge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiAjMjIyMjIyO1xcbn1cXG5cXG4vKiBUcmFzaCBDYW4gaW4gRm9sZGVycyBJbWcgKi9cXG5kaXYgZGl2IGltZ3tcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDNweCAycHggcmdiYSgwLCAwLCAwLCAwLjMwOCkpO1xcbn1cXG5cXG5cXG5cXG4ubWFpbi1mb2xkZXItY29udGFpbmVye1xcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcblxcbi5mb2xkZXItYWRkLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC43cztcXG59XFxuXFxuI2Rpc3BsYXktZm9ybS1idG4sICN0b2RvLWJ0bntcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMzQsIDEzLCAwLjI4MSk7XFxufVxcblxcbiNmb3JtLWZvbGRlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbn1cXG5cXG4jZm9ybS1mb2xkZXIuYWN0aXZle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luOiAxN3B4IDBweDtcXG59XFxuXFxuLmZvcm0tZm9sZGVyLWlucHV0LWJveHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jZm9ybS1mb2xkZXIgaW5wdXR7XFxuICAgIGhlaWdodDogMjNweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcXG59XFxuI2Zvcm0tZm9sZGVyIGlucHV0LnRvZ2dsZXtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG5cXG4jZm9ybS1mb2xkZXIgYnV0dG9ue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBcXG59XFxuI2Zvcm0tZm9sZGVyIGJ1dHRvbi50b2dnbGV7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgXFxufVxcblxcbiNmb3JtLWZvbGRlciBidXR0b24gaW1ne1xcbiAgICB3aWR0aDogMzVweDtcXG59XFxuXFxuXFxuXFxuXFxuI3Rhc2stY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBub25lO1xcdFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDIwMDBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLyogXFxcIlRhc2socylcXFwiICovXFxuI3Rhc2stY29udGFpbmVyIGgye1xcbiAgICB3aWR0aDogODAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcblxcblxcblxcbiN0b2RvLWxpc3R7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG5cXG59XFxuI3RvZG8tbGlzdCBsaXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBwYWRkaW5nOiAxcHggNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcbmxpIGlucHV0e1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0Ym94LXNoYWRvdzogMXB4IDJweCAwcHggMC41cHggcmdiYSgwLCAwLCAwLCAwLjE1MSksIGluc2V0IC0ycHggLTJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE5OSk7XFxuXFx0cGFkZGluZzogOXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDM1cHg7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG5saSBpbnB1dDpjaGVja2Vke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcblxcdGNvbG9yOiAjZmZmZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXG59XFxuXFxuXFxuI3RvZG8tbGlzdCBsaSBwe1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi50b2RvLXRpdGxlLWRlbGV0ZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuI2Zvcm0tdG9kb3tcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGl0bGUtcHJpb3JpdHktY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jdG9kby10aXRsZXtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3RvZG8tcHJpb3JpdHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG5cXG59XFxuXFxuI3RvZG8tYnRue1xcblxcbn1cXG5cXG5cXG4ubG93LXByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgMjMwLCAxMjEpO1xcbn1cXG5cXG4ubWVkaXVtLXByaW9yaXR5eyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAxNzIsIDYxKTt9XFxuXFxuLmhpZ2gtcHJpb3JpdHl7YmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgNzIsIDcyKTt9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQix1Q0FBdUM7QUFDM0M7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFh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Q0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixlQUFlOztBQUVuQjs7QUFFQTs7QUFFQTs7O0FBR0E7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUEsa0JBQWtCLG1DQUFtQyxDQUFDOztBQUV0RCxlQUFlLGtDQUFrQyxDQUFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qe1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZjtcXG59XFxuLm1haW4tY29udGVudHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDc1JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYmJiYjtcXG59XFxuXFxuI3RpdGxle1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMGVlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA3cHggcmdiYSgyMiwgMjIsIDIyLCAwLjQxMSk7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcbmgxe1xcbiAgICBmb250LXNpemU6IDQ1cHg7XFxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gXFxufVxcbiN0aXRsZSBpbWd7d2lkdGg6IDgwcHg7fVxcblxcblxcbi5mb2xkZXItY29udGFpbmVye1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgXFxufVxcblxcbiNmb2xkZXItaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcXG59XFxuXFxuLmZvbGRlci1jb250YWluZXIgZGl2LmFjdGl2ZXtcXG4gICAgYm94LXNoYWRvdzoxcHggMXB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC40MTEpO1xcblxcbn1cXG5kaXYgaDIge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiAjMjIyMjIyO1xcbn1cXG5cXG4vKiBUcmFzaCBDYW4gaW4gRm9sZGVycyBJbWcgKi9cXG5kaXYgZGl2IGltZ3tcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDNweCAycHggcmdiYSgwLCAwLCAwLCAwLjMwOCkpO1xcbn1cXG5cXG5cXG5cXG4ubWFpbi1mb2xkZXItY29udGFpbmVye1xcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcblxcbi5mb2xkZXItYWRkLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC43cztcXG59XFxuXFxuI2Rpc3BsYXktZm9ybS1idG4sICN0b2RvLWJ0bntcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMzQsIDEzLCAwLjI4MSk7XFxufVxcblxcbiNmb3JtLWZvbGRlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbn1cXG5cXG4jZm9ybS1mb2xkZXIuYWN0aXZle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luOiAxN3B4IDBweDtcXG59XFxuXFxuLmZvcm0tZm9sZGVyLWlucHV0LWJveHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jZm9ybS1mb2xkZXIgaW5wdXR7XFxuICAgIGhlaWdodDogMjNweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcXG59XFxuI2Zvcm0tZm9sZGVyIGlucHV0LnRvZ2dsZXtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG5cXG4jZm9ybS1mb2xkZXIgYnV0dG9ue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBcXG59XFxuI2Zvcm0tZm9sZGVyIGJ1dHRvbi50b2dnbGV7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgXFxufVxcblxcbiNmb3JtLWZvbGRlciBidXR0b24gaW1ne1xcbiAgICB3aWR0aDogMzVweDtcXG59XFxuXFxuXFxuXFxuXFxuI3Rhc2stY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBub25lO1xcdFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDIwMDBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLyogXFxcIlRhc2socylcXFwiICovXFxuI3Rhc2stY29udGFpbmVyIGgye1xcbiAgICB3aWR0aDogODAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcblxcblxcblxcbiN0b2RvLWxpc3R7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG5cXG59XFxuI3RvZG8tbGlzdCBsaXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBwYWRkaW5nOiAxcHggNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcbmxpIGlucHV0e1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0Ym94LXNoYWRvdzogMXB4IDJweCAwcHggMC41cHggcmdiYSgwLCAwLCAwLCAwLjE1MSksIGluc2V0IC0ycHggLTJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE5OSk7XFxuXFx0cGFkZGluZzogOXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDM1cHg7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG5saSBpbnB1dDpjaGVja2Vke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcblxcdGNvbG9yOiAjZmZmZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImltZy9jaGVjay1hbGwuc3ZnXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcbn1cXG5cXG5cXG4jdG9kby1saXN0IGxpIHB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLnRvZG8tdGl0bGUtZGVsZXRle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG4jZm9ybS10b2Rve1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50aXRsZS1wcmlvcml0eS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiN0b2RvLXRpdGxle1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jdG9kby1wcmlvcml0eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcblxcbn1cXG5cXG4jdG9kby1idG57XFxuXFxufVxcblxcblxcbi5sb3ctcHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5LCAyMzAsIDEyMSk7XFxufVxcblxcbi5tZWRpdW0tcHJpb3JpdHl7IGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDE3MiwgNjEpO31cXG5cXG4uaGlnaC1wcmlvcml0eXtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1LCA3MiwgNzIpO31cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZm9sZGVyU3RvcmFnZSBmcm9tICcuL2luZGV4LmpzJ1xuaW1wb3J0IHtUb2RvLCBkZWxldGVUb2RvLCBleGFtcGxlRm9sZGVyfSBmcm9tICcuL3RvZG8uanMnXG5pbXBvcnQgdHJhc2hDYW5TdmcgZnJvbSAnLi9pbWcvdHJhc2gtY2FuLnN2ZydcblxuY29uc3QgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stY29udGFpbmVyXCIpO1xuY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kZXNjcmlwdGlvblwiKVxuY29uc3QgaW5wdXRGb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZvbGRlci1pbnB1dFwiKTtcbmNvbnN0IGFkZEZvbGRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9sZGVyLWJ0blwiKTtcbmNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tdGl0bGVcIik7XG5jb25zdCBzaG93Rm9sZGVyRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlzcGxheS1mb3JtLWJ0blwiKVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1mb2xkZXJcIik7XG5cbmZvbGRlclN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb2xkZXJzJykpO1xuXG5cbmxldCBhZGRGb2xkZXIgPSBmYWxzZVxubGV0IGkgPSAtMVxubGV0IHNlbGVjdGVkRm9sZGVyID0gdW5kZWZpbmVkXG5cbmFkZEZvbGRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKGlucHV0Rm9sZGVyLnZhbHVlID09ICcnIHx8IGlucHV0Rm9sZGVyLnZhbHVlID09IFwiQ29tbW9uIE5hbWUgRm91bmRcIikgcmV0dXJuO1xuICAgIGlmKGZvbGRlclN0b3JhZ2Uuc29tZShmb2xkZXIgPT4gZm9sZGVyLm5hbWUgPT0gaW5wdXRGb2xkZXIudmFsdWUpKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW5wdXRGb2xkZXIudmFsdWUgPSBcIlwiLCAyMDAwKTtcbiAgICAgICAgcmV0dXJuIGlucHV0Rm9sZGVyLnZhbHVlID0gXCJDb21tb24gTmFtZSBGb3VuZFwiXG4gICAgfTtcbiAgICBhZGRGb2xkZXIgPSB0cnVlO1xuICAgIGNyZWF0ZUZvbGRlcihpbnB1dEZvbGRlci52YWx1ZSwgaW5wdXREZXNjcmlwdGlvbi52YWx1ZSk7XG4gICAgYWRkRm9sZGVyID0gZmFsc2U7XG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGFkZEZvbGRlckJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwidG9nZ2xlXCIpO1xuICAgIGZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgndG9nZ2xlJykpXG4gICAgc2hvd0ZvbGRlckZvcm1CdG4udGV4dENvbnRlbnQgPSBcIitcIlxuICAgIHNob3dGb2xkZXJGb3JtQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAxMzQsIDEzLCAwLjI4MSlcIlxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb2xkZXJzJywgSlNPTi5zdHJpbmdpZnkoZm9sZGVyU3RvcmFnZSkpXG59KTtcblxuc2hvd0ZvbGRlckZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGFkZEZvbGRlckJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwidG9nZ2xlXCIpO1xuICAgIGZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgndG9nZ2xlJykpXG4gICAgY29uc29sZS5sb2coZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikpXG4gICAgaWYoc2hvd0ZvbGRlckZvcm1CdG4udGV4dENvbnRlbnQgPT0gXCIrXCIpe1xuICAgIHNob3dGb2xkZXJGb3JtQnRuLnRleHRDb250ZW50ID0gXCLinJVcIlxuICAgIHNob3dGb2xkZXJGb3JtQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDE4NSwgNzIsIDcyKVwiXG4gICAgfWVsc2Uge1xuICAgIHNob3dGb2xkZXJGb3JtQnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgIHNob3dGb2xkZXJGb3JtQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAxMzQsIDEzLCAwLjI4MSlcIlxuICAgIH1cbn0pXG5cblxuXG5jbGFzcyBGb2xkZXJ7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGlkLCB0b2RvKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudG9kbyA9IHRvZG87XG4gICAgfVxuXG4gICAgYWRkVG9kbyh0aXRsZSwgcHJpb3JpdHksIGNvbXBsZXRlLCBpZCl7XG4gICAgICAgIGlmKHNlbGVjdGVkRm9sZGVyID09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBwcmlvcml0eSwgY29tcGxldGUpXG4gICAgICAgIGZvbGRlclN0b3JhZ2VbaWRdLnRvZG8ucHVzaChuZXdUb2RvKVxuICAgICAgICBkaXNwbGF5Rm9sZGVyKGZvbGRlclN0b3JhZ2VbaWRdLnRvZG8pO1xuICAgICAgICBpbnB1dFRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcnMnLCBKU09OLnN0cmluZ2lmeShmb2xkZXJTdG9yYWdlKSlcbiAgICAgICAgcmV0dXJuIG5ld1RvZG9cbiAgICB9XG4gICAgXG5cbn1cbmxldCBuZXdTdG9yYWdlID0gW107XG5sZXQgcHJldkFjdGl2ZSA9IG51bGw7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvbGRlcihmb2xkZXJUaXRsZSwgZGVzY3JpcHRpb24sIHRvZG8pe1xuICAgIGNvbnN0IGZvbGRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9sZGVyLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjdXJyZW50Rm9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBmb2xkZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRlbGV0ZUZvbGRlciA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGZvbGRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3QgZm9sZGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGlmKGV4YW1wbGVGb2xkZXIpe1xuXG4gICAgfVxuICAgIC8vIG1ha2VzIG5ldyBmb2xkZXIgaGF2ZSBhIGVtcHR5IHRvZG86IGFycmF5XG4gICAgaWYgKHRvZG8gPT0gdW5kZWZpbmVkKSB0b2RvID0gW107XG4gICAgbGV0IG5ld0ZvbGRlciA9IG5ldyBGb2xkZXIoZm9sZGVyVGl0bGUsIGRlc2NyaXB0aW9uLCBnZXRJZChpKSwgdG9kbyk7XG5cbiAgLy8gIGNvbnNvbGUubG9nKG5ld0ZvbGRlcilcbiAgICBsZXQgZGVsZXRlZCA9IGZhbHNlO1xuICAgIG5ld1N0b3JhZ2UucHVzaChuZXdGb2xkZXIpXG4gICAvLyBjb25zb2xlLnRhYmxlKG5ld1N0b3JhZ2UpXG4gICAgaSA9IGdldElkKGkpO1xuICAgIGN1cnJlbnRGb2xkZXIuaWQgPSBcImZvbGRlclwiICsgaTtcblxuICAgIGRlbGV0ZUZvbGRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGRlbGV0ZWQgPSB0cnVlO1xuICAgICAgICBsZXQgbmV3U3RvcmFnZSA9IGZvbGRlclN0b3JhZ2UuZmlsdGVyKChyKSA9PiB7IHJldHVybiByLm5hbWUgIT0gbmV3Rm9sZGVyLm5hbWV9KTtcbiAgICAgICAgZm9sZGVyU3RvcmFnZSA9IG5ld1N0b3JhZ2VcblxuICAgICAgICBpID0gLTFcbiAgICAgICAgcmVmcmVzaEZvbGRlcigpXG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcnMnLCBKU09OLnN0cmluZ2lmeShmb2xkZXJTdG9yYWdlKSlcblxuICAgICAgICBjb25zb2xlLmxvZyhuZXdTdG9yYWdlKVxuICAgICAgICBjb25zb2xlLmxvZyhmb2xkZXJTdG9yYWdlKVxuXG4gICAgICAgIH0pXG4gICAgXG4gICAgXG5cbiAgICBkZWxldGVGb2xkZXIuc3JjID0gdHJhc2hDYW5Tdmc7XG5cbiAgICBmb2xkZXJIZWFkZXIuaWQgPSBcImZvbGRlci1oZWFkZXJcIjtcblxuICAgIGZvbGRlclRleHQudGV4dENvbnRlbnQgPSBmb2xkZXJUaXRsZTtcbiAgICBmb2xkZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gICAgZm9sZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRGb2xkZXIpO1xuICAgIGN1cnJlbnRGb2xkZXIuYXBwZW5kQ2hpbGQoZm9sZGVySGVhZGVyKTtcbiAgICBmb2xkZXJIZWFkZXIuYXBwZW5kQ2hpbGQoZm9sZGVyVGV4dCk7XG4gICAgZm9sZGVySGVhZGVyLmFwcGVuZENoaWxkKGRlbGV0ZUZvbGRlcik7XG4gICAgY3VycmVudEZvbGRlci5hcHBlbmRDaGlsZChmb2xkZXJEZXNjcmlwdGlvbik7XG4gICAgXG4gICAgaW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgaW5wdXRGb2xkZXIudmFsdWUgPSBcIlwiO1xuXG4gICAgaWYoYWRkRm9sZGVyKWZvbGRlclN0b3JhZ2UucHVzaChuZXdGb2xkZXIpO1xuICAgIFxuICAgIGN1cnJlbnRGb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvL3ByZXZlbnRzIHRoZSBmb2xkZXIgd2hpY2ggaXMgdG8gYmUgZGVsZXRlZCBmcm9tIG9wZW5pbmdcbiAgICAgICAgaWYoZGVsZXRlZCkgcmV0dXJuIGRlbGV0ZWQgPSBmYWxzZTtcbiAgICAvL3ByZXZlbnRzIHRoZSBmb2xkZXIgdG8gcmUtb3BlblxuICAgICAgICBpZihzZWxlY3RlZEZvbGRlciA9PSBuZXdGb2xkZXIpIHJldHVybjtcbiAgICAgICAgZGlzcGxheUZvbGRlcihmb2xkZXJTdG9yYWdlW25ld0ZvbGRlci5pZF0udG9kbyk7XG4gICAgICAgIGN1cnJlbnRGb2xkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgICAgICBpZihwcmV2QWN0aXZlICE9PSBudWxsKSBwcmV2QWN0aXZlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIHByZXZBY3RpdmUgPSBjdXJyZW50Rm9sZGVyO1xuICAgICAgICBjb25zb2xlLmxvZyhwcmV2QWN0aXZlKVxuICAgICAgICBzZWxlY3RlZEZvbGRlciA9IG5ld0ZvbGRlcjtcbiAgICAgICAgdG9kb0xpc3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgfSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9sZGVycycsIEpTT04uc3RyaW5naWZ5KG5ld1N0b3JhZ2UpKVxuXG4gICAgXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlGb2xkZXIodG9kb0xpc3Qpe1xuICAgIGxldCB0b2RvTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbGlzdFwiKTtcblx0dG9kb0xpc3RFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc29sZS5sb2codG9kb0xpc3QpXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgbGlzdEl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsZXQgbGlzdEl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGxldCBsaXN0SXRlbUNvbXBsZXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBsZXQgbGlzdEl0ZW1EZWxldGVCdG4gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbGV0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBpZih0b2RvTGlzdFtpXS5wcmlvcml0eSA9PSBcIkxvd1wiKXtsaXN0SXRlbUNvbXBsZXRpb24uY2xhc3NMaXN0LmFkZChcImxvdy1wcmlvcml0eVwiKX1cbiAgICAgICAgZWxzZSBpZih0b2RvTGlzdFtpXS5wcmlvcml0eSA9PSBcIk1lZGl1bVwiKXtsaXN0SXRlbUNvbXBsZXRpb24uY2xhc3NMaXN0LmFkZChcIm1lZGl1bS1wcmlvcml0eVwiKX1cbiAgICAgICAgZWxzZXtsaXN0SXRlbUNvbXBsZXRpb24uY2xhc3NMaXN0LmFkZChcImhpZ2gtcHJpb3JpdHlcIil9O1xuXG4gICAgICAgIGxpc3RJdGVtQ29tcGxldGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIGxpc3RJdGVtQ29tcGxldGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHRvZG9MaXN0W2ldLmNvbXBsZXRlKXt0b2RvTGlzdFtpXS5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfWVsc2V7dG9kb0xpc3RbaV0uY29tcGxldGUgPSB0cnVlfTtcblxuICAgICAgICAgICAgaWYodG9kb0xpc3RbaV0uY29tcGxldGUpe1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW1FbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9IFwiMCAwIDdweCAycHggcmdiYSgwLCAwLCAwLCAwLjMxMSlcIjtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbUVsZW1lbnQuc3R5bGUuYm94U2hhZG93ID0gXCJub25lXCI7ICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcnMnLCBKU09OLnN0cmluZ2lmeShmb2xkZXJTdG9yYWdlKSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkZWxldGVUb2RvKGZvbGRlclN0b3JhZ2Vbc2VsZWN0ZWRGb2xkZXIuaWRdLnRvZG9baV0pO1xuXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcInRvZG8tZGVsZXRlXCIpXG4gICAgICAgIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGUtZGVsZXRlXCIpXG4gICAgICAgIFxuXHRcdGxpc3RJdGVtVGV4dC50ZXh0Q29udGVudCA9IHRvZG9MaXN0W2ldLnRpdGxlO1xuICAgICAgICBsaXN0SXRlbUNvbXBsZXRpb24uY2hlY2tlZCA9IHRvZG9MaXN0W2ldLmNvbXBsZXRlO1xuICAgICAgICBsaXN0SXRlbURlbGV0ZUJ0bi5zcmMgPSB0cmFzaENhblN2ZztcbiAgICAgICAgLy8gQWRkcyBDU1MgdG8gVGFzayB3aGVuIGRpc3BsYXlpbmcgZm9sZGVyXG4gICAgICAgIGlmKHRvZG9MaXN0W2ldLmNvbXBsZXRlKXtcbiAgICAgICAgICAgIGxpc3RJdGVtRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBsaXN0SXRlbUVsZW1lbnQuc3R5bGUuYm94U2hhZG93ID0gXCIycHggMCA3cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zMTEpXCI7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgbGlzdEl0ZW1FbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9IFwibm9uZVwiO1xuICAgICAgICB9O1xuXG5cdFx0dG9kb0xpc3RFbGVtZW50LmFwcGVuZENoaWxkKGxpc3RJdGVtRWxlbWVudCk7XG4gICAgICAgIGxpc3RJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChsaXN0SXRlbUNvbXBsZXRpb24pO1xuICAgICAgICBsaXN0SXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW1UZXh0KTtcbiAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbURlbGV0ZUJ0bik7XG5cblx0fVxufVxuXG5cbmZ1bmN0aW9uIGdldElkKGkpe1xuICAgIGkrKztcbiAgICByZXR1cm4gaTtcbn1cblxuZnVuY3Rpb24gcmVmcmVzaEZvbGRlcigpe1xuICAgIHJlbW92ZUNoaWxkcmVuKCk7XG4gICAgbmV3U3RvcmFnZSA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBmb2xkZXJTdG9yYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY3JlYXRlRm9sZGVyKGZvbGRlclN0b3JhZ2VbaV0ubmFtZSwgZm9sZGVyU3RvcmFnZVtpXS5kZXNjcmlwdGlvbiwgZm9sZGVyU3RvcmFnZVtpXS50b2RvKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4oKXtcbiAgICBjb25zdCBmb2xkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvbGRlci1jb250YWluZXJcIik7XG4gICAgd2hpbGUgKGZvbGRlckNvbnRhaW5lci5maXJzdENoaWxkKXtcbiAgICAgICAgZm9sZGVyQ29udGFpbmVyLnJlbW92ZUNoaWxkKGZvbGRlckNvbnRhaW5lci5maXJzdENoaWxkKVxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCB7Y3JlYXRlRm9sZGVyLCBzZWxlY3RlZEZvbGRlciwgRm9sZGVyLCBkaXNwbGF5Rm9sZGVyfTtcblxuIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5pbXBvcnQge2NyZWF0ZUZvbGRlcn0gZnJvbSAnLi9mb2xkZXIuanMnXG5cbmxldCBmb2xkZXJTdG9yYWdlID0gW107XG5sZXQgZXhhbXBsZUZvbGRlciA9IGZhbHNlO1xuXG5pZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZvbGRlcnMnKSkge1xuICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xufSBlbHNlIHtcbiAgICBpbXBvcnRJbmZvKCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9sZGVycycsIEpTT04uc3RyaW5naWZ5KGZvbGRlclN0b3JhZ2UpKTtcbiAgICBleGFtcGxlRm9sZGVyID0gdHJ1ZVxuICAgIGltcG9ydEluZm8oKTtcbn1cblxuZnVuY3Rpb24gaW1wb3J0SW5mbygpIHtcbiAgICBmb2xkZXJTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZm9sZGVycycpKTtcbiAgICBjb25zb2xlLmxvZyhmb2xkZXJTdG9yYWdlKVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBmb2xkZXJTdG9yYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY3JlYXRlRm9sZGVyKGZvbGRlclN0b3JhZ2VbaV0ubmFtZSwgZm9sZGVyU3RvcmFnZVtpXS5kZXNjcmlwdGlvbiwgZm9sZGVyU3RvcmFnZVtpXS50b2RvKVxuICAgIH1cbn1cblxuXG5jb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpXG5leHBvcnQge2ZvbGRlclN0b3JhZ2UsIGV4YW1wbGVGb2xkZXJ9O1xuIiwiaW1wb3J0ICBmb2xkZXJTdG9yYWdlICBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgc2VsZWN0ZWRGb2xkZXIsIEZvbGRlciwgZGlzcGxheUZvbGRlciB9IGZyb20gXCIuL2ZvbGRlci5qc1wiO1xuXG5jb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWJ0blwiKTtcbmNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1wcmlvcml0eVwiKTtcbmNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tdGl0bGVcIik7XG5cblxuYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKGlucHV0VGl0bGUudmFsdWUgPT0gXCJcIiB8fCB0b2RvUHJpb3JpdHkudmFsdWUgPT0gXCJcIikgcmV0dXJuXG4gICAgbmV3IEZvbGRlcigpLmFkZFRvZG8oaW5wdXRUaXRsZS52YWx1ZSwgdG9kb1ByaW9yaXR5LnZhbHVlLCBmYWxzZSwgc2VsZWN0ZWRGb2xkZXIuaWQpO1xufSk7XG5cbmNsYXNzIFRvZG97XG4gICAgY29uc3RydWN0b3IodGl0bGUsIHByaW9yaXR5LCBjb21wbGV0ZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGVcbiAgICB9XG4gICAgXG4gICAgXG59XG5cblxuXG5mdW5jdGlvbiBkZWxldGVUb2RvKHRvZG8pe1xuICAgIGNvbnNvbGUubG9nKHRvZG8pXG4gICAgY29uc3QgaW5kZXggPSBmb2xkZXJTdG9yYWdlW3NlbGVjdGVkRm9sZGVyLmlkXS50b2RvLmluZGV4T2YodG9kbyk7XG4gICAgY29uc29sZS5sb2coaW5kZXgpXG4gICAgaWYoaW5kZXggPiAtMSl7XG4gICAgICAgIGZvbGRlclN0b3JhZ2Vbc2VsZWN0ZWRGb2xkZXIuaWRdLnRvZG8uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcnMnLCBKU09OLnN0cmluZ2lmeShmb2xkZXJTdG9yYWdlKSlcbiAgICBkaXNwbGF5Rm9sZGVyKGZvbGRlclN0b3JhZ2Vbc2VsZWN0ZWRGb2xkZXIuaWRdLnRvZG8pXG59XG5cbmV4cG9ydCB7VG9kbywgZGVsZXRlVG9kb307XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=