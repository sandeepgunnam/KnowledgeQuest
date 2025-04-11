import { Box, Typography, Paper, Avatar } from '@mui/material';
import ReactMarkdown from 'react-markdown';

const Message = ({ message }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: message.sender === 'user' ? 'flex-end' : 'flex-start',
          maxWidth: '80%',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          {message.sender === 'bot' && (
            <Avatar sx={{ bgcolor: 'primary.main', mr: 1 }}>AI</Avatar>
          )}
          <Typography variant="caption" color="text.secondary">
            {message.sender === 'user' ? 'You' : 'Assistant'}
          </Typography>
        </Box>
        <Paper
          elevation={1}
          sx={{
            p: 2,
            bgcolor: message.sender === 'user' ? 'primary.light' : 'background.paper',
            borderRadius: message.sender === 'user'
              ? '18px 18px 0 18px'
              : '18px 18px 18px 0',
          }}
        >
          <ReactMarkdown>{message.text}</ReactMarkdown>
        </Paper>
        <Typography variant="caption" sx={{ mt: 0.5, color: 'text.secondary' }}>
          {new Date(message.timestamp).toLocaleTimeString()}
        </Typography>
      </Box>
    </Box>
  );
};

export default Message;