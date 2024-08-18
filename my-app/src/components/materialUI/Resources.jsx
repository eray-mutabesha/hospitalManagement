import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableColumns } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';



export default function Ressources() {
const navigate=useNavigate()
  const medecins=()=>{
   navigate("/tableaumedecins")
  }
  const Patients=()=>{
    navigate("/tableaupatient")
   }
   const Personnels=()=>{
    navigate("/personel")
   }
   const Departement=()=>{
    navigate("/departements")
   }
   const Stock=()=>{
    navigate("/medicament")
   }
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <nav  {...bindTrigger(popupState)}>
           <FontAwesomeIcon icon={faTableColumns} /> 
           Ressources
          </nav>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={medecins}>Medecins</MenuItem>
            <MenuItem onClick={Patients}>Patients</MenuItem>
            <MenuItem onClick={Personnels}>Personnels</MenuItem>
            <MenuItem onClick={Departement}>Departement</MenuItem>
            <MenuItem onClick={Stock}>Stock</MenuItem>
            
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
