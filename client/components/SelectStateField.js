import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class SelectStateField extends SelectField {
  constructor() {
    super()
    this.state = {
      value: 1
    }
  }
  handleChange(event, index, value) {
    this.setState({value})
  }
  render() {
    return(
      <SelectField
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        floatingLabelText="State"
      >
      	<MenuItem value={1} primaryText="Alaska" />
        <MenuItem value={2} primaryText="Alabama" />
      	<MenuItem value={3} primaryText="Arizona" />
      	<MenuItem value={4} primaryText="Arkansas" />
      	<MenuItem value={5} primaryText="California" />
      	<MenuItem value={6} primaryText="Colorado" />
      	<MenuItem value={7} primaryText="Connecticut" />
      	<MenuItem value={8} primaryText="Delaware" />
      	<MenuItem value={9} primaryText="District Of Columbia" />
      	<MenuItem value={10} primaryText="Florida" />
      	<MenuItem value={11} primaryText="Georgia" />
      	<MenuItem value={12} primaryText="Hawaii" />
      	<MenuItem value={13} primaryText="Idaho" />
      	<MenuItem value={14} primaryText="Illinois" />
      	<MenuItem value={15} primaryText="Indiana" />
      	<MenuItem value={16} primaryText="Iowa" />
      	<MenuItem value={17} primaryText="Kansas" />
      	<MenuItem value={18} primaryText="Kentucky" />
      	<MenuItem value={19} primaryText="Louisiana" />
      	<MenuItem value={20} primaryText="Maine" />
      	<MenuItem value={21} primaryText="Maryland" />
      	<MenuItem value={22} primaryText="Massachusetts" />
      	<MenuItem value={23} primaryText="Michigan" />
      	<MenuItem value={24} primaryText="Minnesota" />
      	<MenuItem value={25} primaryText="Mississippi" />
      	<MenuItem value={26} primaryText="Missouri" />
      	<MenuItem value={27} primaryText="Montana" />
      	<MenuItem value={28} primaryText="Nebraska" />
      	<MenuItem value={29} primaryText="Nevada" />
      	<MenuItem value={30} primaryText="New Hampshire" />
      	<MenuItem value={31} primaryText="New Jersey" />
      	<MenuItem value={32} primaryText="New Mexico" />
      	<MenuItem value={33} primaryText="New York" />
      	<MenuItem value={34} primaryText="North Carolina" />
      	<MenuItem value={35} primaryText="North Dakota" />
      	<MenuItem value={36} primaryText="Ohio" />
      	<MenuItem value={37} primaryText="Oklahoma" />
      	<MenuItem value={38} primaryText="Oregon" />
      	<MenuItem value={39} primaryText="Pennsylvania" />
      	<MenuItem value={40} primaryText="Rhode Island" />
      	<MenuItem value={41} primaryText="South Carolina" />
      	<MenuItem value={42} primaryText="South Dakota" />
      	<MenuItem value={43} primaryText="Tennessee" />
      	<MenuItem value={44} primaryText="Texas" />
      	<MenuItem value={45} primaryText="Utah" />
      	<MenuItem value={46} primaryText="Vermont" />
      	<MenuItem value={47} primaryText="Virginia" />
      	<MenuItem value={48} primaryText="Washington" />
      	<MenuItem value={49} primaryText="West Virginia" />
      	<MenuItem value={50} primaryText="Wisconsin" />
      	<MenuItem value={51} primaryText="Wyoming" />
      </SelectField>
    )
  }
}

module.exports = SelectStateField
