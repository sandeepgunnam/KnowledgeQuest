import { Box, CssBaseline, Container, AppBar, Toolbar, Typography } from '@mui/material';
import { ChatProvider } from './contexts/ChatContext';
import MessageList from './components/MessageList';
import InputArea from './components/InputArea';

function App() {
  return (
    <ChatProvider>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Conversational AI
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md" sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 0 }}>
          <MessageList />
          <InputArea />
        </Container>
      </Box>
    </ChatProvider>
  );
}

export default App;
