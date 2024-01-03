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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0px;\n    padding: 0px;\n}\n.main-content{\n    display: grid;\n    height: 100vh;\n    width: 100%;\n    font-family: 'Libre Baskerville', serif;\n    grid-template-columns: 25% 75%;\n    grid-template-rows: auto 1fr;\n    background-color: #bbbbbb;\n}\n\n#title{\n    grid-column: 1/-1;\n    display: flex;\n    background-color: #f0f0f0ee;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px 2px 7px rgba(22, 22, 22, 0.411);\n    z-index: 1;\n}\nh1{\n    font-size: 45px;\n    padding: 30px 20px;\n    font-weight: 700;\n \n}\n#title img{\n    width: 80px;\n}\n\n\n#folder-header{\n    display: flex;\n    justify-content: space-between;\n}\n\n.active{\n    background-color: #c2c2c2;\n}\ndiv h2 {\n    font-size: 30px;\n    color: #222222;\n}\n\ndiv div img{\n    width: 30px;\n}\n\n\n\n.main-folder-container{\n    padding: 20px 25px;\n    background-color: #e0e0e0;\n}\n\n.folder-add-container{\n    display: flex;\n    margin-top: 10px;\n    padding-top: 10px;\n    border-top: 1px solid gray;\n    font-size: 20px;\n    justify-content: space-between;\n    align-items: center;\n    transition: 0.7s;\n}\n\n#display-form-btn{\n    border-radius: 20px;\n    font-size: 23px;\n    width: 30px;\n    height: 30px;\n    border: 2px solid black;\n    background-color: rgba(0, 134, 13, 0.281);\n}\n\n#form-folder{\n    background-color: transparent;\n    width: 0;\n    border-radius: 10px;\n    transition: 0.7s;\n}\n\n#form-folder.active{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    height: auto;\n    gap: 10px;\n    margin: 17px 0px;\n}\n\n.form-folder-input-box{\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    gap: 10px;\n}\n\n#form-folder input{\n    height: 23px;\n    font-size: 18px;\n    padding-left: 3px;\n    background-color: transparent;\n    border: none;\n    display: none;\n    border-left: 2px solid black;\n}\n#form-folder input.toggle{\n    display: inline;\n}\n\n\n#form-folder button{\n    border: none;\n    background-color: transparent;\n    display: none;\n    \n}\n#form-folder button.toggle{\n    border: none;\n    background-color: transparent;\n    display: inline;\n    \n}\n\n#form-folder button img{\n    width: 35px;\n}\n\n.folder-container{\n    margin-left: 10px;\n    \n}\n\n\n#todo-list-container{\n    display: none;\n    align-items: center;\n    max-width: 2000px;\n    flex-direction: column;\n}\n#todo-list-container h2{\n    width: 80%;\n    text-align: center;\n}\n\n#form-todo{\n    margin-bottom: 20px;\n}\n\n#todo-list{\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n#todo-list li{\n    display: flex;\n    gap: 40px;\n    width: 100%;\n    align-items: center;\n    font-size: 30px;\n}\nli input{\n    -webkit-appearance: none;\n\tborder: 1px solid #cacece;\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);\n\tpadding: 9px;\n\tborder-radius: 10px;\n\tdisplay: inline-block;\n\tposition: relative;\n    cursor: pointer;\n}\n\nli input:active, li input:checked:active{\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.322), inset 0px 1px 3px rgba(0, 0, 0, 0.411);\n\n}\n\nli input:checked{\n    background-color: #ffffff;\n\tborder: 1px solid #000000;\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);\n\tcolor: #ffffff;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n\n}\n\n\n#todo-list li p{\n    font-size: 30px;\n}\n\n.todo-container{\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n\n.todo-delete{\n\n}\n\n.low-priority {\n    background-color: rgb(109, 230, 121);\n}\n\n.medium-priority{ background-color: rgb(231, 172, 61);}\n\n.high-priority{background-color: rgb(185, 72, 72);}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,aAAa;IACb,aAAa;IACb,WAAW;IACX,uCAAuC;IACvC,8BAA8B;IAC9B,4BAA4B;IAC5B,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,2BAA2B;IAC3B,uBAAuB;IACvB,mBAAmB;IACnB,+CAA+C;IAC/C,UAAU;AACd;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,gBAAgB;;AAEpB;AACA;IACI,WAAW;AACf;;;AAGA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,WAAW;AACf;;;;AAIA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,0BAA0B;IAC1B,eAAe;IACf,8BAA8B;IAC9B,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,yCAAyC;AAC7C;;AAEA;IACI,6BAA6B;IAC7B,QAAQ;IACR,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;IACX,YAAY;IACZ,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,6BAA6B;IAC7B,YAAY;IACZ,aAAa;IACb,4BAA4B;AAChC;AACA;IACI,eAAe;AACnB;;;AAGA;IACI,YAAY;IACZ,6BAA6B;IAC7B,aAAa;;AAEjB;AACA;IACI,YAAY;IACZ,6BAA6B;IAC7B,eAAe;;AAEnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;;AAErB;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,sBAAsB;AAC1B;AACA;IACI,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,SAAS;IACT,WAAW;IACX,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,wBAAwB;CAC3B,yBAAyB;CACzB,mFAAmF;CACnF,YAAY;CACZ,mBAAmB;CACnB,qBAAqB;CACrB,kBAAkB;IACf,eAAe;AACnB;;AAEA;IACI,kFAAkF;;AAEtF;;AAEA;IACI,yBAAyB;CAC5B,yBAAyB;CACzB,gIAAgI;CAChI,cAAc;IACX,yDAA0C;;AAE9C;;;AAGA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;AACf;;AAEA;;AAEA;;AAEA;IACI,oCAAoC;AACxC;;AAEA,kBAAkB,mCAAmC,CAAC;;AAEtD,eAAe,kCAAkC,CAAC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');\n\n*{\n    margin: 0px;\n    padding: 0px;\n}\n.main-content{\n    display: grid;\n    height: 100vh;\n    width: 100%;\n    font-family: 'Libre Baskerville', serif;\n    grid-template-columns: 25% 75%;\n    grid-template-rows: auto 1fr;\n    background-color: #bbbbbb;\n}\n\n#title{\n    grid-column: 1/-1;\n    display: flex;\n    background-color: #f0f0f0ee;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px 2px 7px rgba(22, 22, 22, 0.411);\n    z-index: 1;\n}\nh1{\n    font-size: 45px;\n    padding: 30px 20px;\n    font-weight: 700;\n \n}\n#title img{\n    width: 80px;\n}\n\n\n#folder-header{\n    display: flex;\n    justify-content: space-between;\n}\n\n.active{\n    background-color: #c2c2c2;\n}\ndiv h2 {\n    font-size: 30px;\n    color: #222222;\n}\n\ndiv div img{\n    width: 30px;\n}\n\n\n\n.main-folder-container{\n    padding: 20px 25px;\n    background-color: #e0e0e0;\n}\n\n.folder-add-container{\n    display: flex;\n    margin-top: 10px;\n    padding-top: 10px;\n    border-top: 1px solid gray;\n    font-size: 20px;\n    justify-content: space-between;\n    align-items: center;\n    transition: 0.7s;\n}\n\n#display-form-btn{\n    border-radius: 20px;\n    font-size: 23px;\n    width: 30px;\n    height: 30px;\n    border: 2px solid black;\n    background-color: rgba(0, 134, 13, 0.281);\n}\n\n#form-folder{\n    background-color: transparent;\n    width: 0;\n    border-radius: 10px;\n    transition: 0.7s;\n}\n\n#form-folder.active{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    height: auto;\n    gap: 10px;\n    margin: 17px 0px;\n}\n\n.form-folder-input-box{\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    gap: 10px;\n}\n\n#form-folder input{\n    height: 23px;\n    font-size: 18px;\n    padding-left: 3px;\n    background-color: transparent;\n    border: none;\n    display: none;\n    border-left: 2px solid black;\n}\n#form-folder input.toggle{\n    display: inline;\n}\n\n\n#form-folder button{\n    border: none;\n    background-color: transparent;\n    display: none;\n    \n}\n#form-folder button.toggle{\n    border: none;\n    background-color: transparent;\n    display: inline;\n    \n}\n\n#form-folder button img{\n    width: 35px;\n}\n\n.folder-container{\n    margin-left: 10px;\n    \n}\n\n\n#todo-list-container{\n    display: none;\n    align-items: center;\n    max-width: 2000px;\n    flex-direction: column;\n}\n#todo-list-container h2{\n    width: 80%;\n    text-align: center;\n}\n\n#form-todo{\n    margin-bottom: 20px;\n}\n\n#todo-list{\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n#todo-list li{\n    display: flex;\n    gap: 40px;\n    width: 100%;\n    align-items: center;\n    font-size: 30px;\n}\nli input{\n    -webkit-appearance: none;\n\tborder: 1px solid #cacece;\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);\n\tpadding: 9px;\n\tborder-radius: 10px;\n\tdisplay: inline-block;\n\tposition: relative;\n    cursor: pointer;\n}\n\nli input:active, li input:checked:active{\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.322), inset 0px 1px 3px rgba(0, 0, 0, 0.411);\n\n}\n\nli input:checked{\n    background-color: #ffffff;\n\tborder: 1px solid #000000;\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);\n\tcolor: #ffffff;\n    background-image: url(\"img/check-all.svg\");\n\n}\n\n\n#todo-list li p{\n    font-size: 30px;\n}\n\n.todo-container{\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n\n.todo-delete{\n\n}\n\n.low-priority {\n    background-color: rgb(109, 230, 121);\n}\n\n.medium-priority{ background-color: rgb(231, 172, 61);}\n\n.high-priority{background-color: rgb(185, 72, 72);}"],"sourceRoot":""}]);
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




const todoListContainer = document.querySelector("#todo-list-container");
const inputDescription = document.querySelector("#todo-description")
const inputFolder = document.querySelector("#folder-input");
const addFolderBtn = document.querySelector("#folder-btn");
const inputTitle = document.querySelector("#todo-title");
const showFormBtn = document.querySelector("#display-form-btn")
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
    showFormBtn.textContent = "+"
    showFormBtn.style.backgroundColor = "rgba(0, 134, 13, 0.281)"
    localStorage.setItem('folders', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]))
});

