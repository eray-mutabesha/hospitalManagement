import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm} from "react-hook-form";
import { Stack,Box,Typography,TextField,Button,InputLabel,Select,MenuItem,FormControl} from '@mui/material'



import { useState,useEffect } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';



export default function NouveauAdminFORM() {

    const [open, setOpen] = React.useState(false);



    const handleClickOpen = () => {
      setOpen(true);
      
    };
    const handleClose = () => {
        setOpen(false);
        window.location.reload();
      };
  
    const BASE_URL = import.meta.env.VITE_API_URL;

    const { register, handleSubmit,formState:{errors} } = useForm();

    
    
     const [formData, setFormData] = useState({
      nom: "",
      fonction: "",
      sexe: "",
      Adresse:"",
      email: "",
      service:"",
      password: "",
      password_confirm:"",
      image:null
    });
    
    















    const onSubmit = async (data) => {
      if (data.password !== data.password_confirm) {
        toast.error("Vérifiez votre mot de passe");
        return;
      }
    
      try {
        const res = await axios.post(`${BASE_URL}/insert_admin`, {
          email: data.email,
          password: data.password,
        });
    
        if (res.data.exists) {
          toast.error("Un compte existe déjà avec ce Mail");
          return;
        }
    
        // Création d'un nouvel objet FormData pour inclure les champs du formulaire et l'image
        const formData = new FormData();
        formData.append('nom', data.nom);
        formData.append('sexe', data.sexe);
        formData.append('fonction', data.fonction);
        formData.append('Adresse', data.Adresse);
        formData.append('email', data.email);
        formData.append('service', data.service);
        formData.append('password', data.password);
    
        // Ajouter l'image sélectionnée dans le FormData si présente
        if (data.image && data.image.length > 0) {
          formData.append('image', data.image[0]); // data.image est un tableau
        }
    
        localStorage.setItem("Utilisateur", JSON.stringify(data));
    
        const response = await axios.post(`${BASE_URL}/insert_admin`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
    
        if (response.data.status === 500) {
          toast.error("Il y a une erreur");
        } else {
          console.log(response.data);
          toast.success("Inscription réussie");
        }
      } catch (err) {
        console.log(err);
        toast.error("Erreur technique, essayez plus tard");
      }
    };
    































    const onSubmi = async (data) => {
      if (data.password !== data.password_confirm) {
        toast.error("Vérifiez votre mot de passe");
        return;
      }
    
      try {
        const res = await axios.post(`${BASE_URL}/getadminData_admin`, {
          email: data.email,
          password: data.password,
        });
    
        if (res.data.exists) {
          toast.error("Un compte existe déjà avec ce Mail");
          return;
        }
    
        const formData = new FormData();
        formData.append('nom', data.nom);
        formData.append('sexe', data.sexe);
        formData.append('fonction', data.fonction);
        formData.append('Adresse', data.Adresse);
        formData.append('email', data.email);
        formData.append('service', data.service);
        formData.append('password', data.password);
        if (data.image) {
          formData.append('image', data.image);
        }
    
        localStorage.setItem("Utilisateur", JSON.stringify(data));
    
        const response = await axios.post(`${BASE_URL}/insert_admin`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
    
        if (response.data.status === 500) {
          toast.error("Il y a une erreur");
        } else {
          console.log(response.data);
          toast.success("Inscription réussie");
        }
      } catch (err) {
        console.log(err);
        toast.error("Erreur technique, essayez plus tard");
      }
    };
    
  


  return (
    <React.Fragment > 
      <Button onClick={handleClickOpen} variant="contained"  >
        Creer un administrateur
       </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
          {"Creer un administrateur"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box>

          <Stack 
alignItems={"center"} justifyContent={"center"}
width={"100%"}>
  <Box  width={400} 
  sx={{backgroundColor:"white",
      padding:3
  }}>
 



  <form onSubmit={handleSubmit(onSubmit)}>
  <Box sx={{
      display:"grid",
      gap:2
  }}>

         <TextField id="filled-basic" label="Nom complet" variant="filled" type="text" fullWidth size='small' 
           {...register("nom", { required: "Veuillez entrer l'action" })}
           value={formData.nom}
           onChange={(e) => setFormData({ ...formData, nom: e.target.value })}/>


        
        <TextField id="filled-basic" label="Fonction" variant="filled" type="text" fullWidth size='small' 
        {...register("fonction", { required: "Veuillez entrer l'action" })}
        value={formData.fonction}
        onChange={(e) => setFormData({ ...formData, fonction: e.target.value })}/>



        <FormControl variant="filled">
        <InputLabel id="demo-simple-select-filled-label">Genre</InputLabel>
        <Select
           labelId="demo-simple-select-filled-label"
          id="demo-simple-select-standard"
          size="small"
          {...register("sexe", { required: "Veuillez entrer le nom" })}
          value={formData.sexe}
          onChange={(e) => setFormData({ ...formData, sexe: e.target.value })}>

            
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        
            <MenuItem value="Masculin">Masculin</MenuItem>
            <MenuItem value="Feminin">Feminin</MenuItem>
          
        </Select>
        </FormControl>



        <TextField id="filled-basic" label="Adresse" variant="filled" type="text" fullWidth size='small' 
        {...register("Adresse", { required: "Veuillez entrer le nom" })}
        value={formData.Adresse}
        onChange={(e) => setFormData({ ...formData, Adresse: e.target.value })} />


       <TextField id="filled-basic" label="Email" variant="filled" type="email" fullWidth size='small' 
        {...register("email", { required: "Veuillez entrer le nom" })}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />


       <TextField id="filled-basic" label="Mot de passe" variant="filled" type="password" fullWidth size='small' 
        {...register("password", { required: "Veuillez entrer le nom" })}
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })} />


        <TextField id="filled-basic" label="confirmer le Mot de passe" variant="filled" type="password" fullWidth size='small' 
         {...register("password_confirm", { required: "Veuillez entrer le nom" })}
        value={formData.password_confirm}
        onChange={(e) => setFormData({ ...formData, password_confirm: e.target.value })}/>
   

       {/* <TextField id="filled-basic" label="" variant="filled" type="file" fullWidth size='small' 
         {...register("file", { required: "Veuillez entrer le nom" })}
        value={formData.file}
        onChange={(e) => setFormData({ ...formData, file: e.target.value })}/> */}

<FormControl variant="filled">
        <InputLabel id="demo-simple-select-filled-label">Service</InputLabel>
        <Select
           labelId="demo-simple-select-filled-label"
          id="demo-simple-select-standard"
          size="small"
          {...register("service", { required: "Veuillez entrer le nom" })}
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}>

            
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        
            <MenuItem value="Reception">Reception</MenuItem>
            <MenuItem value="Consultation">Consultation</MenuItem>
            <MenuItem value="Laboratoire">Laboratoire</MenuItem>
            <MenuItem value="Hospitalisation">Hospitalisation</MenuItem>
            <MenuItem value="Ambulatoire">Ambulatoire</MenuItem>
            <MenuItem value="Administrateur">Administrateur</MenuItem>
          
        </Select>
        </FormControl>
        


<input 
    type="file" 
    accept="image/*" 
    required 
    name="image"
    {...register("image", { required: "Veuillez sélectionner une image" })}
    onChange={(e) => {
        const file = e.target.files[0]; // Récupérer le premier fichier sélectionné
        setFormData({ ...formData, image: [file] }); // Assurez-vous de l'ajouter comme tableau avec un seul fichier
    }} 
/>


  </Box>



  <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>Annuler</Button>
          <Button  variant="contained" color="success" type='submit'>
           Enregistrer
       </Button>
</DialogActions>

  </form>
  </Box>
</Stack>

       </Box>
          </DialogContentText>
        </DialogContent>
        
      </Dialog>
    </React.Fragment>
  );
}
