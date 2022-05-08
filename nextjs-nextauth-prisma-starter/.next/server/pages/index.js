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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Atoms/Button.tsx":
/*!*****************************************!*\
  !*** ./src/components/Atoms/Button.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`\n    width: 200px;\n    height: 40px;\n\n    background-color: white;\n    border: 1px solid grey;\n    border-radius: 4px;\n    font-size: 16px;\n`);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BdG9tcy9CdXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUV0QyxpRUFBZUEsaUVBQWEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEta2FrYW9sb2dpbi1tb2JpbGUtYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9BdG9tcy9CdXR0b24udHN4PzAxZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZC5idXR0b25gXG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNDBweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbmA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Atoms/Button.tsx\n");

/***/ }),

/***/ "./src/components/Atoms/index.ts":
/*!***************************************!*\
  !*** ./src/components/Atoms/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ \"./src/components/Atoms/Button.tsx\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BdG9tcy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE2QjtBQUVYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS1rYWthb2xvZ2luLW1vYmlsZS1ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL0F0b21zL2luZGV4LnRzPzM1MzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5cbmV4cG9ydCB7IEJ1dHRvbiB9O1xuIl0sIm5hbWVzIjpbIkJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Atoms/index.ts\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_components_Atoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/Atoms */ \"./src/components/Atoms/index.ts\");\n\n\n\nconst Page = ({ user  })=>{\n    const handleLogout = async ()=>{\n        await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)();\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/ubermensch0608/coding/TestGround/nextjs-nextauth-prisma-starter/src/pages/index.tsx\",\n            lineNumber: 17,\n            columnNumber: 9\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                __source: {\n                    fileName: \"/Users/ubermensch0608/coding/TestGround/nextjs-nextauth-prisma-starter/src/pages/index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: [\n                    \"Hello \",\n                    user.name\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/ubermensch0608/coding/TestGround/nextjs-nextauth-prisma-starter/src/pages/index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_components_Atoms__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    onClick: handleLogout,\n                    __source: {\n                        fileName: \"/Users/ubermensch0608/coding/TestGround/nextjs-nextauth-prisma-starter/src/pages/index.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    },\n                    __self: undefined,\n                    children: \"LOG OUT\"\n                })\n            })\n        ]\n    }));\n};\nconst getServerSideProps = async ({ req  })=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    console.log(session);\n    if (session) {\n        return {\n            props: {\n                user: session.user\n            }\n        };\n    } else {\n        return {\n            redirect: {\n                destination: '/signin',\n                permanent: false\n            }\n        };\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBS3FEO0FBRVI7QUFFN0MsS0FBSyxDQUFDRyxJQUFJLElBQWMsQ0FBQyxDQUNyQkMsSUFBSSxFQUNnRCxDQUFDLEdBQUssQ0FBQztJQUMzRCxLQUFLLENBQUNDLFlBQVksYUFBZSxDQUFDO1FBQzlCLEtBQUssQ0FBQ0osd0RBQU87SUFDakIsQ0FBQztJQUNELE1BQU0sdUVBQ0RLLENBQUc7Ozs7Ozs7O2tGQUNDQSxDQUFHOzs7Ozs7OztvQkFBQyxDQUFNO29CQUFDRixJQUFJLENBQUNHLElBQUk7OztpRkFDcEJELENBQUc7Ozs7Ozs7K0ZBQ0NKLHdEQUFNO29CQUFDTSxPQUFPLEVBQUVILFlBQVk7Ozs7Ozs7OEJBQUUsQ0FBTzs7Ozs7QUFJdEQsQ0FBQztBQUVNLEtBQUssQ0FBQ0ksa0JBQWtCLFVBQThCLENBQUMsQ0FBQ0MsR0FBRyxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQ3RFLEtBQUssQ0FBQ0MsT0FBTyxHQUFRLEtBQUssQ0FBQ1gsMkRBQVUsQ0FBQyxDQUFDO1FBQUNVLEdBQUc7SUFBQyxDQUFDO0lBQzdDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTztJQUNuQixFQUFFLEVBQUVBLE9BQU8sRUFBRSxDQUFDO1FBQ1YsTUFBTSxDQUFDLENBQUM7WUFDSkcsS0FBSyxFQUFFLENBQUM7Z0JBQUNWLElBQUksRUFBRU8sT0FBTyxDQUFDUCxJQUFJO1lBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0wsQ0FBQyxNQUFNLENBQUM7UUFDSixNQUFNLENBQUMsQ0FBQztZQUNKVyxRQUFRLEVBQUUsQ0FBQztnQkFDUEMsV0FBVyxFQUFFLENBQVM7Z0JBQ3RCQyxTQUFTLEVBQUUsS0FBSztZQUNwQixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDO0FBRUQsaUVBQWVkLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEta2FrYW9sb2dpbi1tb2JpbGUtYm9pbGVycGxhdGUvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBOZXh0UGFnZSxcbiAgICBHZXRTZXJ2ZXJTaWRlUHJvcHMsXG4gICAgSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlLFxufSBmcm9tICduZXh0JztcbmltcG9ydCB7IGdldFNlc3Npb24sIHNpZ25PdXQgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdzcmMvY29tcG9uZW50cy9BdG9tcyc7XG5cbmNvbnN0IFBhZ2U6IE5leHRQYWdlID0gKHtcbiAgICB1c2VyLFxufTogSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlPHR5cGVvZiBnZXRTZXJ2ZXJTaWRlUHJvcHM+KSA9PiB7XG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBzaWduT3V0KCk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5IZWxsbyB7dXNlci5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TE9HIE9VVDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyByZXEgfSkgPT4ge1xuICAgIGNvbnN0IHNlc3Npb246IGFueSA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XG4gICAgY29uc29sZS5sb2coc2Vzc2lvbik7XG4gICAgaWYgKHNlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb3BzOiB7IHVzZXI6IHNlc3Npb24udXNlciB9LFxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWRpcmVjdDoge1xuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiAnL3NpZ25pbicsXG4gICAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwic2lnbk91dCIsIkJ1dHRvbiIsIlBhZ2UiLCJ1c2VyIiwiaGFuZGxlTG9nb3V0IiwiZGl2IiwibmFtZSIsIm9uQ2xpY2siLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJzZXNzaW9uIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();