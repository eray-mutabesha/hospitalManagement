import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import DossieForm from './dialogue/DossierForm';
import { useNavigate } from 'react-router-dom';
import {faHouseChimneyMedical } from '@fortawesome/free-solid-svg-icons'






export default function Reception() {
  const navigate=useNavigate()
  const handleclick=()=>{
    navigate("/dossier")
  }
  return (
    
          <nav className='navone'   onClick={handleclick}>
           <FontAwesomeIcon icon={faHouseChimneyMedical} /> 
           Reception
          </nav>
          
  );
}
