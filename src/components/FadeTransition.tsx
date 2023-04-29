import Fade from '@mui/material/Fade';
import React from 'react';
import { useLocation } from 'react-router-dom';

interface FadeTransitionProps {
  children: React.ReactNode;
  delay?: number;
}

function FadeTransition({ children, delay = 0 }: FadeTransitionProps) {
  const location = useLocation();

  return (
    <div style={{ backgroundColor: 'pink' }}>
      <Fade
        in
        mountOnEnter
        unmountOnExit
        timeout={{ enter: 1300, exit: 300 }}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div style={{ position: 'absolute', width: '100%' }} key={location.pathname}>
          {children}
        </div>
      </Fade>
    </div>
  );
}

export default FadeTransition;

// import { useLocation } from 'react-router-dom';
// import { Fade } from '@mui/material'
// import React from 'react'

// function FadeTransition(props) {
//   const location = useLocation();
//   return (
//     <Fade
//       in
//       mountOnEnter
//       unmountOnExit
//       timeout={{ enter: 1300, exit: 300 }}
//     >
//       <div style={{ position: 'absolute', width: '100%' }} key={location.pathname}>
//         {children}
//       </div>
//     </Fade>
//   )
// }

// export default FadeTransition