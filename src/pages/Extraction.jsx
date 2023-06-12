import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import React from 'react';

const Extraction = () => {
    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', marginTop: '150px' }}>
            <h1>Extraction</h1>
            <p>
                Extraction might be needed due to the following conditions: Caries (cavity), Periapical abscess, Infected tooth, Periodontitis (bone loss around a tooth), Cracked or fractured tooth, and Orthodontic treatment. At Pacific NW Dentistry, we always advise that extraction should be your last option.
            </p>
            <p>
                Dr. Banh has done many surgical extractions throughout his career at his practice, community clinics, and outreach programs. He also does wisdom tooth extractions. When he extracts teeth, he always strives to do it as atraumatic as possible, preserving as much bone as possible. This decreases pain and healing time.
            </p>
            <Link to='/services/surgical'><Button variant="contained">Back to Surgical</Button></Link>
            <Link to='/booking'><Button variant="outlined" className='green-button' style={{ marginLeft: '20px' }}>Book an Appointment</Button></Link>

        </div>
    );
}

export default Extraction;
