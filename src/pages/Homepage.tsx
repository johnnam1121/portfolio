import { Box, Container } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import FadeTransition from '../components/FadeTransition'
import Landing from '../components/Landing'
import SideBar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import '../pages/Homepage.css'

function Circle() {
  const [animation, setAnimation] = useState('animate 10s linear infinite');
  const [leftPosition, setLeftPosition] = useState(`${Math.floor(Math.random() * 100)}%`);
  const [delay, setDelay] = useState(`${Math.floor(Math.random() * 20)}s`);

  const handleMouseOver = () => {
    setAnimation('move-away 1s linear forwards');
  };

  const handleMouseOut = () => {
    setAnimation('animate 10s linear infinite');
  };

  useEffect(() => {
    const randomDelay = `${Math.floor(Math.random() * 10)}s`;
    setDelay(randomDelay);
  }, []);

  return (
    <li
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ animation, left: leftPosition, animationDelay: delay }} />
  );
}

const repeat = 15;

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
//#4D525F smoky blue-gray shade
//#536878 medium slate blue color

function Homepage() {
  return (
    <FadeTransition>
      <ThemeProvider theme={theme}>
        <Container maxWidth={false} sx={{ minHeight: '100vh' }} className='area'>
          <Topbar />
          <Landing />
          <Box className='remove'>
            <SideBar />
          </Box>
          <div>
            <ul className="circles">
              {Array.from({ length: repeat }, (_, index) => (
                <Circle key={index} />
              ))}
            </ul>
          </div>
        </Container>
      </ThemeProvider>
    </FadeTransition>
  );
}

export default Homepage