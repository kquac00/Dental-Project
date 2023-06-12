import React from 'react';
import Title from '../assets/images/Business_Title.jpg'
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../navbar.css';

const Navbar = () => {

  const [anchorElServices, setAnchorElServices] = React.useState(null);
  const [anchorElAboutUs, setAnchorElAboutUs] = React.useState(null);
  const [anchorElPatientInfo, setAnchorElPatientInfo] = React.useState(null);

  const openServices = Boolean(anchorElServices);
  const openAboutUs = Boolean(anchorElAboutUs);
  const openPatientInfo = Boolean(anchorElPatientInfo);

  const handleClickServices = (event) => {
    setAnchorElServices(event.currentTarget);
  };
  const handleCloseServices = () => {
    setAnchorElServices(null);
  };
  const handleClickAboutUs = (event) => {
    setAnchorElAboutUs(event.currentTarget);
  };
  const handleCloseAboutUs = () => {
    setAnchorElAboutUs(null);
  };
  const handleClickPatientInfo = (event) => {
    setAnchorElPatientInfo(event.currentTarget);
  };
  const handleClosePatientInfo = () => {
    setAnchorElPatientInfo(null);
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <div className='navbar-container'>
          <div>
            <Contact />
          </div>
          <nav className="navbar">
            <div className="navbar-links-left">
              <Link to='/'>Home</Link>
              <Link to='/myteam'>My Team</Link>

            </div>
            <div className="navbar-logo">
              {/* Pacific NW */}
              <img className='logo-image' src={Title} alt="Logo" />
              {/* <p className='custom-font'>Dentistry</p> */}
            </div>
            <div className="navbar-links-right">
              <Button
                id="basic-button"
                aria-controls={openPatientInfo ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openPatientInfo ? 'true' : undefined}
                onClick={handleClickPatientInfo}
                sx={{ textTransform: 'none', color: 'white', fontSize: { xs: '1rem', sm: '1rem', md: '1.6rem' } }}
              >
                Patient Info
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorElPatientInfo}
                open={openPatientInfo}
                onClose={handleClosePatientInfo}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClosePatientInfo}><Link to='/patient_info/insurance'>Insurance</Link></MenuItem>
                <MenuItem onClick={handleClosePatientInfo}><Link to='/patient_info/faqs'>FAQs</Link></MenuItem>
                <MenuItem onClick={handleClosePatientInfo}><Link to='/patient_info/gallery'>Gallery</Link></MenuItem>
                <MenuItem onClick={handleClosePatientInfo}><Link to='/patient_info/forms'>Forms</Link></MenuItem>
              </Menu>
              <Button
                id="basic-button"
                aria-controls={openServices ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openServices ? 'true' : undefined}
                onClick={handleClickServices}
                sx={{ textTransform: 'none', color: 'white', fontSize: { xs: '1rem', sm: '1rem', md: '1.6rem' } }}
              >
                Our Services
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorElServices}
                open={openServices}
                onClose={handleCloseServices}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleCloseServices}><Link to='/services/preventive'>Preventive</Link></MenuItem>
                <MenuItem onClick={handleCloseServices}><Link to='/services/cosmetic'>Cosmetic</Link></MenuItem>
                <MenuItem onClick={handleCloseServices}><Link to='/services/sleep_apnea'>Sleep Apnea</Link></MenuItem>
                <MenuItem onClick={handleCloseServices}><Link to='/services/orthodontic'>Orthodontic</Link></MenuItem>
                <MenuItem onClick={handleCloseServices}><Link to='/services/surgical'>Surgical</Link></MenuItem>
              </Menu>
              <Button
                id="basic-button"
                aria-controls={openAboutUs ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openAboutUs ? 'true' : undefined}
                onClick={handleClickAboutUs}
                sx={{ textTransform: 'none', color: 'white', fontSize: { xs: '1rem', sm: '1rem', md: '1.6rem' } }}              >
                About Us
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorElAboutUs}
                open={openAboutUs}
                onClose={handleCloseAboutUs}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleCloseAboutUs}><Link to='/myteam'>Meet Us</Link></MenuItem>
                <MenuItem onClick={handleCloseAboutUs}><Link to='/testimonials'>Testimonials</Link></MenuItem>
                <MenuItem onClick={handleCloseAboutUs}><Link to='/blogs'>Dr. Blogs</Link></MenuItem>
                <MenuItem onClick={handleCloseAboutUs}><Link to='/technology'>Technology</Link></MenuItem>
              </Menu>
            </div>
          </nav>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

