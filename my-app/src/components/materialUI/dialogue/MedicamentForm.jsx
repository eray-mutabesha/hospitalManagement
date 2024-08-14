import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm} from "react-hook-form";
import { Box ,TextField, Typography,InputLabel,Select,MenuItem,FormControl}  from '@mui/material';
import './index.css';

export default function MedicamentForm()  {
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
      <Box sx={{
        width:"100%",
        marginLeft:"auto",
        marginRight:"auto",
        
      }}>
      <Button onClick={handleClickOpen} variant="contained" color="success" >
        Ajouter
       </Button>
       </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
          {" Ajouter au stock"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box>
          <form className='medecin_fom'>       

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Designation" 
 variant="filled" 
 type="number"
 size="small"
 {...register("Designation", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Forme" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Forme", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Dosage" 
 variant="filled" 
 size="small"
 type='text'
 {...register("date", { required: true })}/>

           
<TextField
className='inpt_material'
 id="filled-basic" 
 label="Date" 
 variant="filled" 
 size="small"
 type='date'
 {...register("date", { required: true })}/>


<TextField
className='inpt_material'
 id="filled-basic" 
 label="Entree" 
 variant="filled" 
 size="small"
 type='text'
 {...register("Entree", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Sortie" 
 variant="filled" 
 size="small"
 type='text'
 {...register("sortie", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Solde" 
 variant="filled" 
 size="small"
 type='text'
 {...register("Solde", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Date d'expiration" 
 variant="filled" 
 size="small"
 type='date'
 {...register("Solde", { required: true })}/>



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
