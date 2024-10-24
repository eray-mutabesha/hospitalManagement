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

export default function PatientForm() {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const { register, handleSubmit,formState:{errors} } = useForm();
  const [open, setOpen] = React.useState(false);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };
  const [formData, setFormData] = useState({
    nom: "",
    post_nom: "",
    age: "",
    sexe:"",
    telephone: "",
    adresse: "",
  });


 
    const onSubmit=(data)=>{
      console.log(data)
      axios.post(`${BASE_URL}/insert_patient`, data)
            
            .then(({ data }) => {
              if (data.status == 500) {
                toast.error("Il y a une erreur");
              } else {
               
               setFormData({
                nom: "",
                post_nom: "",
                age: "",
                sexe:"",
                telephone: "",
                adresse: "",
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

          <form className='medecin_fom' onSubmit={handleSubmit(onSubmit)}>


<TextField
className='inpt_material'
 id="filled-basic" 
 label="Nom" 
 variant="filled" 
 type="text"
 size="small"
 {...register("nom", { required: "Veuillez entrer le nom" })}
 value={formData.nom}
 onChange={(e) => setFormData({ ...formData, nom: e.target.value })}/>


<TextField
className='inpt_material'
 id="filled-basic" 
 label="Post nom" 
 variant="filled" 
 type="text"
 size="small"
 {...register("post_nom", { required: "Veuillez entrer le nom" })}
 value={formData.post_nom}
 onChange={(e) => setFormData({ ...formData, post_nom: e.target.value })}/>


<TextField
 className='inpt_material'
 id="filled-basic" 
 label="Age" 
 variant="filled" 
 type="text"
 size="small"
 {...register("age", { required: "Veuillez entrer le nom" })}
  value={formData.age}
  onChange={(e) => setFormData({ ...formData, age: e.target.value })}/>


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
className='inpt_material'
 id="filled-basic" 
 label="Numero de telephone" 
 variant="filled" 
 type='number'
 size="small"
 {...register("telephone", { required: "Veuillez entrer le nom" })}
 value={formData.telephone}
 onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}/>



<TextField
className='inpt_material'
 id="filled-basic" 
 label="Adresse" 
 variant="filled" 
 size="small"
 {...register("adresse", { required: "Veuillez entrer le nom" })}
 value={formData.adresse}
 onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}/>

      <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>Quiter</Button>
          <Button  variant="contained" color="success" type='onsubmit'>
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
