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
import SaveIcon from '@mui/icons-material/Save';
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
          <Button  {...bindTrigger(popupState)}  variant="contained" endIcon={<SaveIcon />} >
           Enregistrer
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={handleclick} ><Button endIcon={<SendIcon />}>Reception</Button></MenuItem>
            <MenuItem onClick={handledeconnexion}><Button endIcon={<SendIcon />}>Laboratoire</Button></MenuItem>
            <MenuItem onClick={handleclick}><Button endIcon={<SendIcon />}>Hospitalisation</Button></MenuItem>
            <MenuItem onClick={handledeconnexion}><Button endIcon={<SendIcon />}>Embilatoire</Button></MenuItem>
            <MenuItem onClick={handleclick}><Button endIcon={<SendIcon />}>Urgence</Button></MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}