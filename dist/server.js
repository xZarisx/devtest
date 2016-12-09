/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.app = undefined;

	__webpack_require__(1);

	__webpack_require__(2);

	var _express = __webpack_require__(3);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(4);

	var _path2 = _interopRequireDefault(_path);

	var _compression = __webpack_require__(5);

	var _compression2 = _interopRequireDefault(_compression);

	var _helmet = __webpack_require__(6);

	var _helmet2 = _interopRequireDefault(_helmet);

	var _routes = __webpack_require__(7);

	var _server = __webpack_require__(10);

	var _server2 = _interopRequireDefault(_server);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// create express app...
	var app = exports.app = (0, _express2.default)();

	// the reactified route-handler from the `app`
	var APP_WEB_BASE_PATH = process.env.APP_WEB_BASE_PATH;

	// middleware

	app.use((0, _compression2.default)());
	app.use((0, _helmet2.default)());
	app.use(APP_WEB_BASE_PATH + '/static', _express2.default.static(_path2.default.join(__dirname, 'static')));

	app.use(APP_WEB_BASE_PATH + '/api', _routes.api);

	// handle routes via react...
	app.get("*", _server2.default);

	// prepare 404
	app.use("*", function (req, res, next) {
	    // eslint-disable-line
	    next({ status: 404, message: "Not Found" });
	});

	// handle any errors
	app.use(function (err, req, res, next) {
	    // eslint-disable-line
	    res.status(err.status || 500).send(err.message || "Application Error");
	    console.error(err.status === 404 ? '404 ' + req.url : err.stack); // eslint-disable-line
	});

	var PORT = process.env.PORT;


	app.listen(PORT, function () {
	    return console.log('Running on port ' + PORT);
	}); // eslint-disable-line

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("dotenv/config");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("helmet");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _api = __webpack_require__(8);

	Object.defineProperty(exports, 'api', {
	  enumerable: true,
	  get: function get() {
	    return _api.router;
	  }
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.router = undefined;

	var _express = __webpack_require__(3);

	var _express2 = _interopRequireDefault(_express);

	var _cors = __webpack_require__(9);

	var _cors2 = _interopRequireDefault(_cors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var router = exports.router = _express2.default.Router();

	var APP_WEB_BASE_PATH = process.env.APP_WEB_BASE_PATH;


	router.get('/nav', (0, _cors2.default)(), function (req, res) {
	    res.send([{
	        "href": '' + APP_WEB_BASE_PATH,
	        "text": "Home",
	        "rel": "home"
	    }, {
	        "href": APP_WEB_BASE_PATH + '/demo',
	        "text": "Demo"
	    }, {
	        "href": APP_WEB_BASE_PATH + '/not-found',
	        "text": "404"
	    }]);
	});

	router.get('/people', (0, _cors2.default)(), function (req, res) {
	    res.send(["Jared", "Sara", "Elijah", "Xander", "Maxwell", "Amelia", "Ivy", "Jennie", "Stephanie", "Hillary", "Cameron", "Carey", "Ashlee", "Alyssa", "Tom", "Lynn", "Ross", "Danette", "Claigh", "Wendy"]);
	});

	exports.default = router;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("cors");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _HTML = __webpack_require__(12);

	var _HTML2 = _interopRequireDefault(_HTML);

	var _server = __webpack_require__(13);

	var _reactRouter = __webpack_require__(14);

	var _reactRedux = __webpack_require__(15);

	var _reactHelmet = __webpack_require__(16);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _routes = __webpack_require__(17);

	var _routes2 = _interopRequireDefault(_routes);

	var _store = __webpack_require__(62);

	var _store2 = _interopRequireDefault(_store);

	var _htmlMinifier = __webpack_require__(66);

	var _ssResolve = __webpack_require__(40);

	var _env = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (req, res, next) {
	    (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {

	        if (err) {
	            return next(err);
	        } else if (redirect) {
	            res.redirect(redirect.pathname + redirect.search);
	        } else if (props) {
	            (function () {
	                var store = (0, _store2.default)();

	                (0, _ssResolve.resolve)(props, store).then(function () {
	                    var initialState = store.getState();

	                    var content = (0, _server.renderToString)(_react2.default.createElement(
	                        _reactRedux.Provider,
	                        { store: store },
	                        _react2.default.createElement(_reactRouter.RouterContext, props)
	                    ));

	                    res.status(initialState.requestStatus || 200).send((0, _htmlMinifier.minify)((0, _HTML2.default)(_extends({}, _reactHelmet2.default.rewind(), {
	                        content: content,
	                        initialState: initialState,
	                        env: { API_HOST: _env.API_HOST, APP_WEB_BASE_PATH: _env.APP_WEB_BASE_PATH },
	                        base_path: _env.APP_WEB_BASE_PATH
	                    })), { collapseWhitespace: true, removeAttributeQuotes: true }));
	                }).catch(next);
	            })();
	        } else {
	            res.status(404).send('Not Found');
	        }
	    });
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (_ref) {
	    var _ref$title = _ref.title,
	        title = _ref$title === undefined ? "" : _ref$title,
	        _ref$meta = _ref.meta,
	        meta = _ref$meta === undefined ? "" : _ref$meta,
	        _ref$links = _ref.links,
	        links = _ref$links === undefined ? "" : _ref$links,
	        _ref$content = _ref.content,
	        content = _ref$content === undefined ? "" : _ref$content,
	        _ref$initialState = _ref.initialState,
	        initialState = _ref$initialState === undefined ? {} : _ref$initialState,
	        _ref$env = _ref.env,
	        env = _ref$env === undefined ? {} : _ref$env,
	        _ref$base_path = _ref.base_path,
	        base_path = _ref$base_path === undefined ? "" : _ref$base_path;
	    return "\n<html>\n    <head>\n        <meta charset=\"utf-8\">\n        " + title + "\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        " + meta + "\n        " + links + "\n        <link href=\"" + base_path + "/static/app.css\" rel=stylesheet>\n\n    </head>\n\n    <body>\n        <div id=app>" + content + "</div>\n        <script>\n            window.__INITIAL_STATE__ = " + JSON.stringify(initialState) + ";\n            window.__APP_ENV_VARS__ = " + JSON.stringify(env) + ";\n        </script>\n        <script type=text/javascript src=\"" + base_path + "/static/app.js\" charset=utf-8 async></script>\n    </body>\n</html>\n";
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(14);

	var _app = __webpack_require__(18);

	var _app2 = _interopRequireDefault(_app);

	var _home = __webpack_require__(43);

	var _home2 = _interopRequireDefault(_home);

	var _people = __webpack_require__(45);

	var _people2 = _interopRequireDefault(_people);

	var _notFound = __webpack_require__(56);

	var _notFound2 = _interopRequireDefault(_notFound);

	var _env = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '' + (_env.APP_WEB_BASE_PATH || '/'), component: _app2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'demo', component: _people2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _notFound2.default })
	);

	exports.default = routes;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _reactRedux = __webpack_require__(15);

	var _siteNav = __webpack_require__(19);

	var _AppLayout = __webpack_require__(23);

	var _AppLayout2 = _interopRequireDefault(_AppLayout);

	var _mountLoad = __webpack_require__(38);

	var _mountLoad2 = _interopRequireDefault(_mountLoad);

	var _ssResolve = __webpack_require__(40);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Inject Async Data Loading...

	// This higher-order function which takes a regular ReactClass
	// and super-imposes it lifecycle `componentDidMount` functionality.
	// Useful when a component needs props but the app can't provide them
	// until `componentDidMount`.
	// This allows components be written agnostically of app limitations.

	// tl;dr: `mountLoad` will call the `onLoad` prop when `componentDidMount` occurs
	// and potentially waits for it to resolve before showing its `children`
	var LazyApp = (0, _mountLoad2.default)(_AppLayout2.default);

	// callback used server-side to resolve data before responding
	var resolveOnServer = function resolveOnServer(props, store) {
	    return store.dispatch((0, _siteNav.init)());
	};

	// Higher-order function takes a regular react class, returns a regular react
	// class but superimposes it with a static method that a corresponding
	// module looks for on server before rendering...
	var SSResolvedComponent = (0, _ssResolve.wrap)(LazyApp, resolveOnServer);

	// Create args for the react-redux `connect` function
	// https://github.com/reactjs/react-redux/blob/master/docs/api.md

	// argument 1 of react-redux `connect` maps store data to props
	var mapStateToProps = function mapStateToProps(_ref) {
	    var nav = _ref.nav;
	    return {
	        nav: nav,
	        homelink: (nav.find(function (n) {
	            return n.rel === "home";
	        }) || {}).href
	    };
	};

	// argument 2 of react-redux `connect` maps actions to dispatch to props
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	        onLoad: function onLoad() {
	            return dispatch((0, _siteNav.init)());
	        }
	    };
	};

	// arg 3 lets you define how the props from
	// mapStateToProps, mapDispatchToProps and incoming from react-router are merged
	// you can statically inject props here as well

	// in this file, we don't actually need this functionality,
	// but if we did, it would look like the following and we'd pass it as the
	// third argument in `connect`:
	/*
	const mergeProps = (state, actions, own) => ({
	    ...state, ...actions, ...own, // this merges are 3 prop sources

	    // this pretends we need to pass in a route parameter
	    // to an action we defined in `mapStateToProps`
	    onLoad: () => actions.onLoad(own.params)
	})
	*/

	// Export the resulting component...
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SSResolvedComponent);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.init = undefined;

	var _siteNav = __webpack_require__(20);

	var _siteNav2 = __webpack_require__(21);

	var _siteNav3 = _interopRequireDefault(_siteNav2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function setNav() {
	    var nav = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	    return { type: _siteNav.SET, nav: nav };
	}

	var init = exports.init = function init() {
	    return function (dispatch) {
	        return (0, _siteNav3.default)().then(function (n) {
	            return dispatch(setNav(n));
	        });
	    };
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var _ref = arguments[1];
	    var type = _ref.type,
	        _ref$nav = _ref.nav,
	        nav = _ref$nav === undefined ? [] : _ref$nav;

	    switch (type) {
	        case SET:
	            return nav;

	        default:
	            return state;
	    }
	};

	var SET = exports.SET = Symbol('SET');

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _env = __webpack_require__(22);

	exports.default = function () {
	    return fetch(_env.API_HOST + '/api/nav').then(function (response) {
	        return response.ok ? response.json() : Promise.reject(response);
	    });
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var isBrowser = exports.isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object";

	//Grab variables from process.env or window

	var _ref = isBrowser ? window.__APP_ENV_VARS__ : process.env;

	var APP_WEB_BASE_PATH = _ref.APP_WEB_BASE_PATH,
	    API_HOST = _ref.API_HOST;
	exports.APP_WEB_BASE_PATH = APP_WEB_BASE_PATH;
	exports.API_HOST = API_HOST;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _SiteHeader = __webpack_require__(24);

	var _SiteHeader2 = _interopRequireDefault(_SiteHeader);

	__webpack_require__(34);

	var _style = __webpack_require__(36);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	    var homelink = _ref.homelink,
	        children = _ref.children,
	        nav = _ref.nav;
	    return _react2.default.createElement(
	        'div',
	        { className: _style2.default.app },
	        _react2.default.createElement(_SiteHeader2.default, { className: _style2.default.header, links: nav, homelink: homelink }),
	        _react2.default.createElement(
	            'div',
	            { className: _style2.default.wrapper },
	            _react2.default.createElement(
	                'main',
	                { className: _style2.default.main },
	                children
	            )
	        )
	    );
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _SiteHeader = __webpack_require__(25);

	var _SiteHeader2 = _interopRequireDefault(_SiteHeader);

	var _SiteNav = __webpack_require__(29);

	var _SiteNav2 = _interopRequireDefault(_SiteNav);

	var _classnames = __webpack_require__(32);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _logoPlaceholder = __webpack_require__(33);

	var _logoPlaceholder2 = _interopRequireDefault(_logoPlaceholder);

	var _reactRouter = __webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	    var _ref$homelink = _ref.homelink,
	        homelink = _ref$homelink === undefined ? "/" : _ref$homelink,
	        _ref$links = _ref.links,
	        links = _ref$links === undefined ? [] : _ref$links,
	        _ref$className = _ref.className,
	        className = _ref$className === undefined ? "" : _ref$className;
	    return _react2.default.createElement(
	        'header',
	        { className: (0, _classnames2.default)(_SiteHeader2.default.header, className) },
	        _react2.default.createElement(
	            _reactRouter.IndexLink,
	            { to: homelink, className: _SiteHeader2.default.brand },
	            _react2.default.createElement('img', { className: _SiteHeader2.default.logo, src: _logoPlaceholder2.default, alt: 'My Brand' }),
	            _react2.default.createElement(
	                'span',
	                null,
	                'My website'
	            )
	        ),
	        _react2.default.createElement(_SiteNav2.default, { className: _SiteHeader2.default.nav, links: links })
	    );
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"header":"header-3hMBu","brand":"brand-3zuOx","logo":"logo-XG1YN"};

/***/ },
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _SiteNav = __webpack_require__(30);

	var _SiteNav2 = _interopRequireDefault(_SiteNav);

	var _reactRouter = __webpack_require__(14);

	var _classnames = __webpack_require__(32);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	    var _ref$links = _ref.links,
	        links = _ref$links === undefined ? [] : _ref$links,
	        _ref$className = _ref.className,
	        className = _ref$className === undefined ? "" : _ref$className;
	    return _react2.default.createElement(
	        'nav',
	        { className: (0, _classnames2.default)(_SiteNav2.default.nav, className) },
	        links.map(function (_ref2, i) {
	            var href = _ref2.href,
	                text = _ref2.text;
	            return _react2.default.createElement(
	                _reactRouter.Link,
	                { className: _SiteNav2.default.link, key: i, to: href },
	                text
	            );
	        })
	    );
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"nav":"nav-2wWVi","link":"link-2Vh5S"};

