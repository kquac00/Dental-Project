import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DentistChair from '../assets/images/dentist_chair2.jpg';
import { Link } from 'react-router-dom';
import '../orthodontic.css';

const Orthodontic = () => {
    return (
        <div className='orthodontic-main'>
            <div style={{ position: 'relative', minHeight: '100vh' }}>
                <img src={DentistChair} alt='dentistChair' className='ortho-img' />
                <div className='ortho-content'>
                    <Typography variant='h3' style={{ color: 'blue' }}>Orthodontic</Typography>
                    <div className='ortho-text'>
                        <Typography>
                            There are many benefits to straightening your teeth and improving your jaw alignment that extend beyond the renewed self-confidence you’ll have with a beautiful smile. Crooked teeth and a bad bite can contribute to periodontal problems, tooth decay (cavities), irregular tooth wear, and possibly even TMJ pain. Orthodontic treatment may improve the health of your teeth, gums, and surrounding bone structure. Straight teeth are easier to keep clean and may improve your overall oral health.
                        </Typography>
                        <Typography>
                            At Pacific NW Dentistry, we believe in providing our patients with options. Dr. Banh is trained in traditional braces, Invisalign, Clear Correct, Six Month Smiles, and other systems. There is no one system for everyone, and that is the reason why we provide a complimentary consultation to anyone who is interested in straightening teeth.
                        </Typography>
                        <Typography>
                            It's never too late to improve your smile. <span className="smile">&#9786;</span>
                        </Typography>
                        <Typography>
                            Ready to get started?
                        </Typography>
                        <Typography>
                            Contact us today to schedule your complimentary consultation!
                        </Typography>
                        <Typography variant='h5'>
                            <span className="phone-number" style={{ color: 'green' }}>253-880-1828</span>
                        </Typography>
                        <Button variant='contained' href="tel:253-880-1828" style={{ margin: '20px' }}>Call Us</Button>
                    </div>
                </div>
            </div>
            <div className='ortho-cards'>
                <Card sx={{ maxWidth: 345, margin: '10px', backgroundColor: '#e5f6ff' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Clear Aligners
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Clear aligners (Invisalign or Clear Correct) are virtually invisible. No one may even notice that you’re wearing them, making them a seamless fit with your lifestyle                        </Typography>
                    </CardContent>
                    <CardActions style={{ marginTop: '60px' }}>
                        <Link to='/booking'><Button variant="outlined">Book an Appointment</Button></Link>
                        <Link to='/services/orthodontic/aligners'><Button variant="contained">Read More</Button></Link>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345, margin: '10px', backgroundColor: '#f8e9ff' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Braces
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Braces can correct crooked and crowded teeth, a misaligned bite, and jaw problems. Braces also eliminate problems you may have with eating, speaking properly, or with keeping your teeth clean. With advancements in dental technology, traditional braces are now sleeker, smaller, and more comfortable</Typography>
                    </CardContent>
                    <CardActions>
                        <Link to='/booking'><Button variant="outlined">Book an Appointment</Button></Link>
                        <Link to='/services/orthodontic/braces'><Button variant="contained">Read More</Button></Link>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

export default Orthodontic;
