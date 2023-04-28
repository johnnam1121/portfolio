import React from 'react';
import Slide from '@mui/material/Slide';
import { useLocation } from 'react-router-dom';

interface SlideTransitionProps {
  children: React.ReactNode;
}

function SlideTransition({ children }: SlideTransitionProps) {
  const location = useLocation();

  return (
    <Slide
      in
      direction="left"
      mountOnEnter
      unmountOnExit
      timeout={{ enter: 500, exit: 300 }}
    >
      <div style={{ position: 'absolute', width: '100%' }} key={location.pathname}>
        {children}
      </div>
    </Slide>
  );
}

export default SlideTransition;
