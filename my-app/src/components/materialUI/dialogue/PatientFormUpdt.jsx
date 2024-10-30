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
                post_nom: "",
                age: "",
                sexe:"",
                telephone: "",
                adresse: "",
  });


  useEffect(() => {
    if (singleData) {
      setFormData({
        nom: singleData.nom || "",
        post_nom: singleData.post_nom || "",
        age: singleData.age || "",
        sexe: singleData.sexe || "",
        telephone: singleData.telephone || "",
        adresse: singleData.adresse || ""
      });
    }
  }, [singleData]);


    const onSubmit=(data)=>{
    
   if (singleData.singleData && singleData.singleData.id) {
     // API pour mettre à jour les données
     axios.put(`${BASE_URL}/update_patient/${singleData.singleData.id}`, data)
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
 {...register("post_nom", { required: false})}

 defaultValue={formData.post_nom || singleData.singleData.post_nom}
 onChange={(e) => setFormData({ ...formData, post_nom: e.target.value })}/>


<TextField
 className='inpt_material'
 id="filled-basic" 
 label="Age" 
 variant="filled" 
 type="text"
 size="small"
 {...register("age", { required: false })}
  defaultValue={formData.age || singleData.singleData.age}
  onChange={(e) => setFormData({ ...formData, age: e.target.value })}/>


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
 label="Numero de telephone" 
 variant="filled" 
 type='number'
 size="small"
 {...register("telephone", { required: false })}
 defaultValue={formData.telephone || singleData.singleData.telephone}
 onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}/>



<TextField
className='inpt_material'
 id="filled-basic" 
 label="Adresse" 
 variant="filled" 
 size="small"
 {...register("adresse", { required: false })}

 defaultValue={formData.adresse || singleData.singleData.adresse}
 onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}/>

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