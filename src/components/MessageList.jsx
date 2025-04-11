import { Box } from '@mui/material';
import Message from './Message';
import TypingIndicator from './TypingIndicator';
import { useChat } from '../contexts/ChatContext';

const MessageList = () => {
  const { messages, isTyping } = useChat();

  return (
    <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      {isTyping && <TypingIndicator />}
    </Box>
  );
};

export default MessageList;