import React from 'react';
import '../dentures.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Dentures = () => {
    return (
        <div className="page-container">
            <h1 className="page-title">Dental Dentures</h1>
            <div className="content-container">
                <div className="content-section">
                    <h2 className="section-title">Types of Dentures</h2>
                    <p className="section-description">
                        A denture is a removable dental appliance replacement for missing teeth and surrounding tissue. They are made to closely resemble your natural teeth and may even enhance your smile.
                    </p>
                    <p className="section-description">
                        There are two types of dentures - complete and partial dentures. Complete dentures are used when all of the teeth are missing, while partial dentures are used when some natural teeth remain. A partial denture not only fills in the spaces created by missing teeth, it prevents other teeth from shifting.
                    </p>
                    <p className="section-description">
                        A complete denture may be either "conventional" or "immediate." A conventional type is made after the teeth have been removed and the gum tissue has healed, usually taking 4 to 6 weeks. Immediate dentures are made in advance and immediately placed after the teeth are removed, thus preventing the patient from having to be without teeth during the healing process. Once the tissues shrink and heal, adjustments will have to be made.
                    </p>
                </div>
                <div className="content-section">
                    <h2 className="section-title">Reasons for Dentures</h2>
                    <ul className="section-list">
                        <li>Loss of all teeth in an arch - Complete Denture</li>
                        <li>Loss of several teeth in an arch - Partial Denture</li>
                        <li>Enhancing smile and facial tissues</li>
                        <li>Improving chewing, speech, and digestion</li>
                    </ul>
                </div>
                <div className="content-section">
                    <h2 className="section-title">Getting Dentures</h2>
                    <p className="section-description">
                        The process of getting dentures requires several appointments, usually over several weeks. Highly accurate impressions (molds) and measurements are taken and used to create your custom denture. Several "try-in" appointments may be necessary to ensure proper shape, color, and fit. At the final appointment, your dentist will precisely adjust and place the completed denture, ensuring a natural and comfortable fit.
                    </p>
                    <p className="section-description">
                        It is normal to experience increased saliva flow, some soreness, and possible speech and chewing difficulty; however, this will subside as your muscles and tissues get used to the new dentures.
                    </p>
                    <p className="section-description">
                        You will be given care instructions for your new dentures. Proper cleaning of your new dental appliance, good oral hygiene, and regular dental visits will aid in the life of your new dentures.
                    </p>
                    <Link to='/services/cosmetic'><Button variant="contained">Back to Cosmetic</Button></Link>
                    <Link to='/booking'><Button variant="outlined" className='green-button' style={{ marginLeft: '20px' }}>Book an Appointment</Button></Link>

                </div>
            </div>
        </div>
    );
}

export default Dentures;
