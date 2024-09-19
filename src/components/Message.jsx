import React from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';

const Message = ({ text, sender, timestamp, color }) => {
  const isUser = sender === 'user';
  const formattedTime = moment(timestamp).format('h:mm A');

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: isUser ? 'flex-end' : 'flex-start', 
      marginBottom: '1rem' 
    }}>
      <Card
        style={{
          maxWidth: '70%',
          borderRadius: isUser ? '15px 15px 0px 15px' : '15px 15px 15px 0px',
          backgroundColor: isUser ? '#007bff' : color,  // Bot message gets its own color, user message stays blue
          color: isUser ? 'white' : '#333',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '12px 20px',
        }}
      >
        <div>{text}</div>
        <small
          style={{
            display: 'block',
            marginTop: '10px',
            textAlign: 'right',
            fontSize: '0.75rem',
            color: isUser ? '#d1d1d1' : '#555',
          }}
        >
          {formattedTime}
        </small>
      </Card>
    </div>
  );
};

export default Message;
