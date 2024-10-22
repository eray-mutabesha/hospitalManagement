import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import DeleteIcon from '@mui/icons-material/Delete';





const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SupressionChoix({deleteEntree}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClosedelete = () => {
    deleteEntree()
    setOpen(false);
  };


  const handleClose = () => {
    
    setOpen(false);
  };
  return (
    <React.Fragment>

      <Button size="small" variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={handleClickOpen}>Sup</Button> 
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle >{"Voulez-vous vraiment Effacer ce Dossier?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           Ce dossier sera effacer definitivement...
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleClosedelete} sx={{color:"red"}}>Suprimer</Button>
          <Button onClick={handleClose}>Annuler</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
