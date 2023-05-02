import CottageIcon from '@mui/icons-material/Cottage';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';

export default function Topbar() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);

  return (
    <Box sx={{ flexGrow: '1' }}>
      <CssBaseline />
      <Toolbar sx={{ justifyContent: 'space-between' }}>
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
        </Box>
        {isMobile && (
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{ ml: 2, zIndex: '3' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    backgroundColor: 'white',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem component={Link} to="/About" onClick={handleMenuClose}>About</MenuItem>
              <MenuItem component={Link} to="/Projects" onClick={handleMenuClose}>Projects</MenuItem>
              <MenuItem component={Link} to="/Experience" onClick={handleMenuClose}>Experience</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </Box>
  );
}
