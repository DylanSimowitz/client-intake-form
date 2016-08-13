export default function onSubmit(data) {
    let body = new FormData()
    Object.keys(data).forEach(( key ) => {
          if (key === 'accidentPhotos') {
            data[key].map(file => {
              body.append(key, file, file.name)
            })
          } else {
            body.append(key, data[key]);
          }
    });
    return new Promise((resolve, reject) => {
      fetch('/clients', {
          method: 'post',
          body
      })
      .then(response => {
        if (response.status === 200) {
          resolve('It works')
        }
        else if (response.status === 400) {
          response.json()
          .then(json => {
            let submission = {_error: 'There was an error with your submission. Please correct the mistakes and try again.'}
            json.errors.map(error => {
              submission[error.field] = error.message
            })
            reject(new SubmissionError(submission))
          })
        }
      })
    })
}
