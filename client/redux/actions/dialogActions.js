import * as actionTypes from './actionTypes'

export function openDialog(title, message, action) {
  return { type: actionTypes.OPEN_DIALOG, message, title, action}
}

export function closeDialog() {
  return { type: actionTypes.CLOSE_DIALOG }
}

