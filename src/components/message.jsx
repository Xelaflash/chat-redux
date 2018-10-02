import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Message = (props) => {
  return (
    <li className="list-group-item">
      <p>{props.message.content}</p>
      <p>{props.message.author}</p>
      <p>{props.message.created_at}</p>
    </li>
  );
};

export default Message;
