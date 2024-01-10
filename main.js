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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/plus.svg */ "./src/img/plus.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! img/check-all.svg */ "./src/img/check-all.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0px;\n    padding: 0px;\n    box-sizing:border-box;\n    font-family: 'Libre Baskerville', serif;\n}\n.main-content{\n    display: grid;\n    height: 100vh;\n    width: 100%;\n    grid-template-columns: 25% 75%;\n    grid-template-rows: auto 1fr;\n    background-color: #bbbbbb;\n}\n\n#title{\n    grid-column: 1/-1;\n    display: flex;\n    background-color: #f0f0f0ee;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px 2px 7px rgba(22, 22, 22, 0.411);\n    z-index: 1;\n}\nh1{\n    font-size: 45px;\n    padding: 30px 20px;\n    font-weight: 700;\n \n}\n#title img{width: 80px;}\n\n\n\n\n#folder-header{\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 2px;\n}\n\ndiv h2 {\n    font-size: 30px;\n    color: #222222;\n}\n\n/* Trash Can in Folders Img */\ndiv div img{\n    width: 30px;\n    filter: drop-shadow(4px 3px 2px rgba(0, 0, 0, 0.308));\n}\n\n\n\n.main-folder-container{\n    padding: 20px 25px;\n    background-color: #e0e0e0;\n}\n\n.main-folder-container h2{\n    color: #222222;\n}\n\n.folder-container{\n    margin-left: 10px;\n    \n}\n\n.folder-container h2{\n    font-size: 30px;\n    color: #222222;\n}\n\n.folder-container div.active{\n    box-shadow:1px 1px 10px 1px rgba(0, 0, 0, 0.411);\n\n}\n\n.folder-add-container{\n    display: flex;\n    margin-top: 10px;\n    padding-top: 10px;\n    border-top: 1px solid gray;\n    font-size: 20px;\n    justify-content: space-between;\n    align-items: center;\n    transition: 0.7s;\n}\n\n#display-form-btn, #todo-btn{\n    border-radius: 20px;\n    font-size: 25px;\n    width: 30px;\n    height: 30px;\n    border: 2px solid black;\n    background-color: rgba(0, 134, 13, 0.281);\n    transition: 0.7s;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n#form-folder{\n    background-color: transparent;\n    width: 0;\n    border-radius: 10px;\n    transition: 0.7s;\n}\n\n#form-folder.active{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    height: auto;\n    gap: 10px;\n    margin: 17px 0px;\n}\n\n.form-folder-input-box{\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    gap: 10px;\n}\n\n#form-folder input{\n    height: 30px;\n    font-size: 18px;\n    padding-left: 3px;\n    background-color: transparent;\n    border: none;\n    display: none;\n    outline: none;\n    border-left: 2px solid black;\n}\n\n#form-folder input:focus{\n    background-color: #c9c9c9;\n}\n#form-folder input.toggle{\n    display: inline;\n}\n\n\n#form-folder button{\n    border: none;\n    background-color: transparent;\n    display: none;\n    \n}\n#form-folder button.toggle{\n    border: none;\n    background-color: transparent;\n    display: inline;\n    \n}\n\n#form-folder button img{\n    width: 35px;\n}\n\n.dues-folder{\n    font-size: 28px;\n    margin-top: 15px;\n}\n#upcoming-dates-container{\n    display:none;\n    flex-direction: column;\n    align-items: center;\n    max-width: 2000px;\n    \n}\n\n#upcoming-dates-container h2{\n    width: 80%;\n    text-align: center;\n    margin-top: 10px;\n}\n\n\n#todo-list-date{\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n    margin: 10px 0px;\n}\n\n#todo-list-date li{\n    display: flex;\n    gap: 40px;\n    width: 100%;\n    border-radius: 7px;\n    padding: 1px 4px;\n    align-items: center;\n    font-size: 30px;\n}\n\n\n#task-container{\n    display: none;\t\n    align-items: center;\n    max-width: 2000px;\n    grid-column: 2;\n    grid-row: 2;\n    flex-direction: column;\n}\n\n/* \"Task(s)\" */\n#task-container h2{\n    width: 80%;\n    text-align: center;\n    margin-top: 10px;\n}\n\n\n\n\n#todo-list{\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n    margin: 10px 0px;\n\n}\n#todo-list li{\n    display: flex;\n    gap: 40px;\n    width: 100%;\n    border-radius: 7px;\n    padding: 1px 4px;\n    align-items: center;\n    font-size: 30px;\n}\nli input{\n    appearance: none;\n\tbox-shadow: 1px 2px 0px 0.5px rgba(0, 0, 0, 0.151), inset -2px -2px 1px rgba(0, 0, 0, 0.199);\n\tpadding: 9px;\n    margin-left: 2px;\n    width: 25px;\n    height: 24px;\n\tborder-radius: 35px;\n\tdisplay: inline-block;\n\tposition: relative;\n    cursor: pointer;\n}\n\n\n\nli input:checked{\n    background-color: #ffffff;\n\tcolor: #ffffff;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: 20px;\n    background-position: center;\n    background-repeat: no-repeat;\n\n}\n\n\n#todo-list li p{\n    font-size: 30px;\n}\n\n.todo-title-delete{\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n\n.todo-date-delete-container{\n    display: flex;\n    gap: 18px;\n}\n\n#form-todo{\n    margin-top: 17px;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    width: 80%;\n    max-width: 684px;\n    justify-content: center;\n}\n\n.title-priority-container{\n    opacity: 0;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 15px;\n    transition: 0.5s;\n}\n\n.title-priority-container.active{\n    opacity: 100;\n    transition: 0.5s;\n}\n/* Form Title */\n#todo-title{\n    font-size: 28px;\n    appearance: none;\n    background-color: transparent;\n    outline: none;\n    border: none;\n    padding-left: 5px;\n    border-left: 2px solid black;\n}\n\n#todo-title:focus{\n    background-color: #cccccc;\n}\n\n#todo-priority{\n    background-color: transparent;\n    border: none;\n    font-size: 28px;\n\n}\n\n#todo-btn{\n    width: 35px;\n    height: 35px;\n    font-size: 28px;\n    \n}\n\n#todo-btn.toggle{\n    background-color: #ffffff;\n\tcolor: #ffffff;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: 25px;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n\n.low-priority {\n    background-color: rgb(109, 230, 121);\n}\n\n.medium-priority{ background-color: rgb(231, 172, 61);}\n\n.high-priority{background-color: rgb(185, 72, 72);}\n\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');\n\n*{\n    margin: 0px;\n    padding: 0px;\n    box-sizing:border-box;\n    font-family: 'Libre Baskerville', serif;\n}\n.main-content{\n    display: grid;\n    height: 100vh;\n    width: 100%;\n    grid-template-columns: 25% 75%;\n    grid-template-rows: auto 1fr;\n    background-color: #bbbbbb;\n}\n\n#title{\n    grid-column: 1/-1;\n    display: flex;\n    background-color: #f0f0f0ee;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px 2px 7px rgba(22, 22, 22, 0.411);\n    z-index: 1;\n}\nh1{\n    font-size: 45px;\n    padding: 30px 20px;\n    font-weight: 700;\n \n}\n#title img{width: 80px;}\n\n\n\n\n#folder-header{\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 2px;\n}\n\ndiv h2 {\n    font-size: 30px;\n    color: #222222;\n}\n\n/* Trash Can in Folders Img */\ndiv div img{\n    width: 30px;\n    filter: drop-shadow(4px 3px 2px rgba(0, 0, 0, 0.308));\n}\n\n\n\n.main-folder-container{\n    padding: 20px 25px;\n    background-color: #e0e0e0;\n}\n\n.main-folder-container h2{\n    color: #222222;\n}\n\n.folder-container{\n    margin-left: 10px;\n    \n}\n\n.folder-container h2{\n    font-size: 30px;\n    color: #222222;\n}\n\n.folder-container div.active{\n    box-shadow:1px 1px 10px 1px rgba(0, 0, 0, 0.411);\n\n}\n\n.folder-add-container{\n    display: flex;\n    margin-top: 10px;\n    padding-top: 10px;\n    border-top: 1px solid gray;\n    font-size: 20px;\n    justify-content: space-between;\n    align-items: center;\n    transition: 0.7s;\n}\n\n#display-form-btn, #todo-btn{\n    border-radius: 20px;\n    font-size: 25px;\n    width: 30px;\n    height: 30px;\n    border: 2px solid black;\n    background-color: rgba(0, 134, 13, 0.281);\n    transition: 0.7s;\n    background-image: url(\"img/plus.svg\");\n}\n\n#form-folder{\n    background-color: transparent;\n    width: 0;\n    border-radius: 10px;\n    transition: 0.7s;\n}\n\n#form-folder.active{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    height: auto;\n    gap: 10px;\n    margin: 17px 0px;\n}\n\n.form-folder-input-box{\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    gap: 10px;\n}\n\n#form-folder input{\n    height: 30px;\n    font-size: 18px;\n    padding-left: 3px;\n    background-color: transparent;\n    border: none;\n    display: none;\n    outline: none;\n    border-left: 2px solid black;\n}\n\n#form-folder input:focus{\n    background-color: #c9c9c9;\n}\n#form-folder input.toggle{\n    display: inline;\n}\n\n\n#form-folder button{\n    border: none;\n    background-color: transparent;\n    display: none;\n    \n}\n#form-folder button.toggle{\n    border: none;\n    background-color: transparent;\n    display: inline;\n    \n}\n\n#form-folder button img{\n    width: 35px;\n}\n\n.dues-folder{\n    font-size: 28px;\n    margin-top: 15px;\n}\n#upcoming-dates-container{\n    display:none;\n    flex-direction: column;\n    align-items: center;\n    max-width: 2000px;\n    \n}\n\n#upcoming-dates-container h2{\n    width: 80%;\n    text-align: center;\n    margin-top: 10px;\n}\n\n\n#todo-list-date{\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n    margin: 10px 0px;\n}\n\n#todo-list-date li{\n    display: flex;\n    gap: 40px;\n    width: 100%;\n    border-radius: 7px;\n    padding: 1px 4px;\n    align-items: center;\n    font-size: 30px;\n}\n\n\n#task-container{\n    display: none;\t\n    align-items: center;\n    max-width: 2000px;\n    grid-column: 2;\n    grid-row: 2;\n    flex-direction: column;\n}\n\n/* \"Task(s)\" */\n#task-container h2{\n    width: 80%;\n    text-align: center;\n    margin-top: 10px;\n}\n\n\n\n\n#todo-list{\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n    margin: 10px 0px;\n\n}\n#todo-list li{\n    display: flex;\n    gap: 40px;\n    width: 100%;\n    border-radius: 7px;\n    padding: 1px 4px;\n    align-items: center;\n    font-size: 30px;\n}\nli input{\n    appearance: none;\n\tbox-shadow: 1px 2px 0px 0.5px rgba(0, 0, 0, 0.151), inset -2px -2px 1px rgba(0, 0, 0, 0.199);\n\tpadding: 9px;\n    margin-left: 2px;\n    width: 25px;\n    height: 24px;\n\tborder-radius: 35px;\n\tdisplay: inline-block;\n\tposition: relative;\n    cursor: pointer;\n}\n\n\n\nli input:checked{\n    background-color: #ffffff;\n\tcolor: #ffffff;\n    background-image: url(\"img/check-all.svg\");\n    background-size: 20px;\n    background-position: center;\n    background-repeat: no-repeat;\n\n}\n\n\n#todo-list li p{\n    font-size: 30px;\n}\n\n.todo-title-delete{\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n\n.todo-date-delete-container{\n    display: flex;\n    gap: 18px;\n}\n\n#form-todo{\n    margin-top: 17px;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    width: 80%;\n    max-width: 684px;\n    justify-content: center;\n}\n\n.title-priority-container{\n    opacity: 0;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 15px;\n    transition: 0.5s;\n}\n\n.title-priority-container.active{\n    opacity: 100;\n    transition: 0.5s;\n}\n/* Form Title */\n#todo-title{\n    font-size: 28px;\n    appearance: none;\n    background-color: transparent;\n    outline: none;\n    border: none;\n    padding-left: 5px;\n    border-left: 2px solid black;\n}\n\n#todo-title:focus{\n    background-color: #cccccc;\n}\n\n#todo-priority{\n    background-color: transparent;\n    border: none;\n    font-size: 28px;\n\n}\n\n#todo-btn{\n    width: 35px;\n    height: 35px;\n    font-size: 28px;\n    \n}\n\n#todo-btn.toggle{\n    background-color: #ffffff;\n\tcolor: #ffffff;\n    background-image: url(\"img/check-all.svg\");\n    background-size: 25px;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n\n.low-priority {\n    background-color: rgb(109, 230, 121);\n}\n\n.medium-priority{ background-color: rgb(231, 172, 61);}\n\n.high-priority{background-color: rgb(185, 72, 72);}\n\n\n"],"sourceRoot":""}]);
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
/* harmony export */   "selectedFolder": () => (/* binding */ selectedFolder),
/* harmony export */   "todoListContainer": () => (/* binding */ todoListContainer)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _img_trash_can_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/trash-can.svg */ "./src/img/trash-can.svg");
/* harmony import */ var _img_plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/plus.svg */ "./src/img/plus.svg");





