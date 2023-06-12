import React from 'react';
import '../forms.css';
import { Typography } from '@mui/material';

const Forms = () => {
    return (
        <div className="forms-page">
            <Typography variant='h3'>Pacific NW Dentistry Forms</Typography>
            <div className="form-section">
                <h3>For your convenience, we have made our forms available online.</h3>
                <p>
                    This enables you to fill out the forms prior to your appointment, speeding up your check-in process. We understand and respect how valuable your time is.
                </p>
            </div>

            <div className="form-section">
                <h4>Dear New Patients,</h4>
                <p>Please fill out the following forms at least a day prior to your first appointment:</p>
                <ul>
                    <li>Registration Form</li>
                    <li>Medical History</li>
                    <li>HIPAA</li>
                    <li>Financial Agreement</li>
                    <li>Missed/Late Cancellation</li>
                </ul>
                <a href="https://patientviewer.com/WebFormsGWT/GWT/WebForms/WebForms.html?DOID=18595&WSDID=40084&NFID=40065&NFID=25555&NFID=25556&NFID=25557" target="_blank" rel="noopener noreferrer">
                    <button className="form-button">New Patient Forms</button>
                </a>
            </div>
            <div className="form-section">
                <p>Please fill out an updated medical history form at least once a year or if you have any changes in your medical history.</p>
                <a href="https://patientviewer.com/WebFormsGWT/GWT/WebForms/WebForms.html?DOID=18595&WSDID=40066" target="_blank" rel="noopener noreferrer">
                    <button className="form-button">Medical History Form</button>
                </a>
            </div>
            <div className="form-section">
                <p>Due to the COVID-19 outbreak, we require you to fill out a pre-screening form to determine whether you are well enough to see us. Your safety and the safety of our team is our priority.</p>
                <a href="https://patientviewer.com/WebFormsGWT/GWT/WebForms/WebForms.html?DOID=18595&WSDID=40018" target="_blank" rel="noopener noreferrer">
                    <button className="form-button">COVID-19 Pre-Screening Form</button>
                </a>
            </div>

            <p>We look forward to seeing you again.</p>
            <p>Sincerely,</p>
            <p>Pacific NW Dentistry</p>
        </div>
    );
};

export default Forms;
