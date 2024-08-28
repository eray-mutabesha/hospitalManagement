
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm} from "react-hook-form";
import { Box ,TextField, Typography,InputLabel,Select,MenuItem,FormControl}  from '@mui/material';
import './index.css';

export default function DossierForm() {
  const { register, handleSubmit,formState:{errors} } = useForm();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment > 
      <Box sx={{
        width:"100%",
        marginLeft:"auto",
        marginRight:"auto",
        
      }}>
       <Button    onClick={handleClickOpen} sx={{
            width:"fit-content",
            border:"1px solid rgb(201, 199, 199)",
                color:"black"
          }}>
           Nouveau Dossier
          </Button>
       </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
          {"Nouveau patient"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box>


          <form className='medecin_fom'>
<FormControl variant="filled"   >
<InputLabel id="demo-simple-select-filled-label">Nom complet du patient</InputLabel>
        <Select
           labelId="demo-simple-select-filled-label"
          id="demo-simple-select-standard"
          size="small"
          {...register("patient_id", { required: true })}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>mussa kasereka </MenuItem>
          <MenuItem value={20}>sadiki mulamba</MenuItem>
          <MenuItem value={30}>amani sakuragire</MenuItem>
        </Select>
</FormControl>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="" 
 variant="filled" 
 type='date'
 size="small"
 {...register("date_dossier", { required: true })}/>

</form>
       </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>Annuler</Button>
          <Button  variant="contained" color="success" >
           Enregistrer
       </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
