// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// reducers
import MessagesReducer from './reducers/messages_reducer';
// import SelectedChannelReducer from './reducers/selected_channel_reducer';

const UserReducer = (state = null) => state;
// State and reducers
const reducers = combineReducers({
  messages: MessagesReducer,
  // channels: ChannelsReducer,
  // selectedChannel: SelectedChannelReducer,
  currentUser: UserReducer
});

const initialState = {
  messages: [
    {
      "author":"anonymous92",
      "content":"Hello world!",
      "created_at":"2017-09-26T23:03:16.365Z"
    },
    {
      "author":"anonymous77",
      "content":"My name is anonymous77",
      "created_at":"2017-09-26T23:03:21.194Z"
    }
  ],
  // channels: ['general', 'react', 'paris'],
  // selectedChannel: 'general',
  currentUser: `user${Math.floor(Math.random())}`
  // prompt('what is your username') ||
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
