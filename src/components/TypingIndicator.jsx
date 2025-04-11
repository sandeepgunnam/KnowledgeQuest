import { Box, Typography, Avatar } from '@mui/material';

const TypingIndicator = () => {
  return (
    <Box sx={{ display: 'flex', mb: 2 }}>
      <Avatar sx={{ bgcolor: 'primary.main', mr: 1 }}>AI</Avatar>
      <Box>
        <Typography variant="caption" color="text.secondary">Assistant</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: 'text.secondary',
              mr: 1,
              animation: 'pulse 1s infinite',
              animationDelay: '0ms',
            }}
          />
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: 'text.secondary',
              mr: 1,
              animation: 'pulse 1s infinite',
              animationDelay: '300ms',
            }}
          />
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: 'text.secondary',
              animation: 'pulse 1s infinite',
              animationDelay: '600ms',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TypingIndicator;