/***/ },
/* 31 */,
/* 32 */
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/assets/logo-placeholder-b5.svg";

/***/ },
/* 34 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 35 */,
/* 36 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"app":"app-3mneB","header":"header-1fvkh","wrapper":"wrapper-1ukC9"};

/***/ },
/* 37 */,
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Component = exports.wrapElement = exports.wrapClass = undefined;

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _Loader = __webpack_require__(39);

	var _Loader2 = _interopRequireDefault(_Loader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable react/no-multi-comp */


	var wrapClass = exports.wrapClass = function wrapClass(Component) {
	    return function (_ref) {
	        var onLoad = _ref.onLoad,
	            _ref$wait = _ref.wait,
	            wait = _ref$wait === undefined ? false : _ref$wait,
	            props = _objectWithoutProperties(_ref, ['onLoad', 'wait']);

	        return _react2.default.createElement(
	            _Loader2.default,
	            { onLoad: onLoad, wait: wait },
	            _react2.default.createElement(Component, props)
	        );
	    };
	};

	var wrapElement = exports.wrapElement = function wrapElement(element) {
	    return function (_ref2) {
	        var onLoad = _ref2.onLoad,
	            _ref2$wait = _ref2.wait,
	            wait = _ref2$wait === undefined ? false : _ref2$wait;
	        return _react2.default.createElement(
	            _Loader2.default,
	            { onLoad: onLoad, wait: wait },
	            element
	        );
	    };
	};

	exports.Component = _Loader2.default;
	exports.default = wrapClass;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MountLoad = function (_Component) {
	    _inherits(MountLoad, _Component);

	    function MountLoad(props) {
	        _classCallCheck(this, MountLoad);

	        var _this = _possibleConstructorReturn(this, (MountLoad.__proto__ || Object.getPrototypeOf(MountLoad)).call(this, props));

	        _this.state = { loading: true, error: false };
	        return _this;
	    }

	    _createClass(MountLoad, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            var onLoad = this.props.onLoad();

	            if (onLoad.then && onLoad.catch) {
	                return onLoad.then(function () {
	                    return _this2.setComplete();
	                }).catch(function (_ref) {
	                    var message = _ref.message;
	                    return _this2.setError(message);
	                });
	            }
	        }
	    }, {
	        key: 'setComplete',
	        value: function setComplete() {
	            this.setState({ loading: false, error: false });
	        }
	    }, {
	        key: 'setError',
	        value: function setError(message) {
	            this.setState({ loading: false, error: true, message: message });
	        }
	    }, {
	        key: 'renderError',
	        value: function renderError() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'An Error Occurred'
	                ),
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    this.state.message
	                )
	            );
	        }
	    }, {
	        key: 'renderLoading',
	        value: function renderLoading() {
	            return _react2.default.createElement(
	                'h1',
	                null,
	                'Loading...'
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _state = this.state,
	                error = _state.error,
	                loading = _state.loading;
	            var _props = this.props,
	                wait = _props.wait,
	                children = _props.children;


	            if (error) {
	                return this.renderError();
	            }

	            if (loading && wait) {
	                return this.renderLoading();
	            }

	            return children;
	        }
	    }]);

	    return MountLoad;
	}(_react.Component);

	exports.default = MountLoad;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.wrap = exports.resolve = undefined;

	var _resolver = __webpack_require__(41);

	var _resolver2 = _interopRequireDefault(_resolver);

	var _wrap = __webpack_require__(42);

	var _wrap2 = _interopRequireDefault(_wrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.resolve = _resolver2.default;
	exports.wrap = _wrap2.default;
	exports.default = { resolve: _resolver2.default, wrap: _wrap2.default };

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (props, store) {

	    var promises = (props.components || []).
	    // unwrap component if wrapped by react-redux bindings...
	    map(function (component) {
	        return component.WrappedComponent || component;
	    })

	    // grab only components with a static `load` method
	    .filter(function (component) {
	        return component.onServer;
	    })

	    // execute onServer functions -- they should return a Promise
	    .map(function (component) {
	        return component.onServer(props, store);
	    });

	    return Promise.all(promises);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	a higher order function which wraps React Components with a Higher-Order Components
	that contain on onServer static method. Method can then be called on ServerSide.

	wrapClass :: ( ComponentA, beforeServerRender ) -> ComponentB
	    where
	        ComponentA :: React.Component
	        beforeServerRender :: (props, store) -> Promise
	        ComponentB :: React.Component
	*/

	exports.default = function (Component) {
	    var beforeServerRender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};


	    return _react2.default.createClass({ // eslint-disable-line
	        statics: {
	            onServer: function onServer(props, store) {
	                return beforeServerRender ? beforeServerRender(props, store) : null;
	            }
	        },

	        render: function render() {
	            return _react2.default.createElement(Component, this.props);
	        }
	    });
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Home = __webpack_require__(44);

	var _Home2 = _interopRequireDefault(_Home);

	var _reactRedux = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _reactRedux.connect)()(_Home2.default);

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _reactHelmet = __webpack_require__(16);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Home = function Home() {
	    return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(_reactHelmet2.default, {
	            title: "React Starter Home",
	            meta: [{ "name": "description", "content": "A React Starter" }, { "property": "og:type", "content": "article" }]
	        }),
	        _react2.default.createElement(
	            "h1",
	            null,
	            "Welcome Home"
	        )
	    );
	};

	exports.default = Home;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _reactRedux = __webpack_require__(15);

	var _people = __webpack_require__(46);

	var _People = __webpack_require__(49);

	var _People2 = _interopRequireDefault(_People);

	var _mountLoad = __webpack_require__(38);

	var _mountLoad2 = _interopRequireDefault(_mountLoad);

	var _ssResolve = __webpack_require__(40);

	var _env = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LazyPeople = (0, _mountLoad2.default)(_People2.default);

	var resolveOnServer = function resolveOnServer(props, store) {
	    return store.dispatch((0, _people.init)());
	};
	var ServerLoadedComponent = (0, _ssResolve.wrap)(LazyPeople, resolveOnServer);

	var mapStateToProps = function mapStateToProps(_ref) {
	    var people = _ref.people;
	    return { people: people.all, filtered: people.filtered, q: people.q };
	};

	var bindActionsToDispatch = function bindActionsToDispatch(dispatch) {
	    return {
	        onLoad: function onLoad() {
	            return _env.isBrowser && dispatch((0, _people.init)());
	        }
	    };
	};

	var mergeAllTheProps = function mergeAllTheProps(state, actions, own) {
	    return _extends({}, state, actions, own, {
	        onLoad: function onLoad() {
	            return actions.onLoad();
	        },
	        wait: state.people.length === 0
	    });
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, bindActionsToDispatch, mergeAllTheProps)(ServerLoadedComponent);

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.init = exports.selectPerson = exports.findPeople = exports.setPeople = undefined;

	var _people = __webpack_require__(47);

	var _people2 = __webpack_require__(48);

	var _people3 = _interopRequireDefault(_people2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var setPeople = exports.setPeople = function setPeople(people) {
	    return { type: _people.INIT_PEOPLE, people: people };
	};

	var findPeople = exports.findPeople = function findPeople(query) {
	    return { type: _people.FIND_PEOPLE, query: query };
	};

	var selectPerson = exports.selectPerson = function selectPerson(query) {
	    return { type: _people.SELECT_PERSON, query: query };
	};

	var init = exports.init = function init() {
	    return function (dispatch) {
	        return (0, _people3.default)().then(function (people) {
	            return dispatch(setPeople(people));
	        });
	    };
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = people;
	var INIT_PEOPLE = exports.INIT_PEOPLE = Symbol('INIT_PEOPLE');
	var FIND_PEOPLE = exports.FIND_PEOPLE = Symbol('FIND_PEOPLE');
	var SELECT_PERSON = exports.SELECT_PERSON = Symbol('SELECT_PERSON');

	function people() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { q: '', all: [], filtered: [] };
	    var action = arguments[1];

	    switch (action.type) {
	        case INIT_PEOPLE:
	            return {
	                q: '',
	                all: action.people,
	                filtered: []
	            };

	        case FIND_PEOPLE:
	            return {
	                all: [].concat(state.all),
	                q: action.q,
	                filtered: action.q.length > 1 ? state.all.filter(function (p) {
	                    return ~p.toLowerCase().indexOf(action.q.toLowerCase());
	                }) : []
	            };

	        case SELECT_PERSON:
	            return {
	                all: [].concat(state.all),
	                q: action.q,
	                filtered: []
	            };

	        default:
	            return state;
	    }
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _env = __webpack_require__(22);

	exports.default = function () {
	    return fetch(_env.API_HOST + '/api/people').then(function (response) {
	        return response.ok ? response.json() : Promise.reject(response);
	    });
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _AutoComplete = __webpack_require__(50);

	var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

	var _DataList = __webpack_require__(54);

	var _DataList2 = _interopRequireDefault(_DataList);

	var _reactHelmet = __webpack_require__(16);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	    var _ref$people = _ref.people,
	        people = _ref$people === undefined ? [] : _ref$people;
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_reactHelmet2.default, { title: 'AutoCompletes' }),
	        _react2.default.createElement(
	            'label',
	            null,
	            'People Dropdown',
	            _react2.default.createElement(
	                'select',
	                null,
	                _react2.default.createElement(
	                    'option',
	                    null,
	                    'Choose...'
	                ),
	                people.map(function (p, i) {
	                    return _react2.default.createElement(
	                        'option',
	                        { key: i },
	                        p
	                    );
	                })
	            )
	        ),
	        _react2.default.createElement('hr', null),
	        _react2.default.createElement(_AutoComplete2.default, {
	            onSelect: console.log.bind(console) // eslint-disable-line
	            , options: people,
	            placeholder: 'choose a relative...',
	            value: 'Jared'
	        }),
	        _react2.default.createElement('hr', null),
	        _react2.default.createElement(_DataList2.default, {
	            onChange: function onChange(e) {
	                return console.log(e.target.value);
	            } // eslint-disable-line
	            , options: people
	        })
	    );
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _autoComplete = __webpack_require__(51);

	var _autoComplete2 = _interopRequireDefault(_autoComplete);

	var _classnames = __webpack_require__(32);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _strongify = __webpack_require__(53);

	var _strongify2 = _interopRequireDefault(_strongify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import throttle from '../../lib/throttle.js';


	var AutoComplete = function (_React$Component) {
	    _inherits(AutoComplete, _React$Component);

	    function AutoComplete(props) {
	        _classCallCheck(this, AutoComplete);

	        var _this = _possibleConstructorReturn(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).call(this, props));

	        _this.state = { options: [], highlight: -1, isactive: false, value: _this.props.value || '' };
	        return _this;
	    }

	    _createClass(AutoComplete, [{
	        key: 'handleValueChanges',
	        value: function handleValueChanges(event) {
	            var typedCharacters = event.target.value,
	                options = typedCharacters.length < 2 ? [] : this.props.options.filter(function (p) {
	                return ~(p.text || p).toLowerCase().indexOf(typedCharacters.toLowerCase());
	            }).slice(0, this.props.max || 1000);

	            this.setState({ options: options, highlight: -1, isactive: true, value: typedCharacters });
	            this.notify();
	        }
	    }, {
	        key: 'handleMetaKeys',
	        value: function handleMetaKeys(event) {

	            switch (event.keyCode || event.which) {
	                // down
	                case 40:
	                    this.highlight(this.state.highlight + 1);
	                    event.preventDefault();
	                    break;

	                //up
	                case 38:
	                    this.highlight(this.state.highlight - 1);
	                    event.preventDefault();
	                    break;

	                //enter
	                case 13:
	                    {
	                        var selected = this.refs['option-' + this.state.highlight];
	                        this.select(selected && (selected.dataset.value || selected.textContent) || this.refs.input.value);
	                        event.preventDefault();
	                        break;
	                    }

	                case 27:
	                    //escape
	                    this.reset();
	                    event.preventDefault();
	                    break;
	            }
	        }
	    }, {
	        key: 'reset',
	        value: function reset() {
	            this.setState({ options: [], highlight: -1 });
	        }
	    }, {
	        key: 'notify',
	        value: function notify() {
	            if (this.props.onSelect) {
	                this.props.onSelect(this.refs.input.value);
	            }
	        }
	    }, {
	        key: 'select',
	        value: function select(value) {
	            this.refs.input.value = value;
	            this.refs.input.focus();
	            this.reset();
	            this.notify();
	        }
	    }, {
	        key: 'highlight',
	        value: function highlight(n) {
	            if (n >= 0 && n < this.state.options.length) {
	                this.setState({ highlight: n });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this,
	                _classNames2;

	            var options = this.state.options.map(function (o, i) {
	                var _classNames;

	                return _react2.default.createElement(
	                    'div',
	                    {
	                        className: (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, _autoComplete2.default['option-item'], true), _defineProperty(_classNames, _autoComplete2.default['option-item--selected'], i === _this2.state.highlight), _classNames)),
	                        'data-value': o.value || o,
	                        key: i,
	                        onClick: function onClick(e) {
	                            return _this2.select(o.value || o);
	                        },
	                        onMouseOver: function onMouseOver() {
	                            return _this2.setState({ highlight: i });
	                        },
	                        ref: 'option-' + i
	                    },
	                    (0, _strongify2.default)(o.text || o, _this2.state.value)
	                );
	            });

	            return _react2.default.createElement(
	                'div',
	                { className: _autoComplete2.default['auto-complete'], onBlur: function onBlur() {
	                        return _this2.setState({ isactive: false });
	                    } },
	                _react2.default.createElement(
	                    'label',
	                    null,
	                    this.props.label
	                ),
	                _react2.default.createElement('input', {
	                    className: _autoComplete2.default.input,
	                    placeholder: this.props.placeholder,
	                    type: 'text',
	                    ref: 'input',
	                    onKeyDown: this.handleMetaKeys.bind(this)
	                    // onChange={ throttle(this.handleValueChanges.bind(this)) }
	                    , onChange: this.handleValueChanges.bind(this),
	                    defaultValue: this.props.value
	                }),
	                _react2.default.createElement(
	                    'div',
	                    {
	                        className: (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, _autoComplete2.default.options, true), _defineProperty(_classNames2, _autoComplete2.default['options--active'], this.state.isactive), _classNames2)) },
	                    options
	                )
	            );
	        }
	    }]);

	    return AutoComplete;
	}(_react2.default.Component);

	exports.default = AutoComplete;

