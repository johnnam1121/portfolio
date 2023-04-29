import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;