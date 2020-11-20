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
    loopWithSlice(0, postsPerPage);
  }, [merchants]);

  var fetchPosts = function fetchPosts() {
    var param = props.merchant;
    setMerchants(param.merchants);
  };

  var loopWithSlice = function loopWithSlice(start, end) {
    var slicedPosts = merchants.slice(start, end);
    arrayForHoldingPosts = [].concat(Object(C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arrayForHoldingPosts), Object(C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(slicedPosts));
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
        lineNumber: 50,
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
          lineNumber: 57,
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
              lineNumber: 70,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 45
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this));
      } else if (item === "สามารถนำสัตว์เลี้ยงเข้าได้") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_8__["MdPets"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 25
        }, _this));
      } else if (item === "รับจองล่วงหน้า") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_7__["RiFileEditLine"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 25
        }, _this));
      } else if (item === "จำหน่ายเครื่องดื่มเแอลกอฮอล์") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaBeer"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 25
        }, _this));
      } else if (item === "บริการจัดส่งอาหาร") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_7__["RiEBike2Fill"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
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
              lineNumber: 128,
              columnNumber: 11
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
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
                  lineNumber: 135,
                  columnNumber: 11
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "shop-card__info",
              children: [data.subcategoryName, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "slash",
                children: "|"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 13
              }, _this), createPriceLevel(data), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "slash",
                children: "|"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 13
              }, _this), data.addressDistrictName, " ", data.addressProvinceName]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "shop-card__divider"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "shop-card__highlight",
              dangerouslySetInnerHTML: {
                __html: data.highlightText
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "shop-card__recommand",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "recommand-title",
                children: "\u0E40\u0E21\u0E19\u0E39\u0E41\u0E19\u0E30\u0E19\u0E33"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 13
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "recommand-label",
                children: data.recommendedItems.join(" , ")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 13
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "shop-card__facilities",
              children: setFacIcon(data.facilities)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 11
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 9
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 9
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        className: "see-more",
        onClick: handleShowMorePosts,
        children: "\u0E14\u0E39\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 5
  }, _this);
};

