import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom"; 
import { Link } from 'react-router-dom';
import { useForm} from "react-hook-form"
import toast from 'react-hot-toast';
import axios from 'axios';

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
  })

  .then((res) => {
      if (res.data.exists) {
        
          toast.error("le compte existe");
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
    
      toast.error("erreur technique essayer plus tard");
  });

     
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
        placeholder='Nom complet'
        {...register("nom", { required: "Veuillez entrer l'action" })}
      value={formData.nom}
      onChange={(e) => setFormData({ ...formData, nom: e.target.value })} />
         


         <input type='text' 
        placeholder='Fonction'
        {...register("fonction", { required: "Veuillez entrer l'action" })}
        value={formData.fonction}
        onChange={(e) => setFormData({ ...formData, fonction: e.target.value })}/>
        

        <select
            className='select'
            {...register("sexe", { required: "Veuillez entrer l'action" })}
            value={formData.sexe}
            onChange={(e) => setFormData({ ...formData, sexe: e.target.value })}
          >

          <option value="">Genre</option>
          <option value="Masculin">Masculin</option>
          <option value="Feminin">Feminin</option>

        </select>
      

       
        <input type='text' 
        placeholder='Adresse'
        {...register("Adresse", { required: "Veuillez entrer le nom" })}
        value={formData.Adresse}
        onChange={(e) => setFormData({ ...formData, Adresse: e.target.value })} />
        
        <input type='text' 
        placeholder='Email'
        {...register("email", { required: "Veuillez entrer le nom" })}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />


        <input type='password' 
        placeholder='Mot de passe'
        {...register("password", { required: "Veuillez entrer le nom" })}
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })} />


        <input type='password'
        placeholder='Confirmer le mot de passe' 
        {...register("password_confirm", { required: "Veuillez entrer le nom" })}
        value={formData.password_confirm}
        onChange={(e) => setFormData({ ...formData, password_confirm: e.target.value })}/>
         

        <nav>
        <button type="submit">connexion</button>
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
