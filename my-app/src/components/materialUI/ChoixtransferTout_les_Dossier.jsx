import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear} from '@fortawesome/free-solid-svg-icons'
import PersonelForm from './dialogue/PersonelForm';
import { useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
import Laboratoire from './Laboratoire';
import { DossierContext } from '../../DossierContext.jsx';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react';
import Reception from './Reception.jsx';



export default function ChoixtransferTout_les_Dossier({dat}) {

 
 

  
const navigate=useNavigate()
const handleclick=()=>{
  navigate("/")
}

const handledeconnexion=()=>{
  navigate("/")
}

const BASE_URL = import.meta.env.VITE_API_URL;

  // Access the data from location.state
  const location = useLocation();
  const { detailData } = location.state || {};  // Handle undefined state
 


const [data,setDatas]=useState([]);
const get_dossiers = () => {
  axios.get(`${BASE_URL}/get_tout_les_dossiers_id/${dat.id}`)
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



const Reception =()=>{

  console.log(data[0]?.nom_patient)
  axios.post(`${BASE_URL}/post_patient_dossier`,{
    id:data[0]?.id,
    nom_patient:data[0]?.nom_patient,
    date:data[0]?.date_entre,
    poids:data[0]?.poids,
    to_to:data[0]?.to_to,
    ta_ta:data[0]?.ta_ta,
    adresse:data[0]?.adresse,
    age:data[0]?.age,
    sexe:data[0]?.sexe,
    telephone:data[0]?.telephone,
    diagnostic:data[0]?.diagnostic,
    traitement:data[0]?.traitement,
    observation:data[0]?.observation
    
   })
          
   .then(({ data }) => {
     if (data.status == 500) {
       toast.error("Il y a une erreur");
     } else {

       // delete dossier route



     
     toast.success("PATIENT ENVOYER A LA RECEPTION")

   }
   })
    .catch((err) => {
      console.log(err);
      toast.error("Il y a une erreur");
    });




}









const Consultation =()=>{
    console.log(data[0]?.nom_patient)
    axios.post(`${BASE_URL}/post_consultation_dossier`,{
      id:data[0]?.id,
      nom_patient:data[0]?.nom_patient,
      date:data[0]?.date_entre,
      poids:data[0]?.poids,
      to_to:data[0]?.to_to,
      ta_ta:data[0]?.ta_ta,
      adresse:data[0]?.adresse,
      age:data[0]?.age,
      sexe:data[0]?.sexe,
      telephone:data[0]?.telephone,
      diagnostic:data[0]?.diagnostic,
      traitement:data[0]?.traitement,
      observation:data[0]?.observation
      
     })
            
     .then(({ data }) => {
       if (data.status == 500) {
         toast.error("Il y a une erreur");
       } else {
  
         // delete dossier route
  
  
  
       
       toast.success("PATIENT ENVOYER A LA CONSULTATION")
  
     }
     })
      .catch((err) => {
        console.log(err);
        toast.error("Il y a une erreur");
      });

}
















const LaboratoireData = () => {
  axios.post(`${BASE_URL}/post_laboratoire_dossier`,{
    id:data[0]?.id,
    nom_patient:data[0]?.nom_patient,
    date:data[0]?.date_entre,
    poids:data[0]?.poids,
    to_to:data[0]?.to_to,
    ta_ta:data[0]?.ta_ta,
    adresse:data[0]?.adresse,
    age:data[0]?.age,
    sexe:data[0]?.sexe,
    telephone:data[0]?.telephone,
    diagnostic:data[0]?.diagnostic,
    traitement:data[0]?.traitement,
    observation:data[0]?.observation
    
   })
          
   .then(({ data }) => {
     if (data.status == 500) {
       toast.error("Il y a une erreur");
     } else {
     
     toast.success("PATIENT ENVOYER AU LABOS")

   }
   })
    .catch((err) => {
      console.log(err);
      toast.error("Il y a une erreur");
    });


}





  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button  {...bindTrigger(popupState)}  variant="contained" endIcon={<SendIcon />} type='submit'>
           Transferer
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={()=>Reception(dat.id)  } ><Button endIcon={<SendIcon />}>Reception</Button></MenuItem>
            <MenuItem onClick={Consultation}><Button endIcon={<SendIcon />}>Consultation</Button></MenuItem>
            <MenuItem onClick={LaboratoireData}><Button endIcon={<SendIcon />}>Laboratoire</Button></MenuItem>
            <MenuItem onClick={handleclick}><Button endIcon={<SendIcon />}>Hospitalisation</Button></MenuItem>
            <MenuItem onClick={handledeconnexion}><Button endIcon={<SendIcon />}>Embilatoire</Button></MenuItem>
            <MenuItem onClick={handleclick}><Button endIcon={<SendIcon />}>Urgence</Button></MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}