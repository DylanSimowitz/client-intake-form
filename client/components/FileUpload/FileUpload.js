import React from 'react'
import {RaisedButton, TextField} from 'material-ui'

class FileUpload extends React.Component {
  constructor() {
    super()
  }
  render() {
    const {
      button,
      textfield
    } = this.props
    let addButton
    if (button) {
      addButton = <RaisedButton {...button}/>
    }
    return (
      <div>
        <input type="file"/>
        {addButton}
      </div>
    )
  }
}

export default FileUpload
