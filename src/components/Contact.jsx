import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import '../contact_card.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <p><FaMapMarkerAlt className="icon" /><a
                href="https://www.google.com/maps/dir//110+D+St+SE+Auburn+WA+98002"
                target="_blank"
                rel="noopener noreferrer"
                className='default-link'
            > Directions</a>
            </p>
            <p><FaPhone className="icon" /><a className='phone' href="tel:253-880-1828">Call Us</a></p>
            <p><FaEnvelope className="icon" /> <a href="mailto:info@pacificnwdentistry.com" className='default-link'>Email Us</a></p>
            <Link to='/booking' className='button-link'>
                <Button startIcon={<FaCalendarAlt />} style={{ color: 'white' }}>
                    Request Appointment
                </Button>
            </Link>
        </div>
    );
};

export default Contact;
