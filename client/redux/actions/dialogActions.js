import * as actionTypes from './actionTypes'

export function openDialog(title, message) {
  return { type: actionTypes.OPEN_DIALOG, message, title }
}

export function closeDialog() {
  return { type: actionTypes.CLOSE_DIALOG }
}

