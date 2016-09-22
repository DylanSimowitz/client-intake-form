import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import dialog from './dialog'
import auth from './auth'
import snackbar from './snackbar'

const reducers = {
  form: formReducer,
  dialog,
  auth,
  snackbar
}
const reducer = combineReducers(reducers)

export default reducer
