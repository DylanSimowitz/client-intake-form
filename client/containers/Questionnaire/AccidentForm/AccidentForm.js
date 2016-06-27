import React, {PropTypes} from 'react';
import {AutoComplete, RaisedButton, TimePicker, GridList, GridTile, MenuItem} from 'material-ui';
import {TextField,SelectField} from 'redux-form-material-ui'
import {Row, Col} from 'react-flexbox-grid';
import Dropzone from 'react-dropzone';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {connect} from 'react-redux'
import UploadIcon from 'material-ui/svg-icons/file/file-upload'
import ClearIcon from 'material-ui/svg-icons/content/clear'
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import VehicleAccident from './VehicleAccident';

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
    onDrop = (photos) => {
        console.log(photos);
        this.setState({
            photos: [...this.state.photos, ...photos]
        })
    }
    removePhoto = (selectedPhoto) => {
      this.setState({
        photos: this.state.photos.filter(photo => {
          return photo.name !== selectedPhoto
      })
      })
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
        const {handleSubmit, previousPage, selectedCase} = this.props
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
                    <Col xs={12} md={6}>
                      <Field name="accidentTime" component={accidentTime =>
                      <TimePicker fullWidth={true} floatingLabelText="Accident Time" {...accidentTime} value={accidentTime.value || new Date()} onChange={(event,date) => accidentTime.onChange(date)} onBlur={(event,date) => accidentTime.onBlur(date)}/>
                    }/>
                    </Col>
                </Row>
                {(selectedCase === 'Auto' || selectedCase === 'Motorcycle') &&
                  <VehicleAccident/>
                }
                <Row>
                    <Col xs={12}>
                        <Dropzone onDrop={this.onDrop} accept="image/*" style={this.styles.dropzone}>
                            <div>Drag and drop or click to upload photos.</div>
                            {/*<UploadIcon color={muiTheme.palette.primary1Color}/>*/}
                        </Dropzone>
                        <GridList cellHeight={200} cols={window.innerWidth < 1400 ? 2 : 3}>
                          {this.state.photos.map((photo,item) => {
                            return (
                              <GridTile key={photo.name} title={photo.name} subtitle={`${photo.size} bytes`} actionIcon={<ClearIcon color="white" onClick={() => this.removePhoto(photo.name)}/>}>
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

AccidentForm = reduxForm({form: 'questionnaire', destroyOnUnmount: false})(AccidentForm);

const selector = formValueSelector('questionnaire')
AccidentForm = connect(state => {
  const selectedCase = selector(state, 'accidentType')
  const accidentTime = selector(state, 'accidentTime')
  return {
    selectedCase,
    accidentTime
  }
})(AccidentForm)

export default AccidentForm;
