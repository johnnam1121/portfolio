import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

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
    <Container fluid>
      <Row>
        <Col>
          <button className='topButton'>
            <ArrowCircleUpRoundedIcon onClick={scrollToTop}
              style={{
                display: visible ? 'inline' : 'none',
                scale: '1.5',
                marginBottom: '4'
              }} />
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default TopButton;