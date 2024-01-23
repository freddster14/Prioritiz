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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0px;\n    padding: 0px;\n    box-sizing:border-box;\n    font-family: 'Libre Baskerville', serif;\n}\n\n.main-content{\n    display: grid;\n    height: 100%;\n    min-height: 100vh;\n    width: 100%;\n    grid-template-columns: 25% 75%;\n    grid-template-rows: auto 1fr;\n    background-color: #bbbbbb;\n    overflow: hidden;\n}\n\n#title{\n    grid-column: 1/-1;\n    display: flex;\n    background-color: #f0f0f0ee;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    box-shadow: 0px 2px 7px rgba(22, 22, 22, 0.411);\n}\n\n.folder-img{\n    max-width: 40px;\n    margin-left: 10px;\n    display: none;\n    margin-right: auto;\n}\n\nh1{\n    font-size: 45px;\n    padding: 30px 20px;\n    font-weight: 700;\n \n}\n#title img{width: 80px;}\n\n#folder-header{\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 2px;\n}\n\ndiv h2 {\n    font-size: 30px;\n    color: #222222;\n}\n\n/* Trash Can in Folders Img */\ndiv div img{\n    width: 30px;\n    filter: drop-shadow(4px 3px 2px rgba(0, 0, 0, 0.308));\n}\n\n.main-folder-container{\n    padding: 20px 25px;\n    background-color: #e0e0e0;\n}\n\n.main-folder-container h2{color: #222222;}\n\n.folder-container{margin-left: 10px;}\n\n.folder-container h2{\n    font-size: 30px;\n    color: #222222;\n}\n\n.folder-add-container{\n    display: flex;\n    margin-top: 10px;\n    padding-top: 10px;\n    border-top: 1px solid gray;\n    font-size: 20px;\n    justify-content: space-between;\n    align-items: center;\n    transition: 0.7s;\n}\n\n#display-form-btn, #todo-btn{\n    border-radius: 20px;\n    font-size: 25px;\n    width: 30px;\n    height: 30px;\n    border: 2px solid black;\n    background-color: rgba(0, 134, 13, 0.281);\n    transition: 0.7s;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n#form-folder{\n    background-color: transparent;\n    width: 0;\n    border-radius: 10px;\n    transition: 0.7s;\n}\n\n#form-folder.active{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    height: auto;\n    gap: 10px;\n    margin: 17px 0px;\n}\n\n.form-folder-input-box{\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    gap: 10px;\n}\n\n#form-folder input{\n    height: 30px;\n    font-size: 18px;\n    padding-left: 3px;\n    background-color: transparent;\n    border: none;\n    display: none;\n    outline: none;\n    border-left: 2px solid black;\n}\n\n#form-folder input:focus{background-color: #c9c9c9;}\n\n#form-folder input.toggle{display: inline;}\n\n\n#form-folder button{\n    border: none;\n    background-color: transparent;\n    display: none;\n}\n#form-folder button.toggle{\n    border: none;\n    background-color: transparent;\n    display: inline; \n}\n\n#form-folder button img{width: 35px;}\n\n.dues-folder{\n    font-size: 28px;\n    margin-top: 15px;\n}\n.upcoming-dates-container{\n    display:none;\n    flex-direction: column;\n    align-items: center;\n    max-width: 2000px;\n    \n}\n\n.upcoming-dates-container h2{\n    width: 80%;\n    text-align: center;\n    margin-top: 10px;\n}\n\n#todo-list-date{\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n    margin: 10px 0px;\n}\n\n#todo-list-date li{\n    display: flex;\n    gap: 40px;\n    width: 100%;\n    border-radius: 7px;\n    padding: 1px 4px;\n    align-items: center;\n    font-size: 30px;\n}\n\n.task-container{\n    display: none;\t\n    align-items: center;\n    max-width: 2000px;\n    grid-column: 2;\n    grid-row: 2;\n    flex-direction: column;\n}\n/* \"Task(s)\" */\n.task-container h2{\n    width: 80%;\n    text-align: center;\n    margin-top: 10px;\n}\n\n#todo-list{\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n    margin: 10px 0px;\n\n}\n\n#todo-list li{\n    display: flex;\n    gap: 40px;\n    width: 100%;\n    border-radius: 7px;\n    padding: 1px 4px;\n    align-items: center;\n    font-size: 30px;\n}\n\nli input{\n    appearance: none;\n\tbox-shadow: 1px 2px 0px 0.5px rgba(0, 0, 0, 0.151), inset -2px -2px 1px rgba(0, 0, 0, 0.199);\n\tpadding: 9px;\n    margin-left: 2px;\n    width: 25px;\n    height: 24px;\n\tborder-radius: 35px;\n\tdisplay: inline-block;\n\tposition: relative;\n    cursor: pointer;\n}\n\nli input:checked{\n    background-color: #ffffff;\n\tcolor: #ffffff;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: 20px;\n    background-position: center;\n    background-repeat: no-repeat;\n\n}\n\n.todo-title-delete{\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n\n.todo-date-delete-container{\n    display: flex;\n    gap: 18px;\n}\n\n#form-todo{\n    margin-top: 17px;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    width: 80%;\n    justify-content: center;\n}\n\n.title-priority-container{\n    opacity: 0;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 15px;\n    width: 100%;\n    transition: 0.5s;\n}\n\n.title-priority-container.active{\n    opacity: 100;\n    transition: 0.5s;\n}\n\n#todo-title,#todo-priority, #date-todo{\n    font-size: 28px;\n    background-color: transparent;\n    outline: none;\n    border: none;\n    padding: 2px 0px 2px 5px;\n}\n/* Form Todo Title */\n#todo-title{\n    border: none;\n    border-left: 2px solid black;\n    width: min(300px, 100%);\n}\n\n#todo-title:focus, #todo-priority:focus, #date-todo:focus { background-color: #cccccc;}\n\n#todo-priority{\n    width: min(200px, 100%);\n}\n\n#todo-priority:focus{\n    background-color: #cccccc;\n}\n\n#date-todo{width: min(300px, 100%);}\n\n#error-box{\n    display: none;\n    background-color: rgb(185, 72, 72);\n}\n\n#error-box.alert{\n    padding: 2%;\n    opacity: 100;\n    display: block;\n    border-radius: 7px;\n}\n\n#todo-btn{\n    width: 35px;\n    height: 35px;\n    font-size: 28px;\n}\n\n#todo-btn.toggle{\n    background-color: #ffffff;\n\tcolor: #ffffff;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: 25px;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n\n.low-priority {background-color: rgb(109, 230, 121);}\n\n.medium-priority{ background-color: rgb(231, 172, 61);}\n\n.high-priority{background-color: rgb(185, 72, 72);}\n\n.show-flex{display: flex;}\n\n@media only screen and (max-width: 999px) {\n    .main-folder-container{\n        display: none;\n        width: 100vw;\n        height: 100%;\n    }\n\n    .show{display: block;}\n    \n    .task-container{\n        grid-column: 1/-1;\n        height: 100%;\n    }\n\n    h1{\n        font-size: 35px;\n        padding: 17px 10px;\n    }\n\n    #title img{width: 50px; margin-right: 10px;}\n\n    #todo-list, #todo-list-date{width: 92%;}\n\n    #todo-list li, #todo-list-date li{\n        gap: 10px;\n        font-size: 28px;\n        padding: 1px 2px;\n    }\n\n    .todo-title-delete{flex-wrap: wrap;}\n}  \n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');\n\n*{\n    margin: 0px;\n    padding: 0px;\n    box-sizing:border-box;\n    font-family: 'Libre Baskerville', serif;\n}\n\n.main-content{\n    display: grid;\n    height: 100%;\n    min-height: 100vh;\n    width: 100%;\n    grid-template-columns: 25% 75%;\n    grid-template-rows: auto 1fr;\n    background-color: #bbbbbb;\n    overflow: hidden;\n}\n\n#title{\n    grid-column: 1/-1;\n    display: flex;\n    background-color: #f0f0f0ee;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    box-shadow: 0px 2px 7px rgba(22, 22, 22, 0.411);\n}\n\n.folder-img{\n    max-width: 40px;\n    margin-left: 10px;\n    display: none;\n    margin-right: auto;\n}\n\nh1{\n    font-size: 45px;\n    padding: 30px 20px;\n    font-weight: 700;\n \n}\n#title img{width: 80px;}\n\n#folder-header{\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 2px;\n}\n\ndiv h2 {\n    font-size: 30px;\n    color: #222222;\n}\n\n/* Trash Can in Folders Img */\ndiv div img{\n    width: 30px;\n    filter: drop-shadow(4px 3px 2px rgba(0, 0, 0, 0.308));\n}\n\n.main-folder-container{\n    padding: 20px 25px;\n    background-color: #e0e0e0;\n}\n\n.main-folder-container h2{color: #222222;}\n\n.folder-container{margin-left: 10px;}\n\n.folder-container h2{\n    font-size: 30px;\n    color: #222222;\n}\n\n.folder-add-container{\n    display: flex;\n    margin-top: 10px;\n    padding-top: 10px;\n    border-top: 1px solid gray;\n    font-size: 20px;\n    justify-content: space-between;\n    align-items: center;\n    transition: 0.7s;\n}\n\n#display-form-btn, #todo-btn{\n    border-radius: 20px;\n    font-size: 25px;\n    width: 30px;\n    height: 30px;\n    border: 2px solid black;\n    background-color: rgba(0, 134, 13, 0.281);\n    transition: 0.7s;\n    background-image: url(\"img/plus.svg\");\n}\n\n#form-folder{\n    background-color: transparent;\n    width: 0;\n    border-radius: 10px;\n    transition: 0.7s;\n}\n\n#form-folder.active{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    height: auto;\n    gap: 10px;\n    margin: 17px 0px;\n}\n\n.form-folder-input-box{\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    gap: 10px;\n}\n\n#form-folder input{\n    height: 30px;\n    font-size: 18px;\n    padding-left: 3px;\n    background-color: transparent;\n    border: none;\n    display: none;\n    outline: none;\n    border-left: 2px solid black;\n}\n\n#form-folder input:focus{background-color: #c9c9c9;}\n\n#form-folder input.toggle{display: inline;}\n\n\n#form-folder button{\n    border: none;\n    background-color: transparent;\n    display: none;\n}\n#form-folder button.toggle{\n    border: none;\n    background-color: transparent;\n    display: inline; \n}\n\n#form-folder button img{width: 35px;}\n\n.dues-folder{\n    font-size: 28px;\n    margin-top: 15px;\n}\n.upcoming-dates-container{\n    display:none;\n    flex-direction: column;\n    align-items: center;\n    max-width: 2000px;\n    \n}\n\n.upcoming-dates-container h2{\n    width: 80%;\n    text-align: center;\n    margin-top: 10px;\n}\n\n#todo-list-date{\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n    margin: 10px 0px;\n}\n\n#todo-list-date li{\n    display: flex;\n    gap: 40px;\n    width: 100%;\n    border-radius: 7px;\n    padding: 1px 4px;\n    align-items: center;\n    font-size: 30px;\n}\n\n.task-container{\n    display: none;\t\n    align-items: center;\n    max-width: 2000px;\n    grid-column: 2;\n    grid-row: 2;\n    flex-direction: column;\n}\n/* \"Task(s)\" */\n.task-container h2{\n    width: 80%;\n    text-align: center;\n    margin-top: 10px;\n}\n\n#todo-list{\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n    margin: 10px 0px;\n\n}\n\n#todo-list li{\n    display: flex;\n    gap: 40px;\n    width: 100%;\n    border-radius: 7px;\n    padding: 1px 4px;\n    align-items: center;\n    font-size: 30px;\n}\n\nli input{\n    appearance: none;\n\tbox-shadow: 1px 2px 0px 0.5px rgba(0, 0, 0, 0.151), inset -2px -2px 1px rgba(0, 0, 0, 0.199);\n\tpadding: 9px;\n    margin-left: 2px;\n    width: 25px;\n    height: 24px;\n\tborder-radius: 35px;\n\tdisplay: inline-block;\n\tposition: relative;\n    cursor: pointer;\n}\n\nli input:checked{\n    background-color: #ffffff;\n\tcolor: #ffffff;\n    background-image: url(\"img/check-all.svg\");\n    background-size: 20px;\n    background-position: center;\n    background-repeat: no-repeat;\n\n}\n\n.todo-title-delete{\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n\n.todo-date-delete-container{\n    display: flex;\n    gap: 18px;\n}\n\n#form-todo{\n    margin-top: 17px;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    width: 80%;\n    justify-content: center;\n}\n\n.title-priority-container{\n    opacity: 0;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 15px;\n    width: 100%;\n    transition: 0.5s;\n}\n\n.title-priority-container.active{\n    opacity: 100;\n    transition: 0.5s;\n}\n\n#todo-title,#todo-priority, #date-todo{\n    font-size: 28px;\n    background-color: transparent;\n    outline: none;\n    border: none;\n    padding: 2px 0px 2px 5px;\n}\n/* Form Todo Title */\n#todo-title{\n    border: none;\n    border-left: 2px solid black;\n    width: min(300px, 100%);\n}\n\n#todo-title:focus, #todo-priority:focus, #date-todo:focus { background-color: #cccccc;}\n\n#todo-priority{\n    width: min(200px, 100%);\n}\n\n#todo-priority:focus{\n    background-color: #cccccc;\n}\n\n#date-todo{width: min(300px, 100%);}\n\n#error-box{\n    display: none;\n    background-color: rgb(185, 72, 72);\n}\n\n#error-box.alert{\n    padding: 2%;\n    opacity: 100;\n    display: block;\n    border-radius: 7px;\n}\n\n#todo-btn{\n    width: 35px;\n    height: 35px;\n    font-size: 28px;\n}\n\n#todo-btn.toggle{\n    background-color: #ffffff;\n\tcolor: #ffffff;\n    background-image: url(\"img/check-all.svg\");\n    background-size: 25px;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n\n.low-priority {background-color: rgb(109, 230, 121);}\n\n.medium-priority{ background-color: rgb(231, 172, 61);}\n\n.high-priority{background-color: rgb(185, 72, 72);}\n\n.show-flex{display: flex;}\n\n@media only screen and (max-width: 999px) {\n    .main-folder-container{\n        display: none;\n        width: 100vw;\n        height: 100%;\n    }\n\n    .show{display: block;}\n    \n    .task-container{\n        grid-column: 1/-1;\n        height: 100%;\n    }\n\n    h1{\n        font-size: 35px;\n        padding: 17px 10px;\n    }\n\n    #title img{width: 50px; margin-right: 10px;}\n\n    #todo-list, #todo-list-date{width: 92%;}\n\n    #todo-list li, #todo-list-date li{\n        gap: 10px;\n        font-size: 28px;\n        padding: 1px 2px;\n    }\n\n    .todo-title-delete{flex-wrap: wrap;}\n}  \n"],"sourceRoot":""}]);
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
/* harmony export */   "openFolder": () => (/* binding */ openFolder),
/* harmony export */   "prevActive": () => (/* binding */ prevActive),
/* harmony export */   "selectedFolder": () => (/* binding */ selectedFolder),
/* harmony export */   "todoListContainer": () => (/* binding */ todoListContainer)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _img_trash_can_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/trash-can.svg */ "./src/img/trash-can.svg");
/* harmony import */ var _img_plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/plus.svg */ "./src/img/plus.svg");





