webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Shopcard/index.js":
/*!******************************************!*\
  !*** ./src/components/Shopcard/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ "./src/components/Shopcard/styled.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");




var _jsxFileName = "C:\\Users\\nom_n\\YWC18Homework\\src\\components\\Shopcard\\index.js",
    _this = undefined,
    _s = $RefreshSig$();









var ShopCardContainer = function ShopCardContainer(_ref) {
  _s();

  var match = _ref.match,
      props = Object(C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["match"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      merchants = _useState[0],
      setMerchants = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      postsToShow = _useState2[0],
      setPostsToShow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(3),
      next = _useState3[0],
      setNext = _useState3[1];

  var postsPerPage = 3;
  var arrayForHoldingPosts = [];
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchPosts();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    loopWithSlice(0, postsPerPage);
  }, [merchants]);

  var fetchPosts = function fetchPosts() {
    var param = props.merchant;
    setMerchants(param.merchants);
  };

  var loopWithSlice = function loopWithSlice(start, end) {
    var slicedPosts = merchants.slice(start, end);
    arrayForHoldingPosts = [].concat(Object(C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arrayForHoldingPosts), Object(C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(slicedPosts));
    console.log(postsToShow);
    setPostsToShow(arrayForHoldingPosts);
  };

  var handleShowMorePosts = function handleShowMorePosts() {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };

  var createPriceLevel = function createPriceLevel(data) {
    var setPriceLevel = [];
    var j = 0;

    for (var i = 0; i < data.priceLevel; i++) {
      setPriceLevel.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        style: {
          color: '#222222'
        },
        children: "\u0E3F"
      }, j, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 26
      }, _this));
      j++;
    }

    if (data.priceLevel === 4) {
      return setPriceLevel;
    } else {
      for (var _i = 0; _i < 4 - data.priceLevel; _i++) {
        setPriceLevel.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          style: {
            color: '#bbbbbb'
          },
          children: "\u0E3F"
        }, j, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 26
        }, _this));
        j++;
      }

      return setPriceLevel;
    }
  };

  var setFacIcon = function setFacIcon(data) {
    var setFacIcon = [];
    data.map(function (item, index) {
      if (item === "ที่จอดรถ") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaCarSide"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 45
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this));
      } else if (item === "สามารถนำสัตว์เลี้ยงเข้าได้") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_8__["MdPets"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 25
        }, _this));
      } else if (item === "รับจองล่วงหน้า") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_7__["RiFileEditLine"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 25
        }, _this));
      } else if (item === "จำหน่ายเครื่องดื่มเแอลกอฮอล์") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaBeer"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 25
        }, _this));
      } else if (item === "บริการจัดส่งอาหาร") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_7__["RiEBike2Fill"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
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
        return "เปิดอยู่";

      case "N/A":
        return "";

      default:
        return "";
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_4__["ShopCardStyled"], {
      children: [postsToShow.map(function (data, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "shop-card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "shop-card__imagewrapper",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "shop-card__image",
              style: {
                backgroundImage: "url(".concat(data.coverImageId, ")")
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 11
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 9
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "shop-card__body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "shop-card__title",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "shop-card__label",
                children: [data.shopNameTH, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Tag"], {
                  className: setTagColor(data.isOpen),
                  children: [" ", setTagName(data.isOpen), " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 11
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "shop-card__info",
              children: [data.subcategoryName, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "slash",
                children: "|"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 13
              }, _this), createPriceLevel(data), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "slash",
                children: "|"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 13
              }, _this), data.addressDistrictName, " ", data.addressProvinceName]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "shop-card__divider"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "shop-card__highlight",
              dangerouslySetInnerHTML: {
                __html: data.highlightText
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "shop-card__recommand",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "recommand-title",
                children: "\u0E40\u0E21\u0E19\u0E39\u0E41\u0E19\u0E30\u0E19\u0E33"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 13
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "recommand-label",
                children: data.recommendedItems.join(" , ")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 13
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "shop-card__facilities",
              children: setFacIcon(data.facilities)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 11
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 9
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 9
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        className: "see-more",
        onClick: handleShowMorePosts,
        children: "\u0E14\u0E39\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 5
  }, _this);
};

_s(ShopCardContainer, "ZPxil6WY9i/fVgXMnDjxLALe0+4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2hvcGNhcmQvaW5kZXguanMiXSwibmFtZXMiOlsiU2hvcENhcmRDb250YWluZXIiLCJtYXRjaCIsInByb3BzIiwidXNlU3RhdGUiLCJtZXJjaGFudHMiLCJzZXRNZXJjaGFudHMiLCJwb3N0c1RvU2hvdyIsInNldFBvc3RzVG9TaG93IiwibmV4dCIsInNldE5leHQiLCJwb3N0c1BlclBhZ2UiLCJhcnJheUZvckhvbGRpbmdQb3N0cyIsInVzZUVmZmVjdCIsImZldGNoUG9zdHMiLCJsb29wV2l0aFNsaWNlIiwicGFyYW0iLCJtZXJjaGFudCIsInN0YXJ0IiwiZW5kIiwic2xpY2VkUG9zdHMiLCJzbGljZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTaG93TW9yZVBvc3RzIiwiY3JlYXRlUHJpY2VMZXZlbCIsImRhdGEiLCJzZXRQcmljZUxldmVsIiwiaiIsImkiLCJwcmljZUxldmVsIiwicHVzaCIsImNvbG9yIiwic2V0RmFjSWNvbiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInNldFRhZ0NvbG9yIiwidmFsdWUiLCJzZXRUYWdOYW1lIiwiYmFja2dyb3VuZEltYWdlIiwiY292ZXJJbWFnZUlkIiwic2hvcE5hbWVUSCIsImlzT3BlbiIsInN1YmNhdGVnb3J5TmFtZSIsImFkZHJlc3NEaXN0cmljdE5hbWUiLCJhZGRyZXNzUHJvdmluY2VOYW1lIiwiX19odG1sIiwiaGlnaGxpZ2h0VGV4dCIsInJlY29tbWVuZGVkSXRlbXMiLCJqb2luIiwiZmFjaWxpdGllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQUF5QjtBQUFBOztBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFaQyxLQUFZOztBQUFBLGtCQUVmQyxzREFB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Q0FBQ3NCO0FBQWQ7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmRixlQWdCRTtBQUFLLHVCQUFTLEVBQUMsc0JBQWY7QUFBQSxzQ0FDRTtBQUFLLHlCQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFLLHlCQUFTLEVBQUMsaUJBQWY7QUFBQSwwQkFBa0N0QixJQUFJLENBQUN1QixnQkFBTCxDQUFzQkMsSUFBdEIsQ0FBMkIsS0FBM0I7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBaEJGLGVBb0JFO0FBQUssdUJBQVMsRUFBQyx1QkFBZjtBQUFBLHdCQUNHakIsVUFBVSxDQUFDUCxJQUFJLENBQUN5QixVQUFOO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxBO0FBQUEsV0FBVWYsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURnQjtBQUFBLE9BQWhCLENBREYsZUFrQ0EscUVBQUMsMkNBQUQ7QUFBUSxpQkFBUyxFQUFDLFVBQWxCO0FBQTZCLGVBQU8sRUFBRVosbUJBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBDRCxDQTNKRDs7R0FBTXZCLGlCOztLQUFBQSxpQjtBQTZKU0EsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDZhZjYzMzQ1NmNlMzA5ODg1NDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBTaG9wQ2FyZFN0eWxlZFxufSBmcm9tICcuL3N0eWxlZCdcblxuaW1wb3J0IHsgQnV0dG9uLCBUYWcgLCBUb29sdGlwICB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgRmFCZWVyICwgRmFDYXJTaWRlfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyBSaUZpbGVFZGl0TGluZSAsIFJpRUJpa2UyRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcbmltcG9ydCB7IE1kUGV0cyB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmltcG9ydCByZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuXG5cblxuY29uc3QgU2hvcENhcmRDb250YWluZXIgPSAoeyBtYXRjaCwgLi4ucHJvcHMgfSkgPT4ge1xuXG4gIGNvbnN0IFttZXJjaGFudHMsIHNldE1lcmNoYW50c10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW3Bvc3RzVG9TaG93LCBzZXRQb3N0c1RvU2hvd10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtuZXh0LCBzZXROZXh0XSA9IHVzZVN0YXRlKDMpO1xuXG4gIGNvbnN0IHBvc3RzUGVyUGFnZSA9IDM7XG4gIGxldCBhcnJheUZvckhvbGRpbmdQb3N0cyA9IFtdOyAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFBvc3RzKCk7XG4gICAgXG4gIH0sIFtdKTtcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9vcFdpdGhTbGljZSgwLCBwb3N0c1BlclBhZ2UpO1xuICAgIFxuICAgIFxuICB9LCBbbWVyY2hhbnRzXSk7XG5cbiAgY29uc3QgZmV0Y2hQb3N0cyA9ICgpID0+IHtcbiAgICBsZXQgcGFyYW0gPSBwcm9wcy5tZXJjaGFudDtcbiAgICBzZXRNZXJjaGFudHMocGFyYW0ubWVyY2hhbnRzKTtcbiAgfTtcblxuICBjb25zdCBsb29wV2l0aFNsaWNlID0gKHN0YXJ0LCBlbmQpID0+IHtcbiAgICBjb25zdCBzbGljZWRQb3N0cyA9IG1lcmNoYW50cy5zbGljZShzdGFydCwgZW5kKTtcbiAgICBhcnJheUZvckhvbGRpbmdQb3N0cyA9IFsuLi5hcnJheUZvckhvbGRpbmdQb3N0cywgLi4uc2xpY2VkUG9zdHNdO1xuICAgIGNvbnNvbGUubG9nKHBvc3RzVG9TaG93KTtcbiAgICBzZXRQb3N0c1RvU2hvdyhhcnJheUZvckhvbGRpbmdQb3N0cyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2hvd01vcmVQb3N0cyA9ICgpID0+IHtcbiAgICBsb29wV2l0aFNsaWNlKG5leHQsIG5leHQgKyBwb3N0c1BlclBhZ2UpO1xuICAgIHNldE5leHQobmV4dCArIHBvc3RzUGVyUGFnZSk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJpY2VMZXZlbCA9IChkYXRhKSA9PiB7XG4gICAgbGV0IHNldFByaWNlTGV2ZWwgPSBbXVxuICAgIGxldCBqID0gMFxuICAgIGZvciAobGV0IGk9MDsgaSA8IGRhdGEucHJpY2VMZXZlbDsgaSsrKSB7XG4gICAgICBzZXRQcmljZUxldmVsLnB1c2goPHNwYW4ga2V5PXtqfSBzdHlsZT17e2NvbG9yOiAnIzIyMjIyMid9fT7guL88L3NwYW4+KVxuICAgICAgaisrXG4gICAgfVxuICAgIGlmIChkYXRhLnByaWNlTGV2ZWwgPT09IDQpIHtcbiAgICAgIHJldHVybiBzZXRQcmljZUxldmVsXG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IDQgLSBkYXRhLnByaWNlTGV2ZWw7IGkrKykge1xuICAgICAgc2V0UHJpY2VMZXZlbC5wdXNoKDxzcGFuIGtleT17an0gc3R5bGU9e3tjb2xvcjogJyNiYmJiYmInfX0+4Li/PC9zcGFuPilcbiAgICAgIGorK1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNldFByaWNlTGV2ZWxcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZXRGYWNJY29uID0gKGRhdGEpID0+IHtcbiAgICBsZXQgc2V0RmFjSWNvbiA9IFtdXG4gICAgZGF0YS5tYXAoKGl0ZW0gLGluZGV4KSA9PiB7XG4gICAgICBpZiAoaXRlbSA9PT0gXCLguJfguLXguYjguIjguK3guJTguKPguJZcIikge1xuICAgICAgICBzZXRGYWNJY29uLnB1c2goXG4gICAgICAgICAgPFRvb2x0aXAga2V5PXtpbmRleH0gdGl0bGU9e2l0ZW19PjxkaXYgY2xhc3NOYW1lPVwiZmFjaWxpdGllcy1pY29uXCI+XG4gICAgICAgICAgICAgIDxGYUNhclNpZGUvPlxuICAgICAgICAgICAgPC9kaXY+PC9Ub29sdGlwPilcbiAgICAgIH1lbHNlIGlmIChpdGVtID09PSBcIuC4quC4suC4oeC4suC4o+C4luC4meC4s+C4quC4seC4leC4p+C5jOC5gOC4peC4teC5ieC4ouC4h+C5gOC4guC5ieC4suC5hOC4lOC5iVwiKSB7XG4gICAgICAgIHNldEZhY0ljb24ucHVzaCg8VG9vbHRpcCBrZXk9e2luZGV4fSB0aXRsZT17aXRlbX0+PGRpdiBjbGFzc05hbWU9XCJmYWNpbGl0aWVzLWljb25cIj5cbiAgICAgICAgICAgICAgPE1kUGV0cy8+XG4gICAgICAgICAgICA8L2Rpdj48L1Rvb2x0aXA+KVxuICAgICAgfWVsc2UgaWYgKGl0ZW0gPT09IFwi4Lij4Lix4Lia4LiI4Lit4LiH4Lil4LmI4Lin4LiH4Lir4LiZ4LmJ4LiyXCIpIHtcbiAgICAgICAgc2V0RmFjSWNvbi5wdXNoKDxUb29sdGlwIGtleT17aW5kZXh9IHRpdGxlPXtpdGVtfT48ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXRpZXMtaWNvblwiPlxuICAgICAgICAgICAgICA8UmlGaWxlRWRpdExpbmUvPlxuICAgICAgICAgICAgPC9kaXY+PC9Ub29sdGlwPilcbiAgICAgIH1lbHNlIGlmIChpdGVtID09PSBcIuC4iOC4s+C4q+C4meC5iOC4suC4ouC5gOC4hOC4o+C4t+C5iOC4reC4h+C4lOC4t+C5iOC4oeC5gOC5geC4reC4peC4geC4reC4ruC4reC4peC5jFwiKXtcbiAgICAgICAgc2V0RmFjSWNvbi5wdXNoKDxUb29sdGlwIGtleT17aW5kZXh9IHRpdGxlPXtpdGVtfT48ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXRpZXMtaWNvblwiPlxuICAgICAgICAgICAgICA8RmFCZWVyLz5cbiAgICAgICAgICAgIDwvZGl2PjwvVG9vbHRpcD4pXG4gICAgICB9ZWxzZSBpZiAoaXRlbSA9PT0gXCLguJrguKPguLTguIHguLLguKPguIjguLHguJTguKrguYjguIfguK3guLLguKvguLLguKNcIil7XG4gICAgICAgIHNldEZhY0ljb24ucHVzaCg8VG9vbHRpcCBrZXk9e2luZGV4fSB0aXRsZT17aXRlbX0+PGRpdiBjbGFzc05hbWU9XCJmYWNpbGl0aWVzLWljb25cIj5cbiAgICAgICAgICAgICAgPFJpRUJpa2UyRmlsbC8+XG4gICAgICAgICAgICA8L2Rpdj48L1Rvb2x0aXA+KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHNldEZhY0ljb25cbiAgfVxuXG4gIGNvbnN0IHNldFRhZ0NvbG9yID0gKHZhbHVlKSA9PiB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSBcIk5cIjpcbiAgICAgICAgcmV0dXJuIFwidGFnLXN0YXR1cyBibGFja1wiXG4gICAgICBjYXNlIFwiWVwiOlxuICAgICAgICByZXR1cm4gXCJ0YWctc3RhdHVzXCJcbiAgICAgIGNhc2UgXCJOL0FcIjogXG4gICAgICAgIHJldHVybiBcImhpZGRlblwiXG4gICAgXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJoaWRkZW5cIlxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNldFRhZ05hbWUgPSAodmFsdWUpID0+IHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlIFwiTlwiOlxuICAgICAgICByZXR1cm4gXCLguJvguLTguJTguYHguKXguYnguKdcIlxuICAgICAgY2FzZSBcIllcIjpcbiAgICAgICAgcmV0dXJuIFwi4LmA4Lib4Li04LiU4Lit4Lii4Li54LmIXCJcbiAgICAgIGNhc2UgXCJOL0FcIjogXG4gICAgICAgIHJldHVybiBcIlwiXG4gICAgXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJcIlxuICAgIH1cbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8cmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8U2hvcENhcmRTdHlsZWQgPlxuICAgICAgeyBwb3N0c1RvU2hvdy5tYXAoKGRhdGEsIGluZGV4KSA9PiBcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJzaG9wLWNhcmRcIj4gXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX19pbWFnZXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9faW1hZ2VcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtkYXRhLmNvdmVySW1hZ2VJZH0pYH19ID5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX19ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX3RpdGxlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9fbGFiZWxcIj5cbiAgICAgICAgICAgICAgeyBkYXRhLnNob3BOYW1lVEggfVxuICAgICAgICAgIDxUYWcgIGNsYXNzTmFtZT17c2V0VGFnQ29sb3IoZGF0YS5pc09wZW4pfSA+IHtzZXRUYWdOYW1lKGRhdGEuaXNPcGVuKX0gPC9UYWc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9faW5mb1wiPlxuICAgICAgICAgICAgeyBkYXRhLnN1YmNhdGVnb3J5TmFtZSB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsYXNoXCI+fDwvZGl2PlxuICAgICAgICAgICAge2NyZWF0ZVByaWNlTGV2ZWwoZGF0YSl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsYXNoXCI+fDwvZGl2PlxuICAgICAgICAgICAgeyBkYXRhLmFkZHJlc3NEaXN0cmljdE5hbWUgfSB7IGRhdGEuYWRkcmVzc1Byb3ZpbmNlTmFtZSB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2RpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9faGlnaGxpZ2h0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGRhdGEuaGlnaGxpZ2h0VGV4dH19PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX19yZWNvbW1hbmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb21tYW5kLXRpdGxlXCI+4LmA4Lih4LiZ4Li54LmB4LiZ4Liw4LiZ4LizPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29tbWFuZC1sYWJlbFwiPntkYXRhLnJlY29tbWVuZGVkSXRlbXMuam9pbihcIiAsIFwiKX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9fZmFjaWxpdGllc1wiPlxuICAgICAgICAgICAge3NldEZhY0ljb24oZGF0YS5mYWNpbGl0aWVzKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwic2VlLW1vcmVcIiBvbkNsaWNrPXtoYW5kbGVTaG93TW9yZVBvc3RzfT7guJTguLnguYDguJ7guLTguYjguKHguYDguJXguLTguKE8L0J1dHRvbj5cblxuXG4gICAgICA8L1Nob3BDYXJkU3R5bGVkPlxuICAgIDwvcmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG9wQ2FyZENvbnRhaW5lcjsiXSwic291cmNlUm9vdCI6IiJ9