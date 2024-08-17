import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital } from '@fortawesome/free-solid-svg-icons'
import PersonelForm from './dialogue/PersonelForm';
import { useNavigate } from 'react-router-dom';
import { BottomNavigation } from '@mui/material';

export default function Personnel() {
const navigate=useNavigate()
const handleclick=()=>{
  navigate("/personel")
}

  return (
    
          <nav onClick={handleclick} >
           <FontAwesomeIcon icon={faHospital} /> 
           Personnel
          </nav>
         
     
  );
}
