import React from 'react';
import '../filling.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Filling() {
    return (
        <div className="filling-main">
            <h1>Composite Filling</h1>

            <p>
                A composite (tooth-colored) filling is used to repair a tooth that is affected by decay, cracks, fractures, etc. The decayed or affected portion of the tooth will be removed and then filled with a composite filling.
            </p>

            <p>
                There are many types of filling materials available, each with their own advantages and disadvantages. We will discuss the best options for restoring your teeth. Composite fillings are widely used today. Because composite fillings are tooth-colored, they can be closely matched to the color of existing teeth and are more aesthetically suited for use in front teeth or the more visible areas of the teeth.
            </p>

            <p>
                As with most dental restorations, composite fillings are not permanent and may someday have to be replaced. They are very durable and will last many years, giving you a long-lasting, beautiful smile.
            </p>

            <h2>Reasons for composite fillings:</h2>
            <ul className="reasons-list">
                <li>Chipped teeth.</li>
                <li>Closing space between two teeth.</li>
                <li>Cracked or broken teeth.</li>
                <li>Decayed teeth.</li>
                <li>Worn teeth.</li>
            </ul>

            <h2>How are composite fillings placed?</h2>
            <p>
                Composite fillings are usually placed in one appointment. While the tooth is numb, your dentist will remove decay as necessary. The space will then be thoroughly cleaned and carefully prepared before the new filling is placed. If the decay was near the nerve of the tooth, a special medication will be applied for added protection. The composite filling will then be precisely placed, shaped, and polished, restoring your tooth to its original shape and function.
            </p>

            <p>
                It is normal to experience sensitivity to hot and cold when composite fillings are first placed, however, this will subside shortly after your tooth acclimates to the new filling.
            </p>

            <p>
                You will be given care instructions at the conclusion of your treatment. Good oral hygiene practices, eating habits, and regular dental visits will aid in the life of your new fillings.
            </p>
            <Link to='/services/cosmetic'><Button variant="contained">Back to Cosmetic</Button></Link>
            <Link to='/booking'><Button variant="outlined" className='green-button' style={{ marginLeft: '20px' }}>Book an Appointment</Button></Link>

        </div>
    );
}

export default Filling;