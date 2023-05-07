import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import '../pages/AboutPage.css';
import profile from '../pictures/ProfilePic.jpg';

function AboutMe() {
  return (
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        <Grid item md={2} />
        <Grid item xs={12} md={8} sx={{ mt: '4vh' }}>
          <Typography variant='h6'>About Me</Typography>
          <hr className='full-width-hr' />
        </Grid>
        <Grid item md={2} />
        <Grid item md={2} />
        <Grid item xs={12} md={4}>
          <Typography variant="body1">
            After graduating with a Bachelor's in Electrical and Computer Engineering from The University of Texas at Austin, I took quite an unorthodox career path.
            I started my career by opening a business franchise called Schlotzsky's where I learned all the ins and outs of a business.<br />
            After some time, I was encouraged by my sister to pursue teaching which is where I am now. I've been teaching computer science for about 3 years now and am enjoying it very much!
            However, I am looking to move out of teaching to pursue a career in tech; ideally in front-end development. I've been teaching mostly front-end development and have found much joy
            in working on some projects on my own. I am open to other positions as well though since my main goal is to learn and develop my skills.<br />
            If you'd like to chat, please feel free to reach out using the contact me section at the bottom of the page!
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <img src={profile} alt="profile pics" className="image centerImage" />
        </Grid>
        <Grid item md={2} />
        <Grid item md={2} />
        <Grid item xs={12} md={8} sx={{ mb: '3vh' }}>
          <Typography variant="h6" sx={{ mt: '3vh' }}>Lets get in touch!</Typography>
          <hr className='full-width-hr' />
          <Typography variant="body1"><EmailIcon /> Johnnam93@gmail.com</Typography>
          <Typography variant="body1"><PhoneAndroidIcon /> Work phone 832-384-4331 </Typography>
        </Grid>
        <Grid item md={2} />
        <Grid xs={12} md={12} sx={{ textAlign: 'center' }}>
          <Typography variant='body2'>©2023 John Nam. All Rights Reserved. </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutMe;
