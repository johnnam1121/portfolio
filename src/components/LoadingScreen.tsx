import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../pages/Homepage.css';
import JN from '../pictures/JN.gif';
import Topbar from './Topbar';
import { Box, Container } from '@mui/material';
import SideBar from './Sidebar';
import FadeTransition from './FadeTransition';

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
    h1: {
      color: '#34363A',
      fontSize: '10vh',
      '@media (max-width: 768px)': {
        fontSize: '10vw',
      },
    },
    h2: {
      color: 'blue',
    },
    h3: {
      color: 'green',
    },
    h4: {
      color: 'red',
    },
    h5: {
      color: 'blue',
    },
    h6: {
      color: '#807E79',
      fontSize: '3vh',
      '@media (max-width: 768px)': {
        fontSize: '3vw',
      },

    },
    body1: {
      color: '#807E79',
      fontSize: '2.3vh'
    },
  },
});

const LoadingScreen = () => {
  return (
    <ThemeProvider theme={theme}>
      <Topbar />
      <Box className='remove'>
        <SideBar />
      </Box>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#e5e5e5',
      }}>
        <img src={JN} alt="Loading" width="200" height="200" />
      </div>
    </ThemeProvider>
  );
};

export default LoadingScreen;
