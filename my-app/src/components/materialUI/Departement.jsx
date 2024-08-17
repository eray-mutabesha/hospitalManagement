import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimneyMedical} from '@fortawesome/free-solid-svg-icons'
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DepartementForm from './dialogue/DepartementForm';


export default function Departement() {
  const navigate=useNavigate()
  const handleclick =()=>{
   navigate("/departements")
  }
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <nav  {...bindTrigger(popupState)}>
           
            <FontAwesomeIcon icon={faHouseChimneyMedical} /> 
             Departements
           
          </nav>
          <Menu {...bindMenu(popupState)}>
            <MenuItem ><DepartementForm/></MenuItem>
            <MenuItem onClick={handleclick}>Tout les departements</MenuItem>
            
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
