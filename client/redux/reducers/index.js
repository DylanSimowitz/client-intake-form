import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import dialog from './dialog'

const reducers = {
  form: formReducer,
  dialog
}
const reducer = combineReducers(reducers)

export default reducer
