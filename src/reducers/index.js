import { combineReducers } from 'redux';
import monsterReducer from './monster';
import filterReducer from './filter';

const rootReducer = combineReducers({
  monsters: monsterReducer,
  filter: filterReducer,
});

export default rootReducer;
