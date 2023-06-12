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
                    Dr. Banh
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Dr. Jean-Paul Banh is a graduate of the University of Washington School of Dentistry. Prior to his dental education, he graduated from the nationally acclaimed Computer Engineering Department at the University of Washington.  He worked at Intel as a microprocessor design engineer and tech lead. During his tenure, he designed numerous microprocessors (from Pentium 4 to the Core i7) and received many departmental and divisional awards for innovation and leadership.
                    </Typography>
                    <Typography gutterBottom>
                        He decided to go back to school and follow his dream of becoming a dentist.  He got accepted to some of the most prestigious dental schools, such as UCSF and UW.  He decided to remain a husky.  During dental school, Dr. Banh was elected by the student body to be the Class Vice President. He was selected by the Dean of the dental school to be a member of the Clinical Systems Task Force, which was charged with revamping clinical education and patient treatment. He led the outreach program at the Union Gospel Mission Dental clinic, which provides free dental care to the homeless population of Seattle. He was the recipient of many dental awards and scholarships, including the Charles V Callihan Memorial Scholarship, Donald E. Compaan Service Scholarships, and Psi Omega Scholarships. He also took many electives, including Honors Perio, Advanced Endo, Tucker Gold, Gold Foils, Internal Medicine, Conscious Sedation, and Oral Surgery.  He is an strong advocate for continuous learning, expanding dental knowledge, and improving skill sets.  Since graduating, he has taken courses on orthodontics, implantology, sedation, oral surgery, sleep apnea, radiology, botox, and more.

                        Dr. Banh is passionate about promoting good dental health and increasing access to quality and affordable dental care.  He strives to build a long and trusting relationship with his patients, and provides honest advice and great quality dental care.  He and his staff are committed to addressing every patient's concerns and anxieties while fostering a pressure-free environment where patients feel stress-free, cared for, and at ease.
                    </Typography>
                    <Typography gutterBottom>
                        Dr. Banh likes to educate not only patients but future dentists.  He is an affiliate instructor at the University of Washington School of Dentistry.  He also supervises dental students at the Union Gospel Mission Dental Clinic and other UW related community dental outreach programs.

                        Dr. Banh believes strongly in giving back to the community.  He volunteers at the Union Gospel Mission Dental Clinic, Seattle/King County Dental Clinic, and United Way Community Resource Exchange.

                        Professional Affiliations

                        American Dental Association
                        Washington State Dental Association
                        Academy of General Dentistry
                        Washington Academy of General Dentistry
                        Seattle/King County Dental Society
                        Honorary Pierre Fauchard Academy
                        American Dental Education Association
                        Dentist

                        Washington

                        United States
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