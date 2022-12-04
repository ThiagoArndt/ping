"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api";
exports.ids = ["pages/api"];
exports.modules = {

/***/ "./pages/api/index.js":
/*!****************************!*\
  !*** ./pages/api/index.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst data = [\n    {\n        id: \"ping\",\n        message: \"pong\"\n    },\n    {\n        id: \"pong\",\n        message: \"ping\"\n    }\n];\nasync function handler(req, res) {\n    if (req.method == \"GET\") {\n        try {\n            return res.status(200).json(data);\n        } catch (err) {\n            return res.status(500).json({\n                statusCode: 500,\n                message: err.message\n            });\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLE9BQU87SUFDWDtRQUFFQyxJQUFJO1FBQVFDLFNBQVM7SUFBTztJQUM5QjtRQUFFRCxJQUFJO1FBQVFDLFNBQVM7SUFBTztDQUMvQjtBQU1ELGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQy9CLElBQUlELElBQUlFLE1BQU0sSUFBSSxPQUFPO1FBQ3ZCLElBQUk7WUFDRixPQUFPRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDUjtRQUM5QixFQUFFLE9BQU9TLEtBQUs7WUFDWixPQUFPSixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFRSxZQUFZO2dCQUFLUixTQUFTTyxJQUFJUCxPQUFPO1lBQUM7UUFDdEU7SUFDRixDQUFDO0FBQ0g7QUFFQSxpRUFBZUMsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL2FwaS9pbmRleC5qcz9jNWZmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRhdGEgPSBbXHJcbiAgeyBpZDogXCJwaW5nXCIsIG1lc3NhZ2U6IFwicG9uZ1wiIH0sXHJcbiAgeyBpZDogXCJwb25nXCIsIG1lc3NhZ2U6IFwicGluZ1wiIH0sXHJcbl07XHJcblxyXG5cclxuXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09IFwiR0VUXCIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBzdGF0dXNDb2RlOiA1MDAsIG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsIm1lc3NhZ2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsImVyciIsInN0YXR1c0NvZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/index.js"));
module.exports = __webpack_exports__;

})();