/***/ },
/* 51 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"auto-complete":"auto-complete-4u7Ul","input":"input-2S6Tl","options":"options-2erEX","options--active":"options--active-3mmkK","option-item":"option-item-263Cg","option-item--selected":"option-item--selected--K-2P"};

/***/ },
/* 52 */,
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (full, part) {
	    var pattern = new RegExp('(' + part + ')', 'ig'),
	        parts = full.split(pattern);

	    return parts.map(function (p, i) {
	        return pattern.test(p) ? _react2.default.createElement(
	            'strong',
	            { key: i },
	            part
	        ) : p;
	    });
	};

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _stringHash = __webpack_require__(55);

	var _stringHash2 = _interopRequireDefault(_stringHash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var uniqId = function uniqId(data) {
	    return 'dl-' + (0, _stringHash2.default)(JSON.stringify(data));
	};

	exports.default = function (_ref) {
	    var _ref$options = _ref.options,
	        options = _ref$options === undefined ? [] : _ref$options,
	        _ref$className = _ref.className,
	        className = _ref$className === undefined ? "" : _ref$className,
	        _ref$label = _ref.label,
	        label = _ref$label === undefined ? "" : _ref$label,
	        _ref$value = _ref.value,
	        value = _ref$value === undefined ? "" : _ref$value,
	        _ref$placeholder = _ref.placeholder,
	        placeholder = _ref$placeholder === undefined ? "" : _ref$placeholder,
	        _ref$onChange = _ref.onChange,
	        onChange = _ref$onChange === undefined ? function () {} : _ref$onChange;


	    var id = uniqId(options),
	        Options = options.map(function (o, i) {
	        return _react2.default.createElement(
	            'option',
	            { key: i, value: o.value || o },
	            o.text || o
	        );
	    });

	    return _react2.default.createElement(
	        'div',
	        { className: className },
	        _react2.default.createElement(
	            'label',
	            null,
	            label
	        ),
	        _react2.default.createElement('input', {
	            defaultValue: value,
	            list: id,
	            onChange: onChange,
	            placeholder: placeholder,
	            type: 'text'
	        }),
	        _react2.default.createElement(
	            'datalist',
	            { id: id },
	            Options
	        )
	    );
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = require("string-hash");

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RouteComponent = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _Error = __webpack_require__(57);

	var _Error2 = _interopRequireDefault(_Error);

	var _ssResolve = __webpack_require__(40);

	var _requestStatus = __webpack_require__(60);

	var _reactRedux = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// on server when mounted, dispatch action which sets status to 404 in store.
	var RouteComponent = exports.RouteComponent = (0, _ssResolve.wrap)(_Error2.default, function (props, store) {
	    return Promise.resolve(store.dispatch((0, _requestStatus.set404)()));
	});

	var mergeAllTheProps = function mergeAllTheProps(state, actions, own) {
	    return _extends({}, state, actions, own, {
	        title: "Page Not Found",
	        subtitle: "Sorry Not Sorry"
	    });
	};

	exports.default = (0, _reactRedux.connect)(undefined, undefined, mergeAllTheProps)(RouteComponent);

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(11);

	var _react2 = _interopRequireDefault(_react);

	var _reactHelmet = __webpack_require__(16);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _Error = __webpack_require__(58);

	var _Error2 = _interopRequireDefault(_Error);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NotFound = function NotFound(_ref) {
	    var _ref$title = _ref.title,
	        title = _ref$title === undefined ? "Error..." : _ref$title,
	        subtitle = _ref.subtitle,
	        children = _ref.children;
	    return _react2.default.createElement(
	        'section',
	        { className: _Error2.default.container },
	        _react2.default.createElement(_reactHelmet2.default, { title: title }),
	        _react2.default.createElement(
	            'header',
	            { className: _Error2.default.header },
	            _react2.default.createElement(
	                'h1',
	                { className: _Error2.default.title },
	                'Not Found'
	            ),
	            subtitle && _react2.default.createElement(
	                'h2',
	                { className: _Error2.default.subtitle },
	                subtitle
	            )
	        ),
	        _react2.default.createElement(
	            'div',
	            null,
	            children
	        )
	    );
	};

	exports.default = NotFound;

/***/ },
/* 58 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"container-1RSyw","header":"header-W-se6","title":"title-EOE1e","subtitle":"subtitle-3RVsl"};

/***/ },
/* 59 */,
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.set404 = undefined;

	var _requestStatus = __webpack_require__(61);

	var set404 = exports.set404 = function set404() {
	  return { type: _requestStatus.SET_REQUEST_404 };
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = people;
	var SET_REQUEST_404 = exports.SET_REQUEST_404 = "SET_REQUEST_404";

	function people() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
	    var action = arguments[1];

	    switch (action.type) {
	        case SET_REQUEST_404:
	            return 404;

	        default:
	            return state;
	    }
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(63);

	var _reduxThunk = __webpack_require__(64);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _env = __webpack_require__(22);

	var _reducers = __webpack_require__(65);

	var reducers = _interopRequireWildcard(_reducers);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// create the master reducer
	var rootReducer = (0, _redux.combineReducers)(reducers);

	// determine initial state
	var initialState = _env.isBrowser && window.__INITIAL_STATE__ || {};

	var reduxMiddleware = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), _env.isBrowser && typeof window.devToolsExtension !== "undefined" ? window.devToolsExtension() : function (f) {
	    return f;
	});

	// export a store creator factory with initial state if present...

	exports.default = function () {
	    return (0, _redux.createStore)(rootReducer, initialState, reduxMiddleware);
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _people = __webpack_require__(47);

	Object.defineProperty(exports, 'people', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_people).default;
	  }
	});

	var _siteNav = __webpack_require__(20);

	Object.defineProperty(exports, 'nav', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_siteNav).default;
	  }
	});

	var _requestStatus = __webpack_require__(61);

	Object.defineProperty(exports, 'requestStatus', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_requestStatus).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = require("html-minifier");

/***/ }
/******/ ]);