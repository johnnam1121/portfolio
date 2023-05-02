import { Box, Container, ThemeProvider, createTheme } from '@mui/material';
import Projects from '../components/Projects';
import SideBar from '../components/Sidebar';
import SlideTransition from '../components/SlideTransition';
import Topbar from '../components/Topbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f4b56',
    },
    secondary: {
      main: '#aeaeae',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    h1: {
      color: '#aeaeae',
      fontSize: '5vw',
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
      color: '#aeaeae',
      fontSize: '3vh'
    },
    body1: {
      color: '#aeaeae',
      fontSize: '2.3vh'
    },
  },
});

function ProjectsPage() {
  return (
    <SlideTransition>
      <ThemeProvider theme={theme}>
        <Container maxWidth={false} sx={{ bgcolor: 'primary.main', minHeight:'100vh' }}>
          <Topbar />
          <Projects />
          <Box className='remove'>
            <SideBar />
          </Box>
        </Container>
      </ThemeProvider>
    </SlideTransition>

  )
}

export default ProjectsPage