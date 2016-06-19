import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const reducers = {
  form: formReducer
}
const reducer = combineReducers(reducers);

export default reducer;
