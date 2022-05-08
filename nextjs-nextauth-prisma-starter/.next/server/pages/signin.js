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
exports.id = "pages/signin";
exports.ids = ["pages/signin"];
exports.modules = {

/***/ "./src/components/Atoms/Button.tsx":
/*!*****************************************!*\
  !*** ./src/components/Atoms/Button.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`\n    width: 200px;\n    height: 40px;\n\n    background-color: white;\n    border: 1px solid grey;\n    border-radius: 4px;\n    font-size: 16px;\n`);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BdG9tcy9CdXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUV0QyxpRUFBZUEsaUVBQWEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEta2FrYW9sb2dpbi1tb2JpbGUtYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9BdG9tcy9CdXR0b24udHN4PzAxZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZC5idXR0b25gXG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNDBweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbmA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Atoms/Button.tsx\n");

/***/ }),

/***/ "./src/pages/signin.tsx":
/*!******************************!*\
  !*** ./src/pages/signin.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_style_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/style/components */ \"./src/style/components/index.ts\");\n/* harmony import */ var src_components_Atoms_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/Atoms/Button */ \"./src/components/Atoms/Button.tsx\");\n\n\n\n\nconst SignIn = ({ providers  })=>{\n    const handleLogin = (id)=>async ()=>{\n            await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(id, {\n                callbackUrl: process.env.NEXTAUTH_URL || \"http://localhost:3000/\"\n            });\n        }\n    ;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"flex-center padding-top-200\",\n                __source: {\n                    fileName: \"/Users/ubermensch0608/coding/TestGround/nextjs-nextauth-prisma-starter/src/pages/signin.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_style_components__WEBPACK_IMPORTED_MODULE_2__.SPageTitle, {\n                    __source: {\n                        fileName: \"/Users/ubermensch0608/coding/TestGround/nextjs-nextauth-prisma-starter/src/pages/signin.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    },\n                    __self: undefined,\n                    children: \"로그인 페이지\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"flex-center margin-top-16\",\n                __source: {\n                    fileName: \"/Users/ubermensch0608/coding/TestGround/nextjs-nextauth-prisma-starter/src/pages/signin.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/ubermensch0608/coding/TestGround/nextjs-nextauth-prisma-starter/src/pages/signin.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    },\n                    __self: undefined,\n                    children: providers.map((provider)=>{\n                        console.log(provider);\n                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"margin-top-16\",\n                            __source: {\n                                fileName: \"/Users/ubermensch0608/coding/TestGround/nextjs-nextauth-prisma-starter/src/pages/signin.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 15\n                            },\n                            __self: undefined,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_Atoms_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                onClick: handleLogin(provider.id),\n                                __source: {\n                                    fileName: \"/Users/ubermensch0608/coding/TestGround/nextjs-nextauth-prisma-starter/src/pages/signin.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 17\n                                },\n                                __self: undefined,\n                                children: [\n                                    provider.name,\n                                    \"으로 시작하기\"\n                                ]\n                            })\n                        }, provider.id));\n                    })\n                })\n            })\n        ]\n    }));\n};\nconst getServerSideProps = async ({ req  })=>{\n    const data = await next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getProviders;\n    console.log(data);\n    return {\n        props: {\n            providers: data\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2lnbmluLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBc0Q7QUFHTDtBQUNEO0FBRWhELEtBQUssQ0FBQ0ksTUFBTSxJQUFrQyxDQUFDLENBQUNDLFNBQVMsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUMvRCxLQUFLLENBQUNDLFdBQVcsSUFBSUMsRUFBVSxhQUFpQixDQUFDO1lBQy9DLEtBQUssQ0FBQ04sdURBQU0sQ0FBQ00sRUFBRSxFQUFFLENBQUM7Z0JBQ2hCQyxXQUFXLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxZQUFZLElBQUksQ0FBd0I7WUFDbkUsQ0FBQztRQUNILENBQUM7O0lBRUQsTUFBTTs7aUZBRURDLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUE2Qjs7Ozs7OzsrRkFDekNYLDREQUFVOzs7Ozs7OzhCQUFDLENBQU87OztpRkFFUlUsQ0FBVDtnQkFBQ0MsU0FBUyxFQUFDLENBQTJCOzs7Ozs7OytGQUN2Q0QsQ0FBRzs7Ozs7Ozs4QkFDRFAsU0FBUyxDQUFDUyxHQUFHLEVBQUVDLFFBQWEsR0FBSyxDQUFDO3dCQUNqQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVE7d0JBQ3BCLE1BQU0sc0VBQ0hILENBQUc7NEJBQW1CQyxTQUFTLEVBQUMsQ0FBZTs7Ozs7Ozs0R0FDN0NWLG1FQUFNO2dDQUFDZSxPQUFPLEVBQUVaLFdBQVcsQ0FBQ1MsUUFBUSxDQUFDUixFQUFFOzs7Ozs7OztvQ0FDckNRLFFBQVEsQ0FBQ0ksSUFBSTtvQ0FBQyxDQUNqQjs7OzJCQUhRSixRQUFRLENBQUNSLEVBQUU7b0JBTXpCLENBQUM7Ozs7O0FBS1gsQ0FBQztBQUVNLEtBQUssQ0FBQ2Esa0JBQWtCLFVBQVUsQ0FBQyxDQUFDQyxHQUFHLEVBQWtCLENBQUMsR0FBSyxDQUFDO0lBQ3JFLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ3RCLHlEQUFZO0lBQy9CZ0IsT0FBTyxDQUFDQyxHQUFHLENBQUNLLElBQUk7SUFFaEIsTUFBTSxDQUFDLENBQUM7UUFDTkMsS0FBSyxFQUFFLENBQUM7WUFDTmxCLFNBQVMsRUFBRWlCLElBQUk7UUFDakIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVsQixNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLWtha2FvbG9naW4tbW9iaWxlLWJvaWxlcnBsYXRlLy4vc3JjL3BhZ2VzL3NpZ25pbi50c3g/ZTY0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm92aWRlcnMsIHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IE5leHRQYWdlQ29udGV4dCwgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuXG5pbXBvcnQgeyBTUGFnZVRpdGxlIH0gZnJvbSBcInNyYy9zdHlsZS9jb21wb25lbnRzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJzcmMvY29tcG9uZW50cy9BdG9tcy9CdXR0b25cIjtcblxuY29uc3QgU2lnbkluOiBOZXh0UGFnZTx7IHByb3ZpZGVyczogYW55IH0+ID0gKHsgcHJvdmlkZXJzIH0pID0+IHtcbiAgY29uc3QgaGFuZGxlTG9naW4gPSAoaWQ6IHN0cmluZykgPT4gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHNpZ25JbihpZCwge1xuICAgICAgY2FsbGJhY2tVcmw6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIixcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIHBhZGRpbmctdG9wLTIwMFwiPlxuICAgICAgICA8U1BhZ2VUaXRsZT7roZzqt7jsnbgg7Y6Y7J207KeAPC9TUGFnZVRpdGxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIG1hcmdpbi10b3AtMTZcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7cHJvdmlkZXJzLm1hcCgocHJvdmlkZXI6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvdmlkZXIpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb3ZpZGVyLmlkfSBjbGFzc05hbWU9XCJtYXJnaW4tdG9wLTE2XCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dpbihwcm92aWRlci5pZCl9PlxuICAgICAgICAgICAgICAgICAge3Byb3ZpZGVyLm5hbWV97Jy866GcIOyLnOyeke2VmOq4sFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcmVxIH06IE5leHRQYWdlQ29udGV4dCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UHJvdmlkZXJzO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm92aWRlcnM6IGRhdGEsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25JbjtcbiJdLCJuYW1lcyI6WyJnZXRQcm92aWRlcnMiLCJzaWduSW4iLCJTUGFnZVRpdGxlIiwiQnV0dG9uIiwiU2lnbkluIiwicHJvdmlkZXJzIiwiaGFuZGxlTG9naW4iLCJpZCIsImNhbGxiYWNrVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1VSTCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInByb3ZpZGVyIiwiY29uc29sZSIsImxvZyIsIm9uQ2xpY2siLCJuYW1lIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwiZGF0YSIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/signin.tsx\n");

