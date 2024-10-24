import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital } from '@fortawesome/free-solid-svg-icons'
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
    navigate("/medicament1")
   }
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <nav  {...bindTrigger(popupState)} className='navone'>
           <FontAwesomeIcon icon={faHospital} /> 
           Ressources
          </nav>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={medecins}>Medecins</MenuItem>
            <MenuItem onClick={Patients}>Patients</MenuItem>
            <MenuItem onClick={Personnels}>Personnels</MenuItem>
            <MenuItem onClick={Stock}>Stock</MenuItem>
            
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
