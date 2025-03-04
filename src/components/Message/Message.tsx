import React from 'react';
import {MsgProps} from '../../types/CounterType';
import './Message.css';

const Message: React.FC<MsgProps> = ({count}) => (
  <div className="msg">
    <h3>Incremented</h3>
    <span>{`Counter is now ${count}`}</span>
  </div>
);

export default Message;
