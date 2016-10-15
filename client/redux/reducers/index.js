import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import dialog from './dialog'
import auth from './auth'
import snackbar from './snackbar'
import admin from './admin'
import initialState from '../store/state'

const reducers = combineReducers({
  form: formReducer,
  auth,
  ui: combineReducers({snackbar, dialog}),
  admin,
})
const reducer = (state, action) => {
  if (action.type === 'UNAUTHENTICATE') {
    state = initialState 
  } 
  return reducers(state, action)
}

export default reducer
