import React from 'react';
import './Message.css';

const Message = ({ message, sender }) => {
  return (
    <div className={`message ${sender === 'user' ? 'user' : 'bot'}`}>
      <span className="sender">{sender === 'user' ? 'You' : 'Bot'}</span>
      <p className="text">{message}</p>
    </div>
  );
};

export default Message;
