import Fade from '@mui/material/Fade';
import React from 'react';
import { useLocation } from 'react-router-dom';

interface FadeTransitionProps {
  children: React.ReactNode;
}

function FadeTransition({ children }: FadeTransitionProps) {
  const location = useLocation();

  return (
    <div>
      <Fade
        in
        mountOnEnter
        unmountOnExit
        timeout={{ enter: 800, exit: 300 }}
      >
        <div style={{ position: 'absolute', width: '100%' }} key={location.pathname}>
          {children}
        </div>
      </Fade>
    </div>
  );
}

export default FadeTransition;