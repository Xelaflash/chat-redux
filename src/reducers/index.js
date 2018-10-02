import { combineReducers } from 'redux';
import MessagesReducer from './messages_reducer';
import ChannelsReducer from './channels_reducer';
import SelectedChannelReducer from './selected_channel_reducer';
import UserReducer from './user_reducer';

const rootReducer = combineReducers({
  messages: MessagesReducer,
  channels: ChannelsReducer,
  selectedChannel: SelectedChannelReducer,
  currentUser: UserReducer
});

export default rootReducer;
