import React from 'react'
import './tbl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dashboard from '../../Dashboard.jsx'
import Parametre from '../../Parametre.jsx'
import { Box, Button, Typography,TextField, Stack } from '@mui/material'
import { faBell,faCaretDown,faCheck,faXmark,faMagnifyingGlass,faListCheck,faUserDoctor,faStethoscope,faCommentsDollar,faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { useForm} from "react-hook-form"
import Consultation from '../../Consultation.jsx'
import Reception from '../../Reception.jsx'
import Ressources from '../../Resources.jsx'
import Laboratoire from '../../Laboratoire.jsx'
import OrganisationClinique from '../../OrganisationClinique.jsx'
import Factutation from '../../Facturation.jsx'
import ChoixTransferClt from '../../ChoixTransferClt.jsx'
import { useNavigate } from 'react-router-dom'
import Dossier from '../../Dossier.jsx'
import { useLocation } from 'react-router-dom'
import { useState,useEffect,useContext } from 'react';
import  {toast} from 'react-hot-toast';
import axios from 'axios';
import Icon from '../../Icon.jsx'








function TblLaboratoire() {

  const BASE_URL = import.meta.env.VITE_API_URL;
 // Access the data from location.state
 const location = useLocation();
 const { detailData } = location.state || {};  // Handle undefined state
 const [data,setDatas]=useState([]);

  // profil connected
  const [profil,setprofil]= useState([])
  const getUserData = () => {
   const INFO_Utilisateur_from_localStorage = JSON.parse(localStorage.getItem('Utilisateur'));
   setprofil(INFO_Utilisateur_from_localStorage);
 }
 
 useEffect(()=>{
   getUserData()
   
   },[])


 
 const get_dossiers = () => {
  axios.get(`${BASE_URL}/get_tout_les_dossiers_id/${detailData}`)
    .then(({ data }) => {
      setDatas(data.data || []); 
    })
    .catch((err) => {
      console.log(err);
      toast.error("Il y a une erreur");
    });
};

useEffect(()=>{
get_dossiers()

},[])


  const { register, handleSubmit,formState:{errors} } = useForm();
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const navigate = useNavigate()
  const detail =()=>{
    navigate("/hospitalisationdetail1",{ state: { detailData: data[0]?.id } })
  }
  const handledossier=()=>{
    navigate("/detaildossier",{ state: { detailData: data[0]?.id } })
  }


  const [formData, setFormData] = useState({
   
    diagnostic_de_prosomption: "",
    operation_prevue: "",
    pouls: "",
    medicament_per_os: "",
    injectable: "",
    Perfusion: "",
    temperature: "",
    tension: "",
    respiration: "",
    observations: "",
    Autre: ""
  });



  const onsubmit = () => {
 
    axios.post(`${BASE_URL}/post_fichede_nursing`,{
      id_patient:detailData,
      diagnostic_de_prosomption:formData.diagnostic_de_prosomption,
      operation_prevue: formData.operation_prevue,
      pouls: formData.pouls,
      medicament_per_os: formData.medicament_per_os,
      injectable: formData.injectable,
      Perfusion: formData.Perfusion,
      temperature: formData.temperature,
      tension: formData.tension,
      respiration: formData.respiration,
      observations: formData.observations,
      Autre: formData.Autre
      
    }
     
    )      
    .then(({ data }) => {
      setFormData(data.data || []); 
      toast.success("enregistrement reussi")
      setFormData({
        diagnostic_de_prosomption: "",
        operation_prevue: "",
        pouls: "",
        medicament_per_os: "",
        injectable: "",
        Perfusion: "",
        temperature: "",
        tension: "",
        respiration: "",
        observations: "",
        Autre: ""
      })
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
              <Reception/>
              <Dossier/>
              <Consultation/>
              <Laboratoire/>
              <nav id='personaliser'><OrganisationClinique/></nav>
              <Factutation/>
              <Ressources/>
              <Parametre/>
          </div>
        </div>
        <div className='div_two' style={{
           background:"rgba(231, 230, 230, 0.301)",
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
               <nav> <p>{profil.nom}</p></nav>
               <nav><Icon/></nav>
              </div>
           </div>
      
      <Box sx={{
      marginTop:"100px",
      justifyContent:"space-evenly",
      margin:"20px",
    }}>    


      <Button  variant="contained" color="error" sx={{
    width:"fit-content",
    marginTop:"40px"}}onClick={handledossier}>
            Retour
           </Button>

    <Box>
    
          


    
    <Box sx={{
      
      padding:"10px",
       border: "1px solid rgb(201, 199, 199)",
      background:"white",
      borderRadius:"10px",
      marginTop:"20px"
    }}>

   
<h1>FICHE DE NURSING</h1>



<Box  sx={{
            display:"flex",
            justifyContent:"space-between",
            gap:"20px",
          }}>
          
          <Box sx={{
     
            background:"white",
             borderRadius:"10px",
             display:"grid",
             alignItems:"center",
             padding:"10px"
             
            
           }}>
             <Box sx={{
            display:"grid",
            gridTemplateColumns:"auto auto auto auto",
            gap:"30px",
            background:"white",
            padding:"0px"
          }}>
            <h3>Nom: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.nom_patient}</span></h3>
            <h3>Age: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.age}</span></h3>
            <h3>Sexe: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.sexe}</span></h3>
            <h3>Poids: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.poids}</span></h3>
            <h3>TO: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.to_to}</span></h3>
            <h3>TA: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.ta_ta}</span></h3>
            <h3>Adresse: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.adresse}</span></h3>
            <h3>Telephone: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.telephone}</span></h3>
          </Box>
            </Box>
            
            <Box sx={{
              
              border:"1px solid rgb(201, 199, 199)",
               backgroundImage:"url('moderate-aquamarine-dark-gradient-background_608506-1382.avif')",
              backgroundRepeat:"no-repeat",
              backgroundSize: "cover",
             backgroundPosition:"center",
             width:"150px",
             height:"170px",
             borderRadius:"10px",
             display:"flex",
             alignItems:"center",
             justifyContent:"center"
            }}>
             
              <img src="/public/profilphoto.png" alt="" style={{
                width:"110px",
                height:"110px",
                borderRadius:"50%"
              }}/>
            
            </Box>
           </Box>








           <form    onSubmit={handleSubmit(onsubmit)}   style={{
  display: "grid",
  gridTemplateColumns: "auto auto auto",
  gap: "10px"
}}>

  <TextField
    className='inpt_material'
    id="standard-basic" 
    label="Diagnostic de Prosomption" 
    variant="standard" 
    type="text"
    size="small"
    {...register("diagnostic_de_prosomption", { required: "Veuillez entrer le point" })}
    value={formData.diagnostic_de_prosomption}
    onChange={(e) => setFormData({ ...formData, diagnostic_de_prosomption: e.target.value })}
  />

  <TextField
    className='inpt_material'
    id="standard-basic" 
    label="Opération prévue" 
    variant="standard" 
    type="text"
    size="small"
    {...register("operation_prevue", { required: "Veuillez entrer l'opération prévue" })}
    value={formData.operation_prevue}
    onChange={(e) => setFormData({ ...formData, operation_prevue: e.target.value })}
  />

  <TextField
    className='inpt_material'
    id="standard-basic" 
    label="Pouls" 
    variant="standard" 
    type="text"
    size="small"
    {...register("pouls", { required: "Veuillez entrer le pouls" })}
    value={formData.pouls}
    onChange={(e) => setFormData({ ...formData, pouls: e.target.value })}
  />

  <TextField
    className='inpt_material'
    id="standard-basic" 
    label="Médicament per os" 
    variant="standard" 
    type="text"
    size="small"
    {...register("medicament_per_os", { required: "Veuillez entrer le médicament per os" })}
    value={formData.medicament_per_os}
    onChange={(e) => setFormData({ ...formData, medicament_per_os: e.target.value })}
  />

  <TextField
    className='inpt_material'
    id="standard-basic" 
    label="Injectable" 
    variant="standard" 
    type="text"
    size="small"
    {...register("injectable", { required: "Veuillez entrer le médicament injectable" })}
    value={formData.injectable}
    onChange={(e) => setFormData({ ...formData, injectable: e.target.value })}
  />

  <TextField
    className='inpt_material'
    id="standard-basic" 
    label="Perfusion" 
    variant="standard" 
    type="text"
    size="small"
    {...register("Perfusion", { required: "Veuillez entrer la perfusion" })}
    value={formData.Perfusion}
    onChange={(e) => setFormData({ ...formData, Perfusion: e.target.value })}
  />

  <TextField
    className='inpt_material'
    id="standard-basic" 
    label="Température" 
    variant="standard" 
    type="text"
    size="small"
    {...register("temperature", { required: "Veuillez entrer la température" })}
    value={formData.temperature}
    onChange={(e) => setFormData({ ...formData, temperature: e.target.value })}
  />

  <TextField
    className='inpt_material'
    id="standard-basic" 
    label="Tension" 
    variant="standard" 
    type="text"
    size="small"
    {...register("tension", { required: "Veuillez entrer la tension" })}
    value={formData.tension}
    onChange={(e) => setFormData({ ...formData, tension: e.target.value })}
  />

  <TextField
    className='inpt_material'
    id="standard-basic" 
    label="Respiration" 
    variant="standard" 
    type="text"
    size="small"
    {...register("respiration", { required: "Veuillez entrer la respiration" })}
    value={formData.respiration}
    onChange={(e) => setFormData({ ...formData, respiration: e.target.value })}
  />

  <TextField
    className='inpt_material'
    id="standard-basic" 
    label="Observations" 
    variant="standard" 
    type="text"
    size="small"
    {...register("observations", { required: "Veuillez entrer les observations" })}
    value={formData.observations}
    onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
  />

  <TextField
    className='inpt_material'
    id="standard-basic" 
    label="Autre" 
    variant="standard" 
    type="text"
    size="small"
    {...register("Autre", { required: "Veuillez entrer les autres informations" })}
    value={formData.Autre}
    onChange={(e) => setFormData({ ...formData, Autre: e.target.value })}
  />



<Box mt={5} sx={{
  display:"flex",
  justifyContent:"space-between"
}}>
 <ChoixTransferClt/>
 <Button variant='outlined' color="success" onClick={detail}>
  voire la fiche
 </Button>
</Box>
</form>






    </Box>
    </Box>
    </Box> 
        </div>
      </section>
    </>
  )
}




export default TblLaboratoire
