import React from 'react'
import './tbl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navigate, useNavigate } from 'react-router-dom'
import Dashboard from '../../Dashboard.jsx'
import Reception from '../../Reception.jsx'
import Dossier from '../../Dossier.jsx'
import Parametre from '../../Parametre.jsx'
import { faBell,faCaretDown,faCheck,faXmark,faMagnifyingGlass,faListCheck,faUserDoctor,faStethoscope,faCommentsDollar,faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { Box ,TextField, Typography,InputLabel,Select,MenuItem,FormControl,Button}  from '@mui/material';
import { useForm} from "react-hook-form"
import Consultation from '../../Consultation.jsx'
import ChoixTransferClt from '../../ChoixTransferClt.jsx'
import Ressources from '../../Resources.jsx'
import Laboratoire from '../../Laboratoire.jsx'
import OrganisationClinique from '../../OrganisationClinique.jsx'
import Factutation from '../../Facturation.jsx'
import { useState,useEffect,useContext } from 'react'
import  {toast} from 'react-hot-toast';
import axios from 'axios';
import { useLocation } from 'react-router-dom'
import Icon from '../../Icon.jsx'
import Profil from '../../../Profil.jsx'





function TblReception() {
  


  const BASE_URL = import.meta.env.VITE_API_URL;
  const { register, handleSubmit,formState:{errors} } = useForm();
  const navigate = useNavigate()

 
  // profil connected
  const [profil,setprofil]= useState([])
  const getUserData = () => {
   const INFO_Utilisateur_from_localStorage = JSON.parse(localStorage.getItem('Utilisateur'));
   setprofil(INFO_Utilisateur_from_localStorage);
 }
 
 useEffect(()=>{
   getUserData()
   
   },[])




  

  const location = useLocation();

  // Access the data from location.state
  const { detailData } = location.state || {};  // Handle undefined state

  const [data,setDatas]=useState([]);

  const handledossier=()=>{
    navigate("/detaildossier", { state: { detailData: data[0]?.id } });
 
  }

  // navigate("/detaildossier", { state: { dossier: dat } });
  const detail =()=>{
    navigate("/receptiondetail", { state: { detailData: data[0]?.id } })
  }








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












   const [formData,setFormData]=useState({
    diagnostics:""
   })
  

   const onsubmit = (formData) => {

    // Mettre à jour le dossier du patient
    const updatePatient_tout_Dossier = axios.put(
      `${BASE_URL}/update_diagnostic_tout_les_dossiers/${detailData}`, 
      formData
    );

    // Mettre à jour le dossier du patient
    const updatePatientDossier = axios.put(
      `${BASE_URL}/patch_patient_dossier/${detailData}`, 
      formData
    );
  
    // Mettre à jour le diagnostic au labo
    const updateLaboDiagnostic = axios.put(
      `${BASE_URL}/put_dossier_labo_diagnostic/${detailData}`,
      formData
    );
  
    // Mettre à jour le diagnostic au consultation
    const updateConsultationDiagnostic = axios.put(
      `${BASE_URL}/update_diagnostic/${detailData}`, 
      formData
    );
  
    // Gérer les trois requêtes simultanément
    Promise.all([updatePatient_tout_Dossier,updatePatientDossier, updateLaboDiagnostic, updateConsultationDiagnostic])
      .then(([tout_DossierRes,patientResponse, laboResponse, consultRes]) => {


        // Vérification de la réponse de tout les dossiers
        const { data: tout_dossier_Data } = tout_DossierRes;
        if (tout_dossier_Data.status === 500) {
          toast.error("Il y a une erreur lors de la mise à jour de tout les dossiers");
          return;
        }

        

        // Vérification de la réponse du patient dossier
        const { data: patientData } = patientResponse;
        if (patientData.status === 500) {
          toast.error("Il y a une erreur lors de la mise à jour du dossier patient.");
          return;
        }
  
        // Vérification de la réponse du labo
        const { data: laboData } = laboResponse;
        if (laboData.status === 500) {
          toast.error("Il y a une erreur lors de la mise à jour du labo.");
          return;
        }
  
        // Vérification de la réponse de la consultation
        const { data: consulData } = consultRes;
        if (consulData.status === 500) {
          toast.error("Il y a une erreur lors de la mise à jour de la consultation.");
          return;
        }

        // Afficher le message de succès
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
              <Dossier/>
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
               <nav> <p> {profil.nom} </p></nav>
               <nav><Icon/></nav>
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
            <h3>Nom: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.nom_patient}</span></h3>
            <h3>Age: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.age}</span></h3>
            <h3>Sexe: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.sexe}</span></h3>
            <h3>Poids: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.poids}</span></h3>
            <h3>TO: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.to_to}</span></h3>
            <h3>TA: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.ta_ta}</span></h3>
            <h3>Adresse: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.adresse}</span></h3>
            <h3>Telephone: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.telephone}</span></h3>
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







