import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  submit: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '20px'
  }
}

const SubmitButton = (props) => {
  return(
        <div style={styles.submit}>
          <RaisedButton type="submit" label={props.label || 'Submit'} secondary={true}/>
        </div>
  )  
}

export default SubmitButton
