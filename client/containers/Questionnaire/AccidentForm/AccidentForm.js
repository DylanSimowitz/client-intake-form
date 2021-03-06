import React, {PropTypes} from 'react'
import {GridList, GridTile}  from 'material-ui/GridList'
import MenuItem from 'material-ui/MenuItem'
import {SelectField, DatePicker, TimePicker, TextField} from 'redux-form-material-ui'
import {Row, Col} from 'react-flexbox-grid'
import Dropzone from 'react-dropzone'
import {Field, reduxForm, formValueSelector} from 'redux-form'
import {connect} from 'react-redux'
import ClearIcon from 'material-ui/svg-icons/content/clear'
import Auto from './AccidentTypes/Auto'
import MedicalMalpractice from './AccidentTypes/MedicalMalpractice'
import {openSnackbar} from 'redux/actions/snackbarActions'
//import validate from 'server/shared/validations/questionnaire';


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
    this.props.array.remove('accidentPhotos', selectedPhoto)
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
    const {handleSubmit, previousPage, selectedCase, accidentPhotos, showDatePickerTip} = this.props
    const {muiTheme} = this.context
    return (
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col xs={12} md={6}>
                        <Field name="accidentType" component={SelectField} fullWidth={true} floatingLabelText="Accident Type">
                          {caseTypes.map((caseType, index, array) => {
                            return <MenuItem key={index} value={caseType} primaryText={caseType}/>
                          })}
                        </Field>
                    </Col>
                    <Col xs={12} md={3}>
                        <Field name="accidentDate" component={DatePicker} locale="en-US" onShow={showDatePickerTip} floatingLabelText="Accident Date" fullWidth={true}/>
                    </Col>
                    <Col xs={12} md={3}>
                      <Field name="accidentTime" component={TimePicker} floatingLabelText="Accident Time" fullWidth={true}/>
                    </Col>
                </Row>
                {(() => {
                switch (selectedCase) {
                  case 'Auto':
                  case 'Motorcycle': return <Auto/>
                  case 'Malpractice': return <MedicalMalpractice/>
                  default: break
                }
                })()  
                }
                <Row>
                  <Col xs={12}>
                    <Field name="accidentDescription" component={TextField} floatingLabelText="Accident Description" fullWidth={true} multiLine={true} rows={8}/>
                  </Col>
                </Row>
                  <Col xs={12}>
                    <Field name="accidentHobbies" component={TextField} floatingLabelText="What hobbies have you had to curtail?" fullWidth={true} multiLine={true} rows={8}/>
                  </Col>
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
                      <GridList>
                        {accidentPhotos && accidentPhotos.map((photo, index) => {
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

AccidentForm = reduxForm({form: 'questionnaire', destroyOnUnmount: false})(AccidentForm)

const selector = formValueSelector('questionnaire')
AccidentForm = connect(state => {
  const selectedCase = selector(state, 'accidentType')
  const accidentPhotos = selector(state, 'accidentPhotos')
  return {
    selectedCase,
    accidentPhotos
  }
})(AccidentForm)

export default AccidentForm
