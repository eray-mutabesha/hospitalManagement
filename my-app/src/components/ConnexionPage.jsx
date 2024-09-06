import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom"; 
import { Link } from 'react-router-dom';
import { useForm} from "react-hook-form"
import toast from 'react-hot-toast';
import axios from 'axios';


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
    <div className='login_all_div'>
     <div className='black_div'>
      <div className='flex'>
        <div className='text_div'>
            <nav>
             <h1>Welcome Again</h1>
             <p>Lorem ipsum, dolor sit amet incidunt placeat totam nesciunt ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iure, veniam, earum accusantium optio est dolorum delectus quas veritatis, recusandae asperiores! Ex quos ullam obcaecati vel magni eligendi dicta architecto.</p>
            </nav>
        </div>
        <div className='login_div'>


        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h1>Connectez-vous</h1>

        <input type='text' 
        placeholder='Email'
        {...register("email", { required: "Veuillez entrer le nom" })} />


          <input type='password' 
        placeholder='password'
        {...register("password", { required: "Veuillez entrer le nom" })} />

        
        <nav>
        <button type='submit'>connexion</button>
        </nav>
        
        </form>

        <div className='links'>
        <Link to={'/inscription'}><p>Vous n'avez pas de compte? creez un compte</p></Link><br></br>
        </div>
        
      </div>
      </div>
    
    </div>
    </div>
  )
}

export default ConnexionPage
