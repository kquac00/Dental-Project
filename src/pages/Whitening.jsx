import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import React from 'react';
import '../whitening.css';

function Whitening() {
    return (
        <div className="whitening-main">
            <h1>Dental Whitening</h1>

            <p>
                Not only do white teeth enhance your smile, but they make you feel more confident about your appearance. You deserve to have a beautiful and exceptional smile. We can help you achieve a whiter smile and a more confident you, in just 20 minutes.
            </p>

            <p>
                Teeth whitening (or bleaching) is a simple, non-invasive dental treatment used to change the color of natural tooth enamel and is an ideal way to enhance the beauty of your smile.
            </p>

            <p>
                Because having whiter teeth has now become the number one aesthetic concern of most patients, there are a number of ways to whiten teeth. The most popular method is using a home teeth whitening system that will whiten teeth dramatically. Since teeth whitening only works on natural tooth enamel, it is important to evaluate replacement of any old fillings, crowns, etc. Replacement of any restorations will be done after bleaching so they will match the newly bleached teeth.
            </p>

            <p>
                Teeth whitening is not permanent. A touch-up may be needed every several years, and more often if you smoke, drink coffee, tea, or wine.
            </p>

            <h2>Reasons for teeth whitening:</h2>
            <ul className="reasons-list">
                <li>Fluorosis (excessive fluoridation during tooth development).</li>
                <li>Normal wear of outer tooth layer.</li>
                <li>Stained teeth due to medications (tetracycline, etc.).</li>
                <li>Yellow, brown stained teeth.</li>
            </ul>

            <h2>What does teeth whitening involve?</h2>
            <p>
                The teeth whitening system that we used only requires one visit, which usually lasts 30 minutes. In addition, we will provide you with a take-home kit to whiten your teeth further. This gives you the best of both worlds - in-office whitening and home whitening.
            </p>
            <Link to='/services/cosmetic'><Button variant="contained">Back to Cosmetic</Button></Link>
            <Link to='/booking'><Button variant="outlined" className='green-button' style={{ marginLeft: '20px' }}>Book an Appointment</Button></Link>

        </div>
    );
}

export default Whitening;