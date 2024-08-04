import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import ChambreForm from './dialogue/ChambreForm';
export default function Chambres() {
const navigate=useNavigate()
  const handleclick=()=>{
   navigate("/chambres")
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
           <FontAwesomeIcon icon={faBed} /> 
           chambres
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem ><ChambreForm/></MenuItem>
            <MenuItem onClick={handleclick}>Toutes les chambres</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
