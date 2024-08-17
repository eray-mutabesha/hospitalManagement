import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear} from '@fortawesome/free-solid-svg-icons'
import PersonelForm from './dialogue/PersonelForm';
import { useNavigate } from 'react-router-dom';

export default function Parametre() {
const navigate=useNavigate()
const handleclick=()=>{
  navigate("/profil")
}

const handledeconnexion=()=>{
  navigate("/deconnexion")
}
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <nav  {...bindTrigger(popupState)} sx={{
             borderRadius:"10px",
             margin:"20px auto",
             
             width:"160px",
             boxShadow:"0px 0px 5px 0px rgba(38, 233, 233, 0.644)",
             backgroundColor:"black",
             display:"flex",
             gap:"10px",
             color:"white"
          }}>
           <FontAwesomeIcon icon={faGear} /> 
           Parametre
          </nav>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={handleclick}>Profil</MenuItem>
            <MenuItem onClick={handledeconnexion}>Deconnexion</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}