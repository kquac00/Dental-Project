import React from 'react';
import '../sleepapnea.css';
import { Typography } from '@mui/material';

function SleepApnea() {
    return (
        <div className="sleep-apnea-main">
            <Typography variant='h3' style={{ textAlign: 'center', color: 'black' }}>Sleep Apnea</Typography>

            <p>
                At Pacific NW Dentistry, we are proud to offer our patients an alternative to CPAP - One that is more comfortable to wear, requires no electricity, and portable. Our patients love the alternative. Here's a review from one of our sleep apnea patients:
            </p>

            <blockquote>
                <p>
                    "Wow, The Wizard of Dentistry and Sleep Apnea!...I had sleep apnea! In a couple of one-hour appointments I was fitted with a Micro2 Oral Appliance. It is Awesome! No CPAP, No Surgery, No Snoring. It’s great for being out camping, hiking and traveling. You can sleep on your side, on your back or on your stomach. It pops in and out like a retainer. No power or batteries required." (Google review)
                </p>
            </blockquote>

            <h2>What is sleep apnea?</h2>
            <p>
                Sleep apnea is a condition in which your breathing stops periodically during sleep, as many as 20-30 times per hour. Each time you stop breathing in your sleep, the resulting lack of oxygen alerts your brain, which temporarily wakes you up to restart proper breathing. Since the time spent awake is so brief, most people with sleep apnea don't remember it, and many believe they are getting a good night's sleep when, in fact, they are not. The constant wake-sleep, wake-sleep cycle prevents those with sleep apnea from achieving deep sleep, resulting in a constant drowsy feeling during the day.
            </p>

            <h2>What are the signs of sleep apnea?</h2>
            <p>
                The following symptoms can indicate the presence of sleep apnea. If you notice one or more of these, contact our practice.
            </p>
            <ul className="symptoms-list">
                <li>Insomnia or difficulty sleeping</li>
                <li>Loud snoring at night</li>
                <li>Waking up at night short of breath</li>
                <li>Snorting or choking sounds during the night (indicating a restart of breathing)</li>
                <li>Headaches upon waking in the morning</li>
                <li>Falling asleep unintentionally during the day</li>
                <li>Extreme drowsiness throughout the day</li>
            </ul>

            <h2>Are there different types of sleep apnea?</h2>
            <p>
                There are three categories of sleep apnea. The most common is called obstructive sleep apnea (OSA) and occurs due to a physical blockage, usually the collapsing of the soft tissue in the back of the throat. Less common is central sleep apnea (CSA), in which breathing stops because the muscles involved don't receive the proper signal from the brain. And some people suffer from "mixed" or "complex" sleep apnea, which is a combination of obstructive and central.
            </p>

            <h2>What are risk factors for sleep apnea?</h2>
            <p>
                Obstructive sleep apnea is more common in males than females and more common in older adults (40+) than younger adults and children. However, anyone — regardless of gender or age — can suffer from sleep apnea. Other risk factors include obesity, smoking, drinking, use of sedatives or tranquilizers, and family history. Central sleep apnea strikes most often in people with heart disorders, neuromuscular disorders, strokes, or brain tumors.
            </p>

            <h2>Is sleep apnea dangerous?</h2>
            <p>
                Sleep apnea is considered a serious medical problem and if left untreated, it can lead to high blood pressure, increasing the risk of heart failure and stroke. The ongoing state of fatigue caused by sleep apnea can lead to problems at work or school, as well as danger when driving or operating heavy machinery. Sleep apnea can also cause complications with medication or surgery; sedation by anesthesia can be risky, as can lying flat in bed after an operation. If you know or suspect you suffer from sleep apnea, let your family doctor know before taking prescribed medication or having surgery.
            </p>

            <h2>How is sleep apnea treated?</h2>
            <p>
                Treatments for sleep apnea depend on the severity of each individual case and the type of apnea. Basic treatment can be behavioral — for instance, patients are instructed to lose weight, stop smoking, or sleep on their sides instead of on their backs. Beyond that, oral devices can be used to position the mouth in such a way that prevents throat blockage. In more severe cases, surgery may be the best option.
            </p>

            <h2>What should I do if I suspect that someone in my family suffers from sleep apnea?</h2>
            <p>
                Contact our practice, and we can refer you to a sleep apnea specialist. The specialist may recommend a sleep study to diagnose the precise extent of the problem and can prescribe appropriate treatment. Depending on your situation, treatment may involve an oral device that we can custom-create for you.
            </p>
        </div>
    );
}

export default SleepApnea;
