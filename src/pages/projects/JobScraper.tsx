import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Container, Grid, List, ListItem, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import FadeTransition from '../../components/FadeTransition';
import Footer from '../../components/Footer';
import Topbar from '../../components/Topbar';
import JobScraperPic from '../../pictures/projectImages/job scraper.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333333',
    },
    secondary: {
      main: '#818988',
    },
  },
  typography: {
    h1: {
      color: '#818988',
      fontSize: '12vh',
      '@media (max-width: 768px)': {
        fontSize: '10vw',
      },

    },
    h5: {
      color: '#818988',
    },
    h6: {
      color: '#818988',
      fontSize: '3vh'
    },
    body1: {
      color: '#818988',
      fontSize: '2.3vh'
    },
  },
});

const JobScraper = () => {
  return (
    <ThemeProvider theme={theme}>
      <FadeTransition>
        <Container maxWidth={false} sx={{ bgcolor: 'primary.main', minHeight: '100vh' }}>
          <Topbar />
          <Grid container spacing={2}>
            <Grid item xs={1} md={1} />
            <Grid item xs={10} md={10} sx={{ mt: '4vh' }}>
              <Typography variant='h1' sx={{ textAlign: 'center' }}>Job Post Scraper </Typography>
              <hr className='full-width-hr' />
              <Typography variant='h6'>View github repo <Link to='https://github.com/johnnam1121/job-post-scraper' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#eeeeee', fontWeight: 'bold' }}>here</Link></Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: '2vh' }}>
                <img src={JobScraperPic} alt="oneshot image" style={{ width: '100%' }} />
              </Box>
              <List sx={{ paddingLeft: '15px', mt: '5vh', listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h6'>Job post website scraper using python and beautifulsoup4 and selenium to run some scripts.</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h6'>The goal is to have the program search through specific website of some companies websites and find jobs that are relevant to me to apply to.
                    It will search job titles based on some keywords and print the title, location, and link to apply.
                    This is more efficient for me than scanning through indeed or linkedin which has a lot of unrelated/spammy jobs.</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h6'>
                    Each python file is made specifically for each job site since each site uses different html names and etc.
                    Therefore, I made a batch file which will run all the python files at once.
                    Once I get each python file set up for all the companies I would like to work for, I will add a feature to save the printed info into a csv file for ease of use.
                  </Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h6'>
                    Also, I will try to add a feature where it runs daily at 8am. No idea how I would start that though...
                  </Typography>
                </ListItem>
              </List>
              <Box style={{ position: 'fixed', left: '2%', top: '50%', transform: 'translateY(-50%)' }}>
                <Link to='/YoutubeClone' style={{ textDecoration: 'none', color: '#818988' }}>
                  <ArrowBackIosIcon style={{ fontSize: '7vh' }} />
                </Link>
              </Box>
              <Box style={{ position: 'fixed', right: '2%', top: '50%', transform: 'translateY(-50%)' }}>
                <Link to='/SCUnitCounter' style={{ textDecoration: 'none', color: '#818988' }}>
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

export default JobScraper;
