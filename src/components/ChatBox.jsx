import React, { useRef, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Message from './Message';

const ChatBox = ({ messages, selectedBotName, selectedBotDescription }) => {
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Container
      fluid
      style={{
        height: '89%',
        overflowY: 'auto',
        backgroundColor: '#f7f7f8',
        maxWidth: '100vw',
        border: '1px solid #dee2e6',
        borderRadius: '0.25rem',
        boxShadow: '0 1rem 3rem rgba(0, 0, 0, 0.175)',
        padding: '1.5rem',
      }}
    >
      <div style={{ marginBottom: '1.5rem' }}>
        <h4>Welcome to {selectedBotName}</h4>
        <p>{selectedBotDescription}</p>
      </div>

      {messages.map((message, index) => (
        <Row key={index}>
          {/* Pass the color for each message */}
          <Message 
            text={message.text} 
            sender={message.sender} 
            timestamp={message.timestamp} 
            color={message.color} 
          />
        </Row>
      ))}

      <div ref={chatEndRef} />
    </Container>
  );
};

export default ChatBox;

