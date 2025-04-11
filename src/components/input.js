import React, { useState } from 'react';
import fetchResponse from './openaiService';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const handleUserInput = async (question) => {
    const response = await fetchResponse(question);
    setMessages([...messages, { question, response }]);
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <p><b>User:</b> {msg.question}</p>
            <p><b>LLM:</b> {msg.response}</p>
          </div>
        ))}
      </div>
      <InputBox onSubmit={handleUserInput} />
    </div>
  );
};

export default ChatWindow;