import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import { useState } from 'react';

const TopButton = () => {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 150) {
      setVisible(true)
    }
    else if (scrolled <= 150) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button className='topButton'>
      <ArrowCircleUpRoundedIcon onClick={scrollToTop}
        style={{
          display: visible ? 'inline' : 'none',
          scale: '1.5',
          marginBottom: '4'
        }} />
    </button>
  );
}

export default TopButton;