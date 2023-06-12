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
                    Is Amalgam toxic?
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        It is true that amalgam contains mercury, but the amount is so low that it does not pose any health risk to patients. There is a lot of information out there on the Internet; however, I would only trust information from respectable sites (.gov or .edu). Here is a good scientific article about amalgam for your reading pleasure: <br /><Button variant="contained" color="primary" href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3388771/" target="_blank" rel="noopener noreferrer">Read Article</Button>.
                    </Typography>
                    <Typography gutterBottom>
                        Even though we do not use amalgam at our practice, amalgam is a good material with a long dental history.  The main disadvantage of amalgam is esthetic.  If there is no recurrence caries and the amalgam is not fractured, I would recommend that you leave it alone.  If esthetic is of great important to you, then replacing amalgam fillings could be justified.  However, if your main reason is that amalgam is toxic, I would recommend that you reconsider.
                    </Typography>
                    <Typography gutterBottom>
                        Ultimately, the choice of replacing amalgam is yours to make.
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