const todoListContainer = document.querySelector(".task-container");
const inputDescription = document.querySelector("#todo-description")
const inputFolder = document.querySelector("#folder-input");
const addFolderBtn = document.querySelector("#add-folder-btn");
const inputTitle = document.querySelector("#todo-title");
const showFolderFormBtn = document.querySelector("#display-form-btn")
const form = document.querySelector("#form-folder");
const folderImg = document.querySelector(".folder-img");
const taskTitle = document.querySelector("#folder-name-task-title");

let todoListElement = document.getElementById("todo-list");
let addFolder = false
let i = -1
let selectedFolder = undefined
let newStorage = [];
let prevActive = undefined;

class Folder{
    constructor(name, description, id, todo){
        this.name = name;
        this.description = description;
        this.id = id;
        this.todo = todo;
    }

    addTodo(title, priority, date, complete, id){
        //prevents todo being pushed into no folder
        if(selectedFolder == undefined) return;

        let newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo(title, priority, date, complete);
        _index_js__WEBPACK_IMPORTED_MODULE_0__.folderStorage[id].todo.push(newTodo);
        openFolder(_index_js__WEBPACK_IMPORTED_MODULE_0__.folderStorage[id].todo);
        inputTitle.value = "";
        localStorage.setItem('folders', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.folderStorage))
        return newTodo
    }
}

showFolderFormBtn.addEventListener('click', () => {
    //opens or closes form
    form.classList.toggle("active");
    addFolderBtn.classList.toggle("toggle");
    form.querySelectorAll("input").forEach(el => el.classList.toggle('toggle'))
    //changes button style
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

addFolderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(inputFolder.value == '' || inputFolder.value == "Common Name Found") return;
    //Stops from creating same folder name
    if(_index_js__WEBPACK_IMPORTED_MODULE_0__.folderStorage.some(folder => folder.name == inputFolder.value)) {
        setTimeout(() => inputFolder.value = "", 2000);
        return inputFolder.value = "Common Name Found"
    };

    addFolder = true;
    createFolder(inputFolder.value, inputDescription.value);
    addFolder = false;

    form.classList.toggle("active");
    addFolderBtn.classList.toggle("toggle");

    form.querySelectorAll("input").forEach(el => el.classList.toggle('toggle'))
    showFolderFormBtn.style.backgroundImage = 'url("'+ _img_plus_svg__WEBPACK_IMPORTED_MODULE_3__ +'")';
    showFolderFormBtn.style.backgroundColor = "rgba(0, 134, 13, 0.281)"
    localStorage.setItem('folders', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.folderStorage))
});




function createFolder(folderTitle, description, todo){
    const folderContainer = document.querySelector(".folder-container");
    const currentFolder = document.createElement("div");
    const folderHeader = document.createElement("div");
    const deleteFolder = new Image();
    const folderText = document.createElement("h2");
    const folderDescription = document.createElement("p");

    let deleted = false;

    // makes new folder have a empty todo: array
    if (todo == undefined) todo = [];
    let newFolder = new Folder(folderTitle, description, getId(i), todo);
    newStorage.push(newFolder)
    i = getId(i);
    //gives id to html

    deleteFolder.addEventListener('click', () => {
        
        deleted = true;
        let newStorage = _index_js__WEBPACK_IMPORTED_MODULE_0__.folderStorage.filter((r) => { return r.name != newFolder.name});
        //resets id count to reassigned
        i = -1

        localStorage.setItem('folders', JSON.stringify(newStorage));
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.updateFolderStorage)()
        refreshFolder()
    })
    
    deleteFolder.src = _img_trash_can_svg__WEBPACK_IMPORTED_MODULE_2__;

    currentFolder.id = i;
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
    //checks if adding a folder
    if(addFolder)_index_js__WEBPACK_IMPORTED_MODULE_0__.folderStorage.push(newFolder);
    
    currentFolder.addEventListener('click', (event) => {
        event.preventDefault();
    //prevents the folder which is to be deleted from opening
        if(deleted) return deleted = false;
       //prevents the folder to re-open when the screen is big
        if(prevActive !== undefined) prevActive.classList.toggle("active")

        todoListContainer.classList.add("show-flex");
        currentFolder.classList.toggle("active")
        //closes folder tab
        if (window.innerWidth < 999) folderImg.click()
        //html
        prevActive = currentFolder;
        //object
        selectedFolder = newFolder;
        openFolder(_index_js__WEBPACK_IMPORTED_MODULE_0__.folderStorage[newFolder.id].todo);
    });
    localStorage.setItem('folders', JSON.stringify(newStorage))  
}

