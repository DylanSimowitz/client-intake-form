import React from 'react'
import MenuItem from 'material-ui/MenuItem'

const directions = [
  'North',
  'East',
  'South',
  'West'
]

export default directions.map((direction, item) => {
  return <MenuItem value={direction} primaryText={direction} key={item}/>
})
