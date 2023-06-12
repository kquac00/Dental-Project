import Navbar from './components/Navbar';
import Main from './pages/Main';
import Testimonial from './pages/Testimonial';
import MyTeam from './pages/MyTeam';
import Blog from './pages/Blog';
import Booking from './pages/Booking';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import Covid from './pages/Covid';
import PatientInfo from './PatientInfo';
import Preventive from './pages/Preventive';
import Cosmetic from './pages/Cosmetic';
import SleepApnea from './pages/SleepApnea';
import Orthodontic from './pages/Orthodontic';
import Surgical from './pages/Surgical';
import Insurance from './pages/Insurance';
import Periodontitis from './pages/Periodontitis';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from 'react';
import './App.css';
import Xray from './pages/Xray';
import Prophy from './pages/Prophy';
import Dentures from './pages/Dentures';
import Crowns from './pages/Crowns';
import Whitening from './pages/Whitening';
import Veneers from './pages/Veneers';
import Filling from './pages/Filling';
import Bridges from './pages/Bridges';
import Aligners from './pages/Aligners';
import Braces from './pages/Braces';
import Implant from './pages/Implant';
import BoneGraft from './pages/BoneGraft';
import Extraction from './pages/Extraction';
import RootCanal from './pages/RootCanal';
import Technology from './pages/Technology';
import Gallery from './pages/Gallery';
import FAQs from './pages/FAQs';
import Forms from './pages/Forms';
import Carousel from './components/Carousel';


const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className='appContent'>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/carousel' element={<Carousel />} />
            <Route path='/myteam' element={<MyTeam />} />
            <Route path='/testimonials' element={<Testimonial />} />
            <Route path='/blogs' element={<Blog />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/technology' element={<Technology />} />
            <Route path='/about_us' element={<AboutUs />} />
            <Route path='/covid19' element={<Covid />} />
            <Route path='/patient_info' element={<PatientInfo />} />
            <Route path='/patient_info/gallery' element={<Gallery />} />
            <Route path='/patient_info/faqs' element={<FAQs />} />
            <Route path='/patient_info/forms' element={<Forms />} />
            <Route path='/services/preventive' element={<Preventive />} />
            <Route path='/services/preventive/periodontitis' element={<Periodontitis />} />
            <Route path='/services/preventive/xray' element={<Xray />} />
            <Route path='/services/preventive/prophy' element={<Prophy />} />
            <Route path='/services/cosmetic' element={<Cosmetic />} />
            <Route path='/services/cosmetic/dentures' element={<Dentures />} />
            <Route path='/services/cosmetic/crowns' element={<Crowns />} />
            <Route path='/services/cosmetic/whitening' element={<Whitening />} />
            <Route path='/services/cosmetic/veneers' element={<Veneers />} />
            <Route path='/services/cosmetic/filling' element={<Filling />} />
            <Route path='/services/cosmetic/bridges' element={<Bridges />} />
            <Route path='/services/sleep_apnea' element={<SleepApnea />} />
            <Route path='/services/orthodontic' element={<Orthodontic />} />
            <Route path='/services/orthodontic/aligners' element={<Aligners />} />
            <Route path='/services/orthodontic/braces' element={<Braces />} />
            <Route path='/services/surgical' element={<Surgical />} />
            <Route path='/services/surgical/implant' element={<Implant />} />
            <Route path='/services/surgical/bone_graft' element={<BoneGraft />} />
            <Route path='/services/surgical/extraction' element={<Extraction />} />
            <Route path='/services/surgical/root_canal' element={<RootCanal />} />
            <Route path='/patient_info/insurance' element={<Insurance />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
