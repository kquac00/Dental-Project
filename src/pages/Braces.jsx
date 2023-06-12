import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import React from 'react';
import '../braces.css';

const Braces = () => {
    return (
        <div className="container">
            <h1>Braces</h1>

            <p>
                Braces can correct crooked and crowded teeth, a misaligned bite, and jaw problems. Braces also eliminate problems you may have with eating, speaking properly, or with keeping your teeth clean. With advancements in dental technology, traditional braces are now sleeker, smaller, and more comfortable.
            </p>

            <h2>Traditional Braces</h2>

            <p>
                Traditional braces consist of standard metal brackets that are placed on your teeth with an adhesive and connected by wire. They require periodic tightening so steady pressure can gradually straighten your teeth and align your jaw. While metal brackets are still the most common, there are various other treatment options available. Read below to learn more about traditional braces and how you can customize them to fit your lifestyle.
            </p>

            <p>
                <strong>Traditional braces:</strong> Traditional braces with metal brackets and wires are a very efficient and cost-effective way to align teeth or close spaces. Metal braces provide a minimal friction environment for optimal movement of teeth.
            </p>

            <h2>Ceramic Braces</h2>

            <p>
                <strong>Ceramic braces:</strong> Ceramic braces are an aesthetic and discreet upgrade to traditional braces. The polycrystalline construction delivers clarity and strength to the brackets. Ceramic brackets can be coupled with white coated wires and white elastic modules to create the most discreet and attractive-looking braces.
            </p>

            <h2>Advantages and Disadvantages</h2>

            <p>
                The advantages of braces are that they are on all the time, thus they are not as dependent on patients' compliance. They are also better suited for large teeth movements. The disadvantages are the aesthetics and the difficulty of keeping your teeth clean (brushing and especially flossing will be harder with the brackets and wires).
            </p>
            <Link to='/services/orthodontic'><Button variant="contained">Back to Orthodontic</Button></Link>
            <Link to='/booking'><Button variant="outlined" className='green-button' style={{ marginLeft: '20px' }}>Book an Appointment</Button></Link>

        </div>
    )
}

export default Braces