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
import DossierForm from './dialogue/DossierForm';






export default function DossierListe() {
const navigate=useNavigate()
const handleclick=()=>{
  navigate("/")
}

const toutDossier=()=>{
  navigate("/dossier")
}
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button  {...bindTrigger(popupState)}  variant="contained" color="success"  sx={{
            width:"fit-content"
          }}>
           Dossier
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem><DossierForm/></MenuItem>
            <MenuItem onClick={toutDossier}>Tout les dossier</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}