import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReceipt } from '@fortawesome/free-solid-svg-icons'
import FacturationForm from './dialogue/FacturationForm';
import { useNavigate } from 'react-router-dom';

export default function Laboratoire() {
  const navigate=useNavigate()
  const handleclick=()=>{
    navigate("/Laboratoire")
  }
  return (
    
          <nav  onClick={handleclick} className='navone'>
           <FontAwesomeIcon icon={faReceipt} /> 
           Laboratoire
          </nav>
          
    
  );
}
