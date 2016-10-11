import React, {Component} from 'react'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import SelectClient from './SelectClient'
import ClientActions from './ClientActions'

class AdminBar extends Component {
  

  render() {
    return(
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Admin"/>
        </ToolbarGroup>
        <ToolbarGroup>
          <SelectClient/>
          <ClientActions/>
        </ToolbarGroup>
      </Toolbar>
    )
  } 
}

export default AdminBar
