import * as actionTypes from './actionTypes'

export function openSnackbar(message, duration = 3000) {
  return({type: actionTypes.OPEN_SNACKBAR, message, duration})  
}

export function closeSnackbar() {
  return({type: actionTypes.CLOSE_SNACKBAR}) 
}
