import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Location = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'start', flexDirection: 'row', flexWrap: 'wrap', my: 4, backgroundColor: '#E8E8E8 ', margin: '0px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 600 }}>
                <Paper variant="outlined" sx={{ p: 2, my: 2, width: '100%' }}>
                    <Typography variant="h6" gutterBottom>Office Hours</Typography>
                    <Typography variant="body1">Mon - Thu: 8am - 5pm</Typography>
                    <Typography variant="body1">Sat: 8am - 2pm</Typography>
                    <Typography variant="body1">Fri/Sun : Closed</Typography>
                </Paper>
                <Paper variant="outlined" sx={{ p: 2, my: 2, width: '100%' }}>
                    <Typography variant="h6" gutterBottom>Office Location</Typography>
                    <Typography variant="body1">1234 Main Street, Anytown, USA</Typography>
                </Paper>
            </Box>
            <Box sx={{ width: '100%', maxWidth: 600, height: 400, my: 2 }}>
                <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2705.4058201595044!2d-122.22578938437978!3d47.30640997916582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490587a64a1efdb%3A0xee1f88780423543c!2sPacific%20NW%20Dentistry!5e0!3m2!1sen!2sus!4v1686386452736!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </Box>
        </Box>
    );
};

export default Location;
