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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "__barrel_optimize__?names=Nav!=!./node_modules/react-bootstrap/esm/index.js":
/*!***********************************************************************************!*\
  !*** __barrel_optimize__?names=Nav!=!./node_modules/react-bootstrap/esm/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nav: () => (/* reexport safe */ _Nav__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav */ "./node_modules/react-bootstrap/esm/Nav.js");



/***/ }),

/***/ "__barrel_optimize__?names=Nav,NavDropdown,Navbar!=!./node_modules/react-bootstrap/esm/index.js":
/*!******************************************************************************************************!*\
  !*** __barrel_optimize__?names=Nav,NavDropdown,Navbar!=!./node_modules/react-bootstrap/esm/index.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Nav: () => (/* reexport safe */ _Nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   NavDropdown: () => (/* reexport safe */ _NavDropdown__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   Navbar: () => (/* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var _NavDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavDropdown */ \"./node_modules/react-bootstrap/esm/NavDropdown.js\");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1OYXYsTmF2RHJvcGRvd24sTmF2YmFyIT0hLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3NDO0FBQ2dCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0aHViLmNvbS8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvZXNtL2luZGV4LmpzPzBlMDIiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgeyBkZWZhdWx0IGFzIE5hdiB9IGZyb20gXCIuL05hdlwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIE5hdkRyb3Bkb3duIH0gZnJvbSBcIi4vTmF2RHJvcGRvd25cIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBOYXZiYXIgfSBmcm9tIFwiLi9OYXZiYXJcIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Nav,NavDropdown,Navbar!=!./node_modules/react-bootstrap/esm/index.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/index.css */ \"./src/index.css\");\n/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_index_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _src_App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/App.css */ \"./src/App.css\");\n/* harmony import */ var _src_App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_App_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _src_store_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _src_Component_snippets_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/Component/snippets/Header */ \"./src/Component/snippets/Header.tsx\");\n/* harmony import */ var _src_Component_snippets_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/Component/snippets/Footer */ \"./src/Component/snippets/Footer.tsx\");\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _src_store_index__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Component_snippets_Header__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/praveenkumar/Documents/praveen-profile/pages/_app.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/praveenkumar/Documents/praveen-profile/pages/_app.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Component_snippets_Footer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/praveenkumar/Documents/praveen-profile/pages/_app.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/praveenkumar/Documents/praveen-profile/pages/_app.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFFYTtBQUVPO0FBQ3pCO0FBRVc7QUFDTjtBQUNGO0FBRWU7QUFDZTtBQUNBO0FBRXZDLFNBQVNLLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDOUQscUJBQ0UsOERBQUNOLGlEQUFRQTtRQUFDQyxPQUFPQSx3REFBS0E7OzBCQUNwQiw4REFBQ0Msc0VBQU1BOzs7OzswQkFDUCw4REFBQ0c7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzBCQUN4Qiw4REFBQ0gsdUVBQU1BOzs7Ozs7Ozs7OztBQUdiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0aHViLmNvbS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICdhbmltYXRlLmNzcyc7XG5cbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuc2Nzcyc7XG5pbXBvcnQgJy4uL3NyYy9pbmRleC5jc3MnO1xuaW1wb3J0ICcuLi9zcmMvQXBwLmNzcyc7XG5cbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zcmMvc3RvcmUvaW5kZXgnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9zcmMvQ29tcG9uZW50L3NuaXBwZXRzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL3NyYy9Db21wb25lbnQvc25pcHBldHMvRm9vdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3ZpZGVyIiwic3RvcmUiLCJIZWFkZXIiLCJGb290ZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./src/Component/snippets/Footer.tsx":
/*!*******************************************!*\
  !*** ./src/Component/snippets/Footer.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Nav_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Nav!=!react-bootstrap */ \"__barrel_optimize__?names=Nav!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ \"react-bootstrap/Row\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ \"react-bootstrap/Col\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nclass Footer extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"Footer-section-main\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"page-footer font-small\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container text-center text-md-left\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"text-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    md: 4,\n                                    className: \"mx-auto\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            className: \"font-weight-bold text-uppercase mt-3 mb-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"fa fa-lg fa-phone\",\n                                                    \"aria-hidden\": \"true\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                                    lineNumber: 15,\n                                                    columnNumber: 19\n                                                }, this),\n                                                \"\\xa0 \\xa0 Call\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                            lineNumber: 14,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                            className: \"list-unstyled\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                                        href: \"#!\",\n                                                        children: \"Mob : 8940970374\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                                        lineNumber: 20,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                                    lineNumber: 19,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                                        href: \"#!\",\n                                                        children: \"Mob : 8840415576\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                                        lineNumber: 23,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                                    lineNumber: 22,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                            lineNumber: 18,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                    lineNumber: 13,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    md: 4,\n                                    className: \"mx-auto\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            className: \"font-weight-bold text-uppercase mt-3 mb-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"fa fa-lg fa-envelope-o\",\n                                                    \"aria-hidden\": \"true\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                                    lineNumber: 30,\n                                                    columnNumber: 19\n                                                }, this),\n                                                \"\\xa0 \\xa0 Contact\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                            lineNumber: 29,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                            className: \"list-unstyled\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                                    href: \"#!\",\n                                                    children: \"mca.praveen4082@gmail.com\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                                    lineNumber: 35,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    md: 4,\n                                    className: \"mx-auto\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            className: \"font-weight-bold text-uppercase mt-3 mb-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                    className: \"fa fa-lg fa-comments-o\",\n                                                    \"aria-hidden\": \"true\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 19\n                                                }, this),\n                                                \"\\xa0 \\xa0 Follow Me\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                            className: \"list-unstyled\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                                        href: \"https://www.linkedin.com/in/praveen-kumar-76aaba117\",\n                                                        target: \"_blank\",\n                                                        rel: \"noreferrer\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                                className: \"fa fa-linkedin-square\",\n                                                                \"aria-hidden\": \"true\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                                                lineNumber: 52,\n                                                                columnNumber: 23\n                                                            }, this),\n                                                            \"\\xa0 LinkedIn\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                                        lineNumber: 47,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Nav.Link, {\n                                                        href: \"https://github.com/mcapraveen4082\",\n                                                        target: \"_blank\",\n                                                        rel: \"noreferrer\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                                className: \"fa fa-lg fa-github\",\n                                                                \"aria-hidden\": \"true\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                                                lineNumber: 58,\n                                                                columnNumber: 23\n                                                            }, this),\n                                                            \"\\xa0 Github\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                                        lineNumber: 57,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"footer-copyright text-center py-3\",\n                        children: [\n                            \"\\xa9 2018 Copyright: \\xa0\\xa0\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://mdbootstrap.com/education/bootstrap/\",\n                                children: \" mca.praveen4082@gmail.com\"\n                            }, void 0, false, {\n                                fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Footer.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50L3NuaXBwZXRzL0Zvb3Rlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDSDtBQUNBO0FBQ0E7QUFFdEMsTUFBTUssZUFBZUosNENBQVNBO0lBQzVCSyxTQUFTO1FBQ1AscUJBQ0UsOERBQUNDO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUFPRCxXQUFVOztrQ0FDaEIsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDTCw0REFBR0E7NEJBQUNLLFdBQVU7OzhDQUNiLDhEQUFDSiw0REFBR0E7b0NBQUNNLElBQUk7b0NBQUdGLFdBQVU7O3NEQUNwQiw4REFBQ0c7NENBQUdILFdBQVU7OzhEQUNaLDhEQUFDSTtvREFBRUosV0FBVTtvREFBb0JLLGVBQVk7Ozs7OztnREFBVzs7Ozs7OztzREFHMUQsOERBQUNDOzRDQUFHTixXQUFVOzs4REFDWiw4REFBQ087OERBQ0MsNEVBQUNiLDJFQUFHQSxDQUFDYyxJQUFJO3dEQUFDQyxNQUFLO2tFQUFLOzs7Ozs7Ozs7Ozs4REFFdEIsOERBQUNGOzhEQUNDLDRFQUFDYiwyRUFBR0EsQ0FBQ2MsSUFBSTt3REFBQ0MsTUFBSztrRUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBSzFCLDhEQUFDYiw0REFBR0E7b0NBQUNNLElBQUk7b0NBQUdGLFdBQVU7O3NEQUNwQiw4REFBQ0c7NENBQUdILFdBQVU7OzhEQUNaLDhEQUFDSTtvREFBRUosV0FBVTtvREFBeUJLLGVBQVk7Ozs7OztnREFBVzs7Ozs7OztzREFHL0QsOERBQUNDOzRDQUFHTixXQUFVO3NEQUNaLDRFQUFDTzswREFDQyw0RUFBQ2IsMkVBQUdBLENBQUNjLElBQUk7b0RBQUNDLE1BQUs7OERBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBSzFCLDhEQUFDYiw0REFBR0E7b0NBQUNNLElBQUk7b0NBQUdGLFdBQVU7O3NEQUNwQiw4REFBQ0c7NENBQUdILFdBQVU7OzhEQUNaLDhEQUFDSTtvREFBRUosV0FBVTtvREFBeUJLLGVBQVk7Ozs7OztnREFBVzs7Ozs7OztzREFHL0QsOERBQUNDOzRDQUFHTixXQUFVOzs4REFDWiw4REFBQ087OERBQ0MsNEVBQUNiLDJFQUFHQSxDQUFDYyxJQUFJO3dEQUNQQyxNQUFLO3dEQUNMQyxRQUFPO3dEQUNQQyxLQUFJOzswRUFFSiw4REFBQ1A7Z0VBQUVKLFdBQVU7Z0VBQXdCSyxlQUFZOzs7Ozs7NERBQVc7Ozs7Ozs7Ozs7Ozs4REFJaEUsOERBQUNFOzhEQUNDLDRFQUFDYiwyRUFBR0EsQ0FBQ2MsSUFBSTt3REFBQ0MsTUFBSzt3REFBb0NDLFFBQU87d0RBQVNDLEtBQUk7OzBFQUNyRSw4REFBQ1A7Z0VBQUVKLFdBQVU7Z0VBQXFCSyxlQUFZOzs7Ozs7NERBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQVNyRSw4REFBQ047d0JBQUlDLFdBQVU7OzRCQUFvQzswQ0FFakQsOERBQUNZO2dDQUFFSCxNQUFLOzBDQUErQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLakU7QUFDRjtBQUVBLGlFQUFlWixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0aHViLmNvbS8uL3NyYy9Db21wb25lbnQvc25pcHBldHMvRm9vdGVyLnRzeD81MGRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOYXYgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJGb290ZXItc2VjdGlvbi1tYWluXCI+XG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwicGFnZS1mb290ZXIgZm9udC1zbWFsbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHRleHQtY2VudGVyIHRleHQtbWQtbGVmdFwiPlxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q29sIG1kPXs0fSBjbGFzc05hbWU9XCJteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC11cHBlcmNhc2UgbXQtMyBtYi00XCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1sZyBmYS1waG9uZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICZuYnNwOyAmbmJzcDsgQ2FsbFxuICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjIVwiPk1vYiA6IDg5NDA5NzAzNzQ8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjIVwiPk1vYiA6IDg4NDA0MTU1NzY8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgICAgICA8Q29sIG1kPXs0fSBjbGFzc05hbWU9XCJteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC11cHBlcmNhc2UgbXQtMyBtYi00XCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1sZyBmYS1lbnZlbG9wZS1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7ICZuYnNwOyBDb250YWN0XG4gICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiMhXCI+bWNhLnByYXZlZW40MDgyQGdtYWlsLmNvbTwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgICAgIDxDb2wgbWQ9ezR9IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXVwcGVyY2FzZSBtdC0zIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxnIGZhLWNvbW1lbnRzLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7IEZvbGxvdyBNZVxuICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9wcmF2ZWVuLWt1bWFyLTc2YWFiYTExN1wiXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxpbmtlZGluLXNxdWFyZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsgTGlua2VkSW5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21jYXByYXZlZW40MDgyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxnIGZhLWdpdGh1YlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsgR2l0aHViXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb3B5cmlnaHQgdGV4dC1jZW50ZXIgcHktM1wiPlxuICAgICAgICAgICAgwqkgMjAxOCBDb3B5cmlnaHQ6ICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWRib290c3RyYXAuY29tL2VkdWNhdGlvbi9ib290c3RyYXAvXCI+IG1jYS5wcmF2ZWVuNDA4MkBnbWFpbC5jb208L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk5hdiIsIlJvdyIsIkNvbCIsIkZvb3RlciIsInJlbmRlciIsImRpdiIsImNsYXNzTmFtZSIsImZvb3RlciIsIm1kIiwiaDUiLCJpIiwiYXJpYS1oaWRkZW4iLCJ1bCIsImxpIiwiTGluayIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Component/snippets/Footer.tsx\n");

/***/ }),

