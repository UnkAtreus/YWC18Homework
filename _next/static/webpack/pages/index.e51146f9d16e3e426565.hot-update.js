webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Shopcard/index.js":
/*!******************************************!*\
  !*** ./src/components/Shopcard/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled */ "./src/components/Shopcard/styled.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");





var _jsxFileName = "C:\\Users\\nom_n\\YWC18Homework\\src\\components\\Shopcard\\index.js",
    _this = undefined,
    _s = $RefreshSig$();










var ShopCardContainer = function ShopCardContainer(_ref) {
  _s();

  var match = _ref.match,
      props = Object(C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["match"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      merchants = _useState[0],
      setMerchants = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    fetchPosts();
  }, []);

  var fetchPosts = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var param;
      return C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
      setPriceLevel.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
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
        setPriceLevel.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
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
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaCarSide"], {}, void 0, false, {
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
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_10__["MdPets"], {}, void 0, false, {
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
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_9__["RiFileEditLine"], {}, void 0, false, {
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
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaBeer"], {}, void 0, false, {
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
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_9__["RiEBike2Fill"], {}, void 0, false, {
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

  var setTagName = function setTagName(value) {
    switch (value) {
      case "N":
        return "ปิดแล้ว";

      case "Y":
        return "เปิดแล้ว";

      case "N/A":
        return "";

      default:
        return "";
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_5__["ShopCardStyled"], {
      children: merchants.map(function (data, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "shop-card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "shop-card__imagewrapper",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "shop-card__image",
              style: {
                backgroundImage: "url(".concat(data.coverImageId, ")")
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 11
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 9
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "shop-card__body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "shop-card__title",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "shop-card__label",
                children: [data.shopNameTH, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_7__["Tag"], {
                  className: setTagColor(data.isOpen),
                  children: [" ", setTagName(data.isOpen), " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 7
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "shop-card__info",
              children: [data.subcategoryName, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "slash",
                children: "|"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 13
              }, _this), createPriceLevel(data), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "slash",
                children: "|"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 13
              }, _this), data.addressDistrictName, " ", data.addressProvinceName]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "shop-card__divider"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "shop-card__highlight",
              dangerouslySetInnerHTML: {
                __html: data.highlightText
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "shop-card__recommand",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "recommand-title",
                children: "\u0E40\u0E21\u0E19\u0E39\u0E41\u0E19\u0E30\u0E19\u0E33"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 13
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "recommand-label",
                children: data.recommendedItems.join(" , ")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 13
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "shop-card__facilities",
              children: setFacIcon(data.facilities)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 11
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 9
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 102,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2hvcGNhcmQvaW5kZXguanMiXSwibmFtZXMiOlsiU2hvcENhcmRDb250YWluZXIiLCJtYXRjaCIsInByb3BzIiwidXNlU3RhdGUiLCJtZXJjaGFudHMiLCJzZXRNZXJjaGFudHMiLCJ1c2VFZmZlY3QiLCJmZXRjaFBvc3RzIiwibWVyY2hhbnQiLCJwYXJhbSIsImNyZWF0ZVByaWNlTGV2ZWwiLCJkYXRhIiwic2V0UHJpY2VMZXZlbCIsImkiLCJwcmljZUxldmVsIiwicHVzaCIsImNvbG9yIiwic2V0RmFjSWNvbiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInNldFRhZ0NvbG9yIiwidmFsdWUiLCJzZXRUYWdOYW1lIiwiYmFja2dyb3VuZEltYWdlIiwiY292ZXJJbWFnZUlkIiwic2hvcE5hbWVUSCIsImlzT3BlbiIsInN1YmNhdGVnb3J5TmFtZSIsImFkZHJlc3NEaXN0cmljdE5hbWUiLCJhZGRyZXNzUHJvdmluY2VOYW1lIiwiX19odG1sIiwiaGlnaGxpZ2h0VGV4dCIsInJlY29tbWVuZGVkSXRlbXMiLCJqb2luIiwiZmFjaWxpdGllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsS0FBc0IsUUFBdEJBLEtBQXNCO0FBQUEsTUFBWkMsS0FBWTs7QUFBQSxrQkFFZkMsc0RBQVEsQ0FBQyxFQUFELENBRk87QUFBQSxNQUUxQ0MsU0FGMEM7QUFBQSxNQUUvQkMsWUFGK0I7O0FBSWpEQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsY0FBVTtBQUNYLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTUEsVUFBVTtBQUFBLGlSQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZEYsZUFlRTtBQUFLLHVCQUFTLEVBQUMsc0JBQWY7QUFBc0MscUNBQXVCLEVBQUU7QUFBQ0Msc0JBQU0sRUFBRXBCLElBQUksQ0FBQ3FCO0FBQWQ7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmRixlQWdCRTtBQUFLLHVCQUFTLEVBQUMsc0JBQWY7QUFBQSxzQ0FDRTtBQUFLLHlCQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFLLHlCQUFTLEVBQUMsaUJBQWY7QUFBQSwwQkFBa0NyQixJQUFJLENBQUNzQixnQkFBTCxDQUFzQkMsSUFBdEIsQ0FBMkIsS0FBM0I7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBaEJGLGVBb0JFO0FBQUssdUJBQVMsRUFBQyx1QkFBZjtBQUFBLHdCQUNHakIsVUFBVSxDQUFDTixJQUFJLENBQUN3QixVQUFOO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxBO0FBQUEsV0FBVWYsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURjO0FBQUEsT0FBZDtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQ0QsQ0E3SEQ7O0dBQU1wQixpQjs7S0FBQUEsaUI7QUErSFNBLGdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU1MTE0NmY5ZDE2ZTNlNDI2NTY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgU2hvcENhcmRTdHlsZWRcbn0gZnJvbSAnLi9zdHlsZWQnXG5cbmltcG9ydCBDbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgeyBUYWcgLCBUb29sdGlwICB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgRmFCZWVyICwgRmFDYXJTaWRlfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyBSaUZpbGVFZGl0TGluZSAsIFJpRUJpa2UyRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcbmltcG9ydCB7IE1kUGV0cyB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmltcG9ydCByZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuXG5jb25zdCBTaG9wQ2FyZENvbnRhaW5lciA9ICh7IG1hdGNoLCAuLi5wcm9wcyB9KSA9PiB7XG5cbiAgY29uc3QgW21lcmNoYW50cywgc2V0TWVyY2hhbnRzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hQb3N0cygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZmV0Y2hQb3N0cyA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgcGFyYW0gPSBhd2FpdCBwcm9wcy5tZXJjaGFudDtcbiAgICBzZXRNZXJjaGFudHMocGFyYW0ubWVyY2hhbnRzKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcmljZUxldmVsID0gKGRhdGEpID0+IHtcbiAgICBsZXQgc2V0UHJpY2VMZXZlbCA9IFtdXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgZGF0YS5wcmljZUxldmVsOyBpKyspIHtcbiAgICAgIHNldFByaWNlTGV2ZWwucHVzaCg8c3BhbiBrZXk9e2l9IHN0eWxlPXt7Y29sb3I6ICcjMjIyMjIyJ319PuC4vzwvc3Bhbj4pXG4gICAgfVxuICAgIGlmIChkYXRhLnByaWNlTGV2ZWwgPT09IDQpIHtcbiAgICAgIHJldHVybiBzZXRQcmljZUxldmVsXG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGk9NDsgaSA+IDQgLSBkYXRhLnByaWNlTGV2ZWw7IGktLSkge1xuICAgICAgc2V0UHJpY2VMZXZlbC5wdXNoKDxzcGFuIGtleT17aSsxfSBzdHlsZT17e2NvbG9yOiAnI2JiYmJiYid9fT7guL88L3NwYW4+KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNldFByaWNlTGV2ZWxcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZXRGYWNJY29uID0gKGRhdGEpID0+IHtcbiAgICBsZXQgc2V0RmFjSWNvbiA9IFtdXG4gICAgZGF0YS5tYXAoKGl0ZW0gLGluZGV4KSA9PiB7XG4gICAgICBpZiAoaXRlbSA9PT0gXCLguJfguLXguYjguIjguK3guJTguKPguJZcIikge1xuICAgICAgICBzZXRGYWNJY29uLnB1c2goXG4gICAgICAgICAgPFRvb2x0aXAga2V5PXtpbmRleH0gdGl0bGU9e2l0ZW19PjxkaXYgY2xhc3NOYW1lPVwiZmFjaWxpdGllcy1pY29uXCI+XG4gICAgICAgICAgICAgIDxGYUNhclNpZGUvPlxuICAgICAgICAgICAgPC9kaXY+PC9Ub29sdGlwPilcbiAgICAgIH1lbHNlIGlmIChpdGVtID09PSBcIuC4quC4suC4oeC4suC4o+C4luC4meC4s+C4quC4seC4leC4p+C5jOC5gOC4peC4teC5ieC4ouC4h+C5gOC4guC5ieC4suC5hOC4lOC5iVwiKSB7XG4gICAgICAgIHNldEZhY0ljb24ucHVzaCg8VG9vbHRpcCBrZXk9e2luZGV4fSB0aXRsZT17aXRlbX0+PGRpdiBjbGFzc05hbWU9XCJmYWNpbGl0aWVzLWljb25cIj5cbiAgICAgICAgICAgICAgPE1kUGV0cy8+XG4gICAgICAgICAgICA8L2Rpdj48L1Rvb2x0aXA+KVxuICAgICAgfWVsc2UgaWYgKGl0ZW0gPT09IFwi4Lij4Lix4Lia4LiI4Lit4LiH4Lil4LmI4Lin4LiH4Lir4LiZ4LmJ4LiyXCIpIHtcbiAgICAgICAgc2V0RmFjSWNvbi5wdXNoKDxUb29sdGlwIGtleT17aW5kZXh9IHRpdGxlPXtpdGVtfT48ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXRpZXMtaWNvblwiPlxuICAgICAgICAgICAgICA8UmlGaWxlRWRpdExpbmUvPlxuICAgICAgICAgICAgPC9kaXY+PC9Ub29sdGlwPilcbiAgICAgIH1lbHNlIGlmIChpdGVtID09PSBcIuC4iOC4s+C4q+C4meC5iOC4suC4ouC5gOC4hOC4o+C4t+C5iOC4reC4h+C4lOC4t+C5iOC4oeC5gOC5geC4reC4peC4geC4reC4ruC4reC4peC5jFwiKXtcbiAgICAgICAgc2V0RmFjSWNvbi5wdXNoKDxUb29sdGlwIGtleT17aW5kZXh9IHRpdGxlPXtpdGVtfT48ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXRpZXMtaWNvblwiPlxuICAgICAgICAgICAgICA8RmFCZWVyLz5cbiAgICAgICAgICAgIDwvZGl2PjwvVG9vbHRpcD4pXG4gICAgICB9ZWxzZSBpZiAoaXRlbSA9PT0gXCLguJrguKPguLTguIHguLLguKPguIjguLHguJTguKrguYjguIfguK3guLLguKvguLLguKNcIil7XG4gICAgICAgIHNldEZhY0ljb24ucHVzaCg8VG9vbHRpcCBrZXk9e2luZGV4fSB0aXRsZT17aXRlbX0+PGRpdiBjbGFzc05hbWU9XCJmYWNpbGl0aWVzLWljb25cIj5cbiAgICAgICAgICAgICAgPFJpRUJpa2UyRmlsbC8+XG4gICAgICAgICAgICA8L2Rpdj48L1Rvb2x0aXA+KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHNldEZhY0ljb25cbiAgfVxuXG4gIGNvbnN0IHNldFRhZ0NvbG9yID0gKHZhbHVlKSA9PiB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSBcIk5cIjpcbiAgICAgICAgcmV0dXJuIFwidGFnLXN0YXR1cyBibGFja1wiXG4gICAgICBjYXNlIFwiWVwiOlxuICAgICAgICByZXR1cm4gXCJ0YWctc3RhdHVzXCJcbiAgICAgIGNhc2UgXCJOL0FcIjogXG4gICAgICAgIHJldHVybiBcImhpZGRlblwiXG4gICAgXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJoaWRkZW5cIlxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNldFRhZ05hbWUgPSAodmFsdWUpID0+IHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlIFwiTlwiOlxuICAgICAgICByZXR1cm4gXCLguJvguLTguJTguYHguKXguYnguKdcIlxuICAgICAgY2FzZSBcIllcIjpcbiAgICAgICAgcmV0dXJuIFwi4LmA4Lib4Li04LiU4LmB4Lil4LmJ4LinXCJcbiAgICAgIGNhc2UgXCJOL0FcIjogXG4gICAgICAgIHJldHVybiBcIlwiXG4gICAgXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJcIlxuICAgIH1cbiAgfVxuXG5cblxuICByZXR1cm4gKFxuICAgIDxyZWFjdC5GcmFnbWVudD5cbiAgICAgIDxTaG9wQ2FyZFN0eWxlZCA+XG4gICAgICB7IG1lcmNoYW50cy5tYXAoKGRhdGEsIGluZGV4KSA9PiBcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJzaG9wLWNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2ltYWdld3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX19pbWFnZVwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2RhdGEuY292ZXJJbWFnZUlkfSlgfX0gPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2JvZHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9fdGl0bGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX19sYWJlbFwiPlxuICAgICAgICAgICAgICB7IGRhdGEuc2hvcE5hbWVUSCB9XG4gICAgICA8VGFnICBjbGFzc05hbWU9e3NldFRhZ0NvbG9yKGRhdGEuaXNPcGVuKX0gPiB7c2V0VGFnTmFtZShkYXRhLmlzT3Blbil9IDwvVGFnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2luZm9cIj5cbiAgICAgICAgICAgIHsgZGF0YS5zdWJjYXRlZ29yeU5hbWUgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGFzaFwiPnw8L2Rpdj5cbiAgICAgICAgICAgIHtjcmVhdGVQcmljZUxldmVsKGRhdGEpfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGFzaFwiPnw8L2Rpdj5cbiAgICAgICAgICAgIHsgZGF0YS5hZGRyZXNzRGlzdHJpY3ROYW1lIH0geyBkYXRhLmFkZHJlc3NQcm92aW5jZU5hbWUgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX19kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2hpZ2hsaWdodFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBkYXRhLmhpZ2hsaWdodFRleHR9fT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9fcmVjb21tYW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29tbWFuZC10aXRsZVwiPuC5gOC4oeC4meC4ueC5geC4meC4sOC4meC4szwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNvbW1hbmQtbGFiZWxcIj57ZGF0YS5yZWNvbW1lbmRlZEl0ZW1zLmpvaW4oXCIgLCBcIil9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2ZhY2lsaXRpZXNcIj5cbiAgICAgICAgICAgIHtzZXRGYWNJY29uKGRhdGEuZmFjaWxpdGllcyl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPC9TaG9wQ2FyZFN0eWxlZD5cbiAgICA8L3JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcENhcmRDb250YWluZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==