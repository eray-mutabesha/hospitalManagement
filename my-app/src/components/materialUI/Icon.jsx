import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear} from '@fortawesome/free-solid-svg-icons'
import PersonelForm from './dialogue/PersonelForm';
import { useNavigate } from 'react-router-dom';
import { faBell,faCaretDown,faCheck,faXmark,faMagnifyingGlass,faListCheck,faUserDoctor,faStethoscope,faCommentsDollar,faChevronDown} from '@fortawesome/free-solid-svg-icons'

export default function Icon() {
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
          <nav className='navone' {...bindTrigger(popupState)} style={{
             cursor:"pointer"
          }}>
            <nav><FontAwesomeIcon icon={faCaretDown} /></nav>
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