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

  var setTagColor = function setTagColor() {
    console.log("tag");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2hvcGNhcmQvaW5kZXguanMiXSwibmFtZXMiOlsiU2hvcENhcmRDb250YWluZXIiLCJtYXRjaCIsInByb3BzIiwidXNlU3RhdGUiLCJtZXJjaGFudHMiLCJzZXRNZXJjaGFudHMiLCJ1c2VFZmZlY3QiLCJmZXRjaFBvc3RzIiwibWVyY2hhbnQiLCJwYXJhbSIsImNyZWF0ZVByaWNlTGV2ZWwiLCJkYXRhIiwic2V0UHJpY2VMZXZlbCIsImkiLCJwcmljZUxldmVsIiwicHVzaCIsImNvbG9yIiwic2V0RmFjSWNvbiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInNldFRhZ0NvbG9yIiwiY29uc29sZSIsImxvZyIsImJhY2tncm91bmRJbWFnZSIsImNvdmVySW1hZ2VJZCIsInNob3BOYW1lVEgiLCJzdWJjYXRlZ29yeU5hbWUiLCJhZGRyZXNzRGlzdHJpY3ROYW1lIiwiYWRkcmVzc1Byb3ZpbmNlTmFtZSIsIl9faHRtbCIsImhpZ2hsaWdodFRleHQiLCJyZWNvbW1lbmRlZEl0ZW1zIiwiam9pbiIsImZhY2lsaXRpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsS0FBc0IsUUFBdEJBLEtBQXNCO0FBQUEsTUFBWkMsS0FBWTs7QUFBQSxrQkFFZkMsc0RBQVEsQ0FBQyxFQUFELENBRk87QUFBQSxNQUUxQ0MsU0FGMEM7QUFBQSxNQUUvQkMsWUFGK0I7O0FBSWpEQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsY0FBVTtBQUNYLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTUEsVUFBVTtBQUFBLGlSQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0NM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LHFCQWhCRixlQW9CRTtBQUFLLHVCQUFTLEVBQUMsdUJBQWY7QUFBQSx3QkFDR2hCLFVBQVUsQ0FBQ04sSUFBSSxDQUFDdUIsVUFBTjtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMQTtBQUFBLFdBQVVkLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWQ7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0NELENBbkdEOztHQUFNcEIsaUI7O0tBQUFBLGlCO0FBcUdTQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYzExYTRjOTNlZmJkZDJmZTUwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFNob3BDYXJkU3R5bGVkXG59IGZyb20gJy4vc3R5bGVkJ1xuXG5pbXBvcnQgQ2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgVGFnICwgVG9vbHRpcCAgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IEZhQmVlciAsIEZhQ2FyU2lkZX0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgUmlGaWxlRWRpdExpbmUgLCBSaUVCaWtlMkZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9yaSc7XG5pbXBvcnQgeyBNZFBldHMgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5pbXBvcnQgcmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cblxuY29uc3QgU2hvcENhcmRDb250YWluZXIgPSAoeyBtYXRjaCwgLi4ucHJvcHMgfSkgPT4ge1xuXG4gIGNvbnN0IFttZXJjaGFudHMsIHNldE1lcmNoYW50c10gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoUG9zdHMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGZldGNoUG9zdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHBhcmFtID0gYXdhaXQgcHJvcHMubWVyY2hhbnQ7XG4gICAgc2V0TWVyY2hhbnRzKHBhcmFtLm1lcmNoYW50cyk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJpY2VMZXZlbCA9IChkYXRhKSA9PiB7XG4gICAgbGV0IHNldFByaWNlTGV2ZWwgPSBbXVxuICAgIGZvciAobGV0IGk9MDsgaSA8IGRhdGEucHJpY2VMZXZlbDsgaSsrKSB7XG4gICAgICBzZXRQcmljZUxldmVsLnB1c2goPHNwYW4ga2V5PXtpfSBzdHlsZT17e2NvbG9yOiAnIzIyMjIyMid9fT7guL88L3NwYW4+KVxuICAgIH1cbiAgICBpZiAoZGF0YS5wcmljZUxldmVsID09PSA0KSB7XG4gICAgICByZXR1cm4gc2V0UHJpY2VMZXZlbFxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpPTQ7IGkgPiA0IC0gZGF0YS5wcmljZUxldmVsOyBpLS0pIHtcbiAgICAgIHNldFByaWNlTGV2ZWwucHVzaCg8c3BhbiBrZXk9e2krMX0gc3R5bGU9e3tjb2xvcjogJyNiYmJiYmInfX0+4Li/PC9zcGFuPilcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXRQcmljZUxldmVsXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2V0RmFjSWNvbiA9IChkYXRhKSA9PiB7XG4gICAgbGV0IHNldEZhY0ljb24gPSBbXVxuICAgIGRhdGEubWFwKChpdGVtICxpbmRleCkgPT4ge1xuICAgICAgaWYgKGl0ZW0gPT09IFwi4LiX4Li14LmI4LiI4Lit4LiU4Lij4LiWXCIpIHtcbiAgICAgICAgc2V0RmFjSWNvbi5wdXNoKFxuICAgICAgICAgIDxUb29sdGlwIGtleT17aW5kZXh9IHRpdGxlPXtpdGVtfT48ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXRpZXMtaWNvblwiPlxuICAgICAgICAgICAgICA8RmFDYXJTaWRlLz5cbiAgICAgICAgICAgIDwvZGl2PjwvVG9vbHRpcD4pXG4gICAgICB9ZWxzZSBpZiAoaXRlbSA9PT0gXCLguKrguLLguKHguLLguKPguJbguJnguLPguKrguLHguJXguKfguYzguYDguKXguLXguYnguKLguIfguYDguILguYnguLLguYTguJTguYlcIikge1xuICAgICAgICBzZXRGYWNJY29uLnB1c2goPFRvb2x0aXAga2V5PXtpbmRleH0gdGl0bGU9e2l0ZW19PjxkaXYgY2xhc3NOYW1lPVwiZmFjaWxpdGllcy1pY29uXCI+XG4gICAgICAgICAgICAgIDxNZFBldHMvPlxuICAgICAgICAgICAgPC9kaXY+PC9Ub29sdGlwPilcbiAgICAgIH1lbHNlIGlmIChpdGVtID09PSBcIuC4o+C4seC4muC4iOC4reC4h+C4peC5iOC4p+C4h+C4q+C4meC5ieC4slwiKSB7XG4gICAgICAgIHNldEZhY0ljb24ucHVzaCg8VG9vbHRpcCBrZXk9e2luZGV4fSB0aXRsZT17aXRlbX0+PGRpdiBjbGFzc05hbWU9XCJmYWNpbGl0aWVzLWljb25cIj5cbiAgICAgICAgICAgICAgPFJpRmlsZUVkaXRMaW5lLz5cbiAgICAgICAgICAgIDwvZGl2PjwvVG9vbHRpcD4pXG4gICAgICB9ZWxzZSBpZiAoaXRlbSA9PT0gXCLguIjguLPguKvguJnguYjguLLguKLguYDguITguKPguLfguYjguK3guIfguJTguLfguYjguKHguYDguYHguK3guKXguIHguK3guK7guK3guKXguYxcIil7XG4gICAgICAgIHNldEZhY0ljb24ucHVzaCg8VG9vbHRpcCBrZXk9e2luZGV4fSB0aXRsZT17aXRlbX0+PGRpdiBjbGFzc05hbWU9XCJmYWNpbGl0aWVzLWljb25cIj5cbiAgICAgICAgICAgICAgPEZhQmVlci8+XG4gICAgICAgICAgICA8L2Rpdj48L1Rvb2x0aXA+KVxuICAgICAgfWVsc2UgaWYgKGl0ZW0gPT09IFwi4Lia4Lij4Li04LiB4Liy4Lij4LiI4Lix4LiU4Liq4LmI4LiH4Lit4Liy4Lir4Liy4LijXCIpe1xuICAgICAgICBzZXRGYWNJY29uLnB1c2goPFRvb2x0aXAga2V5PXtpbmRleH0gdGl0bGU9e2l0ZW19PjxkaXYgY2xhc3NOYW1lPVwiZmFjaWxpdGllcy1pY29uXCI+XG4gICAgICAgICAgICAgIDxSaUVCaWtlMkZpbGwvPlxuICAgICAgICAgICAgPC9kaXY+PC9Ub29sdGlwPilcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBzZXRGYWNJY29uXG4gIH1cblxuICBjb25zdCBzZXRUYWdDb2xvciA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInRhZ1wiKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNob3BDYXJkU3R5bGVkID5cbiAgICAgIHsgbWVyY2hhbnRzLm1hcCgoZGF0YSwgaW5kZXgpID0+IFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInNob3AtY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9faW1hZ2V3cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2ltYWdlXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ZGF0YS5jb3ZlckltYWdlSWR9KWB9fSA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9fYm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX190aXRsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2xhYmVsXCI+XG4gICAgICAgICAgICAgIHsgZGF0YS5zaG9wTmFtZVRIIH1cbiAgICAgICAgICAgICAgPFRhZyAgY2xhc3NOYW1lPXtzZXRUYWdDb2xvcigpfSBjbGFzc05hbWU9XCJ0YWctc3RhdHVzIGJsYWNrXCIgPuC5gOC4m+C4tOC4lOC4reC4ouC4ueC5iDwvVGFnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2luZm9cIj5cbiAgICAgICAgICAgIHsgZGF0YS5zdWJjYXRlZ29yeU5hbWUgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGFzaFwiPnw8L2Rpdj5cbiAgICAgICAgICAgIHtjcmVhdGVQcmljZUxldmVsKGRhdGEpfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGFzaFwiPnw8L2Rpdj5cbiAgICAgICAgICAgIHsgZGF0YS5hZGRyZXNzRGlzdHJpY3ROYW1lIH0geyBkYXRhLmFkZHJlc3NQcm92aW5jZU5hbWUgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX19kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2hpZ2hsaWdodFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBkYXRhLmhpZ2hsaWdodFRleHR9fT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9fcmVjb21tYW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29tbWFuZC10aXRsZVwiPuC5gOC4oeC4meC4ueC5geC4meC4sOC4meC4szwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNvbW1hbmQtbGFiZWxcIj57ZGF0YS5yZWNvbW1lbmRlZEl0ZW1zLmpvaW4oXCIgLCBcIil9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2ZhY2lsaXRpZXNcIj5cbiAgICAgICAgICAgIHtzZXRGYWNJY29uKGRhdGEuZmFjaWxpdGllcyl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPC9TaG9wQ2FyZFN0eWxlZD5cbiAgICA8L3JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcENhcmRDb250YWluZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==