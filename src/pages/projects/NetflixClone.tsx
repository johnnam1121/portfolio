import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Container, Grid, List, ListItem, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import FadeTransition from '../../components/FadeTransition';
import Footer from '../../components/Footer';
import Topbar from '../../components/Topbar';
import NetflixPic from '../../pictures/projectImages/Netflix clone.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#dddddd ',
    },
    secondary: {
      main: '#141414 ',
    },
  },
  typography: {
    h1: {
      color: '#141414 ',
      fontSize: '12vh',
      '@media (max-width: 768px)': {
        fontSize: '10vw',
      },
    },
    h5: {
      color: '#141414 ',
    },
    h6: {
      color: '#141414 ',
      fontSize: '3vh'
    },
    body1: {
      color: '#807E79',
      fontSize: '2.3vh'
    },
  },
});

const NetflixClone = () => {
  return (
    <ThemeProvider theme={theme}>
      <FadeTransition>
        <Container maxWidth={false} sx={{ bgcolor: 'primary.main', minHeight: '100vh' }}>
          <Topbar />
          <Grid container spacing={2}>
            <Grid item xs={1} md={1} />
            <Grid item xs={10} md={10} sx={{ mt: '4vh' }}>
              <Typography variant='h1' sx={{ textAlign: 'center' }}>Netflix Clone</Typography>
              <hr className='full-width-hr' />
              <Typography variant='h6'>View live page <Link to='https://movie-site-clone-git-main-johnnam1121.vercel.app/' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#e50914' }}>here</Link></Typography>
              <Typography variant='h6'>View github repo <Link to='https://github.com/johnnam1121/netflix-clone' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#e50914' }}>here</Link></Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: '2vh' }}>
                <img src={NetflixPic} alt="netflix clone homepage" style={{ width: '100%' }} />
              </Box>
              <List sx={{ paddingLeft: '15px', mt: '5vh', listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h6'>Created a Netflix clone using React, Tailwind CSS, Next.JS, Prisma, MongoDB, NextAuth and deployed it using Vercel.</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h6'>Added User log in feature. User can log in with a email account or through google and githubs OAuth options.</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h6'>Added a favorites list assigned to each user.</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h6'>Followed Code With Antonio's amazing
                    <Link to='https://www.youtube.com/watch?v=mqUN4N2q4qY&ab_channel=CodeWithAntonio' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#e50914' }}> tutorial </Link>
                    which was initially a bit complicated but after some research, I was able to follow along and learned a ton about Next.js and Tailwind CSS.
                  </Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h6'>The tutorial was also great at giving me a hands on experience with MongoDB and Prisma. Prisma is still a little over my head but the next project I work on
                    should be able to help with that
                  </Typography>
                </ListItem>
              </List>
              <Box style={{ position: 'fixed', left: '2%', top: '50%', transform: 'translateY(-50%)' }}>
                <Link to='/LittleLemon' style={{ textDecoration: 'none', color: '#141414 ' }}>
                  <ArrowBackIosIcon style={{ fontSize: '7vh' }} />
                </Link>
              </Box>
              <Box style={{ position: 'fixed', right: '2%', top: '50%', transform: 'translateY(-50%)' }}>
                <Link to='/TherapyAlliance' style={{ textDecoration: 'none', color: '#141414 ' }}>
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

export default NetflixClone;
