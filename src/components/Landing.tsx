import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Landing() {
  const containerStyle = { height: '80vh', display: 'flex', alignItems: 'center' };
  const titleStyle = { textAlign: 'center', display: 'flex', alignItems: 'center', marginBottom: '2rem' };
  const subTitleStyle = { textAlign: 'center' };

  return (
    <Box sx={{ flexGrow: 1, zIndex:'2' }}>
      <Grid container sx={containerStyle}>
        <Grid item xs={false} sm={3} />
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" sx={titleStyle}>
            Hi, I'm John!
            <br />
            I like to design and develop web apps
          </Typography>
          <Typography variant="h6" sx={subTitleStyle}>
            Computer Science Teacher <hr /><>&gt;</> Front-End Developer
          </Typography>
        </Grid>
        <Grid item xs={false} sm={3} />
      </Grid>
    </Box>
  );
}
