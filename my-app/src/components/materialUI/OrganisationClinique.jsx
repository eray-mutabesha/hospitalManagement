import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableColumns } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';



export default function OrganisationClinique() {
const navigate=useNavigate()
  const hospitalisation=()=>{
   navigate("/acceuilHospitalisation")
  }
 
   const ambulatoire=()=>{
    navigate("/acceuilAmbulatoire")
   }
   const redezvous=()=>{
    navigate("/rendezvous")
   }

   
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <nav  {...bindTrigger(popupState)} className='navone'>
           <FontAwesomeIcon icon={faTableColumns} /> 
           Organisations clinique
          </nav>
          <Menu {...bindMenu(popupState)} >
          
            <MenuItem onClick={hospitalisation} className='navone'>Hospitalisation</MenuItem>
            <MenuItem onClick={ambulatoire} className='navone'>Ambulatoire</MenuItem>
            <MenuItem onClick={redezvous} className='navone'>Rendez-vous</MenuItem>
            
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
