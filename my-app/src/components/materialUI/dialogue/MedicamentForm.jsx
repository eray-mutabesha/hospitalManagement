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

export default function MedicamentForm() {
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
        Ajouter au stock
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
              Nouveau produit
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
      </Dialog>
    </React.Fragment>
  );
}
