import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Implant from '../assets/images/implant.jpg';
import BoneGraft from '../assets/images/bone_graft.jpg';
import Extraction from '../assets/images/extraction.jpg';
import RootCanal from '../assets/images/root_canal.jpg';
import { Link } from 'react-router-dom';
import '../surgical.css'

const Surgical = () => {

    return (
        <div className='surgical_main'>
            <Typography variant='h3' className='surgical-title'>Surgical</Typography>
            <div className='newLayout'>
                <Card className="surgical_card">
                    <CardMedia
                        component="img"
                        alt="implant"
                        height="200"
                        image={Implant}
                        className='surgical_image'
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Dental Implant
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Missing a tooth isn’t just bad for your looks; it can be bad for your health as well! Healthy teeth play an important role in the body from head to toe. When you are missing one, your jawbone deteriorates, your self-esteem suffers and so does your diet, which negatively affects the health of your entire body.</Typography>
                    </CardContent>
                    <CardActions>
                        <Link to='/booking'><Button variant="outlined">Book an Appointment</Button></Link>
                        <Link to='/services/surgical/implant'><Button variant="contained">Read More</Button></Link>
                    </CardActions>
                </Card>
                <Card className="surgical_card">
                    <CardMedia
                        component="img"
                        alt="bone_graft"
                        height="200"
                        image={BoneGraft}
                        className='surgical_image'
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Bone Graft
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Have you ever seen someone without their dentures in? Their face collapses inward. This is due to bone loss from the loss of teeth. This process starts as soon as even one tooth is missing.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to='/booking'><Button variant="outlined">Book an Appointment</Button></Link>
                        <Link to='/services/surgical/bone_graft'><Button variant="contained">Read More</Button></Link>
                    </CardActions>
                </Card>
            </div>
            <div className='newLayout'>
                <Card className="surgical_card">
                    <CardMedia
                        component="img"
                        alt="extraction"
                        height="200"
                        image={Extraction}
                        className='surgical_image'
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Dental Extraction
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Extraction might be needed due to the following condition: Caries (cavity), Periapical abscess, Infected tooth, Periodontitis (bone loss around a tooth), Cracked or fractured tooth, and Orthodontic treatment.  At Pacific NW Dentistry, we always advised that extraction should be your last option.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to='/booking'><Button variant="outlined">Book an Appointment</Button></Link>
                        <Link to='/services/surgical/extraction'><Button variant="contained">Read More</Button></Link>
                    </CardActions>
                </Card>
                <Card className="surgical_card">
                    <CardMedia
                        component="img"
                        alt="dental_root_canal"
                        height="200"
                        image={RootCanal}
                        className='surgical_image'
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Dental Root Canals
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Root canal therapy is needed when the nerve of a tooth is affected by decay or infection.  In order to save the tooth, the pulp (the living tissue inside the tooth), nerves, bacteria, and any decay are removed and the resulting space is filled with special, medicated, dental materials, which restore the tooth to its full function.                      </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to='/booking'><Button variant="outlined">Book an Appointment</Button></Link>
                        <Link to='/services/surgical/root_canal'><Button variant="contained">Read More</Button></Link>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

export default Surgical;
