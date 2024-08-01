import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom"; 
import { Link } from 'react-router-dom';
import { useForm} from "react-hook-form"
import toast from 'react-hot-toast';
import axios from 'axios';


function Inscription() {
 
const { register, handleSubmit,formState:{errors} } = useForm();
 const navigate=useNavigate()
const onSubmit=(data)=>{
  if(data.password !== data.password_confirm){
    toast.error("les mots de passes ne correspondent pas")
  }
  else{
    console.log(data)
    toast.success("connexion reussie")
    navigate('/')
    axios.post(``)
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
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


        <form action="" onSubmit={handleSubmit(onSubmit)} className='form_inscription'>
        <h1>Connectez-vous</h1>
        
        <input type='text' 
        placeholder='Nom'
        {...register("nom", { required: true })} />
         
        <input type='text' 
        placeholder='Post-nom'
        {...register("post_nom", { required: true })} />

        <input type='number' 
        placeholder='Age'
        {...register("age", { required: true })} />

        <select name="" id="">
          <option value="">Genre</option>
          <option value="">Masculin</option>
          <option value="">Feminin</option>
        </select>

        <input type='text' 
        placeholder='Telephone'
        {...register("Telephone", { required: true })} />

{/* 99999999999999999999999999999999999999999999999999 */}

        <input type='password' 
        placeholder='Mot de passe'
        {...register("password", { required: true })} />

        <input type='password'
        placeholder='Confirmer le mot de passe' 
        {...register("password_confirm", { required: true })} />
        

        <nav>
        <button type='submit'>connexion</button>
        </nav>
        
        </form>

        <div className='links'>
        <Link to={'/connexion'}><p>Avez-vous deja un compte? connectez-vous</p></Link><br></br>
        </div>
        
      </div>
      </div>
    
    </div>
    </div>
  )
}

export default Inscription
