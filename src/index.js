import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './components/App';
import rootReducer from './reducers/index';
import './assets/stylesheets/reset.css';
import './assets/stylesheets/index.css';

const INITIAL_STATE = {
  monsters: {
    loading: false,
    error: '',
    list: [],
    item: {},
  },
  filter: 'All',
};
const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
