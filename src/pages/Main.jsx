import React from 'react'
import YoungSmile from '../assets/images/YoungSmile.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Commitments from '../components/Commitments';
import Location from '../components/Location';
import Carousel from '../components/Carousel';
import '../main.css'

const Main = () => {
    return (
        <div className='main-content'>
            <img className='background' src={YoungSmile} alt='smile' />
            <div className='card_main'>
                <Card sx={{ maxWidth: '300px' }} className='card-position'>
                    <CardContent>
                        <Typography variant="body1" sx={{ fontSize: '2rem' }}>
                            Allow us to restore your radiant smile.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to='/booking'><Button variant="outlined">Book an Appointment</Button></Link>
                        <Link to='/services'><Button variant="contained">Read More</Button></Link>
                    </CardActions>
                </Card>
            </div>
            <div>
                {/* <Cards /> */}
                <Commitments />
                <Carousel />
                <Location />
            </div>
        </div>
    )
}

export default Main