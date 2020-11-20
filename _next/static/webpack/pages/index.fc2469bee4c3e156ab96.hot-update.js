webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Shopcard/index.js":
/*!******************************************!*\
  !*** ./src/components/Shopcard/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ "./src/components/Shopcard/styled.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");






var _jsxFileName = "C:\\Users\\nom_n\\YWC18Homework\\src\\components\\Shopcard\\index.js",
    _this = undefined,
    _s = $RefreshSig$();










var ShopCardContainer = function ShopCardContainer(_ref) {
  _s();

  var match = _ref.match,
      props = Object(C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["match"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      merchants = _useState[0],
      setMerchants = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    fetchPosts();
  }, []);

  var fetchPosts = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var param;
      return C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return props.merchant;

            case 2:
              param = _context.sent;
              setMerchants(param.merchants);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchPosts() {
      return _ref2.apply(this, arguments);
    };
  }();

  var createPriceLevel = function createPriceLevel(data) {
    var setPriceLevel = [];

    for (var i = 0; i < data.priceLevel; i++) {
      setPriceLevel.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
        style: {
          color: '#222222'
        },
        children: "\u0E3F"
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 26
      }, _this));
    }

    if (data.priceLevel === 4) {
      return setPriceLevel;
    } else {
      for (var _i = 4; _i > 4 - data.priceLevel; _i--) {
        setPriceLevel.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
          style: {
            color: '#bbbbbb'
          },
          children: "\u0E3F"
        }, _i + 1, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 26
        }, _this));
      }

      return setPriceLevel;
    }
  };

  var setFacIcon = function setFacIcon(data) {
    var setFacIcon = [];
    data.map(function (item, index) {
      if (item === "ที่จอดรถ") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaCarSide"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 45
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this));
      } else if (item === "สามารถนำสัตว์เลี้ยงเข้าได้") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_11__["MdPets"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 25
        }, _this));
      } else if (item === "รับจองล่วงหน้า") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_10__["RiFileEditLine"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 25
        }, _this));
      } else if (item === "จำหน่ายเครื่องดื่มเแอลกอฮอล์") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__["FaBeer"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 25
        }, _this));
      } else if (item === "บริการจัดส่งอาหาร") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_10__["RiEBike2Fill"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 25
        }, _this));
      }
    });
    return setFacIcon;
  };

  var setTagColor = function setTagColor() {};

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_6__["ShopCardStyled"], {
      children: merchants.map(function (data, index) {
        var _jsxDEV2;

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "shop-card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "shop-card__imagewrapper",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "shop-card__image",
              style: {
                backgroundImage: "url(".concat(data.coverImageId, ")")
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 11
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 9
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "shop-card__body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "shop-card__title",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                className: "shop-card__label",
                children: [data.shopNameTH, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_8__["Tag"], (_jsxDEV2 = {
                  className: setTagColor()
                }, Object(C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "className", "tag-status black"), Object(C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "children", "\u0E40\u0E1B\u0E34\u0E14\u0E2D\u0E22\u0E39\u0E48"), _jsxDEV2), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 15
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "shop-card__info",
              children: [data.subcategoryName, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                className: "slash",
                children: "|"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 13
              }, _this), createPriceLevel(data), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                className: "slash",
                children: "|"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 13
              }, _this), data.addressDistrictName, " ", data.addressProvinceName]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "shop-card__divider"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "shop-card__highlight",
              dangerouslySetInnerHTML: {
                __html: data.highlightText
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "shop-card__recommand",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                className: "recommand-title",
                children: "\u0E40\u0E21\u0E19\u0E39\u0E41\u0E19\u0E30\u0E19\u0E33"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 13
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                className: "recommand-label",
                children: data.recommendedItems.join(" , ")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 13
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "shop-card__facilities",
              children: setFacIcon(data.facilities)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 11
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 9
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }, _this);
};

_s(ShopCardContainer, "D31lxTUSZ0ovXFJStqCit9pEHHs=");

_c = ShopCardContainer;
/* harmony default export */ __webpack_exports__["default"] = (ShopCardContainer);

var _c;