showFormBtn.addEventListener('click', () => {
    form.classList.toggle("active");
    addFolderBtn.classList.toggle("toggle");
    form.querySelectorAll("input").forEach(el => el.classList.toggle('toggle'))
    console.log(form.querySelectorAll("input"))
    if(showFormBtn.textContent == "+"){
    showFormBtn.textContent = "✕"
    showFormBtn.style.backgroundColor = "rgb(185, 72, 72)"
    }else {
    showFormBtn.textContent = "+";
     showFormBtn.style.backgroundColor = "rgba(0, 134, 13, 0.281)"
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
    const deleteImg = new Image();
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

    deleteImg.addEventListener('click', () => {
        
        deleted = true;
        let newStorage = _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].filter((r) => { return r.name != newFolder.name});
        _index_js__WEBPACK_IMPORTED_MODULE_0__["default"] = newStorage

        i = -1
        refreshFolder()

        localStorage.setItem('folders', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]))

        console.log(newStorage)
        console.log(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])

        })
    
    

    deleteImg.src = _img_trash_can_svg__WEBPACK_IMPORTED_MODULE_2__;

    folderHeader.id = "folder-header";

    folderText.textContent = folderTitle;
    folderDescription.textContent = description;

    folderContainer.appendChild(currentFolder);
    currentFolder.appendChild(folderHeader);
    folderHeader.appendChild(folderText);
    folderHeader.appendChild(deleteImg);
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
                listItemElement.style.backgroundColor = "#adadad"
            }else{
                listItemDeleteBtn.style.display = "none";
                listItemElement.style.backgroundColor = "";
            };

            localStorage.setItem('folders', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
        })

        listItemDeleteBtn.addEventListener('click', () => {
            ;(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.deleteTodo)(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"][selectedFolder.id].todo[i]);

        })

        listItemDeleteBtn.classList.add("todo-delete")
        listContainer.classList.add("todo-container")
        
		listItemText.textContent = todoList[i].title;
        listItemCompletion.checked = todoList[i].complete;
        listItemDeleteBtn.src = _img_trash_can_svg__WEBPACK_IMPORTED_MODULE_2__;
        if(todoList[i].complete){
            listItemDeleteBtn.style.display = "block";
            listItemElement.style.backgroundColor = "#adadad";
        }else{
            listItemDeleteBtn.style.display = "none";
            listItemElement.style.backgroundColor = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mb2xkZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImltZy9jaGVjay1hbGwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MaWJyZStCYXNrZXJ2aWxsZTppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxufVxcbi5tYWluLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ0xpYnJlIEJhc2tlcnZpbGxlJywgc2VyaWY7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDc1JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYmJiYjtcXG59XFxuXFxuI3RpdGxle1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMGVlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA3cHggcmdiYSgyMiwgMjIsIDIyLCAwLjQxMSk7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcbmgxe1xcbiAgICBmb250LXNpemU6IDQ1cHg7XFxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gXFxufVxcbiN0aXRsZSBpbWd7XFxuICAgIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG5cXG4jZm9sZGVyLWhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJjMmMyO1xcbn1cXG5kaXYgaDIge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiAjMjIyMjIyO1xcbn1cXG5cXG5kaXYgZGl2IGltZ3tcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcblxcblxcblxcbi5tYWluLWZvbGRlci1jb250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDIwcHggMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG59XFxuXFxuLmZvbGRlci1hZGQtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbn1cXG5cXG4jZGlzcGxheS1mb3JtLWJ0bntcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMzQsIDEzLCAwLjI4MSk7XFxufVxcblxcbiNmb3JtLWZvbGRlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbn1cXG5cXG4jZm9ybS1mb2xkZXIuYWN0aXZle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luOiAxN3B4IDBweDtcXG59XFxuXFxuLmZvcm0tZm9sZGVyLWlucHV0LWJveHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jZm9ybS1mb2xkZXIgaW5wdXR7XFxuICAgIGhlaWdodDogMjNweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcXG59XFxuI2Zvcm0tZm9sZGVyIGlucHV0LnRvZ2dsZXtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG5cXG4jZm9ybS1mb2xkZXIgYnV0dG9ue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBcXG59XFxuI2Zvcm0tZm9sZGVyIGJ1dHRvbi50b2dnbGV7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgXFxufVxcblxcbiNmb3JtLWZvbGRlciBidXR0b24gaW1ne1xcbiAgICB3aWR0aDogMzVweDtcXG59XFxuXFxuLmZvbGRlci1jb250YWluZXJ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBcXG59XFxuXFxuXFxuI3RvZG8tbGlzdC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMjAwMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jdG9kby1saXN0LWNvbnRhaW5lciBoMntcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZm9ybS10b2Rve1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jdG9kby1saXN0e1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuI3RvZG8tbGlzdCBsaXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5saSBpbnB1dHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNjYWNlY2U7XFxuXFx0Ym94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4wNSksIGluc2V0IDBweCAtMTVweCAxMHB4IC0xMnB4IHJnYmEoMCwwLDAsMC4wNSk7XFxuXFx0cGFkZGluZzogOXB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5saSBpbnB1dDphY3RpdmUsIGxpIGlucHV0OmNoZWNrZWQ6YWN0aXZle1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMyMiksIGluc2V0IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC40MTEpO1xcblxcbn1cXG5cXG5saSBpbnB1dDpjaGVja2Vke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XFxuXFx0Ym94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4wNSksIGluc2V0IDBweCAtMTVweCAxMHB4IC0xMnB4IHJnYmEoMCwwLDAsMC4wNSksIGluc2V0IDE1cHggMTBweCAtMTJweCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XFxuXFx0Y29sb3I6ICNmZmZmZmY7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuXFxufVxcblxcblxcbiN0b2RvLWxpc3QgbGkgcHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4udG9kby1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50b2RvLWRlbGV0ZXtcXG5cXG59XFxuXFxuLmxvdy1wcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDksIDIzMCwgMTIxKTtcXG59XFxuXFxuLm1lZGl1bS1wcmlvcml0eXsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMTcyLCA2MSk7fVxcblxcbi5oaWdoLXByaW9yaXR5e2JhY2tncm91bmQtY29sb3I6IHJnYigxODUsIDcyLCA3Mik7fVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsV0FBVztJQUNYLHVDQUF1QztJQUN2Qyw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsK0NBQStDO0lBQy9DLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7Ozs7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixhQUFhOztBQUVqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjs7QUFFckI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksd0JBQXdCO0NBQzNCLHlCQUF5QjtDQUN6QixtRkFBbUY7Q0FDbkYsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsa0JBQWtCO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtGQUFrRjs7QUFFdEY7O0FBRUE7SUFDSSx5QkFBeUI7Q0FDNUIseUJBQXlCO0NBQ3pCLGdJQUFnSTtDQUNoSSxjQUFjO0lBQ1gseURBQTBDOztBQUU5Qzs7O0FBR0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUEsa0JBQWtCLG1DQUFtQyxDQUFDOztBQUV0RCxlQUFlLGtDQUFrQyxDQUFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qe1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbn1cXG4ubWFpbi1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSA3NSU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmJiYmI7XFxufVxcblxcbiN0aXRsZXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjBlZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggN3B4IHJnYmEoMjIsIDIyLCAyMiwgMC40MTEpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5oMXtcXG4gICAgZm9udC1zaXplOiA0NXB4O1xcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuIFxcbn1cXG4jdGl0bGUgaW1ne1xcbiAgICB3aWR0aDogODBweDtcXG59XFxuXFxuXFxuI2ZvbGRlci1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyYzJjMjtcXG59XFxuZGl2IGgyIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBjb2xvcjogIzIyMjIyMjtcXG59XFxuXFxuZGl2IGRpdiBpbWd7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG5cXG5cXG4ubWFpbi1mb2xkZXItY29udGFpbmVye1xcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcblxcbi5mb2xkZXItYWRkLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC43cztcXG59XFxuXFxuI2Rpc3BsYXktZm9ybS1idG57XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTM0LCAxMywgMC4yODEpO1xcbn1cXG5cXG4jZm9ybS1mb2xkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB3aWR0aDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogMC43cztcXG59XFxuXFxuI2Zvcm0tZm9sZGVyLmFjdGl2ZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbjogMTdweCAwcHg7XFxufVxcblxcbi5mb3JtLWZvbGRlci1pbnB1dC1ib3h7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI2Zvcm0tZm9sZGVyIGlucHV0e1xcbiAgICBoZWlnaHQ6IDIzcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XFxufVxcbiNmb3JtLWZvbGRlciBpbnB1dC50b2dnbGV7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuXFxuI2Zvcm0tZm9sZGVyIGJ1dHRvbntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgXFxufVxcbiNmb3JtLWZvbGRlciBidXR0b24udG9nZ2xle1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIFxcbn1cXG5cXG4jZm9ybS1mb2xkZXIgYnV0dG9uIGltZ3tcXG4gICAgd2lkdGg6IDM1cHg7XFxufVxcblxcbi5mb2xkZXItY29udGFpbmVye1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgXFxufVxcblxcblxcbiN0b2RvLWxpc3QtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDIwMDBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI3RvZG8tbGlzdC1jb250YWluZXIgaDJ7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2Zvcm0tdG9kb3tcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI3RvZG8tbGlzdHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbiN0b2RvLWxpc3QgbGl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxubGkgaW5wdXR7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjY2FjZWNlO1xcblxcdGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMDUpLCBpbnNldCAwcHggLTE1cHggMTBweCAtMTJweCByZ2JhKDAsMCwwLDAuMDUpO1xcblxcdHBhZGRpbmc6IDlweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubGkgaW5wdXQ6YWN0aXZlLCBsaSBpbnB1dDpjaGVja2VkOmFjdGl2ZXtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zMjIpLCBpbnNldCAwcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNDExKTtcXG5cXG59XFxuXFxubGkgaW5wdXQ6Y2hlY2tlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcblxcdGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMDUpLCBpbnNldCAwcHggLTE1cHggMTBweCAtMTJweCByZ2JhKDAsMCwwLDAuMDUpLCBpbnNldCAxNXB4IDEwcHggLTEycHggcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xcblxcdGNvbG9yOiAjZmZmZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImltZy9jaGVjay1hbGwuc3ZnXFxcIik7XFxuXFxufVxcblxcblxcbiN0b2RvLWxpc3QgbGkgcHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4udG9kby1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50b2RvLWRlbGV0ZXtcXG5cXG59XFxuXFxuLmxvdy1wcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDksIDIzMCwgMTIxKTtcXG59XFxuXFxuLm1lZGl1bS1wcmlvcml0eXsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMTcyLCA2MSk7fVxcblxcbi5oaWdoLXByaW9yaXR5e2JhY2tncm91bmQtY29sb3I6IHJnYigxODUsIDcyLCA3Mik7fVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBmb2xkZXJTdG9yYWdlIGZyb20gJy4vaW5kZXguanMnXG5pbXBvcnQge1RvZG8sIGRlbGV0ZVRvZG8sIGV4YW1wbGVGb2xkZXJ9IGZyb20gJy4vdG9kby5qcydcbmltcG9ydCB0cmFzaENhblN2ZyBmcm9tICcuL2ltZy90cmFzaC1jYW4uc3ZnJ1xuXG5jb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1saXN0LWNvbnRhaW5lclwiKTtcbmNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZGVzY3JpcHRpb25cIilcbmNvbnN0IGlucHV0Rm9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb2xkZXItaW5wdXRcIik7XG5jb25zdCBhZGRGb2xkZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZvbGRlci1idG5cIik7XG5jb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLXRpdGxlXCIpO1xuY29uc3Qgc2hvd0Zvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc3BsYXktZm9ybS1idG5cIilcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tZm9sZGVyXCIpO1xuXG5mb2xkZXJTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZm9sZGVycycpKTtcblxuXG5sZXQgYWRkRm9sZGVyID0gZmFsc2VcbmxldCBpID0gLTFcbmxldCBzZWxlY3RlZEZvbGRlciA9IHVuZGVmaW5lZFxuXG5hZGRGb2xkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZihpbnB1dEZvbGRlci52YWx1ZSA9PSAnJyB8fCBpbnB1dEZvbGRlci52YWx1ZSA9PSBcIkNvbW1vbiBOYW1lIEZvdW5kXCIpIHJldHVybjtcbiAgICBpZihmb2xkZXJTdG9yYWdlLnNvbWUoZm9sZGVyID0+IGZvbGRlci5uYW1lID09IGlucHV0Rm9sZGVyLnZhbHVlKSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGlucHV0Rm9sZGVyLnZhbHVlID0gXCJcIiwgMjAwMCk7XG4gICAgICAgIHJldHVybiBpbnB1dEZvbGRlci52YWx1ZSA9IFwiQ29tbW9uIE5hbWUgRm91bmRcIlxuICAgIH07XG4gICAgYWRkRm9sZGVyID0gdHJ1ZTtcbiAgICBjcmVhdGVGb2xkZXIoaW5wdXRGb2xkZXIudmFsdWUsIGlucHV0RGVzY3JpcHRpb24udmFsdWUpO1xuICAgIGFkZEZvbGRlciA9IGZhbHNlO1xuICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBhZGRGb2xkZXJCdG4uY2xhc3NMaXN0LnRvZ2dsZShcInRvZ2dsZVwiKTtcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKS5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZScpKVxuICAgIHNob3dGb3JtQnRuLnRleHRDb250ZW50ID0gXCIrXCJcbiAgICBzaG93Rm9ybUJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMTM0LCAxMywgMC4yODEpXCJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9sZGVycycsIEpTT04uc3RyaW5naWZ5KGZvbGRlclN0b3JhZ2UpKVxufSk7XG5cbnNob3dGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBhZGRGb2xkZXJCdG4uY2xhc3NMaXN0LnRvZ2dsZShcInRvZ2dsZVwiKTtcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKS5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZScpKVxuICAgIGNvbnNvbGUubG9nKGZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpKVxuICAgIGlmKHNob3dGb3JtQnRuLnRleHRDb250ZW50ID09IFwiK1wiKXtcbiAgICBzaG93Rm9ybUJ0bi50ZXh0Q29udGVudCA9IFwi4pyVXCJcbiAgICBzaG93Rm9ybUJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigxODUsIDcyLCA3MilcIlxuICAgIH1lbHNlIHtcbiAgICBzaG93Rm9ybUJ0bi50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgICBzaG93Rm9ybUJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMTM0LCAxMywgMC4yODEpXCJcbiAgICB9XG59KVxuXG5cblxuY2xhc3MgRm9sZGVye1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBpZCwgdG9kbyl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnRvZG8gPSB0b2RvO1xuICAgIH1cblxuICAgIGFkZFRvZG8odGl0bGUsIHByaW9yaXR5LCBjb21wbGV0ZSwgaWQpe1xuICAgICAgICBpZihzZWxlY3RlZEZvbGRlciA9PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyh0aXRsZSwgcHJpb3JpdHksIGNvbXBsZXRlKVxuICAgICAgICBmb2xkZXJTdG9yYWdlW2lkXS50b2RvLnB1c2gobmV3VG9kbylcbiAgICAgICAgZGlzcGxheUZvbGRlcihmb2xkZXJTdG9yYWdlW2lkXS50b2RvKTtcbiAgICAgICAgaW5wdXRUaXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb2xkZXJzJywgSlNPTi5zdHJpbmdpZnkoZm9sZGVyU3RvcmFnZSkpXG4gICAgICAgIHJldHVybiBuZXdUb2RvXG4gICAgfVxuICAgIFxuXG59XG5sZXQgbmV3U3RvcmFnZSA9IFtdO1xubGV0IHByZXZBY3RpdmUgPSBudWxsO1xuXG5mdW5jdGlvbiBjcmVhdGVGb2xkZXIoZm9sZGVyVGl0bGUsIGRlc2NyaXB0aW9uLCB0b2RvKXtcbiAgICBjb25zdCBmb2xkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvbGRlci1jb250YWluZXJcIik7XG4gICAgY29uc3QgY3VycmVudEZvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZm9sZGVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkZWxldGVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBmb2xkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IGZvbGRlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBpZihleGFtcGxlRm9sZGVyKXtcblxuICAgIH1cbiAgICAvLyBtYWtlcyBuZXcgZm9sZGVyIGhhdmUgYSBlbXB0eSB0b2RvOiBhcnJheVxuICAgIGlmICh0b2RvID09IHVuZGVmaW5lZCkgdG9kbyA9IFtdO1xuICAgIGxldCBuZXdGb2xkZXIgPSBuZXcgRm9sZGVyKGZvbGRlclRpdGxlLCBkZXNjcmlwdGlvbiwgZ2V0SWQoaSksIHRvZG8pO1xuXG4gIC8vICBjb25zb2xlLmxvZyhuZXdGb2xkZXIpXG4gICAgbGV0IGRlbGV0ZWQgPSBmYWxzZTtcbiAgICBuZXdTdG9yYWdlLnB1c2gobmV3Rm9sZGVyKVxuICAgLy8gY29uc29sZS50YWJsZShuZXdTdG9yYWdlKVxuICAgIGkgPSBnZXRJZChpKTtcbiAgICBjdXJyZW50Rm9sZGVyLmlkID0gXCJmb2xkZXJcIiArIGk7XG5cbiAgICBkZWxldGVJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBkZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgbGV0IG5ld1N0b3JhZ2UgPSBmb2xkZXJTdG9yYWdlLmZpbHRlcigocikgPT4geyByZXR1cm4gci5uYW1lICE9IG5ld0ZvbGRlci5uYW1lfSk7XG4gICAgICAgIGZvbGRlclN0b3JhZ2UgPSBuZXdTdG9yYWdlXG5cbiAgICAgICAgaSA9IC0xXG4gICAgICAgIHJlZnJlc2hGb2xkZXIoKVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb2xkZXJzJywgSlNPTi5zdHJpbmdpZnkoZm9sZGVyU3RvcmFnZSkpXG5cbiAgICAgICAgY29uc29sZS5sb2cobmV3U3RvcmFnZSlcbiAgICAgICAgY29uc29sZS5sb2coZm9sZGVyU3RvcmFnZSlcblxuICAgICAgICB9KVxuICAgIFxuICAgIFxuXG4gICAgZGVsZXRlSW1nLnNyYyA9IHRyYXNoQ2FuU3ZnO1xuXG4gICAgZm9sZGVySGVhZGVyLmlkID0gXCJmb2xkZXItaGVhZGVyXCI7XG5cbiAgICBmb2xkZXJUZXh0LnRleHRDb250ZW50ID0gZm9sZGVyVGl0bGU7XG4gICAgZm9sZGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICAgIGZvbGRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50Rm9sZGVyKTtcbiAgICBjdXJyZW50Rm9sZGVyLmFwcGVuZENoaWxkKGZvbGRlckhlYWRlcik7XG4gICAgZm9sZGVySGVhZGVyLmFwcGVuZENoaWxkKGZvbGRlclRleHQpO1xuICAgIGZvbGRlckhlYWRlci5hcHBlbmRDaGlsZChkZWxldGVJbWcpO1xuICAgIGN1cnJlbnRGb2xkZXIuYXBwZW5kQ2hpbGQoZm9sZGVyRGVzY3JpcHRpb24pO1xuICAgIFxuICAgIGlucHV0RGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgIGlucHV0Rm9sZGVyLnZhbHVlID0gXCJcIjtcblxuICAgIGlmKGFkZEZvbGRlcilmb2xkZXJTdG9yYWdlLnB1c2gobmV3Rm9sZGVyKTtcbiAgICBcbiAgICBjdXJyZW50Rm9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy9wcmV2ZW50cyB0aGUgZm9sZGVyIHdoaWNoIGlzIHRvIGJlIGRlbGV0ZWQgZnJvbSBvcGVuaW5nXG4gICAgICAgIGlmKGRlbGV0ZWQpIHJldHVybiBkZWxldGVkID0gZmFsc2U7XG4gICAgLy9wcmV2ZW50cyB0aGUgZm9sZGVyIHRvIHJlLW9wZW5cbiAgICAgICAgaWYoc2VsZWN0ZWRGb2xkZXIgPT0gbmV3Rm9sZGVyKSByZXR1cm47XG4gICAgICAgIGRpc3BsYXlGb2xkZXIoZm9sZGVyU3RvcmFnZVtuZXdGb2xkZXIuaWRdLnRvZG8pO1xuICAgICAgICBjdXJyZW50Rm9sZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICAgICAgaWYocHJldkFjdGl2ZSAhPT0gbnVsbCkgcHJldkFjdGl2ZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICBwcmV2QWN0aXZlID0gY3VycmVudEZvbGRlcjtcbiAgICAgICAgY29uc29sZS5sb2cocHJldkFjdGl2ZSlcbiAgICAgICAgc2VsZWN0ZWRGb2xkZXIgPSBuZXdGb2xkZXI7XG4gICAgICAgIHRvZG9MaXN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgIH0pO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcnMnLCBKU09OLnN0cmluZ2lmeShuZXdTdG9yYWdlKSlcblxuICAgIFxufVxuXG5mdW5jdGlvbiBkaXNwbGF5Rm9sZGVyKHRvZG9MaXN0KXtcbiAgICBsZXQgdG9kb0xpc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWxpc3RcIik7XG5cdHRvZG9MaXN0RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnNvbGUubG9nKHRvZG9MaXN0KVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGxpc3RJdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGV0IGxpc3RJdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBsZXQgbGlzdEl0ZW1Db21wbGV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbGV0IGxpc3RJdGVtRGVsZXRlQnRuID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxldCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgaWYodG9kb0xpc3RbaV0ucHJpb3JpdHkgPT0gXCJMb3dcIil7bGlzdEl0ZW1Db21wbGV0aW9uLmNsYXNzTGlzdC5hZGQoXCJsb3ctcHJpb3JpdHlcIil9XG4gICAgICAgIGVsc2UgaWYodG9kb0xpc3RbaV0ucHJpb3JpdHkgPT0gXCJNZWRpdW1cIil7bGlzdEl0ZW1Db21wbGV0aW9uLmNsYXNzTGlzdC5hZGQoXCJtZWRpdW0tcHJpb3JpdHlcIil9XG4gICAgICAgIGVsc2V7bGlzdEl0ZW1Db21wbGV0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWdoLXByaW9yaXR5XCIpfTtcblxuICAgICAgICBsaXN0SXRlbUNvbXBsZXRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgICBsaXN0SXRlbUNvbXBsZXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZih0b2RvTGlzdFtpXS5jb21wbGV0ZSl7dG9kb0xpc3RbaV0uY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1lbHNle3RvZG9MaXN0W2ldLmNvbXBsZXRlID0gdHJ1ZX07XG5cbiAgICAgICAgICAgIGlmKHRvZG9MaXN0W2ldLmNvbXBsZXRlKXtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbURlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNhZGFkYWRcIlxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcnMnLCBKU09OLnN0cmluZ2lmeShmb2xkZXJTdG9yYWdlKSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkZWxldGVUb2RvKGZvbGRlclN0b3JhZ2Vbc2VsZWN0ZWRGb2xkZXIuaWRdLnRvZG9baV0pO1xuXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcInRvZG8tZGVsZXRlXCIpXG4gICAgICAgIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tY29udGFpbmVyXCIpXG4gICAgICAgIFxuXHRcdGxpc3RJdGVtVGV4dC50ZXh0Q29udGVudCA9IHRvZG9MaXN0W2ldLnRpdGxlO1xuICAgICAgICBsaXN0SXRlbUNvbXBsZXRpb24uY2hlY2tlZCA9IHRvZG9MaXN0W2ldLmNvbXBsZXRlO1xuICAgICAgICBsaXN0SXRlbURlbGV0ZUJ0bi5zcmMgPSB0cmFzaENhblN2ZztcbiAgICAgICAgaWYodG9kb0xpc3RbaV0uY29tcGxldGUpe1xuICAgICAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGxpc3RJdGVtRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNhZGFkYWRcIjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBsaXN0SXRlbURlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBsaXN0SXRlbUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIjtcbiAgICAgICAgfTtcblxuXG5cdFx0dG9kb0xpc3RFbGVtZW50LmFwcGVuZENoaWxkKGxpc3RJdGVtRWxlbWVudCk7XG4gICAgICAgIGxpc3RJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChsaXN0SXRlbUNvbXBsZXRpb24pO1xuICAgICAgICBsaXN0SXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW1UZXh0KTtcbiAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbURlbGV0ZUJ0bik7XG5cblx0fVxufVxuXG5cbmZ1bmN0aW9uIGdldElkKGkpe1xuICAgIGkrKztcbiAgICByZXR1cm4gaTtcbn1cblxuZnVuY3Rpb24gcmVmcmVzaEZvbGRlcigpe1xuICAgIHJlbW92ZUNoaWxkcmVuKCk7XG4gICAgbmV3U3RvcmFnZSA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBmb2xkZXJTdG9yYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY3JlYXRlRm9sZGVyKGZvbGRlclN0b3JhZ2VbaV0ubmFtZSwgZm9sZGVyU3RvcmFnZVtpXS5kZXNjcmlwdGlvbiwgZm9sZGVyU3RvcmFnZVtpXS50b2RvKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4oKXtcbiAgICBjb25zdCBmb2xkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvbGRlci1jb250YWluZXJcIik7XG4gICAgd2hpbGUgKGZvbGRlckNvbnRhaW5lci5maXJzdENoaWxkKXtcbiAgICAgICAgZm9sZGVyQ29udGFpbmVyLnJlbW92ZUNoaWxkKGZvbGRlckNvbnRhaW5lci5maXJzdENoaWxkKVxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCB7Y3JlYXRlRm9sZGVyLCBzZWxlY3RlZEZvbGRlciwgRm9sZGVyLCBkaXNwbGF5Rm9sZGVyfTtcblxuIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5pbXBvcnQge2NyZWF0ZUZvbGRlcn0gZnJvbSAnLi9mb2xkZXIuanMnXG5cbmxldCBmb2xkZXJTdG9yYWdlID0gW107XG5sZXQgZXhhbXBsZUZvbGRlciA9IGZhbHNlO1xuXG5pZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZvbGRlcnMnKSkge1xuICAgIHBvcHVsYXRlU3RvcmFnZSgpO1xufSBlbHNlIHtcbiAgICBpbXBvcnRJbmZvKCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9sZGVycycsIEpTT04uc3RyaW5naWZ5KGZvbGRlclN0b3JhZ2UpKTtcbiAgICBleGFtcGxlRm9sZGVyID0gdHJ1ZVxuICAgIGltcG9ydEluZm8oKTtcbn1cblxuZnVuY3Rpb24gaW1wb3J0SW5mbygpIHtcbiAgICBmb2xkZXJTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZm9sZGVycycpKTtcbiAgICBjb25zb2xlLmxvZyhmb2xkZXJTdG9yYWdlKVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBmb2xkZXJTdG9yYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY3JlYXRlRm9sZGVyKGZvbGRlclN0b3JhZ2VbaV0ubmFtZSwgZm9sZGVyU3RvcmFnZVtpXS5kZXNjcmlwdGlvbiwgZm9sZGVyU3RvcmFnZVtpXS50b2RvKVxuICAgIH1cbn1cblxuXG5jb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpXG5leHBvcnQge2ZvbGRlclN0b3JhZ2UsIGV4YW1wbGVGb2xkZXJ9O1xuIiwiaW1wb3J0ICBmb2xkZXJTdG9yYWdlICBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgc2VsZWN0ZWRGb2xkZXIsIEZvbGRlciwgZGlzcGxheUZvbGRlciB9IGZyb20gXCIuL2ZvbGRlci5qc1wiO1xuXG5jb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWJ0blwiKTtcbmNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1wcmlvcml0eVwiKTtcbmNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tdGl0bGVcIik7XG5cblxuYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKGlucHV0VGl0bGUudmFsdWUgPT0gXCJcIiB8fCB0b2RvUHJpb3JpdHkudmFsdWUgPT0gXCJcIikgcmV0dXJuXG4gICAgbmV3IEZvbGRlcigpLmFkZFRvZG8oaW5wdXRUaXRsZS52YWx1ZSwgdG9kb1ByaW9yaXR5LnZhbHVlLCBmYWxzZSwgc2VsZWN0ZWRGb2xkZXIuaWQpO1xufSk7XG5cbmNsYXNzIFRvZG97XG4gICAgY29uc3RydWN0b3IodGl0bGUsIHByaW9yaXR5LCBjb21wbGV0ZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGVcbiAgICB9XG4gICAgXG4gICAgXG59XG5cblxuXG5mdW5jdGlvbiBkZWxldGVUb2RvKHRvZG8pe1xuICAgIGNvbnNvbGUubG9nKHRvZG8pXG4gICAgY29uc3QgaW5kZXggPSBmb2xkZXJTdG9yYWdlW3NlbGVjdGVkRm9sZGVyLmlkXS50b2RvLmluZGV4T2YodG9kbyk7XG4gICAgY29uc29sZS5sb2coaW5kZXgpXG4gICAgaWYoaW5kZXggPiAtMSl7XG4gICAgICAgIGZvbGRlclN0b3JhZ2Vbc2VsZWN0ZWRGb2xkZXIuaWRdLnRvZG8uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcnMnLCBKU09OLnN0cmluZ2lmeShmb2xkZXJTdG9yYWdlKSlcbiAgICBkaXNwbGF5Rm9sZGVyKGZvbGRlclN0b3JhZ2Vbc2VsZWN0ZWRGb2xkZXIuaWRdLnRvZG8pXG59XG5cbmV4cG9ydCB7VG9kbywgZGVsZXRlVG9kb307XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=