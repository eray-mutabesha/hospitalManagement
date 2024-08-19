import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear} from '@fortawesome/free-solid-svg-icons'
import PersonelForm from './dialogue/PersonelForm';
import { useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
export default function ChoixTransferClt() {
const navigate=useNavigate()
const handleclick=()=>{
  navigate("/")
}

const handledeconnexion=()=>{
  navigate("/")
}
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button  {...bindTrigger(popupState)}  variant="contained" endIcon={<SendIcon />} >
           Transferer
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={handleclick}>Reception</MenuItem>
            <MenuItem onClick={handledeconnexion}>Laboratoire</MenuItem>
            <MenuItem onClick={handleclick}>Embilatoire</MenuItem>
            <MenuItem onClick={handledeconnexion}>Hospitalisation</MenuItem>
            <MenuItem onClick={handleclick}>Urgence</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}