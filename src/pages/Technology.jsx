import '../technology.css';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Typography } from '@mui/material';
import Tech1 from '../assets/images/tech1.jpg';
import Tech2 from '../assets/images/tech2.jpg';
import Tech3 from '../assets/images/tech3.jpg';
import Tech4 from '../assets/images/tech4.jpg';
import Tech5 from '../assets/images/tech5.jpg';

const Technology = () => {
    return (
        <div className="technology-container">
            <Typography variant='h3'>Technology</Typography>
            <p>
                As a computer engineer, Dr. Jean-Paul Banh was part of the original design team for the Intel Pentium IV through the Intel Core i7. He understands and appreciates the use of technology. His love of technology allows him to stay in touch with the latest cutting-edge dental techniques and technology. His engineering background also enables him to use technology to enhance patients' experience at the dental office.
            </p>
            <p>
                His practice is all digital. You do not have to fill out any paperwork. We use digital X-ray sensors for immediate images and minimal radiation. We also have a digital 3D scan to enable us to better visualize your tooth during extraction and/or root canals. We also use a digital 3D scan to make a surgical guide for dental implants. This decreases discomfort and pain for patients while increasing accuracy and safety during implant placement. We also use leading and best dental equipment, such as Morita Root ZX, Dentsply Cavitron, Dentsply dual calamus, W&H Implant motor, and more. All operatories are equipped with an intra-oral camera and a large monitor screen to educate patients about their teeth.
            </p>
            <p>
                To increase your comfort level, you get to pick your own music to listen to (Pandora) or watch a movie (Netflix, YouTube) while getting a chair massage.
            </p>
            <p>
                As an engineer, Dr. Banh also created this website and tailored it to his patients. Patients have the ability to request appointments, fill out forms online, ask questions, and more.
            </p>
            <p>
                He also wants to use his technical knowledge to educate, improve, and promote oral health. He has created many dental programs. All of his dental programs are free to download and have all been well received by users worldwide. During his spare time, he is working on creating more programs. Simply click on the links below to download the applications.
            </p>
            <h2>PC</h2>
            <ul>
                <li>Dental Helper</li>
            </ul>
            <h2>Windows Phone Apps</h2>
            <ul>
                <li>Tooth Morphology</li>
                <li>Dental RX</li>
                <li>Endo Guide</li>
            </ul>
            <div className='Tech-ImageList'>
                <ImageList
                    sx={{ width: 500, height: 450 }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </div>
    );
}
const itemData = [
    {
        img: Tech1,
        title: 'equipment1',

    },
    {
        img: Tech2,
        title: 'equipment2',
    },
    {
        img: Tech3,
        title: 'equipment3',
    },
    {
        img: Tech4,
        title: 'equipment4',

    },
    {
        img: Tech5,
        title: 'equipment5',

    }
];

export default Technology;

