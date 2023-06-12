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
                    Non-traditional dental students
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        I actually went to work as a design engineer at Intel.  I was a member of the originalPentium 4design team.  Back to my call, the call that I received was from another member of the P4 team.  He called to ask for my advice about dental school and the dental field.  I found out that he was a first year dental student.  He is considerably older than I was when I attended dental school.  His oldest kid is a college student.    This shows that there is no age limit of pursuing one dream’s of becoming a dentist.  The road to dentistry is one of the most difficult roads to take but one of the most rewarding.
                    </Typography>
                    <Typography gutterBottom>
                        The acceptance rate of dental school is extremely competitive and low. For example, the UW dental school only accepts 63 students out of thousand of applicants.  Even if you get into dental school, finishing it is also quite challenging.  It requires hours of study and hours of time spend in the lab and clinic.  Those do not even include all the national exams that one have to take to be a licensed dentist.  However, if you show determination, put it the effort, and if being a dentist is your dream, you CAN achieve it.  I might be the first in the Intel P4 team to become a dentist, but now, I am not the only one. <span style={{ fontSize: '20px' }}>&#9786;</span>
                    </Typography>
                    <Typography gutterBottom>
                        If you are considering attending dental school and you are a non-traditional applicant, you can contact me.  I will try my best to answer any questions that you may have.  Personally, I think that dentistry needs more people like us. <span style={{ fontSize: '20px' }}>&#9786;</span>
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