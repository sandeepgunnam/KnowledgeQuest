import { useState, useRef } from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useChat } from '../contexts/ChatContext';
import { sendMessageToLLM } from '../services/api';

const InputArea = () => {
  const [input, setInput] = useState('');
  const { addMessage, setIsTyping } = useChat();
  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    addMessage(userMessage);
    setInput('');
   
    // Set typing indicator
    setIsTyping(true);
    inputRef.current.focus();

    try {
      // Get bot response
      const botResponse = await sendMessageToLLM(input);
     
      // Add bot message
      addMessage({
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      });
    } catch (error) {
      addMessage({
        text: "Sorry, I encountered an error. Please try again.",
        sender: 'bot',
        timestamp: new Date(),
      });
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          inputRef={inputRef}
          fullWidth
          variant="outlined"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{ mr: 1 }}
        />
        <IconButton type="submit" color="primary" disabled={!input.trim()}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default InputArea;