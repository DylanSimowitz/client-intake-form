import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import dialog from './dialog'
import auth from './auth'
import snackbar from './snackbar'
import formData from './form'
import admin from './admin'

const reducers = {
  form: formReducer,
  dialog,
  auth,
  snackbar,
  admin,
  formData 
}
const reducer = combineReducers(reducers)

export default reducer
