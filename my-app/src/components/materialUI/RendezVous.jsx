import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReceipt } from '@fortawesome/free-solid-svg-icons'
import FacturationForm from './dialogue/tableaux/RendezVous';
import { useNavigate } from 'react-router-dom';

export default function RendezVous() {
  const navigate=useNavigate()
  const handleclick=()=>{
    navigate("/acceuillaboratoire")
  }
  return (
    
          <nav  onClick={handleclick} className='navone'>
           <FontAwesomeIcon icon={faReceipt} /> 
           Rendez-vous
          </nav>
          
    
  );
}