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





export default function ChoixTransferClt() {

 
 

  
const navigate=useNavigate()
const handleclick=()=>{
  navigate("/")
}

const handledeconnexion=()=>{
  navigate("/")
}

const BASE_URL = import.meta.env.VITE_API_URL;
const { dossier } = useContext(DossierContext);




// constttttttttttttttttttttttttttttttttttttttttttttt
const Consultation =()=>{
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
    diagnostic:dossier?.diagnostic,
    traitement:dossier?.traitement,
    observation:dossier?.observation
    
   })
          
   .then(({ data }) => {
     if (data.status == 500) {
       toast.error("Il y a une erreur");
     } else {
      console.log(dossier)
     toast.success("PATIENT ENVOYER A LA CONSULTATION")

   }
   })
    .catch((err) => {
      console.log(err);
      toast.error("Il y a une erreur");
    });

}

const LaboratoireData = () => {
console.log(Laboratoire)
   console.log(dossier)

   axios.post(`${BASE_URL}/post_laboratoire_dossier`,{
    nom_patient:dossier?.nom_patient,
    date:dossier?.date_entre,
    poids:dossier?.poids,
    to_to:dossier?.to_to,
    ta_ta:dossier?.ta_ta,
    adresse:dossier?.adresse,
    age:dossier?.age,
    sexe:dossier?.sexe,
    telephone:dossier?.telephone,
    diagnostic:dossier?.diagnostic,
    traitement:dossier?.traitement,
    observation:dossier?.observation
    
   })
          
   .then(({ data }) => {
     if (data.status == 500) {
       toast.error("Il y a une erreur");
     } else {
     toast.success("PATIENT ENVOYER AU LABO")

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
          <Button  {...bindTrigger(popupState)}  variant="contained" endIcon={<SaveIcon />} type='submit'>
           Enregistrer
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={handleclick} ><Button endIcon={<SendIcon />}>Reception</Button></MenuItem>
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