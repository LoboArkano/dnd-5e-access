import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { fetchMonster } from '../../actions/index';
import monsterTestData from '../test_data/monster.json';

const mockStore = configureStore([thunk]);

describe('Test for a single monster api request', () => {
  test('Fetch the monster Abominable Beauty', () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({
      data: monsterTestData,
    }));

    const store = mockStore([]);

    store.dispatch(fetchMonster('abominable-beauty'))
      .then(() => {
        const actions = store.getActions();

        expect(actions[0].type).toBe('FETCH_MONSTERS_REQUEST');
        expect(actions[1].type).toBe('FETCH_MONSTER_SUCCESS');
        expect(actions[1].payload).toEqual(monsterTestData);
        expect(actions[1].payload[0].name).toEqual('Abominable Beauty');
      });
  });

  test('Invalid url generate error message', () => {
    const error = 'Error Message';
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(error)));
    const store = mockStore([]);

    store.dispatch(fetchMonster('celestial-cat'))
      .then(() => {
        const actions = store.getActions();

        expect(actions[0].type).toBe('FETCH_MONSTERS_REQUEST');
        expect(actions[1].type).toBe('FETCH_MONSTERS_FAILURE');
        expect(actions[1].payload).toEqual(error);
      });
  });
});