$RefreshReg$(_c, "ShopCardContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2hvcGNhcmQvaW5kZXguanMiXSwibmFtZXMiOlsiU2hvcENhcmRDb250YWluZXIiLCJtYXRjaCIsInByb3BzIiwidXNlU3RhdGUiLCJtZXJjaGFudHMiLCJzZXRNZXJjaGFudHMiLCJ1c2VFZmZlY3QiLCJmZXRjaFBvc3RzIiwibWVyY2hhbnQiLCJwYXJhbSIsImNyZWF0ZVByaWNlTGV2ZWwiLCJkYXRhIiwic2V0UHJpY2VMZXZlbCIsImkiLCJwcmljZUxldmVsIiwicHVzaCIsImNvbG9yIiwic2V0RmFjSWNvbiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInNldFRhZ0NvbG9yIiwiYmFja2dyb3VuZEltYWdlIiwiY292ZXJJbWFnZUlkIiwic2hvcE5hbWVUSCIsInN1YmNhdGVnb3J5TmFtZSIsImFkZHJlc3NEaXN0cmljdE5hbWUiLCJhZGRyZXNzUHJvdmluY2VOYW1lIiwiX19odG1sIiwiaGlnaGxpZ2h0VGV4dCIsInJlY29tbWVuZGVkSXRlbXMiLCJqb2luIiwiZmFjaWxpdGllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQUF5QjtBQUFBOztBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFaQyxLQUFZOztBQUFBLGtCQUVmQyxzREFBUSxDQUFDLEVBQUQsQ0FGTztBQUFBLE1BRTFDQyxTQUYwQztBQUFBLE1BRS9CQyxZQUYrQjs7QUFJakRDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxjQUFVO0FBQ1gsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNQSxVQUFVO0FBQUEsaVJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDQ0wsS0FBSyxDQUFDTSxRQURQ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LENBQUNOLElBQUksQ0FBQ3FCLFVBQU47QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEE7QUFBQSxXQUFVWixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGM7QUFBQSxPQUFkO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNDRCxDQW5HRDs7R0FBTXBCLGlCOztLQUFBQSxpQjtBQXFHU0EsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmMyNDY5YmVlNGMzZTE1NmFiOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBTaG9wQ2FyZFN0eWxlZFxufSBmcm9tICcuL3N0eWxlZCdcblxuaW1wb3J0IENsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IFRhZyAsIFRvb2x0aXAgIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBGYUJlZXIgLCBGYUNhclNpZGV9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IFJpRmlsZUVkaXRMaW5lICwgUmlFQmlrZTJGaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvcmknO1xuaW1wb3J0IHsgTWRQZXRzIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5cbmNvbnN0IFNob3BDYXJkQ29udGFpbmVyID0gKHsgbWF0Y2gsIC4uLnByb3BzIH0pID0+IHtcblxuICBjb25zdCBbbWVyY2hhbnRzLCBzZXRNZXJjaGFudHNdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFBvc3RzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBmZXRjaFBvc3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCBwYXJhbSA9IGF3YWl0IHByb3BzLm1lcmNoYW50O1xuICAgIHNldE1lcmNoYW50cyhwYXJhbS5tZXJjaGFudHMpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByaWNlTGV2ZWwgPSAoZGF0YSkgPT4ge1xuICAgIGxldCBzZXRQcmljZUxldmVsID0gW11cbiAgICBmb3IgKGxldCBpPTA7IGkgPCBkYXRhLnByaWNlTGV2ZWw7IGkrKykge1xuICAgICAgc2V0UHJpY2VMZXZlbC5wdXNoKDxzcGFuIGtleT17aX0gc3R5bGU9e3tjb2xvcjogJyMyMjIyMjInfX0+4Li/PC9zcGFuPilcbiAgICB9XG4gICAgaWYgKGRhdGEucHJpY2VMZXZlbCA9PT0gNCkge1xuICAgICAgcmV0dXJuIHNldFByaWNlTGV2ZWxcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaT00OyBpID4gNCAtIGRhdGEucHJpY2VMZXZlbDsgaS0tKSB7XG4gICAgICBzZXRQcmljZUxldmVsLnB1c2goPHNwYW4ga2V5PXtpKzF9IHN0eWxlPXt7Y29sb3I6ICcjYmJiYmJiJ319PuC4vzwvc3Bhbj4pXG4gICAgICB9XG4gICAgICByZXR1cm4gc2V0UHJpY2VMZXZlbFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNldEZhY0ljb24gPSAoZGF0YSkgPT4ge1xuICAgIGxldCBzZXRGYWNJY29uID0gW11cbiAgICBkYXRhLm1hcCgoaXRlbSAsaW5kZXgpID0+IHtcbiAgICAgIGlmIChpdGVtID09PSBcIuC4l+C4teC5iOC4iOC4reC4lOC4o+C4llwiKSB7XG4gICAgICAgIHNldEZhY0ljb24ucHVzaChcbiAgICAgICAgICA8VG9vbHRpcCBrZXk9e2luZGV4fSB0aXRsZT17aXRlbX0+PGRpdiBjbGFzc05hbWU9XCJmYWNpbGl0aWVzLWljb25cIj5cbiAgICAgICAgICAgICAgPEZhQ2FyU2lkZS8+XG4gICAgICAgICAgICA8L2Rpdj48L1Rvb2x0aXA+KVxuICAgICAgfWVsc2UgaWYgKGl0ZW0gPT09IFwi4Liq4Liy4Lih4Liy4Lij4LiW4LiZ4Liz4Liq4Lix4LiV4Lin4LmM4LmA4Lil4Li14LmJ4Lii4LiH4LmA4LiC4LmJ4Liy4LmE4LiU4LmJXCIpIHtcbiAgICAgICAgc2V0RmFjSWNvbi5wdXNoKDxUb29sdGlwIGtleT17aW5kZXh9IHRpdGxlPXtpdGVtfT48ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXRpZXMtaWNvblwiPlxuICAgICAgICAgICAgICA8TWRQZXRzLz5cbiAgICAgICAgICAgIDwvZGl2PjwvVG9vbHRpcD4pXG4gICAgICB9ZWxzZSBpZiAoaXRlbSA9PT0gXCLguKPguLHguJrguIjguK3guIfguKXguYjguKfguIfguKvguJnguYnguLJcIikge1xuICAgICAgICBzZXRGYWNJY29uLnB1c2goPFRvb2x0aXAga2V5PXtpbmRleH0gdGl0bGU9e2l0ZW19PjxkaXYgY2xhc3NOYW1lPVwiZmFjaWxpdGllcy1pY29uXCI+XG4gICAgICAgICAgICAgIDxSaUZpbGVFZGl0TGluZS8+XG4gICAgICAgICAgICA8L2Rpdj48L1Rvb2x0aXA+KVxuICAgICAgfWVsc2UgaWYgKGl0ZW0gPT09IFwi4LiI4Liz4Lir4LiZ4LmI4Liy4Lii4LmA4LiE4Lij4Li34LmI4Lit4LiH4LiU4Li34LmI4Lih4LmA4LmB4Lit4Lil4LiB4Lit4Liu4Lit4Lil4LmMXCIpe1xuICAgICAgICBzZXRGYWNJY29uLnB1c2goPFRvb2x0aXAga2V5PXtpbmRleH0gdGl0bGU9e2l0ZW19PjxkaXYgY2xhc3NOYW1lPVwiZmFjaWxpdGllcy1pY29uXCI+XG4gICAgICAgICAgICAgIDxGYUJlZXIvPlxuICAgICAgICAgICAgPC9kaXY+PC9Ub29sdGlwPilcbiAgICAgIH1lbHNlIGlmIChpdGVtID09PSBcIuC4muC4o+C4tOC4geC4suC4o+C4iOC4seC4lOC4quC5iOC4h+C4reC4suC4q+C4suC4o1wiKXtcbiAgICAgICAgc2V0RmFjSWNvbi5wdXNoKDxUb29sdGlwIGtleT17aW5kZXh9IHRpdGxlPXtpdGVtfT48ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXRpZXMtaWNvblwiPlxuICAgICAgICAgICAgICA8UmlFQmlrZTJGaWxsLz5cbiAgICAgICAgICAgIDwvZGl2PjwvVG9vbHRpcD4pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gc2V0RmFjSWNvblxuICB9XG5cbiAgY29uc3Qgc2V0VGFnQ29sb3IgPSAoKSA9PiB7XG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNob3BDYXJkU3R5bGVkID5cbiAgICAgIHsgbWVyY2hhbnRzLm1hcCgoZGF0YSwgaW5kZXgpID0+IFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInNob3AtY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9faW1hZ2V3cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2ltYWdlXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ZGF0YS5jb3ZlckltYWdlSWR9KWB9fSA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9fYm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX190aXRsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2xhYmVsXCI+XG4gICAgICAgICAgICAgIHsgZGF0YS5zaG9wTmFtZVRIIH1cbiAgICAgICAgICAgICAgPFRhZyAgY2xhc3NOYW1lPXtzZXRUYWdDb2xvcigpfSBjbGFzc05hbWU9XCJ0YWctc3RhdHVzIGJsYWNrXCIgPuC5gOC4m+C4tOC4lOC4reC4ouC4ueC5iDwvVGFnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2luZm9cIj5cbiAgICAgICAgICAgIHsgZGF0YS5zdWJjYXRlZ29yeU5hbWUgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGFzaFwiPnw8L2Rpdj5cbiAgICAgICAgICAgIHtjcmVhdGVQcmljZUxldmVsKGRhdGEpfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGFzaFwiPnw8L2Rpdj5cbiAgICAgICAgICAgIHsgZGF0YS5hZGRyZXNzRGlzdHJpY3ROYW1lIH0geyBkYXRhLmFkZHJlc3NQcm92aW5jZU5hbWUgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX19kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2hpZ2hsaWdodFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBkYXRhLmhpZ2hsaWdodFRleHR9fT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9fcmVjb21tYW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29tbWFuZC10aXRsZVwiPuC5gOC4oeC4meC4ueC5geC4meC4sOC4meC4szwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNvbW1hbmQtbGFiZWxcIj57ZGF0YS5yZWNvbW1lbmRlZEl0ZW1zLmpvaW4oXCIgLCBcIil9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2ZhY2lsaXRpZXNcIj5cbiAgICAgICAgICAgIHtzZXRGYWNJY29uKGRhdGEuZmFjaWxpdGllcyl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPC9TaG9wQ2FyZFN0eWxlZD5cbiAgICA8L3JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcENhcmRDb250YWluZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==