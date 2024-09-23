import React from 'react'
import './tbl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faEye} from '@fortawesome/free-solid-svg-icons'
import { Navigate, useNavigate } from 'react-router-dom'
import Dashboard from '../../Dashboard.jsx'
import Reception from '../../Reception.jsx'
import Parametre from '../../Parametre.jsx'
import { faBell,faCaretDown,faCheck,faXmark,faMagnifyingGlass,faListCheck,faUserDoctor,faStethoscope,faCommentsDollar,faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { Box ,TextField, Typography,InputLabel,Select,MenuItem,FormControl,Button}  from '@mui/material';
import { useForm} from "react-hook-form"
import Consultation from '../../Consultation.jsx'
import SaveIcon from '@mui/icons-material/Save';
import ChoixTransferClt from '../../ChoixTransferClt.jsx'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Ressources from '../../Resources.jsx'
import Laboratoire from '../../Laboratoire.jsx'
import OrganisationClinique from '../../OrganisationClinique.jsx'
import Factutation from '../../Facturation.jsx'
import { useState,useEffect,useContext } from 'react'
import  {toast} from 'react-hot-toast';
import axios from 'axios';
import DossierForm from '../DossierForm.jsx'
import { useLocation } from 'react-router-dom'
import { DossierContext } from '../../../../DossierContext.jsx'






function TblReception() {
  
// get data from contex
const { dossier,setDossier  } = useContext(DossierContext);

  const BASE_URL = import.meta.env.VITE_API_URL;
  const { register, handleSubmit,formState:{errors} } = useForm();
  const navigate = useNavigate()

  const handledossier=()=>{
    navigate("/detaildossier")
  }





  // navigate("/detaildossier", { state: { dossier: dat } });
  const detail =()=>{
    navigate("/receptiondetail")
  }





   const [formData,setFormData]=useState({
    diagnostics:""
   })
  



   const onsubmit = (formData) => {
    // Mettre à jour le dossier du patient
    const updatePatientDossier = axios.put(
      `${BASE_URL}/patch_patient_dossier/${dossier?.id}`, 
      formData
    );
  
    // Mettre à jour le diagnostic au labo
    const updateLaboDiagnostic = axios.put(
      `${BASE_URL}/put_dossier_labo_diagnostic/${dossier?.id}`, 
      formData
    );
  
    // Gérer les deux requêtes simultanément
    Promise.all([updatePatientDossier, updateLaboDiagnostic])
      .then(([patientResponse, laboResponse]) => {
        // Vérification de la réponse du patient dossier
        const { data: patientData } = patientResponse;
        if (patientData.status === 500) {
          toast.error("Il y a une erreur lors de la mise à jour du dossier patient.");
          return;
        }
  
        // Mise à jour du dossier dans le contexte après la réussite
        const updatedDossier = { ...dossier, diagnostic: formData.diagnostics };
        setDossier(updatedDossier);
  
        // Vérification de la réponse du labo
        const { data: laboData } = laboResponse;
        if (laboData.status === 500) {
          toast.error("Il y a une erreur lors de la mise à jour du labo.");
          return;
        }
  
        // Si les deux mises à jour sont réussies
        toast.success("Mise à jour du diagnostic réussie !");
        
        // Réinitialiser le formulaire
        setFormData({
          diagnostics: "",
        });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Une erreur est survenue lors de la mise à jour du diagnostic.");
      });
  };
  









  return (
    <>
      <section  id='all_section'>
        <div className='div_one'>
        <div className='logo'>
            <img src='public/logo-removebg-preview.png' alt='logo hopital'/>
          </div>
          <div className='menus'>
              <Dashboard />
              <nav id='personaliser'> <Reception/></nav>
              <Consultation/>
              <Laboratoire/>
              <OrganisationClinique/>
              <Factutation/>
              <Ressources/>
              <Parametre/>
          </div>
        </div>
        <div className='div_two' style={{ background:"rgba(231, 230, 230, 0.301)",}}> 
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
               <nav> <p> Dr jonathan kasongo </p></nav>
               <nav><FontAwesomeIcon icon={faCaretDown} /></nav>
              </div>
           </div>








<Box sx={{
    display:"grid",
    
    top:"10px",
    margin:"30px",
    //  border:"1px solid green"
}}>
   <Button  variant="contained" color="error" sx={{
    width:"fit-content",
    marginTop:"40px"}}onClick={handledossier} >
            Retour
           </Button>


      
      <Box>
      
        <form action="" onSubmit={handleSubmit(onsubmit)}  style={{
            padding:"20px",
            borderRadius:"10px",
            border:"1px solid rgba(0, 0, 0, 0.103)",
             marginTop:"10px",
            background:"white"
        }}>
     
<Box sx={
    {
        display:"grid",
        gap:"20px",
       
    }
}>
           

            <Box >
              <Box sx={{
                display:"flex",
                justifyContent:"space-between"
              }}>
              <Box sx={{
            display:"grid",
            gridTemplateColumns:"auto auto auto auto",
            gap:"30px",
            background:"white",
            padding:"0px"
          }}>
            <h3>Nom: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{dossier?.nom_patient}</span></h3>
            <h3>Age: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{dossier?.age}</span></h3>
            <h3>Sexe: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{dossier?.sexe}</span></h3>
            <h3>Poids: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{dossier?.poids}</span></h3>
            <h3>TO: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{dossier?.to_to}</span></h3>
            <h3>TA: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{dossier?.ta_ta}</span></h3>
            <h3>Adresse: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{dossier?.adresse}</span></h3>
            <h3>Telephone: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{dossier?.telephone}</span></h3>
          </Box>
     

          <Box sx={{
              
              border:"1px solid rgb(201, 199, 199)",
               backgroundImage:"url('moderate-aquamarine-dark-gradient-background_608506-1382.avif')",
              backgroundRepeat:"no-repeat",
              backgroundSize: "cover",
             backgroundPosition:"center",
             width:"150px",
             height:"150px",
             borderRadius:"10px",
             display:"flex",
             alignItems:"center",
             justifyContent:"center"
            }}>
             
              <img src="/public/profilphoto.png" alt="" style={{
                width:"100px",
                height:"100px",
                borderRadius:"50%"
              }}/>
            
            </Box>
            </Box>

     
     
     <Typography mt={8}variant='h6'>  Premiers diagnostics</Typography>
     
     <TextField sx={{width:"100%"}}
               id="standard-multiline-static"
               label="Diagnostics"
               multiline
               rows={4}
               variant="standard"
               {...register("diagnostics", { required: "Veuillez entrer le point" })}
               value={formData.diagnostics}
               onChange={(e) => setFormData({ ...formData, diagnostics: e.target.value })}/>
     
     <Box sx={{
        display:"flex",
        justifyContent:"end",
        gap:"20px",
        marginTop:"10px"
     }}>

      <Button variant='outlined' onClick={detail}>DETAILS</Button>
       <ChoixTransferClt/>
       
       
      </Box>
      </Box> 
      </Box> 
        </form>
      </Box> 
      </Box>
        </div>
      </section>
    </>
  )

}
export default TblReception







