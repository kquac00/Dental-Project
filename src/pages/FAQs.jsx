import React from 'react';
import '../faqs.css';

const FAQs = () => {
    return (
        <div className="faqs-container">
            <h1>Frequently Asked Questions</h1>
            <p>These are the most common questions we get asked. If you have any questions, please call us at 253-880-1828 or email us at info@pacificnwdentistry.com. You can also use the online forms on this website.</p>
            <div className="faq-cards">
                <div className="faq-card">
                    <h2>What insurances do you accept?</h2>
                    <p>
                        To better accommodate and provide dental service to our patients, we are preferred providers to most insurances. However, we do not accept Medicaid, such as Apple Health, DSHS, Molina, and state insurance. We also do not accept DMO or HMO since with those plans, you have no option to pick which dentist you can see.
                        <br /><br />
                        Some of the insurances that we do accept are Delta Dental, Humana, Cigna, Premera, Aetna, United Concordia, Regence, Principal, Dentemax, Metlife, Guardian, GEHA, HMA, and certain pension plans.
                        <br /><br />
                        If you don't see your insurance listed, do not worry about it. Give us a call (253-880-1828) and we can verify for you as long as it is not Medicaid, HMO, or DMO.
                    </p>
                </div>
                <div className="faq-card">
                    <h2>What if I don't have dental insurance?</h2>
                    <p>
                        Our goal is to treat all patients regardless of whether you have insurance or not. We strive to provide affordable dental care to everyone. We accept cash and all major credit cards.
                        <br /><br />
                        We also have a wellness program, which will provide you with the necessary cleanings and exams. It also provides a significant discount on any dental procedures. It could save you hundreds or even thousands of dollars. Please call us (253-880-1828) to ask us about it.
                        <br /><br />
                        We also provide payment plans, such as CareCredit or in-house payments.
                    </p>
                </div>
                <div className="faq-card">
                    <h2>Do you do medical billing?</h2>
                    <p>
                        We are one of the few dental practices that do medical billing. Medical billing will allow you to use your medical insurance for certain dental procedures, such as extraction, implants, sleep apnea, and radiographs. Although there is no guarantee that your medical insurance will pay for it, we have a good track record for medical payment.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FAQs;
