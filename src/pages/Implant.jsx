import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import React from 'react';
import '../implant.css';

const Implant = () => {
    return (
        <div className="implant-container">
            <h1>Implant</h1>
            <p>
                Missing a tooth isn’t just bad for your looks; it can be bad for your health as well! Healthy teeth play an important role in the body from head to toe. When you are missing one, your jawbone deteriorates, your self-esteem suffers and so does your diet, which negatively affects the health of your entire body. Dental implants look, feel and function just like natural teeth and are widely recognized as the best replacement method.
            </p>
            <h2>When to get an implant?</h2>
            <p>
                You may be surprised to hear that your jawbone is a lot like a muscle, in that it must be stimulated regularly in order to maintain its volume. Therefore, when a tooth is extracted (or falls out naturally), the jawbone begins to deteriorate almost immediately. In fact, studies show that within a year of tooth loss, there is a 25% decrease in bone width. Thankfully, dental implants can take the place of natural teeth to provide the stimulus needed by the jaw. If done early, this greatly reduces the need for bone grafting down the road.
            </p>
            <h2>What is an implant?</h2>
            <p>
                Dental implants are made of titanium. A completed implant includes three pieces: the implant itself (a titanium screw that is placed in the jawbone), the abutment (a connector between the implant and crown) and the crown (the part that is visible and looks like a tooth). At Pacific NW Dentistry, Dr. Banh will not only place the implant but restore it with a custom abutment and a crown.
            </p>
            <h2>Why choose us?</h2>
            <p>
                Dr Banh has been trained to place implants. He has placed multiple implants throughout his career. When placing an implant, Dr. Banh will not just look at the bone level but also understand the esthetics of the implant crown. Hence, the implant will be placed in its most optimal location to achieve the best-looking results. You will also save money since our fees are lower than a specialist. Dr. Banh has placed implants freehanded and using surgical guides.
            </p>
            <h2>Why surgical guided implant placement?</h2>
            <p>
                Dr. Banh has placed implants freehanded and using surgical guides. He prefers using surgical guides to minimize patients' trauma and maximize the location of the implant. Using a surgical guide, we no longer have to create a large flap but could use a tissue punch. This will greatly reduce pain and discomfort. This will also reduce healing time. We have patients work right after an implant placement, although we do not suggest that. The process will include taking a CBCT and impression so that we can plan the implant out and create a surgical guide for the day of surgery.
            </p>
            <Link to='/services/surgical'><Button variant="contained">Back to Surgical</Button></Link>
            <Link to='/booking'><Button variant="outlined" className='green-button' style={{ marginLeft: '20px' }}>Book an Appointment</Button></Link>

        </div>
    );
}

export default Implant;
