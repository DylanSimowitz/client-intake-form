import * as actionTypes from './actionTypes'
import {SubmissionError} from 'redux-form'

export function setForm(data) {
  return {type: actionTypes.LOAD_FORM, data}
}

export function loadForm(name, id) {
  return dispatch => {
    fetch(`/api/users/${id}/form/${name}`, {
      method: 'get',
      headers: {Authorization: `Bearer ${localStorage.getItem('jwtToken')}`},
    })
    .then(response => {
      return response.json()
    })
    .then(json => dispatch(setForm(json)))
  }
}

export function submitForm(name, id, body) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      fetch(`/api/users/${id}/form/${name}`, {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem('jwtToken')}`},
        body
      })
        .then(response => {
          return response.json()
        })
        .then(json => {
          if (json._error) {
            reject(new SubmissionError(json))
          }
          else {
            resolve()
          }
        })    
    }) 
  }
}
