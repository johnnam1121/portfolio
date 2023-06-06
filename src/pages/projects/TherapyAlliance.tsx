import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Container, Grid, List, ListItem, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import FadeTransition from '../../components/FadeTransition';
import Footer from '../../components/Footer';
import Topbar from '../../components/Topbar';
import thearpyAlliance from '../../pictures/projectImages/TherapyAlliance.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#eeeeee',
    },
    secondary: {
      main: '#555555',
    },
  },
  typography: {
    h1: {
      color: '#00a99d',
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
      color: '#807E79',
      fontSize: '2.3vh'
    },
  },
});

const TherapyAlliance = () => {
  return (
    <ThemeProvider theme={theme}>
      <FadeTransition>
        <Container maxWidth={false} sx={{ bgcolor: 'primary.main', minHeight: '100vh' }}>
          <Topbar />
          <Grid container spacing={2}>
            <Grid item xs={1} md={1} />
            <Grid item xs={10} md={10} sx={{ mt: '4vh' }}>
              <Typography variant='h1' sx={{ textAlign: 'center' }}>Therapy Alliance</Typography>
              <hr className='full-width-hr' />
              <Typography variant='h6'>View live page <Link to='https://tdtherapyalliance.com/' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#f36523' }}>here</Link></Typography>
              <Typography variant='h6'>View github repo <Link to='https://github.com/johnnam1121/therapy-alliance-nextjs' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#f36523' }}>here</Link></Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: '2vh' }}>
                <img src={thearpyAlliance} alt="thearpyAlliance Home Page" style={{ width: '100%' }} />
              </Box>
              <List sx={{ paddingLeft: '15px', mt: '5vh', listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h6'>Created a website for a local therapy recruiting company using Nextjs and Material UI</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h6'>Used Figma to create the design and color theme for the website</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h6'>Was originally built using react but switched it to nextjs for SEO.</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h6'>Deployed the website using Netlify with a custom domain from google domains.</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h6'>Optimized SEO using google search console.</Typography>
                </ListItem>
              </List>
              <Box style={{ position: 'fixed', left: '2%', top: '50%', transform: 'translateY(-50%)' }}>
                <Link to='/LittleLemon' style={{ textDecoration: 'none', color: '#555555' }}>
                  <ArrowBackIosIcon style={{ fontSize: '7vh' }} />
                </Link>
              </Box>
              <Box style={{ position: 'fixed', right: '2%', top: '50%', transform: 'translateY(-50%)' }}>
                <Link to='/LiveChatApp' style={{ textDecoration: 'none', color: '#555555' }}>
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

export default TherapyAlliance;
