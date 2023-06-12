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
                    Is Flossing good for you?
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        I am sure by now, you might have heard about an article from the NYT on how flossing is overrated and doesn't help with maintaining the health of your teeth (<a href="https://www.nytimes.com/2016/08/03/health/flossing-teeth-cavities.html?_r=1" target="_blank" rel="noopener noreferrer">click here for the article</a>).
                    </Typography>
                    <Typography gutterBottom>
                        I strongly disagree. Flossing will prevent gingivitis, which could lead to periodontitis (i.e., bone loss). Flossing is one of the least expensive dental treatments. All I can say is that if you don't floss, you will end up spending more on maintaining your teeth than if you do floss. Here are some links to articles stating that flossing is helpful in maintaining dental health:
                        <br />
                        <Button variant="contained" color="primary" style={{ marginRight: '20px' }} href="https://www.perio.org/consumer/AAP-recommends-flossing-as-essential" target="_blank" rel="noopener noreferrer">Article 1</Button>
                        <Button variant="contained" color="primary" href="https://www.perio.org/consumer/AAP-recommends-flossing" target="_blank" rel="noopener noreferrer">Article 2</Button>
                    </Typography>
                    <Typography gutterBottom>
                        If you're still not convinced and don't want to listen to dental professionals, you might want to listen to Steve Harvey, a comedian<br /> <Button variant="contained" color="primary" href="https://www.youtube.com/watch?v=CrW1R093cqk" target="_blank" rel="noopener noreferrer">click here to see the video</Button>.
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