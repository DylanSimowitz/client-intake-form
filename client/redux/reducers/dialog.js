import * as actionTypes from 'redux/actions/actionTypes'

export default function(state = {}, action) {
  switch(action.type) {
  case actionTypes.OPEN_DIALOG:
    return { ...state, open: true, title: action.title, message: action.message, action: action.action }
  case actionTypes.CLOSE_DIALOG:
    return {...state, open: false}
  default:
    return state
  }
}
