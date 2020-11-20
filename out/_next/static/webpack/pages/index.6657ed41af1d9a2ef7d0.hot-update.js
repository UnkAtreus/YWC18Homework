webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/HomeContainer/index.js":
/*!******************************************!*\
  !*** ./src/pages/HomeContainer/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ "./src/pages/HomeContainer/styled.js");
/* harmony import */ var _apiService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../apiService */ "./src/apiService/index.js");
/* harmony import */ var _components_Searchbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Searchbar */ "./src/components/Searchbar/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Navbar */ "./src/components/Navbar/index.js");
/* harmony import */ var _components_Filterwrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Filterwrapper */ "./src/components/Filterwrapper/index.js");
/* harmony import */ var _components_Shopcard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Shopcard */ "./src/components/Shopcard/index.js");




var _jsxFileName = "C:\\Users\\nom_n\\YWC18Homework\\src\\pages\\HomeContainer\\index.js",
    _this = undefined,
    _s = $RefreshSig$();









var HomeContainer = function HomeContainer() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      posts = _useState[0],
      setPosts = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState2[0],
      setIsloading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      catParam = _useState3[0],
      setCatParam = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      title = _useState4[0],
      setTitle = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      search = _useState5[0],
      setSearch = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("พื้นที่ใกล้ฉัน"),
      province = _useState6[0],
      setProvince = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchPosts();
  }, []);

  var fetchPosts = /*#__PURE__*/function () {
    var _ref = Object(C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var posts_data, parameter;
      return C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsloading(true);
              _context.next = 3;
              return Object(_apiService__WEBPACK_IMPORTED_MODULE_5__["ywc18Controller"])().getywc18List('');

            case 3:
              posts_data = _context.sent;
              console.log(posts_data);
              parameter = {};
              parameter["ทั้งหมด"] = {
                "id": 0
              };
              posts_data.categories.map(function (item, index) {
                parameter[item.name] = {
                  "id": index + 1
                };
              });
              setCatParam(parameter);
              setPosts(posts_data);
              setIsloading(false);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchPosts() {
      return _ref.apply(this, arguments);
    };
  }();

  var setTitles = function setTitles(value) {
    setTitle(value);
  };

  var setSelectProvince = function setSelectProvince(value) {
    setProvince(value);
    setSearch(value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    children: !isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_4__["HomeStyled"], {
      className: "home",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "portlet-nav",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Searchbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
          categories: posts.categories,
          provinces: posts.provinces,
          titles: setTitles,
          selectProvince: setSelectProvince
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "portlet",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "portlet-head",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "portlet-head__title",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "portlet-head__label",
              children: ["\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E04\u0E49\u0E19\u0E2B\u0E32 ", title !== "ทั้งหมด" && title, " \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "portlet-body",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Filterwrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
            data: posts,
            param: catParam,
            titles: setTitles,
            onChangeProvince: province
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "portlet-body__row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Shopcard__WEBPACK_IMPORTED_MODULE_9__["default"], {
              merchant: posts,
              setSearch: search
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, _this);
};

_s(HomeContainer, "wz/Zi+1IRbSi17fRcfsBgtM5Ah8=");

_c = HomeContainer;
/* harmony default export */ __webpack_exports__["default"] = (HomeContainer);

var _c;

$RefreshReg$(_c, "HomeContainer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0hvbWVDb250YWluZXIvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZUNvbnRhaW5lciIsInVzZVN0YXRlIiwicG9zdHMiLCJzZXRQb3N0cyIsImlzTG9hZGluZyIsInNldElzbG9hZGluZyIsImNhdFBhcmFtIiwic2V0Q2F0UGFyYW0iLCJ0aXRsZSIsInNldFRpdGxlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwicHJvdmluY2UiLCJzZXRQcm92aW5jZSIsInVzZUVmZmVjdCIsImZldGNoUG9zdHMiLCJ5d2MxOENvbnRyb2xsZXIiLCJnZXR5d2MxOExpc3QiLCJwb3N0c19kYXRhIiwiY29uc29sZSIsImxvZyIsInBhcmFtZXRlciIsImNhdGVnb3JpZXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJuYW1lIiwic2V0VGl0bGVzIiwidmFsdWUiLCJzZXRTZWxlY3RQcm92aW5jZSIsInByb3ZpbmNlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSxrQkFFQUMsc0RBQVEsQ0FBQyxFQUFELENBRlI7QUFBQSxNQUVuQkMsS0FGbUI7QUFBQSxNQUVaQyxRQUZZOztBQUFBLG1CQUdRRixzREFBUSxDQUFDLEtBQUQsQ0FIaEI7QUFBQSxNQUduQkcsU0FIbUI7QUFBQSxNQUdSQyxZQUhROztBQUFBLG1CQUlNSixzREFBUSxDQUFDLEVBQUQsQ0FKZDtBQUFBLE1BSW5CSyxRQUptQjtBQUFBLE1BSVRDLFdBSlM7O0FBQUEsbUJBS0FOLHNEQUFRLENBQUMsRUFBRCxDQUxSO0FBQUEsTUFLbkJPLEtBTG1CO0FBQUEsTUFLWkMsUUFMWTs7QUFBQSxtQkFNRVIsc0RBQVEsQ0FBQyxFQUFELENBTlY7QUFBQSxNQU1uQlMsTUFObUI7QUFBQSxNQU1Y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QUFBb0MsdUJBQVMsRUFBRVE7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStCRCxDQWxFRDs7R0FBTVYsYTs7S0FBQUEsYTtBQW9FU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjY1N2VkNDFhZjFkOWEyZWY3ZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgSG9tZVN0eWxlZFxyXG59IGZyb20gJy4vc3R5bGVkJ1xyXG5pbXBvcnQgeyB5d2MxOENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vYXBpU2VydmljZVwiO1xyXG5pbXBvcnQgU2VyY2hiYXJDb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoYmFyXCJcclxuaW1wb3J0IE5hdmJhckNvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZiYXJcIlxyXG5pbXBvcnQgRmlsdGVyV3JhcHBlckNvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9GaWx0ZXJ3cmFwcGVyXCJcclxuaW1wb3J0IFNob3BDYXJkQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Nob3BjYXJkXCJcclxuXHJcbmNvbnN0IEhvbWVDb250YWluZXIgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjYXRQYXJhbSwgc2V0Q2F0UGFyYW1dID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtwcm92aW5jZSwgc2V0UHJvdmluY2VdID0gdXNlU3RhdGUoXCLguJ7guLfguYnguJnguJfguLXguYjguYPguIHguKXguYnguInguLHguJlcIilcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoUG9zdHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoUG9zdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRJc2xvYWRpbmcodHJ1ZSlcclxuICAgIGNvbnN0IHBvc3RzX2RhdGEgPSBhd2FpdCB5d2MxOENvbnRyb2xsZXIoKS5nZXR5d2MxOExpc3QoJycpO1xyXG4gICAgY29uc29sZS5sb2cocG9zdHNfZGF0YSk7XHJcbiAgICBsZXQgcGFyYW1ldGVyID0ge31cclxuICAgIHBhcmFtZXRlcltcIuC4l+C4seC5ieC4h+C4q+C4oeC4lFwiXSA9IHtcImlkXCI6IDB9XHJcbiAgICBwb3N0c19kYXRhLmNhdGVnb3JpZXMubWFwKChpdGVtICwgaW5kZXgpID0+IHtcclxuICAgICAgcGFyYW1ldGVyW2l0ZW0ubmFtZV0gPSB7XCJpZFwiOiBpbmRleCsxfVxyXG4gICAgfSlcclxuICAgIHNldENhdFBhcmFtKHBhcmFtZXRlcilcclxuICAgIHNldFBvc3RzKHBvc3RzX2RhdGEpXHJcbiAgICBzZXRJc2xvYWRpbmcoZmFsc2UpXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0VGl0bGVzID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRUaXRsZSh2YWx1ZSlcclxuICB9XHJcbiAgY29uc3Qgc2V0U2VsZWN0UHJvdmluY2UgPSAodmFsdWUpID0+IHtcclxuICAgIHNldFByb3ZpbmNlKHZhbHVlKVxyXG4gICAgc2V0U2VhcmNoKHZhbHVlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgeyFpc0xvYWRpbmcgJiYgIFxyXG4gICAgICA8SG9tZVN0eWxlZCBjbGFzc05hbWU9XCJob21lXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0bGV0LW5hdlwiPlxyXG4gICAgICAgICAgPFNlcmNoYmFyQ29udGFpbmVyIGNhdGVnb3JpZXM9e3Bvc3RzLmNhdGVnb3JpZXN9IHByb3ZpbmNlcz17cG9zdHMucHJvdmluY2VzfSB0aXRsZXM9e3NldFRpdGxlc30gIHNlbGVjdFByb3ZpbmNlPXtzZXRTZWxlY3RQcm92aW5jZX0vPlxyXG4gICAgICAgICAgPE5hdmJhckNvbnRhaW5lci8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0bGV0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRsZXQtaGVhZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRsZXQtaGVhZF9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRsZXQtaGVhZF9fbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgIOC4nOC4peC4geC4suC4o+C4hOC5ieC4meC4q+C4siB7IHRpdGxlICE9PSBcIuC4l+C4seC5ieC4h+C4q+C4oeC4lFwiICYmIHRpdGxlIH0g4LiX4Lix4LmJ4LiH4Lir4Lih4LiUXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0bGV0LWJvZHlcIj5cclxuICAgICAgICAgICAgPEZpbHRlcldyYXBwZXJDb250YWluZXIgZGF0YT17cG9zdHN9IHBhcmFtPXtjYXRQYXJhbX0gdGl0bGVzPXtzZXRUaXRsZXN9IG9uQ2hhbmdlUHJvdmluY2U9e3Byb3ZpbmNlfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGxldC1ib2R5X19yb3dcIj5cclxuICAgICAgICAgICAgICA8U2hvcENhcmRDb250YWluZXIgbWVyY2hhbnQ9e3Bvc3RzfSBzZXRTZWFyY2g9e3NlYXJjaH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICA8L0hvbWVTdHlsZWQ+XHJcbiAgICAgIH1cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVDb250YWluZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==