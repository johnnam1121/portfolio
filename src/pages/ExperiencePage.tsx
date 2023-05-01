import { Box, Container } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Experience from '../components/Experience'
import FadeTransition from '../components/FadeTransition'
import SideBar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import '../pages/ExperiencePage.css'

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
      fontSize: '10vh'
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
      fontSize: '3vh'
    },
    body1: {
      color: '#807E79',
      fontSize: '2.3vh'
    },
  },
});
//#4D525F smoky blue-gray shade
//#536878 medium slate blue color

function ExperiencePage() {
  return (
    <FadeTransition>
      <ThemeProvider theme={theme}>
        <Container maxWidth={false}>
          <Topbar />
          <Experience />
          <Box className='remove'>
            <SideBar />
          </Box>
        </Container>
      </ThemeProvider>
    </FadeTransition>
  );
}

export default ExperiencePage