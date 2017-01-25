import { combineReducers } from 'redux';
import FestivalsReducer from './FestivalsReducer';

const rootReducer = combineReducers({
  festivals: FestivalsReducer
});

export default rootReducer;
