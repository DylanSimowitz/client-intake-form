import {SubmissionError} from 'redux-form'
import {initialize} from 'redux-form'

function revive(json) {
  const dateOrTime= /(d|D)ate|(t|T)ime/
  const trueOrFalse = /true|false/
  //if (key.match(REGEX)) {
    //value = new Date(value)
  //}
  //return value
  Object.keys(json).map(key => {
    if (json[key].match(trueOrFalse)) {
      json[key] = (json[key] === 'true')
    }
    if (key.match(dateOrTime)) {
      json[key] = new Date(json[key])
    }
  })
  return json
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
    .then(json => {
      dispatch(initialize(name, revive(json)))
    })
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
