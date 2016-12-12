
              <Row>
                  <Col xs={12} md={6}>
                      <Field name="defendantFirstName" component={TextField} floatingLabelText="First Name" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <Field name="defendantLastName" component={TextField} floatingLabelText="Last Name" fullWidth={true}/>
                  </Col>
              </Row>
              <AddressFields form="defendant" prefix=""/>
              <Row>
                  <Col xs={12} md={4}>
                      <Field name="defendantDateOfBirth" component={DatePicker} floatingLabelText="Date of Birth" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <Field name="defendantDriversLicense" component={TextField} floatingLabelText="Driver's License" fullWidth={true}/>
                  </Col>
                  <Col xs={12} md={4}>
                      <Field name="defendantDriversLicenseState" component={SelectField} floatingLabelText="Driver's License State" fullWidth={true}>
                        {states}
                      </Field>
                  </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <Field name="defendantAutoInsuranceCompany" component={TextField} floatingLabelText="Auto Insurance Company" fullWidth={true}/>
                </Col>
                <Col xs={12} md={6}>
                  <Field name="defendantAutoInsurancePolicy" component={TextField} floatingLabelText="Policy Number" fullWidth={true}/>
                </Col>
                <Col xs={12}>
                  <Field name="defendantAutoInsuranceContact" component={Checkbox} label="I have been contacted by the defendant's insurance company"/>
                </Col>
              </Row>
              {contacted &&
              <Row>
                <Col xs={12} md={6}>
                  <Field name="defendantAutoInsuranceContactName" component={TextField} floatingLabelText="Contact Name" fullWidth={true}/>
                </Col>
                <Col xs={12} md={6}>
                  <Field name="defendantAutoInsuranceContactPhone" component={TextField} normalize={normalizePhone} floatingLabelText="Contact Phone" fullWidth={true}/>
                </Col>
                <Col xs={12}>
                  <Field name="defendantAutoInsuranceContactStatement" component={Checkbox} label="I gave a recorded statement"/>
                </Col>
              </Row> 
              }
