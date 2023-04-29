import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import React from 'react'
import SlideTransition from './SlideTransition';

const styles = {
  textDecoration: 'none',
  '&hover': {
    
  }
};

const StyledLink = styled('a')(() => ({
  ...styles
}))

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
          <StyledLink href="google.com" target='_blank' rel='noopener noreferrer'>
            <Typography variant="h1">
              One Shot Pocha
            </Typography>
          </StyledLink>
          <StyledLink href="google.com" target='_blank' rel='noopener noreferrer'>
            <Typography variant="h1">
              Live Chat App
            </Typography>
          </StyledLink>
          <StyledLink href="google.com" target='_blank' rel='noopener noreferrer'>
            <Typography variant="h1">
              Youtube Video Player Clone
            </Typography>
          </StyledLink>
          <StyledLink href="google.com" target='_blank' rel='noopener noreferrer'>
            <Typography variant="h1">
              Python Job Post Scraper
            </Typography>
          </StyledLink>
          <StyledLink href="google.com" target='_blank' rel='noopener noreferrer'>
            <Typography variant="h1">
              SC2 Unit Counter
            </Typography>
          </StyledLink>
          <StyledLink href="google.com" target='_blank' rel='noopener noreferrer'>
            <Typography variant="h1">
              Little Lemon
            </Typography>
          </StyledLink>
          <StyledLink href="google.com" target='_blank' rel='noopener noreferrer'>
            <Typography variant="h1">
              SIS Newspaper Wordpress
            </Typography>
          </StyledLink>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Projects