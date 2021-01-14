import {
  fetchMonstersRequest, fetchMonstersSuccess,
  fetchMonsterSuccess, fetchMonstersFailure,
} from '../../actions/index';
import monstersTestData from '../test_data/monsters.json';
import monsterTestData from '../test_data/monster.json';

describe('Test for actions', () => {
  test('Receive action request', () => {
    const action = {
      type: 'FETCH_MONSTERS_REQUEST',
    };

    expect(fetchMonstersRequest().type).toEqual(action.type);
  });

  test('Receive monsters success action', () => {
    const action = {
      type: 'FETCH_MONSTERS_SUCCESS',
      payload: monstersTestData,
    };

    expect(fetchMonstersSuccess(monstersTestData).type).toEqual(action.type);
    expect(fetchMonstersSuccess(monstersTestData).payload).toEqual(action.payload);
  });

  test('Receive monster success action', () => {
    const action = {
      type: 'FETCH_MONSTER_SUCCESS',
      payload: monsterTestData,
    };

    expect(fetchMonsterSuccess(monsterTestData).type).toEqual(action.type);
    expect(fetchMonsterSuccess(monsterTestData).payload).toEqual(action.payload);
  });

  test('Receive monsters failure action', () => {
    const error = 'Error Message';
    const action = {
      type: 'FETCH_MONSTERS_FAILURE',
      payload: error,
    };

    expect(fetchMonstersFailure(error).type).toEqual(action.type);
    expect(fetchMonstersFailure(error).payload).toEqual(action.payload);
  });
});
