# shasta-router [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url]

Wraps react-router + react-router-redux and provides the simplest API possible. Built for shasta, but will work in any redux application.

This is a work in progress - There is sparse documentation, no tests, and this is not on npm. Use at your own risk until we finish!

## Install

```
npm install shasta-router
```

## Get Started

- Add the reducer to your reducers as `router`
- Add the middleware to your store

### ES6 Example

```js
import { createStore, combineReducers } from 'shasta'
import { reducer, actions, middleware, hook } from 'shasta-router'

let reducers = combineReducers({
  // ... other app stuff

  router: reducer
})

// you get the point
let store = createStore({
  reducer: reducers,
  middleware: [
    middleware
  ]
})
hook(store)
```

## API

- history
- actions
- reducer
- middleware
- enhancer

### Components

These are all re-exported from react-router, the behavior is exactly the same. See the [react-router documentation](https://github.com/rackt/react-router/tree/master/docs) if you haven't used these before.

- Router
- Route
- Link
- Redirect
- IndexRoute
- IndexLink
- IndexRedirect

[downloads-image]: http://img.shields.io/npm/dm/shasta-router.svg
[npm-url]: https://npmjs.org/package/shasta-router
[npm-image]: http://img.shields.io/npm/v/shasta-router.svg

[travis-url]: https://travis-ci.org/shastajs/shasta-router
[travis-image]: https://travis-ci.org/shastajs/shasta-router.png?branch=master
