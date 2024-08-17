import * as React from 'react';
import Button from '@mui/material/Button';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPrescriptionBottleMedical} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


export default function Medicament() {
  const navigate=useNavigate()
  const handleclick=()=>{
    navigate("/medicament")
  }
  return (
    
          <nav  onClick={handleclick}>
           <FontAwesomeIcon icon={faPrescriptionBottleMedical} /> 
           Stock
          </nav>
          
  );
}
