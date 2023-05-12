import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Container, Grid, List, ListItem, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import FadeTransition from '../../components/FadeTransition';
import Footer from '../../components/Footer';
import Topbar from '../../components/Topbar';
import OneShot from '../../pictures/projectImages/Oneshot.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#242526',
    },
    secondary: {
      main: '#ffebcd',
    },
  },
  typography: {
    h1: {
      color: '#ffebcd',
      fontSize: '12vh',
      '@media (max-width: 768px)': {
        fontSize: '10vw',
      },
    },
    h5: {
      color: '#ffebcd',
    },
    h6: {
      color: '#ffebcd',
      fontSize: '3vh'
    },
    body1: {
      color: '#807E79',
      fontSize: '2.3vh'
    },
  },
});

const OnesShotPocha = () => {
  return (
    <ThemeProvider theme={theme}>
      <FadeTransition>
        <Container maxWidth={false} sx={{ bgcolor: 'primary.main', minHeight: '100vh' }}>
          <Topbar />
          <Grid container spacing={2}>
            <Grid item xs={1} md={1} />
            <Grid item xs={10} md={10} sx={{ mt: '4vh' }}>
              <Typography variant='h1' sx={{ textAlign: 'center' }}>One Shot Pocha</Typography>
              <hr className='full-width-hr' />
              <Typography variant='h6'>View live page <Link to='https://johnnam1121.github.io/one-shot-pocha/' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#006a4e' }}>here</Link></Typography>
              <Typography variant='h6'>View github repo <Link to='https://github.com/johnnam1121/one-shot-pocha' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#006a4e' }}>here</Link></Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: '2vh' }}>
                <img src={OneShot} alt="oneshot image" style={{ width: '100%' }} />
              </Box>
              <List sx={{ paddingLeft: '15px', mt: '5vh', listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h6'>Created a website for a local restaurant/karaoke bar using react and bootstrap</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h6'>For the gallery and reservations, I thought about making some backend servers but I wanted the website to be as simple as possible and static so it is easy for my friend to manage. </Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h6'>The only part that uses a backend is the contact/email section which uses formspree as the api. The reservation section uses Calendy as a component so I didnt have to make a backend.</Typography>
                </ListItem>
              </List>
              <Box style={{ position: 'fixed', left: '2%', top: '50%', transform: 'translateY(-50%)' }}>
                <Link to='/LiveChatApp' style={{ textDecoration: 'none', color: '#006a4e' }}>
                  <ArrowBackIosIcon style={{ fontSize: '7vh' }} />
                </Link>
              </Box>
              <Box style={{ position: 'fixed', right: '2%', top: '50%', transform: 'translateY(-50%)' }}>
                <Link to='/YoutubeClone' style={{ textDecoration: 'none', color: '#006a4e' }}>
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

export default OnesShotPocha;
