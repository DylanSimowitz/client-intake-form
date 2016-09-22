import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import Layout from 'containers/Layout'
import Login from 'containers/Login'
import Questionnaire from 'containers/Questionnaire'

class Routes extends React.Component {
  render() {
    return(
    
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <Route path="questionnaire" component={Questionnaire}/>
      <Route path="login" component={Login}/>
    </Route>
  </Router>
    )
  }
}

export default Routes
