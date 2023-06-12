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
                    What are midlevel providers?
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Kudos to my fellow colleagues and dental students who went to Olympia today and represented our profession.  One of the main topics that keeps recurring year after year is whether to create midlevel providers.  I’m sure that you might be asking what are midlevel providers.  Midlevel providers are individuals, who have a high school diploma and 2 years of ‘dental’ training, who can now perform irreversible dental procedures, such as fillings and extractions.  As a dentist and affiliate instructor, I cannot imagine having someone perform irreversible procedures without proper training.  If one thinks that 2 years post high school training is sufficient enough to qualify as proper training, one should rethink that.  A typical dental student has to go through 8 years of post-high school training before becoming a dentist (4 years of college and 4 years of dental school).
                    </Typography>
                    <Typography gutterBottom>
                        Even with that amount of training, dentists have to do more training through continuing education.  As an affiliate instructor, I could not see how you can shorten the 8 years training to only 2 years.  Dental schools are extremely selective on who they accept.  People, who get accepted to dental school, are exceptional academically and socially.  I believe that legislators, who support midlevel providers, should have all their dental care done by midlevel providers.  I don’t think that they will.  My hunch will be that they will still elect to have their dental care done by dentists and leave the midlevel providers for the less fortunate.  The reason why they are discussing about midlevel providers is to increase access to dental care, but this is not the solution.  I believe that if this passes, it will only create two tiers of dental care.  One for the people who can afford it and one for people who cannot afford it.  This will only create discrimination in quality of dental care.  Again, this is NOT the solution.  We need to think of different way to increase access to dental care.  As a dentist, I volunteer a lot of my time providing free dental care.  I know a lot of my colleagues do the same.
                    </Typography>
                    <Typography gutterBottom>
                        The dental community provided over $3.5 million in services to over 4010 patients at the Seattle King County Dental Clinic.
                        <br />
                        <Button variant="contained" color="primary" href="http://seattlecenter.org/skcclinic/" target="_blank" rel="noopener noreferrer">
                            Visit Clinic Website
                        </Button>
                        <br />
                        I believe that one of the ways to increase access to dental care is to update the fee schedule for Apple Health (Washington State Medicaid program). If they would just adjust the fees to inflation, they would have more dentists participating in the program. With the current fee schedule, dentists will lose money seeing patients due to overhead cost. Personally and professionally, I do not support the idea of having midlevel providers perform irreversible procedures on patients.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div >
    );
}