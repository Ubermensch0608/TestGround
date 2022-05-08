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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/kakao":
/*!********************************************!*\
  !*** external "next-auth/providers/kakao" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/kakao");

/***/ }),

/***/ "./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_kakao__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/kakao */ \"next-auth/providers/kakao\");\n/* harmony import */ var next_auth_providers_kakao__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_kakao__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nconst options = {\n    secret: \"secret\",\n    providers: [\n        next_auth_providers_kakao__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.KAKAO_CLIENT_ID,\n            clientSecret: process.env.KAKAO_CLIENT_SECRET\n        }), \n    ],\n    pages: {\n        signIn: \"/signin\"\n    },\n    callbacks: {\n        signIn: async ({ user , account , profile  })=>{\n            console.log(user, account, profile, \"try signin\");\n            try {\n                const exitedUser = await prisma.user.findUnique({\n                    where: {\n                        email: user.email\n                    }\n                });\n                if (exitedUser) {\n                    console.log(exitedUser, \"get user\");\n                    return Promise.resolve(true);\n                } else {\n                    console.log(\"create###\", user.name, user.email);\n                    const createdUser = await prisma.user.create({\n                        data: {\n                            name: user.name,\n                            email: user.email\n                        }\n                    });\n                    console.log(createdUser, \"created user!\");\n                    return Promise.resolve(true);\n                }\n            } catch (e) {\n                console.log(e);\n                return Promise.reject(true);\n            }\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>next_auth__WEBPACK_IMPORTED_MODULE_1___default()(req, res, options));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZDO0FBRWI7QUFDcUI7QUFFckQsS0FBSyxDQUFDRyxNQUFNLEdBQUcsR0FBRyxDQUFDSCx3REFBWTtBQUUvQixLQUFLLENBQUNJLE9BQU8sR0FBRyxDQUFDO0lBQ2ZDLE1BQU0sRUFBRSxDQUFRO0lBQ2hCQyxTQUFTLEVBQUUsQ0FBQztRQUNWSixnRUFBYSxDQUFDLENBQUM7WUFDYkssUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZUFBZTtZQUNyQ0MsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csbUJBQW1CO1FBQy9DLENBQUM7SUFDSCxDQUFDO0lBQ0RDLEtBQUssRUFBRSxDQUFDO1FBQ05DLE1BQU0sRUFBRSxDQUFTO0lBQ25CLENBQUM7SUFDREMsU0FBUyxFQUFFLENBQUM7UUFDVkQsTUFBTSxTQUFTLENBQUMsQ0FBQ0UsSUFBSSxHQUFFQyxPQUFPLEdBQUVDLE9BQU8sRUFBTSxDQUFDLEdBQUssQ0FBQztZQUNsREMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUksRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUUsQ0FBWTtZQUVoRCxHQUFHLENBQUMsQ0FBQztnQkFDSCxLQUFLLENBQUNHLFVBQVUsR0FBRyxLQUFLLENBQUNsQixNQUFNLENBQUNhLElBQUksQ0FBQ00sVUFBVSxDQUFDLENBQUM7b0JBQy9DQyxLQUFLLEVBQUUsQ0FBQzt3QkFBQ0MsS0FBSyxFQUFFUixJQUFJLENBQUNRLEtBQUs7b0JBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFDRCxFQUFFLEVBQUVILFVBQVUsRUFBRSxDQUFDO29CQUNmRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxFQUFFLENBQVU7b0JBQ2xDLE1BQU0sQ0FBQ0ksT0FBTyxDQUFDQyxPQUFPLENBQUMsSUFBSTtnQkFDN0IsQ0FBQyxNQUFNLENBQUM7b0JBQ05QLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVcsWUFBRUosSUFBSSxDQUFDVyxJQUFJLEVBQUVYLElBQUksQ0FBQ1EsS0FBSztvQkFDOUMsS0FBSyxDQUFDSSxXQUFXLEdBQUcsS0FBSyxDQUFDekIsTUFBTSxDQUFDYSxJQUFJLENBQUNhLE1BQU0sQ0FBQyxDQUFDO3dCQUM1Q0MsSUFBSSxFQUFFLENBQUM7NEJBQ0xILElBQUksRUFBRVgsSUFBSSxDQUFDVyxJQUFJOzRCQUNmSCxLQUFLLEVBQUVSLElBQUksQ0FBQ1EsS0FBSzt3QkFDbkIsQ0FBQztvQkFDSCxDQUFDO29CQUNETCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsV0FBVyxFQUFFLENBQWU7b0JBQ3hDLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDQyxPQUFPLENBQUMsSUFBSTtnQkFDN0IsQ0FBQztZQUNILENBQUMsQ0FBQyxLQUFLLEVBQUVLLENBQUMsRUFBRSxDQUFDO2dCQUNYWixPQUFPLENBQUNDLEdBQUcsQ0FBQ1csQ0FBQztnQkFDYixNQUFNLENBQUNOLE9BQU8sQ0FBQ08sTUFBTSxDQUFDLElBQUk7WUFDNUIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFnQixDQUFBQyxHQUFtQixFQUFFQyxHQUFvQixHQUN2RGpDLGdEQUFRLENBQUNnQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTlCLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEta2FrYW9sb2dpbi1tb2JpbGUtYm9pbGVycGxhdGUvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz81MGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEtha2FvUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMva2FrYW9cIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBzZWNyZXQ6IFwic2VjcmV0XCIsXG4gIHByb3ZpZGVyczogW1xuICAgIEtha2FvUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LktBS0FPX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuS0FLQU9fQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgXSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL3NpZ25pblwiLFxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBzaWduSW46IGFzeW5jICh7IHVzZXIsIGFjY291bnQsIHByb2ZpbGUgfTogYW55KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh1c2VyLCBhY2NvdW50LCBwcm9maWxlLCBcInRyeSBzaWduaW5cIik7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGV4aXRlZFVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICB3aGVyZTogeyBlbWFpbDogdXNlci5lbWFpbCB9LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGV4aXRlZFVzZXIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhleGl0ZWRVc2VyLCBcImdldCB1c2VyXCIpO1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGUjIyNcIiwgdXNlci5uYW1lLCB1c2VyLmVtYWlsKTtcbiAgICAgICAgICBjb25zdCBjcmVhdGVkVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZWRVc2VyLCBcImNyZWF0ZWQgdXNlciFcIik7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHRydWUpO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+XG4gIE5leHRBdXRoKHJlcSwgcmVzLCBvcHRpb25zKTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJOZXh0QXV0aCIsIktha2FvUHJvdmlkZXIiLCJwcmlzbWEiLCJvcHRpb25zIiwic2VjcmV0IiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiS0FLQU9fQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiS0FLQU9fQ0xJRU5UX1NFQ1JFVCIsInBhZ2VzIiwic2lnbkluIiwiY2FsbGJhY2tzIiwidXNlciIsImFjY291bnQiLCJwcm9maWxlIiwiY29uc29sZSIsImxvZyIsImV4aXRlZFVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJlbWFpbCIsIlByb21pc2UiLCJyZXNvbHZlIiwibmFtZSIsImNyZWF0ZWRVc2VyIiwiY3JlYXRlIiwiZGF0YSIsImUiLCJyZWplY3QiLCJyZXEiLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();