/***/ }),

/***/ "./src/style/components/SComponentTitle.tsx":
/*!**************************************************!*\
  !*** ./src/style/components/SComponentTitle.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2)`\n    margin-bottom: 0px;\n    margin-left: 8px;\n\n    height: 40px;\n    line-height: 40px;\n    font-weight: bold;\n    font-size: 16px;\n`);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGUvY29tcG9uZW50cy9TQ29tcG9uZW50VGl0bGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUV0QyxpRUFBZUEsNkRBQVMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEta2FrYW9sb2dpbi1tb2JpbGUtYm9pbGVycGxhdGUvLi9zcmMvc3R5bGUvY29tcG9uZW50cy9TQ29tcG9uZW50VGl0bGUudHN4P2ZhMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZC5oMmBcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcblxuICAgIGhlaWdodDogNDBweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/style/components/SComponentTitle.tsx\n");

/***/ }),

/***/ "./src/style/components/SLoginButton.tsx":
/*!***********************************************!*\
  !*** ./src/style/components/SLoginButton.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_1__.Button)`\n    height: 40px;\n    width: 200px;\n`);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGUvY29tcG9uZW50cy9TTG9naW5CdXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNDO0FBQ1Q7QUFFN0IsaUVBQWVBLHdEQUFNLENBQUNDLHdDQUFNLEVBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLWtha2FvbG9naW4tbW9iaWxlLWJvaWxlcnBsYXRlLy4vc3JjL3N0eWxlL2NvbXBvbmVudHMvU0xvZ2luQnV0dG9uLnRzeD8zZDdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChCdXR0b24pPGFueT5gXG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbmA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/style/components/SLoginButton.tsx\n");

/***/ }),

