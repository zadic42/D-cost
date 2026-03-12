import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Common/Navabar/Navabar';
import Footer from './Component/Common/Footer/Footer';
import HomeBanner from './Component/HomeBanner/HomeBanner';
import ExploreApp from './Component/ExploreApp/ExploreApp';
import AboutUs from './Component/AboutUs/AboutUs';
import Gallery from './Component/Gallery/Gallery';
import AppDetails from './Component/AppDetails/AppDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HomeBanner />

            <AboutUs />
            <Gallery />
            <AppDetails />

            <ExploreApp />
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
