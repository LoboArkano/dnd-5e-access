import apiDnD from '../api/apiDnD';
import {
  FETCH_MONSTERS_FAILURE, FETCH_MONSTERS_REQUEST, FETCH_MONSTERS_SUCCESS,
  FETCH_MONSTER_SUCCESS, CHANGE_FILTER,
} from './types';

const fetchMonstersRequest = () => ({
  type: FETCH_MONSTERS_REQUEST,
});

const fetchMonstersSuccess = monsters => ({
  type: FETCH_MONSTERS_SUCCESS,
  payload: monsters,
});

const fectMonsterSuccess = monster => ({
  type: FETCH_MONSTER_SUCCESS,
  payload: monster,
});

const fetchMonstersFailure = error => ({
  type: FETCH_MONSTERS_FAILURE,
  payload: error,
});

const fetchMonsters = opt => (
  dispatch => {
    dispatch(fetchMonstersRequest());
    apiDnD(opt)
      .then(response => {
        const monsters = response.results;
        dispatch(fetchMonstersSuccess(monsters));
      })
      .catch(error => {
        dispatch(fetchMonstersFailure(error.message));
      });
  }
);

const fetchMonster = opt => (
  dispatch => {
    dispatch(fetchMonstersRequest());
    apiDnD(opt)
      .then(response => {
        const monster = response;
        dispatch(fectMonsterSuccess(monster));
      })
      .catch(error => {
        dispatch(fetchMonstersFailure(error.message));
      });
  }
);

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export { fetchMonsters, changeFilter, fetchMonster };
