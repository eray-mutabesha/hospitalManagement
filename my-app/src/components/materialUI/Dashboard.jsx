import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableColumns } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';



export default function Dashboard() {
const navigate=useNavigate()
  const handleclick=()=>{
   navigate("/")
  }
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <nav  {...bindTrigger(popupState)}>
           <FontAwesomeIcon icon={faTableColumns} /> 
           Dashboard
          </nav>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={handleclick}>Dashboard</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
