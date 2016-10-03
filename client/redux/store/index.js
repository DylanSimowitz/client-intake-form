import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  // if (process.env.NODE_ENV === 'development') {
  return createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(
          thunkMiddleware
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    )
//   }
//   return createStore(
//     rootReducer,
//     initialState,
//     applyMiddleware(
//       thunkMiddleware
//     )
//   )
}
