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
exports.id = "pages/[id]";
exports.ids = ["pages/[id]"];
exports.modules = {

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "./pages/[id].js":
/*!***********************!*\
  !*** ./pages/[id].js ***!
  \***********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction PingPongPage(props) {\n    const { data  } = props;\n    const response = data.content;\n    //JSX\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: response\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\black\\\\Desktop\\\\PUC-SC\\\\API-Ping-Pong\\\\nextjs\\\\pages\\\\[id].js\",\n        lineNumber: 8,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PingPongPage);\nasync function getServerSideProps(context) {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:3000/api\");\n    const data = await res.data;\n    const url = context.params.id;\n    const paths = data.find((item)=>item.id === url);\n    if (!paths) {\n        return {\n            notFound: true\n        };\n    }\n    return {\n        props: {\n            data: paths\n        }\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUUxQixTQUFTQyxhQUFhQyxLQUFLLEVBQUU7SUFDM0IsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBR0Q7SUFDakIsTUFBTUUsV0FBV0QsS0FBS0UsT0FBTztJQUU3QixLQUFLO0lBQ0wscUJBQU8sOERBQUNDO2tCQUFJRjs7Ozs7O0FBQ2Q7QUFFQSxpRUFBZUgsWUFBWUEsRUFBQztBQUVyQixlQUFlTSxtQkFBbUJDLE9BQU8sRUFBRTtJQUNoRCxNQUFNQyxNQUFNLE1BQU1ULGlEQUFTLENBQUM7SUFDNUIsTUFBTUcsT0FBTyxNQUFNTSxJQUFJTixJQUFJO0lBRTNCLE1BQU1RLE1BQU1ILFFBQVFJLE1BQU0sQ0FBQ0MsRUFBRTtJQUM3QixNQUFNQyxRQUFRWCxLQUFLWSxJQUFJLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0gsRUFBRSxLQUFLRjtJQUU5QyxJQUFJLENBQUNHLE9BQU87UUFDVixPQUFPO1lBQ0xHLFVBQVUsSUFBSTtRQUNoQjtJQUNGLENBQUM7SUFFRCxPQUFPO1FBQ0xmLE9BQU87WUFDTEMsTUFBTVc7UUFDUjtJQUNGO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL1tpZF0uanM/YTMwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5mdW5jdGlvbiBQaW5nUG9uZ1BhZ2UocHJvcHMpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gZGF0YS5jb250ZW50O1xyXG4gIFxyXG4gIC8vSlNYXHJcbiAgcmV0dXJuIDxoMT57cmVzcG9uc2V9PC9oMT47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBpbmdQb25nUGFnZTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGlcIik7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5kYXRhO1xyXG5cclxuICBjb25zdCB1cmwgPSBjb250ZXh0LnBhcmFtcy5pZDtcclxuICBjb25zdCBwYXRocyA9IGRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gdXJsKTtcclxuXHJcbiAgaWYgKCFwYXRocykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGE6IHBhdGhzLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIlBpbmdQb25nUGFnZSIsInByb3BzIiwiZGF0YSIsInJlc3BvbnNlIiwiY29udGVudCIsImgxIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlcyIsImdldCIsInVybCIsInBhcmFtcyIsImlkIiwicGF0aHMiLCJmaW5kIiwiaXRlbSIsIm5vdEZvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[id].js"));
module.exports = __webpack_exports__;

})();