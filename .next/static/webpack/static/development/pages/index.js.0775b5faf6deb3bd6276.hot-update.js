webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/withUrqlClient.tsx":
/*!********************************!*\
  !*** ./lib/withUrqlClient.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! urql */ "./node_modules/urql/dist/urql.es.js");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_ssr_prepass__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-ssr-prepass */ "./node_modules/react-ssr-prepass/index.js");
/* harmony import */ var react_ssr_prepass__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_ssr_prepass__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _initUrql__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./initUrql */ "./lib/initUrql.ts");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../generated/graphql */ "./generated/graphql.tsx");











var _jsxFileName = "/Users/rsbear/dev/next-urql/lib/withUrqlClient.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







var isBrowser = true;

var withUrqlClient = function withUrqlClient(App) {
  var withUrql = function withUrql(props) {
    var _useAuthUserQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_16__["useAuthUserQuery"])(),
        _useAuthUserQuery2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_useAuthUserQuery, 1),
        _useAuthUserQuery2$ = _useAuthUserQuery2[0],
        fetching = _useAuthUserQuery2$.fetching,
        error = _useAuthUserQuery2$.error,
        data = _useAuthUserQuery2$.data;

    var urqlClient = props.urqlClient || Object(_initUrql__WEBPACK_IMPORTED_MODULE_15__["default"])(props.urqlState, props.serverAccessToken)[0];
    var authUser = !fetching && data && data.me ? data.me : null;
    return __jsx(urql__WEBPACK_IMPORTED_MODULE_12__["Provider"], {
      value: urqlClient,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx(App, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({}, props, {
      urqlClient: urqlClient,
      authUser: authUser,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })));
  };

  withUrql.getInitialProps =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee(ctx) {
      var AppTree, req, res, appProps, serverAccessToken, cookies, response, data, _initUrqlClient, _initUrqlClient2, urqlClient, ssrCache, urqlState;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              AppTree = ctx.AppTree;
              req = ctx.req, res = ctx.res; // Run the wrapped component's getInitialProps function

              appProps = {};

              if (!App.getInitialProps) {
                _context.next = 7;
                break;
              }

              _context.next = 6;
              return App.getInitialProps(ctx);

            case 6:
              appProps = _context.sent;

            case 7:
              // getInitialProps is universal, but we only want
              // to run server-side rendered suspense on the server
              serverAccessToken = "";

              if (isBrowser) {
                _context.next = 18;
                break;
              }

              cookies = cookie__WEBPACK_IMPORTED_MODULE_13___default.a.parse(req.headers.cookie ? req.headers.cookie : "");

              if (!cookies.rfs) {
                _context.next = 18;
                break;
              }

              _context.next = 13;
              return fetch("http://localhost:4000/refresh_token", {
                method: "POST",
                credentials: "include",
                headers: {
                  cookie: "rfs=" + cookies.rfs
                }
              });

            case 13:
              response = _context.sent;
              _context.next = 16;
              return response.json();

            case 16:
              data = _context.sent;
              serverAccessToken = data.accessToken;

            case 18:
              if (!isBrowser) {
                _context.next = 20;
                break;
              }

              return _context.abrupt("return", appProps);

            case 20:
              _initUrqlClient = Object(_initUrql__WEBPACK_IMPORTED_MODULE_15__["default"])({}, serverAccessToken), _initUrqlClient2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_initUrqlClient, 2), urqlClient = _initUrqlClient2[0], ssrCache = _initUrqlClient2[1]; // Run suspense and hence all urql queries

              _context.prev = 21;
              _context.next = 24;
              return react_ssr_prepass__WEBPACK_IMPORTED_MODULE_14___default()(__jsx(AppTree, {
                pageProps: _objectSpread({}, appProps, {
                  urqlClient: urqlClient
                }),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                },
                __self: this
              }));

            case 24:
              _context.next = 29;
              break;

            case 26:
              _context.prev = 26;
              _context.t0 = _context["catch"](21);
              console.log(_context.t0);

            case 29:
              // Extract query data from the urql store
              // Extract the SSR query data from urql's SSR cache
              urqlState = ssrCache.extractData();
              return _context.abrupt("return", _objectSpread({}, appProps, {
                urqlState: urqlState,
                serverAccessToken: serverAccessToken
              }));

            case 31:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[21, 26]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return withUrql;
};

/* harmony default export */ __webpack_exports__["default"] = (withUrqlClient);

/***/ })

})
//# sourceMappingURL=index.js.0775b5faf6deb3bd6276.hot-update.js.map