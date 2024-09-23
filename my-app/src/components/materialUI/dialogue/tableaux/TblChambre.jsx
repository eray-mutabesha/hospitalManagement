import React, { useState } from 'react'
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
import { DossierContext } from '../../../../DossierContext.jsx'
import { useContext } from 'react'
import  {toast} from 'react-hot-toast';
import axios from 'axios';






function TblChambre() {
  const BASE_URL = import.meta.env.VITE_API_URL;
  // get data from contex
    const { dossier,setDossier  } = useContext(DossierContext);




  const { register, handleSubmit,formState:{errors} } = useForm();


  const navigate = useNavigate()
  const handledossier=()=>{
    navigate("/detaildossier")
  }
  const detail =()=>{
    navigate("/consultationdetail")
  }






  const [formData,setFormData]= useState({
    observation:"",
    traitement:""
  })

  const onsubmit=(data)=>{
    console.log(data)
    axios.post(`${BASE_URL}/post_consultation_dossier`,{
      nom_patient:dossier?.nom_patient,
      date:dossier?.date_entre,
      poids:dossier?.poids,
      to_to:dossier?.to_to,
      ta_ta:dossier?.ta_ta,
      adresse:dossier?.adresse,
      age:dossier?.age,
      sexe:dossier?.sexe,
      telephone:dossier?.telephone,
      observation:formData.observation,
      traitement:formData.traitement
      
     })
          
          .then(({ data }) => {
            if (data.status == 500) {
              toast.error("Il y a une erreur");
            } else {
            
              const updatedDossier = { ...dossier, observation: formData.observation,traitement:formData.traitement };
              setDossier(updatedDossier);
              console.log(dossier)
              setFormData({
                    observation:"",
                    traitement:""
              })
            toast.success("Enregistrement réussi");

          }
          })
           .catch((err) => {
             console.log(err);
             toast.error("Il y a une erreur");
           });

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
    gap:"30px",
    top:"10px",
    margin:"20px",
}}>

  <Box mt={5}>
  <Button  variant="contained" color="error" sx={{
    width:"fit-content"}}onClick={handledossier}>
            Retour
           </Button>
  </Box>
   


      
      <Box>
      
        <form action=""   onSubmit={handleSubmit(onsubmit)}    style={{
            background:"white",
            padding:"20px",
            borderRadius:"10px",
            border:"1px solid rgba(0, 0, 0, 0.103)",
            
        }}>
     
<Box sx={
    {
        display:"grid",
        gap:"20px",
       
    }
}>
           

            <Box >
            <h1>FICHE DE CONSULTATION</h1>
              <Box sx={{
                marginTop:"10px",
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

     
     
     <Typography sx={{ marginTop:"30px"}}variant='h6'>Traitement</Typography>
     <TextField
          sx={{width:"100%"
               }}
               id="standard-multiline-static"
               label="Traitement"
               multiline
               rows={3}
               variant="standard"
               {...register("traitement", { required: "Veuillez entrer le point" })}
               value={formData.traitement}
               onChange={(e) => setFormData({ ...formData, traitement: e.target.value })}/>

<Typography variant='h6'>Observation</Typography>
     <TextField
          sx={{width:"100%"
               }}
               id="standard-multiline-static"
               label="Observation"
               multiline
               rows={3}
               variant="standard"
               {...register("observation", { required: "Veuillez entrer le point" })}
               value={formData.observation}
               onChange={(e) => setFormData({ ...formData, observation: e.target.value })}/>
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
export default TblChambre