const todoListContainer = document.querySelector("#task-container");
const inputDescription = document.querySelector("#todo-description")
const inputFolder = document.querySelector("#folder-input");
const addFolderBtn = document.querySelector("#add-folder-btn");
const inputTitle = document.querySelector("#todo-title");
const showFolderFormBtn = document.querySelector("#display-form-btn")
const form = document.querySelector("#form-folder");

_index_js__WEBPACK_IMPORTED_MODULE_0__["default"] = JSON.parse(localStorage.getItem('folders'));

let todoListElement = document.getElementById("todo-list");
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
    console.log(showFolderFormBtn.style.backgroundImage !== 'none')
    if(showFolderFormBtn.style.backgroundImage !== "none"){
        showFolderFormBtn.style.backgroundImage = "none";
        showFolderFormBtn.textContent = "✕"
        showFolderFormBtn.style.backgroundColor = "rgb(185, 72, 72)"
    }else {
        showFolderFormBtn.style.backgroundImage = 'url("'+ _img_plus_svg__WEBPACK_IMPORTED_MODULE_3__ +'")';
        showFolderFormBtn.textContent = ""
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

    addTodo(title, priority, date, complete, id){
        if(selectedFolder == undefined) return;
        let newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo(title, priority, date, complete)
        _index_js__WEBPACK_IMPORTED_MODULE_0__["default"][id].todo.push(newTodo)
        displayFolder(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"][id].todo);
        inputTitle.value = "";
        localStorage.setItem('folders', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]))
        return newTodo
    }
    

}
let newStorage = [];
let prevActive = undefined;

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
        if(_todo_js__WEBPACK_IMPORTED_MODULE_1__.upcomingContainer.style.display == "flex" ){
            
        }
       // if(prevActive !== currentFolder) prevActive.classList.toggle("active")
    //prevents the folder to re-open
        if(prevActive !== undefined && currentFolder == prevActive) {
        prevActive.classList.toggle("active");
        todoListContainer.style.display = "none";
        prevActive = undefined
        return
        };

        displayFolder(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"][newFolder.id].todo);
        if(prevActive !== undefined) prevActive.classList.toggle("active")
        currentFolder.classList.toggle("active")

        

        prevActive = currentFolder;
        selectedFolder = currentFolder;
        console.log(prevActive)
        todoListContainer.style.display = "flex"
    });

    localStorage.setItem('folders', JSON.stringify(newStorage))

    
}

