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
import Ambulant from './materialUI/Ambulant.jsx'
import Hospital from './materialUI/Hospital.jsx'
import RendezVous from './materialUI/RendezVous.jsx'
import Patient from './materialUI/Patients.jsx'
import Sedeconecter from './materialUI/Sedeconecter.jsx'

function UpdateProfil({ singleData, onUpdate }) {









  const [datas,setdatas]=useState([])

  const getUserData = () => {
    const INFO_Utilisateur_from_localStorage = JSON.parse(localStorage.getItem('Utilisateur'));
    setdatas(INFO_Utilisateur_from_localStorage);
  }

  console.log(singleData)




  const BASE_URL = import.meta.env.VITE_API_URL;
  const { register, handleSubmit,formState:{errors} } = useForm();

  const [formData, setFormData] = useState({
    nom: "",
    fonction: "",
    sexe: "",
    Adresse:"",
    email: "",
    image: "" // Stocker l'image actuelle ou nouvelle
  });
  

  useEffect(() => {
    if (singleData) {
      setFormData({
        nom: singleData.nom || "",
        fonction: singleData.fonction || "",
        sexe: singleData.sexe || "",
        Adresse: singleData.Adresse || "",
        email: singleData.email || "",
        image: singleData.image // Charger l'image actuelle
       
      });
    }
    getUserData()
  }, [singleData]);

  useEffect(() => {
    if (datas) {
      setFormData({
        id:datas.id,
        email: datas.email,
        nom: datas.nom,
        fonction: datas.fonction,
        Adresse: datas.Adresse,
        sexe: datas.sexe,
        service:datas.service
        // Initialiser d'autres champs si nécessaire
      });
    }
  }, [datas]);

  // Gérer l'upload d'une nouvelle image
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };


   


  const onSubmit = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("nom", formData.nom);
    formDataToSend.append("fonction", formData.fonction);
    formDataToSend.append("sexe", formData.sexe);
    formDataToSend.append("Adresse", formData.Adresse);
    formDataToSend.append("email", formData.email);
  
    if (formData.image instanceof File) {
      formDataToSend.append("image", formData.image);
    }
  
    try {
      const response = await axios.put(`${BASE_URL}/update_user/${datas.id}`, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" }
      });
  
      // Récupérez le chemin de l'image depuis la réponse
      const imagePath = response.data.imagePath;
  
      // Mettez à jour l'objet avec le nouveau chemin d'image ou gardez l'ancienne image
      const updatedUserData = {
        ...datas,
        ...formData,
        image: formData.image instanceof File ? imagePath : datas.image // Conserve l'ancienne image si aucune nouvelle image n'est fournie
      };
  
      localStorage.setItem("Utilisateur", JSON.stringify(updatedUserData));
  
      toast.success("Mise à jour réussie");
      if (onUpdate) onUpdate();
  
    } catch (error) {
      console.error("Erreur de mise à jour :", error);
      toast.error("Erreur de mise à jour");
    }
  };
  
  
  
   
  return (
    <>
      <section  id='all_section'>
       
      <div className='div_one'>
        <div className='logo'>
            <img src='public/logo-removebg-preview.png' alt='logo hopital'/>
          </div>
          {
            datas.service == "Reception"? (
              <div className='menus'>
                <nav id='deconection'> <Sedeconecter/> </nav>
              <Dashboard />
              <Patient/>
              <Dossier/>
             <nav id='personaliser'><Reception/></nav>
             
              <Parametre/>
              </div>):datas.service == "Consultation"? (
                        <div className='menus'>
                          <nav id='deconection'> <Sedeconecter/> </nav>
                        <Dashboard />
                        <nav id='personaliser'><Consultation/></nav>
                        <RendezVous/>
                        <Parametre/>
                       
                       </div>
              ) : datas.service == "Laboratoire"? (
                <div className='menus'>
                  <nav id='deconection'> <Sedeconecter/> </nav>
                <Dashboard />
                <nav id='personaliser'><Laboratoire/></nav>
                <Parametre/>
               </div>
              ): datas.service == "Hospitalisation"? (
                <div className='menus'>
                  <nav id='deconection'> <Sedeconecter/> </nav>
                <Dashboard />
                <nav id='personaliser'><Hospital/></nav>
                <Parametre/>
               </div>
              ) : datas.service == "Ambulatoire"? (
                <div className='menus'>
                  <nav id='deconection'> <Sedeconecter/> </nav>
                <Dashboard />
                <nav id='personaliser'><Ambulant/></nav>
                <Parametre/>
               </div>
              ):datas.service == "Administrateur"?(
                <div className='menus'>
                <nav id='deconection'> <Sedeconecter /> </nav>
                  <Dashboard />
                    <Dossier/>
                    <nav id='personaliser'><Reception/></nav>
                    <Consultation/>
                     <Laboratoire/>
                    <OrganisationClinique/>
                    <Ressources/>
                    <Parametre/>
                    
                </div>
              ):null

          }
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
               <img src={`http://localhost:3001${datas.image}`} alt="Profile" className='admin_photo'/>
               
               </nav> 
               <nav> <p>{datas.nom}</p></nav>
               <nav><FontAwesomeIcon icon={faCaretDown} /></nav>
              </div>





           </div>
         <form onSubmit={handleSubmit(onSubmit)}> 
          <div style={{
            marginTop:"230px",
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
               <img src={`http://localhost:3001${datas.image}`} alt="Profile" className='admin_photo' style={{
                width:"150px",
                height:"150px",
                objectFit:"cover",
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
              defaultValue={formData.nom || datas.nom} 
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
                 defaultValue={formData.fonction || datas.fonction} 
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
              defaultValue={formData.Adresse || datas.Adresse} 
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
              className="select"
              {...register("sexe", { required: false })}
              value={formData.sexe || datas.sexe} // Changed from defaultValue to value for controlled select
              onChange={(e) =>
                setFormData({ ...formData, sexe: e.target.value })
              }
            >
              <option value={formData.sexe || datas.sexe} key={datas.sexe}>
                {formData.sexe || datas.sexe}
              </option>
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
              defaultValue={formData.email || datas.email} 
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}/></p>


              </Box>

              <Box>
          
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange} 
          />
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