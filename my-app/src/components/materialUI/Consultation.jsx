import * as React from 'react';
import Button from '@mui/material/Button';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';



export default function Consultation() {
const navigate=useNavigate()
  const handleclick=()=>{
   navigate("/acceuilconsultation")
  }
  return (
       <>
          <nav onClick={handleclick} className='navone'>
           <FontAwesomeIcon icon={faBed} /> 
            Consultation
          </nav>
        </>
        
      
  );
}
