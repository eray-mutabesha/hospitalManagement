import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, Typography,TextField, Stack } from '@mui/material'
import { faBell,faCaretDown,faCheck,faXmark,faMagnifyingGlass,faListCheck,faUserDoctor,faStethoscope,faCommentsDollar,faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Dashboard from './materialUI/Dashboard.jsx'
import Reception from './materialUI/Reception.jsx'
import Dossier from './materialUI/Dossier.jsx'
import Consultation from './materialUI/Consultation.jsx'
import Laboratoire from './materialUI/Laboratoire.jsx'
import OrganisationClinique from './materialUI/OrganisationClinique.jsx'
import Factutation from './materialUI/Facturation.jsx'
import Ressources from './materialUI/Resources.jsx'
import Parametre from './materialUI/Parametre.jsx'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

function UpdateProfil(singleData,onUpdate) {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const { register, handleSubmit,formState:{errors} } = useForm();

  const [formData, setFormData] = useState({
    nom: "",
    fonction: "",
    sexe: "",
    Adresse:"",
    email: "",
  });
  

  useEffect(() => {
    if (singleData) {
      setFormData({
        nom: singleData.nom || "",
        fonction: singleData.fonction || "",
        sexe: singleData.sexe || "",
        Adresse: singleData.Adresse || "",
        email: singleData.email || "",
       
      });
    }
  }, [singleData]);


  const onSubmit=(data)=>{
    
   if (singleData.singleData && singleData.singleData.id) {
     // API pour mettre à jour les données
     axios.put(`${BASE_URL}/update_user/${singleData.singleData.id}`, data)
       .then(({ data }) => {
         if (data.status == 500) {
           toast.error("Il y a une erreur");
         } else {
          console.log(formData)
         
           localStorage.setItem("Utilisateur", JSON.stringify(formData));
           toast.success("Mise à jour réussie");
           console.log(singleData)
           if (singleData.onUpdate) {
            singleData.onUpdate();
          }
         }
       })
       .catch((err) => {
         console.log(err);
         toast.error("pas de mise en jour ");
       });
   }
}
  
   
  return (
    <>
      <section  id='all_section'>
       
      <div className='div_one'>
        <div className='logo'>
            <img src='public/logo-removebg-preview.png' alt='logo hopital'/>
          </div>
          <div className='menus'>
              <Dashboard />
              <Dossier/>
              <Reception/>
              <Consultation/>
              <Laboratoire/>
              <OrganisationClinique/>
              <Factutation/>
              <Ressources/>
              <nav id='personaliser'><Parametre/></nav>
          </div>
        </div>
        <div className='div_two' style={{
           height:"fit-content",
      
      }}> 
        <div className='header'>
              <div className='recherch'>
               <FontAwesomeIcon icon={faMagnifyingGlass} /> 
               <input type="text" placeholder='recherch'/>
              </div>

              <div className='administrateur'>
                <nav className='notification_icon'>
                <FontAwesomeIcon icon={faBell} />
                </nav>
               <nav>
               <img src='public/Dr. MUAMBA.jpg' className='admin_photo' alt='administrateur'/>
               </nav> 
               <nav> <p>eratata</p></nav>
               <nav><FontAwesomeIcon icon={faCaretDown} /></nav>
              </div>





           </div>
         <form onSubmit={handleSubmit(onSubmit)}> 
          <div style={{
            marginTop:"150px",
            display:"flex",
            justifyContent:"center",
          }}>


            <Box  sx={{
              display:"flex",
              justifyContent:"space-around",
              
              border:"1px solid rgb(201, 199, 199)",
              width:"600px",
              padding:"10px",
              borderRadius:"10px",
              background:"white"
            }}>


             <Box sx={{
              width:"250px",
              height:"200px",
              backgroundImage:"url('moderate-aquamarine-dark-gradient-background_608506-1382.avif')",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
             }}>
              <img src='public/profilphoto.png' style={{
                width:"150px",
                height:"150px",
                borderRadius:"50%"
              }}/>
              </Box> 
             <Box sx={{
              display:"grid",
              gap:"20px",
              height:"fit-content"
             }}>


              <Box sx={{
                display:"flex",
                border:"1px solid rgb(201, 199, 199)",
                 justifyContent:"space-between",
                 heigth:"fit-content",
                 padding:"5px",
                 borderRadius:"5px"
              }}><p><strong>Nom et post-nom: </strong>
              <input type='texte'  
              placeholder='Nom complet'
              {...register("nom", { required:false})}
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}/>
              </p>
             
              </Box>


              <Box sx={{
                display:"flex",
                border:"1px solid rgb(201, 199, 199)",
                 justifyContent:"space-between",
                 heigth:"fit-content",
                 padding:"5px",
                 borderRadius:"5px"
              }}><p><strong>Fonction : </strong>
              <input type='texte'
                 {...register("fonction", { required:false})}
                 value={formData.fonction}
                 onChange={(e) => setFormData({ ...formData, fonction: e.target.value })}/>
              </p>
              </Box>



              <Box sx={{
                display:"flex",
                border:"1px solid rgb(201, 199, 199)",
                 justifyContent:"space-between",
                 heigth:"fit-content",
                 padding:"5px",
                 borderRadius:"5px"
              }}><p><strong>Adresse : </strong><input type='texte'
              {...register("Adresse", { required:false})}
               value={formData.Adresse}
               onChange={(e) => setFormData({ ...formData, Adresse: e.target.value })}/></p>
              </Box>




             <Box sx={{
                display:"flex",
                border:"1px solid rgb(201, 199, 199)",
                 justifyContent:"space-between",
                 heigth:"fit-content",
                 padding:"5px",
                 borderRadius:"5px"
              }}><p><strong>Genre : </strong>
              <select
            className='select'
            {...register("sexe", { required:false})}
            value={formData.sexe}
            onChange={(e) => setFormData({ ...formData, sexe: e.target.value })}
          >

          <option value="">Genre</option>
          <option value="Masculin">Masculin</option>
          <option value="Feminin">Feminin</option>

        </select>
              </p>
              </Box>




              <Box sx={{
                display:"flex",
                border:"1px solid rgb(201, 199, 199)",
                 justifyContent:"space-between",
                 heigth:"fit-content",
                 padding:"5px",
                 borderRadius:"5px"
              }}><p><strong>Email : </strong>
              <input type='texte' 
              {...register("email", { required:false})}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}/></p>
              </Box>
              <Button type='submit'>Enregistrer la modification</Button>
             </Box>
            </Box>
          </div>
          </form>
        </div>
        
      </section>
    </>
  ) 
  
}


export default UpdateProfil