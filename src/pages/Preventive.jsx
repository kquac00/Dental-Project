import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DentistChair from '../assets/images/dentist_chair.jpg';
import { Link } from 'react-router-dom';

const Preventive = () => {
    return (
        <div>
            <div style={{ position: 'relative', minHeight: '100vh' }}>
                <img
                    src={DentistChair}
                    alt='dentistChair'
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -1,
                    }}
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '50px',
                        color: '#ffffff',
                        textAlign: 'center',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                        zIndex: 1,
                    }}
                >
                    <Typography variant='h3' style={{ color: 'white', marginTop: '150px' }}>Preventive</Typography>
                    <p style={{ color: 'white' }}>
                        Dental preventive care encompasses a comprehensive approach to maintaining optimal oral health and averting dental ailments. It encompasses regular dental examinations, proficient teeth cleanings, diligent oral hygiene practices, and patient education initiatives. By prioritizing preventive measures, individuals can proactively mitigate the likelihood of dental complications, foster sustained oral well-being, and potentially reduce the need for extensive dental interventions.
                    </p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-200px', marginBottom: '50px', flexWrap: 'wrap' }}>
                <Card sx={{ maxWidth: 345, margin: '10px', backgroundColor: '#e5f6ff' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Periodontitis
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            The term “periodontal”means “around the tooth.”  Periodontal disease (also known as periodontitis and gum disease) is a common inflammatory condition which affects the supporting and surrounding soft tissues of the tooth; also the jawbone itself when in its most advanced stages.
                            Periodontal disease is most often preceded by gingivitis which is a bacterial infection of the gum tissue.  A bacterial infection affects the gums when the toxins contained in plaque begin to irritate and inflame the gum tissues.  Once this bacterial infection colonizes in the gum pockets between the teeth, it becomes much more difficult to remove and treat.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to='/booking'><Button variant="outlined">Book an Appointment</Button></Link>
                        <Link to='/services/preventive/periodontitis'><Button variant="contained">Read More</Button></Link>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345, margin: '10px', backgroundColor: '#f8e9ff' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Dental Xray
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Dental radiographs (x-rays) are essential, preventative, diagnostic tools that provide valuable information not visible during a regular dental exam.  Dentists and dental hygienists use this information to safely and accurately detect hidden dental abnormalities and ...
                            Dental radiographs (x-rays) are essential, preventative, diagnostic tools that provide valuable information not visible during a regular dental exam.  Dentists and dental hygienists use this information to safely and accurately detect hidden dental abnormalities and complete an accurate treatment plan.  Without x-rays, problem areas may go undetected.                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to='/booking'><Button variant="outlined">Book an Appointment</Button></Link>
                        <Link to='/services/preventive/xray'><Button variant="contained">Read More</Button></Link>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345, margin: '10px', backgroundColor: '#f1ffed' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Dental Prophy
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            A comprehensive dental exam will be performed by your dentist at your initial dental visit.  At regular check-up exams, your dentist and hygienist will include the following:
                            Examination of diagnostic x-rays (radiographs): Essential for detection of decay, tumors, cysts, and bone loss.  X-rays also help determine tooth and root positions.
                            Oral cancer screening: Check the face, neck, lips, tongue, throat, tissues, and gums for any signs of oral cancer.
                            Gum disease evaluation: Check the gums and bone around the teeth for any signs of periodontal disease.
                            Examination of tooth decay: All tooth surfaces will be checked for decay with special dental instruments.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to='/booking'><Button variant="outlined">Book an Appointment</Button></Link>
                        <Link to='/services/preventive/prophy'><Button variant="contained">Read More</Button></Link>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

export default Preventive;
