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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0px;\n    padding: 0px;\n}\n.main-content{\n    display: grid;\n    height: 100vh;\n    width: 100%;\n    font-family: 'Libre Baskerville', serif;\n    grid-template-columns: 25% 75%;\n    grid-template-rows: auto 1fr;\n    background-color: #bbbbbb;\n}\n\n#title{\n    grid-column: 1/-1;\n    display: flex;\n    background-color: #f0f0f0ee;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px 2px 7px rgba(22, 22, 22, 0.411);\n    z-index: 1;\n}\nh1{\n    font-size: 45px;\n    padding: 30px 20px;\n    font-weight: 700;\n \n}\n#title img{\n    width: 80px;\n}\n\n\n#folder-header{\n    display: flex;\n    justify-content: space-between;\n}\ndiv h2 {\n    font-size: 30px;\n    color: #222222;\n}\n\ndiv div img{\n    width: 30px;\n}\n\n.main-folder-container{\n    padding: 20px 25px;\n    background-color: #e0e0e0;\n}\n\n.folder-add-container{\n    display: flex;\n    font-size: 20px;\n}\n\n#display-form-btn{\n    margin-left: 20px;\n}\n#form{\n    display: none;\n    z-index: 1;\n    background-color: white;\n    padding: 20px;\n    border: 1px black solid;\n    border-radius: 10px;\n}\n\n#form.active{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 17px;\n    margin: 17px 5px;\n}\n\n.folder-container{\n    margin-left: 10px;\n    \n}\n\n#todo-list-container{\n    display: none;\n    padding-left: 10%;\n    align-items: center;\n    max-width: 1000px;\n    flex-direction: column;\n}\n\n#todo-list-container form{\n    margin-bottom: 20px;\n}\n\n#todo-list{\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n#todo-list li{\n    display: flex;\n    gap: 40px;\n    width: 80%;\n    align-items: center;\n    font-size: 30px;\n}\nli input{\n    -webkit-appearance: none;\n\tborder: 1px solid #cacece;\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);\n\tpadding: 9px;\n\tborder-radius: 10px;\n\tdisplay: inline-block;\n\tposition: relative;\n    cursor: pointer;\n}\n\nli input:active, li input:checked:active{\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.322), inset 0px 1px 3px rgba(0, 0, 0, 0.411);\n\n}\n\nli input:checked{\n    background-color: #000000;\n\tborder: 1px solid #000000;\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);\n\tcolor: #ffffff;\n}\n\nli input:checked::after{\n    content: '\\2714';\n\tfont-size: 14px;\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 3px;\n\tcolor: #ffffff;\n}\n#todo-list li p{\n    font-size: 30px;\n}\n\n.todo-container{\n    display: flex;\n    justify-content: space-between;\n    width: 80%;\n}\n\n.todo-delete{\n\n}\n\n.low-priority {\n    background-color: rgb(127, 255, 138);\n}\n\n.medium-priority{ background-color: rgb(231, 172, 61);}\n\n.high-priority{background-color: rgb(185, 72, 72);}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,aAAa;IACb,aAAa;IACb,WAAW;IACX,uCAAuC;IACvC,8BAA8B;IAC9B,4BAA4B;IAC5B,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,2BAA2B;IAC3B,uBAAuB;IACvB,mBAAmB;IACnB,+CAA+C;IAC/C,UAAU;AACd;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,gBAAgB;;AAEpB;AACA;IACI,WAAW;AACf;;;AAGA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,UAAU;IACV,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;;AAErB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,SAAS;IACT,UAAU;IACV,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,wBAAwB;CAC3B,yBAAyB;CACzB,mFAAmF;CACnF,YAAY;CACZ,mBAAmB;CACnB,qBAAqB;CACrB,kBAAkB;IACf,eAAe;AACnB;;AAEA;IACI,kFAAkF;;AAEtF;;AAEA;IACI,yBAAyB;CAC5B,yBAAyB;CACzB,gIAAgI;CAChI,cAAc;AACf;;AAEA;IACI,gBAAgB;CACnB,eAAe;CACf,kBAAkB;CAClB,QAAQ;CACR,SAAS;CACT,cAAc;AACf;AACA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,UAAU;AACd;;AAEA;;AAEA;;AAEA;IACI,oCAAoC;AACxC;;AAEA,kBAAkB,mCAAmC,CAAC;;AAEtD,eAAe,kCAAkC,CAAC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');\n\n*{\n    margin: 0px;\n    padding: 0px;\n}\n.main-content{\n    display: grid;\n    height: 100vh;\n    width: 100%;\n    font-family: 'Libre Baskerville', serif;\n    grid-template-columns: 25% 75%;\n    grid-template-rows: auto 1fr;\n    background-color: #bbbbbb;\n}\n\n#title{\n    grid-column: 1/-1;\n    display: flex;\n    background-color: #f0f0f0ee;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px 2px 7px rgba(22, 22, 22, 0.411);\n    z-index: 1;\n}\nh1{\n    font-size: 45px;\n    padding: 30px 20px;\n    font-weight: 700;\n \n}\n#title img{\n    width: 80px;\n}\n\n\n#folder-header{\n    display: flex;\n    justify-content: space-between;\n}\ndiv h2 {\n    font-size: 30px;\n    color: #222222;\n}\n\ndiv div img{\n    width: 30px;\n}\n\n.main-folder-container{\n    padding: 20px 25px;\n    background-color: #e0e0e0;\n}\n\n.folder-add-container{\n    display: flex;\n    font-size: 20px;\n}\n\n#display-form-btn{\n    margin-left: 20px;\n}\n#form{\n    display: none;\n    z-index: 1;\n    background-color: white;\n    padding: 20px;\n    border: 1px black solid;\n    border-radius: 10px;\n}\n\n#form.active{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 17px;\n    margin: 17px 5px;\n}\n\n.folder-container{\n    margin-left: 10px;\n    \n}\n\n#todo-list-container{\n    display: none;\n    padding-left: 10%;\n    align-items: center;\n    max-width: 1000px;\n    flex-direction: column;\n}\n\n#todo-list-container form{\n    margin-bottom: 20px;\n}\n\n#todo-list{\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n#todo-list li{\n    display: flex;\n    gap: 40px;\n    width: 80%;\n    align-items: center;\n    font-size: 30px;\n}\nli input{\n    -webkit-appearance: none;\n\tborder: 1px solid #cacece;\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);\n\tpadding: 9px;\n\tborder-radius: 10px;\n\tdisplay: inline-block;\n\tposition: relative;\n    cursor: pointer;\n}\n\nli input:active, li input:checked:active{\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.322), inset 0px 1px 3px rgba(0, 0, 0, 0.411);\n\n}\n\nli input:checked{\n    background-color: #000000;\n\tborder: 1px solid #000000;\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);\n\tcolor: #ffffff;\n}\n\nli input:checked::after{\n    content: '\\2714';\n\tfont-size: 14px;\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 3px;\n\tcolor: #ffffff;\n}\n#todo-list li p{\n    font-size: 30px;\n}\n\n.todo-container{\n    display: flex;\n    justify-content: space-between;\n    width: 80%;\n}\n\n.todo-delete{\n\n}\n\n.low-priority {\n    background-color: rgb(127, 255, 138);\n}\n\n.medium-priority{ background-color: rgb(231, 172, 61);}\n\n.high-priority{background-color: rgb(185, 72, 72);}"],"sourceRoot":""}]);
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
const form = document.querySelector("#form");

_index_js__WEBPACK_IMPORTED_MODULE_0__["default"] = JSON.parse(localStorage.getItem('folders'));


let addFolder = false
let i = -1
let selectedFolder = undefined

addFolderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addFolder = true;
    createFolder(inputFolder.value, inputDescription.value);
    localStorage.setItem('folders', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]))
});

