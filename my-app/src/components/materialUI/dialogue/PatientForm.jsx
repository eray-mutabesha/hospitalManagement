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

export default function facturationForm() {
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
        Ajouter un Patient
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
              Nouvau patient
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
 label="Adresse mail" 
 variant="filled" 
 size="small"
 type='email'
 {...register("adresse_mail", { required: false })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Adresse" 
 variant="filled" 
 size="small"
 {...register("Adresse", { required: true })}/>


</form>
       </Box>
      </Dialog>
    </React.Fragment>
  );
}
