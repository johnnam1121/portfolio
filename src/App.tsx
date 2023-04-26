import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/Menu" element={<MenuPage />} />
          <Route path="/Gallery" element={<GalleryPage />} />
          <Route path="/Reservation" element={<ReservationPage />} />
          <Route path="/AboutUs" element={<AboutUsPage />} /> */}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;