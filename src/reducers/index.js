import { combineReducers } from 'redux';
import monsterReducer from './monster';

const rootReducer = combineReducers({
  monsters: monsterReducer,
});

export default rootReducer;
