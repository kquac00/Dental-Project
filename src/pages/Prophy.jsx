import React from 'react';
import '../prophy.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Prophy = () => {
    return (
        <div className="dental-prophy-page">
            <h1 className="dental-prophy-heading">Dental Prophy</h1>
            <h2>Comprehensive Dental Exam</h2>
            <p>
                A comprehensive dental exam will be performed by your dentist at your initial dental visit. At regular check-up exams, your dentist and hygienist will include the following:
            </p>
            <ul>
                <li>
                    Examination of diagnostic x-rays (radiographs): Essential for the detection of decay, tumors, cysts, and bone loss. X-rays also help determine tooth and root positions.
                </li>
                <li>
                    Oral cancer screening: Check the face, neck, lips, tongue, throat, tissues, and gums for any signs of oral cancer.
                </li>
                <li>
                    Gum disease evaluation: Check the gums and bone around the teeth for any signs of periodontal disease.
                </li>
                <li>
                    Examination of tooth decay: All tooth surfaces will be checked for decay with special dental instruments.
                </li>
                <li>
                    Examination of existing restorations: Check current fillings, crowns, etc.
                </li>
            </ul>
            <h2>Professional Dental Cleaning</h2>
            <p>
                Professional dental cleanings (dental prophylaxis) are usually performed by Registered Dental Hygienists. Your cleaning appointment will include a dental exam and the following:
            </p>
            <ul>
                <li>
                    Removal of calculus (tartar): Calculus is hardened plaque that has been left on the tooth for some time and is now firmly attached to the tooth surface. Calculus forms above and below the gum line and can only be removed with special dental instruments.
                </li>
                <li>
                    Removal of plaque: Plaque is a sticky, almost invisible film that forms on the teeth. It is a growing colony of living bacteria, food debris, and saliva. The bacteria produce toxins (poisons) that inflame the gums. This inflammation is the start of periodontal disease!
                </li>
                <li>
                    Teeth polishing: Remove stain and plaque that is not otherwise removed during tooth brushing and scaling.
                </li>
            </ul>
            <Link to='/services/preventive'><Button variant="contained">Back to Preventive</Button></Link>
            <Link to='/booking'><Button variant="outlined" className='green-button' style={{ marginLeft: '20px' }}>Book an Appointment</Button></Link>

        </div>
    );
}

export default Prophy;
