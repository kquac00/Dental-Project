import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Team from '../assets/images/Team.jpg';
import Banh from '../assets/images/DrBanh.jpg';
import Tori from '../assets/images/Tori.jpg';
import Gabriela from '../assets/images/Gabriela.jpg';
import Maggie from '../assets/images/Maggie.jpg';
// import Arzu from '../assets/images/Arzu.jpg';
import '@fontsource/roboto/300.css';
// import { Link } from 'react-router-dom';
import BanhDialogs from '../components/BanhDialogs';
import MaggieDialogs from '../components/MaggieDialogs';
import VictoriaDialogs from '../components/VictoriaDialogs';
import GabrielaDialogs from '../components/GabrielaDialogs';
import '../myteam.css'

const MyTeam = () => {

    return (
        <div className="my-team-page">
            <div className='teamStatement'>
                <img src={Team} alt='team_pic' className='team-image' />
                <Typography variant='h3' style={{ textAlign: 'center' }}>Meet my team</Typography>
                <div className='team-text'>
                    <h2 className="title">Your Comfort is Our Priority</h2>
                    <p>Going to the dentist is not something that most people look forward to. We understand that and are committed to making your visit a pleasant one. Our team is dedicated to listening and addressing your concerns, answering your questions, and never rushing you. We treat you like family and ensure that no procedures are performed without your consent.</p>
                    <p>Please let us know if there is anything we can do to enhance your experience and make it even more enjoyable. We are here for you.</p>
                </div>
            </div>
            <div className='card-container'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 500 }}
                        image={Banh}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Dr. Banh
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Dr. Jean-Paul Banh is a highly skilled dentist with expertise in general dentistry, restorative procedures, cosmetic dentistry, orthodontics, oral surgery, sedation dentistry, sleep apnea treatment, radiology, and Botox and facial aesthetics. He is dedicated to providing quality and affordable dental care while building trust and fostering a stress-free environment for his patients.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <BanhDialogs />
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 500 }}
                        image={Tori}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Victoria - office manager
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Having transitioned from surgical assisting to general practice, I bring a wealth of hands-on experience and a broad perspective on dentistry to my role as Office Manager. My passion for all facets of dentistry allows me to manage operations effectively, ensuring a smooth, efficient, and patient-focused practice.

                            My mission is to make your visit to our office a positive one. I am deeply committed to maintaining the highest standards of care, constantly seeking to enhance patient experience and satisfaction. Trust in my ability to facilitate a seamless, pleasant dental journey for you.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <VictoriaDialogs />
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 500 }}
                        image={Gabriela}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Gabriela - dental assistant
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            As an exceptional dental assistant, Gabriela is instrumental in many aspects of patient care, ranging from preparing patients for dental procedures and assisting the dentist during these procedures to taking and developing dental radiographs (X-rays). She also ensures a clean, sterile environment by sterilizing and disinfecting instruments and managing the inventory of dental supplies. Additionally, Gabriela offers comfort and clear communication to patients, explaining the procedures and offering postoperative instructions to facilitate optimal recovery.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <GabrielaDialogs />
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 500 }}
                        image={Maggie}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Maggie - dental hygienist
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            As an experienced dental hygienist, my primary focus is your oral health. I provide meticulous assessments, comprehensive cleanings, and precise dental X-rays when necessary. An integral part of my role involves patient education, imparting the knowledge you need to maintain optimal oral health.

                            I am also equipped to administer periodontal therapy and maintain comprehensive patient records as per local regulations. My goal is to offer an unparalleled level of dental care, combining professionalism and personal attention. I'm excited to help you achieve and maintain a radiant, healthy smile.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <MaggieDialogs />
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default MyTeam;
