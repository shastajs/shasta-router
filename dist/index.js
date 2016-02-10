'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouterRedux = require('react-router-redux');

var _immutable = require('immutable');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var builtins = {
  Router: _reactRouter.Router,
  Route: _reactRouter.Route,
  Link: _reactRouter.Link,
  Redirect: _reactRouter.Redirect,
  IndexRoute: _reactRouter.IndexRoute,
  IndexLink: _reactRouter.IndexLink,
  IndexRedirect: _reactRouter.IndexRedirect
};

var middleware = (0, _reactRouterRedux.syncHistory)(_reactRouter.browserHistory);
var getRouterState = function getRouterState(state) {
  return state.getIn(['router', 'location']);
};

exports.default = (0, _extends3.default)({}, builtins, {
  history: _reactRouter.browserHistory,
  reducers: {
    router: function router() {
      return (0, _immutable.fromJS)(_reactRouterRedux.routeReducer.apply(undefined, arguments));
    }
  },
  actions: {
    router: _reactRouterRedux.routeActions
  },
  middleware: middleware,
  hook: function hook(store) {
    middleware.listenForReplays(store, getRouterState);
    return store;
  }
});
module.exports = exports['default'];