function openFolder(todoList){
    //only makes it that the container is removed, when screen is big
    if (window.innerWidth > 999) _todo_js__WEBPACK_IMPORTED_MODULE_1__.upcomingContainer.classList.remove("show-flex");

    todoListElement.innerHTML = "";
    taskTitle.textContent = selectedFolder.name;

	for (let i = 0; i < todoList.length; i++) {
        //html for todo
		let listItemElement = document.createElement("li");
        let listItemText = document.createElement("p");
        let listItemCompletion = document.createElement('input');
        let listItemDate = document.createElement('p');
        let listItemDeleteBtn = new Image();
        let listContainer = document.createElement('div');
        let dateAndDeleteContainer = document.createElement('div');
        // Changes date format on screen
        let curr_date = new Date(todoList[i].date);
        let curr_day = curr_date.getDate() + 1;
        let curr_month = curr_date.getMonth() + 1;
        let curr_year = curr_date.getFullYear();
        //checks for priority
        if(todoList[i].priority == "Low"){listItemCompletion.classList.add("low-priority")}
        else if(todoList[i].priority == "Medium"){listItemCompletion.classList.add("medium-priority")}
        else{listItemCompletion.classList.add("high-priority")};

        listItemCompletion.setAttribute("type", "checkbox");
        listItemDeleteBtn.classList.add("todo-delete");
        listContainer.classList.add("todo-title-delete");
        dateAndDeleteContainer.classList.add("todo-date-delete-container");
        
		listItemText.textContent = todoList[i].title;
        if(todoList[i].date !== "") listItemDate.textContent = curr_month + "-" + curr_day + "-" + curr_year;
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

        listItemCompletion.addEventListener("change", () => {
            if(todoList[i].complete){todoList[i].complete = false;
            }else{todoList[i].complete = true};
            //adds css on true
            if(todoList[i].complete){
                listItemDeleteBtn.style.visibility = "visible";
                listItemElement.style.boxShadow = "0 0 7px 2px rgba(0, 0, 0, 0.311)";
            }else{
                listItemDeleteBtn.style.visibility = "hidden";
                listItemElement.style.boxShadow = "none";            };

            localStorage.setItem('folders', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.folderStorage));
        })
        
        listItemDeleteBtn.addEventListener('click', () => {
            ;(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.deleteTodo)(_index_js__WEBPACK_IMPORTED_MODULE_0__.folderStorage[selectedFolder.id].todo[i]);

        })

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
    for(let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.folderStorage.length; i++){
        createFolder(_index_js__WEBPACK_IMPORTED_MODULE_0__.folderStorage[i].name, _index_js__WEBPACK_IMPORTED_MODULE_0__.folderStorage[i].description, _index_js__WEBPACK_IMPORTED_MODULE_0__.folderStorage[i].todo)
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
/* harmony export */   "folderStorage": () => (/* binding */ folderStorage),
/* harmony export */   "updateFolderStorage": () => (/* binding */ updateFolderStorage)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _folder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder.js */ "./src/folder.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");




const mainFolderContainer = document.querySelector(".main-folder-container");
const taskContainer = document.querySelector(".task-container");
const folderImg = document.querySelector(".folder-img");

let folderStorage = [];

if(!localStorage.getItem('folders')) {
    populateStorage();
} else {
    importInfo();
}

function populateStorage() {
    localStorage.setItem('folders', JSON.stringify(folderStorage));
    importInfo();
}

function importInfo() {
    //get the local storage and displays it
    folderStorage = JSON.parse(localStorage.getItem('folders'));
    console.log(folderStorage)
    for(let i = 0; i < folderStorage.length; i++){
        (0,_folder_js__WEBPACK_IMPORTED_MODULE_1__.createFolder)(folderStorage[i].name, folderStorage[i].description, folderStorage[i].todo)
    }
}

folderImg.addEventListener('click', () =>{
    
   //closes just folder tab
    if(taskContainer.classList.contains("show-flex") && mainFolderContainer.classList.contains("show")){
       return mainFolderContainer.classList.toggle("show");
    }

    if(_todo__WEBPACK_IMPORTED_MODULE_2__.upcomingContainer.classList.contains("show-flex") && mainFolderContainer.classList.contains("show")){
        return mainFolderContainer.classList.toggle("show");
    }
    //prevents folder icon from closing once open & also removes any open folder
    if(!mainFolderContainer.classList.contains("show")) {
        mainFolderContainer.classList.toggle("show");
        _todo__WEBPACK_IMPORTED_MODULE_2__.upcomingContainer.classList.remove("show-flex")
        taskContainer.classList.remove("show-flex")
    }

})
//Activates folder icon and displays folder tab
if (window.innerWidth < 999) {
    folderImg.classList.toggle("show");
    folderImg.click();
}

function updateFolderStorage(){folderStorage = JSON.parse(localStorage.getItem('folders'));}



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
const upcomingContainer = document.querySelector(".upcoming-dates-container");
const errorDate = document.querySelector("#error-box");
const folderImg = document.querySelector(".folder-img");

let upcomingTodoList = document.getElementById("todo-list-date");
let todoBtnCount = 0;
let allTodo = []
let dateTodo = []
let tempAllTodo =[]



addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(todoBtnCount == 0){
        addTodoBtn.textContent = "";
        dueDate.value = "";
        addTodoBtn.classList.toggle("toggle");
        formInfoContainer.classList.toggle("active");
        ++todoBtnCount
    }else{
        if(inputTitle.value == "" || todoPriority.value == "") {
        addTodoBtn.classList.toggle("toggle");
        formInfoContainer.classList.toggle("active");
        todoBtnCount--;
        
        return
        }
        if(dueDate.value == ""){}
        else if(dueDate.value < getTodayDate() || new Date(dueDate.value).getFullYear() > 9999)
        return  errorDate.classList.toggle("alert");
        if(errorDate.classList.contains("alert")) errorDate.classList.toggle("alert");
        new _folder_js__WEBPACK_IMPORTED_MODULE_1__.Folder().addTodo(
            inputTitle.value, todoPriority.value, dueDate.value, false, _folder_js__WEBPACK_IMPORTED_MODULE_1__.selectedFolder.id);
        addTodoBtn.classList.toggle("toggle");
        formInfoContainer.classList.toggle("active");
        todoBtnCount--;
    }
});

dueDateFolder.addEventListener('click', (e) => {
    dateTodo = []
    tempAllTodo = []
    allTodo = []
    for(let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.folderStorage.length; i++){
        tempAllTodo.push(_index_js__WEBPACK_IMPORTED_MODULE_0__.folderStorage[i].todo);
        allTodo.push(tempAllTodo[i]);
    }
    allTodo.forEach((e) => {
        for(let i = 0; i < e.length; i++){
            if(e[i].date !== '' && !dateTodo.includes(e[i])) dateTodo.push(e[i])
        }
    })
    dateTodo.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    })

    upcomingContainer.classList.toggle("show-flex");
    if (window.innerWidth < 999) folderImg.click();
    openUpcoming(dateTodo);

})

function openUpcoming(dateTodo){
    //only makes it that the container is removed, when screen is big
    if (window.innerWidth > 999) _folder_js__WEBPACK_IMPORTED_MODULE_1__.todoListContainer.classList.remove("show-flex");
	upcomingTodoList.innerHTML = "";
    for(let i = 0; i < dateTodo.length; i++){
        let listItemElement = document.createElement("li");
        let listItemText = document.createElement("p");
        let listItemCompletion = document.createElement('input');
        let listItemDate = document.createElement('p');
        let listItemDeleteBtn = new Image();
        let listContainer = document.createElement('div');
        let dateAndDeleteContainer = document.createElement('div');
        // Changes date format
        let curr_date = new Date(dateTodo[i].date);
        let curr_day = curr_date.getDate() + 1;
        let curr_month = curr_date.getMonth() + 1;
        let curr_year = curr_date.getFullYear();

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

            localStorage.setItem('folders', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.folderStorage));
        })

        listItemDeleteBtn.addEventListener('click', () => {
            deleteTodo(_index_js__WEBPACK_IMPORTED_MODULE_0__.folderStorage[_folder_js__WEBPACK_IMPORTED_MODULE_1__.selectedFolder.id].todo[i]);

        })

        listItemDeleteBtn.classList.add("todo-delete");
        listContainer.classList.add("todo-title-delete");
        dateAndDeleteContainer.classList.add("todo-date-delete-container");
        
		listItemText.textContent = dateTodo[i].title;
        listItemDate.textContent = curr_month + "-" + curr_day + "-" + curr_year;
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

