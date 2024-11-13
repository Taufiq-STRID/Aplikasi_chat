import React, { useState } from 'react';
import Message from './Message.js';
import './ChatApp.css';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage = { message: input, sender: 'user' };
      setMessages([...messages, userMessage]);

      // Simulate bot response
      const botResponse = generateBotResponse(input);
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 1000);

      setInput('');
    }
  };

  const generateBotResponse = (userInput) => {
    let response = 'Saya tidak mengerti.';

    if (userInput.toLowerCase().includes('halo')) {
      response = 'Halo, apa kabar?';
    } else if (userInput.toLowerCase().includes('menikah')) {
      response = 'Saya senang berbicara denganmu!';
    } else if (userInput.toLowerCase().includes('kabar')) {
      response = 'Baik, Kamu bagaimana kabar?';
    }

    return { message: response, sender: 'bot' };
  };

  return (
    <div className="chat-app">
      <h1>Aplikasi Chatan Sederhana</h1>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <Message key={index} message={msg.message} sender={msg.sender} />
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Ketik pesan..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button onClick={handleSendMessage}>Kirim</button>
      </div>
    </div>
  );
};

export default ChatApp;
 