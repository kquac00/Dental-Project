import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import BackgroundImage from '../assets/images/office_outside.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CosmeticImage from '../assets/images/dental_cosmetic.jpg';
import PreventiveImage from '../assets/images/Preventative-Dental-Care.jpg';
import SurgicalImage from '../assets/images/dental_surgical.jpg';
import OrthodonticImage from '../assets/images/orthodontic-treatment.jpg';
import SleepApneaImage from '../assets/images/sleep_apnea.jpg';

const serviceItems = [
    { name: 'Cosmetic Dentistry', image: CosmeticImage, link: '/services/cosmetic' },
    { name: 'Preventive Dentistry', image: PreventiveImage, link: '/services/preventive' },
    { name: 'Surgical Dentistry', image: SurgicalImage, link: '/services/surgical' },
    { name: 'Orthodontic Dentistry', image: OrthodonticImage, link: '/services/orthodontic' },
    { name: 'Sleep Apnea', image: SleepApneaImage, link: '/services/sleep_apnea' },
];

const Commitments = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <Container style={{ textAlign: 'center', color: 'blue' }}>
                <Box sx={{ py: 4, backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: '15px' }}>
                    <Typography variant="h4" gutterBottom>OUR COMMITMENTS TO YOU</Typography>
                    <Typography variant="body1" gutterBottom>
                        We strive to provide the best quality and affordable dental care in a comfortable and trusting environment. We provide comprehensive dental services to people of all ages, including veneers, crowns, implants, bridges, braces, Invisalign, ClearCorrect, dentures, cleaning, sleep apnea appliances, teeth whitening, and tooth colored fillings.
                        Our practice is all digital and we keep up to date with the latest cutting edge dental techniques and technology.
                        We focus on education and prevention as we work with you to achieve your oral health goals.
                        We always welcome new patients. We look forward to meeting you and getting to know you.
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', mt: 4 }}>
                        {serviceItems.map((item, index) => (
                            <Card key={index} sx={{ maxWidth: 345, m: 1 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.image}
                                    alt={item.name}
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">{item.name}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="outlined" component={Link} to='/booking'>Request Appointment</Button>
                                    <Button variant="contained" component={Link} to={item.link}>Details</Button>
                                </CardActions>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Commitments;
