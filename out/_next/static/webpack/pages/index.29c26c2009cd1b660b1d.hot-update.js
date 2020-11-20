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









var ShopCardContainer = function ShopCardContainer(_ref) {
  _s();

  var match = _ref.match,
      props = Object(C_Users_nom_n_YWC18Homework_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["match"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      merchants = _useState[0],
      setMerchants = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetchPosts();
  }, []);

  var fetchPosts = function fetchPosts() {
    var param = props.merchant;
    setMerchants(param.merchants);
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
        lineNumber: 33,
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
          lineNumber: 40,
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
              lineNumber: 53,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 45
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this));
      } else if (item === "สามารถนำสัตว์เลี้ยงเข้าได้") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdPets"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }, _this));
      } else if (item === "รับจองล่วงหน้า") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__["RiFileEditLine"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 25
        }, _this));
      } else if (item === "จำหน่ายเครื่องดื่มเแอลกอฮอล์") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaBeer"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 25
        }, _this));
      } else if (item === "บริการจัดส่งอาหาร") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__["RiEBike2Fill"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
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
      children: [merchants.filter(function (data) {
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
              lineNumber: 125,
              columnNumber: 11
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
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
                  lineNumber: 132,
                  columnNumber: 11
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "shop-card__info",
              children: [data.subcategoryName, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "slash",
                children: "|"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 13
              }, _this), createPriceLevel(data), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "slash",
                children: "|"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 13
              }, _this), data.addressDistrictName, " ", data.addressProvinceName]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "shop-card__divider"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "shop-card__highlight",
              dangerouslySetInnerHTML: {
                __html: data.highlightText
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "shop-card__recommand",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "recommand-title",
                children: "\u0E40\u0E21\u0E19\u0E39\u0E41\u0E19\u0E30\u0E19\u0E33"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 13
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "recommand-label",
                children: data.recommendedItems.join(" , ")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 13
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "shop-card__facilities",
              children: setFacIcon(data.facilities)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 11
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 9
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 9
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: "see-more",
        children: "\u0E14\u0E39\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 106,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2hvcGNhcmQvaW5kZXguanMiXSwibmFtZXMiOlsiU2hvcENhcmRDb250YWluZXIiLCJtYXRjaCIsInByb3BzIiwidXNlU3RhdGUiLCJtZXJjaGFudHMiLCJzZXRNZXJjaGFudHMiLCJ1c2VFZmZlY3QiLCJmZXRjaFBvc3RzIiwicGFyYW0iLCJtZXJjaGFudCIsImNyZWF0ZVByaWNlTGV2ZWwiLCJkYXRhIiwic2V0UHJpY2VMZXZlbCIsImoiLCJpIiwicHJpY2VMZXZlbCIsInB1c2giLCJjb2xvciIsInNldEZhY0ljb24iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzZXRUYWdDb2xvciIsInZhbHVlIiwic2V0VGFnTmFtZSIsImZpbHRlciIsInNldFNlYXJjaFRpdGxlTmFtZSIsInNldFNlYXJjaFByb3ZpbmNlIiwic2V0U2VhcmNoU3ViQ2F0ZWdvcnkiLCJzZXRTZWFyY2hQcmljZUxldmVsIiwic2hvcE5hbWVUSCIsImluY2x1ZGVzIiwiYWRkcmVzc1Byb3ZpbmNlTmFtZSIsInN1YmNhdGVnb3J5TmFtZSIsImJhY2tncm91bmRJbWFnZSIsImNvdmVySW1hZ2VJZCIsImlzT3BlbiIsImFkZHJlc3NEaXN0cmljdE5hbWUiLCJfX2h0bWwiLCJoaWdobGlnaHRUZXh0IiwicmVjb21tZW5kZWRJdGVtcyIsImpvaW4iLCJmYWNpbGl0aWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQUF5QjtBQUFBOztBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFaQyxLQUFZOztBQUFBLGtCQUVmQyxzREFBUSxDQUFDLEVBQUQsQ0FGTztBQUFBLE1BRTFDQyxTQUYwQztBQUFBLE1BRS9CQyxZQUYrQjs7QUFJakRDLHlEQUFTLENBQUMs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LHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFoQkYsZUFvQkU7QUFBSyx1QkFBUyxFQUFDLHVCQUFmO0FBQUEsd0JBQ0d2QixVQUFVLENBQUNQLElBQUksQ0FBQytCLFVBQU47QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEE7QUFBQSxXQUFVckIsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURLO0FBQUEsT0FkTCxDQURGLGVBZ0RBLHFFQUFDLDJDQUFEO0FBQVEsaUJBQVMsRUFBQyxVQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3REQsQ0FsSkQ7O0dBQU1yQixpQjs7S0FBQUEsaUI7QUFvSlNBLGdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI5YzI2YzIwMDljZDFiNjYwYjFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgU2hvcENhcmRTdHlsZWRcbn0gZnJvbSAnLi9zdHlsZWQnXG5cbmltcG9ydCB7IEJ1dHRvbiwgVGFnICwgVG9vbHRpcCAgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IEZhQmVlciAsIEZhQ2FyU2lkZX0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgUmlGaWxlRWRpdExpbmUgLCBSaUVCaWtlMkZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9yaSc7XG5pbXBvcnQgeyBNZFBldHMgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5pbXBvcnQgcmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cblxuXG5cbmNvbnN0IFNob3BDYXJkQ29udGFpbmVyID0gKHsgbWF0Y2gsIC4uLnByb3BzIH0pID0+IHtcblxuICBjb25zdCBbbWVyY2hhbnRzLCBzZXRNZXJjaGFudHNdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFBvc3RzKCk7XG4gICAgXG4gIH0sIFtdKTtcblxuICBjb25zdCBmZXRjaFBvc3RzID0gKCkgPT4ge1xuICAgIGxldCBwYXJhbSA9IHByb3BzLm1lcmNoYW50O1xuICAgIHNldE1lcmNoYW50cyhwYXJhbS5tZXJjaGFudHMpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByaWNlTGV2ZWwgPSAoZGF0YSkgPT4ge1xuICAgIGxldCBzZXRQcmljZUxldmVsID0gW11cbiAgICBsZXQgaiA9IDBcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBkYXRhLnByaWNlTGV2ZWw7IGkrKykge1xuICAgICAgc2V0UHJpY2VMZXZlbC5wdXNoKDxzcGFuIGtleT17an0gc3R5bGU9e3tjb2xvcjogJyMyMjIyMjInfX0+4Li/PC9zcGFuPilcbiAgICAgIGorK1xuICAgIH1cbiAgICBpZiAoZGF0YS5wcmljZUxldmVsID09PSA0KSB7XG4gICAgICByZXR1cm4gc2V0UHJpY2VMZXZlbFxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCA0IC0gZGF0YS5wcmljZUxldmVsOyBpKyspIHtcbiAgICAgIHNldFByaWNlTGV2ZWwucHVzaCg8c3BhbiBrZXk9e2p9IHN0eWxlPXt7Y29sb3I6ICcjYmJiYmJiJ319PuC4vzwvc3Bhbj4pXG4gICAgICBqKytcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXRQcmljZUxldmVsXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2V0RmFjSWNvbiA9IChkYXRhKSA9PiB7XG4gICAgbGV0IHNldEZhY0ljb24gPSBbXVxuICAgIGRhdGEubWFwKChpdGVtICxpbmRleCkgPT4ge1xuICAgICAgaWYgKGl0ZW0gPT09IFwi4LiX4Li14LmI4LiI4Lit4LiU4Lij4LiWXCIpIHtcbiAgICAgICAgc2V0RmFjSWNvbi5wdXNoKFxuICAgICAgICAgIDxUb29sdGlwIGtleT17aW5kZXh9IHRpdGxlPXtpdGVtfT48ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXRpZXMtaWNvblwiPlxuICAgICAgICAgICAgICA8RmFDYXJTaWRlLz5cbiAgICAgICAgICAgIDwvZGl2PjwvVG9vbHRpcD4pXG4gICAgICB9ZWxzZSBpZiAoaXRlbSA9PT0gXCLguKrguLLguKHguLLguKPguJbguJnguLPguKrguLHguJXguKfguYzguYDguKXguLXguYnguKLguIfguYDguILguYnguLLguYTguJTguYlcIikge1xuICAgICAgICBzZXRGYWNJY29uLnB1c2goPFRvb2x0aXAga2V5PXtpbmRleH0gdGl0bGU9e2l0ZW19PjxkaXYgY2xhc3NOYW1lPVwiZmFjaWxpdGllcy1pY29uXCI+XG4gICAgICAgICAgICAgIDxNZFBldHMvPlxuICAgICAgICAgICAgPC9kaXY+PC9Ub29sdGlwPilcbiAgICAgIH1lbHNlIGlmIChpdGVtID09PSBcIuC4o+C4seC4muC4iOC4reC4h+C4peC5iOC4p+C4h+C4q+C4meC5ieC4slwiKSB7XG4gICAgICAgIHNldEZhY0ljb24ucHVzaCg8VG9vbHRpcCBrZXk9e2luZGV4fSB0aXRsZT17aXRlbX0+PGRpdiBjbGFzc05hbWU9XCJmYWNpbGl0aWVzLWljb25cIj5cbiAgICAgICAgICAgICAgPFJpRmlsZUVkaXRMaW5lLz5cbiAgICAgICAgICAgIDwvZGl2PjwvVG9vbHRpcD4pXG4gICAgICB9ZWxzZSBpZiAoaXRlbSA9PT0gXCLguIjguLPguKvguJnguYjguLLguKLguYDguITguKPguLfguYjguK3guIfguJTguLfguYjguKHguYDguYHguK3guKXguIHguK3guK7guK3guKXguYxcIil7XG4gICAgICAgIHNldEZhY0ljb24ucHVzaCg8VG9vbHRpcCBrZXk9e2luZGV4fSB0aXRsZT17aXRlbX0+PGRpdiBjbGFzc05hbWU9XCJmYWNpbGl0aWVzLWljb25cIj5cbiAgICAgICAgICAgICAgPEZhQmVlci8+XG4gICAgICAgICAgICA8L2Rpdj48L1Rvb2x0aXA+KVxuICAgICAgfWVsc2UgaWYgKGl0ZW0gPT09IFwi4Lia4Lij4Li04LiB4Liy4Lij4LiI4Lix4LiU4Liq4LmI4LiH4Lit4Liy4Lir4Liy4LijXCIpe1xuICAgICAgICBzZXRGYWNJY29uLnB1c2goPFRvb2x0aXAga2V5PXtpbmRleH0gdGl0bGU9e2l0ZW19PjxkaXYgY2xhc3NOYW1lPVwiZmFjaWxpdGllcy1pY29uXCI+XG4gICAgICAgICAgICAgIDxSaUVCaWtlMkZpbGwvPlxuICAgICAgICAgICAgPC9kaXY+PC9Ub29sdGlwPilcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBzZXRGYWNJY29uXG4gIH1cblxuICBjb25zdCBzZXRUYWdDb2xvciA9ICh2YWx1ZSkgPT4ge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgXCJOXCI6XG4gICAgICAgIHJldHVybiBcInRhZy1zdGF0dXMgYmxhY2tcIlxuICAgICAgY2FzZSBcIllcIjpcbiAgICAgICAgcmV0dXJuIFwidGFnLXN0YXR1c1wiXG4gICAgICBjYXNlIFwiTi9BXCI6IFxuICAgICAgICByZXR1cm4gXCJoaWRkZW5cIlxuICAgIFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiaGlkZGVuXCJcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZXRUYWdOYW1lID0gKHZhbHVlKSA9PiB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSBcIk5cIjpcbiAgICAgICAgcmV0dXJuIFwi4Lib4Li04LiU4LmB4Lil4LmJ4LinXCJcbiAgICAgIGNhc2UgXCJZXCI6XG4gICAgICAgIHJldHVybiBcIuC5gOC4m+C4tOC4lOC4reC4ouC4ueC5iFwiXG4gICAgICBjYXNlIFwiTi9BXCI6IFxuICAgICAgICByZXR1cm4gXCJcIlxuICAgIFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiXCJcbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPHJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNob3BDYXJkU3R5bGVkID5cbiAgICAgIHsgbWVyY2hhbnRzLmZpbHRlcigoZGF0YSk9PntcbiAgICAgICAgLy8gY29uc29sZS5sb2coIFwic2VhcmNoXCIsIHByb3BzLnNldFNlYXJjaFByb3ZpbmNlICwgcHJvcHMuc2V0U2VhcmNoVGl0bGUgLCBwcm9wcy5zZXRTZWFyY2hTdWJDYXRlZ29yeSAsIHByb3BzLnNldFNlYXJjaFRpdGxlTmFtZSAsIHByb3BzLnNldFNlYXJjaFByaWNlTGV2ZWwpO1xuICAgICAgICBpZiAocHJvcHMuc2V0U2VhcmNoVGl0bGVOYW1lID09PSBcIlwiICYmIChwcm9wcy5zZXRTZWFyY2hQcm92aW5jZSA9PT0gXCLguJ7guLfguYnguJnguJfguLXguYjguYPguIHguKXguYnguInguLHguJlcIiB8fCBwcm9wcy5zZXRTZWFyY2hQcm92aW5jZSA9PT0gXCLguKrguJbguLLguJnguJfguLXguYjguJfguLHguYnguIfguKvguKHguJRcIikgJiYgcHJvcHMuc2V0U2VhcmNoU3ViQ2F0ZWdvcnkgPT09IFwi4LiX4Lix4LmJ4LiH4Lir4Lih4LiUXCIgJiYgcHJvcHMuc2V0U2VhcmNoUHJpY2VMZXZlbCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgIGVsc2UgaWYgKGRhdGEuc2hvcE5hbWVUSC5pbmNsdWRlcyhwcm9wcy5zZXRTZWFyY2hUaXRsZU5hbWUpICYmIChwcm9wcy5zZXRTZWFyY2hQcm92aW5jZSA9PT0gXCLguJ7guLfguYnguJnguJfguLXguYjguYPguIHguKXguYnguInguLHguJlcIiB8fCBwcm9wcy5zZXRTZWFyY2hQcm92aW5jZSA9PT0gXCLguKrguJbguLLguJnguJfguLXguYjguJfguLHguYnguIfguKvguKHguJRcIikgJiYgcHJvcHMuc2V0U2VhcmNoU3ViQ2F0ZWdvcnkgPT09IFwi4LiX4Lix4LmJ4LiH4Lir4Lih4LiUXCIgJiYgcHJvcHMuc2V0U2VhcmNoUHJpY2VMZXZlbCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgIGVsc2UgaWYgKHByb3BzLnNldFNlYXJjaFRpdGxlTmFtZSA9PT0gXCJcIiAmJiBkYXRhLmFkZHJlc3NQcm92aW5jZU5hbWUuaW5jbHVkZXMocHJvcHMuc2V0U2VhcmNoUHJvdmluY2UpICYmIHByb3BzLnNldFNlYXJjaFN1YkNhdGVnb3J5ID09PSBcIuC4l+C4seC5ieC4h+C4q+C4oeC4lFwiICYmIHByb3BzLnNldFNlYXJjaFByaWNlTGV2ZWwgPT09IDAgKVxuICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgZWxzZSBpZiAocHJvcHMuc2V0U2VhcmNoVGl0bGVOYW1lID09PSBcIlwiICYmIChwcm9wcy5zZXRTZWFyY2hQcm92aW5jZSA9PT0gXCLguJ7guLfguYnguJnguJfguLXguYjguYPguIHguKXguYnguInguLHguJlcIiB8fCBwcm9wcy5zZXRTZWFyY2hQcm92aW5jZSA9PT0gXCLguKrguJbguLLguJnguJfguLXguYjguJfguLHguYnguIfguKvguKHguJRcIikgJiYgZGF0YS5zdWJjYXRlZ29yeU5hbWUuaW5jbHVkZXMocHJvcHMuc2V0U2VhcmNoU3ViQ2F0ZWdvcnkpICYmIHByb3BzLnNldFNlYXJjaFByaWNlTGV2ZWwgPT09IDApXG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICBlbHNlIGlmKHByb3BzLnNldFNlYXJjaFRpdGxlTmFtZSA9PT0gXCJcIiAmJiAocHJvcHMuc2V0U2VhcmNoUHJvdmluY2UgPT09IFwi4Lie4Li34LmJ4LiZ4LiX4Li14LmI4LmD4LiB4Lil4LmJ4LiJ4Lix4LiZXCIgfHwgcHJvcHMuc2V0U2VhcmNoUHJvdmluY2UgPT09IFwi4Liq4LiW4Liy4LiZ4LiX4Li14LmI4LiX4Lix4LmJ4LiH4Lir4Lih4LiUXCIpICYmIHByb3BzLnNldFNlYXJjaFN1YkNhdGVnb3J5ID09PSBcIuC4l+C4seC5ieC4h+C4q+C4oeC4lFwiICYmIGRhdGEucHJpY2VMZXZlbCA9PT0gcHJvcHMuc2V0U2VhcmNoUHJpY2VMZXZlbCApXG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICBlbHNlIGlmIChwcm9wcy5zZXRTZWFyY2hUaXRsZU5hbWUgPT09IFwiXCIgJiYgKHByb3BzLnNldFNlYXJjaFByb3ZpbmNlID09PSBcIuC4nuC4t+C5ieC4meC4l+C4teC5iOC5g+C4geC4peC5ieC4ieC4seC4mVwiIHx8IHByb3BzLnNldFNlYXJjaFByb3ZpbmNlID09PSBcIuC4quC4luC4suC4meC4l+C4teC5iOC4l+C4seC5ieC4h+C4q+C4oeC4lFwiKSAmJiBwcm9wcy5zZXRTZWFyY2hTdWJDYXRlZ29yeSA9PT0gXCLguJfguLHguYnguIfguKvguKHguJRcIiAmJiBwcm9wcy5zZXRTZWFyY2hQcmljZUxldmVsID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pLm1hcCgoZGF0YSwgaW5kZXgpID0+IFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInNob3AtY2FyZFwiPiBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2ltYWdld3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX19pbWFnZVwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2RhdGEuY292ZXJJbWFnZUlkfSlgfX0gPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2JvZHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9fdGl0bGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX19sYWJlbFwiPlxuICAgICAgICAgICAgICB7IGRhdGEuc2hvcE5hbWVUSCB9XG4gICAgICAgICAgPFRhZyAgY2xhc3NOYW1lPXtzZXRUYWdDb2xvcihkYXRhLmlzT3Blbil9ID4ge3NldFRhZ05hbWUoZGF0YS5pc09wZW4pfSA8L1RhZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX19pbmZvXCI+XG4gICAgICAgICAgICB7IGRhdGEuc3ViY2F0ZWdvcnlOYW1lIH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xhc2hcIj58PC9kaXY+XG4gICAgICAgICAgICB7Y3JlYXRlUHJpY2VMZXZlbChkYXRhKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xhc2hcIj58PC9kaXY+XG4gICAgICAgICAgICB7IGRhdGEuYWRkcmVzc0Rpc3RyaWN0TmFtZSB9IHsgZGF0YS5hZGRyZXNzUHJvdmluY2VOYW1lIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9fZGl2aWRlclwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX19oaWdobGlnaHRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogZGF0YS5oaWdobGlnaHRUZXh0fX0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX3JlY29tbWFuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNvbW1hbmQtdGl0bGVcIj7guYDguKHguJnguLnguYHguJnguLDguJnguLM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb21tYW5kLWxhYmVsXCI+e2RhdGEucmVjb21tZW5kZWRJdGVtcy5qb2luKFwiICwgXCIpfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX19mYWNpbGl0aWVzXCI+XG4gICAgICAgICAgICB7c2V0RmFjSWNvbihkYXRhLmZhY2lsaXRpZXMpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJzZWUtbW9yZVwiPuC4lOC4ueC5gOC4nuC4tOC5iOC4oeC5gOC4leC4tOC4oTwvQnV0dG9uPlxuXG5cbiAgICAgIDwvU2hvcENhcmRTdHlsZWQ+XG4gICAgPC9yZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3BDYXJkQ29udGFpbmVyOyJdLCJzb3VyY2VSb290IjoiIn0=