function getTodayDate(){
    let datePlaceHolder = new Date();
    datePlaceHolder.setDate(datePlaceHolder.getDate() - 1);
    return datePlaceHolder.toISOString().split('T')[0];
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
    const index = _index_js__WEBPACK_IMPORTED_MODULE_0__.folderStorage[_folder_js__WEBPACK_IMPORTED_MODULE_1__.selectedFolder.id].todo.indexOf(todo);
    console.log(index)
    if(index > -1){
        _index_js__WEBPACK_IMPORTED_MODULE_0__.folderStorage[_folder_js__WEBPACK_IMPORTED_MODULE_1__.selectedFolder.id].todo.splice(index, 1);
    }
    localStorage.setItem('folders', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.folderStorage))
    ;(0,_folder_js__WEBPACK_IMPORTED_MODULE_1__.openFolder)(_index_js__WEBPACK_IMPORTED_MODULE_0__.folderStorage[_folder_js__WEBPACK_IMPORTED_MODULE_1__.selectedFolder.id].todo)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8seUJBQXlCLHlCQUF5QixNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLHVCQUF1QixNQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyx5QkFBeUIsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sdUJBQXVCLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSx1QkFBdUIsMEJBQTBCLHdCQUF3QixzQkFBc0IsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8scUJBQXFCLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxpQ0FBaUMsd0JBQXdCLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxzQkFBc0Isa0hBQWtILE1BQU0scUJBQXFCLE1BQU0sa0JBQWtCLG1CQUFtQiw0QkFBNEIsOENBQThDLEdBQUcsa0JBQWtCLG9CQUFvQixtQkFBbUIsd0JBQXdCLGtCQUFrQixxQ0FBcUMsbUNBQW1DLGdDQUFnQyx1QkFBdUIsR0FBRyxXQUFXLHdCQUF3QixvQkFBb0Isa0NBQWtDLDhCQUE4QiwwQkFBMEIseUJBQXlCLHNEQUFzRCxHQUFHLGdCQUFnQixzQkFBc0Isd0JBQXdCLG9CQUFvQix5QkFBeUIsR0FBRyxPQUFPLHNCQUFzQix5QkFBeUIsdUJBQXVCLE1BQU0sYUFBYSxhQUFhLG1CQUFtQixvQkFBb0IscUNBQXFDLHlCQUF5QixHQUFHLFlBQVksc0JBQXNCLHFCQUFxQixHQUFHLGdEQUFnRCxrQkFBa0IsNERBQTRELEdBQUcsMkJBQTJCLHlCQUF5QixnQ0FBZ0MsR0FBRyw4QkFBOEIsZ0JBQWdCLHNCQUFzQixtQkFBbUIseUJBQXlCLHNCQUFzQixxQkFBcUIsR0FBRywwQkFBMEIsb0JBQW9CLHVCQUF1Qix3QkFBd0IsaUNBQWlDLHNCQUFzQixxQ0FBcUMsMEJBQTBCLHVCQUF1QixHQUFHLGlDQUFpQywwQkFBMEIsc0JBQXNCLGtCQUFrQixtQkFBbUIsOEJBQThCLGdEQUFnRCx1QkFBdUIsOENBQThDLEdBQUcsaUJBQWlCLG9DQUFvQyxlQUFlLDBCQUEwQix1QkFBdUIsR0FBRyx3QkFBd0Isb0JBQW9CLDBCQUEwQixxQ0FBcUMsa0JBQWtCLG1CQUFtQixnQkFBZ0IsdUJBQXVCLEdBQUcsMkJBQTJCLG9CQUFvQiw2QkFBNkIsaUJBQWlCLGdCQUFnQixHQUFHLHVCQUF1QixtQkFBbUIsc0JBQXNCLHdCQUF3QixvQ0FBb0MsbUJBQW1CLG9CQUFvQixvQkFBb0IsbUNBQW1DLEdBQUcsNkJBQTZCLDJCQUEyQiw4QkFBOEIsaUJBQWlCLDBCQUEwQixtQkFBbUIsb0NBQW9DLG9CQUFvQixHQUFHLDZCQUE2QixtQkFBbUIsb0NBQW9DLHVCQUF1QixHQUFHLDRCQUE0QixhQUFhLGlCQUFpQixzQkFBc0IsdUJBQXVCLEdBQUcsNEJBQTRCLG1CQUFtQiw2QkFBNkIsMEJBQTBCLHdCQUF3QixTQUFTLGlDQUFpQyxpQkFBaUIseUJBQXlCLHVCQUF1QixHQUFHLG9CQUFvQixpQkFBaUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsZUFBZSx1QkFBdUIsR0FBRyx1QkFBdUIsb0JBQW9CLGdCQUFnQixrQkFBa0IseUJBQXlCLHVCQUF1QiwwQkFBMEIsc0JBQXNCLEdBQUcsb0JBQW9CLG9CQUFvQiw0QkFBNEIsd0JBQXdCLHFCQUFxQixrQkFBa0IsNkJBQTZCLEdBQUcsd0NBQXdDLGlCQUFpQix5QkFBeUIsdUJBQXVCLEdBQUcsZUFBZSxpQkFBaUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsZUFBZSx1QkFBdUIsS0FBSyxrQkFBa0Isb0JBQW9CLGdCQUFnQixrQkFBa0IseUJBQXlCLHVCQUF1QiwwQkFBMEIsc0JBQXNCLEdBQUcsYUFBYSx1QkFBdUIsaUdBQWlHLGlCQUFpQix1QkFBdUIsa0JBQWtCLG1CQUFtQix3QkFBd0IsMEJBQTBCLHVCQUF1QixzQkFBc0IsR0FBRyxxQkFBcUIsZ0NBQWdDLG1CQUFtQixtREFBbUQsNEJBQTRCLGtDQUFrQyxtQ0FBbUMsS0FBSyx1QkFBdUIsb0JBQW9CLHFDQUFxQyxrQkFBa0IsR0FBRyxnQ0FBZ0Msb0JBQW9CLGdCQUFnQixHQUFHLGVBQWUsdUJBQXVCLG9CQUFvQixzQkFBc0IsZ0JBQWdCLGlCQUFpQiw4QkFBOEIsR0FBRyw4QkFBOEIsaUJBQWlCLG9CQUFvQiw4QkFBOEIsc0JBQXNCLGdCQUFnQixrQkFBa0IsdUJBQXVCLEdBQUcscUNBQXFDLG1CQUFtQix1QkFBdUIsR0FBRywyQ0FBMkMsc0JBQXNCLG9DQUFvQyxvQkFBb0IsbUJBQW1CLCtCQUErQixHQUFHLHFDQUFxQyxtQkFBbUIsbUNBQW1DLDhCQUE4QixHQUFHLGdFQUFnRSwyQkFBMkIsbUJBQW1CLDhCQUE4QixHQUFHLHlCQUF5QixnQ0FBZ0MsR0FBRyxlQUFlLHlCQUF5QixlQUFlLG9CQUFvQix5Q0FBeUMsR0FBRyxxQkFBcUIsa0JBQWtCLG1CQUFtQixxQkFBcUIseUJBQXlCLEdBQUcsY0FBYyxrQkFBa0IsbUJBQW1CLHNCQUFzQixHQUFHLHFCQUFxQixnQ0FBZ0MsbUJBQW1CLG1EQUFtRCw0QkFBNEIsa0NBQWtDLG1DQUFtQyxHQUFHLHFCQUFxQixzQ0FBc0Msc0JBQXNCLHFDQUFxQyxtQkFBbUIsb0NBQW9DLGVBQWUsZUFBZSwrQ0FBK0MsNkJBQTZCLHdCQUF3Qix1QkFBdUIsdUJBQXVCLE9BQU8sY0FBYyxnQkFBZ0IsNEJBQTRCLDRCQUE0Qix1QkFBdUIsT0FBTyxXQUFXLDBCQUEwQiw2QkFBNkIsT0FBTyxtQkFBbUIsYUFBYSxvQkFBb0Isb0NBQW9DLFlBQVksMENBQTBDLG9CQUFvQiwwQkFBMEIsMkJBQTJCLE9BQU8sMkJBQTJCLGlCQUFpQixLQUFLLHFCQUFxQjtBQUMzc2lCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDYjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Y2RDtBQUNBO0FBQ2hCO0FBQ1Q7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBCQUEwQiwwQ0FBSTtBQUM5QixRQUFRLG9EQUFhO0FBQ3JCLG1CQUFtQixvREFBYTtBQUNoQztBQUNBLHVEQUF1RCxvREFBYTtBQUNwRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkRBQTJELDBDQUFPO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHlEQUFrQjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQsMENBQU87QUFDOUQ7QUFDQSxtREFBbUQsb0RBQWE7QUFDaEUsQ0FBQzs7Ozs7QUFLRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJEQUFvQixVQUFVLGdDQUFnQztBQUN2RjtBQUNBOztBQUVBO0FBQ0EsUUFBUSw4REFBbUI7QUFDM0I7QUFDQSxLQUFLO0FBQ0w7QUFDQSx1QkFBdUIsK0NBQVc7O0FBRWxDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseURBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQWE7QUFDaEMsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyx3RUFBa0M7O0FBRW5FO0FBQ0E7O0FBRUEsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDLGtEQUFrRDtBQUNsRCxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsK0NBQVc7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQyxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSwyREFBMkQsb0RBQWE7QUFDeEUsU0FBUztBQUNUO0FBQ0E7QUFDQSxZQUFZLHFEQUFVLENBQUMsb0RBQWE7O0FBRXBDLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixJQUFJLDJEQUFvQixFQUFFO0FBQzdDLHFCQUFxQixvREFBYSxVQUFVLG9EQUFhLGlCQUFpQixvREFBYTtBQUN2RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlBwRTtBQUNtQjtBQUNHOztBQUUzQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QyxRQUFRLHdEQUFZO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sdUVBQW9DO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUFrQztBQUMxQztBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERXO0FBQ3FEO0FBQ2xEOzs7QUFHN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhDQUFNO0FBQ2xCLHdFQUF3RSx5REFBaUI7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLElBQUksMkRBQW9CLEVBQUU7QUFDN0MseUJBQXlCLG9EQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLGlDQUFpQywwRUFBa0M7QUFDbkU7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEM7QUFDMUMsa0RBQWtEO0FBQ2xELGFBQWE7O0FBRWI7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxhQUFhLEtBQUs7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLDJEQUEyRCxvREFBYTtBQUN4RSxTQUFTOztBQUVUO0FBQ0EsdUJBQXVCLG9EQUFhLENBQUMseURBQWlCOztBQUV0RCxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLCtDQUFXO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0Esa0JBQWtCLG9EQUFhLENBQUMseURBQWlCO0FBQ2pEO0FBQ0E7QUFDQSxRQUFRLG9EQUFhLENBQUMseURBQWlCO0FBQ3ZDO0FBQ0EsbURBQW1ELG9EQUFhO0FBQ2hFLElBQUksdURBQVUsQ0FBQyxvREFBYSxDQUFDLHlEQUFpQjtBQUM5Qzs7QUFFNkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1SzdDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2ZvbGRlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaW1nL3BsdXMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiaW1nL2NoZWNrLWFsbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNzUlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiYmJiO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jdGl0bGV7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwZWU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggN3B4IHJnYmEoMjIsIDIyLCAyMiwgMC40MTEpO1xcbn1cXG5cXG4uZm9sZGVyLWltZ3tcXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG5oMXtcXG4gICAgZm9udC1zaXplOiA0NXB4O1xcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuIFxcbn1cXG4jdGl0bGUgaW1ne3dpZHRoOiA4MHB4O31cXG5cXG4jZm9sZGVyLWhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XFxufVxcblxcbmRpdiBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgY29sb3I6ICMyMjIyMjI7XFxufVxcblxcbi8qIFRyYXNoIENhbiBpbiBGb2xkZXJzIEltZyAqL1xcbmRpdiBkaXYgaW1ne1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg0cHggM3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMzA4KSk7XFxufVxcblxcbi5tYWluLWZvbGRlci1jb250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDIwcHggMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG59XFxuXFxuLm1haW4tZm9sZGVyLWNvbnRhaW5lciBoMntjb2xvcjogIzIyMjIyMjt9XFxuXFxuLmZvbGRlci1jb250YWluZXJ7bWFyZ2luLWxlZnQ6IDEwcHg7fVxcblxcbi5mb2xkZXItY29udGFpbmVyIGgye1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiAjMjIyMjIyO1xcbn1cXG5cXG4uZm9sZGVyLWFkZC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuN3M7XFxufVxcblxcbiNkaXNwbGF5LWZvcm0tYnRuLCAjdG9kby1idG57XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTM0LCAxMywgMC4yODEpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4jZm9ybS1mb2xkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB3aWR0aDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogMC43cztcXG59XFxuXFxuI2Zvcm0tZm9sZGVyLmFjdGl2ZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbjogMTdweCAwcHg7XFxufVxcblxcbi5mb3JtLWZvbGRlci1pbnB1dC1ib3h7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI2Zvcm0tZm9sZGVyIGlucHV0e1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbiNmb3JtLWZvbGRlciBpbnB1dDpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOiAjYzljOWM5O31cXG5cXG4jZm9ybS1mb2xkZXIgaW5wdXQudG9nZ2xle2Rpc3BsYXk6IGlubGluZTt9XFxuXFxuXFxuI2Zvcm0tZm9sZGVyIGJ1dHRvbntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuI2Zvcm0tZm9sZGVyIGJ1dHRvbi50b2dnbGV7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGRpc3BsYXk6IGlubGluZTsgXFxufVxcblxcbiNmb3JtLWZvbGRlciBidXR0b24gaW1ne3dpZHRoOiAzNXB4O31cXG5cXG4uZHVlcy1mb2xkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuLnVwY29taW5nLWRhdGVzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDIwMDBweDtcXG4gICAgXFxufVxcblxcbi51cGNvbWluZy1kYXRlcy1jb250YWluZXIgaDJ7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuI3RvZG8tbGlzdC1kYXRle1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxufVxcblxcbiN0b2RvLWxpc3QtZGF0ZSBsaXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBwYWRkaW5nOiAxcHggNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogbm9uZTtcXHRcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAyMDAwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLyogXFxcIlRhc2socylcXFwiICovXFxuLnRhc2stY29udGFpbmVyIGgye1xcbiAgICB3aWR0aDogODAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbiN0b2RvLWxpc3R7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG5cXG59XFxuXFxuI3RvZG8tbGlzdCBsaXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBwYWRkaW5nOiAxcHggNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbmxpIGlucHV0e1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcblxcdGJveC1zaGFkb3c6IDFweCAycHggMHB4IDAuNXB4IHJnYmEoMCwgMCwgMCwgMC4xNTEpLCBpbnNldCAtMnB4IC0ycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xOTkpO1xcblxcdHBhZGRpbmc6IDlweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG5cXHRib3JkZXItcmFkaXVzOiAzNXB4O1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubGkgaW5wdXQ6Y2hlY2tlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG5cXHRjb2xvcjogI2ZmZmZmZjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFxufVxcblxcbi50b2RvLXRpdGxlLWRlbGV0ZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvZG8tZGF0ZS1kZWxldGUtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE4cHg7XFxufVxcblxcbiNmb3JtLXRvZG97XFxuICAgIG1hcmdpbi10b3A6IDE3cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlLXByaW9yaXR5LWNvbnRhaW5lcntcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLnRpdGxlLXByaW9yaXR5LWNvbnRhaW5lci5hY3RpdmV7XFxuICAgIG9wYWNpdHk6IDEwMDtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuI3RvZG8tdGl0bGUsI3RvZG8tcHJpb3JpdHksICNkYXRlLXRvZG97XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMnB4IDBweCAycHggNXB4O1xcbn1cXG4vKiBGb3JtIFRvZG8gVGl0bGUgKi9cXG4jdG9kby10aXRsZXtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogbWluKDMwMHB4LCAxMDAlKTtcXG59XFxuXFxuI3RvZG8tdGl0bGU6Zm9jdXMsICN0b2RvLXByaW9yaXR5OmZvY3VzLCAjZGF0ZS10b2RvOmZvY3VzIHsgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzt9XFxuXFxuI3RvZG8tcHJpb3JpdHl7XFxuICAgIHdpZHRoOiBtaW4oMjAwcHgsIDEwMCUpO1xcbn1cXG5cXG4jdG9kby1wcmlvcml0eTpmb2N1c3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG59XFxuXFxuI2RhdGUtdG9kb3t3aWR0aDogbWluKDMwMHB4LCAxMDAlKTt9XFxuXFxuI2Vycm9yLWJveHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgNzIsIDcyKTtcXG59XFxuXFxuI2Vycm9yLWJveC5hbGVydHtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIG9wYWNpdHk6IDEwMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuI3RvZG8tYnRue1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxufVxcblxcbiN0b2RvLWJ0bi50b2dnbGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuXFx0Y29sb3I6ICNmZmZmZmY7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjVweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG5cXG4ubG93LXByaW9yaXR5IHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5LCAyMzAsIDEyMSk7fVxcblxcbi5tZWRpdW0tcHJpb3JpdHl7IGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDE3MiwgNjEpO31cXG5cXG4uaGlnaC1wcmlvcml0eXtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1LCA3MiwgNzIpO31cXG5cXG4uc2hvdy1mbGV4e2Rpc3BsYXk6IGZsZXg7fVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk5cHgpIHtcXG4gICAgLm1haW4tZm9sZGVyLWNvbnRhaW5lcntcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLnNob3d7ZGlzcGxheTogYmxvY2s7fVxcbiAgICBcXG4gICAgLnRhc2stY29udGFpbmVye1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgaDF7XFxuICAgICAgICBmb250LXNpemU6IDM1cHg7XFxuICAgICAgICBwYWRkaW5nOiAxN3B4IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgI3RpdGxlIGltZ3t3aWR0aDogNTBweDsgbWFyZ2luLXJpZ2h0OiAxMHB4O31cXG5cXG4gICAgI3RvZG8tbGlzdCwgI3RvZG8tbGlzdC1kYXRle3dpZHRoOiA5MiU7fVxcblxcbiAgICAjdG9kby1saXN0IGxpLCAjdG9kby1saXN0LWRhdGUgbGl7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICBmb250LXNpemU6IDI4cHg7XFxuICAgICAgICBwYWRkaW5nOiAxcHggMnB4O1xcbiAgICB9XFxuXFxuICAgIC50b2RvLXRpdGxlLWRlbGV0ZXtmbGV4LXdyYXA6IHdyYXA7fVxcbn0gIFxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJ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QyxDQUFDOztBQUVwRCxrQkFBa0IsbUNBQW1DLENBQUM7O0FBRXRELGVBQWUsa0NBQWtDLENBQUM7O0FBRWxELFdBQVcsYUFBYSxDQUFDOztBQUV6QjtJQUNJO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWixZQUFZO0lBQ2hCOztJQUVBLE1BQU0sY0FBYyxDQUFDOztJQUVyQjtRQUNJLGlCQUFpQjtRQUNqQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7SUFFQSxXQUFXLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQzs7SUFFM0MsNEJBQTRCLFVBQVUsQ0FBQzs7SUFFdkM7UUFDSSxTQUFTO1FBQ1QsZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7SUFFQSxtQkFBbUIsZUFBZSxDQUFDO0FBQ3ZDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qe1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZjtcXG59XFxuXFxuLm1haW4tY29udGVudHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDc1JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYmJiYjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI3RpdGxle1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMGVlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDdweCByZ2JhKDIyLCAyMiwgMjIsIDAuNDExKTtcXG59XFxuXFxuLmZvbGRlci1pbWd7XFxuICAgIG1heC13aWR0aDogNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuaDF7XFxuICAgIGZvbnQtc2l6ZTogNDVweDtcXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiBcXG59XFxuI3RpdGxlIGltZ3t3aWR0aDogODBweDt9XFxuXFxuI2ZvbGRlci1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbn1cXG5cXG5kaXYgaDIge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiAjMjIyMjIyO1xcbn1cXG5cXG4vKiBUcmFzaCBDYW4gaW4gRm9sZGVycyBJbWcgKi9cXG5kaXYgZGl2IGltZ3tcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDNweCAycHggcmdiYSgwLCAwLCAwLCAwLjMwOCkpO1xcbn1cXG5cXG4ubWFpbi1mb2xkZXItY29udGFpbmVye1xcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcblxcbi5tYWluLWZvbGRlci1jb250YWluZXIgaDJ7Y29sb3I6ICMyMjIyMjI7fVxcblxcbi5mb2xkZXItY29udGFpbmVye21hcmdpbi1sZWZ0OiAxMHB4O31cXG5cXG4uZm9sZGVyLWNvbnRhaW5lciBoMntcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBjb2xvcjogIzIyMjIyMjtcXG59XFxuXFxuLmZvbGRlci1hZGQtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbn1cXG5cXG4jZGlzcGxheS1mb3JtLWJ0biwgI3RvZG8tYnRue1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEzNCwgMTMsIDAuMjgxKTtcXG4gICAgdHJhbnNpdGlvbjogMC43cztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJpbWcvcGx1cy5zdmdcXFwiKTtcXG59XFxuXFxuI2Zvcm0tZm9sZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuN3M7XFxufVxcblxcbiNmb3JtLWZvbGRlci5hY3RpdmV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW46IDE3cHggMHB4O1xcbn1cXG5cXG4uZm9ybS1mb2xkZXItaW5wdXQtYm94e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNmb3JtLWZvbGRlciBpbnB1dHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jZm9ybS1mb2xkZXIgaW5wdXQ6Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjogI2M5YzljOTt9XFxuXFxuI2Zvcm0tZm9sZGVyIGlucHV0LnRvZ2dsZXtkaXNwbGF5OiBpbmxpbmU7fVxcblxcblxcbiNmb3JtLWZvbGRlciBidXR0b257XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbiNmb3JtLWZvbGRlciBidXR0b24udG9nZ2xle1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7IFxcbn1cXG5cXG4jZm9ybS1mb2xkZXIgYnV0dG9uIGltZ3t3aWR0aDogMzVweDt9XFxuXFxuLmR1ZXMtZm9sZGVye1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcbi51cGNvbWluZy1kYXRlcy1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAyMDAwcHg7XFxuICAgIFxcbn1cXG5cXG4udXBjb21pbmctZGF0ZXMtY29udGFpbmVyIGgye1xcbiAgICB3aWR0aDogODAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbiN0b2RvLWxpc3QtZGF0ZXtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbn1cXG5cXG4jdG9kby1saXN0LWRhdGUgbGl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgcGFkZGluZzogMXB4IDRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFx0XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMjAwMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi8qIFxcXCJUYXNrKHMpXFxcIiAqL1xcbi50YXNrLWNvbnRhaW5lciBoMntcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4jdG9kby1saXN0e1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxuXFxufVxcblxcbiN0b2RvLWxpc3QgbGl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgcGFkZGluZzogMXB4IDRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG5saSBpbnB1dHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRib3gtc2hhZG93OiAxcHggMnB4IDBweCAwLjVweCByZ2JhKDAsIDAsIDAsIDAuMTUxKSwgaW5zZXQgLTJweCAtMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTk5KTtcXG5cXHRwYWRkaW5nOiA5cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMzVweDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmxpIGlucHV0OmNoZWNrZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuXFx0Y29sb3I6ICNmZmZmZmY7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaW1nL2NoZWNrLWFsbC5zdmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFxufVxcblxcbi50b2RvLXRpdGxlLWRlbGV0ZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvZG8tZGF0ZS1kZWxldGUtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE4cHg7XFxufVxcblxcbiNmb3JtLXRvZG97XFxuICAgIG1hcmdpbi10b3A6IDE3cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlLXByaW9yaXR5LWNvbnRhaW5lcntcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLnRpdGxlLXByaW9yaXR5LWNvbnRhaW5lci5hY3RpdmV7XFxuICAgIG9wYWNpdHk6IDEwMDtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuI3RvZG8tdGl0bGUsI3RvZG8tcHJpb3JpdHksICNkYXRlLXRvZG97XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMnB4IDBweCAycHggNXB4O1xcbn1cXG4vKiBGb3JtIFRvZG8gVGl0bGUgKi9cXG4jdG9kby10aXRsZXtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogbWluKDMwMHB4LCAxMDAlKTtcXG59XFxuXFxuI3RvZG8tdGl0bGU6Zm9jdXMsICN0b2RvLXByaW9yaXR5OmZvY3VzLCAjZGF0ZS10b2RvOmZvY3VzIHsgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzt9XFxuXFxuI3RvZG8tcHJpb3JpdHl7XFxuICAgIHdpZHRoOiBtaW4oMjAwcHgsIDEwMCUpO1xcbn1cXG5cXG4jdG9kby1wcmlvcml0eTpmb2N1c3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG59XFxuXFxuI2RhdGUtdG9kb3t3aWR0aDogbWluKDMwMHB4LCAxMDAlKTt9XFxuXFxuI2Vycm9yLWJveHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgNzIsIDcyKTtcXG59XFxuXFxuI2Vycm9yLWJveC5hbGVydHtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIG9wYWNpdHk6IDEwMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuI3RvZG8tYnRue1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxufVxcblxcbiN0b2RvLWJ0bi50b2dnbGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuXFx0Y29sb3I6ICNmZmZmZmY7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaW1nL2NoZWNrLWFsbC5zdmdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcblxcbi5sb3ctcHJpb3JpdHkge2JhY2tncm91bmQtY29sb3I6IHJnYigxMDksIDIzMCwgMTIxKTt9XFxuXFxuLm1lZGl1bS1wcmlvcml0eXsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMTcyLCA2MSk7fVxcblxcbi5oaWdoLXByaW9yaXR5e2JhY2tncm91bmQtY29sb3I6IHJnYigxODUsIDcyLCA3Mik7fVxcblxcbi5zaG93LWZsZXh7ZGlzcGxheTogZmxleDt9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTlweCkge1xcbiAgICAubWFpbi1mb2xkZXItY29udGFpbmVye1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAuc2hvd3tkaXNwbGF5OiBibG9jazt9XFxuICAgIFxcbiAgICAudGFzay1jb250YWluZXJ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcblxcbiAgICBoMXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgICAgIHBhZGRpbmc6IDE3cHggMTBweDtcXG4gICAgfVxcblxcbiAgICAjdGl0bGUgaW1ne3dpZHRoOiA1MHB4OyBtYXJnaW4tcmlnaHQ6IDEwcHg7fVxcblxcbiAgICAjdG9kby1saXN0LCAjdG9kby1saXN0LWRhdGV7d2lkdGg6IDkyJTt9XFxuXFxuICAgICN0b2RvLWxpc3QgbGksICN0b2RvLWxpc3QtZGF0ZSBsaXtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgICAgIHBhZGRpbmc6IDFweCAycHg7XFxuICAgIH1cXG5cXG4gICAgLnRvZG8tdGl0bGUtZGVsZXRle2ZsZXgtd3JhcDogd3JhcDt9XFxufSAgXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtmb2xkZXJTdG9yYWdlLCB1cGRhdGVGb2xkZXJTdG9yYWdlfSBmcm9tICcuL2luZGV4LmpzJ1xuaW1wb3J0IHtUb2RvLCBkZWxldGVUb2RvLCB1cGNvbWluZ0NvbnRhaW5lcn0gZnJvbSAnLi90b2RvLmpzJ1xuaW1wb3J0IHRyYXNoQ2FuU3ZnIGZyb20gJy4vaW1nL3RyYXNoLWNhbi5zdmcnXG5pbXBvcnQgcGx1c1N2ZyBmcm9tICcuL2ltZy9wbHVzLnN2ZydcblxuY29uc3QgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpO1xuY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kZXNjcmlwdGlvblwiKVxuY29uc3QgaW5wdXRGb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZvbGRlci1pbnB1dFwiKTtcbmNvbnN0IGFkZEZvbGRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWZvbGRlci1idG5cIik7XG5jb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLXRpdGxlXCIpO1xuY29uc3Qgc2hvd0ZvbGRlckZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc3BsYXktZm9ybS1idG5cIilcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tZm9sZGVyXCIpO1xuY29uc3QgZm9sZGVySW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb2xkZXItaW1nXCIpO1xuY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb2xkZXItbmFtZS10YXNrLXRpdGxlXCIpO1xuXG5sZXQgdG9kb0xpc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWxpc3RcIik7XG5sZXQgYWRkRm9sZGVyID0gZmFsc2VcbmxldCBpID0gLTFcbmxldCBzZWxlY3RlZEZvbGRlciA9IHVuZGVmaW5lZFxubGV0IG5ld1N0b3JhZ2UgPSBbXTtcbmxldCBwcmV2QWN0aXZlID0gdW5kZWZpbmVkO1xuXG5jbGFzcyBGb2xkZXJ7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGlkLCB0b2RvKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudG9kbyA9IHRvZG87XG4gICAgfVxuXG4gICAgYWRkVG9kbyh0aXRsZSwgcHJpb3JpdHksIGRhdGUsIGNvbXBsZXRlLCBpZCl7XG4gICAgICAgIC8vcHJldmVudHMgdG9kbyBiZWluZyBwdXNoZWQgaW50byBubyBmb2xkZXJcbiAgICAgICAgaWYoc2VsZWN0ZWRGb2xkZXIgPT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICAgICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyh0aXRsZSwgcHJpb3JpdHksIGRhdGUsIGNvbXBsZXRlKTtcbiAgICAgICAgZm9sZGVyU3RvcmFnZVtpZF0udG9kby5wdXNoKG5ld1RvZG8pO1xuICAgICAgICBvcGVuRm9sZGVyKGZvbGRlclN0b3JhZ2VbaWRdLnRvZG8pO1xuICAgICAgICBpbnB1dFRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcnMnLCBKU09OLnN0cmluZ2lmeShmb2xkZXJTdG9yYWdlKSlcbiAgICAgICAgcmV0dXJuIG5ld1RvZG9cbiAgICB9XG59XG5cbnNob3dGb2xkZXJGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vb3BlbnMgb3IgY2xvc2VzIGZvcm1cbiAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgYWRkRm9sZGVyQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2dnbGVcIik7XG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGUnKSlcbiAgICAvL2NoYW5nZXMgYnV0dG9uIHN0eWxlXG4gICAgaWYoc2hvd0ZvbGRlckZvcm1CdG4uc3R5bGUuYmFja2dyb3VuZEltYWdlICE9PSBcIm5vbmVcIil7XG4gICAgICAgIHNob3dGb2xkZXJGb3JtQnRuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwibm9uZVwiO1xuICAgICAgICBzaG93Rm9sZGVyRm9ybUJ0bi50ZXh0Q29udGVudCA9IFwi4pyVXCJcbiAgICAgICAgc2hvd0ZvbGRlckZvcm1CdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMTg1LCA3MiwgNzIpXCJcbiAgICB9ZWxzZSB7XG4gICAgICAgIHNob3dGb2xkZXJGb3JtQnRuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCInKyBwbHVzU3ZnICsnXCIpJztcbiAgICAgICAgc2hvd0ZvbGRlckZvcm1CdG4udGV4dENvbnRlbnQgPSBcIlwiXG4gICAgICAgIHNob3dGb2xkZXJGb3JtQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAxMzQsIDEzLCAwLjI4MSlcIlxuICAgIH1cbn0pXG5cbmFkZEZvbGRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKGlucHV0Rm9sZGVyLnZhbHVlID09ICcnIHx8IGlucHV0Rm9sZGVyLnZhbHVlID09IFwiQ29tbW9uIE5hbWUgRm91bmRcIikgcmV0dXJuO1xuICAgIC8vU3RvcHMgZnJvbSBjcmVhdGluZyBzYW1lIGZvbGRlciBuYW1lXG4gICAgaWYoZm9sZGVyU3RvcmFnZS5zb21lKGZvbGRlciA9PiBmb2xkZXIubmFtZSA9PSBpbnB1dEZvbGRlci52YWx1ZSkpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBpbnB1dEZvbGRlci52YWx1ZSA9IFwiXCIsIDIwMDApO1xuICAgICAgICByZXR1cm4gaW5wdXRGb2xkZXIudmFsdWUgPSBcIkNvbW1vbiBOYW1lIEZvdW5kXCJcbiAgICB9O1xuXG4gICAgYWRkRm9sZGVyID0gdHJ1ZTtcbiAgICBjcmVhdGVGb2xkZXIoaW5wdXRGb2xkZXIudmFsdWUsIGlucHV0RGVzY3JpcHRpb24udmFsdWUpO1xuICAgIGFkZEZvbGRlciA9IGZhbHNlO1xuXG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGFkZEZvbGRlckJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwidG9nZ2xlXCIpO1xuXG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGUnKSlcbiAgICBzaG93Rm9sZGVyRm9ybUJ0bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiJysgcGx1c1N2ZyArJ1wiKSc7XG4gICAgc2hvd0ZvbGRlckZvcm1CdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDEzNCwgMTMsIDAuMjgxKVwiXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcnMnLCBKU09OLnN0cmluZ2lmeShmb2xkZXJTdG9yYWdlKSlcbn0pO1xuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVGb2xkZXIoZm9sZGVyVGl0bGUsIGRlc2NyaXB0aW9uLCB0b2RvKXtcbiAgICBjb25zdCBmb2xkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvbGRlci1jb250YWluZXJcIik7XG4gICAgY29uc3QgY3VycmVudEZvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZm9sZGVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkZWxldGVGb2xkZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBmb2xkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IGZvbGRlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBsZXQgZGVsZXRlZCA9IGZhbHNlO1xuXG4gICAgLy8gbWFrZXMgbmV3IGZvbGRlciBoYXZlIGEgZW1wdHkgdG9kbzogYXJyYXlcbiAgICBpZiAodG9kbyA9PSB1bmRlZmluZWQpIHRvZG8gPSBbXTtcbiAgICBsZXQgbmV3Rm9sZGVyID0gbmV3IEZvbGRlcihmb2xkZXJUaXRsZSwgZGVzY3JpcHRpb24sIGdldElkKGkpLCB0b2RvKTtcbiAgICBuZXdTdG9yYWdlLnB1c2gobmV3Rm9sZGVyKVxuICAgIGkgPSBnZXRJZChpKTtcbiAgICAvL2dpdmVzIGlkIHRvIGh0bWxcblxuICAgIGRlbGV0ZUZvbGRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGRlbGV0ZWQgPSB0cnVlO1xuICAgICAgICBsZXQgbmV3U3RvcmFnZSA9IGZvbGRlclN0b3JhZ2UuZmlsdGVyKChyKSA9PiB7IHJldHVybiByLm5hbWUgIT0gbmV3Rm9sZGVyLm5hbWV9KTtcbiAgICAgICAgLy9yZXNldHMgaWQgY291bnQgdG8gcmVhc3NpZ25lZFxuICAgICAgICBpID0gLTFcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9sZGVycycsIEpTT04uc3RyaW5naWZ5KG5ld1N0b3JhZ2UpKTtcbiAgICAgICAgdXBkYXRlRm9sZGVyU3RvcmFnZSgpXG4gICAgICAgIHJlZnJlc2hGb2xkZXIoKVxuICAgIH0pXG4gICAgXG4gICAgZGVsZXRlRm9sZGVyLnNyYyA9IHRyYXNoQ2FuU3ZnO1xuXG4gICAgY3VycmVudEZvbGRlci5pZCA9IGk7XG4gICAgZm9sZGVySGVhZGVyLmlkID0gXCJmb2xkZXItaGVhZGVyXCI7XG5cbiAgICBmb2xkZXJUZXh0LnRleHRDb250ZW50ID0gZm9sZGVyVGl0bGU7XG4gICAgZm9sZGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICAgIGZvbGRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50Rm9sZGVyKTtcbiAgICBjdXJyZW50Rm9sZGVyLmFwcGVuZENoaWxkKGZvbGRlckhlYWRlcik7XG4gICAgZm9sZGVySGVhZGVyLmFwcGVuZENoaWxkKGZvbGRlclRleHQpO1xuICAgIGZvbGRlckhlYWRlci5hcHBlbmRDaGlsZChkZWxldGVGb2xkZXIpO1xuICAgIGN1cnJlbnRGb2xkZXIuYXBwZW5kQ2hpbGQoZm9sZGVyRGVzY3JpcHRpb24pO1xuICAgIFxuICAgIGlucHV0RGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgIGlucHV0Rm9sZGVyLnZhbHVlID0gXCJcIjtcbiAgICAvL2NoZWNrcyBpZiBhZGRpbmcgYSBmb2xkZXJcbiAgICBpZihhZGRGb2xkZXIpZm9sZGVyU3RvcmFnZS5wdXNoKG5ld0ZvbGRlcik7XG4gICAgXG4gICAgY3VycmVudEZvbGRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vcHJldmVudHMgdGhlIGZvbGRlciB3aGljaCBpcyB0byBiZSBkZWxldGVkIGZyb20gb3BlbmluZ1xuICAgICAgICBpZihkZWxldGVkKSByZXR1cm4gZGVsZXRlZCA9IGZhbHNlO1xuICAgICAgIC8vcHJldmVudHMgdGhlIGZvbGRlciB0byByZS1vcGVuIHdoZW4gdGhlIHNjcmVlbiBpcyBiaWdcbiAgICAgICAgaWYocHJldkFjdGl2ZSAhPT0gdW5kZWZpbmVkKSBwcmV2QWN0aXZlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcblxuICAgICAgICB0b2RvTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2hvdy1mbGV4XCIpO1xuICAgICAgICBjdXJyZW50Rm9sZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICAgICAgLy9jbG9zZXMgZm9sZGVyIHRhYlxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA5OTkpIGZvbGRlckltZy5jbGljaygpXG4gICAgICAgIC8vaHRtbFxuICAgICAgICBwcmV2QWN0aXZlID0gY3VycmVudEZvbGRlcjtcbiAgICAgICAgLy9vYmplY3RcbiAgICAgICAgc2VsZWN0ZWRGb2xkZXIgPSBuZXdGb2xkZXI7XG4gICAgICAgIG9wZW5Gb2xkZXIoZm9sZGVyU3RvcmFnZVtuZXdGb2xkZXIuaWRdLnRvZG8pO1xuICAgIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb2xkZXJzJywgSlNPTi5zdHJpbmdpZnkobmV3U3RvcmFnZSkpICBcbn1cblxuZnVuY3Rpb24gb3BlbkZvbGRlcih0b2RvTGlzdCl7XG4gICAgLy9vbmx5IG1ha2VzIGl0IHRoYXQgdGhlIGNvbnRhaW5lciBpcyByZW1vdmVkLCB3aGVuIHNjcmVlbiBpcyBiaWdcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA5OTkpIHVwY29taW5nQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWZsZXhcIik7XG5cbiAgICB0b2RvTGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBzZWxlY3RlZEZvbGRlci5uYW1lO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy9odG1sIGZvciB0b2RvXG5cdFx0bGV0IGxpc3RJdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGV0IGxpc3RJdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBsZXQgbGlzdEl0ZW1Db21wbGV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbGV0IGxpc3RJdGVtRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbGV0IGxpc3RJdGVtRGVsZXRlQnRuID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxldCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBkYXRlQW5kRGVsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIC8vIENoYW5nZXMgZGF0ZSBmb3JtYXQgb24gc2NyZWVuXG4gICAgICAgIGxldCBjdXJyX2RhdGUgPSBuZXcgRGF0ZSh0b2RvTGlzdFtpXS5kYXRlKTtcbiAgICAgICAgbGV0IGN1cnJfZGF5ID0gY3Vycl9kYXRlLmdldERhdGUoKSArIDE7XG4gICAgICAgIGxldCBjdXJyX21vbnRoID0gY3Vycl9kYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICBsZXQgY3Vycl95ZWFyID0gY3Vycl9kYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIC8vY2hlY2tzIGZvciBwcmlvcml0eVxuICAgICAgICBpZih0b2RvTGlzdFtpXS5wcmlvcml0eSA9PSBcIkxvd1wiKXtsaXN0SXRlbUNvbXBsZXRpb24uY2xhc3NMaXN0LmFkZChcImxvdy1wcmlvcml0eVwiKX1cbiAgICAgICAgZWxzZSBpZih0b2RvTGlzdFtpXS5wcmlvcml0eSA9PSBcIk1lZGl1bVwiKXtsaXN0SXRlbUNvbXBsZXRpb24uY2xhc3NMaXN0LmFkZChcIm1lZGl1bS1wcmlvcml0eVwiKX1cbiAgICAgICAgZWxzZXtsaXN0SXRlbUNvbXBsZXRpb24uY2xhc3NMaXN0LmFkZChcImhpZ2gtcHJpb3JpdHlcIil9O1xuXG4gICAgICAgIGxpc3RJdGVtQ29tcGxldGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIGxpc3RJdGVtRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlbGV0ZVwiKTtcbiAgICAgICAgbGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZS1kZWxldGVcIik7XG4gICAgICAgIGRhdGVBbmREZWxldGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tZGF0ZS1kZWxldGUtY29udGFpbmVyXCIpO1xuICAgICAgICBcblx0XHRsaXN0SXRlbVRleHQudGV4dENvbnRlbnQgPSB0b2RvTGlzdFtpXS50aXRsZTtcbiAgICAgICAgaWYodG9kb0xpc3RbaV0uZGF0ZSAhPT0gXCJcIikgbGlzdEl0ZW1EYXRlLnRleHRDb250ZW50ID0gY3Vycl9tb250aCArIFwiLVwiICsgY3Vycl9kYXkgKyBcIi1cIiArIGN1cnJfeWVhcjtcbiAgICAgICAgbGlzdEl0ZW1Db21wbGV0aW9uLmNoZWNrZWQgPSB0b2RvTGlzdFtpXS5jb21wbGV0ZTtcbiAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uc3JjID0gdHJhc2hDYW5Tdmc7XG5cbiAgICAgICAgLy8gQWRkcyBDU1MgdG8gY29tcGxldGVkIFRhc2sgd2hlbiBkaXNwbGF5aW5nIGZvbGRlclxuICAgICAgICBpZih0b2RvTGlzdFtpXS5jb21wbGV0ZSl7XG4gICAgICAgICAgICBsaXN0SXRlbURlbGV0ZUJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICBsaXN0SXRlbUVsZW1lbnQuc3R5bGUuYm94U2hhZG93ID0gXCIycHggMCA3cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zMTEpXCI7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICBsaXN0SXRlbUVsZW1lbnQuc3R5bGUuYm94U2hhZG93ID0gXCJub25lXCI7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGlzdEl0ZW1Db21wbGV0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYodG9kb0xpc3RbaV0uY29tcGxldGUpe3RvZG9MaXN0W2ldLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9ZWxzZXt0b2RvTGlzdFtpXS5jb21wbGV0ZSA9IHRydWV9O1xuICAgICAgICAgICAgLy9hZGRzIGNzcyBvbiB0cnVlXG4gICAgICAgICAgICBpZih0b2RvTGlzdFtpXS5jb21wbGV0ZSl7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtRWxlbWVudC5zdHlsZS5ib3hTaGFkb3cgPSBcIjAgMCA3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zMTEpXCI7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbURlbGV0ZUJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbUVsZW1lbnQuc3R5bGUuYm94U2hhZG93ID0gXCJub25lXCI7ICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcnMnLCBKU09OLnN0cmluZ2lmeShmb2xkZXJTdG9yYWdlKSk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBsaXN0SXRlbURlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZVRvZG8oZm9sZGVyU3RvcmFnZVtzZWxlY3RlZEZvbGRlci5pZF0udG9kb1tpXSk7XG5cbiAgICAgICAgfSlcblxuXHRcdHRvZG9MaXN0RWxlbWVudC5hcHBlbmRDaGlsZChsaXN0SXRlbUVsZW1lbnQpO1xuICAgICAgICBsaXN0SXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQobGlzdEl0ZW1Db21wbGV0aW9uKTtcbiAgICAgICAgbGlzdEl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtVGV4dCk7XG4gICAgICAgIGRhdGVBbmREZWxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW1EYXRlKTtcbiAgICAgICAgZGF0ZUFuZERlbGV0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbURlbGV0ZUJ0bik7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUFuZERlbGV0ZUNvbnRhaW5lcik7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0SWQoaSl7XG4gICAgaSsrO1xuICAgIHJldHVybiBpO1xufVxuXG5mdW5jdGlvbiByZWZyZXNoRm9sZGVyKCl7XG4gICAgcmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICBuZXdTdG9yYWdlID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGZvbGRlclN0b3JhZ2UubGVuZ3RoOyBpKyspe1xuICAgICAgICBjcmVhdGVGb2xkZXIoZm9sZGVyU3RvcmFnZVtpXS5uYW1lLCBmb2xkZXJTdG9yYWdlW2ldLmRlc2NyaXB0aW9uLCBmb2xkZXJTdG9yYWdlW2ldLnRvZG8pXG4gICAgfSBcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4oKXtcbiAgICBjb25zdCBmb2xkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvbGRlci1jb250YWluZXJcIik7XG4gICAgd2hpbGUgKGZvbGRlckNvbnRhaW5lci5maXJzdENoaWxkKXtcbiAgICAgICAgZm9sZGVyQ29udGFpbmVyLnJlbW92ZUNoaWxkKGZvbGRlckNvbnRhaW5lci5maXJzdENoaWxkKVxuICAgIH1cbn1cblxuZXhwb3J0IHtjcmVhdGVGb2xkZXIsIHNlbGVjdGVkRm9sZGVyLCBGb2xkZXIsIG9wZW5Gb2xkZXIsIHRvZG9MaXN0Q29udGFpbmVyLCBwcmV2QWN0aXZlfTtcblxuIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5pbXBvcnQge2NyZWF0ZUZvbGRlcn0gZnJvbSAnLi9mb2xkZXIuanMnXG5pbXBvcnQgeyB1cGNvbWluZ0NvbnRhaW5lciB9IGZyb20gJy4vdG9kbyc7XG5cbmNvbnN0IG1haW5Gb2xkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tZm9sZGVyLWNvbnRhaW5lclwiKTtcbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpO1xuY29uc3QgZm9sZGVySW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb2xkZXItaW1nXCIpO1xuXG5sZXQgZm9sZGVyU3RvcmFnZSA9IFtdO1xuXG5pZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZvbGRlcnMnKSkge1xuICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xufSBlbHNlIHtcbiAgICBpbXBvcnRJbmZvKCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9sZGVycycsIEpTT04uc3RyaW5naWZ5KGZvbGRlclN0b3JhZ2UpKTtcbiAgICBpbXBvcnRJbmZvKCk7XG59XG5cbmZ1bmN0aW9uIGltcG9ydEluZm8oKSB7XG4gICAgLy9nZXQgdGhlIGxvY2FsIHN0b3JhZ2UgYW5kIGRpc3BsYXlzIGl0XG4gICAgZm9sZGVyU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZvbGRlcnMnKSk7XG4gICAgY29uc29sZS5sb2coZm9sZGVyU3RvcmFnZSlcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZm9sZGVyU3RvcmFnZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNyZWF0ZUZvbGRlcihmb2xkZXJTdG9yYWdlW2ldLm5hbWUsIGZvbGRlclN0b3JhZ2VbaV0uZGVzY3JpcHRpb24sIGZvbGRlclN0b3JhZ2VbaV0udG9kbylcbiAgICB9XG59XG5cbmZvbGRlckltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgIFxuICAgLy9jbG9zZXMganVzdCBmb2xkZXIgdGFiXG4gICAgaWYodGFza0NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93LWZsZXhcIikgJiYgbWFpbkZvbGRlckNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93XCIpKXtcbiAgICAgICByZXR1cm4gbWFpbkZvbGRlckNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICB9XG5cbiAgICBpZih1cGNvbWluZ0NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93LWZsZXhcIikgJiYgbWFpbkZvbGRlckNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93XCIpKXtcbiAgICAgICAgcmV0dXJuIG1haW5Gb2xkZXJDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gICAgfVxuICAgIC8vcHJldmVudHMgZm9sZGVyIGljb24gZnJvbSBjbG9zaW5nIG9uY2Ugb3BlbiAmIGFsc28gcmVtb3ZlcyBhbnkgb3BlbiBmb2xkZXJcbiAgICBpZighbWFpbkZvbGRlckNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93XCIpKSB7XG4gICAgICAgIG1haW5Gb2xkZXJDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gICAgICAgIHVwY29taW5nQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWZsZXhcIilcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1mbGV4XCIpXG4gICAgfVxuXG59KVxuLy9BY3RpdmF0ZXMgZm9sZGVyIGljb24gYW5kIGRpc3BsYXlzIGZvbGRlciB0YWJcbmlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDk5OSkge1xuICAgIGZvbGRlckltZy5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICBmb2xkZXJJbWcuY2xpY2soKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRm9sZGVyU3RvcmFnZSgpe2ZvbGRlclN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb2xkZXJzJykpO31cblxuZXhwb3J0IHtmb2xkZXJTdG9yYWdlLCB1cGRhdGVGb2xkZXJTdG9yYWdlfSIsImltcG9ydCB7Zm9sZGVyU3RvcmFnZX0gIGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBzZWxlY3RlZEZvbGRlciwgRm9sZGVyLCBvcGVuRm9sZGVyLCB0b2RvTGlzdENvbnRhaW5lciwgcHJldkFjdGl2ZX0gZnJvbSBcIi4vZm9sZGVyLmpzXCI7XG5pbXBvcnQgdHJhc2hDYW5TdmcgZnJvbSAnLi9pbWcvdHJhc2gtY2FuLnN2ZydcblxuXG5jb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWJ0blwiKTtcbmNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1wcmlvcml0eVwiKTtcbmNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tdGl0bGVcIik7XG5jb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlLXRvZG9cIik7XG5jb25zdCBmb3JtSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtcHJpb3JpdHktY29udGFpbmVyXCIpO1xuY29uc3QgZHVlRGF0ZUZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHVlcy1mb2xkZXJcIik7XG5jb25zdCB1cGNvbWluZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBjb21pbmctZGF0ZXMtY29udGFpbmVyXCIpO1xuY29uc3QgZXJyb3JEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlcnJvci1ib3hcIik7XG5jb25zdCBmb2xkZXJJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvbGRlci1pbWdcIik7XG5cbmxldCB1cGNvbWluZ1RvZG9MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWxpc3QtZGF0ZVwiKTtcbmxldCB0b2RvQnRuQ291bnQgPSAwO1xubGV0IGFsbFRvZG8gPSBbXVxubGV0IGRhdGVUb2RvID0gW11cbmxldCB0ZW1wQWxsVG9kbyA9W11cblxuXG5cbmFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZih0b2RvQnRuQ291bnQgPT0gMCl7XG4gICAgICAgIGFkZFRvZG9CdG4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgYWRkVG9kb0J0bi5jbGFzc0xpc3QudG9nZ2xlKFwidG9nZ2xlXCIpO1xuICAgICAgICBmb3JtSW5mb0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICArK3RvZG9CdG5Db3VudFxuICAgIH1lbHNle1xuICAgICAgICBpZihpbnB1dFRpdGxlLnZhbHVlID09IFwiXCIgfHwgdG9kb1ByaW9yaXR5LnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgYWRkVG9kb0J0bi5jbGFzc0xpc3QudG9nZ2xlKFwidG9nZ2xlXCIpO1xuICAgICAgICBmb3JtSW5mb0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICB0b2RvQnRuQ291bnQtLTtcbiAgICAgICAgXG4gICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmKGR1ZURhdGUudmFsdWUgPT0gXCJcIil7fVxuICAgICAgICBlbHNlIGlmKGR1ZURhdGUudmFsdWUgPCBnZXRUb2RheURhdGUoKSB8fCBuZXcgRGF0ZShkdWVEYXRlLnZhbHVlKS5nZXRGdWxsWWVhcigpID4gOTk5OSlcbiAgICAgICAgcmV0dXJuICBlcnJvckRhdGUuY2xhc3NMaXN0LnRvZ2dsZShcImFsZXJ0XCIpO1xuICAgICAgICBpZihlcnJvckRhdGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWxlcnRcIikpIGVycm9yRGF0ZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWxlcnRcIik7XG4gICAgICAgIG5ldyBGb2xkZXIoKS5hZGRUb2RvKFxuICAgICAgICAgICAgaW5wdXRUaXRsZS52YWx1ZSwgdG9kb1ByaW9yaXR5LnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBmYWxzZSwgc2VsZWN0ZWRGb2xkZXIuaWQpO1xuICAgICAgICBhZGRUb2RvQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2dnbGVcIik7XG4gICAgICAgIGZvcm1JbmZvQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIHRvZG9CdG5Db3VudC0tO1xuICAgIH1cbn0pO1xuXG5kdWVEYXRlRm9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBkYXRlVG9kbyA9IFtdXG4gICAgdGVtcEFsbFRvZG8gPSBbXVxuICAgIGFsbFRvZG8gPSBbXVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBmb2xkZXJTdG9yYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdGVtcEFsbFRvZG8ucHVzaChmb2xkZXJTdG9yYWdlW2ldLnRvZG8pO1xuICAgICAgICBhbGxUb2RvLnB1c2godGVtcEFsbFRvZG9baV0pO1xuICAgIH1cbiAgICBhbGxUb2RvLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGUubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYoZVtpXS5kYXRlICE9PSAnJyAmJiAhZGF0ZVRvZG8uaW5jbHVkZXMoZVtpXSkpIGRhdGVUb2RvLnB1c2goZVtpXSlcbiAgICAgICAgfVxuICAgIH0pXG4gICAgZGF0ZVRvZG8uc29ydCgoYSwgYikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5kYXRlKSAtIG5ldyBEYXRlKGIuZGF0ZSk7XG4gICAgfSlcblxuICAgIHVwY29taW5nQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93LWZsZXhcIik7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgOTk5KSBmb2xkZXJJbWcuY2xpY2soKTtcbiAgICBvcGVuVXBjb21pbmcoZGF0ZVRvZG8pO1xuXG59KVxuXG5mdW5jdGlvbiBvcGVuVXBjb21pbmcoZGF0ZVRvZG8pe1xuICAgIC8vb25seSBtYWtlcyBpdCB0aGF0IHRoZSBjb250YWluZXIgaXMgcmVtb3ZlZCwgd2hlbiBzY3JlZW4gaXMgYmlnXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTk5KSB0b2RvTGlzdENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1mbGV4XCIpO1xuXHR1cGNvbWluZ1RvZG9MaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGRhdGVUb2RvLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IGxpc3RJdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGV0IGxpc3RJdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBsZXQgbGlzdEl0ZW1Db21wbGV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbGV0IGxpc3RJdGVtRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbGV0IGxpc3RJdGVtRGVsZXRlQnRuID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxldCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBkYXRlQW5kRGVsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIC8vIENoYW5nZXMgZGF0ZSBmb3JtYXRcbiAgICAgICAgbGV0IGN1cnJfZGF0ZSA9IG5ldyBEYXRlKGRhdGVUb2RvW2ldLmRhdGUpO1xuICAgICAgICBsZXQgY3Vycl9kYXkgPSBjdXJyX2RhdGUuZ2V0RGF0ZSgpICsgMTtcbiAgICAgICAgbGV0IGN1cnJfbW9udGggPSBjdXJyX2RhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIGxldCBjdXJyX3llYXIgPSBjdXJyX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICAgICAgICBpZihkYXRlVG9kb1tpXS5wcmlvcml0eSA9PSBcIkxvd1wiKXtsaXN0SXRlbUNvbXBsZXRpb24uY2xhc3NMaXN0LmFkZChcImxvdy1wcmlvcml0eVwiKX1cbiAgICAgICAgZWxzZSBpZihkYXRlVG9kb1tpXS5wcmlvcml0eSA9PSBcIk1lZGl1bVwiKXtsaXN0SXRlbUNvbXBsZXRpb24uY2xhc3NMaXN0LmFkZChcIm1lZGl1bS1wcmlvcml0eVwiKX1cbiAgICAgICAgZWxzZXtsaXN0SXRlbUNvbXBsZXRpb24uY2xhc3NMaXN0LmFkZChcImhpZ2gtcHJpb3JpdHlcIil9O1xuXG4gICAgICAgIGxpc3RJdGVtQ29tcGxldGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIGxpc3RJdGVtQ29tcGxldGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmKGRhdGVUb2RvW2ldLmNvbXBsZXRlKXtkYXRlVG9kb1tpXS5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfWVsc2V7ZGF0ZVRvZG9baV0uY29tcGxldGUgPSB0cnVlfTtcblxuICAgICAgICAgICAgaWYoZGF0ZVRvZG9baV0uY29tcGxldGUpe1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtRGVsZXRlQnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbUVsZW1lbnQuc3R5bGUuYm94U2hhZG93ID0gXCIwIDAgN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMzExKVwiO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW1FbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9IFwibm9uZVwiOyAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb2xkZXJzJywgSlNPTi5zdHJpbmdpZnkoZm9sZGVyU3RvcmFnZSkpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGxpc3RJdGVtRGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlVG9kbyhmb2xkZXJTdG9yYWdlW3NlbGVjdGVkRm9sZGVyLmlkXS50b2RvW2ldKTtcblxuICAgICAgICB9KVxuXG4gICAgICAgIGxpc3RJdGVtRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlbGV0ZVwiKTtcbiAgICAgICAgbGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZS1kZWxldGVcIik7XG4gICAgICAgIGRhdGVBbmREZWxldGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tZGF0ZS1kZWxldGUtY29udGFpbmVyXCIpO1xuICAgICAgICBcblx0XHRsaXN0SXRlbVRleHQudGV4dENvbnRlbnQgPSBkYXRlVG9kb1tpXS50aXRsZTtcbiAgICAgICAgbGlzdEl0ZW1EYXRlLnRleHRDb250ZW50ID0gY3Vycl9tb250aCArIFwiLVwiICsgY3Vycl9kYXkgKyBcIi1cIiArIGN1cnJfeWVhcjtcbiAgICAgICAgbGlzdEl0ZW1Db21wbGV0aW9uLmNoZWNrZWQgPSBkYXRlVG9kb1tpXS5jb21wbGV0ZTtcbiAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uc3JjID0gdHJhc2hDYW5Tdmc7XG4gICAgICAgIC8vIEFkZHMgQ1NTIHRvIGNvbXBsZXRlZCBUYXNrIHdoZW4gZGlzcGxheWluZyBmb2xkZXJcbiAgICAgICAgaWYoZGF0ZVRvZG9baV0uY29tcGxldGUpe1xuICAgICAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgbGlzdEl0ZW1FbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9IFwiMnB4IDAgN3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMzExKVwiO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxpc3RJdGVtRGVsZXRlQnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgbGlzdEl0ZW1FbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9IFwibm9uZVwiO1xuICAgICAgICB9O1xuXG5cdFx0dXBjb21pbmdUb2RvTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbUVsZW1lbnQpO1xuICAgICAgICBsaXN0SXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQobGlzdEl0ZW1Db21wbGV0aW9uKTtcbiAgICAgICAgbGlzdEl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtVGV4dCk7XG4gICAgICAgIGRhdGVBbmREZWxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW1EYXRlKTtcbiAgICAgICAgZGF0ZUFuZERlbGV0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbURlbGV0ZUJ0bik7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUFuZERlbGV0ZUNvbnRhaW5lcik7XG5cblx0fVxuICAgIFxufVxuXG5mdW5jdGlvbiBnZXRUb2RheURhdGUoKXtcbiAgICBsZXQgZGF0ZVBsYWNlSG9sZGVyID0gbmV3IERhdGUoKTtcbiAgICBkYXRlUGxhY2VIb2xkZXIuc2V0RGF0ZShkYXRlUGxhY2VIb2xkZXIuZ2V0RGF0ZSgpIC0gMSk7XG4gICAgcmV0dXJuIGRhdGVQbGFjZUhvbGRlci50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG59XG5jbGFzcyBUb2Rve1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBwcmlvcml0eSwgZGF0ZSwgY29tcGxldGUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIH0gXG59XG5cblxuXG5mdW5jdGlvbiBkZWxldGVUb2RvKHRvZG8pe1xuICAgIGNvbnNvbGUubG9nKHRvZG8pXG4gICAgY29uc3QgaW5kZXggPSBmb2xkZXJTdG9yYWdlW3NlbGVjdGVkRm9sZGVyLmlkXS50b2RvLmluZGV4T2YodG9kbyk7XG4gICAgY29uc29sZS5sb2coaW5kZXgpXG4gICAgaWYoaW5kZXggPiAtMSl7XG4gICAgICAgIGZvbGRlclN0b3JhZ2Vbc2VsZWN0ZWRGb2xkZXIuaWRdLnRvZG8uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcnMnLCBKU09OLnN0cmluZ2lmeShmb2xkZXJTdG9yYWdlKSlcbiAgICBvcGVuRm9sZGVyKGZvbGRlclN0b3JhZ2Vbc2VsZWN0ZWRGb2xkZXIuaWRdLnRvZG8pXG59XG5cbmV4cG9ydCB7VG9kbywgZGVsZXRlVG9kbywgdXBjb21pbmdDb250YWluZXJ9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9