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



export default function PersonelForm() {
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
    nom: "",
    nom_famille: "",
    sexe: "",
    specialisation:"",
    fonction: "",
    email: "",
    telephone:"",
  });



    const onSubmit=(data)=>{
      console.log(data)
      axios.post(`${BASE_URL}/insert_personel`, data)
            
            .then(({ data }) => {
              if (data.status == 500) {
                toast.error("Il y a une erreur");
              } else {
               
               setFormData({
                nom: "",
                nom_famille: "",
                sexe: "",
                specialisation:"",
                fonction: "",
                email: "",
                telephone:"",
              });
              
              toast.success("Enregistrement réussi");
            }
            })
             .catch((err) => {
               console.log(err);
               toast.error("Il y a une erreur");
             });
  
    }

  return (
    <React.Fragment > 
      <Button onClick={handleClickOpen} variant="contained" color="success" >
        Ajouter
       </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
          {"Nouveau personel"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box>

<form className='medecin_fom' onSubmit={handleSubmit(onSubmit)}>

<TextField
id="filled-basic" 
label="Nom"
variant="filled"
size="small"
{...register("nom", { required: "Veuillez entrer le nom" })}
value={formData.nom}
onChange={(e) => setFormData({ ...formData, nom: e.target.value })}/>

<TextField
id="filled-basic" 
label="Nom de famille"
variant="filled"
size="small"
{...register("nom_famille", { required: "Veuillez entrer le nom" })}
value={formData.nom_famille}
onChange={(e) => setFormData({ ...formData, nom_famille: e.target.value })}/>

<FormControl variant="filled"   >
<InputLabel id="demo-simple-select-filled-label">Sexe</InputLabel>
        <Select
           labelId="demo-simple-select-filled-label"
          id="demo-simple-select-standard"
          size="small"
          {...register("sexe", { required: "Veuillez entrer le nom" })}
          value={formData.sexe}
          onChange={(e) => setFormData({ ...formData, sexe: e.target.value })}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Masculin">Masculin</MenuItem>
          <MenuItem value="Feminin">Feminin</MenuItem>
          <MenuItem value="Autres">Autres</MenuItem>
        </Select>
</FormControl>

<TextField
id="filled-basic" 
label="Fonction"
variant="filled"
size="small"
{...register("fonction", { required: "Veuillez entrer le nom" })}
value={formData.fonction}
onChange={(e) => setFormData({ ...formData, fonction: e.target.value })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="specialisation" 
 variant="filled" 
 type="text"
 size="small"
 {...register("specialisation", { required: "Veuillez entrer le nom" })}
 value={formData.specialisation}
 onChange={(e) => setFormData({ ...formData, specialisation: e.target.value })}/>


        
<TextField
className='inpt_material'
 id="filled-basic" 
 label="Telephone" 
 variant="filled" 
 size="small"
 type='number'
 {...register("telephone", { required: "Veuillez entrer le nom" })}
 value={formData.telephone}
 onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Gmail" 
 variant="filled" 
 size="small"
 type='email'
 {...register("email", { required: "Veuillez entrer le nom" })}
 value={formData.email}
 onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>

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
