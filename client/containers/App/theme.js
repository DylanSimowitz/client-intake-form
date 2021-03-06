import {fade} from 'material-ui/utils/colorManipulator'
import {
cyan500, cyan400,
pink600,
grey100, grey200, grey300, grey400, grey500,
indigo500, indigo700,
white, darkBlack, fullBlack
} from 'material-ui/styles/colors'

document.body.style.backgroundColor = grey100

const theme = {
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
    accent1Color: pink600,
    accent2Color: grey200,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey400,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  },
  textField: {
    hintColor: grey500,
    borderColor: grey400
  }
}

export default theme
