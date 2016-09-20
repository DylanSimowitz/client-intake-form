import * as actionTypes from './actionTypes'

export function openDialog(message) {
  return { type: actionTypes.OPEN_DIALOG, message }
}

export function closeDialog() {
  return { type: actionTypes.CLOSE_DIALOG }
}