/***/ "./src/Component/snippets/Header.tsx":
/*!*******************************************!*\
  !*** ./src/Component/snippets/Header.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Nav,NavDropdown,Navbar!=!react-bootstrap */ \"__barrel_optimize__?names=Nav,NavDropdown,Navbar!=!./node_modules/react-bootstrap/esm/index.js\");\n/* eslint-disable no-useless-constructor */ \n\n\nconst Header = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"Head-section-main\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {\n            bg: \"light\",\n            expand: \"lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Brand, {\n                    href: \"/\",\n                    children: \"Praveen@info\"\n                }, void 0, false, {\n                    fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Header.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Toggle, {\n                    \"aria-controls\": \"basic-navbar-nav\"\n                }, void 0, false, {\n                    fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Header.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Collapse, {\n                    id: \"basic-navbar-nav\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                        className: \"mr-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {\n                                href: \"/\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Header.tsx\",\n                                lineNumber: 13,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {\n                                href: \"/githubprofile\",\n                                children: \"Github Profile\"\n                            }, void 0, false, {\n                                fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Header.tsx\",\n                                lineNumber: 14,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {\n                                href: \"/contactus\",\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Header.tsx\",\n                                lineNumber: 15,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavDropdown, {\n                                title: \"Companies\",\n                                id: \"basic-nav-dropdown\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavDropdown.Item, {\n                                        href: \"/company/vyapar\",\n                                        children: \"Simply Vyapar Apps Pvt Ltd\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Header.tsx\",\n                                        lineNumber: 17,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Nav_NavDropdown_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NavDropdown.Item, {\n                                        href: \"/company/licious\",\n                                        children: \"Licious\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Header.tsx\",\n                                        lineNumber: 18,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Header.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Header.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Header.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Header.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/praveenkumar/Documents/praveen-profile/src/Component/snippets/Header.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50L3NuaXBwZXRzL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEseUNBQXlDO0FBQ2Y7QUFDaUM7QUFFM0QsTUFBTUksU0FBUztJQUNiLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDSixpR0FBTUE7WUFBQ0ssSUFBRztZQUFRQyxRQUFPOzs4QkFDeEIsOERBQUNOLGlHQUFNQSxDQUFDTyxLQUFLO29CQUFDQyxNQUFLOzhCQUFJOzs7Ozs7OEJBQ3ZCLDhEQUFDUixpR0FBTUEsQ0FBQ1MsTUFBTTtvQkFBQ0MsaUJBQWM7Ozs7Ozs4QkFDN0IsOERBQUNWLGlHQUFNQSxDQUFDVyxRQUFRO29CQUFDQyxJQUFHOzhCQUNsQiw0RUFBQ2IsOEZBQUdBO3dCQUFDSyxXQUFVOzswQ0FDYiw4REFBQ0wsOEZBQUdBLENBQUNjLElBQUk7Z0NBQUNMLE1BQUs7MENBQUk7Ozs7OzswQ0FDbkIsOERBQUNULDhGQUFHQSxDQUFDYyxJQUFJO2dDQUFDTCxNQUFLOzBDQUFpQjs7Ozs7OzBDQUNoQyw4REFBQ1QsOEZBQUdBLENBQUNjLElBQUk7Z0NBQUNMLE1BQUs7MENBQWE7Ozs7OzswQ0FDNUIsOERBQUNQLHNHQUFXQTtnQ0FBQ2EsT0FBTTtnQ0FBWUYsSUFBRzs7a0RBQ2hDLDhEQUFDWCxzR0FBV0EsQ0FBQ2MsSUFBSTt3Q0FBQ1AsTUFBSztrREFBa0I7Ozs7OztrREFDekMsOERBQUNQLHNHQUFXQSxDQUFDYyxJQUFJO3dDQUFDUCxNQUFLO2tEQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU94RDtBQUVBLGlFQUFlTixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2l0aHViLmNvbS8uL3NyYy9Db21wb25lbnQvc25pcHBldHMvSGVhZGVyLnRzeD80MmE3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZWxlc3MtY29uc3RydWN0b3IgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOYXYsIE5hdmJhciwgTmF2RHJvcGRvd24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJIZWFkLXNlY3Rpb24tbWFpblwiPlxuICAgICAgPE5hdmJhciBiZz1cImxpZ2h0XCIgZXhwYW5kPVwibGdcIj5cbiAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiPlByYXZlZW5AaW5mbzwvTmF2YmFyLkJyYW5kPlxuICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XG4gICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9cIj5Ib21lPC9OYXYuTGluaz5cbiAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL2dpdGh1YnByb2ZpbGVcIj5HaXRodWIgUHJvZmlsZTwvTmF2Lkxpbms+XG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9jb250YWN0dXNcIj5Db250YWN0PC9OYXYuTGluaz5cbiAgICAgICAgICAgIDxOYXZEcm9wZG93biB0aXRsZT1cIkNvbXBhbmllc1wiIGlkPVwiYmFzaWMtbmF2LWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIvY29tcGFueS92eWFwYXJcIj5TaW1wbHkgVnlhcGFyIEFwcHMgUHZ0IEx0ZDwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIi9jb21wYW55L2xpY2lvdXNcIj5MaWNpb3VzPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cbiAgICAgICAgICA8L05hdj5cbiAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICA8L05hdmJhcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmF2IiwiTmF2YmFyIiwiTmF2RHJvcGRvd24iLCJIZWFkZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJiZyIsImV4cGFuZCIsIkJyYW5kIiwiaHJlZiIsIlRvZ2dsZSIsImFyaWEtY29udHJvbHMiLCJDb2xsYXBzZSIsImlkIiwiTGluayIsInRpdGxlIiwiSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Component/snippets/Header.tsx\n");

