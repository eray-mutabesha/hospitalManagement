import * as React from 'react';
import Button from '@mui/material/Button';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';



export default function Medecins() {
  const navigate=useNavigate();

const handeleMedecins=()=>{
navigate("/tableaumedecins")
}
  return (
    
          <nav onClick={handeleMedecins}>
           <FontAwesomeIcon icon={faUserDoctor} /> 
           Medecins
          </nav>
          
  );
}


