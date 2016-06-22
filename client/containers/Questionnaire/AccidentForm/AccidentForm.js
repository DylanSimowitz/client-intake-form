import React, {PropTypes} from 'react';
import {AutoComplete, RaisedButton, TimePicker, GridList, GridTile} from 'material-ui';
import {TextField} from 'redux-form-material-ui'
import {Grid, Row, Col} from 'react-flexbox-grid';
import Dropzone from 'react-dropzone';
import {Field, reduxForm} from 'redux-form';
import UploadIcon from 'material-ui/svg-icons/file/file-upload'
import ClearIcon from 'material-ui/svg-icons/content/clear'

class AccidentForm extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            photos: []
        }
    }
    styles = {
        imageInput: {
            cursor: 'pointer',
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            width: '100%',
            opacity: 0
        },
        dropzone: {
            width: '100%',
            height: '400px',
            backgroundColor: this.context.muiTheme.palette.canvasColor,
            color: this.context.muiTheme.palette.textColor,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: this.context.muiTheme.fontFamily,
            border: '1px solid ' + this.context.muiTheme.borderColor
        }
    }
    onDrop = (photos) => {
        console.log(photos);
        this.setState({
            photos: [...photos]
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
        const {handleSubmit, previousPage} = this.props
        const {muiTheme} = this.context
        return (
            <form onSubmit={handleSubmit} onChange={e => e.stopPropagation()}>
                <Row>
                    <Col xs={12} md={6}>
                        <Field name="accidentType" component={accidentType => <AutoComplete floatingLabelText="Case Type" fullWidth={true} dataSource={caseTypes} filter={AutoComplete.noFilter} openOnFocus={true} {...accidentType}/>}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <TimePicker floatingLabelText="Accident Time" fullWidth={true}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Field name="accidentCity" component={TextField} floatingLabelText="Accident City" fullWidth={true}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <Field name="accidentStreet1" component={TextField} floatingLabelText="Cross Street" fullWidth={true}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <Field name="accidentStreet2" component={TextField} floatingLabelText="Cross Street" fullWidth={true}/>
                    </Col>
                    <Col xs={12} md={4}>
                        <Field name="accidentStreetClient" component={TextField} floatingLabelText="Street Client On" fullWidth={true}/>
                    </Col>
                    <Col xs={12} md={4}>
                        <Field name="accidentDirectionClient" component={TextField} floatingLabelText="Direction" fullWidth={true}/>
                    </Col>
                    <Col xs={12} md={4}>
                        <Field name="accidentLaneClient" component={TextField} floatingLabelText="Lane" fullWidth={true}/>
                    </Col>
                    <Col xs={12} md={4}>
                        <Field name="accidentStreetDefendant" component={TextField} floatingLabelText="Street Defendant On" fullWidth={true}/>
                    </Col>
                    <Col xs={12} md={4}>
                        <Field name="accidentDirectionDefendant" component={TextField} floatingLabelText="Direction" fullWidth={true}/>
                    </Col>
                    <Col xs={12} md={4}>
                        <Field name="accidentLaneDefendant" component={TextField} floatingLabelText="Lane" fullWidth={true}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <Field name="accidentPersonsCount" component={TextField} floatingLabelText="Persons in Auto" fullWidth={true}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <Field name="accidentPersonsInjured" component={TextField} floatingLabelText="Persons Injured" fullWidth={true}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Field name="accidentDescription" component={TextField} floatingLabelText="Accident Description" fullWidth={true} multiLine={true} rows={8}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Dropzone onDrop={this.onDrop} accept="image/*" style={this.styles.dropzone}>
                            <div>Drag and drop or click to upload photos.</div>
                            <UploadIcon color={muiTheme.palette.primary1Color}/>
                        </Dropzone>
                        <GridList cellHeight={200} cols={3}>
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

export default AccidentForm;
