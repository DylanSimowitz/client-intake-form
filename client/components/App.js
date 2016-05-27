import React from 'react';
import { AppBar,Drawer,MenuItem } from 'material-ui';
import Questionnaire from './Questionnaire';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import {
cyan500, cyan700,
grey100, grey300, grey400, grey500,
red400,
indigo500, indigo700,
white, darkBlack, fullBlack
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

require('normalize-css')

const lightBaseTheme = {
  spacing: {
    iconSize: 24,
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopDrawerMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56
  },
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: indigo500,
    primary2Color: indigo700,
    primary3Color: grey400,
    accent1Color: red400,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  }
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
  }
  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return(
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
        <AppBar title="Form" onLeftIconButtonTouchTap={this.handleToggle} iconClassNameRight="muidocs-icon-navigation-expand-more" zDepth={0}/>
        <Drawer
  docked={false}
  width={200}
  open={this.state.open}
  onRequestChange={(open) => this.setState({open})}
>
  <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
  <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
</Drawer>
        <Questionnaire caseType="auto" />
        </div>

      </MuiThemeProvider>
    )
  }
}

module.exports = App;
