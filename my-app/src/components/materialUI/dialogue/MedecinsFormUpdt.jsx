import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm} from "react-hook-form"
import { useState,useEffect } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Box ,TextField, Typography,InputLabel,Select,MenuItem,FormControl}  from '@mui/material';











 function MedecinsFormUpdt({singleData,onUpdate}) {
  const BASE_URL = import.meta.env.VITE_API_URL;

  const { register, handleSubmit,formState:{errors} } = useForm();
   const [open, setOpen] = React.useState(true);

   const handleClickOpen = () => {
     setOpen(true);
   };

   const handleClose = () => {
     setOpen(false);
     window.location.reload();
   };














  const [formData, setFormData] = useState({
    nom: "",
    date_arrive: "",
    sexe: "",
    specialisation:"",
    email: "",
    telephone: "",
  });


  useEffect(() => {
    if (singleData) {
      setFormData({
        nom: singleData.nom || "",
        date_arrive: singleData.date_arrive || "",
        sexe: singleData.sexe || "",
        specialisation: singleData.specialisation || "",
        email: singleData.email || "",
        telephone: singleData.telephone || ""
      });
    }
  }, [singleData]);





















    const onSubmit=(data)=>{
    
   if (singleData && singleData.id) {
     // API pour mettre à jour les données
     axios.put(`${BASE_URL}/update_medecins/${singleData.id}`, data)
       .then(({ data }) => {
         if (data.status == 500) {
           toast.error("Il y a une erreur");
         } else {
          
           toast.success("Mise à jour réussie");
           window.location.reload();
           if (singleData.onUpdate) {
            singleData.onUpdate();
          }
         }
       })
       .catch((err) => {
         console.log(err);
         toast.error("pas de mise en jour ");
       });
   }
}
  return (
     <React.Fragment > 
      
       <Dialog
         open={open}
         onClose={handleClose}
         aria-labelledby="alert-dialog-title"
         aria-describedby="alert-dialog-description"
       >
         <DialogTitle id="alert-dialog-title" >
           {`Modifier les informations de ${singleData.nom} `}
         </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Box>

          <form className='medecin_fom' onSubmit={handleSubmit(onSubmit)}>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Nom" 
 variant="filled" 
 type="text"
 size="small"
 {...register("nom", { required: false })}
 defaultValue={formData.nom || singleData.nom} 
 onChange={(e) => setFormData({ ...formData, nom: e.target.value })}/>


<TextField
className='inpt_material'
 id="filled-basic" 
 label="Date d'Arriver" 
 variant="filled" 
 type="date"
 size="small"
 {...register("date_arrive", { required: false })}
   defaultValue={formData.date_arrive || singleData.date_arrive} 
  onChange={(e) => setFormData({ ...formData, date_arrive: e.target.value })}/>

        
<TextField
className='inpt_material'
 id="filled-basic" 
 label="Specialisation" 
 variant="filled" 
 size="small"
 type='text'
 {...register("specialisation", { required: false })}
 value={formData.specialisation || singleData.specialisation} 
 onChange={(e) => setFormData({ ...formData, specialisation: e.target.value })}/>


<FormControl variant="filled">
<InputLabel id="demo-simple-select-filled-label">Sexe</InputLabel>
        <Select
           labelId="demo-simple-select-filled-label"
          id="demo-simple-select-standard"
          size="small"
          {...register("sexe", { required: false })}
          value={formData.sexe || singleData.sexe}
          onChange={(e) => setFormData({ ...formData, sexe: e.target.value })}>

            
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          
            <MenuItem   value="Masculin">Masculin</MenuItem>
            <MenuItem   value="Feminin">Feminin</MenuItem>
            <MenuItem   value="Autre">Autre</MenuItem>
        </Select>
</FormControl> 

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Telephone" 
 variant="filled" 
 size="small"
 type='number'
 {...register("telephone", { required: false})}
 value={formData.telephone || singleData.telephone}
 onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Email" 
 variant="filled" 
 size="small"
 type='email'
 {...register("email", { required: false })}
 value={formData.email || singleData.email}
 onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
     
       <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>Annuler</Button>
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
export default MedecinsFormUpdt