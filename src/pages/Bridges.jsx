import React from 'react';
import '../bridges.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Bridges() {
    return (
        <div className="bridges-main">
            <h1>Dental Bridges</h1>

            <p>
                A dental bridge is a fixed (non-removable) appliance and is an excellent way to replace missing teeth.
            </p>

            <p>
                There are several types of bridges. You and your dentist will discuss the best options for your particular case. The "traditional bridge" is the most popular type and is usually made of porcelain fused to metal. Porcelain fixed bridges are most popular because they resemble your natural teeth. This type of bridge consists of two crowns that go over two anchoring teeth (abutment teeth) and are attached to pontics (artificial teeth), filling the gap created by one or more missing teeth.
            </p>

            <p>
                Dental bridges are highly durable and will last many years, however, they may need replacement or need to be re-cemented due to normal wear.
            </p>

            <h2>Reasons for a fixed bridge:</h2>
            <ul className="reasons-list">
                <li>Fill space of missing teeth.</li>
                <li>Maintain facial shape.</li>
                <li>Prevent remaining teeth from drifting out of position.</li>
                <li>Restore chewing and speaking ability.</li>
                <li>Restore your smile.</li>
                <li>Upgrade from a removable partial denture to a permanent dental appliance.</li>
            </ul>

            <h2>What does getting a fixed bridge involve?</h2>
            <p>
                Getting a bridge usually requires two or more visits. While the teeth are numb, the two anchoring teeth are prepared by removing a portion of enamel to allow for a crown. Next, a highly accurate impression (mold) is made which will be sent to a dental laboratory where the bridge will be fabricated. In addition, a temporary bridge will be made and worn for several weeks until your next appointment.
            </p>

            <p>
                At the second visit, your permanent bridge will be carefully checked, adjusted, and cemented to achieve a proper fit. Occasionally, your dentist may only temporarily cement the bridge, allowing your teeth and tissue time to get used to the new bridge. The new bridge will be permanently cemented at a later time.
            </p>

            <p>
                You will receive care instructions at the conclusion of your treatment. Proper brushing, flossing, and regular dental visits will aid in the life of your new permanent bridge.
            </p>
            <Link to='/services/cosmetic'><Button variant="contained">Back to Cosmetic</Button></Link>
            <Link to='/booking'><Button variant="outlined" className='green-button' style={{ marginLeft: '20px' }}>Book an Appointment</Button></Link>

        </div>
    );
}

export default Bridges;