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


export default function MedicamentForm() {
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
        Ajoutez un medicament
      </Typography>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Nouveau medicament
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
          id="filled-multiline-static"
          label="Prescription"
          multiline
          rows={4}
          variant="filled"
          {...register("prescription", { required: true })}/>
        
<TextField
className='inpt_material'
 id="filled-basic" 
 label="Dosage" 
 variant="filled" 
 size="small"
 type='email'
 {...register("dosage", { required: true })}/>



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
