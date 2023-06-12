import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Container, Grid, List, ListItem, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import FadeTransition from '../../components/FadeTransition';
import Footer from '../../components/Footer';
import Topbar from '../../components/Topbar';
import ChatApp from '../../pictures/projectImages/LoginPage.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e3e3e3',
    },
    secondary: {
      main: '#555555',
    },
  },
  typography: {
    h1: {
      color: '#9090dd',
      fontSize: '12vh',
      '@media (max-width: 768px)': {
        fontSize: '10vw',
      },
    },
    h5: {
      color: '#555555',
    },
    h6: {
      color: '#555555',
      fontSize: '3vh'
    },
    body1: {
      color: '#555555',
      fontSize: '2.3vh'
    },
  },
});

const LiveChatApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <FadeTransition>
        <Container maxWidth={false} sx={{ bgcolor: 'primary.main', minHeight: '100vh' }}>
          <Topbar />
          <Grid container spacing={2}>
            <Grid item xs={1} md={1} />
            <Grid item xs={10} md={10} sx={{ mt: '4vh' }}>
              <Typography variant='h1' sx={{ textAlign: 'center' }}>Live Chat App </Typography>
              <hr className='full-width-hr' />
              <Typography variant='h6'>View github repo <Link to='https://github.com/johnnam1121/chat-app' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#9090dd', fontWeight: 'bold' }}>here</Link></Typography>
              <Typography variant='h6'>View live app <Link to='https://johnnam1121.github.io/chat-app' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#9090dd', fontWeight: 'bold' }}>here</Link></Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: '2vh' }}>
                <img src={ChatApp} alt="oneshot image" style={{ width: '100%' }} />
              </Box>
              <List sx={{ paddingLeft: '15px', mt: '5vh', listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h6'>Created a live chat app that can be opened on multiple browsers to communicate instantly like Facebook Messanger.</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h6'>Front end was created using React and Material UI and is deployed using Gh-pages Back end was made using Node.js, Express, SocketIO, and Cors and it is deployed using Railway</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h6'>Some features include room specific messaging, dark mode, active users list, and connect and disconnect greetings.</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h6'>This was the first app I was able to deploy both a front end and back end and successfully connect them together.</Typography>
                </ListItem>
              </List>
              <Box style={{ position: 'fixed', left: '2%', top: '50%', transform: 'translateY(-50%)' }}>
                <Link to='/TherapyAlliance' style={{ textDecoration: 'none', color: '#555555' }}>
                  <ArrowBackIosIcon style={{ fontSize: '7vh' }} />
                </Link>
              </Box>
              <Box style={{ position: 'fixed', right: '2%', top: '50%', transform: 'translateY(-50%)' }}>
                <Link to='/OneShotPocha' style={{ textDecoration: 'none', color: '#555555' }}>
                  <ArrowForwardIosIcon style={{ fontSize: '7vh' }} />
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Footer />
        </Container>
      </FadeTransition>
    </ThemeProvider>
  );
};

export default LiveChatApp;
