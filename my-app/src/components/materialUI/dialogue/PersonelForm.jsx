import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box ,TextField} from '@mui/material';
import { useForm} from "react-hook-form"

export default function PersonelForm() {
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
          {"Nouveau personel"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box>

<form className='medecin_fom'>

<TextField
id="filled-basic" 
label="Nom"
variant="filled"
size="small"
 {...register("Nom", { required: true })}/>

<TextField
id="filled-basic" 
label="Nom de famille"
variant="filled"
size="small"
{...register("Nom_famille", { required: true })}/>

<TextField
id="filled-basic" 
label="Fonction"
variant="filled"
size="small"
{...register("Fonction", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="specialisation" 
 variant="filled" 
 type="text"
 size="small"
 {...register("specialisation", { required: true })}/>


        
<TextField
className='inpt_material'
 id="filled-basic" 
 label="Telephone" 
 variant="filled" 
 size="small"
 type='number'
 {...register("Telephone", { required: true })}/>

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
