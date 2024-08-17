import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons'
import PatientForm from './dialogue/PatientForm';
import { useNavigate } from 'react-router-dom';

export default function Patients() {
  const navigate=useNavigate()
const handleclick=()=>{
navigate('/tableaupatient')
}

  return (
    
          <nav  onClick={handleclick}>
           <FontAwesomeIcon icon={faHospitalUser} /> 
           Patients
          </nav>
          
  );
}
