(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/cube_pump.js":
/*!***************************!*\
  !*** ../pkg/cube_pump.js ***!
  \***************************/
/*! exports provided: __wbg_alert_fa833fd0c9168989, init_cube_pump */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_fa833fd0c9168989\", function() { return __wbg_alert_fa833fd0c9168989; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init_cube_pump\", function() { return init_cube_pump; });\n/* harmony import */ var _cube_pump_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cube_pump_bg */ \"../pkg/cube_pump_bg.wasm\");\n/* tslint:disable */\n\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _cube_pump_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_cube_pump_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbg_alert_fa833fd0c9168989(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    alert(varg0);\n}\n/**\n* @returns {void}\n*/\nfunction init_cube_pump() {\n    return _cube_pump_bg__WEBPACK_IMPORTED_MODULE_0__[\"init_cube_pump\"]();\n}\n\n\n\n//# sourceURL=webpack:///../pkg/cube_pump.js?");

/***/ }),

/***/ "../pkg/cube_pump_bg.wasm":
/*!********************************!*\
  !*** ../pkg/cube_pump_bg.wasm ***!
  \********************************/
/*! exports provided: memory, init_cube_pump */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./cube_pump */ \"../pkg/cube_pump.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/cube_pump_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var cube_pump__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cube-pump */ \"../pkg/cube_pump.js\");\n/*\n * CubePump\n *\n * Copyright (C) 2019 SOFe\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as published\n * by the Free Software Foundation, either version 3 of the License, or\n * (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program.  If not, see <https://www.gnu.org/licenses/>.\n */\n\n\n\ncube_pump__WEBPACK_IMPORTED_MODULE_0__[\"init_cube_pump\"]();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);