import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom"; 
import { Link } from 'react-router-dom';
import { useForm} from "react-hook-form"
import toast from 'react-hot-toast';
import axios from 'axios';
import { Stack,Box,Typography,TextField,Button,InputLabel,Select,MenuItem,FormControl} from '@mui/material'



function Inscription() {


const BASE_URL = import.meta.env.VITE_API_URL;

const { register, handleSubmit,formState:{errors} } = useForm();
// const { onChange} = register('select');
 const navigate=useNavigate()
 
//protection de route
useEffect(()=>{
  if(localStorage.getItem("Utilisateur")){
     navigate("/home");
     }
  })

 const [formData, setFormData] = useState({
  nom: "",
  fonction: "",
  sexe: "",
  Adresse:"",
  email: "",
  password: "",
  password_confirm:""
});


 const onSubmit=(data)=>{
 
    if(data.password !== data.password_confirm){
      toast.error("verifiez votre mot de passe")
    }else{
      
      
      axios.post(`${BASE_URL}/getadminData_admin`, {
        email: data.email,
        password:data.password
    }).then((res) => {
        if (res.data.exists) {
          
          toast.error("Un compte existe deja avec ce Mail");
        } 
        else {
          
          localStorage.setItem("Utilisateur", JSON.stringify(data));
              
          axios.post(`${BASE_URL}/insert_admin`, data)
          
          .then(({ data }) => {
            if (data.status == 500) {
              toast.error("Il y a une erreur");
            } else {
            console.log(res.data)
             navigate("/home")
             toast.success("inscription réussi");
             
            
          }
          })
           .catch((err) => {
             console.log(err);
             toast.error("Il y a une erreur");
           });
        }
    })
  
    .catch((err) => {
          console.log(err)
         toast.error("erreur technique essayer plus tard");
        
    });
  
       
      }


  }

   
  


  return (

<div style={{background: "rgb(223, 216, 216)"}}>
<Stack 
alignItems={"center"} justifyContent={"center"}
width={"100%"} height={"100vh"}>
  <Box  width={400} 
  sx={{backgroundColor:"white",
      padding:3
  }}>
  <Typography variant="h5">
    Connexion
  </Typography>




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
   

       <TextField id="filled-basic" label="" variant="filled" type="file" fullWidth size='small' 
         {...register("file", { required: "Veuillez entrer le nom" })}
        value={formData.file}
        onChange={(e) => setFormData({ ...formData, file: e.target.value })}/>
        
  </Box>
  <Box sx={{
    
    display:"flex",
    justifyContent: "space-between"
  }}>
  <Button variant="contained" sx={{marginTop:2}} type="submit">Inscription</Button>
     <a href="/"  style={{textDecoration:"none",marginTop:"35px"}}>Vous avez deja compte?</a>
  
  </Box>
  </form>
  </Box>
</Stack>
</div>

  )
}

export default Inscription



