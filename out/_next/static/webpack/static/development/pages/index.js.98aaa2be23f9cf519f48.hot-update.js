webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_containers_homepage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/containers/homepage */ "./src/containers/homepage.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_components_preloader_preloader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/preloader/preloader */ "./src/components/preloader/preloader.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_actions_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/actions/data */ "./src/actions/data.js");
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-cookie-consent */ "./node_modules/react-cookie-consent/build/index.js");
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_cookie_consent__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lang */ "./lang.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_22__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

/* eslint-disable jsx-a11y/anchor-is-valid */







 // import Bottom from '../src/components/reuseable/bottom';
// import BottomScrollListerer from 'react-bottom-scroll-listener';
// import CircularProgress from '@material-ui/core/CircularProgress';










var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      marginTop: 100,
      minHeight: 45
    },
    tab: {
      alignItems: "baseline",
      padding: 10
    },
    pos: {// position: "absolute"
    },
    progress: {
      margin: theme.spacing.unit * 2
    }
  };
};

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).call(this, props));
    _this.timer = null;
    _this.state = {
      loading: true,
      loadingMore: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props, dataTopics, getTopics, getUser, getToken, token, user, options, _user;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = this.props, dataTopics = _this$props.dataTopics, getTopics = _this$props.getTopics, getUser = _this$props.getUser, getToken = _this$props.getToken;
              token = localStorage.getItem("token");
              user = sessionStorage.getItem("user");
              this.setState({
                loading: false
              });
              getTopics(JSON.parse(dataTopics));
              _context.prev = 5;

              if (!token) {
                _context.next = 21;
                break;
              }

              if (user) {
                _context.next = 17;
                break;
              }

              options = {
                method: "GET",
                headers: {
                  "content-type": "application/json",
                  "Access-Control-Allow-Origin": "*",
                  "x-auth-token": token
                },
                url: _config__WEBPACK_IMPORTED_MODULE_11__["config"].api + "/users/me"
              };
              _context.next = 11;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_9___default()(options));

            case 11:
              _user = _context.sent;
              getUser(_user.data[0]);
              sessionStorage.setItem("user", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_user.data[0]));
              getToken(token);
              _context.next = 21;
              break;

            case 17:
              // check if the user details is already saved and stop the loading
              getUser(JSON.parse(user));
              this.setState({
                loading: false
              });
              getTopics(JSON.parse(dataTopics));
              return _context.abrupt("return");

            case 21:
              this.setState({
                loading: false
              }); // this.timer = setInterval(() => {
              //   this.handleFetchMoreTopics();
              // }, 10000);

              _context.next = 27;
              break;

            case 24:
              _context.prev = 24;
              _context.t0 = _context["catch"](5);

              // console.log("error", error.response);
              if (_context.t0.response.data.error) {
                localStorage.removeItem("token");
                next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push("/login?sE=true");
              }

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[5, 24]]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          loadingMore = _this$state.loadingMore;
      var classes = this.props.classes;
      return __jsx("div", null, __jsx(_src_containers_homepage__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(react_cookie_consent__WEBPACK_IMPORTED_MODULE_15___default.a, {
        style: {
          zIndex: 99999,
          background: "rgb(146, 95, 126)"
        },
        buttonStyle: {
          background: "rgb(255, 255, 255)"
        }
      }, _lang__WEBPACK_IMPORTED_MODULE_16__["Lang"].m3));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req, topics, dataTopics;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = _ref.req;
              _context2.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(_config__WEBPACK_IMPORTED_MODULE_11__["config"].api + "/topic?pageNumber=1&dataType=hot&pageSize=5"));

            case 3:
              topics = _context2.sent;
              dataTopics = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(topics.data.content);
              return _context2.abrupt("return", {
                // userAgent,
                dataTopics: dataTopics
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_12__["bindActionCreators"])({
    getTopics: _src_actions_data__WEBPACK_IMPORTED_MODULE_14__["getTopics"],
    getUser: _src_actions_data__WEBPACK_IMPORTED_MODULE_14__["getUser"],
    getToken: _src_actions_data__WEBPACK_IMPORTED_MODULE_14__["getToken"],
    setPageNumber: _src_actions_data__WEBPACK_IMPORTED_MODULE_14__["setPageNumber"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_22__["withStyles"])(styles)(Index)));

/***/ })

})
//# sourceMappingURL=index.js.98aaa2be23f9cf519f48.hot-update.js.map