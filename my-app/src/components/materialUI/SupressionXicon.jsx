import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import DeleteIcon from '@mui/icons-material/Delete';
import { faBell,faCaretDown,faCheck,faXmark,faMagnifyingGlass,faListCheck,faUserDoctor,faStethoscope,faCommentsDollar,faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SupressionXicon({deleteRdv}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClosedelete = () => {
    deleteRdv()
    setOpen(false);
  };


  const handleClose = () => {
    
    setOpen(false);
  };
  return (
    <React.Fragment>

            <Box onClick={handleClickOpen} sx={{
                    border:"2px solid red",
                    width:"20px",
                    height:"20px",
                    borderRadius:"50%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    color:"red",
                    cursor:"pointer"
                  }}>
                    <FontAwesomeIcon icon={faXmark} style={{fontSize:"13px"}}   />
                  </Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle >{"Voulez-vous vraiment annuler ce rendez-vous?"}</DialogTitle>
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

