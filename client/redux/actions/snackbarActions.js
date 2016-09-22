import * as actionTypes from './actionTypes'

export function openSnackbar(message) {
  return({type: actionTypes.OPEN_SNACKBAR, message})  
}

export function closeSnackbar() {
  return({type: actionTypes.CLOSE_SNACKBAR}) 
}
