import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import React from 'react';
import '../bonegraft.css';

const BoneGraft = () => {
    return (
        <div className="bone-graft-container">
            <h1>Bone Graft</h1>
            <p>
                Have you ever seen someone without their dentures in? Their face collapses inward. This is due to bone loss from the loss of teeth. This process starts as soon as even one tooth is missing.
            </p>
            <p>
                Over a short period of time, the jawbone associated with missing teeth dissolves and shrinks. Similar to a bar of soap in the shower, the bone “melts” away once a tooth is removed. 40-60% of the bone is lost in the first six months to one year after a tooth is extracted!
            </p>
            <p>
                This often leaves a condition in which there is poor quality and quantity of bone suitable for placement of dental implants. In these situations, most patients are not candidates for placement of dental implants. Today, we have the ability to grow bone where needed. This not only gives us the opportunity to place implants of proper length and width, it also gives us a chance to restore functionality and esthetic appearance. If the bone is too thin or too short it must be replaced so an implant can be placed in the precise position of the tooth.
            </p>
            <p>
                At Pacific NW Dentistry, we always recommend bone graft regardless of whether you want an implant or not. Bone graft will help maintain the ridge and speed up your healing time after the extraction. We also made it affordable for our patients.
            </p>
            <Link to='/services/surgical'><Button variant="contained">Back to Surgical</Button></Link>
            <Link to='/booking'><Button variant="outlined" className='green-button' style={{ marginLeft: '20px' }}>Book an Appointment</Button></Link>

        </div>
    );
}

export default BoneGraft;
