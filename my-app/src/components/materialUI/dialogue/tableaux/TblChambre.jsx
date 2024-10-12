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
import  {toast} from 'react-hot-toast';
import axios from 'axios';
import { useLocation } from 'react-router-dom'
import { useState,useEffect,useContext } from 'react'
import Dossier from '../../Dossier.jsx'
import Icon from '../../Icon.jsx'
import Ambulant from '../../Ambulant.jsx'
import Hospital from '../../Hospital.jsx'
import RendezVous from '../../RendezVous.jsx'



function TblChambre() {
  const BASE_URL = import.meta.env.VITE_API_URL;
  // profil connected
  const [profil,setprofil]= useState([])
  const getUserData = () => {
   const INFO_Utilisateur_from_localStorage = JSON.parse(localStorage.getItem('Utilisateur'));
   setprofil(INFO_Utilisateur_from_localStorage);
 }
 
 useEffect(()=>{
   getUserData()
   
   },[])




  const { register, handleSubmit,formState:{errors} } = useForm();


  const navigate = useNavigate()
  const handledossier=()=>{
    navigate("/detaildossier",{ state: { detailData: data[0]?.id } })
  }
  const detail =()=>{
    navigate("/consultationdetail",{ state: { detailData: data[0]?.id } })
  }



 // Access the data from location.state
 const location = useLocation();
 const { detailData } = location.state || {};  // Handle undefined state
 const [data,setDatas]=useState([]);

// get datas from consultation
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










const [formData,setFormData]= useState({
  observation:"",
  traitement:""
})



const onsubmit = (formData) => {
  // Mettre à jour tout les dossier 
  const update_tout_Dossier = axios.put(
    `${BASE_URL}/tout_les_dossiers_traitement_observation/${detailData}`, 
    formData
  );


  // Mettre à jour le dossier du patient
  const updatePatientDossier = axios.put(
    `${BASE_URL}/put_traitement_observation/${detailData}`, 
    formData
  );

  // Mettre à jour le diagnostic au labo
  const updateLabo = axios.put(
    `${BASE_URL}/put_dossier_laboratoire_traitement_observation/${detailData}`,
    
    formData
  );

  // Mettre à jour le diagnostic au consultation
  const updateConsultation = axios.put(
    `${BASE_URL}/put_traitement_observation_consultation/${detailData}`, 
    formData
  );

  // Gérer les trois requêtes simultanément
  Promise.all([update_tout_Dossier,updatePatientDossier, updateLabo, updateConsultation])
    
  
  .then(([tout_DossierRes,patientResponse, laboResponse, consultRes]) => {


      // Vérification de la réponse du patient dossier
      const { data: tout_les_dossier_Data } = tout_DossierRes;
      if (tout_les_dossier_Data.status === 500) {
        toast.error("Il y a une erreur lors de la mise à jour de tout les dossier");
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
      toast.success("Traitement et observation Enregister ");

      // Réinitialiser le formulaire
      setFormData({
          observation:"",
          traitement:""
      });
    })
    .catch((err) => {
      console.error(err);
      toast.error("Une erreur est survenue lors de la mise à jour.");
    });
};



  return (
    <>
      <section  id='all_section'>
        <div className='div_one'>
        <div className='logo'>
            <img src='public/logo-removebg-preview.png' alt='logo hopital'/>
          </div>
          {
            profil.service == "Reception"? (
              <div className='menus'>
              <Dashboard />
              <Dossier/>
             <nav id='personaliser'><Reception/></nav>
             
              <Parametre/>
              </div>):profil.service == "Consultation"? (
                        <div className='menus'>
                        <Dashboard />
                        <nav id='personaliser'><Consultation/></nav>
                        <RendezVous/>
                        <Parametre/>
                       
                       </div>
              ) : profil.service == "Laboratoire"? (
                <div className='menus'>
                <Dashboard />
                <nav id='personaliser'><Laboratoire/></nav>
                <Parametre/>
               </div>
              ): profil.service == "Hospitalisation"? (
                <div className='menus'>
                <Dashboard />
                <nav id='personaliser'><Hospital/></nav>
                <Parametre/>
               </div>
              ) : profil.service == "Ambulatoire"? (
                <div className='menus'>
                <Dashboard />
                <nav id='personaliser'><Ambulant/></nav>
                <Parametre/>
               </div>
              ):null

          }
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
               <nav> <p>{profil.nom}</p></nav>
               <nav><Icon/></nav>
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

      <Button variant='outlined' onClick={detail}>Voire la fiche</Button>
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







