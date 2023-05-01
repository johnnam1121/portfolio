import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Container, Grid, List, ListItem, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import FadeTransition from '../../components/FadeTransition';
import Topbar from '../../components/Topbar';
import Youtube from '../../pictures/projectImages/Youtube.png';

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
      fontSize: '12vh'
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

const YoutubeClone = () => {
  return (
    <ThemeProvider theme={theme}>
      <FadeTransition>
        <Container maxWidth={false} sx={{ bgcolor: 'primary.main', minHeight: '100vh' }}>
          <Topbar />
          <Grid container spacing={2}>
            <Grid item xs={1} md={1} />
            <Grid item xs={10} md={10} sx={{ mt: '4vh' }}>
              <Typography variant='h1' sx={{ textAlign: 'center' }}>Youtube Clone </Typography>
              <hr className='full-width-hr' />
              <Typography variant='h5'>Current Project</Typography>
              <Typography variant='h6'>View github repo <Link to='https://github.com/johnnam1121/ignwebapp' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#807E79' }}>here</Link></Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: '2vh' }}>
                <img src={Youtube} alt="oneshot image" style={{ width: '100%' }} />
              </Box>
              <List sx={{ paddingLeft: '15px', mt: '5vh', listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h5'>IGNs API has a CORS restriction so I have my program check if the user can access the API. If not, it shows this page which redirects to another page that grants temporary access</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h5'>Has a main video player which includes a title, description, and tags</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h5'>On the right is a suggested video playlist An accordian which shows a load more list of suggested videos was implemented</Typography>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                  <Typography variant='h5'>Some features include, on click - play selected video, on video over - play next video, on hover-scale suggested video for user friendlyness</Typography>
                </ListItem>
              </List>
              <Box style={{ position: 'fixed', left: '2%', top: '50%', transform: 'translateY(-50%)' }}>
                <Link to='/LiveChatApp' style={{ textDecoration: 'none', color: '#807E79' }}>
                  <ArrowBackIosIcon style={{ fontSize: '7vh' }} />
                </Link>
              </Box>
              <Box style={{ position: 'fixed', right: '2%', top: '50%', transform: 'translateY(-50%)' }}>
                <Link to='/JobScraper' style={{ textDecoration: 'none', color: '#807E79' }}>
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

export default YoutubeClone;
