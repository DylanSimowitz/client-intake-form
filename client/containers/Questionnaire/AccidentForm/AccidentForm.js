import React, {PropTypes} from 'react';
import {AutoComplete, RaisedButton, TimePicker, GridList, GridTile, MenuItem} from 'material-ui';
import {TextField,SelectField,DatePicker} from 'redux-form-material-ui'
import {Row, Col} from 'react-flexbox-grid';
import Dropzone from 'react-dropzone';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {connect} from 'react-redux'
import UploadIcon from 'material-ui/svg-icons/file/file-upload'
import ClearIcon from 'material-ui/svg-icons/content/clear'
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import Auto from './AccidentTypes/Auto';
import { openDialog } from 'redux/actions'

function onSubmitFail(error, dispatch) {
  if (error) {
    dispatch(openDialog(error._error))
  }
  else {
    dispatch(openDialog('Fix all invalid fields before submitting.'))
  }
}
function onSubmitSuccess(result, dispatch) {
  dispatch(openDialog('Your submission was successfully received.'))
}

class AccidentForm extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            photos: []
        }
    }
    styles = {
        dropzone: {
            width: '100%',
            height: '400px',
            backgroundColor: this.context.muiTheme.palette.accent2Color,
            color: this.context.muiTheme.palette.textColor,
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: this.context.muiTheme.fontFamily,
            border: '1px solid ' + this.context.muiTheme.borderColor,
            borderRadius: 5
        }
    }
    removePhoto = (selectedPhoto) => {
      this.props.array.remove('accidentPhotos',selectedPhoto)
    }
    render() {
        const caseTypes = [
            'Auto',
            'Motorcycle',
            'Slip & Fall',
            'Premises',
            'Malpractice',
            'Wrongful Death',
            'Dog Bites',
            'Product Liability'
        ]
        const {handleSubmit, previousPage, selectedCase, accidentPhotos} = this.props
        const {muiTheme} = this.context
        return (
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col xs={12} md={6}>
                        <Field name="accidentType" component={SelectField} fullWidth={true} floatingLabelText="Accident Type">
                          {caseTypes.map((caseType,item) => {
                            return <MenuItem value={caseType} primaryText={caseType}/>
                          })}
                        </Field>
                    </Col>
                    <Col xs={12} md={3}>
                        <Field name="accidentDate" component={DatePicker} floatingLabelText="Accident Date" fullWidth={true}/>
                    </Col>
                    <Col xs={12} md={3}>
                      <Field name="accidentTime" component={props =>
                      <TimePicker fullWidth={true} floatingLabelText="Accident Time" {...props.input} onChange={(event,value) => props.input.onChange(value)} onFocus={(event,value) => props.input.onFocus(value)} onBlur={(event,value) => props.input.onBlur(value)}/>
                    }/>
                    </Col>
                </Row>
                {(selectedCase === 'Auto' || selectedCase === 'Motorcycle') &&
                  <Auto/>
                }
                <Row>
                    <Col xs={12}>
                      <Field name="accidentPhotos" component={props =>
                        <Dropzone
                        onDrop={(photos) => {
                          accidentPhotos ? props.input.onChange([...accidentPhotos, ...photos]) : props.input.onChange(photos)
                        }} accept="image/*" style={this.styles.dropzone}>
                            <div>Drag and drop or click to upload photos.</div>
                            {/*<UploadIcon color={muiTheme.palette.primary1Color}/>*/}
                        </Dropzone>
                      } type="file"/>
                      <GridList cellHeight={200} cols={3}>
                        {accidentPhotos && accidentPhotos.map((photo,item,index) => {
                          return (
                            <GridTile key={photo.name} title={photo.name} subtitle={`${photo.size} bytes`} actionIcon={<ClearIcon color="white" onClick={() => this.removePhoto(index)}/>}>
                              <img src={photo.preview}/>
                            </GridTile>
                          )
                        })}
                      </GridList>
                    </Col>
                </Row>
                {this.props.stepper}
            </form>
        )
    }
}

AccidentForm.contextTypes = {
    muiTheme: PropTypes.object.isRequired
}

AccidentForm = reduxForm({form: 'questionnaire', destroyOnUnmount: false, onSubmitFail, onSubmitSuccess})(AccidentForm);

const selector = formValueSelector('questionnaire')
AccidentForm = connect(state => {
  const selectedCase = selector(state, 'accidentType')
  const accidentPhotos = selector(state, 'accidentPhotos')
  return {
    selectedCase,
    accidentPhotos
  }
})(AccidentForm)

export default AccidentForm;
