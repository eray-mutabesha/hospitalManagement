import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box ,TextField} from '@mui/material';
import { useForm} from "react-hook-form"

export default function MedecinsForm() {
  const { register, handleSubmit,formState:{errors} } = useForm();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment > 
      <Button onClick={handleClickOpen} variant="contained" color="success" >
        Ajouter
       </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
          {"Nouveau medecin"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box>

          <form className='medecin_fom'>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Nom" 
 variant="filled" 
 type="text"
 size="small"
 {...register("nom", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Nom de famille" 
 variant="filled" 
 type="text"
 size="small"
 {...register("nom", { required: true })}/>

        
<TextField
className='inpt_material'
 id="filled-basic" 
 label="Specialisation" 
 variant="filled" 
 size="small"
 type='email'
 {...register("dosage", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Telephone" 
 variant="filled" 
 size="small"
 type='email'
 {...register("telephone", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Gmail" 
 variant="filled" 
 size="small"
 type='email'
 {...register("email", { required: true })}/>



</form>

       </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>Annuler</Button>
          <Button  variant="contained" color="success" >
           Enregistrer
       </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
