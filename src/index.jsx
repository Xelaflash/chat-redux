// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// reducers
import messagesReducer from './reducers/messages_reducer';
import SelectedChannelReducer from './reducers/selected_channel_reducer';

const BaseReducer = (state = null) => state;
// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: BaseReducer,
  selectedChannel: SelectedChannelReducer,
  currentUser: BaseReducer
});

const initialState = {
  messages: [],
  channels: ['General', 'React', 'Paris'],
  selectedChannel: 'General',
  currentUser: prompt('what is your username') || `anonymous${Math.floor(10 + (Math.random() * 90))}`
};

const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
