import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projects from './ProjectsList';

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
                <Tooltip title={item.tooltip} placement="top" arrow TransitionComponent={Zoom} followCursor >
                  <Link to={item.link} style={{ textDecoration: 'none' }}>
                    <Typography variant='h1' sx={{ mt: '3vh' }}>{item.project}</Typography>
                  </Link>
                </Tooltip>
              </motion.div>
            ))}
          </motion.div>
        </Grid>
        <Grid xs={12} md={12} sx={{ textAlign: 'center', mt:'5vh' }}>
          <Typography variant='body2'>©2023 John Nam. All Rights Reserved. </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
