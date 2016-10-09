import * as actionTypes from 'redux/actions/actionTypes'

export default function(state = {}, action) {
  switch(action.type) {
    case actionTypes.LOAD_FORM:
      return action.data
    default:
      return state
  }
}
