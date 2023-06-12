import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import React from 'react';
import '../veneers.css';

const Veneers = () => {
    return (
        <div className="veneers-main">
            <h1>Dental Veneers</h1>

            <p>
                Veneers are very thin pieces of durable, tooth-shaped porcelain that are custom made (for shape and color) by a professional dental laboratory. They are bonded onto the front of teeth to create a beautiful and attractive smile.
            </p>

            <p>
                Veneers can completely reshape your teeth and smile. They can often be alternatives to crowns and the ideal solution in treating many dental conditions.
            </p>

            <p>
                As with most dental restorations, veneers are not permanent and may someday need replacement. They are very durable and will last many years, giving you a beautiful long-lasting smile.
            </p>

            <h2>Reasons for porcelain veneers:</h2>
            <ul className="reasons-list">
                <li>Cosmetically, to create a uniform, white, beautiful smile.</li>
                <li>Crooked teeth.</li>
                <li>Misshapen teeth.</li>
                <li>Severely discolored or stained teeth.</li>
                <li>Teeth that are too small or large.</li>
                <li>Unwanted or uneven spaces.</li>
                <li>Worn or chipped teeth.</li>
            </ul>

            <h2>What does getting porcelain veneers involve?</h2>
            <p>
                Getting veneers usually requires two visits to complete the process, with little or no anesthesia required during the procedure. The teeth are prepared by lightly buffing and shaping the surface to allow for the thickness of the veneer. A mold or impression of the teeth is taken and a shade (color) will then be chosen by you and the dentist.
            </p>

            <p>
                On the second visit, the teeth will be cleansed with special liquids to achieve a durable bond. Bonding cement is then placed between the tooth and veneer, and a special light beam is used to harden and set the bond.
            </p>

            <p>
                You will receive care instructions for veneers. Proper brushing, flossing, and regular dental visits will aid in the life of your new veneers.
            </p>
            <Link to='/services/cosmetic'><Button variant="contained">Back to Cosmetic</Button></Link>
            <Link to='/booking'><Button variant="outlined" className='green-button' style={{ marginLeft: '20px' }}>Book an Appointment</Button></Link>

        </div>
    );
}


export default Veneers