_s(ShopCardContainer, "Vi6zxcluUVXr8GiC+VPlecNU0fU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2hvcGNhcmQvaW5kZXguanMiXSwibmFtZXMiOlsiU2hvcENhcmRDb250YWluZXIiLCJtYXRjaCIsInByb3BzIiwidXNlU3RhdGUiLCJtZXJjaGFudHMiLCJzZXRNZXJjaGFudHMiLCJwb3N0c1RvU2hvdyIsInNldFBvc3RzVG9TaG93IiwibmV4dCIsInNldE5leHQiLCJwb3N0c1BlclBhZ2UiLCJhcnJheUZvckhvbGRpbmdQb3N0cyIsInVzZUVmZmVjdCIsImZldGNoUG9zdHMiLCJsb29wV2l0aFNsaWNlIiwicGFyYW0iLCJtZXJjaGFudCIsInN0YXJ0IiwiZW5kIiwic2xpY2VkUG9zdHMiLCJzbGljZSIsImhhbmRsZVNob3dNb3JlUG9zdHMiLCJjcmVhdGVQcmljZUxldmVsIiwiZGF0YSIsInNldFByaWNlTGV2ZWwiLCJqIiwiaSIsInByaWNlTGV2ZWwiLCJwdXNoIiwiY29sb3IiLCJzZXRGYWNJY29uIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic2V0VGFnQ29sb3IiLCJ2YWx1ZSIsInNldFRhZ05hbWUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb3ZlckltYWdlSWQiLCJzaG9wTmFtZVRIIiwiaXNPcGVuIiwic3ViY2F0ZWdvcnlOYW1lIiwiYWRkcmVzc0Rpc3RyaWN0TmFtZSIsImFkZHJlc3NQcm92aW5jZU5hbWUiLCJfX2h0bWwiLCJoaWdobGlnaHRUZXh0IiwicmVjb21tZW5kZWRJdGVtcyIsImpvaW4iLCJmYWNpbGl0aWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLE1BQVpDLEtBQVk7O0FBQUEsa0JBRWZDLHNEQUFRLENBQUMsRUFBRCxDQUZP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QyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUsseUJBQVMsRUFBQyxpQkFBZjtBQUFBLDBCQUFrQ3RCLElBQUksQ0FBQ3VCLGdCQUFMLENBQXNCQyxJQUF0QixDQUEyQixLQUEzQjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFoQkYsZUFvQkU7QUFBSyx1QkFBUyxFQUFDLHVCQUFmO0FBQUEsd0JBQ0dqQixVQUFVLENBQUNQLElBQUksQ0FBQ3lCLFVBQU47QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEE7QUFBQSxXQUFVZixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGdCO0FBQUEsT0FBaEIsQ0FERixlQWtDQSxxRUFBQywyQ0FBRDtBQUFRLGlCQUFTLEVBQUMsVUFBbEI7QUFBNkIsZUFBTyxFQUFFWixtQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMENELENBckpEOztHQUFNckIsaUI7O0tBQUFBLGlCO0FBdUpTQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kYmFkNzVlMTA3MmVjNTQ2ODcyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFNob3BDYXJkU3R5bGVkXG59IGZyb20gJy4vc3R5bGVkJ1xuXG5pbXBvcnQgeyBCdXR0b24sIFRhZyAsIFRvb2x0aXAgIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBGYUJlZXIgLCBGYUNhclNpZGV9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IFJpRmlsZUVkaXRMaW5lICwgUmlFQmlrZTJGaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvcmknO1xuaW1wb3J0IHsgTWRQZXRzIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5cblxuXG5jb25zdCBTaG9wQ2FyZENvbnRhaW5lciA9ICh7IG1hdGNoLCAuLi5wcm9wcyB9KSA9PiB7XG5cbiAgY29uc3QgW21lcmNoYW50cywgc2V0TWVyY2hhbnRzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbcG9zdHNUb1Nob3csIHNldFBvc3RzVG9TaG93XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25leHQsIHNldE5leHRdID0gdXNlU3RhdGUoMyk7XG5cbiAgY29uc3QgcG9zdHNQZXJQYWdlID0gMztcbiAgbGV0IGFycmF5Rm9ySG9sZGluZ1Bvc3RzID0gW107ICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoUG9zdHMoKTtcbiAgICBsb29wV2l0aFNsaWNlKDAsIHBvc3RzUGVyUGFnZSk7XG4gICAgXG4gIH0sIFttZXJjaGFudHNdKTtcblxuICBjb25zdCBmZXRjaFBvc3RzID0gKCkgPT4ge1xuICAgIGxldCBwYXJhbSA9IHByb3BzLm1lcmNoYW50O1xuICAgIHNldE1lcmNoYW50cyhwYXJhbS5tZXJjaGFudHMpO1xuICB9O1xuXG4gIGNvbnN0IGxvb3BXaXRoU2xpY2UgPSAoc3RhcnQsIGVuZCkgPT4ge1xuICAgIGNvbnN0IHNsaWNlZFBvc3RzID0gbWVyY2hhbnRzLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgIGFycmF5Rm9ySG9sZGluZ1Bvc3RzID0gWy4uLmFycmF5Rm9ySG9sZGluZ1Bvc3RzLCAuLi5zbGljZWRQb3N0c107XG4gICAgc2V0UG9zdHNUb1Nob3coYXJyYXlGb3JIb2xkaW5nUG9zdHMpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNob3dNb3JlUG9zdHMgPSAoKSA9PiB7XG4gICAgbG9vcFdpdGhTbGljZShuZXh0LCBuZXh0ICsgcG9zdHNQZXJQYWdlKTtcbiAgICBzZXROZXh0KG5leHQgKyBwb3N0c1BlclBhZ2UpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByaWNlTGV2ZWwgPSAoZGF0YSkgPT4ge1xuICAgIGxldCBzZXRQcmljZUxldmVsID0gW11cbiAgICBsZXQgaiA9IDBcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBkYXRhLnByaWNlTGV2ZWw7IGkrKykge1xuICAgICAgc2V0UHJpY2VMZXZlbC5wdXNoKDxzcGFuIGtleT17an0gc3R5bGU9e3tjb2xvcjogJyMyMjIyMjInfX0+4Li/PC9zcGFuPilcbiAgICAgIGorK1xuICAgIH1cbiAgICBpZiAoZGF0YS5wcmljZUxldmVsID09PSA0KSB7XG4gICAgICByZXR1cm4gc2V0UHJpY2VMZXZlbFxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCA0IC0gZGF0YS5wcmljZUxldmVsOyBpKyspIHtcbiAgICAgIHNldFByaWNlTGV2ZWwucHVzaCg8c3BhbiBrZXk9e2p9IHN0eWxlPXt7Y29sb3I6ICcjYmJiYmJiJ319PuC4vzwvc3Bhbj4pXG4gICAgICBqKytcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXRQcmljZUxldmVsXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2V0RmFjSWNvbiA9IChkYXRhKSA9PiB7XG4gICAgbGV0IHNldEZhY0ljb24gPSBbXVxuICAgIGRhdGEubWFwKChpdGVtICxpbmRleCkgPT4ge1xuICAgICAgaWYgKGl0ZW0gPT09IFwi4LiX4Li14LmI4LiI4Lit4LiU4Lij4LiWXCIpIHtcbiAgICAgICAgc2V0RmFjSWNvbi5wdXNoKFxuICAgICAgICAgIDxUb29sdGlwIGtleT17aW5kZXh9IHRpdGxlPXtpdGVtfT48ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXRpZXMtaWNvblwiPlxuICAgICAgICAgICAgICA8RmFDYXJTaWRlLz5cbiAgICAgICAgICAgIDwvZGl2PjwvVG9vbHRpcD4pXG4gICAgICB9ZWxzZSBpZiAoaXRlbSA9PT0gXCLguKrguLLguKHguLLguKPguJbguJnguLPguKrguLHguJXguKfguYzguYDguKXguLXguYnguKLguIfguYDguILguYnguLLguYTguJTguYlcIikge1xuICAgICAgICBzZXRGYWNJY29uLnB1c2goPFRvb2x0aXAga2V5PXtpbmRleH0gdGl0bGU9e2l0ZW19PjxkaXYgY2xhc3NOYW1lPVwiZmFjaWxpdGllcy1pY29uXCI+XG4gICAgICAgICAgICAgIDxNZFBldHMvPlxuICAgICAgICAgICAgPC9kaXY+PC9Ub29sdGlwPilcbiAgICAgIH1lbHNlIGlmIChpdGVtID09PSBcIuC4o+C4seC4muC4iOC4reC4h+C4peC5iOC4p+C4h+C4q+C4meC5ieC4slwiKSB7XG4gICAgICAgIHNldEZhY0ljb24ucHVzaCg8VG9vbHRpcCBrZXk9e2luZGV4fSB0aXRsZT17aXRlbX0+PGRpdiBjbGFzc05hbWU9XCJmYWNpbGl0aWVzLWljb25cIj5cbiAgICAgICAgICAgICAgPFJpRmlsZUVkaXRMaW5lLz5cbiAgICAgICAgICAgIDwvZGl2PjwvVG9vbHRpcD4pXG4gICAgICB9ZWxzZSBpZiAoaXRlbSA9PT0gXCLguIjguLPguKvguJnguYjguLLguKLguYDguITguKPguLfguYjguK3guIfguJTguLfguYjguKHguYDguYHguK3guKXguIHguK3guK7guK3guKXguYxcIil7XG4gICAgICAgIHNldEZhY0ljb24ucHVzaCg8VG9vbHRpcCBrZXk9e2luZGV4fSB0aXRsZT17aXRlbX0+PGRpdiBjbGFzc05hbWU9XCJmYWNpbGl0aWVzLWljb25cIj5cbiAgICAgICAgICAgICAgPEZhQmVlci8+XG4gICAgICAgICAgICA8L2Rpdj48L1Rvb2x0aXA+KVxuICAgICAgfWVsc2UgaWYgKGl0ZW0gPT09IFwi4Lia4Lij4Li04LiB4Liy4Lij4LiI4Lix4LiU4Liq4LmI4LiH4Lit4Liy4Lir4Liy4LijXCIpe1xuICAgICAgICBzZXRGYWNJY29uLnB1c2goPFRvb2x0aXAga2V5PXtpbmRleH0gdGl0bGU9e2l0ZW19PjxkaXYgY2xhc3NOYW1lPVwiZmFjaWxpdGllcy1pY29uXCI+XG4gICAgICAgICAgICAgIDxSaUVCaWtlMkZpbGwvPlxuICAgICAgICAgICAgPC9kaXY+PC9Ub29sdGlwPilcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBzZXRGYWNJY29uXG4gIH1cblxuICBjb25zdCBzZXRUYWdDb2xvciA9ICh2YWx1ZSkgPT4ge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgXCJOXCI6XG4gICAgICAgIHJldHVybiBcInRhZy1zdGF0dXMgYmxhY2tcIlxuICAgICAgY2FzZSBcIllcIjpcbiAgICAgICAgcmV0dXJuIFwidGFnLXN0YXR1c1wiXG4gICAgICBjYXNlIFwiTi9BXCI6IFxuICAgICAgICByZXR1cm4gXCJoaWRkZW5cIlxuICAgIFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiaGlkZGVuXCJcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZXRUYWdOYW1lID0gKHZhbHVlKSA9PiB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSBcIk5cIjpcbiAgICAgICAgcmV0dXJuIFwi4Lib4Li04LiU4LmB4Lil4LmJ4LinXCJcbiAgICAgIGNhc2UgXCJZXCI6XG4gICAgICAgIHJldHVybiBcIuC5gOC4m+C4tOC4lOC4reC4ouC4ueC5iFwiXG4gICAgICBjYXNlIFwiTi9BXCI6IFxuICAgICAgICByZXR1cm4gXCJcIlxuICAgIFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiXCJcbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPHJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNob3BDYXJkU3R5bGVkID5cbiAgICAgIHsgcG9zdHNUb1Nob3cubWFwKChkYXRhLCBpbmRleCkgPT4gXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwic2hvcC1jYXJkXCI+IFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9faW1hZ2V3cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2ltYWdlXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ZGF0YS5jb3ZlckltYWdlSWR9KWB9fSA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9fYm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX190aXRsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2xhYmVsXCI+XG4gICAgICAgICAgICAgIHsgZGF0YS5zaG9wTmFtZVRIIH1cbiAgICAgICAgICA8VGFnICBjbGFzc05hbWU9e3NldFRhZ0NvbG9yKGRhdGEuaXNPcGVuKX0gPiB7c2V0VGFnTmFtZShkYXRhLmlzT3Blbil9IDwvVGFnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2luZm9cIj5cbiAgICAgICAgICAgIHsgZGF0YS5zdWJjYXRlZ29yeU5hbWUgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGFzaFwiPnw8L2Rpdj5cbiAgICAgICAgICAgIHtjcmVhdGVQcmljZUxldmVsKGRhdGEpfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGFzaFwiPnw8L2Rpdj5cbiAgICAgICAgICAgIHsgZGF0YS5hZGRyZXNzRGlzdHJpY3ROYW1lIH0geyBkYXRhLmFkZHJlc3NQcm92aW5jZU5hbWUgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX19kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2hpZ2hsaWdodFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBkYXRhLmhpZ2hsaWdodFRleHR9fT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9fcmVjb21tYW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29tbWFuZC10aXRsZVwiPuC5gOC4oeC4meC4ueC5geC4meC4sOC4meC4szwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNvbW1hbmQtbGFiZWxcIj57ZGF0YS5yZWNvbW1lbmRlZEl0ZW1zLmpvaW4oXCIgLCBcIil9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2ZhY2lsaXRpZXNcIj5cbiAgICAgICAgICAgIHtzZXRGYWNJY29uKGRhdGEuZmFjaWxpdGllcyl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInNlZS1tb3JlXCIgb25DbGljaz17aGFuZGxlU2hvd01vcmVQb3N0c30+4LiU4Li54LmA4Lie4Li04LmI4Lih4LmA4LiV4Li04LihPC9CdXR0b24+XG5cblxuICAgICAgPC9TaG9wQ2FyZFN0eWxlZD5cbiAgICA8L3JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcENhcmRDb250YWluZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==