import React from 'react';
import Carousel from '../components/Carousel';
import '../testimonials.css';
import { Typography } from '@mui/material';

const Testimonial = () => (
    <div className='testimonials'>
        <h1>Testimonials</h1>
        <p>Thank you to all our patients for sharing their experience at our practice. At Pacific NW Dentistry, we always strive to provide you, our patients, with the best dental care. We would love to hear your feedback.</p>
        <p>You can leave us feedback by one of the following:</p>
        <ul>
            <li>Calling us at <a href="tel:253-880-1828">253-880-1828</a></li>
            <li>Emailing us at <a href="mailto:info@pacificnwdentistry.com">info@pacificnwdentistry.com</a></li>
            <li>Texting us at <a href="sms:425-390-4263">425-390-4263</a></li>
            <li>Writing us a <a href="https://www.yelp.com/biz/pacific-nw-dentistry-auburn-2" target="_blank"
                rel="noopener noreferrer">Yelp review</a></li>
            <li>Writing us a <a href="https://www.google.com/search?q=Pacific+NW+Dentistry,+110+D+St+SE,+Auburn,+WA+98002&ludocid=17158583154351756348#lrd=0x5490587a64a1efdb:0xee1f88780423543c,1" target="_blank"
                rel="noopener noreferrer">Google Review</a></li>
            <li>Writing us a <a href="https://www.facebook.com/pacificnwdentistry/" target="_blank"
                rel="noopener noreferrer">Facebook Review</a></li>
        </ul>
        <p>Again, thank you for being our patients! We look forward to seeing you again!!</p>
        <Typography variant='h6'>See Patient Testimonials: Stories of Success</Typography>
        <div className='display-carousel'>
            <Carousel />
        </div>
    </div>
);

export default Testimonial;
