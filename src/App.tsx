import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/About" element={<AboutPage />} />
          {/*<Route path="/Gallery" element={<GalleryPage />} />
          <Route path="/Reservation" element={<ReservationPage />} />
          <Route path="/AboutUs" element={<AboutUsPage />} /> */}
        </Routes>
      </HashRouter>
  );
}

export default App;