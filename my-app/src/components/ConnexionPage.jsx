import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom"; 
import { Link } from 'react-router-dom';
import { useForm} from "react-hook-form"
import toast from 'react-hot-toast';
import axios from 'axios';


function ConnexionPage() {
 
const { register, handleSubmit,formState:{errors} } = useForm();
   
// const navigate=useNavigate()
const onSubmit=(data)=>{
  if(data.password !== data.password_confirm){
    toast.error("les mots de passes ne correspondent pas")
  }
  else{
    console.log(data)
    toast.success("connexion reussie")
  }
 
 
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
        placeholder='Nom'
        {...register("nom", { required: true })} />
        {errors.nom && <span style={{ color: 'red' }}>This field is required</span>}


        <input type='password' 
        placeholder='Mot de passe'
        {...register("password", { required: true })} />
        {errors.password && <span style={{ color: 'red' }}>This field is required</span>}

        <input type='password' 
        placeholder='Confirmez le mot de passe'
        {...register("password_confirm", { required: true })} />
        {errors.password_confirm && <span style={{ color: 'red' }}>This field is required</span>}

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
