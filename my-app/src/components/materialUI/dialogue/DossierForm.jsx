
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
import { useEffect,useState } from 'react';
import  {toast} from 'react-hot-toast';
import axios from 'axios';




export default function DossierForm() {
  const { register, handleSubmit,formState:{errors} } = useForm();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const BASE_URL = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    nom_patient: "",
    date: ""
  });

  const onsubmit=(data)=>{
    axios.post(`${BASE_URL}/post_patient_dossier`, data)
          
          .then(({ data }) => {
            if (data.status == 500) {
              toast.error("Il y a une erreur");
            } else {
             
             setFormData({
              nom_patient: "",
              date: ""
            });
            
            toast.success("Enregistrement réussi");
          }
          })
           .catch((err) => {
             console.log(err);
             toast.error("Il y a une erreur");
           });

  }



  // get patient route
  const [patient_list,set_patient_list]=useState([])
 
  const get_patient_option = () => {
   axios.get(`${BASE_URL}/get_patient_Option`)
   
     .then(({ data }) => {
      console.log(data.data)
       set_patient_list(data.data || []); 
     })
     .catch((err) => {
       console.log(err);
       toast.error("Il y a une erreur");
     });
 };
 
 
 useEffect(()=>{
 get_patient_option()
 },[])
 
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


          <form className='medecin_fom'  onSubmit={handleSubmit(onsubmit)}>

   
              <FormControl variant="filled">
<InputLabel id="demo-simple-select-filled-label">Nom complet du patient</InputLabel>
        <Select
           labelId="demo-simple-select-filled-label"
          id="demo-simple-select-standard"
          size="small"
          {...register("nom_patient", { required: "Veuillez entrer le nom" })}
          value={formData.nom_patient}
          onChange={(e) => setFormData({ ...formData, nom_patient: e.target.value })}>

            
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {patient_list.map((dat,index)=>(
            <MenuItem key={index}  value={dat.nom}>{dat.nom}</MenuItem>
          ))}
        </Select>
</FormControl>
          


<TextField
className='inpt_material'
 id="filled-basic" 
 label="" 
 variant="filled" 
 type='date'
 size="small"
 {...register("date", { required: "Veuillez entrer le nom" })}
 value={formData.date}
 onChange={(e) => setFormData({ ...formData, date: e.target.value })}/>


<DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>Annuler</Button>
          <Button  variant="contained" color="success" type='submit'>
           Enregistrer
       </Button>
</DialogActions>
</form>
       </Box>
          </DialogContentText>
        </DialogContent>

      </Dialog>
    </React.Fragment>
  );
}
