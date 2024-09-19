import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Robot } from 'react-bootstrap-icons';

const BotNavbar = ({ botName }) => {
  return (
    <Navbar bg="light" fixed="top" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Container>
        <Navbar.Brand style={{ display: 'flex', alignItems: 'center' }}>
          <Robot size={30} style={{ marginRight: '10px', color: 'black' }} />
          <span style={{ marginRight: '10px', color: 'black' }}>{botName}</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default BotNavbar;