function displayFolder(todoList){
    _todo_js__WEBPACK_IMPORTED_MODULE_1__.upcomingContainer.style.display = "none"
    todoListElement.innerHTML = "";
    console.log(todoList)
	for (let i = 0; i < todoList.length; i++) {
		let listItemElement = document.createElement("li");
        let listItemText = document.createElement("p");
        let listItemCompletion = document.createElement('input');
        let listItemDate = document.createElement('p');
        let listItemDeleteBtn = new Image();
        let listContainer = document.createElement('div');
        let dateAndDeleteContainer = document.createElement('div');

        if(todoList[i].priority == "Low"){listItemCompletion.classList.add("low-priority")}
        else if(todoList[i].priority == "Medium"){listItemCompletion.classList.add("medium-priority")}
        else{listItemCompletion.classList.add("high-priority")};

        listItemCompletion.setAttribute("type", "checkbox");
        listItemCompletion.addEventListener("change", () => {
            if(todoList[i].complete){todoList[i].complete = false;
            }else{todoList[i].complete = true};

            if(todoList[i].complete){
                listItemDeleteBtn.style.visibility = "visible";
                listItemElement.style.boxShadow = "0 0 7px 2px rgba(0, 0, 0, 0.311)";
            }else{
                listItemDeleteBtn.style.visibility = "hidden";
                listItemElement.style.boxShadow = "none";            };

            localStorage.setItem('folders', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
        })

        listItemDeleteBtn.addEventListener('click', () => {
            ;(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.deleteTodo)(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"][selectedFolder.id].todo[i]);

        })

        listItemDeleteBtn.classList.add("todo-delete");
        listContainer.classList.add("todo-title-delete");
        dateAndDeleteContainer.classList.add("todo-date-delete-container");
        
		listItemText.textContent = todoList[i].title;
        listItemDate.textContent = todoList[i].date;
        listItemCompletion.checked = todoList[i].complete;
        listItemDeleteBtn.src = _img_trash_can_svg__WEBPACK_IMPORTED_MODULE_2__;
        // Adds CSS to completed Task when displaying folder
        if(todoList[i].complete){
            listItemDeleteBtn.style.visibility = "visible";
            listItemElement.style.boxShadow = "2px 0 7px 1px rgba(0, 0, 0, 0.311)";
        }else{
            listItemDeleteBtn.style.visibility = "hidden";
            listItemElement.style.boxShadow = "none";
        };

		todoListElement.appendChild(listItemElement);
        listItemElement.appendChild(listItemCompletion);
        listItemElement.appendChild(listContainer);
        listContainer.appendChild(listItemText);
        dateAndDeleteContainer.appendChild(listItemDate);
        dateAndDeleteContainer.appendChild(listItemDeleteBtn);
        listContainer.appendChild(dateAndDeleteContainer);

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
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo),
/* harmony export */   "upcomingContainer": () => (/* binding */ upcomingContainer)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _folder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder.js */ "./src/folder.js");
/* harmony import */ var _img_trash_can_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/trash-can.svg */ "./src/img/trash-can.svg");





const addTodoBtn = document.querySelector("#todo-btn");
const todoPriority = document.querySelector("#todo-priority");
const inputTitle = document.querySelector("#todo-title");
const dueDate = document.querySelector("#date-todo");
const formInfoContainer = document.querySelector(".title-priority-container");
const dueDateFolder = document.querySelector(".dues-folder");
const upcomingContainer = document.querySelector("#upcoming-dates-container");

let upcomingTodoList = document.getElementById("todo-list-date");
let todoBtnCount = 0;
let allTodo = []
let dateTodo = []
let tempAllTodo =[]



addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(todoBtnCount == 0){
        addTodoBtn.textContent = "";
        addTodoBtn.classList.toggle("toggle");
        formInfoContainer.classList.toggle("active");

        ++todoBtnCount
        console.log(todoBtnCount)

    }else{
        if(inputTitle.value == "" || todoPriority.value == "") {
        addTodoBtn.classList.toggle("toggle");
        formInfoContainer.classList.toggle("active");
        todoBtnCount--;
        return
        }
        new _folder_js__WEBPACK_IMPORTED_MODULE_1__.Folder().addTodo(
            inputTitle.value, todoPriority.value, dueDate.value, false, _folder_js__WEBPACK_IMPORTED_MODULE_1__.selectedFolder.id);
        addTodoBtn.classList.toggle("toggle");
        formInfoContainer.classList.toggle("active");
        todoBtnCount--;
        console.log(todoBtnCount);

        
    }
    
});

dueDateFolder.addEventListener('click', (e) => {

    tempAllTodo = []
    allTodo = []
    for(let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].length; i++){
       
        tempAllTodo.push(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"][i].todo);


        allTodo.push(tempAllTodo[i]);
        

    }
    allTodo.forEach((e) => {
        for(let i = 0; i < e.length; i++){
            
            if(e[i].date !== undefined && !dateTodo.includes(e[i])) dateTodo.push(e[i])
        }
    })
    tempAllTodo = allTodo
    console.log(dateTodo)
    console.log(tempAllTodo);
    console.log(allTodo);
    displayUpcoming(dateTodo);
    upcomingContainer.style.display = "flex"

})

