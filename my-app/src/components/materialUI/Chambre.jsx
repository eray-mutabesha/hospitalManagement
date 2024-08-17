import * as React from 'react';
import Button from '@mui/material/Button';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';



export default function Chambres() {
const navigate=useNavigate()
  const handleclick=()=>{
   navigate("/chambres")
  }
  return (
       <>
          <nav onClick={handleclick} >
           <FontAwesomeIcon icon={faBed} /> 
            Consultation
          </nav>
        </>
        
      
  );
}
