import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import projects from './ProjectsList';

const styles = {
  textDecoration: 'none',
  // '&hover': {

  // }
};

const StyledLink = styled('a')(() => ({
  ...styles
}));

const transition = {
  type: 'easeIn',
  duration: 0.5
};

const variants = {
  hidden: {
    opacity: 0,
    x: 100
  },
  visible: {
    opacity: 1,
    x: 0,
    transition
  }
};

export default function Projects() {
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
          <motion.div
            initial='hidden'
            animate='visible'
            variants={{
              visible: {
                transition: {
                  delayChildren: 0.5,
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {projects.map((item, index) => (
              <motion.div variants={variants} key={index}>
                <StyledLink href={item.liveLink} target='_blank' rel='noopener noreferrer'>
                  <Typography variant='h1' sx={{ mt: '3vh' }}>{item.project}</Typography>
                </StyledLink>
              </motion.div>
            ))}
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  )
}
