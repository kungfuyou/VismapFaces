import React from 'react';
import PropTypes from 'prop-types';
import Expire from './Expire';
import {Close} from '../svg/icons.js';

const Messages = ({messages, callback}) => {

  const messageCallback = (key) => {
    return () => callback(key);
  };

  const messageRow = (index, message) => {
    return (<li key={index} className={message.type}>
      <span className="icon close" onClick={messageCallback(index)}><Close /></span>
      {message.content}
    </li>);
  };

  return (
    <ul className="messages">
      {messages.map((message, index) => {
        const messages = index === 0 ?
          <Expire key={index} callback={messageCallback(index)}>
            {messageRow(index, message)}
          </Expire> :
          messageRow(index, message);
        return messages;
        }
      )}
    </ul>
  );
};


Messages.propTypes = {
  messages: PropTypes.array,
  callback: PropTypes.func
};

export default Messages;
