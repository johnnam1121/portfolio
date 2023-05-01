import CottageIcon from '@mui/icons-material/Cottage';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <Box sx={{ flexGrow: '1' }}>
      <CssBaseline />
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color='inherit'
          aria-label="menu"
          component={Link} to="/"
          sx={{ zIndex: '3' }}
        >
          <CottageIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: 'secondary.main', display: { xs: "none", sm: "block" } }}
        >
          John Nam
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button component={Link} to="/About" sx={{ zIndex: 3, color: 'secondary.main', '&:hover': { backgroundColor: 'secondary.dark' } }}>About</Button>
          <Button component={Link} to="/Projects" sx={{ zIndex: 3, color: 'secondary.main', '&:hover': { backgroundColor: 'secondary.dark' } }}>Projects</Button>
          <Button component={Link} to="/Experience" sx={{ zIndex: 3, color: 'secondary.main', '&:hover': { backgroundColor: 'secondary.dark' } }}>Experience</Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2, zIndex: '3' }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </Box >
  );
}
