import { Box, Container } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Aboutme from '../components/Aboutme'
import FadeTransition from '../components/FadeTransition'
import SideBar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import '../pages/AboutPage.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#8495A5',
    },
    secondary: {
      main: '#e5e5e5',
    },
  },
  typography: {
    h1: {
      color: '#e5e5e5',
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
      color: '#e5e5e5',
      fontSize: '3vh'
    },
    body1: {
      color: '#e5e5e5',
      fontSize: '2.3vh'
    },
  },
});
//#4D525F smoky blue-gray shade
//#536878 medium slate blue color

function AboutPage() {
  return (
    <FadeTransition>
      <ThemeProvider theme={theme}>
        <Container maxWidth={false} sx={{ bgcolor: 'primary.main', minHeight: '100vh' }}>
          <Topbar />
          <Box className='remove'>
            <SideBar />
          </Box>
          <Aboutme />
        </Container>
      </ThemeProvider>
    </FadeTransition>
  )
}

export default AboutPage