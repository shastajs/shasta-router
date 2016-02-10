import { routeActions, syncHistory, routeReducer } from 'react-router-redux'
import { fromJS } from 'immutable'
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
const getRouterState = (state) => {
  const routerState = state.getIn([ 'router', 'location' ])
  return routerState ? undefined : routerState.toJS()
}

export default {
  ...builtins,
  history: browserHistory,
  reducers: {
    router: (...args) => fromJS(routeReducer(...args))
  },
  actions: {
    router: routeActions
  },
  middleware: middleware,
  hook: (store) => {
    middleware.listenForReplays(store, getRouterState)
    return store
  }
}
