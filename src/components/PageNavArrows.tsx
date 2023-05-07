import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

function PageNavArrows() {
  return (
    <div>
      <Box style={{ position: 'fixed', left: '2%', top: '50%', transform: 'translateY(-50%)' }}>
        <Link to='/SCUnitCounter' style={{ textDecoration: 'none', color: '#4D5C55' }}>
          <ArrowBackIosIcon style={{ fontSize: '7vh' }} />
        </Link>
      </Box>
      <Box style={{ position: 'fixed', right: '2%', top: '50%', transform: 'translateY(-50%)' }}>
        <Link to='/OneShotPocha' style={{ textDecoration: 'none', color: '#4D5C55' }}>
          <ArrowForwardIosIcon style={{ fontSize: '7vh' }} />
        </Link>
      </Box>
    </div>
  )
}

export default PageNavArrows