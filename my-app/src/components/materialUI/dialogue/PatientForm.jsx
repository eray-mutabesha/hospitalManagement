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

export default function PatientForm() {
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
          {"Nouveau patient"}
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
 label="Post nom" 
 variant="filled" 
 type="text"
 size="small"
 {...register("post_nom", { required: true })}/>


<TextField
 className='inpt_material'
 id="filled-basic" 
 label="Age" 
 variant="filled" 
 type="text"
 size="small"
 {...register("age", { required: true })}/>
<FormControl variant="filled"   >
<InputLabel id="demo-simple-select-filled-label">Genre</InputLabel>
        <Select
           labelId="demo-simple-select-filled-label"
          id="demo-simple-select-standard"
          size="small"
          {...register("genre", { required: true })}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Masculin</MenuItem>
          <MenuItem value={20}>Feminin</MenuItem>
          <MenuItem value={30}>Autres</MenuItem>
        </Select>
</FormControl>
<TextField
className='inpt_material'
 id="filled-basic" 
 label="Numero de telephone" 
 variant="filled" 
 type='number'
 size="small"
 {...register("telephone", { required: true })}/>



<TextField
className='inpt_material'
 id="filled-basic" 
 label="Adresse" 
 variant="filled" 
 size="small"
 {...register("Adresse", { required: true })}/>


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
