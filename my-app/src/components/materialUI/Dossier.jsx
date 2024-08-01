import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import DossieForm from './dialogue/DossierForm';
import { useNavigate } from 'react-router-dom';

export default function Dossier() {
  const navigate=useNavigate()
  const handleclick=()=>{
    navigate("/dossier")
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
           <FontAwesomeIcon icon={faFolder} /> 
           dossier
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem ><DossieForm/></MenuItem>
            <MenuItem onClick={handleclick}>Tout les dossier</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