showFormBtn.addEventListener('click', () => {
    form.classList.toggle("active") 
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
function createFolder(folderTitle, description, todo){
    const folderContainer = document.querySelector(".folder-container");
    const currentFolder = document.createElement("div");
    const folderHeader = document.createElement("div");
    const deleteImg = new Image();
    const folderText = document.createElement("h2");
    const folderDescription = document.createElement("p");
    let newFolder = new Folder(folderTitle, description, getId(i), todo);

    console.log(newFolder)
    let deleted = false;
    newStorage.push(newFolder)
    console.table(newStorage)
    i = getId(i);
    currentFolder.id = i;

    deleteImg.addEventListener('click', () => {
        console.log(newFolder.name)
        let newStorage = _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].filter((r) => { return r.name != newFolder.name});
        _index_js__WEBPACK_IMPORTED_MODULE_0__["default"] = newFolder;
        localStorage.setItem('folders', JSON.stringify(newStorage))
        console.table(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])

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
        if(deleted) return deleted = false;
        if(selectedFolder == newFolder) return;
        displayFolder(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"][newFolder.id].todo);
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
        let listItemDeleteBtn = document.createElement('button');
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
        listItemDeleteBtn.textContent = "Delete"
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





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "folderStorage": () => (/* binding */ folderStorage)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _folder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder.js */ "./src/folder.js");



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
    if(inputTitle.value == "") return
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQSxrQkFBa0IsaURBQWEsQ0FBQyx5REFBaUI7QUFDakQ7QUFDQTtBQUNBLFFBQVEsaURBQWEsQ0FBQyx5REFBaUI7QUFDdkM7QUFDQSxtREFBbUQsaURBQWE7QUFDaEUsSUFBSSwwREFBYSxDQUFDLGlEQUFhLENBQUMseURBQWlCO0FBQ2pEOztBQUUwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQzFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZm9sZGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbn1cXG4ubWFpbi1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSA3NSU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmJiYmI7XFxufVxcblxcbiN0aXRsZXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjBlZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggN3B4IHJnYmEoMjIsIDIyLCAyMiwgMC40MTEpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5oMXtcXG4gICAgZm9udC1zaXplOiA0NXB4O1xcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuIFxcbn1cXG4jdGl0bGUgaW1ne1xcbiAgICB3aWR0aDogODBweDtcXG59XFxuXFxuXFxuI2ZvbGRlci1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuZGl2IGgyIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBjb2xvcjogIzIyMjIyMjtcXG59XFxuXFxuZGl2IGRpdiBpbWd7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4ubWFpbi1mb2xkZXItY29udGFpbmVye1xcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcblxcbi5mb2xkZXItYWRkLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jZGlzcGxheS1mb3JtLWJ0bntcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcbiNmb3Jte1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNmb3JtLmFjdGl2ZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxN3B4O1xcbiAgICBtYXJnaW46IDE3cHggNXB4O1xcbn1cXG5cXG4uZm9sZGVyLWNvbnRhaW5lcntcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIFxcbn1cXG5cXG4jdG9kby1saXN0LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jdG9kby1saXN0LWNvbnRhaW5lciBmb3Jte1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jdG9kby1saXN0e1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuI3RvZG8tbGlzdCBsaXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcbmxpIGlucHV0e1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2NhY2VjZTtcXG5cXHRib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjA1KSwgaW5zZXQgMHB4IC0xNXB4IDEwcHggLTEycHggcmdiYSgwLDAsMCwwLjA1KTtcXG5cXHRwYWRkaW5nOiA5cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmxpIGlucHV0OmFjdGl2ZSwgbGkgaW5wdXQ6Y2hlY2tlZDphY3RpdmV7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMzIyKSwgaW5zZXQgMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQxMSk7XFxuXFxufVxcblxcbmxpIGlucHV0OmNoZWNrZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG5cXHRib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjA1KSwgaW5zZXQgMHB4IC0xNXB4IDEwcHggLTEycHggcmdiYSgwLDAsMCwwLjA1KSwgaW5zZXQgMTVweCAxMHB4IC0xMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcXG5cXHRjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxubGkgaW5wdXQ6Y2hlY2tlZDo6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6ICdcXFxcMjcxNCc7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDBweDtcXG5cXHRsZWZ0OiAzcHg7XFxuXFx0Y29sb3I6ICNmZmZmZmY7XFxufVxcbiN0b2RvLWxpc3QgbGkgcHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4udG9kby1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLnRvZG8tZGVsZXRle1xcblxcbn1cXG5cXG4ubG93LXByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMjU1LCAxMzgpO1xcbn1cXG5cXG4ubWVkaXVtLXByaW9yaXR5eyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAxNzIsIDYxKTt9XFxuXFxuLmhpZ2gtcHJpb3JpdHl7YmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgNzIsIDcyKTt9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0lBQ1gsdUNBQXVDO0lBQ3ZDLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwrQ0FBK0M7SUFDL0MsVUFBVTtBQUNkO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLFdBQVc7QUFDZjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx3QkFBd0I7Q0FDM0IseUJBQXlCO0NBQ3pCLG1GQUFtRjtDQUNuRixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLHFCQUFxQjtDQUNyQixrQkFBa0I7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0ZBQWtGOztBQUV0Rjs7QUFFQTtJQUNJLHlCQUF5QjtDQUM1Qix5QkFBeUI7Q0FDekIsZ0lBQWdJO0NBQ2hJLGNBQWM7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtDQUNuQixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixTQUFTO0NBQ1QsY0FBYztBQUNmO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixVQUFVO0FBQ2Q7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUEsa0JBQWtCLG1DQUFtQyxDQUFDOztBQUV0RCxlQUFlLGtDQUFrQyxDQUFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qe1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbn1cXG4ubWFpbi1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSA3NSU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmJiYmI7XFxufVxcblxcbiN0aXRsZXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjBlZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggN3B4IHJnYmEoMjIsIDIyLCAyMiwgMC40MTEpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5oMXtcXG4gICAgZm9udC1zaXplOiA0NXB4O1xcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuIFxcbn1cXG4jdGl0bGUgaW1ne1xcbiAgICB3aWR0aDogODBweDtcXG59XFxuXFxuXFxuI2ZvbGRlci1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuZGl2IGgyIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBjb2xvcjogIzIyMjIyMjtcXG59XFxuXFxuZGl2IGRpdiBpbWd7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4ubWFpbi1mb2xkZXItY29udGFpbmVye1xcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcblxcbi5mb2xkZXItYWRkLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jZGlzcGxheS1mb3JtLWJ0bntcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcbiNmb3Jte1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNmb3JtLmFjdGl2ZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxN3B4O1xcbiAgICBtYXJnaW46IDE3cHggNXB4O1xcbn1cXG5cXG4uZm9sZGVyLWNvbnRhaW5lcntcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIFxcbn1cXG5cXG4jdG9kby1saXN0LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jdG9kby1saXN0LWNvbnRhaW5lciBmb3Jte1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jdG9kby1saXN0e1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuI3RvZG8tbGlzdCBsaXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcbmxpIGlucHV0e1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2NhY2VjZTtcXG5cXHRib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjA1KSwgaW5zZXQgMHB4IC0xNXB4IDEwcHggLTEycHggcmdiYSgwLDAsMCwwLjA1KTtcXG5cXHRwYWRkaW5nOiA5cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmxpIGlucHV0OmFjdGl2ZSwgbGkgaW5wdXQ6Y2hlY2tlZDphY3RpdmV7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMzIyKSwgaW5zZXQgMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQxMSk7XFxuXFxufVxcblxcbmxpIGlucHV0OmNoZWNrZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG5cXHRib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjA1KSwgaW5zZXQgMHB4IC0xNXB4IDEwcHggLTEycHggcmdiYSgwLDAsMCwwLjA1KSwgaW5zZXQgMTVweCAxMHB4IC0xMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcXG5cXHRjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxubGkgaW5wdXQ6Y2hlY2tlZDo6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6ICdcXFxcMjcxNCc7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDBweDtcXG5cXHRsZWZ0OiAzcHg7XFxuXFx0Y29sb3I6ICNmZmZmZmY7XFxufVxcbiN0b2RvLWxpc3QgbGkgcHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4udG9kby1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLnRvZG8tZGVsZXRle1xcblxcbn1cXG5cXG4ubG93LXByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMjU1LCAxMzgpO1xcbn1cXG5cXG4ubWVkaXVtLXByaW9yaXR5eyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAxNzIsIDYxKTt9XFxuXFxuLmhpZ2gtcHJpb3JpdHl7YmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgNzIsIDcyKTt9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZm9sZGVyU3RvcmFnZSBmcm9tICcuL2luZGV4LmpzJ1xuaW1wb3J0IHtUb2RvLCBkZWxldGVUb2RvfSBmcm9tICcuL3RvZG8uanMnXG5pbXBvcnQgdHJhc2hDYW5TdmcgZnJvbSAnLi9pbWcvdHJhc2gtY2FuLnN2ZydcblxuY29uc3QgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tbGlzdC1jb250YWluZXJcIik7XG5jb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWRlc2NyaXB0aW9uXCIpXG5jb25zdCBpbnB1dEZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9sZGVyLWlucHV0XCIpO1xuY29uc3QgYWRkRm9sZGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb2xkZXItYnRuXCIpO1xuY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby10aXRsZVwiKTtcbmNvbnN0IHNob3dGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5LWZvcm0tYnRuXCIpXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtXCIpO1xuXG5mb2xkZXJTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZm9sZGVycycpKTtcblxuXG5sZXQgYWRkRm9sZGVyID0gZmFsc2VcbmxldCBpID0gLTFcbmxldCBzZWxlY3RlZEZvbGRlciA9IHVuZGVmaW5lZFxuXG5hZGRGb2xkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGRGb2xkZXIgPSB0cnVlO1xuICAgIGNyZWF0ZUZvbGRlcihpbnB1dEZvbGRlci52YWx1ZSwgaW5wdXREZXNjcmlwdGlvbi52YWx1ZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcnMnLCBKU09OLnN0cmluZ2lmeShmb2xkZXJTdG9yYWdlKSlcbn0pO1xuXG5zaG93Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIikgXG59KVxuXG5cblxuY2xhc3MgRm9sZGVye1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBpZCwgdG9kbyl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnRvZG8gPSB0b2RvO1xuICAgIH1cblxuICAgIGFkZFRvZG8odGl0bGUsIHByaW9yaXR5LCBjb21wbGV0ZSwgaWQpe1xuICAgICAgICBpZihzZWxlY3RlZEZvbGRlciA9PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyh0aXRsZSwgcHJpb3JpdHksIGNvbXBsZXRlKVxuICAgICAgICBmb2xkZXJTdG9yYWdlW2lkXS50b2RvLnB1c2gobmV3VG9kbylcbiAgICAgICAgZGlzcGxheUZvbGRlcihmb2xkZXJTdG9yYWdlW2lkXS50b2RvKTtcbiAgICAgICAgaW5wdXRUaXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb2xkZXJzJywgSlNPTi5zdHJpbmdpZnkoZm9sZGVyU3RvcmFnZSkpXG4gICAgICAgIHJldHVybiBuZXdUb2RvXG4gICAgfVxuICAgIFxuXG59XG5sZXQgbmV3U3RvcmFnZSA9IFtdO1xuZnVuY3Rpb24gY3JlYXRlRm9sZGVyKGZvbGRlclRpdGxlLCBkZXNjcmlwdGlvbiwgdG9kbyl7XG4gICAgY29uc3QgZm9sZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb2xkZXItY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGN1cnJlbnRGb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGZvbGRlckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGVsZXRlSW1nID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgZm9sZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBmb2xkZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBuZXdGb2xkZXIgPSBuZXcgRm9sZGVyKGZvbGRlclRpdGxlLCBkZXNjcmlwdGlvbiwgZ2V0SWQoaSksIHRvZG8pO1xuXG4gICAgY29uc29sZS5sb2cobmV3Rm9sZGVyKVxuICAgIGxldCBkZWxldGVkID0gZmFsc2U7XG4gICAgbmV3U3RvcmFnZS5wdXNoKG5ld0ZvbGRlcilcbiAgICBjb25zb2xlLnRhYmxlKG5ld1N0b3JhZ2UpXG4gICAgaSA9IGdldElkKGkpO1xuICAgIGN1cnJlbnRGb2xkZXIuaWQgPSBpO1xuXG4gICAgZGVsZXRlSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdGb2xkZXIubmFtZSlcbiAgICAgICAgbGV0IG5ld1N0b3JhZ2UgPSBmb2xkZXJTdG9yYWdlLmZpbHRlcigocikgPT4geyByZXR1cm4gci5uYW1lICE9IG5ld0ZvbGRlci5uYW1lfSk7XG4gICAgICAgIGZvbGRlclN0b3JhZ2UgPSBuZXdGb2xkZXI7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb2xkZXJzJywgSlNPTi5zdHJpbmdpZnkobmV3U3RvcmFnZSkpXG4gICAgICAgIGNvbnNvbGUudGFibGUoZm9sZGVyU3RvcmFnZSlcblxuICAgICAgICB9KVxuICAgIFxuICAgIFxuXG4gICAgZGVsZXRlSW1nLnNyYyA9IHRyYXNoQ2FuU3ZnO1xuXG4gICAgZm9sZGVySGVhZGVyLmlkID0gXCJmb2xkZXItaGVhZGVyXCI7XG5cbiAgICBmb2xkZXJUZXh0LnRleHRDb250ZW50ID0gZm9sZGVyVGl0bGU7XG4gICAgZm9sZGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICAgIGZvbGRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50Rm9sZGVyKTtcbiAgICBjdXJyZW50Rm9sZGVyLmFwcGVuZENoaWxkKGZvbGRlckhlYWRlcik7XG4gICAgZm9sZGVySGVhZGVyLmFwcGVuZENoaWxkKGZvbGRlclRleHQpO1xuICAgIGZvbGRlckhlYWRlci5hcHBlbmRDaGlsZChkZWxldGVJbWcpO1xuICAgIGN1cnJlbnRGb2xkZXIuYXBwZW5kQ2hpbGQoZm9sZGVyRGVzY3JpcHRpb24pO1xuICAgIFxuICAgIGlucHV0RGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgIGlucHV0Rm9sZGVyLnZhbHVlID0gXCJcIjtcblxuICAgIGlmKGFkZEZvbGRlcilmb2xkZXJTdG9yYWdlLnB1c2gobmV3Rm9sZGVyKTtcbiAgICBcbiAgICBjdXJyZW50Rm9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKGRlbGV0ZWQpIHJldHVybiBkZWxldGVkID0gZmFsc2U7XG4gICAgICAgIGlmKHNlbGVjdGVkRm9sZGVyID09IG5ld0ZvbGRlcikgcmV0dXJuO1xuICAgICAgICBkaXNwbGF5Rm9sZGVyKGZvbGRlclN0b3JhZ2VbbmV3Rm9sZGVyLmlkXS50b2RvKTtcbiAgICAgICAgc2VsZWN0ZWRGb2xkZXIgPSBuZXdGb2xkZXI7XG4gICAgICAgIHRvZG9MaXN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgIH0pO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcnMnLCBKU09OLnN0cmluZ2lmeShuZXdTdG9yYWdlKSlcblxuICAgIFxufVxuXG5mdW5jdGlvbiBkaXNwbGF5Rm9sZGVyKHRvZG9MaXN0KXtcbiAgICBsZXQgdG9kb0xpc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWxpc3RcIik7XG5cdHRvZG9MaXN0RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnNvbGUubG9nKHRvZG9MaXN0KVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGxpc3RJdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGV0IGxpc3RJdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBsZXQgbGlzdEl0ZW1Db21wbGV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbGV0IGxpc3RJdGVtRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGxldCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgaWYodG9kb0xpc3RbaV0ucHJpb3JpdHkgPT0gXCJMb3dcIil7bGlzdEl0ZW1Db21wbGV0aW9uLmNsYXNzTGlzdC5hZGQoXCJsb3ctcHJpb3JpdHlcIil9XG4gICAgICAgIGVsc2UgaWYodG9kb0xpc3RbaV0ucHJpb3JpdHkgPT0gXCJNZWRpdW1cIil7bGlzdEl0ZW1Db21wbGV0aW9uLmNsYXNzTGlzdC5hZGQoXCJtZWRpdW0tcHJpb3JpdHlcIil9XG4gICAgICAgIGVsc2V7bGlzdEl0ZW1Db21wbGV0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWdoLXByaW9yaXR5XCIpfTtcblxuICAgICAgICBsaXN0SXRlbUNvbXBsZXRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgICBsaXN0SXRlbUNvbXBsZXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZih0b2RvTGlzdFtpXS5jb21wbGV0ZSl7dG9kb0xpc3RbaV0uY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1lbHNle3RvZG9MaXN0W2ldLmNvbXBsZXRlID0gdHJ1ZX07XG5cbiAgICAgICAgICAgIGlmKHRvZG9MaXN0W2ldLmNvbXBsZXRlKXtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbURlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNhZGFkYWRcIlxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcnMnLCBKU09OLnN0cmluZ2lmeShmb2xkZXJTdG9yYWdlKSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkZWxldGVUb2RvKGZvbGRlclN0b3JhZ2Vbc2VsZWN0ZWRGb2xkZXIuaWRdLnRvZG9baV0pO1xuXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcInRvZG8tZGVsZXRlXCIpXG4gICAgICAgIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tY29udGFpbmVyXCIpXG4gICAgICAgIFxuXHRcdGxpc3RJdGVtVGV4dC50ZXh0Q29udGVudCA9IHRvZG9MaXN0W2ldLnRpdGxlO1xuICAgICAgICBsaXN0SXRlbUNvbXBsZXRpb24uY2hlY2tlZCA9IHRvZG9MaXN0W2ldLmNvbXBsZXRlO1xuICAgICAgICBsaXN0SXRlbURlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCJcbiAgICAgICAgaWYodG9kb0xpc3RbaV0uY29tcGxldGUpe1xuICAgICAgICAgICAgbGlzdEl0ZW1EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGxpc3RJdGVtRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNhZGFkYWRcIjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBsaXN0SXRlbURlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBsaXN0SXRlbUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIjtcbiAgICAgICAgfTtcblxuXG5cdFx0dG9kb0xpc3RFbGVtZW50LmFwcGVuZENoaWxkKGxpc3RJdGVtRWxlbWVudCk7XG4gICAgICAgIGxpc3RJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChsaXN0SXRlbUNvbXBsZXRpb24pO1xuICAgICAgICBsaXN0SXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW1UZXh0KTtcbiAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbURlbGV0ZUJ0bik7XG5cblx0fVxufVxuXG5cbmZ1bmN0aW9uIGdldElkKGkpe1xuICAgIGkrKztcbiAgICByZXR1cm4gaTtcbn1cblxuZXhwb3J0IHtjcmVhdGVGb2xkZXIsIHNlbGVjdGVkRm9sZGVyLCBGb2xkZXIsIGRpc3BsYXlGb2xkZXJ9O1xuXG4iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcydcbmltcG9ydCB7Y3JlYXRlRm9sZGVyfSBmcm9tICcuL2ZvbGRlci5qcydcblxubGV0IGZvbGRlclN0b3JhZ2UgPSBbXTtcblxuaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb2xkZXJzJykpIHtcbiAgICBwb3B1bGF0ZVN0b3JhZ2UoKTtcbn0gZWxzZSB7XG4gICAgaW1wb3J0SW5mbygpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcnMnLCBKU09OLnN0cmluZ2lmeShmb2xkZXJTdG9yYWdlKSk7XG4gICAgaW1wb3J0SW5mbygpO1xufVxuXG5mdW5jdGlvbiBpbXBvcnRJbmZvKCkge1xuICAgIGZvbGRlclN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb2xkZXJzJykpO1xuICAgIGNvbnNvbGUubG9nKGZvbGRlclN0b3JhZ2UpXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGZvbGRlclN0b3JhZ2UubGVuZ3RoOyBpKyspe1xuICAgICAgICBjcmVhdGVGb2xkZXIoZm9sZGVyU3RvcmFnZVtpXS5uYW1lLCBmb2xkZXJTdG9yYWdlW2ldLmRlc2NyaXB0aW9uLCBmb2xkZXJTdG9yYWdlW2ldLnRvZG8pXG4gICAgfVxufVxuXG5jb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpXG5leHBvcnQge2ZvbGRlclN0b3JhZ2V9O1xuIiwiaW1wb3J0ICBmb2xkZXJTdG9yYWdlICBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgc2VsZWN0ZWRGb2xkZXIsIEZvbGRlciwgZGlzcGxheUZvbGRlciB9IGZyb20gXCIuL2ZvbGRlci5qc1wiO1xuXG5jb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWJ0blwiKTtcbmNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1wcmlvcml0eVwiKTtcbmNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tdGl0bGVcIik7XG5cblxuYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKGlucHV0VGl0bGUudmFsdWUgPT0gXCJcIikgcmV0dXJuXG4gICAgbmV3IEZvbGRlcigpLmFkZFRvZG8oaW5wdXRUaXRsZS52YWx1ZSwgdG9kb1ByaW9yaXR5LnZhbHVlLCBmYWxzZSwgc2VsZWN0ZWRGb2xkZXIuaWQpO1xufSk7XG5cbmNsYXNzIFRvZG97XG4gICAgY29uc3RydWN0b3IodGl0bGUsIHByaW9yaXR5LCBjb21wbGV0ZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGVcbiAgICB9XG4gICAgXG4gICAgXG59XG5cblxuXG5mdW5jdGlvbiBkZWxldGVUb2RvKHRvZG8pe1xuICAgIGNvbnNvbGUubG9nKHRvZG8pXG4gICAgY29uc3QgaW5kZXggPSBmb2xkZXJTdG9yYWdlW3NlbGVjdGVkRm9sZGVyLmlkXS50b2RvLmluZGV4T2YodG9kbyk7XG4gICAgY29uc29sZS5sb2coaW5kZXgpXG4gICAgaWYoaW5kZXggPiAtMSl7XG4gICAgICAgIGZvbGRlclN0b3JhZ2Vbc2VsZWN0ZWRGb2xkZXIuaWRdLnRvZG8uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZvbGRlcnMnLCBKU09OLnN0cmluZ2lmeShmb2xkZXJTdG9yYWdlKSlcbiAgICBkaXNwbGF5Rm9sZGVyKGZvbGRlclN0b3JhZ2Vbc2VsZWN0ZWRGb2xkZXIuaWRdLnRvZG8pXG59XG5cbmV4cG9ydCB7VG9kbywgZGVsZXRlVG9kb307XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=