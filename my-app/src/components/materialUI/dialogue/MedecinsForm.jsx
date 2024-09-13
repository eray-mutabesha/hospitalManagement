import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box ,TextField} from '@mui/material';
import { useForm} from "react-hook-form"
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function MedecinsForm() {
  const BASE_URL = import.meta.env.VITE_API_URL;

  const { register, handleSubmit,formState:{errors} } = useForm();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [formData, setFormData] = useState({
    nom: "",
    date_arrive: "",
    sexe: "",
    specialisation:"",
    email: "",
    telephone: "",
  });

  const onsubmit=(data)=>{
    axios.post(`${BASE_URL}/insert_medecins`, data)
          
          .then(({ data }) => {
            if (data.status == 500) {
              toast.error("Il y a une erreur");
            } else {
             toast.success("Enregistrement réussi");
             setFormData({
              nom: "",
              date_arrive: "",
              sexe: "",
              specialisation: "",
              email: "",
              telephone: "",
            });
            
          }
          })
           .catch((err) => {
             console.log(err);
             toast.error("Il y a une erreur");
           });


  }
  return (
    <React.Fragment > 
      <Button onClick={handleClickOpen} variant="contained" color="success" >
        Ajouter
       </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
          {"Nouveau medecin"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box>

          <form className='medecin_fom' onSubmit={handleSubmit(onsubmit)}>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Nom" 
 variant="filled" 
 type="text"
 size="small"
 {...register("nom", { required: "Veuillez entrer le nom" })}
 value={formData.nom}
 onChange={(e) => setFormData({ ...formData, nom: e.target.value })}/>


<TextField
className='inpt_material'
 id="filled-basic" 
 label="Date d'Arriver" 
 variant="filled" 
 type="date"
 size="small"
 {...register("date_arrive", { required: "Veuillez entrer le nom" })}
  value={formData.date_arrive}
  onChange={(e) => setFormData({ ...formData, date_arrive: e.target.value })}/>

        
<TextField
className='inpt_material'
 id="filled-basic" 
 label="Specialisation" 
 variant="filled" 
 size="small"
 type='text'
 {...register("specialisation", { required: "Veuillez entrer le nom" })}
 value={formData.specialisation}
 onChange={(e) => setFormData({ ...formData, specialisation: e.target.value })}/>


<select
            className='select'
            {...register("sexe", { required: "Veuillez entrer l'action" })}
            value={formData.sexe}
            onChange={(e) => setFormData({ ...formData, sexe: e.target.value })}
          >

          <option value="">Genre</option>
          <option value="Masculin">Masculin</option>
          <option value="Feminin">Feminin</option>

</select>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Telephone" 
 variant="filled" 
 size="small"
 type='number'
 {...register("telephone", { required: "Veuillez entrer le nom" })}
 value={formData.telephone}
 onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Email" 
 variant="filled" 
 size="small"
 type='email'
 {...register("email", { required: "Veuillez entrer le nom" })}
 value={formData.email}
 onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
     
       <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>Quiter</Button>
          <Button  variant="contained" color="success" type='onsubmit'>
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
