import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/message';

class MessageList extends Component {
  renderList() {
    return this.props.messages.map((message) => {
      return (
        <Message message={message} key={message.author} />
      );
    });
  }

  render() {
    return (
      <ul className="list-group messages">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(MessageList);
