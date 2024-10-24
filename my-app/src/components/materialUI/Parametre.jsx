import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import DossieForm from './dialogue/DossierForm';
import { useNavigate } from 'react-router-dom';

export default function Parametre() {
  const navigate=useNavigate()
  const handleclick=()=>{
    navigate("/profil")
  }
  return (
    
          <nav className='navone'   onClick={handleclick}>
           <FontAwesomeIcon icon={faUser} /> 
           Mon Profil
          </nav>
          
  );
}