import React from 'react';
import '../xray.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../button_green.css'

const Xray = () => {
    return (
        <div className="dental-xray-page">
            <h1 className="dental-xray-heading">Dental X-ray</h1>
            <p>
                Dental radiographs (x-rays) are essential, preventative, diagnostic tools that provide valuable information not visible during a regular dental exam. Dentists and dental hygienists use this information to safely and accurately detect hidden dental abnormalities and complete an accurate treatment plan. Without x-rays, problem areas may go undetected.
            </p>
            <p>
                Dental x-rays may reveal:
            </p>
            <ul>
                <li>Abscesses or cysts</li>
                <li>Bone loss</li>
                <li>Cancerous and non-cancerous tumors</li>
                <li>Decay between the teeth</li>
                <li>Developmental abnormalities</li>
                <li>Poor tooth and root positions</li>
                <li>Problems inside a tooth or below the gum line</li>
            </ul>
            <p>
                Detecting and treating dental problems at an early stage can save you time, money, unnecessary discomfort, and your teeth!
            </p>
            <h2>Are dental x-rays safe?</h2>
            <p>
                We are all exposed to natural radiation in our environment. The amount of radiation exposure from a full mouth series of x-rays is equal to the amount a person receives in a single day from natural sources. Dental x-rays produce a low level of radiation and are considered safe. At Pacific NW Dentistry, we use digital x-ray sensors, which require less radiation than regular film x-rays.
            </p>
            <h2>How often should dental x-rays be taken?</h2>
            <p>
                The need for dental x-rays depends on each patient's individual dental health needs. Your dentist and dental hygienist will recommend necessary x-rays based on the review of your medical and dental history, dental exam, signs and symptoms, age consideration, and risk for disease.
            </p>
            <p>
                A full mouth series of dental x-rays is recommended for new patients. A full series is usually good for three to five years. Bite-wing x-rays (x-rays of top and bottom teeth biting together) are taken at recall (check-up) visits and are recommended once or twice a year to detect new dental problems.
            </p>

            <Link to='/services/preventive'><Button variant="contained">Back to Preventive</Button></Link>
            <Link to='/booking'><Button variant="outlined" className='green-button' style={{ marginLeft: '20px' }}>Book an Appointment</Button></Link>
        </div>
    );
}

export default Xray;