/***/ }),

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GIT_REPO: () => (/* binding */ GIT_REPO),\n/* harmony export */   GIT_USER: () => (/* binding */ GIT_USER)\n/* harmony export */ });\nconst GIT_USER = \"GIT_USER\";\nconst GIT_REPO = \"GIT_REPO\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sTUFBTUEsV0FBVyxXQUFXO0FBQzVCLE1BQU1DLFdBQVcsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2dpdGh1Yi5jb20vLi9zcmMvY29uc3RhbnRzL2luZGV4LnRzPzYzZmUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEdJVF9VU0VSID0gJ0dJVF9VU0VSJztcbmV4cG9ydCBjb25zdCBHSVRfUkVQTyA9ICdHSVRfUkVQTyc7XG5cbiJdLCJuYW1lcyI6WyJHSVRfVVNFUiIsIkdJVF9SRVBPIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/constants/index.ts\n");

/***/ }),

/***/ "./src/reducers/index.ts":
/*!*******************************!*\
  !*** ./src/reducers/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rootReducer)\n/* harmony export */ });\n/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/index */ \"./src/constants/index.ts\");\n\nconst initialState = {\n    user_bio: {},\n    user_repo: []\n};\nfunction rootReducer(state = initialState, action) {\n    switch(action.type){\n        case _constants_index__WEBPACK_IMPORTED_MODULE_0__.GIT_USER:\n            return {\n                ...state,\n                user_bio: action.payload\n            };\n        case _constants_index__WEBPACK_IMPORTED_MODULE_0__.GIT_REPO:\n            return {\n                ...state,\n                user_repo: action.payload\n            };\n        default:\n            return state;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDd0Q7QUFHeEQsTUFBTUUsZUFBMEI7SUFDOUJDLFVBQVUsQ0FBQztJQUNYQyxXQUFXLEVBQUU7QUFDZjtBQVNlLFNBQVNDLFlBQ3RCQyxRQUFtQkosWUFBWSxFQUMvQkssTUFBa0I7SUFFbEIsT0FBUUEsT0FBT0MsSUFBSTtRQUNqQixLQUFLUCxzREFBUUE7WUFDWCxPQUFPO2dCQUFFLEdBQUdLLEtBQUs7Z0JBQUVILFVBQVVJLE9BQU9FLE9BQU87WUFBQztRQUM5QyxLQUFLVCxzREFBUUE7WUFDWCxPQUFPO2dCQUFFLEdBQUdNLEtBQUs7Z0JBQUVGLFdBQVdHLE9BQU9FLE9BQU87WUFBQztRQUMvQztZQUNFLE9BQU9IO0lBQ1g7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2dpdGh1Yi5jb20vLi9zcmMvcmVkdWNlcnMvaW5kZXgudHM/YzNhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHaXRIdWJSZXBvLCBHaXRIdWJVc2VyQmlvIH0gZnJvbSAnLi4vdHlwZXMvZ2l0aHViJztcbmltcG9ydCB7IEdJVF9SRVBPLCBHSVRfVVNFUiB9IGZyb20gJy4uL2NvbnN0YW50cy9pbmRleCc7XG5pbXBvcnQgdHlwZSB7IEdldFJlcG9BY3Rpb24sIEdldFVzZXJHaXRBY3Rpb24gfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBSb290U3RhdGUgPSB7XG4gIHVzZXJfYmlvOiB7fSBhcyBHaXRIdWJVc2VyQmlvLFxuICB1c2VyX3JlcG86IFtdIGFzIEdpdEh1YlJlcG9bXSxcbn07XG5cbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IHtcbiAgdXNlcl9iaW86IEdpdEh1YlVzZXJCaW87XG4gIHVzZXJfcmVwbzogR2l0SHViUmVwb1tdO1xufTtcblxudHlwZSBSb290QWN0aW9uID0gR2V0VXNlckdpdEFjdGlvbiB8IEdldFJlcG9BY3Rpb247XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvb3RSZWR1Y2VyKFxuICBzdGF0ZTogUm9vdFN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IFJvb3RBY3Rpb24sXG4pOiBSb290U3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBHSVRfVVNFUjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyX2JpbzogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBjYXNlIEdJVF9SRVBPOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXJfcmVwbzogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJHSVRfUkVQTyIsIkdJVF9VU0VSIiwiaW5pdGlhbFN0YXRlIiwidXNlcl9iaW8iLCJ1c2VyX3JlcG8iLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/reducers/index.ts\n");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/index */ \"./src/reducers/index.ts\");\n\n\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnRDtBQUNnQjtBQUVoRSxNQUFNRSxRQUEwQkYsa0RBQVdBLENBQUNDLHVEQUFXQTtBQUV2RCxpRUFBZUMsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dpdGh1Yi5jb20vLi9zcmMvc3RvcmUvaW5kZXgudHM/Y2VlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgdHlwZSBTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCByb290UmVkdWNlciwgeyB0eXBlIFJvb3RTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXJzL2luZGV4JztcblxuY29uc3Qgc3RvcmU6IFN0b3JlPFJvb3RTdGF0ZT4gPSBjcmVhdGVTdG9yZShyb290UmVkdWNlcik7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG4iXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsInN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/index.ts\n");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ (() => {



/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "@restart/hooks/useEventCallback":
/*!**************************************************!*\
  !*** external "@restart/hooks/useEventCallback" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useEventCallback");

/***/ }),

