webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Shopcard/index.js":
/*!******************************************!*\
  !*** ./src/components/Shopcard/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/components/Shopcard/styled.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");



var _jsxFileName = "C:\\Users\\nom_n\\YWC18Homework\\src\\components\\Shopcard\\index.js",
    _this = undefined,
    _s = $RefreshSig$();








var postsPerPage = 3;
var arrayForHoldingPosts = [];

var ShopCardContainer = function ShopCardContainer(_ref) {
  _s();

  var match = _ref.match,
      props = Object(C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["match"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      merchants = _useState[0],
      setMerchants = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      postsToShow = _useState2[0],
      setPostsToShow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(3),
      next = _useState3[0],
      setNext = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetchPosts();
  }, []);

  var fetchPosts = function fetchPosts() {
    var param = props.merchant;
    setMerchants(param.merchants);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    loopWithSlice(0, postsPerPage);
  }, [merchants]);

  var loopWithSlice = function loopWithSlice(start, end) {
    var slicedPosts = merchants.slice(start, end);
    arrayForHoldingPosts = arrayForHoldingPosts.concat(slicedPosts);
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
      setPriceLevel.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        style: {
          color: '#222222'
        },
        children: "\u0E3F"
      }, j, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 26
      }, _this));
      j++;
    }

    if (data.priceLevel === 4) {
      return setPriceLevel;
    } else {
      for (var _i = 0; _i < 4 - data.priceLevel; _i++) {
        setPriceLevel.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          style: {
            color: '#bbbbbb'
          },
          children: "\u0E3F"
        }, j, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
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
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaCarSide"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 45
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this));
      } else if (item === "สามารถนำสัตว์เลี้ยงเข้าได้") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdPets"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 25
        }, _this));
      } else if (item === "รับจองล่วงหน้า") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__["RiFileEditLine"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 25
        }, _this));
      } else if (item === "จำหน่ายเครื่องดื่มเแอลกอฮอล์") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaBeer"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 25
        }, _this));
      } else if (item === "บริการจัดส่งอาหาร") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__["RiEBike2Fill"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_3__["ShopCardStyled"], {
      children: [postsToShow.filter(function (data) {
        // console.log( "search", props.setSearchProvince , props.setSearchTitle , props.setSearchSubCategory , props.setSearchTitleName , props.setSearchPriceLevel);
        if (props.setSearchTitleName === "" && (props.setSearchProvince === "พื้นที่ใกล้ฉัน" || props.setSearchProvince === "สถานที่ทั้งหมด") && props.setSearchSubCategory === "ทั้งหมด" && props.setSearchPriceLevel === 0) return data;else if (data.shopNameTH.includes(props.setSearchTitleName) && (props.setSearchProvince === "พื้นที่ใกล้ฉัน" || props.setSearchProvince === "สถานที่ทั้งหมด") && props.setSearchSubCategory === "ทั้งหมด" && props.setSearchPriceLevel === 0) return data;else if (props.setSearchTitleName === "" && data.addressProvinceName.includes(props.setSearchProvince) && props.setSearchSubCategory === "ทั้งหมด" && props.setSearchPriceLevel === 0) return data;else if (props.setSearchTitleName === "" && (props.setSearchProvince === "พื้นที่ใกล้ฉัน" || props.setSearchProvince === "สถานที่ทั้งหมด") && data.subcategoryName.includes(props.setSearchSubCategory) && props.setSearchPriceLevel === 0) return data;else if (props.setSearchTitleName === "" && (props.setSearchProvince === "พื้นที่ใกล้ฉัน" || props.setSearchProvince === "สถานที่ทั้งหมด") && props.setSearchSubCategory === "ทั้งหมด" && data.priceLevel === props.setSearchPriceLevel) return data;else if (props.setSearchTitleName === "" && (props.setSearchProvince === "พื้นที่ใกล้ฉัน" || props.setSearchProvince === "สถานที่ทั้งหมด") && props.setSearchSubCategory === "ทั้งหมด" && props.setSearchPriceLevel === 0) return data;
      }).map(function (data, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "shop-card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "shop-card__imagewrapper",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "shop-card__image",
              style: {
                backgroundImage: "url(".concat(data.coverImageId, ")")
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 11
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 9
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "shop-card__body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "shop-card__title",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "shop-card__label",
                children: [data.shopNameTH, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Tag"], {
                  className: setTagColor(data.isOpen),
                  children: [" ", setTagName(data.isOpen), " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 11
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "shop-card__info",
              children: [data.subcategoryName, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "slash",
                children: "|"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 13
              }, _this), createPriceLevel(data), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "slash",
                children: "|"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 13
              }, _this), data.addressDistrictName, " ", data.addressProvinceName]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "shop-card__divider"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "shop-card__highlight",
              dangerouslySetInnerHTML: {
                __html: data.highlightText
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "shop-card__recommand",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "recommand-title",
                children: "\u0E40\u0E21\u0E19\u0E39\u0E41\u0E19\u0E30\u0E19\u0E33"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 13
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "recommand-label",
                children: data.recommendedItems.join(" , ")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 13
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "shop-card__facilities",
              children: setFacIcon(data.facilities)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 11
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 9
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 9
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: "see-more",
        onClick: handleShowMorePosts,
        children: "\u0E14\u0E39\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 128,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2hvcGNhcmQvaW5kZXguanMiXSwibmFtZXMiOlsicG9zdHNQZXJQYWdlIiwiYXJyYXlGb3JIb2xkaW5nUG9zdHMiLCJTaG9wQ2FyZENvbnRhaW5lciIsIm1hdGNoIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm1lcmNoYW50cyIsInNldE1lcmNoYW50cyIsInBvc3RzVG9TaG93Iiwic2V0UG9zdHNUb1Nob3ciLCJuZXh0Iiwic2V0TmV4dCIsInVzZUVmZmVjdCIsImZldGNoUG9zdHMiLCJwYXJhbSIsIm1lcmNoYW50IiwibG9vcFdpdGhTbGljZSIsInN0YXJ0IiwiZW5kIiwic2xpY2VkUG9zdHMiLCJzbGljZSIsImNvbmNhdCIsImhhbmRsZVNob3dNb3JlUG9zdHMiLCJjcmVhdGVQcmljZUxldmVsIiwiZGF0YSIsInNldFByaWNlTGV2ZWwiLCJqIiwiaSIsInByaWNlTGV2ZWwiLCJwdXNoIiwiY29sb3IiLCJzZXRGYWNJY29uIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic2V0VGFnQ29sb3IiLCJ2YWx1ZSIsInNldFRhZ05hbWUiLCJmaWx0ZXIiLCJzZXRTZWFyY2hUaXRsZU5hbWUiLCJzZXRTZWFyY2hQcm92aW5jZSIsInNldFNlYXJjaFN1YkNhdGVnb3J5Iiwic2V0U2VhcmNoUHJpY2VMZXZlbCIsInNob3BOYW1lVEgiLCJpbmNsdWRlcyIsImFkZHJlc3NQcm92aW5jZU5hbWUiLCJzdWJjYXRlZ29yeU5hbWUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb3ZlckltYWdlSWQiLCJpc09wZW4iLCJhZGRyZXNzRGlzdHJpY3ROYW1lIiwiX19odG1sIiwiaGlnaGxpZ2h0VGV4dCIsInJlY29tbWVuZGVkSXRlbXMiLCJqb2luIiwiZmFjaWxpdGllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsWUFBWSxH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QVMsRUFBQyx1QkFBZjtBQUFBLHdCQUNHdkIsVUFBVSxDQUFDUCxJQUFJLENBQUMrQixVQUFOO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxBO0FBQUEsV0FBVXJCLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESztBQUFBLE9BZEwsQ0FERixlQWdEQSxxRUFBQywyQ0FBRDtBQUFRLGlCQUFTLEVBQUMsVUFBbEI7QUFBNkIsZUFBTyxFQUFFWixtQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0RELENBdktEOztHQUFNcEIsaUI7O0tBQUFBLGlCO0FBeUtTQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZjczOWUzYmNlY2YwOTFhOGRmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFNob3BDYXJkU3R5bGVkXG59IGZyb20gJy4vc3R5bGVkJ1xuXG5pbXBvcnQgeyBCdXR0b24sIFRhZyAsIFRvb2x0aXAgIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBGYUJlZXIgLCBGYUNhclNpZGV9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IFJpRmlsZUVkaXRMaW5lICwgUmlFQmlrZTJGaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvcmknO1xuaW1wb3J0IHsgTWRQZXRzIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5cbmNvbnN0IHBvc3RzUGVyUGFnZSA9IDM7XG5sZXQgYXJyYXlGb3JIb2xkaW5nUG9zdHMgPSBbXTsgIFxuXG5jb25zdCBTaG9wQ2FyZENvbnRhaW5lciA9ICh7IG1hdGNoLCAuLi5wcm9wcyB9KSA9PiB7XG5cbiAgY29uc3QgW21lcmNoYW50cywgc2V0TWVyY2hhbnRzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbcG9zdHNUb1Nob3csIHNldFBvc3RzVG9TaG93XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25leHQsIHNldE5leHRdID0gdXNlU3RhdGUoMyk7XG5cbiAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFBvc3RzKCk7XG4gICAgXG4gIH0sIFtdKTtcblxuICBjb25zdCBmZXRjaFBvc3RzID0gKCkgPT4ge1xuICAgIGxldCBwYXJhbSA9IHByb3BzLm1lcmNoYW50O1xuICAgIHNldE1lcmNoYW50cyhwYXJhbS5tZXJjaGFudHMpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9vcFdpdGhTbGljZSgwLCBwb3N0c1BlclBhZ2UpO1xuICAgIFxuICB9LCBbbWVyY2hhbnRzXSk7XG5cblxuICBjb25zdCBsb29wV2l0aFNsaWNlID0gKHN0YXJ0LCBlbmQpID0+IHtcbiAgICBjb25zdCBzbGljZWRQb3N0cyA9IG1lcmNoYW50cy5zbGljZShzdGFydCwgZW5kKTtcbiAgICBhcnJheUZvckhvbGRpbmdQb3N0cyA9IGFycmF5Rm9ySG9sZGluZ1Bvc3RzLmNvbmNhdChzbGljZWRQb3N0cyk7XG4gICAgc2V0UG9zdHNUb1Nob3coYXJyYXlGb3JIb2xkaW5nUG9zdHMpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNob3dNb3JlUG9zdHMgPSAoKSA9PiB7XG4gICAgbG9vcFdpdGhTbGljZShuZXh0LCBuZXh0ICsgcG9zdHNQZXJQYWdlKTtcbiAgICBzZXROZXh0KG5leHQgKyBwb3N0c1BlclBhZ2UpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByaWNlTGV2ZWwgPSAoZGF0YSkgPT4ge1xuICAgIGxldCBzZXRQcmljZUxldmVsID0gW11cbiAgICBsZXQgaiA9IDBcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBkYXRhLnByaWNlTGV2ZWw7IGkrKykge1xuICAgICAgc2V0UHJpY2VMZXZlbC5wdXNoKDxzcGFuIGtleT17an0gc3R5bGU9e3tjb2xvcjogJyMyMjIyMjInfX0+4Li/PC9zcGFuPilcbiAgICAgIGorK1xuICAgIH1cbiAgICBpZiAoZGF0YS5wcmljZUxldmVsID09PSA0KSB7XG4gICAgICByZXR1cm4gc2V0UHJpY2VMZXZlbFxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCA0IC0gZGF0YS5wcmljZUxldmVsOyBpKyspIHtcbiAgICAgIHNldFByaWNlTGV2ZWwucHVzaCg8c3BhbiBrZXk9e2p9IHN0eWxlPXt7Y29sb3I6ICcjYmJiYmJiJ319PuC4vzwvc3Bhbj4pXG4gICAgICBqKytcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXRQcmljZUxldmVsXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2V0RmFjSWNvbiA9IChkYXRhKSA9PiB7XG4gICAgbGV0IHNldEZhY0ljb24gPSBbXVxuICAgIGRhdGEubWFwKChpdGVtICxpbmRleCkgPT4ge1xuICAgICAgaWYgKGl0ZW0gPT09IFwi4LiX4Li14LmI4LiI4Lit4LiU4Lij4LiWXCIpIHtcbiAgICAgICAgc2V0RmFjSWNvbi5wdXNoKFxuICAgICAgICAgIDxUb29sdGlwIGtleT17aW5kZXh9IHRpdGxlPXtpdGVtfT48ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXRpZXMtaWNvblwiPlxuICAgICAgICAgICAgICA8RmFDYXJTaWRlLz5cbiAgICAgICAgICAgIDwvZGl2PjwvVG9vbHRpcD4pXG4gICAgICB9ZWxzZSBpZiAoaXRlbSA9PT0gXCLguKrguLLguKHguLLguKPguJbguJnguLPguKrguLHguJXguKfguYzguYDguKXguLXguYnguKLguIfguYDguILguYnguLLguYTguJTguYlcIikge1xuICAgICAgICBzZXRGYWNJY29uLnB1c2goPFRvb2x0aXAga2V5PXtpbmRleH0gdGl0bGU9e2l0ZW19PjxkaXYgY2xhc3NOYW1lPVwiZmFjaWxpdGllcy1pY29uXCI+XG4gICAgICAgICAgICAgIDxNZFBldHMvPlxuICAgICAgICAgICAgPC9kaXY+PC9Ub29sdGlwPilcbiAgICAgIH1lbHNlIGlmIChpdGVtID09PSBcIuC4o+C4seC4muC4iOC4reC4h+C4peC5iOC4p+C4h+C4q+C4meC5ieC4slwiKSB7XG4gICAgICAgIHNldEZhY0ljb24ucHVzaCg8VG9vbHRpcCBrZXk9e2luZGV4fSB0aXRsZT17aXRlbX0+PGRpdiBjbGFzc05hbWU9XCJmYWNpbGl0aWVzLWljb25cIj5cbiAgICAgICAgICAgICAgPFJpRmlsZUVkaXRMaW5lLz5cbiAgICAgICAgICAgIDwvZGl2PjwvVG9vbHRpcD4pXG4gICAgICB9ZWxzZSBpZiAoaXRlbSA9PT0gXCLguIjguLPguKvguJnguYjguLLguKLguYDguITguKPguLfguYjguK3guIfguJTguLfguYjguKHguYDguYHguK3guKXguIHguK3guK7guK3guKXguYxcIil7XG4gICAgICAgIHNldEZhY0ljb24ucHVzaCg8VG9vbHRpcCBrZXk9e2luZGV4fSB0aXRsZT17aXRlbX0+PGRpdiBjbGFzc05hbWU9XCJmYWNpbGl0aWVzLWljb25cIj5cbiAgICAgICAgICAgICAgPEZhQmVlci8+XG4gICAgICAgICAgICA8L2Rpdj48L1Rvb2x0aXA+KVxuICAgICAgfWVsc2UgaWYgKGl0ZW0gPT09IFwi4Lia4Lij4Li04LiB4Liy4Lij4LiI4Lix4LiU4Liq4LmI4LiH4Lit4Liy4Lir4Liy4LijXCIpe1xuICAgICAgICBzZXRGYWNJY29uLnB1c2goPFRvb2x0aXAga2V5PXtpbmRleH0gdGl0bGU9e2l0ZW19PjxkaXYgY2xhc3NOYW1lPVwiZmFjaWxpdGllcy1pY29uXCI+XG4gICAgICAgICAgICAgIDxSaUVCaWtlMkZpbGwvPlxuICAgICAgICAgICAgPC9kaXY+PC9Ub29sdGlwPilcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBzZXRGYWNJY29uXG4gIH1cblxuICBjb25zdCBzZXRUYWdDb2xvciA9ICh2YWx1ZSkgPT4ge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgXCJOXCI6XG4gICAgICAgIHJldHVybiBcInRhZy1zdGF0dXMgYmxhY2tcIlxuICAgICAgY2FzZSBcIllcIjpcbiAgICAgICAgcmV0dXJuIFwidGFnLXN0YXR1c1wiXG4gICAgICBjYXNlIFwiTi9BXCI6IFxuICAgICAgICByZXR1cm4gXCJoaWRkZW5cIlxuICAgIFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiaGlkZGVuXCJcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZXRUYWdOYW1lID0gKHZhbHVlKSA9PiB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSBcIk5cIjpcbiAgICAgICAgcmV0dXJuIFwi4Lib4Li04LiU4LmB4Lil4LmJ4LinXCJcbiAgICAgIGNhc2UgXCJZXCI6XG4gICAgICAgIHJldHVybiBcIuC5gOC4m+C4tOC4lOC4reC4ouC4ueC5iFwiXG4gICAgICBjYXNlIFwiTi9BXCI6IFxuICAgICAgICByZXR1cm4gXCJcIlxuICAgIFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiXCJcbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPHJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNob3BDYXJkU3R5bGVkID5cbiAgICAgIHsgcG9zdHNUb1Nob3cuZmlsdGVyKChkYXRhKT0+e1xuICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJzZWFyY2hcIiwgcHJvcHMuc2V0U2VhcmNoUHJvdmluY2UgLCBwcm9wcy5zZXRTZWFyY2hUaXRsZSAsIHByb3BzLnNldFNlYXJjaFN1YkNhdGVnb3J5ICwgcHJvcHMuc2V0U2VhcmNoVGl0bGVOYW1lICwgcHJvcHMuc2V0U2VhcmNoUHJpY2VMZXZlbCk7XG4gICAgICAgIGlmIChwcm9wcy5zZXRTZWFyY2hUaXRsZU5hbWUgPT09IFwiXCIgJiYgKHByb3BzLnNldFNlYXJjaFByb3ZpbmNlID09PSBcIuC4nuC4t+C5ieC4meC4l+C4teC5iOC5g+C4geC4peC5ieC4ieC4seC4mVwiIHx8IHByb3BzLnNldFNlYXJjaFByb3ZpbmNlID09PSBcIuC4quC4luC4suC4meC4l+C4teC5iOC4l+C4seC5ieC4h+C4q+C4oeC4lFwiKSAmJiBwcm9wcy5zZXRTZWFyY2hTdWJDYXRlZ29yeSA9PT0gXCLguJfguLHguYnguIfguKvguKHguJRcIiAmJiBwcm9wcy5zZXRTZWFyY2hQcmljZUxldmVsID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgZWxzZSBpZiAoZGF0YS5zaG9wTmFtZVRILmluY2x1ZGVzKHByb3BzLnNldFNlYXJjaFRpdGxlTmFtZSkgJiYgKHByb3BzLnNldFNlYXJjaFByb3ZpbmNlID09PSBcIuC4nuC4t+C5ieC4meC4l+C4teC5iOC5g+C4geC4peC5ieC4ieC4seC4mVwiIHx8IHByb3BzLnNldFNlYXJjaFByb3ZpbmNlID09PSBcIuC4quC4luC4suC4meC4l+C4teC5iOC4l+C4seC5ieC4h+C4q+C4oeC4lFwiKSAmJiBwcm9wcy5zZXRTZWFyY2hTdWJDYXRlZ29yeSA9PT0gXCLguJfguLHguYnguIfguKvguKHguJRcIiAmJiBwcm9wcy5zZXRTZWFyY2hQcmljZUxldmVsID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgZWxzZSBpZiAocHJvcHMuc2V0U2VhcmNoVGl0bGVOYW1lID09PSBcIlwiICYmIGRhdGEuYWRkcmVzc1Byb3ZpbmNlTmFtZS5pbmNsdWRlcyhwcm9wcy5zZXRTZWFyY2hQcm92aW5jZSkgJiYgcHJvcHMuc2V0U2VhcmNoU3ViQ2F0ZWdvcnkgPT09IFwi4LiX4Lix4LmJ4LiH4Lir4Lih4LiUXCIgJiYgcHJvcHMuc2V0U2VhcmNoUHJpY2VMZXZlbCA9PT0gMCApXG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICBlbHNlIGlmIChwcm9wcy5zZXRTZWFyY2hUaXRsZU5hbWUgPT09IFwiXCIgJiYgKHByb3BzLnNldFNlYXJjaFByb3ZpbmNlID09PSBcIuC4nuC4t+C5ieC4meC4l+C4teC5iOC5g+C4geC4peC5ieC4ieC4seC4mVwiIHx8IHByb3BzLnNldFNlYXJjaFByb3ZpbmNlID09PSBcIuC4quC4luC4suC4meC4l+C4teC5iOC4l+C4seC5ieC4h+C4q+C4oeC4lFwiKSAmJiBkYXRhLnN1YmNhdGVnb3J5TmFtZS5pbmNsdWRlcyhwcm9wcy5zZXRTZWFyY2hTdWJDYXRlZ29yeSkgJiYgcHJvcHMuc2V0U2VhcmNoUHJpY2VMZXZlbCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgIGVsc2UgaWYocHJvcHMuc2V0U2VhcmNoVGl0bGVOYW1lID09PSBcIlwiICYmIChwcm9wcy5zZXRTZWFyY2hQcm92aW5jZSA9PT0gXCLguJ7guLfguYnguJnguJfguLXguYjguYPguIHguKXguYnguInguLHguJlcIiB8fCBwcm9wcy5zZXRTZWFyY2hQcm92aW5jZSA9PT0gXCLguKrguJbguLLguJnguJfguLXguYjguJfguLHguYnguIfguKvguKHguJRcIikgJiYgcHJvcHMuc2V0U2VhcmNoU3ViQ2F0ZWdvcnkgPT09IFwi4LiX4Lix4LmJ4LiH4Lir4Lih4LiUXCIgJiYgZGF0YS5wcmljZUxldmVsID09PSBwcm9wcy5zZXRTZWFyY2hQcmljZUxldmVsIClcbiAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgIGVsc2UgaWYgKHByb3BzLnNldFNlYXJjaFRpdGxlTmFtZSA9PT0gXCJcIiAmJiAocHJvcHMuc2V0U2VhcmNoUHJvdmluY2UgPT09IFwi4Lie4Li34LmJ4LiZ4LiX4Li14LmI4LmD4LiB4Lil4LmJ4LiJ4Lix4LiZXCIgfHwgcHJvcHMuc2V0U2VhcmNoUHJvdmluY2UgPT09IFwi4Liq4LiW4Liy4LiZ4LiX4Li14LmI4LiX4Lix4LmJ4LiH4Lir4Lih4LiUXCIpICYmIHByb3BzLnNldFNlYXJjaFN1YkNhdGVnb3J5ID09PSBcIuC4l+C4seC5ieC4h+C4q+C4oeC4lFwiICYmIHByb3BzLnNldFNlYXJjaFByaWNlTGV2ZWwgPT09IDApXG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSkubWFwKChkYXRhLCBpbmRleCkgPT4gXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwic2hvcC1jYXJkXCI+IFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9faW1hZ2V3cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2ltYWdlXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ZGF0YS5jb3ZlckltYWdlSWR9KWB9fSA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9fYm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX190aXRsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2xhYmVsXCI+XG4gICAgICAgICAgICAgIHsgZGF0YS5zaG9wTmFtZVRIIH1cbiAgICAgICAgICA8VGFnICBjbGFzc05hbWU9e3NldFRhZ0NvbG9yKGRhdGEuaXNPcGVuKX0gPiB7c2V0VGFnTmFtZShkYXRhLmlzT3Blbil9IDwvVGFnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2luZm9cIj5cbiAgICAgICAgICAgIHsgZGF0YS5zdWJjYXRlZ29yeU5hbWUgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGFzaFwiPnw8L2Rpdj5cbiAgICAgICAgICAgIHtjcmVhdGVQcmljZUxldmVsKGRhdGEpfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGFzaFwiPnw8L2Rpdj5cbiAgICAgICAgICAgIHsgZGF0YS5hZGRyZXNzRGlzdHJpY3ROYW1lIH0geyBkYXRhLmFkZHJlc3NQcm92aW5jZU5hbWUgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX19kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2hpZ2hsaWdodFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBkYXRhLmhpZ2hsaWdodFRleHR9fT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9fcmVjb21tYW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29tbWFuZC10aXRsZVwiPuC5gOC4oeC4meC4ueC5geC4meC4sOC4meC4szwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNvbW1hbmQtbGFiZWxcIj57ZGF0YS5yZWNvbW1lbmRlZEl0ZW1zLmpvaW4oXCIgLCBcIil9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2ZhY2lsaXRpZXNcIj5cbiAgICAgICAgICAgIHtzZXRGYWNJY29uKGRhdGEuZmFjaWxpdGllcyl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInNlZS1tb3JlXCIgb25DbGljaz17aGFuZGxlU2hvd01vcmVQb3N0c30+4LiU4Li54LmA4Lie4Li04LmI4Lih4LmA4LiV4Li04LihPC9CdXR0b24+XG5cblxuICAgICAgPC9TaG9wQ2FyZFN0eWxlZD5cbiAgICA8L3JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcENhcmRDb250YWluZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==