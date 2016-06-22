import React from 'react';
import {MenuItem} from 'material-ui';
import states from './states';

export default states.map((state,item) => {
        return <MenuItem value={state.abbreviation} primaryText={state.name} key={item}/>
      })
