import * as actionTypes from 'redux/actions/actionTypes'

export default function(state = {}, action) {
  switch(action.type) {
  case actionTypes.AUTHENTICATE:
    return { ...state, authenticated: true, user: action.user }
  case actionTypes.UNAUTHENTICATE:
    return {...state, authenticated: false, user: {}}
  default:
    return state
  }
}
