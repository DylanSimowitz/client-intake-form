import React from 'react';
import {Tabs, Tab, TextField, DatePicker} from 'material-ui';
import {Grid, Row, Col} from 'react-flexbox-grid';

let styles = {
  DatePicker: {
    width: '100%'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto'
  }
}

class Questionnaire extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Tabs>
                <Tab label="Personal">
                    <Grid fluid={true}>
                      <div style={styles.container}>
                      <Row>
                          <Col xs={12}>
                              <TextField floatingLabelText="First Name" fullWidth={true}/>
                          </Col>
                      </Row>
                      <Row>
                          <Col xs={12}>
                              <TextField floatingLabelText="Last Name" fullWidth={true}/>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={6}>
                              <DatePicker floatingLabelText="Accident Date" style={styles.DatePicker} fullWidth={true} minDate={new Date('1940-01-02')} maxDate={new Date()}/>
                          </Col>

                          <Col xs={6}>
                              <TextField floatingLabelText="SSN" fullWidth={true}/>
                          </Col>
                          </Row>
                          <Row>
                          <Col xs={6}>
                              <TextField floatingLabelText="Home Phone" fullWidth={true}/>
                          </Col>
                          <Col xs={6}>
                              <TextField floatingLabelText="Cell Phone" fullWidth={true}/>
                          </Col>
                          </Row>
                          <Row>
                          <Col xs={12}>
                              <TextField floatingLabelText="Address" fullWidth={true}/>
                          </Col>
                          </Row>
                          <Row>
                          <Col xs={4}>
                              <TextField floatingLabelText="City" fullWidth={true}/>
                          </Col>
                          <Col xs={4}>
                              <TextField floatingLabelText="State" fullWidth={true}/>
                          </Col>
                          <Col xs={4}>
                              <TextField floatingLabelText="Zipcode" fullWidth={true}/>
                          </Col>
                          </Row>
                          <Row>
                          <Col xs={12}>
                              <TextField floatingLabelText="Email" fullWidth={true}/>
                          </Col>
                          </Row>
                          <Row>
                          <Col xs={6}>
                              <TextField floatingLabelText="Drivers License" fullWidth={true}/>
                          </Col>
                          <Col xs={6}>
                              <DatePicker floatingLabelText="Date of Birth" style={styles.DatePicker} fullWidth={true}/>
                          </Col>
                      </Row>
                      </div>

                    </Grid>

                </Tab>
                <Tab label="Employer">
                    <TextField floatingLabelText="Employer" fullWidth={true} className="col-xs-12"/>
                    <TextField floatingLabelText="Address" fullWidth={true} className="col-xs-12"/>
                    <TextField floatingLabelText="City" fullWidth={true} className="col-xs-4"/>
                    <TextField floatingLabelText="State" fullWidth={true} className="col-xs-4"/>
                    <TextField floatingLabelText="Zipcode" fullWidth={true} className="col-xs-4"/>
                </Tab>
            </Tabs>
        )
    }
}

module.exports = Questionnaire;
