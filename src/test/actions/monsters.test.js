import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { fetchMonsters } from '../../actions/index';
import monstersTestData from '../test_data/monsters.json';

const mockStore = configureStore([thunk]);

describe('Test for monsters api request', () => {
  test('Fetch 5 monsters', () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        results: monstersTestData,
      },
    }));

    const store = mockStore([]);

    store.dispatch(fetchMonsters('?limit=5'))
      .then(() => {
        const actions = store.getActions();

        expect(actions[0].type).toBe('FETCH_MONSTERS_REQUEST');
        expect(actions[1].type).toBe('FETCH_MONSTERS_SUCCESS');
        expect(actions[1].payload).toEqual(monstersTestData);
      });
  });

  test('Invalid url generate error message', () => {
    const error = 'Error Message';
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(error)));
    const store = mockStore([]);

    store.dispatch(fetchMonsters('?invalid-url'))
      .then(() => {
        const actions = store.getActions();

        expect(actions[0].type).toBe('FETCH_MONSTERS_REQUEST');
        expect(actions[1].type).toBe('FETCH_MONSTERS_FAILURE');
        expect(actions[1].payload).toEqual(error);
      });
  });
});
