import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import DossieForm from './dialogue/DossierForm';
import { useNavigate } from 'react-router-dom';

export default function Dossier() {
  const navigate=useNavigate()
  const handleclick=()=>{
    navigate("/dossier")
  }
  return (
    
          <nav   onClick={handleclick}>
           <FontAwesomeIcon icon={faFolder} /> 
           dossier
          </nav>
          
  );
}
