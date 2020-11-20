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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");





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
    var j = 0;

    for (var i = 0; i < data.priceLevel; i++) {
      setPriceLevel.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
        style: {
          color: '#222222'
        },
        children: "\u0E3F"
      }, j, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 26
      }, _this));
      j++;
    }

    if (data.priceLevel === 4) {
      return setPriceLevel;
    } else {
      for (var _i = 0; _i < 4 - data.priceLevel; _i++) {
        setPriceLevel.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
          style: {
            color: '#bbbbbb'
          },
          children: "\u0E3F"
        }, j, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
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
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaCarSide"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 45
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this));
      } else if (item === "สามารถนำสัตว์เลี้ยงเข้าได้") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdPets"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 25
        }, _this));
      } else if (item === "รับจองล่วงหน้า") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_8__["RiFileEditLine"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 25
        }, _this));
      } else if (item === "จำหน่ายเครื่องดื่มเแอลกอฮอล์") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaBeer"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 25
        }, _this));
      } else if (item === "บริการจัดส่งอาหาร") {
        setFacIcon.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
          title: item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "facilities-icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_8__["RiEBike2Fill"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 59
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_5__["ShopCardStyled"], {
      children: merchants.filter(function (data) {
        // console.log( "search", props.setSearchProvince , props.setSearchTitle , props.setSearchSubCategory , props.setSearchTitleName , props.setSearchPriceLevel);
        if (props.setSearchTitleName === "" && (props.setSearchProvince === "พื้นที่ใกล้ฉัน" || props.setSearchProvince === "สถานที่ทั้งหมด") && props.setSearchSubCategory === "ทั้งหมด" && props.setSearchPriceLevel === 0) return data;else if (data.shopNameTH.includes(props.setSearchTitleName) && (props.setSearchProvince === "พื้นที่ใกล้ฉัน" || props.setSearchProvince === "สถานที่ทั้งหมด") && props.setSearchSubCategory === "ทั้งหมด" && props.setSearchPriceLevel === 0) return data;else if (props.setSearchTitleName === "" && data.addressProvinceName.includes(props.setSearchProvince) && props.setSearchSubCategory === "ทั้งหมด" && props.setSearchPriceLevel === 0) return data;else if (props.setSearchTitleName === "" && (props.setSearchProvince === "พื้นที่ใกล้ฉัน" || props.setSearchProvince === "สถานที่ทั้งหมด") && data.subcategoryName.includes(props.setSearchSubCategory) && props.setSearchPriceLevel === 0) return data;else if (props.setSearchTitleName === "" && (props.setSearchProvince === "พื้นที่ใกล้ฉัน" || props.setSearchProvince === "สถานที่ทั้งหมด") && props.setSearchSubCategory === "ทั้งหมด" && data.priceLevel === props.setSearchPriceLevel) return data;
        console.log(merchants);
      }).map(function (data, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "shop-card",
          children: [" ", console.log(index), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "shop-card__imagewrapper",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "shop-card__image",
              style: {
                backgroundImage: "url(".concat(data.coverImageId, ")")
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 11
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 9
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "shop-card__body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "shop-card__title",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "shop-card__label",
                children: [data.shopNameTH, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Tag"], {
                  className: setTagColor(data.isOpen),
                  children: [" ", setTagName(data.isOpen), " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 11
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 13
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "shop-card__info",
              children: [data.subcategoryName, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "slash",
                children: "|"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 13
              }, _this), createPriceLevel(data), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "slash",
                children: "|"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 13
              }, _this), data.addressDistrictName, " ", data.addressProvinceName]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "shop-card__divider"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "shop-card__highlight",
              dangerouslySetInnerHTML: {
                __html: data.highlightText
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "shop-card__recommand",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "recommand-title",
                children: "\u0E40\u0E21\u0E19\u0E39\u0E41\u0E19\u0E30\u0E19\u0E33"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 13
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "recommand-label",
                children: data.recommendedItems.join(" , ")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 13
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 11
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "shop-card__facilities",
              children: setFacIcon(data.facilities)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 11
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 9
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2hvcGNhcmQvaW5kZXguanMiXSwibmFtZXMiOlsiU2hvcENhcmRDb250YWluZXIiLCJtYXRjaCIsInByb3BzIiwidXNlU3RhdGUiLCJtZXJjaGFudHMiLCJzZXRNZXJjaGFudHMiLCJ1c2VFZmZlY3QiLCJmZXRjaFBvc3RzIiwibWVyY2hhbnQiLCJwYXJhbSIsImNyZWF0ZVByaWNlTGV2ZWwiLCJkYXRhIiwic2V0UHJpY2VMZXZlbCIsImoiLCJpIiwicHJpY2VMZXZlbCIsInB1c2giLCJjb2xvciIsInNldEZhY0ljb24iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzZXRUYWdDb2xvciIsInZhbHVlIiwic2V0VGFnTmFtZSIsImZpbHRlciIsInNldFNlYXJjaFRpdGxlTmFtZSIsInNldFNlYXJjaFByb3ZpbmNlIiwic2V0U2VhcmNoU3ViQ2F0ZWdvcnkiLCJzZXRTZWFyY2hQcmljZUxldmVsIiwic2hvcE5hbWVUSCIsImluY2x1ZGVzIiwiYWRkcmVzc1Byb3ZpbmNlTmFtZSIsInN1YmNhdGVnb3J5TmFtZSIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb3ZlckltYWdlSWQiLCJpc09wZW4iLCJhZGRyZXNzRGlzdHJpY3ROYW1lIiwiX19odG1sIiwiaGlnaGxpZ2h0VGV4dCIsInJlY29tbWVuZGVkSXRlbXMiLCJqb2luIiwiZmFjaWxpdGllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQUF5QjtBQUFBOztBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFaQyxLQUFZOztBQUFBLGtCQUVmQyxzREFBUSxDQUFDLEVBQUQsQ0FGTztBQUFBLE1BRTFDQyxTQUYwQztBQUFBLE1BRS9CQyxZQUYr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QUFBO0FBQUEscUJBaEJGLGVBb0JFO0FBQUssdUJBQVMsRUFBQyx1QkFBZjtBQUFBLHdCQUNHekIsVUFBVSxDQUFDUCxJQUFJLENBQUNpQyxVQUFOO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxBO0FBQUEsV0FBVXZCLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSztBQUFBLE9BYkw7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0RELENBN0lEOztHQUFNckIsaUI7O0tBQUFBLGlCO0FBK0lTQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MDAxOTVkNWY5YTc1ODU1MTBiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFNob3BDYXJkU3R5bGVkXG59IGZyb20gJy4vc3R5bGVkJ1xuXG5pbXBvcnQgeyBUYWcgLCBUb29sdGlwICB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgRmFCZWVyICwgRmFDYXJTaWRlfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyBSaUZpbGVFZGl0TGluZSAsIFJpRUJpa2UyRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcbmltcG9ydCB7IE1kUGV0cyB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmltcG9ydCByZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuXG5jb25zdCBTaG9wQ2FyZENvbnRhaW5lciA9ICh7IG1hdGNoLCAuLi5wcm9wcyB9KSA9PiB7XG5cbiAgY29uc3QgW21lcmNoYW50cywgc2V0TWVyY2hhbnRzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hQb3N0cygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZmV0Y2hQb3N0cyA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgcGFyYW0gPSBhd2FpdCBwcm9wcy5tZXJjaGFudDtcbiAgICBzZXRNZXJjaGFudHMocGFyYW0ubWVyY2hhbnRzKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcmljZUxldmVsID0gKGRhdGEpID0+IHtcbiAgICBsZXQgc2V0UHJpY2VMZXZlbCA9IFtdXG4gICAgbGV0IGogPSAwXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgZGF0YS5wcmljZUxldmVsOyBpKyspIHtcbiAgICAgIHNldFByaWNlTGV2ZWwucHVzaCg8c3BhbiBrZXk9e2p9IHN0eWxlPXt7Y29sb3I6ICcjMjIyMjIyJ319PuC4vzwvc3Bhbj4pXG4gICAgICBqKytcbiAgICB9XG4gICAgaWYgKGRhdGEucHJpY2VMZXZlbCA9PT0gNCkge1xuICAgICAgcmV0dXJuIHNldFByaWNlTGV2ZWxcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaT0wOyBpIDwgNCAtIGRhdGEucHJpY2VMZXZlbDsgaSsrKSB7XG4gICAgICBzZXRQcmljZUxldmVsLnB1c2goPHNwYW4ga2V5PXtqfSBzdHlsZT17e2NvbG9yOiAnI2JiYmJiYid9fT7guL88L3NwYW4+KVxuICAgICAgaisrXG4gICAgICB9XG4gICAgICByZXR1cm4gc2V0UHJpY2VMZXZlbFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNldEZhY0ljb24gPSAoZGF0YSkgPT4ge1xuICAgIGxldCBzZXRGYWNJY29uID0gW11cbiAgICBkYXRhLm1hcCgoaXRlbSAsaW5kZXgpID0+IHtcbiAgICAgIGlmIChpdGVtID09PSBcIuC4l+C4teC5iOC4iOC4reC4lOC4o+C4llwiKSB7XG4gICAgICAgIHNldEZhY0ljb24ucHVzaChcbiAgICAgICAgICA8VG9vbHRpcCBrZXk9e2luZGV4fSB0aXRsZT17aXRlbX0+PGRpdiBjbGFzc05hbWU9XCJmYWNpbGl0aWVzLWljb25cIj5cbiAgICAgICAgICAgICAgPEZhQ2FyU2lkZS8+XG4gICAgICAgICAgICA8L2Rpdj48L1Rvb2x0aXA+KVxuICAgICAgfWVsc2UgaWYgKGl0ZW0gPT09IFwi4Liq4Liy4Lih4Liy4Lij4LiW4LiZ4Liz4Liq4Lix4LiV4Lin4LmM4LmA4Lil4Li14LmJ4Lii4LiH4LmA4LiC4LmJ4Liy4LmE4LiU4LmJXCIpIHtcbiAgICAgICAgc2V0RmFjSWNvbi5wdXNoKDxUb29sdGlwIGtleT17aW5kZXh9IHRpdGxlPXtpdGVtfT48ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXRpZXMtaWNvblwiPlxuICAgICAgICAgICAgICA8TWRQZXRzLz5cbiAgICAgICAgICAgIDwvZGl2PjwvVG9vbHRpcD4pXG4gICAgICB9ZWxzZSBpZiAoaXRlbSA9PT0gXCLguKPguLHguJrguIjguK3guIfguKXguYjguKfguIfguKvguJnguYnguLJcIikge1xuICAgICAgICBzZXRGYWNJY29uLnB1c2goPFRvb2x0aXAga2V5PXtpbmRleH0gdGl0bGU9e2l0ZW19PjxkaXYgY2xhc3NOYW1lPVwiZmFjaWxpdGllcy1pY29uXCI+XG4gICAgICAgICAgICAgIDxSaUZpbGVFZGl0TGluZS8+XG4gICAgICAgICAgICA8L2Rpdj48L1Rvb2x0aXA+KVxuICAgICAgfWVsc2UgaWYgKGl0ZW0gPT09IFwi4LiI4Liz4Lir4LiZ4LmI4Liy4Lii4LmA4LiE4Lij4Li34LmI4Lit4LiH4LiU4Li34LmI4Lih4LmA4LmB4Lit4Lil4LiB4Lit4Liu4Lit4Lil4LmMXCIpe1xuICAgICAgICBzZXRGYWNJY29uLnB1c2goPFRvb2x0aXAga2V5PXtpbmRleH0gdGl0bGU9e2l0ZW19PjxkaXYgY2xhc3NOYW1lPVwiZmFjaWxpdGllcy1pY29uXCI+XG4gICAgICAgICAgICAgIDxGYUJlZXIvPlxuICAgICAgICAgICAgPC9kaXY+PC9Ub29sdGlwPilcbiAgICAgIH1lbHNlIGlmIChpdGVtID09PSBcIuC4muC4o+C4tOC4geC4suC4o+C4iOC4seC4lOC4quC5iOC4h+C4reC4suC4q+C4suC4o1wiKXtcbiAgICAgICAgc2V0RmFjSWNvbi5wdXNoKDxUb29sdGlwIGtleT17aW5kZXh9IHRpdGxlPXtpdGVtfT48ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXRpZXMtaWNvblwiPlxuICAgICAgICAgICAgICA8UmlFQmlrZTJGaWxsLz5cbiAgICAgICAgICAgIDwvZGl2PjwvVG9vbHRpcD4pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gc2V0RmFjSWNvblxuICB9XG5cbiAgY29uc3Qgc2V0VGFnQ29sb3IgPSAodmFsdWUpID0+IHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlIFwiTlwiOlxuICAgICAgICByZXR1cm4gXCJ0YWctc3RhdHVzIGJsYWNrXCJcbiAgICAgIGNhc2UgXCJZXCI6XG4gICAgICAgIHJldHVybiBcInRhZy1zdGF0dXNcIlxuICAgICAgY2FzZSBcIk4vQVwiOiBcbiAgICAgICAgcmV0dXJuIFwiaGlkZGVuXCJcbiAgICBcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcImhpZGRlblwiXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2V0VGFnTmFtZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgXCJOXCI6XG4gICAgICAgIHJldHVybiBcIuC4m+C4tOC4lOC5geC4peC5ieC4p1wiXG4gICAgICBjYXNlIFwiWVwiOlxuICAgICAgICByZXR1cm4gXCLguYDguJvguLTguJTguK3guKLguLnguYhcIlxuICAgICAgY2FzZSBcIk4vQVwiOiBcbiAgICAgICAgcmV0dXJuIFwiXCJcbiAgICBcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIlwiXG4gICAgfVxuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxyZWFjdC5GcmFnbWVudD5cbiAgICAgIDxTaG9wQ2FyZFN0eWxlZCA+XG4gICAgICB7IG1lcmNoYW50cy5maWx0ZXIoKGRhdGEpPT57XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCBcInNlYXJjaFwiLCBwcm9wcy5zZXRTZWFyY2hQcm92aW5jZSAsIHByb3BzLnNldFNlYXJjaFRpdGxlICwgcHJvcHMuc2V0U2VhcmNoU3ViQ2F0ZWdvcnkgLCBwcm9wcy5zZXRTZWFyY2hUaXRsZU5hbWUgLCBwcm9wcy5zZXRTZWFyY2hQcmljZUxldmVsKTtcbiAgICAgICAgaWYgKHByb3BzLnNldFNlYXJjaFRpdGxlTmFtZSA9PT0gXCJcIiAmJiAocHJvcHMuc2V0U2VhcmNoUHJvdmluY2UgPT09IFwi4Lie4Li34LmJ4LiZ4LiX4Li14LmI4LmD4LiB4Lil4LmJ4LiJ4Lix4LiZXCIgfHwgcHJvcHMuc2V0U2VhcmNoUHJvdmluY2UgPT09IFwi4Liq4LiW4Liy4LiZ4LiX4Li14LmI4LiX4Lix4LmJ4LiH4Lir4Lih4LiUXCIpICYmIHByb3BzLnNldFNlYXJjaFN1YkNhdGVnb3J5ID09PSBcIuC4l+C4seC5ieC4h+C4q+C4oeC4lFwiICYmIHByb3BzLnNldFNlYXJjaFByaWNlTGV2ZWwgPT09IDApXG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICBlbHNlIGlmIChkYXRhLnNob3BOYW1lVEguaW5jbHVkZXMocHJvcHMuc2V0U2VhcmNoVGl0bGVOYW1lKSAmJiAocHJvcHMuc2V0U2VhcmNoUHJvdmluY2UgPT09IFwi4Lie4Li34LmJ4LiZ4LiX4Li14LmI4LmD4LiB4Lil4LmJ4LiJ4Lix4LiZXCIgfHwgcHJvcHMuc2V0U2VhcmNoUHJvdmluY2UgPT09IFwi4Liq4LiW4Liy4LiZ4LiX4Li14LmI4LiX4Lix4LmJ4LiH4Lir4Lih4LiUXCIpICYmIHByb3BzLnNldFNlYXJjaFN1YkNhdGVnb3J5ID09PSBcIuC4l+C4seC5ieC4h+C4q+C4oeC4lFwiICYmIHByb3BzLnNldFNlYXJjaFByaWNlTGV2ZWwgPT09IDApXG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICBlbHNlIGlmIChwcm9wcy5zZXRTZWFyY2hUaXRsZU5hbWUgPT09IFwiXCIgJiYgZGF0YS5hZGRyZXNzUHJvdmluY2VOYW1lLmluY2x1ZGVzKHByb3BzLnNldFNlYXJjaFByb3ZpbmNlKSAmJiBwcm9wcy5zZXRTZWFyY2hTdWJDYXRlZ29yeSA9PT0gXCLguJfguLHguYnguIfguKvguKHguJRcIiAmJiBwcm9wcy5zZXRTZWFyY2hQcmljZUxldmVsID09PSAwIClcbiAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgIGVsc2UgaWYgKHByb3BzLnNldFNlYXJjaFRpdGxlTmFtZSA9PT0gXCJcIiAmJiAocHJvcHMuc2V0U2VhcmNoUHJvdmluY2UgPT09IFwi4Lie4Li34LmJ4LiZ4LiX4Li14LmI4LmD4LiB4Lil4LmJ4LiJ4Lix4LiZXCIgfHwgcHJvcHMuc2V0U2VhcmNoUHJvdmluY2UgPT09IFwi4Liq4LiW4Liy4LiZ4LiX4Li14LmI4LiX4Lix4LmJ4LiH4Lir4Lih4LiUXCIpICYmIGRhdGEuc3ViY2F0ZWdvcnlOYW1lLmluY2x1ZGVzKHByb3BzLnNldFNlYXJjaFN1YkNhdGVnb3J5KSAmJiBwcm9wcy5zZXRTZWFyY2hQcmljZUxldmVsID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgZWxzZSBpZihwcm9wcy5zZXRTZWFyY2hUaXRsZU5hbWUgPT09IFwiXCIgJiYgKHByb3BzLnNldFNlYXJjaFByb3ZpbmNlID09PSBcIuC4nuC4t+C5ieC4meC4l+C4teC5iOC5g+C4geC4peC5ieC4ieC4seC4mVwiIHx8IHByb3BzLnNldFNlYXJjaFByb3ZpbmNlID09PSBcIuC4quC4luC4suC4meC4l+C4teC5iOC4l+C4seC5ieC4h+C4q+C4oeC4lFwiKSAmJiBwcm9wcy5zZXRTZWFyY2hTdWJDYXRlZ29yeSA9PT0gXCLguJfguLHguYnguIfguKvguKHguJRcIiAmJiBkYXRhLnByaWNlTGV2ZWwgPT09IHByb3BzLnNldFNlYXJjaFByaWNlTGV2ZWwgKVxuICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgY29uc29sZS5sb2cobWVyY2hhbnRzKTtcbiAgICAgIH0pLm1hcCgoZGF0YSwgaW5kZXgpID0+IFxuICAgICAgXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwic2hvcC1jYXJkXCI+IHtjb25zb2xlLmxvZyhpbmRleCl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX19pbWFnZXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9faW1hZ2VcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtkYXRhLmNvdmVySW1hZ2VJZH0pYH19ID5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX19ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX3RpdGxlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9fbGFiZWxcIj5cbiAgICAgICAgICAgICAgeyBkYXRhLnNob3BOYW1lVEggfVxuICAgICAgICAgIDxUYWcgIGNsYXNzTmFtZT17c2V0VGFnQ29sb3IoZGF0YS5pc09wZW4pfSA+IHtzZXRUYWdOYW1lKGRhdGEuaXNPcGVuKX0gPC9UYWc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9faW5mb1wiPlxuICAgICAgICAgICAgeyBkYXRhLnN1YmNhdGVnb3J5TmFtZSB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsYXNoXCI+fDwvZGl2PlxuICAgICAgICAgICAge2NyZWF0ZVByaWNlTGV2ZWwoZGF0YSl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsYXNoXCI+fDwvZGl2PlxuICAgICAgICAgICAgeyBkYXRhLmFkZHJlc3NEaXN0cmljdE5hbWUgfSB7IGRhdGEuYWRkcmVzc1Byb3ZpbmNlTmFtZSB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNhcmRfX2RpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9faGlnaGxpZ2h0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGRhdGEuaGlnaGxpZ2h0VGV4dH19PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jYXJkX19yZWNvbW1hbmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb21tYW5kLXRpdGxlXCI+4LmA4Lih4LiZ4Li54LmB4LiZ4Liw4LiZ4LizPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29tbWFuZC1sYWJlbFwiPntkYXRhLnJlY29tbWVuZGVkSXRlbXMuam9pbihcIiAsIFwiKX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY2FyZF9fZmFjaWxpdGllc1wiPlxuICAgICAgICAgICAge3NldEZhY0ljb24oZGF0YS5mYWNpbGl0aWVzKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8L1Nob3BDYXJkU3R5bGVkPlxuICAgIDwvcmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG9wQ2FyZENvbnRhaW5lcjsiXSwic291cmNlUm9vdCI6IiJ9