import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import '../pages/AboutPage.css';
import GWCBTOY from '../pictures/GWCBTOY.jpg';
import GradPhoto from '../pictures/GradPhoto.jpg';
import Opening from '../pictures/Opening.jpg';


export default function Experience() {
  return (
    <Container maxWidth={false}>
      <Grid container spacing={2} sx={{ mb: '5vh' }}>
        <Grid item md={2} />
        <Grid item xs={12} md={8} sx={{ mt: '4vh' }}>
          <Typography variant='h6'>My Experience</Typography>
          <hr className='full-width-hr' />
        </Grid>
        <Grid item md={2} />
        {/* SIS */}
        <Grid item md={2} />
        <Grid item xs={12} md={4}>
          <Typography variant="h6">
            Sharpstown International School
          </Typography>
          <Typography variant="body1" sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Computer Science Teacher</span>
            <span>2020-Present</span>
          </Typography>
          <List sx={{ paddingLeft: '15px', listStyleType: 'disc' }}>
            <ListItem sx={{ display: 'list-item' }}>
              Awarded Beginning Teacher of the Year and NCWIT's AiC Educator Award Honorable Mention
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Teach computer science related topics including HTML, CSS, Javascript, networking, computer management/building, digital citizenship, animation, and game/website development
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Develop and implement lessons in accordance to TEA curriculum guidelines for students ranging from 8th to 12th grade
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Prepare AP Computer Science Principles students for the AP examination and the AP Performance Task to receive college credit
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Sponsor Girls Who Code to spread awareness regarding computer science and help close the gender gap in technology
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Mentor to-be teachers through the alternative certification process
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={4}>
          <img src={GWCBTOY} alt="GWCBTOY" className="image centerImage" />
        </Grid>
        <Grid item md={2} />
        {/* SCS Deli */}
        <Grid item md={2} />
        <Grid item xs={12} md={4}>
        <hr />
          <Typography variant="h6">
            SCS Deli LLC/Schlotzsky's
          </Typography>
          <Typography variant="body1" sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Business Owner</span>
            <span>2018-2019</span>
          </Typography>
          <List sx={{ paddingLeft: '15px', listStyleType: 'disc' }}>
            <ListItem sx={{ display: 'list-item' }}>
              Oversaw construction of building, interior design, and installation of over $150,000 of machinery, small wares, furniture, and equipment
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Attended over 250+ training hours with corporate to learn proper operations
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Attended meetings with other franchisees and corporate representatives to vote on future developments
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Managed over $50,000 monthly in labor costs, food costs, inventory, and payroll
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Hired and trained 40+ staff while reducing labor costs to less than 18%
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Increased sales by over 20% by organizing catering and third-party deliveries
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={4}>
          <img src={Opening} alt="Opening" className="image centerImage" />
        </Grid>
        <Grid item md={2} />
        {/* UT Austin */}
        <Grid item md={2} />
        <Grid item xs={12} md={4}>
        <hr />
          <Typography variant="h6">
            The Univeresity of Texas at Austin
          </Typography>
          <Typography variant="body1" sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Electrical and Computer Engineering</span>
            <span>2012-2017</span>
          </Typography>
          <List sx={{ paddingLeft: '15px', listStyleType: 'disc' }}>
            <ListItem sx={{ display: 'list-item' }}>
              Cockrell School of Engineering
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Bachelor of Sciences in Electrical and Computer Engineering
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Technical Core: Energy Systems and Renewable Energy
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Graduated May 2017
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={4}>
          <img src={GradPhoto} alt="GradPhoto" className="image centerImage" />
        </Grid>
        <Grid item md={2} />
      </Grid>
    </Container>
  );
}