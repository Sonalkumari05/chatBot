import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Sidebar = ({ selectBot, color }) => {
  const bots = [
    { name: 'Random Transformer', key: 'randomTransformer' },
    { name: 'Word Count Bot', key: 'wordCount' },
    { name: 'Vowel & Consonant Counter Bot', key: 'vowelConsonant' },
    { name: 'Text Reverser Bot', key: 'textReverser' },
    { name: 'Uppercase Bot', key: 'uppercase' },
    { name: 'Lowercase Bot', key: 'lowercase' },
    { name: 'Capitalize Words Bot', key: 'capitalize' },
    { name: 'Remove Vowels Bot', key: 'removeVowels' },
    { name: 'Remove Consonants Bot', key: 'removeConsonants' },
    { name: 'Repeat Words Bot', key: 'repeatWords' },
    { name: 'Replace Spaces with Underscores Bot', key: 'replaceSpaces' },
    { name: 'Shuffle Characters Bot', key: 'shuffleCharacters' },
  ];

  return (
    <div
      // className="sidebar"
      style={{
        padding: '10px',
        width: '35%',
        height: '89vh',
        backgroundColor: '#b8b8ff',
        color: '#fff',
        boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px 0 0 10px',
        overflowY: 'auto'
      }}
    >
      <h5 style={{ marginBottom: '20px', fontWeight: 'bold', color: '#eee', textAlign: 'center' }}>Bots</h5>
      <ListGroup variant="flush">
        {bots.map((bot) => (
          <ListGroup.Item
            key={bot.key}
            style={{
              backgroundColor: 'transparent',
              color: '#fff',
              cursor: 'pointer',
              padding: '12px 15px',
              borderRadius: '5px',
              marginBottom: '5px',
              transition: 'background-color 0.3s',
            }}
            onClick={() => selectBot(bot.name)} 
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#9381ff')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
          >
            {bot.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Sidebar;
