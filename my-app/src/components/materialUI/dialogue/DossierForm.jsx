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

export default function DossierForm() {
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
        Ajouter un departement
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
              Nouveau departements
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


<FormControl variant="filled"   >
<InputLabel id="demo-simple-select-filled-label">Medecin ID</InputLabel>
        <Select
           labelId="demo-simple-select-filled-label"
          id="demo-simple-select-standard"
          size="small"
          {...register("medecin_id", { required: true })}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
        </Select>
</FormControl>

<FormControl variant="filled"   >
<InputLabel id="demo-simple-select-filled-label">Patient ID</InputLabel>
        <Select
           labelId="demo-simple-select-filled-label"
          id="demo-simple-select-standard"
          size="small"
          {...register("patient_id", { required: true })}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
        </Select>
</FormControl>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="" 
 variant="filled" 
 type='date'
 size="small"
 {...register("date_dossier", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Diagnostic" 
 variant="filled" 
 size="small"
 type='text'
 {...register("diagnostic", { required: false })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Adresse traitement" 
 variant="filled" 
 size="small"
 type='text'
 {...register("traitement", { required: false })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Note" 
 variant="filled" 
 size="small"
 type='text'
 {...register("note", { required: true })}/>


</form>
       </Box>
      </Dialog>
    </React.Fragment>
  );
}
