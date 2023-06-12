import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../crown.css';

function Crowns() {
    return (
        <div className="crown-main">
            <h1>Dental Crowns</h1>

            <p>
                A crown (or cap) is a covering that encases the entire tooth surface
                restoring it to its original shape and size. A crown protects and
                strengthens tooth structure that cannot be restored with fillings or
                other types of restorations...
            </p>

            <p>
                Although there are several types of crowns, porcelain (tooth colored
                crown) are the most popular, because they resemble your natural teeth.
                They are highly durable and will last many years, but like most dental
                restorations, they may eventually need to be replaced. Porcelain crowns
                are made to match the shape, size, and color of your teeth giving you a
                natural, long-lasting beautiful smile.
            </p>

            <h2>Reasons for crowns:</h2>
            <ul className="reasons-list">
                <li>Broken or fractured teeth.</li>
                <li>Cosmetic enhancement.</li>
                <li>Decayed teeth.</li>
                <li>Fractured fillings.</li>
                <li>Large fillings.</li>
                <li>Tooth has a root canal.</li>
            </ul>

            <h2>What does getting a crown involve?</h2>
            <p>
                A crown procedure usually requires two appointments. Your first
                appointment will include taking several highly accurate molds (or
                impressions) that will be used to create your custom crown. A mold will
                also be used to create a temporary crown which will stay on your tooth
                for approximately two weeks until your new crown is fabricated by a
                dental laboratory.
            </p>

            <p>
                While the tooth is numb, the dentist will prepare the tooth by removing
                any decay and shaping the surface to properly fit the crown. Once these
                details are accomplished, your temporary crown will be placed with
                temporary cement and your bite will be checked to ensure you are biting
                properly.
            </p>

            <p>
                At your second appointment, your temporary crown will be removed, the
                tooth will be cleaned, and your new crown will be carefully placed to
                ensure the spacing and bite are accurate.
            </p>

            <p>
                You will be given care instructions and encouraged to have regular
                dental visits to check your new crown.
            </p>
            <Link to='/services/cosmetic'><Button variant="contained">Back to Cosmetic</Button></Link>
            <Link to='/booking'><Button variant="outlined" className='green-button' style={{ marginLeft: '20px' }}>Book an Appointment</Button></Link>

        </div>
    );
}

export default Crowns;
