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
import { useState,useEffect } from 'react';

import toast from 'react-hot-toast';
import axios from 'axios';


export default function MedicamentForm()  {
  const BASE_URL = import.meta.env.VITE_API_URL;

  const { register, handleSubmit,formState:{errors} } = useForm();
   const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload()
  };


  const [formData, setFormData] = useState({
    Type: "",
    designation: "",
    forme: "",
    dosage:"",
    date: "",
    entree: "",
    sortie: "",
    solde: "",
    date_expiration: "",
});

const onSubmit=(data)=>{
  if(data.Type == "Injectable"){
    axios.post(`${BASE_URL}/insert_medicament_injectables`, data)
            
            .then(({ data }) => {
              if (data.status == 500) {
                toast.error("Il y a une erreur");
              } else {
               
              
              toast.success("Enregistrement réussi");
            }
            })
             .catch((err) => {
               console.log(err);
               toast.error("Il y a une erreur");
             });
  }
 else if(data.Type == "Perfusion"){
  axios.post(`${BASE_URL}/medicament_perfusions`, data)
            
            .then(({ data }) => {
              if (data.status == 500) {
                toast.error("Il y a une erreur");
              } else {
               
               
              
              toast.success("Enregistrement réussi");
            }
            })
             .catch((err) => {
               console.log(err);
               toast.error("Il y a une erreur");
             });
 }
else{
  axios.post(`${BASE_URL}/autre_medicaments`, data)
            
            .then(({ data }) => {
              if (data.status == 500) {
                toast.error("Il y a une erreur");
              } else {
               
              
              toast.success("Enregistrement réussi");
            }
            })
             .catch((err) => {
               console.log(err);
               toast.error("Il y a une erreur");
             });
}
 

}


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
          <form className='medecin_fom' onSubmit={handleSubmit(onSubmit)}>       

          <FormControl variant="filled"   >
<InputLabel id="demo-simple-select-filled-label">Type de medicament</InputLabel>
        <Select
           labelId="demo-simple-select-filled-label"
          id="demo-simple-select-standard"
          size="small"
          {...register("Type", { required: "Veuillez entrer le nom" })}
          value={formData.Type}
          onChange={(e) => setFormData({ ...formData, Type: e.target.value })}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Injectable">Injectable</MenuItem>
          <MenuItem value="Perfusion">Perfusion</MenuItem>
          <MenuItem value="Autres">Autres</MenuItem>
        </Select>
</FormControl>            

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Designation" 
 variant="filled" 
 type="text"
 size="small"
 {...register("designation", { required: "Veuillez entrer le nom" })}
 value={formData.designation}
 onChange={(e) => setFormData({ ...formData, designation: e.target.value })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Forme" 
 variant="filled" 
 type="text"
 size="small"
 {...register("forme", { required: "Veuillez entrer le nom" })}
 value={formData.forme}
 onChange={(e) => setFormData({ ...formData, forme: e.target.value })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Dosage" 
 variant="filled" 
 size="small"
 type='text'
 {...register("dosage", { required: "Veuillez entrer le nom" })}
 value={formData.dosage}
 onChange={(e) => setFormData({ ...formData, dosage: e.target.value })}/>

           
<TextField
className='inpt_material'
 id="filled-basic" 
 label="Date" 
 variant="filled" 
 size="small"
 type='date'
 {...register("date", { required: "Veuillez entrer le nom" })}
 value={formData.date}
 onChange={(e) => setFormData({ ...formData, date: e.target.value })}/>


<TextField
className='inpt_material'
 id="filled-basic" 
 label="Entree" 
 variant="filled" 
 size="small"
 type='text'
 {...register("entree", { required: "Veuillez entrer le nom" })}
 value={formData.entree}
 onChange={(e) => setFormData({ ...formData, entree: e.target.value })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Sortie" 
 variant="filled" 
 size="small"
 type='text'
 {...register("sortie", { required: "Veuillez entrer le nom" })}
 value={formData.sortie}
 onChange={(e) => setFormData({ ...formData, sortie: e.target.value })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Solde" 
 variant="filled" 
 size="small"
 type='text'
 {...register("solde", { required: "Veuillez entrer le nom" })}
 value={formData.solde}
 onChange={(e) => setFormData({ ...formData, solde: e.target.value })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Date d'expiration" 
 variant="filled" 
 size="small"
 type='date'
 {...register("date_expiration", { required: "Veuillez entrer le nom" })}
 value={formData.date_expiration}
 onChange={(e) => setFormData({ ...formData, date_expiration: e.target.value })}/>


<DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>Annuler</Button>
          <Button  variant="contained" color="success" type='submit'>
           Enregistrer
       </Button>
</DialogActions>
</form>

          </Box>
          </DialogContentText>
        </DialogContent>

      </Dialog>
    </React.Fragment>
  );
}
