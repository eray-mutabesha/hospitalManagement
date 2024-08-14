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
    
          <Button  onClick={handleclick} sx={{
             borderRadius:"10px",
             margin:"20px auto",
             
             width:"160px",
             boxShadow:"0px 0px 5px 0px rgba(38, 233, 233, 0.644)",
             backgroundColor:"black",
             display:"flex",
             gap:"10px",
             color:"white"
          }}>
           <FontAwesomeIcon icon={faPrescriptionBottleMedical} /> 
           Stock
          </Button>
          
  );
}
