import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import MedecinsForm from './dialogue/MedecinsForm.jsx';
import { useNavigate } from 'react-router-dom';



export default function Medecins() {
  const navigate=useNavigate();

const handeleMedecins=()=>{
navigate("/tableaumedecins")
}
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button  {...bindTrigger(popupState)} sx={{
             borderRadius:"10px",
             margin:"20px auto",
             
             width:"160px",
             boxShadow:"0px 0px 5px 0px rgba(38, 233, 233, 0.644)",
             backgroundColor:"black",
             display:"flex",
             gap:"10px",
             color:"white"
          }}>
           <FontAwesomeIcon icon={faUserDoctor} /> 
           Medecins
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem ><MedecinsForm/></MenuItem>
            <MenuItem onClick={handeleMedecins}>Liste des medecins </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
