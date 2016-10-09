import * as actionTypes from './actionTypes'
import jwt from 'jsonwebtoken'
import {SubmissionError} from 'redux-form'
import {openSnackbar} from './snackbarActions'

export function authenticate(token) {
  return {type: actionTypes.AUTHENTICATE, user: jwt.decode(token)}
}

export function unauthenticate() {
  return {type: actionTypes.UNAUTHENTICATE}
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken')
    dispatch(unauthenticate()) 
    dispatch(openSnackbar('Logout successful'))
  }
}

export function login(values) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      fetch('/api/auth', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      .then(response => response.json())
      .then(json => {
        const {token} = json
        if (token) {
          localStorage.setItem('jwtToken', token)
          dispatch(authenticate(token))
          resolve()
        }
        else {
          reject(new SubmissionError(json))
        }
      })
    })
  }
}

export function register(values) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      fetch('/api/register', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      .then(response => response.json())
      .then(json => {
        const {success} = json
        if (success) {
          resolve(values.email)
        }
        else {
          reject(new SubmissionError(json))
        }
      })
    })
  } 
}
