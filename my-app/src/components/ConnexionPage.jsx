import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom"; 
import { Link } from 'react-router-dom';
import { useForm} from "react-hook-form"
import toast from 'react-hot-toast';
import axios from 'axios';
import { Stack,Box,Typography,TextField,Button} from '@mui/material'

function ConnexionPage() {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const { register, handleSubmit,formState:{errors} } = useForm();
  const navigate=useNavigate()


 //protection de route
 useEffect(()=>{
   if(localStorage.getItem("Utilisateur")){
      navigate("/home");
     }
   })





const onSubmit = (data) => {

  axios.post(`${BASE_URL}/getadminData_admin`, {
      email: data.email,
      password:data.password
  })

  .then((res) => {
      if (res.data.exists) {
          // Stocker les données utilisateur dans le localStorage (optionnel)
          
          localStorage.setItem("Utilisateur", JSON.stringify(res.data.data));
          navigate("/home")
          toast.success("Connexion réussie");
      } 
      else {
          toast.error("Email ou mot de passe incorrecte");
      }
  })

  .catch((err) => {

      toast.error("erreur technique essayer plus tard");
  });
}






  return (


    <div style={{background: "rgb(223, 216, 216)"}}>
    <Stack direction="row" spacing={2}
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

      <TextField id="filled-basic" label="Email" variant="filled" type="email" fullWidth size='small' 
       {...register("email", { required:"Veillez entrer votre Adresse mail"})}/>
        {errors.email&& <span style={{color:"red"}}>Ce champ est obligatoire</span>}

      <TextField id="filled-basic" label="Mot de passe" variant="filled" type="password" fullWidth size='small' 
       {...register("password", { required:"Veillez entrer votre mot de passe",minLength:{message:
          "Veillez entrer un mot de passe de plus de 6 characteres"
       }})}/>
        {errors.password&& <span style={{color:"red"}}>Ce champ est obligatoire</span>}


      </Box>
      <Box sx={{
        
        display:"flex",
        justifyContent: "space-between"
      }}>
      <Button variant="contained" sx={{marginTop:2}} type="submit">Connexion</Button>
         <a href="/inscription"  style={{textDecoration:"none",marginTop:"35px"}}>Vous n'avez pas de compte?</a>
      
      </Box>
      </form>
      </Box>
    </Stack>
  </div>
  )
}

export default ConnexionPage
