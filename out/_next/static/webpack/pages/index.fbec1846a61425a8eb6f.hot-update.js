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
  }, [props]);

  var fetchPosts = function fetchPosts() {
    var param = props.merchant;
    setMerchants(param.merchants);
  };

  var loopWithSlice = function loopWithSlice(start, end) {
    var slicedPosts = posts.slice(start, end);
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
      children: [merchants.filter(function (data) {
        // console.log( "search", props.setSearchProvince , props.setSearchTitle , props.setSearchSubCategory , props.setSearchTitleName , props.setSearchPriceLevel);
        if (props.setSearchTitleName === "" && (props.setSearchProvince === "พื้นที่ใกล้ฉัน" || props.setSearchProvince === "สถานที่ทั้งหมด") && props.setSearchSubCategory === "ทั้งหมด" && props.setSearchPriceLevel === 0) return data;else if (data.shopNameTH.includes(props.setSearchTitleName) && (props.setSearchProvince === "พื้นที่ใกล้ฉัน" || props.setSearchProvince === "สถานที่ทั้งหมด") && props.setSearchSubCategory === "ทั้งหมด" && props.setSearchPriceLevel === 0) return data;else if (props.setSearchTitleName === "" && data.addressProvinceName.includes(props.setSearchProvince) && props.setSearchSubCategory === "ทั้งหมด" && props.setSearchPriceLevel === 0) return data;else if (props.setSearchTitleName === "" && (props.setSearchProvince === "พื้นที่ใกล้ฉัน" || props.setSearchProvince === "สถานที่ทั้งหมด") && data.subcategoryName.includes(props.setSearchSubCategory) && props.setSearchPriceLevel === 0) return data;else if (props.setSearchTitleName === "" && (props.setSearchProvince === "พื้นที่ใกล้ฉัน" || props.setSearchProvince === "สถานที่ทั้งหมด") && props.setSearchSubCategory === "ทั้งหมด" && data.priceLevel === props.setSearchPriceLevel) return data;else if (props.setSearchTitleName === "" && (props.setSearchProvince === "พื้นที่ใกล้ฉัน" || props.setSearchProvince === "สถานที่ทั้งหมด") && props.setSearchSubCategory === "ทั้งหมด" && props.setSearchPriceLevel === 0) return data;
      }).map(function (data, index) {
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
              lineNumber: 142,
              columnNumber: 11
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
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
                  lineNumber: 149,
                  columnNumber: 11
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "shop-card__info",
              children: [data.subcategoryName, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "slash",
                children: "|"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 13
              }, _this), createPriceLevel(data), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "slash",
                children: "|"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 13
              }, _this), data.addressDistrictName, " ", data.addressProvinceName]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "shop-card__divider"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "shop-card__highlight",
              dangerouslySetInnerHTML: {
                __html: data.highlightText
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "shop-card__recommand",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "recommand-title",
                children: "\u0E40\u0E21\u0E19\u0E39\u0E41\u0E19\u0E30\u0E19\u0E33"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 13
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "recommand-label",
                children: data.recommendedItems.join(" , ")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 13
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "shop-card__facilities",
              children: setFacIcon(data.facilities)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 11
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 9
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 9
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        className: "see-more",
        children: "\u0E14\u0E39\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2hvcGNhcmQvaW5kZXguanMiXSwibmFtZXMiOlsiU2hvcENhcmRDb250YWluZXIiLCJtYXRjaCIsInByb3BzIiwidXNlU3RhdGUiLCJtZXJjaGFudHMiLCJzZXRNZXJjaGFudHMiLCJwb3N0c1RvU2hvdyIsInNldFBvc3RzVG9TaG93IiwibmV4dCIsInNldE5leHQiLCJwb3N0c1BlclBhZ2UiLCJhcnJheUZvckhvbGRpbmdQb3N0cyIsInVzZUVmZmVjdCIsImZldGNoUG9zdHMiLCJsb29wV2l0aFNsaWNlIiwicGFyYW0iLCJtZXJjaGFudCIsInN0YXJ0IiwiZW5kIiwic2xpY2VkUG9zdHMiLCJwb3N0cyIsInNsaWNlIiwiaGFuZGxlU2hvd01vcmVQb3N0cyIsImNyZWF0ZVByaWNlTGV2ZWwiLCJkYXRhIiwic2V0UHJpY2VMZXZlbCIsImoiLCJpIiwicHJpY2VMZXZlbCIsInB1c2giLCJjb2xvciIsInNldEZhY0ljb24iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzZXRUYWdDb2xvciIsInZhbHVlIiwic2V0VGFnTmFtZSIsImZpbHRlciIsInNldFNlYXJjaFRpdGxlTmFtZSIsInNldFNlYXJjaFByb3ZpbmNlIiwic2V0U2VhcmNoU3ViQ2F0ZWdvcnkiLCJzZXRTZWFyY2hQcmljZUxldmVsIiwic2hvcE5hbWVUSCIsImluY2x1ZGVzIiwiYWRkcmVzc1Byb3ZpbmNlTmFtZSIsInN1YmNhdGVnb3J5TmFtZSIsImJhY2tncm91bmRJbWFnZSIsImNvdmVySW1hZ2VJZCIsImlzT3BlbiIsImFkZHJlc3NEaXN0cmljdE5hbWUiLCJfX2h0bWwiLCJoaWdobGlnaHRUZXh0IiwicmVjb21tZW5kZWRJdGVtcyIsImpvaW4iLCJmYWNpbGl0aWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQSxJQUFNQSxpQkFB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QUFBQTtBQUFBO0FBQUEscUJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMQTtBQUFBLFdBQVVyQixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREs7QUFBQSxPQWRMLENBREYsZUFnREEscUVBQUMsMkNBQUQ7QUFBUSxpQkFBUyxFQUFDLFVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdERCxDQW5LRDs7R0FBTWxDLGlCOztLQUFBQSxpQjtBQXFLU0EsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmJlYzE4NDZhNjE0MjVhOGViNmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBTaG9wQ2FyZFN0eWxlZFxufSBmcm9tICcuL3N0eWxlZCdcblxuaW1wb3J0IHsgQnV0dG9uLCBUYWcgLCBUb29sdGlwICB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgRmFCZWVyICwgRmFDYXJTaWRlfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyBSaUZpbGVFZGl0TGluZSAsIFJpRUJpa2UyRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcbmltcG9ydCB7IE1kUGV0cyB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmltcG9ydCByZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuXG5cblxuY29uc3QgU2hvcENhcmRDb250YWluZXIgPSAoeyBtYXRjaCwgLi4ucHJvcHMgfSkgPT4ge1xuXG4gIGNvbnN0IFttZXJjaGFudHMsIHNldE1lcmNoYW50c10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW3Bvc3RzVG9TaG93LCBzZXRQb3N0c1RvU2hvd10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtuZXh0LCBzZXROZXh0XSA9IHVzZVN0YXRlKDMpO1xuXG4gIGNvbnN0IHBvc3RzUGVyUGFnZSA9IDM7XG4gIGxldCBhcnJheUZvckhvbGRpbmdQb3N0cyA9IFtdOyAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFBvc3RzKCk7XG4gICAgbG9vcFdpdGhTbGljZSgwLCBwb3N0c1BlclBhZ2UpO1xuICAgIFxuICB9LCBbcHJvcHNdKTtcblxuICBjb25zdCBmZXRjaFBvc3RzID0gKCkgPT4ge1xuICAgIGxldCBwYXJhbSA9IHByb3BzLm1lcmNoYW50O1xuICAgIHNldE1lcmNoYW50cyhwYXJhbS5tZXJjaGFudHMpO1xuICB9O1xuXG4gIGNvbnN0IGxvb3BXaXRoU2xpY2UgPSAoc3RhcnQsIGVuZCkgPT4ge1xuICAgIGNvbnN0IHNsaWNlZFBvc3RzID0gcG9zdHMuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgYXJyYXlGb3JIb2xkaW5nUG9zdHMgPSBbLi4uYXJyYXlGb3JIb2xkaW5nUG9zdHMsIC4uLnNsaWNlZFBvc3RzXTtcbiAgICBzZXRQb3N0c1RvU2hvdyhhcnJheUZvckhvbGRpbmdQb3N0cyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2hvd01vcmVQb3N0cyA9ICgpID0+IHtcbiAgICBsb29wV2l0aFNsaWNlKG5leHQsIG5leHQgKyBwb3N0c1BlclBhZ2UpO1xuICAgIHNldE5leHQobmV4dCArIHBvc3RzUGVyUGFnZSk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJpY2VMZXZlbCA9IChkYXRhKSA9PiB7XG4gICAgbGV0IHNldFByaWNlTGV2ZWwgPSBbXVxuICAgIGxldCBqID0gMFxuICAgIGZvciAobGV0IGk9MDsgaSA8IGRhdGEucHJpY2VMZXZlbDsgaSsrKSB7XG4gICAgICBzZXRQcmljZUxldmVsLnB1c2goPHNwYW4ga2V5PXtqfSBzdHlsZT17e2NvbG9yOiAnIzIyMjIyMid9fT7guL88L3NwYW4+KVxuICAgICAgaisrXG4gICAgfVxuICAgIGlmIChkYXRhLnByaWNlTGV2ZWwgPT09IDQpIHtcbiAgICAgIHJldHVybiBzZXRQcmljZUxldmVsXG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IDQgLSBkYXRhLnByaWNlTGV2ZWw7IGkrKykge1xuICAgICAgc2V0UHJpY2VMZXZlbC5wdXNoKDxzcGFuIGtleT17an0gc3R5bGU9e3tjb2xvcjogJyNiYmJiYmInfX0+4Li/PC9zcGFuPilcbiAgICAgIGorK1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNldFByaWNlTGV2ZWxcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZXRGYWNJY29uID0gKGRhdGEpID0+IHtcbiAgICBsZXQgc2V0RmFjSWNvbiA9IFtdXG4gICAgZGF0YS5tYXAoKGl0ZW0gLGluZGV4KSA9PiB7XG4gICAgICBpZiAoaXRlbSA9PT0gXCLguJfguLXguYjguIjguK3guJTguKPguJZcIikge1xuICAgICAgICBzZXRGYWNJY29uLnB1c2goXG4gICAgICAgICAgPFRvb2x0aXAga2V5PXtpbmRleH0gdGl0bGU9e2l0ZW19PjxkaXYgY2xhc3NOYW1lPVwiZmFjaWxpdGllcy1pY29uXCI+XG4gICAgICAgICAgICAgIDxGYUNhclNpZGUvPlxuICAgICAgICAgICAgPC9kaXY+PC9Ub29sdGlwPilcbiAgICAgIH1lbHNlIGlmIChpdGVtID09PSBcIuC4quC4suC4oeC4suC4o+C4luC4meC4s+C4quC4seC4leC4p+C5jOC5gOC4peC4teC5ieC4ouC4h+C5gOC4guC5ieC4suC5hOC4lOC5iVwiKSB7XG4gICAgICAgIHNldEZhY0ljb24ucHVzaCg8VG9vbHRpcCBrZXk9e2luZGV4fSB0aXRsZT17aXRlbX0+PGRpdiBjbGFzc05hbWU9XCJmYWNpbGl0aWVzLWljb25cIj5cbiAgICAgICAgICAgICAgPE1kUGV0cy8+XG4gICAgICAgICAgICA8L2Rpdj48L1Rvb2x0aXA+KVxuICAgICAgfWVsc2UgaWYgKGl0ZW0gPT09IFwi4Lij4Lix4Lia4LiI4Lit4LiH4Lil4LmI4Lin4LiH4Lir4LiZ4LmJ4LiyXCIpIHtcbiAgICAgICAgc2V0RmFjSWNvbi5wdXNoKDxUb29sdGlwIGtleT17aW5kZXh9IHRpdGxlPXtpdGVtfT48ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXRpZXMtaWNvblwiPlxuICAgICAgICAgICAgICA8UmlGaWxlRWRpdExpbmUvPlxuICAgICAgICAgICAgPC9kaXY+PC9Ub29sdGlwPilcbiAgICAgIH1lbHNlIGlmIChpdGVtID09PSBcIuC4iOC4s+C4q+C4meC5iOC4suC4ouC5gOC4hOC4o+C4t+C5iOC4reC4h+C4lOC4t+C5iOC4oeC5gOC5geC4reC4peC4geC4reC4ruC4reC4peC5jFwiKXtcbiAgICAgICAgc2V0RmFjSWNvbi5wdXNoKDxUb29sdGlwIGtleT17aW5kZXh9IHRpdGxlPXtpdGVtfT48ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXRpZXMtaWNvblwiPlxuICAgICAgICAgICAgICA8RmFCZWVyLz5cbiAgICAgICAgICAgIDwvZGl2PjwvVG9vbHRpcD4pXG4gICAgICB9ZWxzZSBpZiAoaXRlbSA9PT0gXCLguJrguKPguLTguIHguLLguKPguIjguLHguJTguKrguYjguIfguK3guLLguKvguLLguKNcIil7XG4gICAgICAgIHNldEZhY0ljb24ucHVzaCg8VG9vbHRpcCBrZXk9e2luZGV4fSB0aXRsZT17aXRlbX0+PGRpdiBjbGFzc05hbWU9XCJmYWNpbGl0aWVzLWljb25cIj5cbiAgICAgICAgICAgICAgPFJpRUJpa2UyRmlsbC8+XG4gICAgICAgICAgICA8L2Rpdj48L1Rvb2x0aXA+KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHNldEZhY0ljb25cbiAgfVxuXG4gIGNvbnN0IHNldFRhZ0NvbG9yID0gKHZhbHVlKSA9PiB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSBcIk5cIjpcbiAgICAgICAgcmV0dXJuIFwidGFnLXN0YXR1cyBibGFja1wiXG4gICAgICBjYXNlIFwiWVwiOlxuICAgICAgICByZXR1cm4gXCJ0YWctc3RhdHVzXCJcbiAgICAgIGNhc2UgXCJOL0FcIjogXG4gICAgICAgIHJldHVybiBcImhpZGRlblwiXG4gICAgXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJoaWRkZW5cIlxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNldFRhZ05hbWUgPSAodmFsdWUpID0+IHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlIFwiTlwiOlxuICAgICAgICByZXR1cm4gXCLguJvguLTguJTguYHguKXguYnguKdcIlxuICAgICAgY2FzZSBcIllcIjpcbiAgICAgICAgcmV0dXJuIFwi4LmA4Lib4Li04LiU4Lit4Lii4Li54LmIXCJcbiAgICAgIGNhc2UgXCJOL0FcIjogXG4gICAgICAgIHJldHVybiBcIlwiXG4gICAgXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJcIlxuICAgIH1cbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8cmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8U2hvcENhcmRTdHlsZWQgPlxuICAgICAgeyBtZXJjaGFudHMuZmlsdGVyKChkYXRhKT0+e1xuICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJzZWFyY2hcIiwgcHJvcHMuc2V0U2VhcmNoUHJvdmluY2UgLCBwcm9wcy5zZXRTZWFyY2hUaXRsZSAsIHByb3BzLnNldFNlYXJjaFN1YkNhdGVnb3J5ICwgcHJvcHMuc2V0U2VhcmNoVGl0bGVOYW1lICwgcHJvcHMuc2V0U2VhcmNoUHJpY2VMZXZlbCk7XG4gICAgICAgIGlmIChwcm9wcy5zZXRTZWFyY2hUaXRsZU5hbWUgPT09IFwiXCIgJiYgKHByb3BzLnNldFNlYXJjaFByb3ZpbmNlID09PSBcIuC4nuC4t+C5ieC4meC4l+C4teC5iOC5g+C4geC4peC5ieC4ieC4seC4mVwiIHx8IHByb3BzLnNldFNlYXJjaFByb3ZpbmNlID09PSBcIuC4quC4luC4suC4meC4l+C4teC5iOC4l+C4seC5ieC4h+C4q+C4oeC4lFwiKSAmJiBwcm9wcy5zZXRTZWFyY2hTdWJDYXRlZ29yeSA9PT0gXCLguJfguLHguYnguIfguKvguKHguJRcIiAmJiBwcm9wcy5zZXRTZWFyY2hQcmljZUxldmVsID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgZWxzZSBpZiAoZGF0YS5zaG9wTmFtZVRILmluY2x1ZGVzKHByb3BzLnNldFNlYXJjaFRpdGxlTmFtZSkgJiYgKHByb3BzLnNldFNlYXJjaFByb3ZpbmNlID09PSBcIuC4nuC4t+C5ieC4meC4l+C4teC5iOC5g+C4geC4peC5ieC4ieC4seC4mVwiIHx8IHByb3BzLnNldFNlYXJjaFByb3ZpbmNlID09PSBcIuC4quC4luC4suC4meC4l+C4teC5iOC4l+C4seC5ieC4h+C4q+C4oeC4lFwiKSAmJiBwcm9wcy5zZXRTZWFyY2hTdWJDYXRlZ29yeSA9PT0gXCLguJfguLHguYnguIfguKvguKHguJRcIiAmJiBwcm9wcy5zZXRTZWFyY2hQcmljZUxldmVsID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgZWxzZSBpZiAocHJvcHMuc2V0U2VhcmNoVGl0bGVOYW1lID09PSBcIlwiICYmIGRhdGEuYWRkcmVzc1Byb3ZpbmNlTmFtZS5pbmNsdWRlcyhwcm9wcy5zZXRTZWFyY2hQcm92aW5jZSkgJiYgcHJvcHMuc2V0U2VhcmNoU3ViQ2F0ZWdvcnkgPT09IFwi4LiX4Lix4LmJ4LiH4Lir4Lih4LiUXCIgJiYgcHJvcHMuc2V0U2VhcmNoUHJpY2VMZXZlbCA9PT0gMCApXG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICBlbHNlIGlmIChwcm9wcy5zZXRTZWFyY2hUaXRsZU5hbWUgPT09IFwiXCIgJiYgKHByb3BzLnNldFNlYXJjaFByb3ZpbmNlID09PSBcIuC4nuC4t+C5ieC4meC4l+C4teC5iOC5g+C4geC4peC5ieC4ieC4seC4mVwiIHx8IHByb3BzLnNldFNlYXJjaFByb3ZpbmNlID09PSBcIuC4quC4luC4suC4meC4l+C4teC5iOC4l+C4seC5ieC4h+C4q+C4oeC4lFwiKSAmJiBkYXRhLnN1YmNhdGVnb3J5TmFtZS5pbmNsdWRlcyhwcm9wcy5zZXRTZWFyY2hTdWJDYXRlZ29yeSkgJiYgcHJvcHMuc2V0U2VhcmNoUHJpY2VMZXZlbCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgIGVsc2UgaWYocHJvcHMuc2V0U2VhcmNoVGl0bGVOYW1lID09PSBcIlwiICYmIChwcm9wcy5zZXRTZWFyY2hQcm92aW5jZSA9PT0gXCLguJ7guLfguYnguJnguJfguLXguYjguYPguIHguKXguYnguInguLHguJlcIiB8fCBwcm9wcy5zZXRTZWFyY2hQcm92aW5jZSA9PT0gXCLguKrguJbguLLguJnguJfguLXguYjguJfguLHguYnguIfguKvguKHguJRcIikgJiYgcHJvcHMuc2V0U2VhcmNoU3ViQ2F0ZWdvcnkgPT09IFwi4LiX4Lix4LmJ4LiH4Lir4Lih4LiUXCIgJiYgZGF0YS5wcmljZUxldmVsID09PSBwcm9wcy5zZXRTZWFyY2hQcmljZUxldmVsIClcbiAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgIGVsc2UgaWYgKHByb3BzLnNldFNlYXJjaFRpdGxlTmFtZSA9PT0gXCJcIiAmJiAocHJvcHMuc2V0U2VhcmNoUHJvdmluY2UgPT09IFwi4Lie4Li34LmJ4LiZ4LiX4Li14LmI4LmD4LiB4Lil4LmJ4LiJ4Lix4LiZXCIgfHwgcHJvcHMuc2V0U2VhcmNoUHJvdmluY2UgPT09IFwi4Liq4LiW4Liy4LiZ4LiX4Li14LmI4LiX4Lix4LmJ4LiH4Lir4Lih4LiUXCIpICYmIHByb3BzLnNldFNlYXJjaFN1YkNhdGVnb3J5ID09PSBcIuC4l+C4seC5ieC4h+C4q+C4oeC4lFwiICYmIHByb3BzLnNldFNlYXJjaFByaWNlTGV2ZWwgPT09IDApXG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSkubWFwKChkYXRhLCBpbmRleCkgPT4gXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwic2hvcC1jYXJkXCI+IFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9faW1hZ2V3cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2ltYWdlXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ZGF0YS5jb3ZlckltYWdlSWR9KWB9fSA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9fYm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX190aXRsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2xhYmVsXCI+XG4gICAgICAgICAgICAgIHsgZGF0YS5zaG9wTmFtZVRIIH1cbiAgICAgICAgICA8VGFnICBjbGFzc05hbWU9e3NldFRhZ0NvbG9yKGRhdGEuaXNPcGVuKX0gPiB7c2V0VGFnTmFtZShkYXRhLmlzT3Blbil9IDwvVGFnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2luZm9cIj5cbiAgICAgICAgICAgIHsgZGF0YS5zdWJjYXRlZ29yeU5hbWUgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGFzaFwiPnw8L2Rpdj5cbiAgICAgICAgICAgIHtjcmVhdGVQcmljZUxldmVsKGRhdGEpfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGFzaFwiPnw8L2Rpdj5cbiAgICAgICAgICAgIHsgZGF0YS5hZGRyZXNzRGlzdHJpY3ROYW1lIH0geyBkYXRhLmFkZHJlc3NQcm92aW5jZU5hbWUgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX19kaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2hpZ2hsaWdodFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBkYXRhLmhpZ2hsaWdodFRleHR9fT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9fcmVjb21tYW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29tbWFuZC10aXRsZVwiPuC5gOC4oeC4meC4ueC5geC4meC4sOC4meC4szwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNvbW1hbmQtbGFiZWxcIj57ZGF0YS5yZWNvbW1lbmRlZEl0ZW1zLmpvaW4oXCIgLCBcIil9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2ZhY2lsaXRpZXNcIj5cbiAgICAgICAgICAgIHtzZXRGYWNJY29uKGRhdGEuZmFjaWxpdGllcyl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInNlZS1tb3JlXCI+4LiU4Li54LmA4Lie4Li04LmI4Lih4LmA4LiV4Li04LihPC9CdXR0b24+XG5cblxuICAgICAgPC9TaG9wQ2FyZFN0eWxlZD5cbiAgICA8L3JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcENhcmRDb250YWluZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==