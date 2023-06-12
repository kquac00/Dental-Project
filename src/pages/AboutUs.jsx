import React from 'react';
// import './AboutUsPage.css'; 

const AboutUs = () => {
    return (
        <div className="about-us-page">
            <h1>About Us</h1>
            <div className="company-info">
                <h2>Our Company</h2>
                <p>
                    [Briefly describe your dental practice and what sets you apart. Mention the years of experience, specialized services, or any unique aspects that make your practice stand out. Highlight your commitment to providing high-quality dental care and excellent patient experiences.]
                </p>
            </div>
            <div className="team-members">
                <h2>Our Team</h2>
                <p>
                    [Introduce your team of dentists, hygienists, and support staff. Highlight their qualifications, areas of expertise, and dedication to patient care. You can also mention any ongoing professional development or certifications that demonstrate your team's commitment to staying up-to-date with the latest dental practices.]
                </p>
            </div>
            <div className="mission">
                <h2>Our Mission</h2>
                <p>
                    [Share your practice's mission statement or core values. Explain your commitment to providing personalized, compassionate, and comprehensive dental care to patients. Highlight your dedication to oral health education and preventive dentistry.]
                </p>
            </div>
            <div className="community-involvement">
                <h2>Community Involvement</h2>
                <p>
                    [Describe any community outreach programs, sponsorships, or partnerships that your practice participates in. Discuss your involvement in promoting oral health awareness and supporting local initiatives.]
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
