import React from 'react';
import '../covid.css';

const CovidUpdate = () => {
    return (
        <div className="covid-container">
            <h2 className="covid-title">COVID-19 Update</h2>
            <div className="covid-content">
                <p className="covid-text">
                    At Pacific NW Dentistry, the health and safety of our patients is our top priority. We want to assure you that we are dedicated to providing a safe environment for your dental care, especially during these challenging times. When you visit us, you can trust that we have implemented stringent protocols to minimize any potential risk and ensure your well-being.
                </p>
                <p className="covid-text">
                    We have taken the following measures to ensure your safety:
                </p>
                <ul className="covid-list">
                    <li>
                        Enhanced cleaning and disinfection procedures throughout our facility.
                    </li>
                    <li>
                        Strict adherence to recommended guidelines from health authorities.
                    </li>
                    <li>
                        Practicing proper hand hygiene and wearing appropriate personal protective equipment.
                    </li>
                    <li>
                        Thorough screening of patients for symptoms and risk factors.
                    </li>
                    <li>
                        Implementation of social distancing measures and adjusted appointment schedules to minimize contact.
                    </li>
                </ul>
                <p className="covid-text">
                    Our caring and experienced team is here to provide you with the dental services you need, ensuring your comfort and peace of mind. We want you to feel confident that you don't have to worry about the virus when receiving services from us.
                </p>
                <p className="covid-text">
                    If you have any questions or concerns, please don't hesitate to reach out to our office. Your health and safety are our utmost priority, and we are committed to serving you with the highest level of care.
                </p>
            </div>
        </div>
    );
};

export default CovidUpdate;
