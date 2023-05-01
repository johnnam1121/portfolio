import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Container, Grid, List, ListItem, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import FadeTransition from '../../components/FadeTransition';
import Topbar from '../../components/Topbar';
import littleLemon from '../../pictures/projectImages/littleLemon.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#dcd7d1',
    },
    secondary: {
      main: '#4D5C55',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    h1: {
      color: '#4D5C55',
      fontSize: '12vh',
      '@media (max-width: 768px)': {
        fontSize: '10vw',
      },
    },
    h5: {
      color: '#4D5C55',
    },
    h6: {
      color: '#4D5C55',
      fontSize: '3vh'
    },
    body1: {
      color: '#4D5C55',
      fontSize: '2.3vh'
    },
  },
});

const LittleLemon = () => {
  return (
    <ThemeProvider theme={theme}>
      <FadeTransition>
        <Container maxWidth={false} sx={{ bgcolor: 'primary.main', minHeight: '100vh' }}>
          <Topbar />
          <Grid container spacing={2}>
            <Grid item xs={1} md={1} />
            <Grid item xs={10} md={10} sx={{ mt: '4vh' }}>
              <Typography variant='h1' sx={{ textAlign: 'center' }}>Little Lemon </Typography>
              <hr className='full-width-hr' />
              <Typography variant='h6'>View live page <Link to='https://johnnam1121.github.io/littleLemon/' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#4D5C55' }}>here</Link></Typography>
              <Typography variant='h6'>View github repo <Link to='https://github.com/johnnam1121/littleLemon' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#4D5C55' }}>here</Link></Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: '2vh' }}>
                <img src={littleLemon} alt="oneshot image" style={{ width: '100%' }} />
              </Box>
              <List sx={{ paddingLeft: '15px', mt: '5vh', listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h5'>Created using the fake clients requirements through Metas certification course for front-end development</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h5'>Some of the requirements were to develop a home page and a reservation page The reservation form requires client-side validation before submitting</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h5'>The layout of the website was created using Figma.</Typography>
                </ListItem>
              </List>
              <Box style={{ position: 'fixed', left: '2%', top: '50%', transform: 'translateY(-50%)' }}>
                <Link to='/SCUnitCounter' style={{ textDecoration: 'none', color: '#4D5C55' }}>
                  <ArrowBackIosIcon style={{ fontSize: '7vh' }} />
                </Link>
              </Box>
              <Box style={{ position: 'fixed', right: '2%', top: '50%', transform: 'translateY(-50%)' }}>
                <Link to='/OneShotPocha' style={{ textDecoration: 'none', color: '#4D5C55' }}>
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

export default LittleLemon;
