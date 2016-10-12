import React from 'react'
import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import browserHistory from 'react-router/lib/browserHistory'
import Layout from 'containers/Layout'
import Account from 'containers/Account'
import Questionnaire from 'containers/Questionnaire'
import Authenticate from 'components/Authenticate'

class Routes extends React.Component {
  render() {
    return(
    
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <Route path="/form/questionnaire" component={Authenticate(Questionnaire)}/>
      <Route path="login" component={Account}/>
      <Route path="register" component={Account}/>
    </Route>
  </Router>
    )
  }
}

export default Routes
