import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { EmojiSmile, Send } from 'react-bootstrap-icons';
import EmojiPicker from 'emoji-picker-react'; 

const InputArea = ({ onSend }) => {
  const [input, setInput] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const handleSend = () => {
    if (input.trim() !== '') {
      onSend(input);
      setInput(''); 
      setShowPicker(false); 
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const onEmojiClick = (emojiData, event) => {
    setInput((prevInput) => prevInput + emojiData.emoji); 
  };

  return (
    <div style={{ position: 'fixed', bottom: '5px', width: '70%', paddingRight: '20px' }}>
      <InputGroup style={{ margin: '0 auto', marginBottom: '1rem' }}>
        <Button
          variant="light"
          onClick={() => setShowPicker(!showPicker)} 
          style={{
            borderRadius: '50%',
            marginRight: '10px',
            width: '45px',
            height: '45px',
          }}
        >
          <EmojiSmile size={20} style={{ color: '#007bff' }} />
        </Button>

        {showPicker && (
          <div style={{ position: 'absolute', bottom: '60px', zIndex: 1000 }}>
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </div>
        )}

        <Form.Control
          placeholder="Enter your text..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress} 
          style={{
            borderRadius: '30px',
            // padding: '15px 20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        />
        <Button
          variant="primary"
          onClick={handleSend}
          className="d-flex align-items-center justify-content-center"
          style={{
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            marginLeft: '10px',
          }}
        >
          <Send size={20} />
        </Button>
      </InputGroup>
    </div>
  );
};

export default InputArea;
