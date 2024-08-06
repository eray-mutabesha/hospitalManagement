

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Box ,TextField, Typography,InputLabel,Select,MenuItem,FormControl}  from '@mui/material';
import { useForm} from "react-hook-form"
import './index.css';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
    <React.Fragment>
      <Typography onClick={handleClickOpen}>
        Ajouter un Personel
      </Typography>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }} id='appBar'>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Nouveau Personel
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Enregistrer
            </Button>
          </Toolbar>
        </AppBar>
       <Box sx={{
        height:"100vh",
        background:"rgba(38, 233, 233, 0.5)",
       }}>

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
 label="Departement" 
 variant="filled" 
 type="text"
 size="small"
 {...register("departement", { required: true })}/>


        
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
      </Dialog>
    </React.Fragment>
  );
}



