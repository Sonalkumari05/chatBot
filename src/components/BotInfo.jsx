import React from 'react';
import { Container } from 'react-bootstrap';
import { Robot } from 'react-bootstrap-icons';

const BotInfo = ({ botName }) => {
  return (
    <Container  style={{ borderRadius: '15px', backgroundColor: '#f8f9fa', maxWidth: '900px', padding: '1rem', 
      textAlign: 'center'  }}>
      <Robot size={50} style={{ color: '#007bff' }} />
      <h3 style={{ marginTop: '0.5rem' }}>{botName}</h3>
      <p>@{botName.split(' ').join('')}</p>
      {/* <p>This bot processes text input by performing various operations such as converting to uppercase, lowercase, and counting vowels and consonants. It's designed to simplify string manipulation with ease and efficiency.</p> */}
    </Container>
  );
};

export default BotInfo;
