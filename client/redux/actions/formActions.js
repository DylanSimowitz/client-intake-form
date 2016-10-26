import {SubmissionError} from 'redux-form'
import {initialize} from 'redux-form'
import formData from 'form-data-to-object'

function revive(json) {
  const dateOrTime= /(d|D)ate|(t|T)ime/
  const trueOrFalse = /true|false/
  //if (key.match(REGEX)) {
    //value = new Date(value)
  //}
  //return value
  Object.keys(json).map(key => {
    if (typeof json[key] === 'string') {
      if (json[key].match(trueOrFalse)) {
        json[key] = (json[key] === 'true')
      }
      if (key.match(dateOrTime)) {
        if (json[key].match(/GMT-0700/)) {
          let date = new Date(json[key]) 
          json[key] = date 
        }
      }
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
  body = formData.fromObj(body)
  let fdata = new FormData()
  Object.keys(body).map(key => {
    fdata.append(key, body[key])
  })
  //for (var pair of fdata.entries()) {
    //console.log(pair[0] + pair[1])
  //}
  return dispatch => {
    return new Promise((resolve, reject) => {
      fetch(`/api/users/${id}/form/${name}`, {
        method: 'post',
        headers: {Authorization: `Bearer ${localStorage.getItem('jwtToken')}`},
        body: fdata 
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
