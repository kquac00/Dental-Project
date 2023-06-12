import React from 'react';
import '../periodontitis.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Periodontitis = () => {
    return (
        <div className="periodontitis-page">
            <h1 className="periodontitis-heading">Periodontitis</h1>
            <p>
                The term "periodontal" means "around the tooth." Periodontal disease (also known as periodontitis and gum disease) is a common inflammatory condition that affects the supporting and surrounding soft tissues of the tooth, including the jawbone itself in advanced stages.
            </p>
            <p>
                Periodontal disease is often preceded by gingivitis, a bacterial infection of the gum tissue. The toxins in plaque irritate and inflame the gums, leading to an infection. If left untreated, this infection colonizes the gum pockets between the teeth, becoming difficult to remove and treat. It progressively destroys connective tissue and jawbone, potentially resulting in shifting teeth, looseness, and tooth loss.
            </p>
            <p>
                Periodontal disease is the leading cause of tooth loss among adults in the developed world and should be promptly treated.
            </p>
            <h2 className="periodontitis-subheading">Types of Periodontal Disease</h2>
            <p>
                When left untreated, gingivitis (mild gum inflammation) can spread below the gum line. It causes a chronic inflammatory response that leads to the breakdown and destruction of bone and soft tissue. Deepening pockets between the gums and teeth indicate tissue and bone loss due to periodontal disease.
            </p>
            <p>
                Here are some common types of periodontal disease:
            </p>
            <ul>
                <li>
                    <strong>Chronic periodontitis:</strong> Inflammation within supporting tissues causes deep pockets and gum recession. It may appear as if the teeth are lengthening, but the gums are actually receding. This is the most common form of periodontal disease.
                </li>
                <li>
                    <strong>Aggressive periodontitis:</strong> This form occurs in otherwise healthy individuals and is characterized by rapid loss of gum attachment, chronic bone destruction, and familial aggregation.
                </li>
                <li>
                    <strong>Necrotizing periodontitis:</strong> Most often seen in individuals with systemic conditions such as HIV, immunosuppression, and malnutrition. It involves tissue death in the periodontal ligament, alveolar bone, and gingival tissues.
                </li>
                <li>
                    <strong>Periodontitis caused by systemic disease:</strong> This form often begins at an early age and is associated with medical conditions such as respiratory disease, diabetes, and heart disease.
                </li>
            </ul>
            <h2 className="periodontitis-subheading">Treatment for Periodontal Disease</h2>
            <p>
                The periodontist may choose from various surgical and nonsurgical treatments based on the condition of the teeth, gums, and jawbone. A complete periodontal exam will be done before recommending any treatment.
            </p>
            <p>
                Here are some common treatments for periodontal disease:
            </p>
            <ul>
                <li>
                    <strong>Scaling and root planing:</strong> To remove bacteria and calculus (tartar), the gum pockets are cleaned and treated with antibiotics. Prescription mouthwash may be recommended.
                </li>
                <li>
                    <strong>Tissue regeneration:</strong> Regrowth of bone and gum tissues can be encouraged using grafting procedures and membranes to aid in the regeneration process.
                </li>
                <li>
                    <strong>Pocket elimination surgery:</strong> Flap surgery can be performed to reduce the pocket size between teeth and gums. Jawbone surgery may also eliminate indentations that harbor bacteria.
                </li>
                <li>
                    <strong>Dental implants:</strong> Prosthetic teeth can be implanted into the jawbone to restore aesthetics and functionality. Tissue regeneration may be necessary to strengthen the bone before implant placement.
                </li>
            </ul>
            <p>
                If you have questions or concerns about periodontal disease, treatment, or dental implants, consult your dentist.
            </p>
            <Link to='/services/preventive'><Button variant="contained">Back to Preventive</Button></Link>
            <Link to='/booking'><Button variant="outlined" className='green-button' style={{ marginLeft: '20px' }}>Book an Appointment</Button></Link>

        </div>
    );
}

export default Periodontitis;
