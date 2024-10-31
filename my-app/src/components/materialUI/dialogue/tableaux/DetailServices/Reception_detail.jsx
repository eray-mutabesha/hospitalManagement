import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faEye} from '@fortawesome/free-solid-svg-icons'
import { Navigate, useNavigate } from 'react-router-dom'
import Dashboard from '../../../Dashboard.jsx'
import Reception from '../../../Reception.jsx'
import Parametre from '../../../Parametre.jsx'
import { faBell,faCaretDown,faCheck,faXmark,faMagnifyingGlass,faListCheck,faUserDoctor,faStethoscope,faCommentsDollar,faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { Box ,TextField, Typography,InputLabel,Select,MenuItem,FormControl,Button}  from '@mui/material';
import { useForm} from "react-hook-form"
import Consultation from '../../../Consultation.jsx'
import SaveIcon from '@mui/icons-material/Save';
import ChoixTransferClt from '../../../ChoixTransferClt.jsx'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Ressources from '../../../Resources.jsx'
import Laboratoire from '../../../Laboratoire.jsx'
import OrganisationClinique from '../../../OrganisationClinique.jsx'
import Factutation from '../../../Facturation.jsx'
import { useState,useEffect,useContext } from 'react'
import  {toast} from 'react-hot-toast';
import axios from 'axios';
import { useLocation } from 'react-router-dom'
import Dossier from '../../../Dossier';
import Icon from '../../../Icon.jsx'
import Ambulant from '../../../Ambulant.jsx'
import Hospital from '../../../Hospital.jsx'
import RendezVous from '../../../RendezVous.jsx'
import Patient from '../../../Patients.jsx'
import Sedeconecter from '../../../Sedeconecter.jsx'



function Reception_detail() {
  const BASE_URL = import.meta.env.VITE_API_URL;
    const { register, handleSubmit,formState:{errors} } = useForm();
  const navigate = useNavigate()


  // Access the data from location.state
  const location = useLocation();
  const { detailData } = location.state || {};  // Handle undefined state
  

  const [data,setDatas]=useState([]);

  const handledossier=()=>{
    if(profil.service == "Reception"){
      navigate("/reception", { state: { detailData: data[0]?.id } });
    }else{
      navigate("/detaildossier", { state: { detailData: data[0]?.id } })
    }
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


  // profil connected
  const [profil,setprofil]= useState([])
  const getUserData = () => {
   const INFO_Utilisateur_from_localStorage = JSON.parse(localStorage.getItem('Utilisateur'));
   setprofil(INFO_Utilisateur_from_localStorage);
 }
 
 useEffect(()=>{
   getUserData()
   
   },[])





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
                <nav id='deconection'> <Sedeconecter/> </nav>
              <Dashboard />
              <Patient/>
              <Dossier/>
             <nav id='personaliser'><Reception/></nav>
             
              <Parametre/>
              </div>):profil.service == "Consultation"? (
                        <div className='menus'>
                          <nav id='deconection'> <Sedeconecter/> </nav>
                        <Dashboard />
                        <nav id='personaliser'><Consultation/></nav>
                        <RendezVous/>
                        <Parametre/>
                       
                       </div>
              ) : profil.service == "Laboratoire"? (
                <div className='menus'>
                  <nav id='deconection'> <Sedeconecter/> </nav>
                <Dashboard />
                <nav id='personaliser'><Laboratoire/></nav>
                <Parametre/>
               </div>
              ): profil.service == "Hospitalisation"? (
                <div className='menus'>
                  <nav id='deconection'> <Sedeconecter/> </nav>
                <Dashboard />
                <nav id='personaliser'><Hospital/></nav>
                <Parametre/>
               </div>
              ) : profil.service == "Ambulatoire"? (
                <div className='menus'>
                  <nav id='deconection'> <Sedeconecter/> </nav>
                <Dashboard />
                <nav id='personaliser'><Ambulant/></nav>
                <Parametre/>
               </div>
              ):profil.service == "Administrateur"?(
                <div className='menus'>
                <nav id='deconection'> <Sedeconecter /> </nav>
                  <Dashboard />
                    <Dossier/>
                    <nav id='personaliser'> <Reception/></nav>
                    <Consultation/>
                    <Laboratoire/>
                    <OrganisationClinique/>
                    <Ressources/>
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
               <img src={`http://localhost:3001${profil.image}`} alt="Profile" className='admin_photo'/>
               </nav> 
               <nav> <p> {profil.nom}</p></nav>
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
    marginTop:"40px"}}onClick={handledossier}>
            Retour
           </Button>


      
      <Box>
      
        <form action="" style={{
            padding:"20px",
            borderRadius:"10px",
            border:"1px solid rgba(0, 0, 0, 0.103)",
             marginTop:"10px",
            background:"white",
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

     
     {
      data[0]?.diagnostic?<Typography mt={8}variant='h6'>  Premiers diagnostics</Typography>:
      <Typography mt={8} sx={{color:"red"}}>La fiche est vide pour le moment</Typography>
     }
     <Box sx={{
      width:"160vh",
      display:"inline-block",
      wordWrap:"break-word",
      display:"inline-block"
      
     }}>
  <p style={{ }}>{data[0]?.diagnostic}</p>
     </Box>
     
     <Box sx={{
        display:"flex",
        justifyContent:"end",
        gap:"20px",
        marginTop:"10px"
     }}>

  
       
       
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
export default Reception_detail







