import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from 'react'
import SlideTransition from './SlideTransition';

function Projects() {
  return (
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        <Grid item md={2} />
        <Grid item xs={12} md={8} sx={{ mt: '4vh', textAlign: 'center' }} >
          <Typography variant='h6'>Things I've Done</Typography>
          <hr className='full-width-hr' />
        </Grid>
        <Grid item md={2} />
        <Grid item md={2} />
        <Grid item xs={12} md={8} sx={{ textAlign: 'center', mb: '5vh' }}>
          <Typography variant="h1" sx={{ mt: '5vh' }}>
            One Shot Pocha
          </Typography>
          <Typography variant="h1" sx={{ mt: '5vh' }}>
            Live Chat App
          </Typography>
          <Typography variant="h1" sx={{ mt: '5vh' }}>
            Youtube Video Player Clone
          </Typography>
          <Typography variant="h1" sx={{ mt: '5vh' }}>
            Python Job Post Scraper
          </Typography>
          <Typography variant="h1" sx={{ mt: '5vh' }}>
            SC2 Unit Counter
          </Typography>
          <Typography variant="h1" sx={{ mt: '5vh' }}>
            Little Lemon
          </Typography>
          <Typography variant="h1" sx={{ mt: '5vh' }}>
            SIS Newspaper Wordpress
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Projects