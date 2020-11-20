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

  var setTagColor = function setTagColor(value) {
    switch (value) {
      case "N":
        return "tag-status black";

      case "Y":
        return "tag-status";

      case "N/A":
        return "hidden";

      default:
        return "hidden";
    }
  };

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
              lineNumber: 91,
              columnNumber: 11
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 9
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "shop-card__body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "shop-card__title",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                className: "shop-card__label",
                children: [data.shopNameTH, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_8__["Tag"], (_jsxDEV2 = {
                  className: setTagColor(data.isOpen)
                }, Object(C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "className", "tag-status black"), Object(C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "children", "\u0E40\u0E1B\u0E34\u0E14\u0E2D\u0E22\u0E39\u0E48"), _jsxDEV2), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 15
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "shop-card__info",
              children: [data.subcategoryName, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                className: "slash",
                children: "|"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 13
              }, _this), createPriceLevel(data), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                className: "slash",
                children: "|"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 13
              }, _this), data.addressDistrictName, " ", data.addressProvinceName]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "shop-card__divider"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "shop-card__highlight",
              dangerouslySetInnerHTML: {
                __html: data.highlightText
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "shop-card__recommand",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                className: "recommand-title",
                children: "\u0E40\u0E21\u0E19\u0E39\u0E41\u0E19\u0E30\u0E19\u0E33"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 13
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                className: "recommand-label",
                children: data.recommendedItems.join(" , ")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 13
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "shop-card__facilities",
              children: setFacIcon(data.facilities)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 11
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 9
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2hvcGNhcmQvaW5kZXguanMiXSwibmFtZXMiOlsiU2hvcENhcmRDb250YWluZXIiLCJtYXRjaCIsInByb3BzIiwidXNlU3RhdGUiLCJtZXJjaGFudHMiLCJzZXRNZXJjaGFudHMiLCJ1c2VFZmZlY3QiLCJmZXRjaFBvc3RzIiwibWVyY2hhbnQiLCJwYXJhbSIsImNyZWF0ZVByaWNlTGV2ZWwiLCJkYXRhIiwic2V0UHJpY2VMZXZlbCIsImkiLCJwcmljZUxldmVsIiwicHVzaCIsImNvbG9yIiwic2V0RmFjSWNvbiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInNldFRhZ0NvbG9yIiwidmFsdWUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb3ZlckltYWdlSWQiLCJzaG9wTmFtZVRIIiwiaXNPcGVuIiwic3ViY2F0ZWdvcnlOYW1lIiwiYWRkcmVzc0Rpc3RyaWN0TmFtZSIsImFkZHJlc3NQcm92aW5jZU5hbWUiLCJfX2h0bWwiLCJoaWdobGlnaHRUZXh0IiwicmVjb21tZW5kZWRJdGVtcyIsImpvaW4iLCJmYWNpbGl0aWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLE1BQVpDLEtBQVk7O0FBQUEsa0JBRWZDLHNEQUFRLENBQUMsRUFBRCxDQUZPO0FBQUEsTUFFMUNDLFNBRjBDO0FBQUEsTUFFL0JDLFlBRitCOztBQUlqREMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLGNBQVU7QUFDWCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1BLFVBQVU7QUFBQSxpUkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUND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RTtBQUFLLHlCQUFTLEVBQUMsaUJBQWY7QUFBQSwwQkFBa0NwQixJQUFJLENBQUNxQixnQkFBTCxDQUFzQkMsSUFBdEIsQ0FBMkIsS0FBM0I7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBaEJGLGVBb0JFO0FBQUssdUJBQVMsRUFBQyx1QkFBZjtBQUFBLHdCQUNHaEIsVUFBVSxDQUFDTixJQUFJLENBQUN1QixVQUFOO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxBO0FBQUEsV0FBVWQsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURjO0FBQUEsT0FBZDtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQ0QsQ0E3R0Q7O0dBQU1wQixpQjs7S0FBQUEsaUI7QUErR1NBLGdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ4NGQ3OGI4MWQ1ZGFjOGQxZDg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgU2hvcENhcmRTdHlsZWRcbn0gZnJvbSAnLi9zdHlsZWQnXG5cbmltcG9ydCBDbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgeyBUYWcgLCBUb29sdGlwICB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgRmFCZWVyICwgRmFDYXJTaWRlfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyBSaUZpbGVFZGl0TGluZSAsIFJpRUJpa2UyRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcbmltcG9ydCB7IE1kUGV0cyB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmltcG9ydCByZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuXG5jb25zdCBTaG9wQ2FyZENvbnRhaW5lciA9ICh7IG1hdGNoLCAuLi5wcm9wcyB9KSA9PiB7XG5cbiAgY29uc3QgW21lcmNoYW50cywgc2V0TWVyY2hhbnRzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hQb3N0cygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZmV0Y2hQb3N0cyA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgcGFyYW0gPSBhd2FpdCBwcm9wcy5tZXJjaGFudDtcbiAgICBzZXRNZXJjaGFudHMocGFyYW0ubWVyY2hhbnRzKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcmljZUxldmVsID0gKGRhdGEpID0+IHtcbiAgICBsZXQgc2V0UHJpY2VMZXZlbCA9IFtdXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgZGF0YS5wcmljZUxldmVsOyBpKyspIHtcbiAgICAgIHNldFByaWNlTGV2ZWwucHVzaCg8c3BhbiBrZXk9e2l9IHN0eWxlPXt7Y29sb3I6ICcjMjIyMjIyJ319PuC4vzwvc3Bhbj4pXG4gICAgfVxuICAgIGlmIChkYXRhLnByaWNlTGV2ZWwgPT09IDQpIHtcbiAgICAgIHJldHVybiBzZXRQcmljZUxldmVsXG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGk9NDsgaSA+IDQgLSBkYXRhLnByaWNlTGV2ZWw7IGktLSkge1xuICAgICAgc2V0UHJpY2VMZXZlbC5wdXNoKDxzcGFuIGtleT17aSsxfSBzdHlsZT17e2NvbG9yOiAnI2JiYmJiYid9fT7guL88L3NwYW4+KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNldFByaWNlTGV2ZWxcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZXRGYWNJY29uID0gKGRhdGEpID0+IHtcbiAgICBsZXQgc2V0RmFjSWNvbiA9IFtdXG4gICAgZGF0YS5tYXAoKGl0ZW0gLGluZGV4KSA9PiB7XG4gICAgICBpZiAoaXRlbSA9PT0gXCLguJfguLXguYjguIjguK3guJTguKPguJZcIikge1xuICAgICAgICBzZXRGYWNJY29uLnB1c2goXG4gICAgICAgICAgPFRvb2x0aXAga2V5PXtpbmRleH0gdGl0bGU9e2l0ZW19PjxkaXYgY2xhc3NOYW1lPVwiZmFjaWxpdGllcy1pY29uXCI+XG4gICAgICAgICAgICAgIDxGYUNhclNpZGUvPlxuICAgICAgICAgICAgPC9kaXY+PC9Ub29sdGlwPilcbiAgICAgIH1lbHNlIGlmIChpdGVtID09PSBcIuC4quC4suC4oeC4suC4o+C4luC4meC4s+C4quC4seC4leC4p+C5jOC5gOC4peC4teC5ieC4ouC4h+C5gOC4guC5ieC4suC5hOC4lOC5iVwiKSB7XG4gICAgICAgIHNldEZhY0ljb24ucHVzaCg8VG9vbHRpcCBrZXk9e2luZGV4fSB0aXRsZT17aXRlbX0+PGRpdiBjbGFzc05hbWU9XCJmYWNpbGl0aWVzLWljb25cIj5cbiAgICAgICAgICAgICAgPE1kUGV0cy8+XG4gICAgICAgICAgICA8L2Rpdj48L1Rvb2x0aXA+KVxuICAgICAgfWVsc2UgaWYgKGl0ZW0gPT09IFwi4Lij4Lix4Lia4LiI4Lit4LiH4Lil4LmI4Lin4LiH4Lir4LiZ4LmJ4LiyXCIpIHtcbiAgICAgICAgc2V0RmFjSWNvbi5wdXNoKDxUb29sdGlwIGtleT17aW5kZXh9IHRpdGxlPXtpdGVtfT48ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXRpZXMtaWNvblwiPlxuICAgICAgICAgICAgICA8UmlGaWxlRWRpdExpbmUvPlxuICAgICAgICAgICAgPC9kaXY+PC9Ub29sdGlwPilcbiAgICAgIH1lbHNlIGlmIChpdGVtID09PSBcIuC4iOC4s+C4q+C4meC5iOC4suC4ouC5gOC4hOC4o+C4t+C5iOC4reC4h+C4lOC4t+C5iOC4oeC5gOC5geC4reC4peC4geC4reC4ruC4reC4peC5jFwiKXtcbiAgICAgICAgc2V0RmFjSWNvbi5wdXNoKDxUb29sdGlwIGtleT17aW5kZXh9IHRpdGxlPXtpdGVtfT48ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXRpZXMtaWNvblwiPlxuICAgICAgICAgICAgICA8RmFCZWVyLz5cbiAgICAgICAgICAgIDwvZGl2PjwvVG9vbHRpcD4pXG4gICAgICB9ZWxzZSBpZiAoaXRlbSA9PT0gXCLguJrguKPguLTguIHguLLguKPguIjguLHguJTguKrguYjguIfguK3guLLguKvguLLguKNcIil7XG4gICAgICAgIHNldEZhY0ljb24ucHVzaCg8VG9vbHRpcCBrZXk9e2luZGV4fSB0aXRsZT17aXRlbX0+PGRpdiBjbGFzc05hbWU9XCJmYWNpbGl0aWVzLWljb25cIj5cbiAgICAgICAgICAgICAgPFJpRUJpa2UyRmlsbC8+XG4gICAgICAgICAgICA8L2Rpdj48L1Rvb2x0aXA+KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHNldEZhY0ljb25cbiAgfVxuXG4gIGNvbnN0IHNldFRhZ0NvbG9yID0gKHZhbHVlKSA9PiB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSBcIk5cIjpcbiAgICAgICAgcmV0dXJuIFwidGFnLXN0YXR1cyBibGFja1wiXG4gICAgICBjYXNlIFwiWVwiOlxuICAgICAgICByZXR1cm4gXCJ0YWctc3RhdHVzXCJcbiAgICAgIGNhc2UgXCJOL0FcIjogXG4gICAgICAgIHJldHVybiBcImhpZGRlblwiXG4gICAgXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJoaWRkZW5cIlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNob3BDYXJkU3R5bGVkID5cbiAgICAgIHsgbWVyY2hhbnRzLm1hcCgoZGF0YSwgaW5kZXgpID0+IFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInNob3AtY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9faW1hZ2V3cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2ltYWdlXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ZGF0YS5jb3ZlckltYWdlSWR9KWB9fSA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9fYm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX190aXRsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2xhYmVsXCI+XG4gICAgICAgICAgICAgIHsgZGF0YS5zaG9wTmFtZVRIIH1cbiAgICAgICAgICAgICAgPFRhZyAgY2xhc3NOYW1lPXtzZXRUYWdDb2xvcihkYXRhLmlzT3Blbil9IGNsYXNzTmFtZT1cInRhZy1zdGF0dXMgYmxhY2tcIiA+4LmA4Lib4Li04LiU4Lit4Lii4Li54LmIPC9UYWc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9faW5mb1wiPlxuICAgICAgICAgICAgeyBkYXRhLnN1YmNhdGVnb3J5TmFtZSB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsYXNoXCI+fDwvZGl2PlxuICAgICAgICAgICAge2NyZWF0ZVByaWNlTGV2ZWwoZGF0YSl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsYXNoXCI+fDwvZGl2PlxuICAgICAgICAgICAgeyBkYXRhLmFkZHJlc3NEaXN0cmljdE5hbWUgfSB7IGRhdGEuYWRkcmVzc1Byb3ZpbmNlTmFtZSB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2RpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9faGlnaGxpZ2h0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGRhdGEuaGlnaGxpZ2h0VGV4dH19PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX19yZWNvbW1hbmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb21tYW5kLXRpdGxlXCI+4LmA4Lih4LiZ4Li54LmB4LiZ4Liw4LiZ4LizPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29tbWFuZC1sYWJlbFwiPntkYXRhLnJlY29tbWVuZGVkSXRlbXMuam9pbihcIiAsIFwiKX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9fZmFjaWxpdGllc1wiPlxuICAgICAgICAgICAge3NldEZhY0ljb24oZGF0YS5mYWNpbGl0aWVzKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8L1Nob3BDYXJkU3R5bGVkPlxuICAgIDwvcmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG9wQ2FyZENvbnRhaW5lcjsiXSwic291cmNlUm9vdCI6IiJ9