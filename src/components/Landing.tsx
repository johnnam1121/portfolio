import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Landing() {
  const containerStyle = { height: '80vh', display: 'flex', alignItems: 'center' };
  const titleStyle = { textAlign: 'center', display: 'flex', alignItems: 'center', marginBottom: '2rem' };
  const subTitleStyle = { textAlign: 'center', zIndex:'30'};

  return (
    <Box sx={{ flexGrow: 1, zIndex: '3' }}>
      <Grid container sx={containerStyle}>
        <Grid item xs={false} sm={3} />
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" sx={titleStyle}>
            Hi, I'm John!
            <br />
            I like to design and develop web apps
          </Typography>
          <Typography variant="h6" sx={subTitleStyle}>
            Made using React and Material UI
          </Typography>
        </Grid>
        <Grid item xs={false} sm={3} />
      </Grid>
    </Box>
  );
}
