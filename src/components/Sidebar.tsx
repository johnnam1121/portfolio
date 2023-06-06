import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, List, ListItem, ListItemIcon } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const styles = {
  icon: {
    color: 'secondary.main',
    transition: 'color 0.5s',
    '&:hover': {
      color: 'primary.dark',
    },
  },
};

function SideBar() {
  return (
    <Box sx={{ position: 'fixed', bottom: '0%', left: '2%', zIndex: '3' }}>
      <CssBaseline />
      <List>
        <ListItem>
          <ListItemIcon>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/johnnam1121"><GitHubIcon sx={styles.icon} /></a>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/johnnam93/"><LinkedInIcon sx={styles.icon} /></a>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/john.nam.98/"><FacebookIcon sx={styles.icon} /></a>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/johnnam93/"><InstagramIcon sx={styles.icon} /></a>
          </ListItemIcon>
        </ListItem>
      </List>
    </Box>
  );
}

export default SideBar
