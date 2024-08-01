import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';  
import { Box ,TextField, Typography,InputLabel,Select,MenuItem,FormControl} from '@mui/material';
import { useForm} from "react-hook-form"
import './index.css';
import toast from 'react-hot-toast';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


export default function PatientForm() {
    const { register, handleSubmit,formState:{errors} } = useForm();

    const onSubmit=(data)=>{
        if(data.password !== data.password_confirm){
          toast.error("les mots de passes ne correspondent pas")
        }
        else{
          console.log(data)
          toast.success("connexion reussie")
        }
       
       
      }
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
        Nouveau dossier
      </Typography>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Nouveau patient
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
<div>
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

</div>
        </DialogContent>
        <DialogActions>
          <Button  type='submit' onClick={handleSubmit(onSubmit)} >
            Enregistrer
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
