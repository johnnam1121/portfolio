import EmailIcon from '@mui/icons-material/Email';
import { Grid, Typography } from '@mui/material';

function Footer() {
  return (
    <div>
      <Grid xs={12} md={12} sx={{ display: 'flex', justifyContent: 'space-between', mt: '3vh' }}>
        <Typography variant='body2' sx={{ textAlign: 'left' }}>John Nam</Typography>
        <Typography variant='body2' sx={{ textAlign: 'right' }}><span><EmailIcon sx={{ fontSize: 'small' }} /> johnnam93@gmail.com</span></Typography>
      </Grid>
    </div>
  )
}

export default Footer