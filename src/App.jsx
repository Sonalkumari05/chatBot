import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ChatBox from './components/ChatBox';
import InputArea from './components/InputArea';
import Sidebar from './components/SideBar';
import BotNavbar from './components/Navbar';
import './App.css';

const bots = [
  { name: 'Word Count Bot', description: 'This bot counts the words in the message you send.', color: '#83c5be' },
  { name: 'Vowel & Consonant Counter Bot', description: 'This bot counts the number of vowels and consonants in your message.', color: '#ffd6ff' },
  { name: 'Text Reverser Bot', description: 'This bot reverses the text of your message.', color: '#90a955' },
  { name: 'Uppercase Bot', description: 'This bot converts your message to uppercase.', color: '#ffd166' },
  { name: 'Lowercase Bot', description: 'This bot converts your message to lowercase.', color: '#eddea4' },
  { name: 'Capitalize Words Bot', description: 'This bot capitalizes each word in your message.', color: '#ff99c8' },
  { name: 'Remove Vowels Bot', description: 'This bot removes all vowels from your message.', color: '#f07167' },
  { name: 'Remove Consonants Bot', description: 'This bot removes all consonants from your message.', color: '#84a98c' },
  { name: 'Repeat Words Bot', description: 'This bot repeats every word in your message twice.', color: '#b08968' },
  { name: 'Replace Spaces with Underscores Bot', description: 'This bot replaces spaces in your message with underscores.', color: '#9381ff' },
  { name: 'Shuffle Characters Bot', description: 'This bot shuffles the characters in each word of your message.', color: '#9a8c98' }
];

function App() {
  const [messages, setMessages] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [selectedBotDescription, setSelectedBotDescription] = useState('');
  const [selectedBotColor, setSelectedBotColor] = useState('#e1f5fe'); 
  const [isRandomMode, setIsRandomMode] = useState(false); 

  useEffect(() => {
    selectRandomBot();
  }, []);

  const selectRandomBot = () => {
    const randomBot = bots[Math.floor(Math.random() * bots.length)];
    setSelectedBot(randomBot.name);
    setSelectedBotDescription(randomBot.description);
    setSelectedBotColor(randomBot.color); 
  };

  const handleSend = (input) => {
    const userMessage = { text: input, sender: 'user', timestamp: new Date(), color:"#000000" };

    let botResponse = '';
    let currentBot = selectedBot;
    let botColor = selectedBotColor;

    if (isRandomMode) {
      const randomBot = bots[Math.floor(Math.random() * bots.length)];
      currentBot = randomBot.name;
      botColor = randomBot.color;
      botResponse = getBotResponse(input, currentBot);
    } else {
      botResponse = getBotResponse(input, currentBot);
    }

    const botMessage = { text: botResponse, sender: 'bot', timestamp: new Date(), botName: currentBot, color: botColor };

    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);

    if (isRandomMode) {
      selectRandomBot();
    }
  };

  const getBotResponse = (input, currentBot) => {
    let botResponse = '';
    if (currentBot === 'Word Count Bot') {
      const wordCount = input.split(' ').length;
      botResponse = `Word count: ${wordCount}`;
    } else if (currentBot === 'Vowel & Consonant Counter Bot') {
      const vowels = (input.match(/[aeiouAEIOU]/g) || []).length;
      const consonants = (input.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || []).length;
      botResponse = `Vowels: ${vowels}, Consonants: ${consonants}`;
    } else if (currentBot === 'Text Reverser Bot') {
      botResponse = input.split('').reverse().join('');
    } else if (currentBot === 'Uppercase Bot') {
      botResponse = input.toUpperCase();
    } else if (currentBot === 'Lowercase Bot') {
      botResponse = input.toLowerCase();
    } else if (currentBot === 'Capitalize Words Bot') {
      botResponse = input.replace(/\b\w/g, (char) => char.toUpperCase());
    } else if (currentBot === 'Remove Vowels Bot') {
      botResponse = input.replace(/[aeiouAEIOU]/g, '');
    } else if (currentBot === 'Remove Consonants Bot') {
      botResponse = input.replace(/[^aeiouAEIOU]/g, '');
    } else if (currentBot === 'Repeat Words Bot') {
      botResponse = input.split(' ').map((word) => `${word} ${word}`).join(' ');
    } else if (currentBot === 'Replace Spaces with Underscores Bot') {
      botResponse = input.replace(/\s/g, '_');
    } else if (currentBot === 'Shuffle Characters Bot') {
      botResponse = input
        .split(' ')
        .map((word) => word.split('').sort(() => Math.random() - 0.5).join(''))
        .join(' ');
    } else {
      botResponse = `I don't understand this bot action.`;
    }

    return botResponse;
  };

  const handleBotSelection = (botName) => {
    if (botName === 'Random Transformer') {
      setIsRandomMode(true);
      selectRandomBot(); 
    } else {
      setIsRandomMode(false);
      const selectedBotInfo = bots.find((bot) => bot.name === botName);
      setSelectedBot(selectedBotInfo.name);
      setSelectedBotDescription(selectedBotInfo.description);
      setSelectedBotColor(selectedBotInfo.color); 
    }
  };

  return (
    <Container fluid style={{ height: '100vh', backgroundColor: '#f0f2f5', paddingTop: '60px', display: 'flex' }}>
      <Sidebar selectBot={handleBotSelection} color={selectedBotColor} /> 
      <Container
        style={{ width: '100%' }}
      >
        <BotNavbar botName={selectedBot} /> 
        <ChatBox
          messages={messages}
          selectedBotName={selectedBot}
          selectedBotDescription={selectedBotDescription}
          color={selectedBotColor}
        />
        <InputArea onSend={handleSend} />
      </Container>
    </Container>
  );
}

export default App;
