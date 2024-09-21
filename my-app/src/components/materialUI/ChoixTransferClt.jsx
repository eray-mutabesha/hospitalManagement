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
export default function ChoixTransferClt() {
const navigate=useNavigate()
const handleclick=()=>{
  navigate("/")
}

const handledeconnexion=()=>{
  navigate("/")
}




const LaboratoireData = () => {
  // Récupérer les données de "Dossier"
  let dossierData = localStorage.getItem("Dossier");

  // Vérifier si des données existent dans "Dossier"
  if (dossierData) {
    // Parser les données de "Dossier" en objet ou tableau
    const newDossierData = JSON.parse(dossierData);

    // Récupérer les données existantes de "Laboratoire"
    let laboratoireData = localStorage.getItem("Laboratoire");

    // Si des données existent déjà dans "Laboratoire", les parser en tableau
    if (laboratoireData) {
      laboratoireData = JSON.parse(laboratoireData);
      
      // S'assurer que les données de "Laboratoire" sont un tableau
      if (!Array.isArray(laboratoireData)) {
        laboratoireData = [laboratoireData];
      }
    } else {
      // Si aucune donnée dans "Laboratoire", initialiser comme tableau vide
      laboratoireData = [];
    }

    // Ajouter les nouvelles données de "Dossier" au tableau existant
    laboratoireData = laboratoireData.concat(newDossierData);

    // Sauvegarder les données mises à jour dans "Laboratoire"
    localStorage.setItem("Laboratoire", JSON.stringify(laboratoireData));

    console.log("Les données ont été copiées avec succès dans 'Laboratoire' !");
  } else {
    console.log("Aucune donnée trouvée dans 'Dossier'.");
  }
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