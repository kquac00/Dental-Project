import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Read More
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Is Fluoride toxic?
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Yes, fluoride is indeed used in some rat poison, but to blankly claim it as toxic is wrong.  At a high enough level of quantity and concentration, any substances can be toxic, such as water.  There is such a thing aswater toxicity.  The amount and concentration of fluoride in water and toothpaste is extremely low and is not toxic.  In my opinion, fluoride is an important weapon in combating tooth decay, especially fluorinated water.
                    </Typography>
                    <Typography gutterBottom>
                        The best study was done in Grand Rapids, Michigan. Here's the link to that study: <br /><Button variant="contained" color="primary" href="http://www.nidcr.nih.gov/oralhealth/Topics/Fluoride/TheStoryofFluoridation.htm" target="_blank" rel="noopener noreferrer">Read Study</Button>.
                    </Typography>
                    <Typography gutterBottom>
                        I know that I cannot change all of my patients’ feeling about fluoride, but that is not my goal.  My goal is to just inform them, have them make their own decision, and respect their decision.
                        For those wondering if their water is fluoridated, you can check by clicking here: <br /><Button variant="contained" color="primary" href="https://doh.wa.gov/community-and-environment/drinking-water/fluoride-drinking-water" target="_blank" rel="noopener noreferrer">Check Water Fluoridation</Button>.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}