import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Container, Grid, List, ListItem, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import FadeTransition from '../../components/FadeTransition';
import Topbar from '../../components/Topbar';
import ChatApp from '../../pictures/projectImages/chat-app.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e5e5e5',
    },
    secondary: {
      main: '#807E79',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    h1: {
      color: '#807E79',
      fontSize: '12vh',
      '@media (max-width: 768px)': {
        fontSize: '10vw',
      },
    },
    h5: {
      color: '#807E79',
    },
    h6: {
      color: '#807E79',
      fontSize: '3vh'
    },
    body1: {
      color: '#807E79',
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
              <Typography variant='h5'>Current Project</Typography>
              {/* <Typography variant='h6'>View github repo <Link to='https://github.com/johnnam1121/one-shot-pocha' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#807E79' }}>here</Link></Typography> */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: '2vh' }}>
                <img src={ChatApp} alt="oneshot image" style={{ width: '100%' }} />
              </Box>
              <List sx={{ paddingLeft: '15px', mt: '5vh', listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h5'>The goal of this is to create a real time chat application from scratch using react for the client side and nodejs for the server side.</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h5'>I am using react so I can deploy it using gh-pages eventually. </Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h5'>For the back end, I am using express to create the server and socket.IO to communicate between the client and server. I am doing this to also get some practice using Nodejs. </Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h5'>I am honestly kind of struggling with it since majority of the tutorials make no sense and are too complex. I am trying to make it easier on myself by starting from the beginning and breaking it up into managable chunks. So far I got the client and server side communicating with each other. I finished the active users section and am starting to build the chat function. Breaking up the users into rooms is a little over my head right now so I will work on that after I finish the chat function. </Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h5'>Once the backend is complete, I will make the app look pretty which is the easy part imo.</Typography>
                </ListItem>
              </List>
              <Box style={{ position: 'fixed', left: '2%', top: '50%', transform: 'translateY(-50%)' }}>
                <Link to='/OneShotPocha' style={{ textDecoration: 'none', color: '#807E79' }}>
                  <ArrowBackIosIcon style={{ fontSize: '7vh' }} />
                </Link>
              </Box>
              <Box style={{ position: 'fixed', right: '2%', top: '50%', transform: 'translateY(-50%)' }}>
                <Link to='/YoutubeClone' style={{ textDecoration: 'none', color: '#807E79' }}>
                  <ArrowForwardIosIcon style={{ fontSize: '7vh' }} />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </FadeTransition>
    </ThemeProvider>
  );
};

export default LiveChatApp;
