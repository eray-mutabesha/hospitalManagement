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
  };


  const [formData, setFormData] = useState({
    Type: "",
    Designation: "",
    Forme: "",
    Dosage:"",
    Date: "",
    Entree: "",
    Sortie: "",
    Solde: "",
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
 {...register("Designation", { required: "Veuillez entrer le nom" })}
 value={formData.Designation}
 onChange={(e) => setFormData({ ...formData, Designation: e.target.value })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Forme" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Forme", { required: "Veuillez entrer le nom" })}
 value={formData.Forme}
 onChange={(e) => setFormData({ ...formData, Forme: e.target.value })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Dosage" 
 variant="filled" 
 size="small"
 type='text'
 {...register("Dosage", { required: "Veuillez entrer le nom" })}
 value={formData.Dosage}
 onChange={(e) => setFormData({ ...formData, Dosage: e.target.value })}/>

           
<TextField
className='inpt_material'
 id="filled-basic" 
 label="Date" 
 variant="filled" 
 size="small"
 type='date'
 {...register("Date", { required: "Veuillez entrer le nom" })}
 value={formData.Date}
 onChange={(e) => setFormData({ ...formData, Date: e.target.value })}/>


<TextField
className='inpt_material'
 id="filled-basic" 
 label="Entree" 
 variant="filled" 
 size="small"
 type='text'
 {...register("Entree", { required: "Veuillez entrer le nom" })}
 value={formData.Entree}
 onChange={(e) => setFormData({ ...formData, Entree: e.target.value })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Sortie" 
 variant="filled" 
 size="small"
 type='text'
 {...register("Sortie", { required: "Veuillez entrer le nom" })}
 value={formData.Sortie}
 onChange={(e) => setFormData({ ...formData, Sortie: e.target.value })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Solde" 
 variant="filled" 
 size="small"
 type='text'
 {...register("Solde", { required: "Veuillez entrer le nom" })}
 value={formData.Solde}
 onChange={(e) => setFormData({ ...formData, Solde: e.target.value })}/>

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
