import { routeActions, syncHistory, routeReducer } from 'react-router-redux'
import {
  browserHistory,
  Router,
  Route,
  Link,
  Redirect,
  IndexRoute,
  IndexLink,
  IndexRedirect
} from 'react-router'

const builtins = {
  Router,
  Route,
  Link,
  Redirect,
  IndexRoute,
  IndexLink,
  IndexRedirect
}

const middleware = syncHistory(browserHistory)
const getRouterState = (state) => state.get('router').location

export default {
  ...builtins,
  history: browserHistory,
  reducers: {
    router: routeReducer
  },
  actions: {
    router: routeActions
  },
  middleware: middleware,
  hook: (store, getState) => {
    middleware.listenForReplays(store, getState || getRouterState)
    return store
  }
}