/***/ "./src/style/components/SPageTitle.tsx":
/*!*********************************************!*\
  !*** ./src/style/components/SPageTitle.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1)`\n    margin-left: 8px;\n    margin-bottom: 0px;\n    height: 32px;\n    line-height: 32px;\n    font-weight: bolder;\n    font-size: 20px;\n`);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGUvY29tcG9uZW50cy9TUGFnZVRpdGxlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsaUVBQWVBLDZEQUFTLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLWtha2FvbG9naW4tbW9iaWxlLWJvaWxlcnBsYXRlLy4vc3JjL3N0eWxlL2NvbXBvbmVudHMvU1BhZ2VUaXRsZS50c3g/NTk4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkLmgxYFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbmA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/style/components/SPageTitle.tsx\n");

/***/ }),

/***/ "./src/style/components/index.ts":
/*!***************************************!*\
  !*** ./src/style/components/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SComponentTitle\": () => (/* reexport safe */ _SComponentTitle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"SPageTitle\": () => (/* reexport safe */ _SPageTitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"SLoginButton\": () => (/* reexport safe */ _SLoginButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _SComponentTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SComponentTitle */ \"./src/style/components/SComponentTitle.tsx\");\n/* harmony import */ var _SPageTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SPageTitle */ \"./src/style/components/SPageTitle.tsx\");\n/* harmony import */ var _SLoginButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SLoginButton */ \"./src/style/components/SLoginButton.tsx\");\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGUvY29tcG9uZW50cy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0M7QUFDVjtBQUNJO0FBRVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLWtha2FvbG9naW4tbW9iaWxlLWJvaWxlcnBsYXRlLy4vc3JjL3N0eWxlL2NvbXBvbmVudHMvaW5kZXgudHM/YjhmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU0NvbXBvbmVudFRpdGxlIGZyb20gJy4vU0NvbXBvbmVudFRpdGxlJztcbmltcG9ydCBTUGFnZVRpdGxlIGZyb20gJy4vU1BhZ2VUaXRsZSc7XG5pbXBvcnQgU0xvZ2luQnV0dG9uIGZyb20gJy4vU0xvZ2luQnV0dG9uJztcblxuZXhwb3J0IHsgU0NvbXBvbmVudFRpdGxlLCBTUGFnZVRpdGxlLCBTTG9naW5CdXR0b24gfTtcbiJdLCJuYW1lcyI6WyJTQ29tcG9uZW50VGl0bGUiLCJTUGFnZVRpdGxlIiwiU0xvZ2luQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/style/components/index.ts\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("antd");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/signin.tsx"));
module.exports = __webpack_exports__;

})();