function displayUpcoming(dateTodo){
    _folder_js__WEBPACK_IMPORTED_MODULE_1__.todoListContainer.style.display = "none"
	upcomingTodoList.innerHTML = "";
    for(let i = 0; i < dateTodo.length; i++){
        let listItemElement = document.createElement("li");
        let listItemText = document.createElement("p");
        let listItemCompletion = document.createElement('input');
        let listItemDate = document.createElement('p');
        let listItemDeleteBtn = new Image();
        let listContainer = document.createElement('div');
        let dateAndDeleteContainer = document.createElement('div');

        if(dateTodo[i].priority == "Low"){listItemCompletion.classList.add("low-priority")}
        else if(dateTodo[i].priority == "Medium"){listItemCompletion.classList.add("medium-priority")}
        else{listItemCompletion.classList.add("high-priority")};

        listItemCompletion.setAttribute("type", "checkbox");
        listItemCompletion.addEventListener("change", () => {
            if(dateTodo[i].complete){dateTodo[i].complete = false;
            }else{dateTodo[i].complete = true};

            if(dateTodo[i].complete){
                listItemDeleteBtn.style.visibility = "visible";
                listItemElement.style.boxShadow = "0 0 7px 2px rgba(0, 0, 0, 0.311)";
            }else{
                listItemDeleteBtn.style.visibility = "hidden";
                listItemElement.style.boxShadow = "none";            };

            localStorage.setItem('folders', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
        })

        listItemDeleteBtn.addEventListener('click', () => {
            deleteTodo(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"][_folder_js__WEBPACK_IMPORTED_MODULE_1__.selectedFolder.id].todo[i]);

        })

        listItemDeleteBtn.classList.add("todo-delete");
        listContainer.classList.add("todo-title-delete");
        dateAndDeleteContainer.classList.add("todo-date-delete-container");
        
		listItemText.textContent = dateTodo[i].title;
        listItemDate.textContent = dateTodo[i].date;
        listItemCompletion.checked = dateTodo[i].complete;
        listItemDeleteBtn.src = _img_trash_can_svg__WEBPACK_IMPORTED_MODULE_2__;
        // Adds CSS to completed Task when displaying folder
        if(dateTodo[i].complete){
            listItemDeleteBtn.style.visibility = "visible";
            listItemElement.style.boxShadow = "2px 0 7px 1px rgba(0, 0, 0, 0.311)";
        }else{
            listItemDeleteBtn.style.visibility = "hidden";
            listItemElement.style.boxShadow = "none";
        };

		upcomingTodoList.appendChild(listItemElement);
        listItemElement.appendChild(listItemCompletion);
        listItemElement.appendChild(listContainer);
        listContainer.appendChild(listItemText);
        dateAndDeleteContainer.appendChild(listItemDate);
        dateAndDeleteContainer.appendChild(listItemDeleteBtn);
        listContainer.appendChild(dateAndDeleteContainer);

	}
    
}


class Todo{
    constructor(title, priority, date, complete){
        this.title = title;
        this.priority = priority;
        this.complete = complete;
        this.date = date;
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

/***/ "./src/img/plus.svg":
/*!**************************!*\
  !*** ./src/img/plus.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2ZvbGRlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaW1nL3BsdXMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiaW1nL2NoZWNrLWFsbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmO1xcbn1cXG4ubWFpbi1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNzUlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiYmJiO1xcbn1cXG5cXG4jdGl0bGV7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwZWU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDdweCByZ2JhKDIyLCAyMiwgMjIsIDAuNDExKTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuaDF7XFxuICAgIGZvbnQtc2l6ZTogNDVweDtcXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiBcXG59XFxuI3RpdGxlIGltZ3t3aWR0aDogODBweDt9XFxuXFxuXFxuXFxuXFxuI2ZvbGRlci1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbn1cXG5cXG5kaXYgaDIge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiAjMjIyMjIyO1xcbn1cXG5cXG4vKiBUcmFzaCBDYW4gaW4gRm9sZGVycyBJbWcgKi9cXG5kaXYgZGl2IGltZ3tcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDNweCAycHggcmdiYSgwLCAwLCAwLCAwLjMwOCkpO1xcbn1cXG5cXG5cXG5cXG4ubWFpbi1mb2xkZXItY29udGFpbmVye1xcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcblxcbi5tYWluLWZvbGRlci1jb250YWluZXIgaDJ7XFxuICAgIGNvbG9yOiAjMjIyMjIyO1xcbn1cXG5cXG4uZm9sZGVyLWNvbnRhaW5lcntcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIFxcbn1cXG5cXG4uZm9sZGVyLWNvbnRhaW5lciBoMntcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBjb2xvcjogIzIyMjIyMjtcXG59XFxuXFxuLmZvbGRlci1jb250YWluZXIgZGl2LmFjdGl2ZXtcXG4gICAgYm94LXNoYWRvdzoxcHggMXB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC40MTEpO1xcblxcbn1cXG5cXG4uZm9sZGVyLWFkZC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuN3M7XFxufVxcblxcbiNkaXNwbGF5LWZvcm0tYnRuLCAjdG9kby1idG57XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTM0LCAxMywgMC4yODEpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4jZm9ybS1mb2xkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB3aWR0aDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogMC43cztcXG59XFxuXFxuI2Zvcm0tZm9sZGVyLmFjdGl2ZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbjogMTdweCAwcHg7XFxufVxcblxcbi5mb3JtLWZvbGRlci1pbnB1dC1ib3h7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI2Zvcm0tZm9sZGVyIGlucHV0e1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbiNmb3JtLWZvbGRlciBpbnB1dDpmb2N1c3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M5YzljOTtcXG59XFxuI2Zvcm0tZm9sZGVyIGlucHV0LnRvZ2dsZXtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG5cXG4jZm9ybS1mb2xkZXIgYnV0dG9ue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBcXG59XFxuI2Zvcm0tZm9sZGVyIGJ1dHRvbi50b2dnbGV7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgXFxufVxcblxcbiNmb3JtLWZvbGRlciBidXR0b24gaW1ne1xcbiAgICB3aWR0aDogMzVweDtcXG59XFxuXFxuLmR1ZXMtZm9sZGVye1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcbiN1cGNvbWluZy1kYXRlcy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAyMDAwcHg7XFxuICAgIFxcbn1cXG5cXG4jdXBjb21pbmctZGF0ZXMtY29udGFpbmVyIGgye1xcbiAgICB3aWR0aDogODAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcblxcbiN0b2RvLWxpc3QtZGF0ZXtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbn1cXG5cXG4jdG9kby1saXN0LWRhdGUgbGl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgcGFkZGluZzogMXB4IDRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG5cXG4jdGFzay1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFx0XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMjAwMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi8qIFxcXCJUYXNrKHMpXFxcIiAqL1xcbiN0YXNrLWNvbnRhaW5lciBoMntcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG4jdG9kby1saXN0e1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxuXFxufVxcbiN0b2RvLWxpc3QgbGl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgcGFkZGluZzogMXB4IDRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5saSBpbnB1dHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRib3gtc2hhZG93OiAxcHggMnB4IDBweCAwLjVweCByZ2JhKDAsIDAsIDAsIDAuMTUxKSwgaW5zZXQgLTJweCAtMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTk5KTtcXG5cXHRwYWRkaW5nOiA5cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMzVweDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcblxcbmxpIGlucHV0OmNoZWNrZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuXFx0Y29sb3I6ICNmZmZmZmY7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcbn1cXG5cXG5cXG4jdG9kby1saXN0IGxpIHB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLnRvZG8tdGl0bGUtZGVsZXRle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9kby1kYXRlLWRlbGV0ZS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMThweDtcXG59XFxuXFxuI2Zvcm0tdG9kb3tcXG4gICAgbWFyZ2luLXRvcDogMTdweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1heC13aWR0aDogNjg0cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUtcHJpb3JpdHktY29udGFpbmVye1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi50aXRsZS1wcmlvcml0eS1jb250YWluZXIuYWN0aXZle1xcbiAgICBvcGFjaXR5OiAxMDA7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcbi8qIEZvcm0gVGl0bGUgKi9cXG4jdG9kby10aXRsZXtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3RvZG8tdGl0bGU6Zm9jdXN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XFxufVxcblxcbiN0b2RvLXByaW9yaXR5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuXFxufVxcblxcbiN0b2RvLWJ0bntcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBcXG59XFxuXFxuI3RvZG8tYnRuLnRvZ2dsZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG5cXHRjb2xvcjogI2ZmZmZmZjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcblxcbi5sb3ctcHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5LCAyMzAsIDEyMSk7XFxufVxcblxcbi5tZWRpdW0tcHJpb3JpdHl7IGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDE3MiwgNjEpO31cXG5cXG4uaGlnaC1wcmlvcml0eXtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1LCA3MiwgNzIpO31cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lB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QUFJQTtJQUNJLHlCQUF5QjtDQUM1QixjQUFjO0lBQ1gseURBQTBDO0lBQzFDLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IsNEJBQTRCOztBQUVoQzs7O0FBR0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0EsZUFBZTtBQUNmO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSx5QkFBeUI7Q0FDNUIsY0FBYztJQUNYLHlEQUEwQztJQUMxQyxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQzs7O0FBR0E7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUEsa0JBQWtCLG1DQUFtQyxDQUFDOztBQUV0RCxlQUFlLGtDQUFrQyxDQUFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qe1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZjtcXG59XFxuLm1haW4tY29udGVudHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDc1JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYmJiYjtcXG59XFxuXFxuI3RpdGxle1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMGVlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA3cHggcmdiYSgyMiwgMjIsIDIyLCAwLjQxMSk7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcbmgxe1xcbiAgICBmb250LXNpemU6IDQ1cHg7XFxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gXFxufVxcbiN0aXRsZSBpbWd7d2lkdGg6IDgwcHg7fVxcblxcblxcblxcblxcbiNmb2xkZXItaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcXG59XFxuXFxuZGl2IGgyIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBjb2xvcjogIzIyMjIyMjtcXG59XFxuXFxuLyogVHJhc2ggQ2FuIGluIEZvbGRlcnMgSW1nICovXFxuZGl2IGRpdiBpbWd7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDRweCAzcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zMDgpKTtcXG59XFxuXFxuXFxuXFxuLm1haW4tZm9sZGVyLWNvbnRhaW5lcntcXG4gICAgcGFkZGluZzogMjBweCAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cXG4ubWFpbi1mb2xkZXItY29udGFpbmVyIGgye1xcbiAgICBjb2xvcjogIzIyMjIyMjtcXG59XFxuXFxuLmZvbGRlci1jb250YWluZXJ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBcXG59XFxuXFxuLmZvbGRlci1jb250YWluZXIgaDJ7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgY29sb3I6ICMyMjIyMjI7XFxufVxcblxcbi5mb2xkZXItY29udGFpbmVyIGRpdi5hY3RpdmV7XFxuICAgIGJveC1zaGFkb3c6MXB4IDFweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNDExKTtcXG5cXG59XFxuXFxuLmZvbGRlci1hZGQtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbn1cXG5cXG4jZGlzcGxheS1mb3JtLWJ0biwgI3RvZG8tYnRue1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEzNCwgMTMsIDAuMjgxKTtcXG4gICAgdHJhbnNpdGlvbjogMC43cztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJpbWcvcGx1cy5zdmdcXFwiKTtcXG59XFxuXFxuI2Zvcm0tZm9sZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuN3M7XFxufVxcblxcbiNmb3JtLWZvbGRlci5hY3RpdmV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW46IDE3cHggMHB4O1xcbn1cXG5cXG4uZm9ybS1mb2xkZXItaW5wdXQtYm94e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNmb3JtLWZvbGRlciBpbnB1dHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jZm9ybS1mb2xkZXIgaW5wdXQ6Zm9jdXN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWM5Yzk7XFxufVxcbiNmb3JtLWZvbGRlciBpbnB1dC50b2dnbGV7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuXFxuI2Zvcm0tZm9sZGVyIGJ1dHRvbntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgXFxufVxcbiNmb3JtLWZvbGRlciBidXR0b24udG9nZ2xle1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIFxcbn1cXG5cXG4jZm9ybS1mb2xkZXIgYnV0dG9uIGltZ3tcXG4gICAgd2lkdGg6IDM1cHg7XFxufVxcblxcbi5kdWVzLWZvbGRlcntcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4jdXBjb21pbmctZGF0ZXMtY29udGFpbmVye1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMjAwMHB4O1xcbiAgICBcXG59XFxuXFxuI3VwY29taW5nLWRhdGVzLWNvbnRhaW5lciBoMntcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5cXG4jdG9kby1saXN0LWRhdGV7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG59XFxuXFxuI3RvZG8tbGlzdC1kYXRlIGxpe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIHBhZGRpbmc6IDFweCA0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuXFxuI3Rhc2stY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBub25lO1xcdFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDIwMDBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiBcXFwiVGFzayhzKVxcXCIgKi9cXG4jdGFzay1jb250YWluZXIgaDJ7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuXFxuXFxuXFxuI3RvZG8tbGlzdHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcblxcbn1cXG4jdG9kby1saXN0IGxpe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIHBhZGRpbmc6IDFweCA0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxubGkgaW5wdXR7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0Ym94LXNoYWRvdzogMXB4IDJweCAwcHggMC41cHggcmdiYSgwLCAwLCAwLCAwLjE1MSksIGluc2V0IC0ycHggLTJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE5OSk7XFxuXFx0cGFkZGluZzogOXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDM1cHg7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG5saSBpbnB1dDpjaGVja2Vke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcblxcdGNvbG9yOiAjZmZmZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImltZy9jaGVjay1hbGwuc3ZnXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcbn1cXG5cXG5cXG4jdG9kby1saXN0IGxpIHB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLnRvZG8tdGl0bGUtZGVsZXRle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9kby1kYXRlLWRlbGV0ZS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMThweDtcXG59XFxuXFxuI2Zvcm0tdG9kb3tcXG4gICAgbWFyZ2luLXRvcDogMTdweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1heC13aWR0aDogNjg0cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUtcHJpb3JpdHktY29udGFpbmVye1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi50aXRsZS1wcmlvcml0eS1jb250YWluZXIuYWN0aXZle1xcbiAgICBvcGFjaXR5OiAxMDA7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcbi8qIEZvcm0gVGl0bGUgKi9cXG4jdG9kby10aXRsZXtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3RvZG8tdGl0bGU6Zm9jdXN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XFxufVxcblxcbiN0b2RvLXByaW9yaXR5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuXFxufVxcblxcbiN0b2RvLWJ0bntcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBcXG59XFxuXFxuI3RvZG8tYnRuLnRvZ2dsZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG5cXHRjb2xvcjogI2ZmZmZmZjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJpbWcvY2hlY2stYWxsLnN2Z1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuXFxuLmxvdy1wcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDksIDIzMCwgMTIxKTtcXG59XFxuXFxuLm1lZGl1bS1wcmlvcml0eXsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMTcyLCA2MSk7fVxcblxcbi5oaWdoLXByaW9yaXR5e2JhY2tncm91bmQtY29sb3I6IHJnYigxODUsIDcyLCA3Mik7fVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBmb2xkZXJTdG9yYWdlIGZyb20gJy4vaW5kZXguanMnXG5pbXBvcnQge1RvZG8sIGRlbGV0ZVRvZG8sIHVwY29taW5nQ29udGFpbmVyLCBleGFtcGxlRm9sZGVyfSBmcm9tICcuL3RvZG8uanMnXG5pbXBvcnQgdHJhc2hDYW5TdmcgZnJvbSAnLi9pbWcvdHJhc2gtY2FuLnN2ZydcbmltcG9ydCBwbHVzU3ZnIGZyb20gJy4vaW1nL3BsdXMuc3ZnJ1xuXG5jb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1jb250YWluZXJcIik7XG5jb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWRlc2NyaXB0aW9uXCIpXG5jb25zdCBpbnB1dEZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9sZGVyLWlucHV0XCIpO1xuY29uc3QgYWRkRm9sZGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtZm9sZGVyLWJ0blwiKTtcbmNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tdGl0bGVcIik7XG5jb25zdCBzaG93Rm9sZGVyRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlzcGxheS1mb3JtLWJ0blwiKVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1mb2xkZXJcIik7XG5cbmZvbGRlclN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb2xkZXJzJykpO1xuXG5sZXQgdG9kb0xpc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWxpc3RcIik7XG5sZXQgYWRkRm9sZGVyID0gZmFsc2VcbmxldCBpID0gLTFcbmxldCBzZWxlY3RlZEZvbGRlciA9IHVuZGVmaW5lZFxuXG5hZGRGb2xkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZihpbnB1dEZvbGRlci52YWx1ZSA9PSAnJyB8fCBpbnB1dEZvbGRlci52YWx1ZSA9PSBcIkNvbW1vbiBOYW1lIEZvdW5kXCIpIHJldHVybjtcbiAgICBpZihmb2xkZXJTdG9yYWdlLnNvbWUoZm9sZGVyID0+IGZvbGRlci5uYW1lID09IGlucHV0Rm9sZGVyLnZhbHVlKSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGlucHV0Rm9sZGVyLnZhbHVlID0gXCJcIiwgMjAwMCk7XG4gICAgICAgIHJldHVybiBpbnB1dEZvbGRlci52YWx1ZSA9IFwiQ29tbW9uIE5hbWUgRm91bmRcIlxuICAgIH07XG4gICAgYWRkRm9sZGVyID0gdHJ1ZTtcbiAgICBjcmVhdGVGb2xkZXIoaW5wdXRGb2xkZXIudmFsdWUsIGlucHV0RGVzY3JpcHRpb24udmFsdWUpO1xuICAgIGFkZEZvbGRlciA9IGZhbHNlO1xuICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBhZGRGb2xkZXJCdG4uY2xhc3NMaXN0LnRvZ2dsZShcInRvZ2dsZVwiKTtcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKS5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZScpKVxuICAgIHNob3dGb2xkZXJGb3JtQnRuLnRleHRDb250ZW50ID0gXCIrXCJcbiAgICBzaG93Rm9sZGVyRm9ybUJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMTM0LCAxMywgMC4yODEpXCJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9sZGVycycsIEpTT04uc3RyaW5naWZ5KGZvbGRlclN0b3JhZ2UpKVxufSk7XG5cbnNob3dGb2xkZXJGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBhZGRGb2xkZXJCdG4uY2xhc3NMaXN0LnRvZ2dsZShcInRvZ2dsZVwiKTtcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKS5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZScpKVxuICAgIGNvbnNvbGUubG9nKGZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpKVxuICAgIGNvbnNvbGUubG9nKHNob3dGb2xkZXJGb3JtQnRuLnN0eWxlLmJhY2tncm91bmRJbWFnZSAhPT0gJ25vbmUnKVxuICAgIGlmKHNob3dGb2xkZXJGb3JtQnRuLnN0eWxlLmJhY2tncm91bmRJbWFnZSAhPT0gXCJub25lXCIpe1xuICAgICAgICBzaG93Rm9sZGVyRm9ybUJ0bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIm5vbmVcIjtcbiAgICAgICAgc2hvd0ZvbGRlckZvcm1CdG4udGV4dENvbnRlbnQgPSBcIuKclVwiXG4gICAgICAgIHNob3dGb2xkZXJGb3JtQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDE4NSwgNzIsIDcyKVwiXG4gICAgfWVsc2Uge1xuICAgICAgICBzaG93Rm9sZGVyRm9ybUJ0bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiJysgcGx1c1N2ZyArJ1wiKSc7XG4gICAgICAgIHNob3dGb2xkZXJGb3JtQnRuLnRleHRDb250ZW50ID0gXCJcIlxuICAgICAgICBzaG93Rm9sZGVyRm9ybUJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMTM0LCAxMywgMC4yODEpXCJcbiAgICB9XG59KVxuXG5cblxuY2xhc3MgRm9sZGVye1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBpZCwgdG9kbyl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnRvZG8gPSB0b2RvO1xuICAgIH1cblxuICAgIGFkZFRvZG8odGl0bGUsIHByaW9yaXR5LCBkYXRlLCBjb21wbGV0ZSwgaWQpe1xuICAgICAgICBpZihzZWxlY3RlZEZvbGRlciA9PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyh0aXRsZSwgcHJpb3JpdHksIGRhdGUsIGNvbXBsZXRlKVxuICAgICAgICBmb2xkZXJTdG9yYWdlW2lkXS50b2RvLnB1c2gobmV3VG9kbylcbiAgICAgICAgZGlzcGxheUZvbGRlcihmb2xkZXJTdG9yYWdlW2lkXS50b2RvKTtcbiAgICAgICAgaW5wdXRUaXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb2xkZXJzJywgSlNPTi5zdHJpbmdpZnkoZm9sZGVyU3RvcmFnZSkpXG4gICAgICAgIHJldHVybiBuZXdUb2RvXG4gICAgfVxuICAgIFxuXG59XG5sZXQgbmV3U3RvcmFnZSA9IFtdO1xubGV0IHByZXZBY3RpdmUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvbGRlcihmb2xkZXJUaXRsZSwgZGVzY3JpcHRpb24sIHRvZG8pe1xuICAgIGNvbnN0IGZvbGRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9sZGVyLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjdXJyZW50Rm9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBmb2xkZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRlbGV0ZUZvbGRlciA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGZvbGRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3QgZm9sZGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGlmKGV4YW1wbGVGb2xkZXIpe1xuXG4gICAgfVxuICAgIC8vIG1ha2VzIG5ldyBmb2xkZXIgaGF2ZSBhIGVtcHR5IHRvZG86IGFycmF5XG4gICAgaWYgKHRvZG8gPT0gdW5kZWZpbmVkKSB0b2RvID0gW107XG4gICAgbGV0IG5ld0ZvbGRlciA9IG5ldyBGb2xkZXIoZm9sZGVyVGl0bGUsIGRlc2NyaXB0aW9uLCBnZXRJZChpKSwgdG9kbyk7XG5cbiAgLy8gIGNvbnNvbGUubG9nKG5ld0ZvbGRlcilcbiAgICBsZXQgZGVsZXRlZCA9IGZhbHNlO1xuICAgIG5ld1N0b3JhZ2UucHVzaChuZXdGb2xkZXIpXG4gICAvLyBjb25zb2xlLnRhYmxlKG5ld1N0b3JhZ2UpXG4gICAgaSA9IGdldElkKGkpO1xuICAgIGN1cnJlbnRGb2xkZXIuaWQgPSBcImZvbGRlclwiICsgaTtcblxuICAgIGRlbGV0ZUZvbGRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGRlbGV0ZWQgPSB0cnVlO1xuICAgICAgICBsZXQgbmV3U3RvcmFnZSA9IGZvbGRlclN0b3JhZ2UuZmlsdGVyKChyKSA9PiB7IHJldHVybiByLm5hbWUgIT0gbmV3Rm9sZGVyLm5hbWV9KTtcbiAgICAgICAgZm9sZGVyU3RvcmFnZSA9IG5ld1N0b3JhZ2VcblxuICAgICAgICBpID0gLTFcbiAgICAgICAgcmVmcmVzaEZvbGRlcigpXG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcnMnLCBKU09OLnN0cmluZ2lmeShmb2xkZXJTdG9yYWdlKSlcblxuICAgICAgICBjb25zb2xlLmxvZyhuZXdTdG9yYWdlKVxuICAgICAgICBjb25zb2xlLmxvZyhmb2xkZXJTdG9yYWdlKVxuXG4gICAgICAgIH0pXG4gICAgXG4gICAgXG5cbiAgICBkZWxldGVGb2xkZXIuc3JjID0gdHJhc2hDYW5Tdmc7XG5cbiAgICBmb2xkZXJIZWFkZXIuaWQgPSBcImZvbGRlci1oZWFkZXJcIjtcblxuICAgIGZvbGRlclRleHQudGV4dENvbnRlbnQgPSBmb2xkZXJUaXRsZTtcbiAgICBmb2xkZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gICAgZm9sZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRGb2xkZXIpO1xuICAgIGN1cnJlbnRGb2xkZXIuYXBwZW5kQ2hpbGQoZm9sZGVySGVhZGVyKTtcbiAgICBmb2xkZXJIZWFkZXIuYXBwZW5kQ2hpbGQoZm9sZGVyVGV4dCk7XG4gICAgZm9sZGVySGVhZGVyLmFwcGVuZENoaWxkKGRlbGV0ZUZvbGRlcik7XG4gICAgY3VycmVudEZvbGRlci5hcHBlbmRDaGlsZChmb2xkZXJEZXNjcmlwdGlvbik7XG4gICAgXG4gICAgaW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgaW5wdXRGb2xkZXIudmFsdWUgPSBcIlwiO1xuXG4gICAgaWYoYWRkRm9sZGVyKWZvbGRlclN0b3JhZ2UucHVzaChuZXdGb2xkZXIpO1xuICAgIFxuICAgIGN1cnJlbnRGb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvL3ByZXZlbnRzIHRoZSBmb2xkZXIgd2hpY2ggaXMgdG8gYmUgZGVsZXRlZCBmcm9tIG9wZW5pbmdcbiAgICAgICAgaWYoZGVsZXRlZCkgcmV0dXJuIGRlbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYodXBjb21pbmdDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PSBcImZsZXhcIiApe1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAvLyBpZihwcmV2QWN0aXZlICE9PSBjdXJyZW50Rm9sZGVyKSBwcmV2QWN0aXZlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICAvL3ByZXZlbnRzIHRoZSBmb2xkZXIgdG8gcmUtb3BlblxuICAgICAgICBpZihwcmV2QWN0aXZlICE9PSB1bmRlZmluZWQgJiYgY3VycmVudEZvbGRlciA9PSBwcmV2QWN0aXZlKSB7XG4gICAgICAgIHByZXZBY3RpdmUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgdG9kb0xpc3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBwcmV2QWN0aXZlID0gdW5kZWZpbmVkXG4gICAgICAgIHJldHVyblxuICAgICAgICB9O1xuXG4gICAgICAgIGRpc3BsYXlGb2xkZXIoZm9sZGVyU3RvcmFnZVtuZXdGb2xkZXIuaWRdLnRvZG8pO1xuICAgICAgICBpZihwcmV2QWN0aXZlICE9PSB1bmRlZmluZWQpIHByZXZBY3RpdmUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgICAgICBjdXJyZW50Rm9sZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcblxuICAgICAgICBcblxuICAgICAgICBwcmV2QWN0aXZlID0gY3VycmVudEZvbGRlcjtcbiAgICAgICAgc2VsZWN0ZWRGb2xkZXIgPSBjdXJyZW50Rm9sZGVyO1xuICAgICAgICBjb25zb2xlLmxvZyhwcmV2QWN0aXZlKVxuICAgICAgICB0b2RvTGlzdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICB9KTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb2xkZXJzJywgSlNPTi5zdHJpbmdpZnkobmV3U3RvcmFnZSkpXG5cbiAgICBcbn1cblxuZnVuY3Rpb24gZGlzcGxheUZvbGRlcih0b2RvTGlzdCl7XG4gICAgdXBjb21pbmdDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgdG9kb0xpc3RFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc29sZS5sb2codG9kb0xpc3QpXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgbGlzdEl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsZXQgbGlzdEl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGxldCBsaXN0SXRlbUNvbXBsZXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBsZXQgbGlzdEl0ZW1EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgbGlzdEl0ZW1EZWxldGVCdG4gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbGV0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGRhdGVBbmREZWxldGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBpZih0b2RvTGlzdFtpXS5wcmlvcml0eSA9PSBcIkxvd1wiKXtsaXN0SXRlbUNvbXBsZXRpb24uY2xhc3NMaXN0LmFkZChcImxvdy1wcmlvcml0eVwiKX1cbiAgICAgICAgZWxzZSBpZih0b2RvTGlzdFtpXS5wcmlvcml0eSA9PSBcIk1lZGl1bVwiKXtsaXN0SXRlbUNvbXBsZXRpb24uY2xhc3NMaXN0LmFkZChcIm1lZGl1bS1wcmlvcml0eVwiKX1cbiAgICAgICAgZWxzZXtsaXN0SXRlbUNvbXBsZXRpb24uY2xhc3NMaXN0LmFkZChcImhpZ2gtcHJpb3JpdHlcIil9O1xuXG4gICAgICAgIGxpc3RJdGVtQ29tcGxldGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIGxpc3RJdGVtQ29tcGxldGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHRvZG9MaXN0W2ldLmNvbXBsZXRlKXt0b2RvTGlzdFtpXS5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfWVsc2V7dG9kb0xpc3RbaV0uY29tcGxldGUgPSB0cnVlfTtcblxuICAgICAgICAgICAgaWYodG9kb0xpc3RbaV0uY29tcGxldGUpe1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtRGVsZXRlQnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbUVsZW1lbnQuc3R5bGUuYm94U2hhZG93ID0gXCIwIDAgN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMzExKVwiO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW1FbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9IFwibm9uZVwiOyAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb2xkZXJzJywgSlNPTi5zdHJpbmdpZnkoZm9sZGVyU3RvcmFnZSkpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGxpc3RJdGVtRGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlVG9kbyhmb2xkZXJTdG9yYWdlW3NlbGVjdGVkRm9sZGVyLmlkXS50b2RvW2ldKTtcblxuICAgICAgICB9KVxuXG4gICAgICAgIGxpc3RJdGVtRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlbGV0ZVwiKTtcbiAgICAgICAgbGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZS1kZWxldGVcIik7XG4gICAgICAgIGRhdGVBbmREZWxldGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tZGF0ZS1kZWxldGUtY29udGFpbmVyXCIpO1xuICAgICAgICBcblx0XHRsaXN0SXRlbVRleHQudGV4dENvbnRlbnQgPSB0b2RvTGlzdFtpXS50aXRsZTtcbiAgICAgICAgbGlzdEl0ZW1EYXRlLnRleHRDb250ZW50ID0gdG9kb0xpc3RbaV0uZGF0ZTtcbiAgICAgICAgbGlzdEl0ZW1Db21wbGV0aW9uLmNoZWNrZWQgPSB0b2RvTGlzdFtpXS5jb21wbGV0ZTtcbiAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uc3JjID0gdHJhc2hDYW5Tdmc7XG4gICAgICAgIC8vIEFkZHMgQ1NTIHRvIGNvbXBsZXRlZCBUYXNrIHdoZW4gZGlzcGxheWluZyBmb2xkZXJcbiAgICAgICAgaWYodG9kb0xpc3RbaV0uY29tcGxldGUpe1xuICAgICAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgbGlzdEl0ZW1FbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9IFwiMnB4IDAgN3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMzExKVwiO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxpc3RJdGVtRGVsZXRlQnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgbGlzdEl0ZW1FbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9IFwibm9uZVwiO1xuICAgICAgICB9O1xuXG5cdFx0dG9kb0xpc3RFbGVtZW50LmFwcGVuZENoaWxkKGxpc3RJdGVtRWxlbWVudCk7XG4gICAgICAgIGxpc3RJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChsaXN0SXRlbUNvbXBsZXRpb24pO1xuICAgICAgICBsaXN0SXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW1UZXh0KTtcbiAgICAgICAgZGF0ZUFuZERlbGV0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbURhdGUpO1xuICAgICAgICBkYXRlQW5kRGVsZXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtRGVsZXRlQnRuKTtcbiAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlQW5kRGVsZXRlQ29udGFpbmVyKTtcblxuXHR9XG59XG5cblxuZnVuY3Rpb24gZ2V0SWQoaSl7XG4gICAgaSsrO1xuICAgIHJldHVybiBpO1xufVxuXG5mdW5jdGlvbiByZWZyZXNoRm9sZGVyKCl7XG4gICAgcmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICBuZXdTdG9yYWdlID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGZvbGRlclN0b3JhZ2UubGVuZ3RoOyBpKyspe1xuICAgICAgICBjcmVhdGVGb2xkZXIoZm9sZGVyU3RvcmFnZVtpXS5uYW1lLCBmb2xkZXJTdG9yYWdlW2ldLmRlc2NyaXB0aW9uLCBmb2xkZXJTdG9yYWdlW2ldLnRvZG8pXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZHJlbigpe1xuICAgIGNvbnN0IGZvbGRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9sZGVyLWNvbnRhaW5lclwiKTtcbiAgICB3aGlsZSAoZm9sZGVyQ29udGFpbmVyLmZpcnN0Q2hpbGQpe1xuICAgICAgICBmb2xkZXJDb250YWluZXIucmVtb3ZlQ2hpbGQoZm9sZGVyQ29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IHtjcmVhdGVGb2xkZXIsIHNlbGVjdGVkRm9sZGVyLCBGb2xkZXIsIGRpc3BsYXlGb2xkZXIsIHRvZG9MaXN0Q29udGFpbmVyfTtcblxuIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5pbXBvcnQge2NyZWF0ZUZvbGRlcn0gZnJvbSAnLi9mb2xkZXIuanMnXG5cbmxldCBmb2xkZXJTdG9yYWdlID0gW107XG5sZXQgZXhhbXBsZUZvbGRlciA9IGZhbHNlO1xuXG5pZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZvbGRlcnMnKSkge1xuICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xufSBlbHNlIHtcbiAgICBpbXBvcnRJbmZvKCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9sZGVycycsIEpTT04uc3RyaW5naWZ5KGZvbGRlclN0b3JhZ2UpKTtcbiAgICBleGFtcGxlRm9sZGVyID0gdHJ1ZVxuICAgIGltcG9ydEluZm8oKTtcbn1cblxuZnVuY3Rpb24gaW1wb3J0SW5mbygpIHtcbiAgICBmb2xkZXJTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZm9sZGVycycpKTtcbiAgICBjb25zb2xlLmxvZyhmb2xkZXJTdG9yYWdlKVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBmb2xkZXJTdG9yYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY3JlYXRlRm9sZGVyKGZvbGRlclN0b3JhZ2VbaV0ubmFtZSwgZm9sZGVyU3RvcmFnZVtpXS5kZXNjcmlwdGlvbiwgZm9sZGVyU3RvcmFnZVtpXS50b2RvKVxuICAgIH1cbn1cblxuXG5jb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpXG5leHBvcnQge2ZvbGRlclN0b3JhZ2UsIGV4YW1wbGVGb2xkZXJ9O1xuIiwiaW1wb3J0ICBmb2xkZXJTdG9yYWdlICBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgc2VsZWN0ZWRGb2xkZXIsIEZvbGRlciwgZGlzcGxheUZvbGRlciwgdG9kb0xpc3RDb250YWluZXIgfSBmcm9tIFwiLi9mb2xkZXIuanNcIjtcbmltcG9ydCB0cmFzaENhblN2ZyBmcm9tICcuL2ltZy90cmFzaC1jYW4uc3ZnJ1xuaW1wb3J0IHsgYWRkIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tYnRuXCIpO1xuY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLXByaW9yaXR5XCIpO1xuY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby10aXRsZVwiKTtcbmNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGUtdG9kb1wiKTtcbmNvbnN0IGZvcm1JbmZvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1wcmlvcml0eS1jb250YWluZXJcIik7XG5jb25zdCBkdWVEYXRlRm9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kdWVzLWZvbGRlclwiKTtcbmNvbnN0IHVwY29taW5nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1cGNvbWluZy1kYXRlcy1jb250YWluZXJcIik7XG5cbmxldCB1cGNvbWluZ1RvZG9MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWxpc3QtZGF0ZVwiKTtcbmxldCB0b2RvQnRuQ291bnQgPSAwO1xubGV0IGFsbFRvZG8gPSBbXVxubGV0IGRhdGVUb2RvID0gW11cbmxldCB0ZW1wQWxsVG9kbyA9W11cblxuXG5cbmFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZih0b2RvQnRuQ291bnQgPT0gMCl7XG4gICAgICAgIGFkZFRvZG9CdG4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBhZGRUb2RvQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2dnbGVcIik7XG4gICAgICAgIGZvcm1JbmZvQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgKyt0b2RvQnRuQ291bnRcbiAgICAgICAgY29uc29sZS5sb2codG9kb0J0bkNvdW50KVxuXG4gICAgfWVsc2V7XG4gICAgICAgIGlmKGlucHV0VGl0bGUudmFsdWUgPT0gXCJcIiB8fCB0b2RvUHJpb3JpdHkudmFsdWUgPT0gXCJcIikge1xuICAgICAgICBhZGRUb2RvQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2dnbGVcIik7XG4gICAgICAgIGZvcm1JbmZvQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIHRvZG9CdG5Db3VudC0tO1xuICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBuZXcgRm9sZGVyKCkuYWRkVG9kbyhcbiAgICAgICAgICAgIGlucHV0VGl0bGUudmFsdWUsIHRvZG9Qcmlvcml0eS52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgZmFsc2UsIHNlbGVjdGVkRm9sZGVyLmlkKTtcbiAgICAgICAgYWRkVG9kb0J0bi5jbGFzc0xpc3QudG9nZ2xlKFwidG9nZ2xlXCIpO1xuICAgICAgICBmb3JtSW5mb0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICB0b2RvQnRuQ291bnQtLTtcbiAgICAgICAgY29uc29sZS5sb2codG9kb0J0bkNvdW50KTtcblxuICAgICAgICBcbiAgICB9XG4gICAgXG59KTtcblxuZHVlRGF0ZUZvbGRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICB0ZW1wQWxsVG9kbyA9IFtdXG4gICAgYWxsVG9kbyA9IFtdXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGZvbGRlclN0b3JhZ2UubGVuZ3RoOyBpKyspe1xuICAgICAgIFxuICAgICAgICB0ZW1wQWxsVG9kby5wdXNoKGZvbGRlclN0b3JhZ2VbaV0udG9kbyk7XG5cblxuICAgICAgICBhbGxUb2RvLnB1c2godGVtcEFsbFRvZG9baV0pO1xuICAgICAgICBcblxuICAgIH1cbiAgICBhbGxUb2RvLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGUubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihlW2ldLmRhdGUgIT09IHVuZGVmaW5lZCAmJiAhZGF0ZVRvZG8uaW5jbHVkZXMoZVtpXSkpIGRhdGVUb2RvLnB1c2goZVtpXSlcbiAgICAgICAgfVxuICAgIH0pXG4gICAgdGVtcEFsbFRvZG8gPSBhbGxUb2RvXG4gICAgY29uc29sZS5sb2coZGF0ZVRvZG8pXG4gICAgY29uc29sZS5sb2codGVtcEFsbFRvZG8pO1xuICAgIGNvbnNvbGUubG9nKGFsbFRvZG8pO1xuICAgIGRpc3BsYXlVcGNvbWluZyhkYXRlVG9kbyk7XG4gICAgdXBjb21pbmdDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG5cbn0pXG5cbmZ1bmN0aW9uIGRpc3BsYXlVcGNvbWluZyhkYXRlVG9kbyl7XG4gICAgdG9kb0xpc3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG5cdHVwY29taW5nVG9kb0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGF0ZVRvZG8ubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgbGlzdEl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsZXQgbGlzdEl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGxldCBsaXN0SXRlbUNvbXBsZXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBsZXQgbGlzdEl0ZW1EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgbGlzdEl0ZW1EZWxldGVCdG4gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbGV0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGRhdGVBbmREZWxldGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBpZihkYXRlVG9kb1tpXS5wcmlvcml0eSA9PSBcIkxvd1wiKXtsaXN0SXRlbUNvbXBsZXRpb24uY2xhc3NMaXN0LmFkZChcImxvdy1wcmlvcml0eVwiKX1cbiAgICAgICAgZWxzZSBpZihkYXRlVG9kb1tpXS5wcmlvcml0eSA9PSBcIk1lZGl1bVwiKXtsaXN0SXRlbUNvbXBsZXRpb24uY2xhc3NMaXN0LmFkZChcIm1lZGl1bS1wcmlvcml0eVwiKX1cbiAgICAgICAgZWxzZXtsaXN0SXRlbUNvbXBsZXRpb24uY2xhc3NMaXN0LmFkZChcImhpZ2gtcHJpb3JpdHlcIil9O1xuXG4gICAgICAgIGxpc3RJdGVtQ29tcGxldGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIGxpc3RJdGVtQ29tcGxldGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmKGRhdGVUb2RvW2ldLmNvbXBsZXRlKXtkYXRlVG9kb1tpXS5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfWVsc2V7ZGF0ZVRvZG9baV0uY29tcGxldGUgPSB0cnVlfTtcblxuICAgICAgICAgICAgaWYoZGF0ZVRvZG9baV0uY29tcGxldGUpe1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtRGVsZXRlQnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbUVsZW1lbnQuc3R5bGUuYm94U2hhZG93ID0gXCIwIDAgN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMzExKVwiO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW1FbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9IFwibm9uZVwiOyAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb2xkZXJzJywgSlNPTi5zdHJpbmdpZnkoZm9sZGVyU3RvcmFnZSkpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGxpc3RJdGVtRGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlVG9kbyhmb2xkZXJTdG9yYWdlW3NlbGVjdGVkRm9sZGVyLmlkXS50b2RvW2ldKTtcblxuICAgICAgICB9KVxuXG4gICAgICAgIGxpc3RJdGVtRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlbGV0ZVwiKTtcbiAgICAgICAgbGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZS1kZWxldGVcIik7XG4gICAgICAgIGRhdGVBbmREZWxldGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tZGF0ZS1kZWxldGUtY29udGFpbmVyXCIpO1xuICAgICAgICBcblx0XHRsaXN0SXRlbVRleHQudGV4dENvbnRlbnQgPSBkYXRlVG9kb1tpXS50aXRsZTtcbiAgICAgICAgbGlzdEl0ZW1EYXRlLnRleHRDb250ZW50ID0gZGF0ZVRvZG9baV0uZGF0ZTtcbiAgICAgICAgbGlzdEl0ZW1Db21wbGV0aW9uLmNoZWNrZWQgPSBkYXRlVG9kb1tpXS5jb21wbGV0ZTtcbiAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uc3JjID0gdHJhc2hDYW5Tdmc7XG4gICAgICAgIC8vIEFkZHMgQ1NTIHRvIGNvbXBsZXRlZCBUYXNrIHdoZW4gZGlzcGxheWluZyBmb2xkZXJcbiAgICAgICAgaWYoZGF0ZVRvZG9baV0uY29tcGxldGUpe1xuICAgICAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgbGlzdEl0ZW1FbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9IFwiMnB4IDAgN3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMzExKVwiO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxpc3RJdGVtRGVsZXRlQnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgbGlzdEl0ZW1FbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9IFwibm9uZVwiO1xuICAgICAgICB9O1xuXG5cdFx0dXBjb21pbmdUb2RvTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbUVsZW1lbnQpO1xuICAgICAgICBsaXN0SXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQobGlzdEl0ZW1Db21wbGV0aW9uKTtcbiAgICAgICAgbGlzdEl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtVGV4dCk7XG4gICAgICAgIGRhdGVBbmREZWxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW1EYXRlKTtcbiAgICAgICAgZGF0ZUFuZERlbGV0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbURlbGV0ZUJ0bik7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUFuZERlbGV0ZUNvbnRhaW5lcik7XG5cblx0fVxuICAgIFxufVxuXG5cbmNsYXNzIFRvZG97XG4gICAgY29uc3RydWN0b3IodGl0bGUsIHByaW9yaXR5LCBkYXRlLCBjb21wbGV0ZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgfSBcbn1cblxuXG5cbmZ1bmN0aW9uIGRlbGV0ZVRvZG8odG9kbyl7XG4gICAgY29uc29sZS5sb2codG9kbylcbiAgICBjb25zdCBpbmRleCA9IGZvbGRlclN0b3JhZ2Vbc2VsZWN0ZWRGb2xkZXIuaWRdLnRvZG8uaW5kZXhPZih0b2RvKTtcbiAgICBjb25zb2xlLmxvZyhpbmRleClcbiAgICBpZihpbmRleCA+IC0xKXtcbiAgICAgICAgZm9sZGVyU3RvcmFnZVtzZWxlY3RlZEZvbGRlci5pZF0udG9kby5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9sZGVycycsIEpTT04uc3RyaW5naWZ5KGZvbGRlclN0b3JhZ2UpKVxuICAgIGRpc3BsYXlGb2xkZXIoZm9sZGVyU3RvcmFnZVtzZWxlY3RlZEZvbGRlci5pZF0udG9kbylcbn1cblxuZXhwb3J0IHtUb2RvLCBkZWxldGVUb2RvLCB1cGNvbWluZ0NvbnRhaW5lcn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=