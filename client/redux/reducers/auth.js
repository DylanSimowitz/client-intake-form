import * as actionTypes from 'redux/actions/actionTypes'

export default function(state = {}, action) {
  switch(action.type) {
  case actionTypes.AUTHENTICATED:
    return { ...state, auth: true }
  default:
    return state
  }
}
