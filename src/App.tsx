import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import OneShotPocha from './pages/projects/OneShotPocha';
import LiveChatApp from './pages/projects/LiveChatApp';
import YoutubeClone from './pages/projects/YoutubeClone';
import SCUnitCounter from './pages/projects/SCUnitCounter';
import JobScraper from './pages/projects/JobScraper';
import LittleLemon from './pages/projects/LittleLemon';
import TherapyAlliance from './pages/projects/TherapyAlliance';
import NetflixClone from './pages/projects/NetflixClone';

function App() {
  return (
    // <HashRouter>
    //   <Routes>
    //     <Route path="/" element={<Homepage />} />
    //     <Route path="/About" element={<AboutPage />} />
    //     <Route path="/Projects" element={<ProjectsPage />} />
    //     <Route path="/Experience" element={<ExperiencePage />} />

    //     <Route path="/NetflixClone" element={<NetflixClone />} />
    //     <Route path="/TherapyAlliance" element={<TherapyAlliance />} />
    //     <Route path="/OneShotPocha" element={<OneShotPocha />} />
    //     <Route path="/LiveChatApp" element={<LiveChatApp />} />
    //     <Route path="/YoutubeClone" element={<YoutubeClone />} />
    //     <Route path="/JobScraper" element={<JobScraper />} />
    //     <Route path="/SCUnitCounter" element={<SCUnitCounter />} />
    //     <Route path="/LittleLemon" element={<LittleLemon />} />

    //   </Routes>
    // </HashRouter>
    <div style={{ backgroundColor: '#f7f7f7', height: '100vh', width: '100vw', position: 'absolute' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ color: '#000000' }}>If you are not redirected automatically,&nbsp;
          <a href="https://github.com/johnnam1121"
            style={{
              color: '#807E79',
              textDecoration: 'none',
              transition: 'color 0.5s',
            }}>
            click here
          </a>.
        </p>
      </div>
    </div>
  );
}

export default App;