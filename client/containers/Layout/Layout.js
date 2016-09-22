import React from 'react'
import Header from '../Header'
import ReduxDialog from 'components/ReduxDialog'
import ReduxSnackbar from 'components/ReduxSnackbar'
import {connect} from 'react-redux'

class Layout extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        {this.props.children}
        <ReduxDialog/> 
        <ReduxSnackbar/> 
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    dialog: state.dialog
  }
}

export default Layout = connect(mapStateToProps)(Layout)
