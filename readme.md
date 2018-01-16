# redux-array-middleware

This middleware allows you to dispatch array of actions to a redux store

# Installation

```sh
npm i redux-array-middleware

# or

yarn add redux-array-middleware
```

# Usage

```js
import arrayMiddleware from 'redux-array-middleware';
import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer, {}, applyMiddleware(arrayMiddleware));

// ... dispatch

store.dispatch([
  { type: 'action1' },
  { type: 'action2', payload: 'sample action' },
  [
    { type: 'nested_array' },
    [
      { type: 'deeply_nested_array_is_supported' },
      [{ type: 'any', payload: 'level' }],
    ],
    [
      // even empty array too
    ],
  ],
]);
```