/***/ "@restart/hooks/useForceUpdate":
/*!************************************************!*\
  !*** external "@restart/hooks/useForceUpdate" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useForceUpdate");

/***/ }),

/***/ "@restart/hooks/useMergedRefs":
/*!***********************************************!*\
  !*** external "@restart/hooks/useMergedRefs" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useMergedRefs");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "dom-helpers/camelize":
/*!***************************************!*\
  !*** external "dom-helpers/camelize" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/camelize");

/***/ }),

/***/ "dom-helpers/css":
/*!**********************************!*\
  !*** external "dom-helpers/css" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/css");

/***/ }),

/***/ "dom-helpers/hasClass":
/*!***************************************!*\
  !*** external "dom-helpers/hasClass" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/hasClass");

/***/ }),

/***/ "dom-helpers/querySelectorAll":
/*!***********************************************!*\
  !*** external "dom-helpers/querySelectorAll" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/querySelectorAll");

/***/ }),

/***/ "dom-helpers/transitionEnd":
/*!********************************************!*\
  !*** external "dom-helpers/transitionEnd" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/transitionEnd");

/***/ }),

/***/ "invariant":
/*!****************************!*\
  !*** external "invariant" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("invariant");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-extra/lib/all":
/*!*******************************************!*\
  !*** external "prop-types-extra/lib/all" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types-extra/lib/all");

/***/ }),

