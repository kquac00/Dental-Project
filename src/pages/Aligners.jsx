import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import React from 'react';
import '../aligners.css';


function Aligners() {

    return (
        <div className="container">
            <h1>Clear Aligners</h1>

            <p>
                Clear aligners (Invisalign or Clear Correct) are virtually invisible. No one may even notice that you’re wearing them, making them a seamless fit with your lifestyle.
            </p>

            <p>
                Clear aligners are removable. For the best results and a timely outcome, aligners should be worn for 20 to 22 hours per day. However, unlike with braces, you have the flexibility to remove your aligners to eat and drink what you want during treatment. And you can also remove the aligners to brush and floss as you normally would, for fresh breath and good oral hygiene. There are no metal brackets or wires that could cause irritation to your mouth, an advantage over traditional braces. Plus, since your office visits during treatment don’t involve metal or wire adjustments, you’ll likely spend less time in the doctor’s chair.
            </p>

            <p>
                Invisalign allows you to view your virtual results and treatment plan before you start so you can see how your straightened teeth will look when your treatment is complete. Instead of imagining how much better it can be, you’ll be able to see it for yourself.
            </p>
            <div>
                <Link to='/services/orthodontic'><Button variant="contained">Back to Orthodontic</Button></Link>
                <Link to='/booking'><Button variant="outlined" >Book an Appointment</Button></Link>
            </div>
        </div>
    );
}

export default Aligners;