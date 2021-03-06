import {
  FETCH_MONSTERS_FAILURE, FETCH_MONSTERS_REQUEST,
  FETCH_MONSTERS_SUCCESS, FETCH_MONSTER_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  error: '',
  list: [],
  item: {},
};

const monsterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MONSTERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCH_MONSTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
        error: '',
      };
    case FETCH_MONSTER_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.payload,
        error: '',
      };
    case FETCH_MONSTERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default monsterReducer;
