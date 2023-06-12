import React from 'react';
import '../insurance.css';

const InsurancePage = () => {
    return (
        <div className="insurance-page">
            <h1>Insurance</h1>
            <p>We have various payment options based on your needs. We are a preferred provider for most major dental insurances. Unfortunately, at this time, we currently do not accept Medicaid (Molina, Provider One, Apple Health, DSHS), Medicare (Dental Quest), or any HMO, such as Delta Care. If you do not see your insurance listed below, please call us and we can verify it for you.</p>
            <div className="insurance-providers">
                <h2>Accepted Insurance Providers:</h2>
                <ul>
                    <li>Delta Dental</li>
                    <li>Humana</li>
                    <li>Cigna</li>
                    <li>Premera</li>
                    <li>Aetna</li>
                    <li>United Concordia</li>
                    <li>Regence</li>
                    <li>Principal</li>
                    <li>Dentemax</li>
                    <li>Metlife</li>
                    <li>United HealthCare</li>
                    <li>Guardian</li>
                    <li>Soundpath</li>
                    <li>GEHA</li>
                    <li>HMA</li>
                </ul>
            </div>
            <div className="payment-options">
                <h2>Payment Options:</h2>
                <p>We accept cash, check, Visa, MasterCard, and Discover. We also provide flexible financing options, including:</p>
                <ul>
                    <li>In-Office Financing</li>
                    <li>Care Credit</li>
                </ul>
            </div>
        </div>
    );
};

export default InsurancePage;
