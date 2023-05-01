import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Container, Grid, List, ListItem, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import FadeTransition from '../../components/FadeTransition';
import Topbar from '../../components/Topbar';
import starcraft from '../../pictures/projectImages/starcraft.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1C1E13',
    },
    secondary: {
      main: '#ADD8E6',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    h1: {
      color: '#ADD8E6',
      fontSize: '12vh',
      '@media (max-width: 768px)': {
        fontSize: '10vw',
      },
    },
    h5: {
      color: '#ADD8E6',
    },
    h6: {
      color: '#ADD8E6',
      fontSize: '3vh'
    },
    body1: {
      color: '#ADD8E6',
      fontSize: '2.3vh'
    },
  },
});

const SCUnitCounter = () => {
  const stars = require('../../pictures/projectImages/Stars.jpg');
  const containerStyle = {
    position: 'relative',
    padding: 0,
    overflow: 'hidden',
    minHeight: '100vh',
    background: `url(${stars})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <ThemeProvider theme={theme}>
      <FadeTransition>
        <Container maxWidth={false} sx={{ ...containerStyle }}>
          <Topbar />
          <Grid container spacing={2}>
            <Grid item xs={1} md={1} />
            <Grid item xs={10} md={10} sx={{ mt: '4vh' }}>
              <Typography variant='h1' sx={{ textAlign: 'center' }}>SC2 Unit Counter </Typography>
              <hr className='full-width-hr' />
              <Typography variant='h6'>View live page <Link to='https://johntrieseverything.github.io/starcraft2-unit-counter/' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#ADD8E6' }}>here</Link></Typography>
              <Typography variant='h6'>View github repo <Link to='https://github.com/johnnam1121/starcraft2-unit-counter' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#ADD8E6' }}>here</Link></Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: '2vh' }}>
                <img src={starcraft} alt="oneshot image" style={{ width: '100%' }} />
              </Box>
              <List sx={{ paddingLeft: '15px', mt: '5vh', listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h5'>One of the games I enjoy playing is SC2</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h5'>Since I stuggle with unit composition in the game, I wanted to make a visual, interactive cheatsheet The webapp contains a units list page, a individual unit counter page that the player can interact with, and a team composition page to counter common team compositions</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h5'>The content and images were sourced from Carbot Animations, Liquidpedia, Osiris SC2 Guide, and from the game SC2 itself</Typography>
                </ListItem>
              </List>
              <Box style={{ position: 'fixed', left: '2%', top: '50%', transform: 'translateY(-50%)' }}>
                <Link to='/JobScraper' style={{ textDecoration: 'none', color: '#ADD8E6' }}>
                  <ArrowBackIosIcon style={{ fontSize: '7vh' }} />
                </Link>
              </Box>
              <Box style={{ position: 'fixed', right: '2%', top: '50%', transform: 'translateY(-50%)' }}>
                <Link to='/LittleLemon' style={{ textDecoration: 'none', color: '#ADD8E6' }}>
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

export default SCUnitCounter;
