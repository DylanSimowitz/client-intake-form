import React from 'react'
import { AutoComplete } from 'redux-form-material-ui'


class AutoCompletePlaces extends AutoComplete {
  constructor() {
    super()
    this.state = {
      places: []
    }
    this.autocomplete = new google.maps.places.AutocompleteService()
  }
  getPlaces = (address) => {
    let query = {
      input: address
    }
    let descriptions = []
    this.autocomplete.getPlacePredictions(query, (predictions, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        descriptions = predictions.map((value,index,array) => {
          console.log(value.description)
          return value.description
        })
      }
      else {
        console.log('Places API denied')
      }
    })
    this.setState({
      places: descriptions
    })
  }
  render() {
    return(
      <AutoComplete fullWidth={true} dataSource={this.state.places}/>
    )
  }
}
export default AutoCompletePlaces
