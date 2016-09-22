import * as actionTypes from 'redux/actions/actionTypes'

export default function(state = {}, action) {
  switch(action.type) {
  case actionTypes.OPEN_SNACKBAR:
    return { ...state, open: true, message: action.message }
  case actionTypes.CLOSE_SNACKBAR:
    return {...state, open: false}
  default:
    return state
  }
}
