import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DentalDentures from '../assets/images/dentures.jpg';
import DentalCrowns from '../assets/images/crowns.jpg';
import DentalWhitening from '../assets/images/whitening.jpg';
import DentalVeneers from '../assets/images/veneers.jpg';
import CompositeFilling from '../assets/images/filling.jpg';
import DentalBridges from '../assets/images/bridges.jpg';
import { Link } from 'react-router-dom';
import '../cosmetic.css'

const Cosmetic = () => {

    return (
        <div className='cosmetic_main'>
            <Typography variant='h3' style={{ textAlign: 'center' }}>Cosmetic</Typography>
            <div className='cardsLayout'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="denture"
                        height="300"
                        image={DentalDentures}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Dental Dentures
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            A denture is a removable dental appliance replacement for missing teeth and surrounding tissue.  They are made to closely resemble your natural teeth and may even enhance your smile.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to='/booking'><Button variant="outlined">Book an Appointment</Button></Link>
                        <Link to='/services/cosmetic/dentures'><Button variant="contained">Read More</Button></Link>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="crowns"
                        height="300"
                        image={DentalCrowns}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Dental Crowns
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            A crown (or cap) is a covering that encases the entire tooth surface restoring it to its original shape and size.  A crown protects and strengthens tooth structure that cannot be restored with fillings or other types of restorations...                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to='/booking'><Button variant="outlined">Book an Appointment</Button></Link>
                        <Link to='/services/cosmetic/crowns'><Button variant="contained">Read More</Button></Link>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="denture"
                        height="300"
                        image={DentalWhitening}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Dental Whitening
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Not only do white teeth enhance your smile, but they make you feel more confident about your appearance. You deserve to have a beautiful and exceptional smile. We can help you achieve a whiter smile and a more confident you, in just 20 minutes.                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to='/booking'><Button variant="outlined">Book an Appointment</Button></Link>
                        <Link to='/services/cosmetic/whitening'><Button variant="contained">Read More</Button></Link>
                    </CardActions>
                </Card>
            </div>
            <div className='cardsLayout'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="veneers"
                        height="300"
                        image={DentalVeneers}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Dental Veneers
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Veneers are very thin pieces of durable, tooth shaped porcelain that are custom made (for shape and color) by a professional dental laboratory.  They are bonded onto the front of teeth to create a beautiful and attractive smile.                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to='/booking'><Button variant="outlined">Book an Appointment</Button></Link>
                        <Link to='/services/cosmetic/veneers'><Button variant="contained">Read More</Button></Link>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="filling"
                        height="300"
                        image={CompositeFilling}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Composite Filling
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            A composite (tooth colored) filling is used to repair a tooth that is affected by decay, cracks, fractures, etc.  The decayed or affected portion of the tooth will be removed and then filled with a composite filling.                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to='/booking'><Button variant="outlined">Book an Appointment</Button></Link>
                        <Link to='/services/cosmetic/filling'><Button variant="contained">Read More</Button></Link>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="bridges"
                        height="300"
                        image={DentalBridges}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Dental Bridges
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            A dental bridge is a fixed (non-removable) appliance and is an excellent way to replace missing teeth. It consists of one or more artificial teeth (pontics) that are held in place by dental crowns on either side of the gap.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to='/booking'><Button variant="outlined">Book an Appointment</Button></Link>
                        <Link to='/services/cosmetic/bridges'><Button variant="contained">Read More</Button></Link>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

export default Cosmetic;