/***/ "prop-types-extra/lib/isRequiredForA11y":
/*!*********************************************************!*\
  !*** external "prop-types-extra/lib/isRequiredForA11y" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types-extra/lib/isRequiredForA11y");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Col":
/*!**************************************!*\
  !*** external "react-bootstrap/Col" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ "react-bootstrap/Row":
/*!**************************************!*\
  !*** external "react-bootstrap/Row" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ "react-overlays/Dropdown":
/*!******************************************!*\
  !*** external "react-overlays/Dropdown" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-overlays/Dropdown");

/***/ }),

/***/ "react-overlays/DropdownMenu":
/*!**********************************************!*\
  !*** external "react-overlays/DropdownMenu" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-overlays/DropdownMenu");

/***/ }),

/***/ "react-overlays/DropdownToggle":
/*!************************************************!*\
  !*** external "react-overlays/DropdownToggle" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-overlays/DropdownToggle");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-transition-group/Transition":
/*!****************************************************!*\
  !*** external "react-transition-group/Transition" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group/Transition");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "uncontrollable":
/*!*********************************!*\
  !*** external "uncontrollable" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("uncontrollable");

/***/ }),

/***/ "warning":
/*!**************************!*\
  !*** external "warning" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("warning");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/react-bootstrap","vendor-chunks/@babel","vendor-chunks/bootstrap","vendor-chunks/animate.css"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();