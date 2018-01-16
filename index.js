module.exports = function arrayMiddleware(store) {
  return function (next) {
    return function (action) {
      if (Array.isArray(action)) {
        action.forEach(store.dispatch)
        return
      }

      next(action)
    }
  }
}
