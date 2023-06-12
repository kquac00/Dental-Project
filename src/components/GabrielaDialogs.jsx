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
                    Gabriela
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        As your dedicated Dental Assistant, I, Gabriela, prioritize your comfort and understanding through every step of your dental journey. Leveraging my experience, I am proficient in preparing you for procedures, assisting our dentists, and ensuring all dental radiographs are taken accurately and safely.
                    </Typography>
                    <Typography gutterBottom>
                        Beyond the procedures, I maintain an unwavering commitment to a clean, sterile environment. From sterilizing instruments to managing dental supplies meticulously, I ensure a safe and organized space for your care.
                    </Typography>
                    <Typography gutterBottom>
                        Your understanding is equally important to me. I take pride in clearly communicating about procedures and providing comprehensive postoperative instructions. My ultimate goal? Facilitating your optimal recovery and helping you achieve the best dental health.
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