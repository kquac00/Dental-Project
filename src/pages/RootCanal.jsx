import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import React from 'react';
import '../rootcanal.css';

const RootCanal = () => {
    return (
        <div className="root-canal-container">
            <h1>Dental Root Canals</h1>
            <p>
                Root canal therapy is needed when the nerve of a tooth is affected by decay or infection. In order to save the tooth, the pulp (the living tissue inside the tooth), nerves, bacteria, and any decay are removed, and the resulting space is filled with special, medicated, dental materials, which restore the tooth to its full function.
            </p>
            <p>
                Having a root canal done on a tooth is the treatment of choice to save a tooth that otherwise would die and have to be removed. Many patients believe that removing a tooth that has problems is the solution, but what is not realized is that extracting (pulling) a tooth will ultimately be more costly and cause significant problems for adjacent teeth.
            </p>
            <p>
                Root canal treatment is highly successful and usually lasts a lifetime, although on occasion, a tooth will have to be retreated due to new infections.
            </p>
            <h2>Signs and symptoms for possible root canal therapy:</h2>
            <ul>
                <li>An abscess (or pimple) on the gums.</li>
                <li>Sensitivity to hot and cold.</li>
                <li>Severe toothache pain.</li>
                <li>Sometimes no symptoms are present.</li>
                <li>Swelling and/or tenderness.</li>
            </ul>
            <h2>Reasons for root canal therapy:</h2>
            <ul>
                <li>Decay has reached the tooth pulp (the living tissue inside the tooth).</li>
                <li>Infection or abscess have developed inside the tooth or at the root tip.</li>
                <li>Injury or trauma to the tooth.</li>
            </ul>
            <h2>What does root canal therapy involve?</h2>
            <p>
                A root canal procedure requires one or more appointments and can be performed by us or an endodontist (you will get a referral from us).
            </p>
            <p>
                While the tooth is numb, a rubber dam (a sheet of rubber) will be placed around the tooth to keep it dry and free of saliva. An access opening is made on top of the tooth, and a series of root canal files are placed into the opening, one at a time, removing the pulp, nerve tissue, and bacteria. If tooth decay is present, it will also be removed with special dental instruments.
            </p>
            <p>
                Once the tooth is thoroughly cleaned, it will be sealed with either a permanent filling or, if additional appointments are needed, a temporary filling will be placed.
            </p>
            <p>
                At the next appointment, usually a week later, the roots and the inside cavity of the tooth will be filled and sealed with special dental materials. A filling will be placed to cover the opening on top of the tooth. In addition, all teeth that have root canal treatment should have a crown (cap) placed. This will protect the tooth and prevent it from breaking and restore it to its full function.
            </p>
            <p>
                After treatment, your tooth may still be sensitive, but this will subside as the inflammation diminishes and the tooth has healed.
            </p>
            <p>
                You will be given care instructions after each appointment. Good oral hygiene practices and regular dental visits will aid in the life of your root canal treatment.
            </p>
            <Link to='/services/surgical'><Button variant="contained">Back to Surgical</Button></Link>
            <Link to='/booking'><Button variant="outlined" className='green-button' style={{ marginLeft: '20px' }}>Book an Appointment</Button></Link>

        </div>
    );
}

export default RootCanal;
