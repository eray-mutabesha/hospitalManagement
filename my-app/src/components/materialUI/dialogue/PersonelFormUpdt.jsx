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
import { useState,useEffect } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';



 function PatientFormUpdt(singleData,onUpdate) {
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
                nom_famille: "",
                sexe: "",
                specialisation:"",
                fonction: "",
                email: "",
                telephone:"",

  });


  useEffect(() => {
    if (singleData) {
      setFormData({
        nom: singleData.nom || "",
        post_nom: singleData.nom_famille || "",
        age: singleData.sexe || "",
        sexe: singleData.specialisation || "",
        telephone: singleData.fonction || "",
        adresse: singleData.email || "",
        adresse: singleData.telephone || ""
      });
    }
  }, [singleData]);


    const onSubmit=(data)=>{
    
   if (singleData.singleData && singleData.singleData.id) {
     // API pour mettre à jour les données
     axios.put(`${BASE_URL}/update_personel/${singleData.singleData.id}`, data)
       .then(({ data }) => {
         if (data.status == 500) {
           toast.error("Il y a une erreur");
         } else {
          
           toast.success("Mise à jour réussie");
           
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
           {`Modifier les informations de ${singleData.singleData.nom} `}
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
 defaultValue={formData.nom || singleData.singleData.nom}
 onChange={(e) => setFormData({ ...formData, nom: e.target.value })}/>


<TextField
className='inpt_material'
 id="filled-basic" 
 label="Post nom" 
 variant="filled" 
 type="text"
 size="small"
 {...register("nom_famille", { required: false})}

 defaultValue={formData.nom_famille || singleData.singleData.nom_famille}
 onChange={(e) => setFormData({ ...formData, nom_famille: e.target.value })}/>


<FormControl variant="filled"   >
<InputLabel id="demo-simple-select-filled-label">Genre</InputLabel>
        <Select
           labelId="demo-simple-select-filled-label"
          id="demo-simple-select-standard"
          size="small"
          {...register("sexe", { required: false })}
          defaultValue={formData.sexe || singleData.singleData.sexe}
          onChange={(e) => setFormData({ ...formData, sexe: e.target.value })}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Masculin">Masculin</MenuItem>
          <MenuItem value="Feminin">Feminin</MenuItem>
          <MenuItem value="Autres">Autres</MenuItem>
        </Select>
</FormControl>



<TextField
className='inpt_material'
 id="filled-basic" 
 label="Specialisation" 
 variant="filled" 
 type='text'
 size="small"
 {...register("specialisation", { required: false })}
 defaultValue={formData.specialisation || singleData.singleData.specialisation}
 onChange={(e) => setFormData({ ...formData, specialisation: e.target.value })}/>



<TextField
className='inpt_material'
 id="filled-basic" 
 label="Fonction" 
 variant="filled" 
 type='text'
 size="small"
 {...register("fonction", { required: false })}

 defaultValue={formData.fonction || singleData.singleData.fonction}
 onChange={(e) => setFormData({ ...formData, fonction: e.target.value })}/>



<TextField
className='inpt_material'
 id="filled-basic" 
 label="Email" 
 variant="filled" 
 type='email'
 size="small"
 {...register("email", { required: false })}

 defaultValue={formData.email || singleData.singleData.email}
 onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>


<TextField
className='inpt_material'
 id="filled-basic" 
 label="Email" 
 variant="filled" 
 type='number'
 size="small"
 {...register("telephone", { required: false })}

 defaultValue={formData.telephone || singleData.singleData.telephone}
 onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}/>










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
export default PatientFormUpdt