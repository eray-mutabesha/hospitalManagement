import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box ,TextField, Typography,InputLabel,Select,MenuItem,FormControl}  from '@mui/material';
import { useForm} from "react-hook-form"
import { useState,useEffect } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';




 function MedicamentFormUpdt(singleData,onUpdate) {
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
    Type: "",
    designation: "",
    forme: "",
    dosage:"",
    date: "",
    entree: "",
    sortie: "",
    solde: "",
    date_expiration: "",
  });


  useEffect(() => {
    if (singleData) {
      setFormData({
        Type: singleData.Type || "",
        designation: singleData.designation || "",
        forme: singleData.forme || "",
        dosage: singleData.dosage || "",
        date: singleData.date || "",
        entree: singleData.entree || "",
        sortie: singleData.sortie || "",
        solde: singleData.solde || "",
        date_expiration: singleData.date_expiration || ""
      });
    }
  }, [singleData]);


    const onSubmit=(data)=>{
    if(data.Type=="Injectable"){
        if (singleData.singleData && singleData.singleData.id) {
            // API pour mettre à jour les données
            axios.put(`${BASE_URL}/update_medicament_injectables/${singleData.singleData.id}`, data)
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
    else if(data.Type=="Perfusion"){
        if (singleData.singleData && singleData.singleData.id) {
            // API pour mettre à jour les données
            axios.put(`${BASE_URL}/update_medicament_perfusions/${singleData.singleData.id}`, data)
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
    else{
        if (singleData.singleData && singleData.singleData.id) {
            // API pour mettre à jour les données
            axios.put(`${BASE_URL}/update_autre_medicaments/${singleData.singleData.id}`, data)
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

<FormControl variant="filled"   >
<InputLabel id="demo-simple-select-filled-label">Type de medicament</InputLabel>
<Select
 labelId="demo-simple-select-filled-label"
id="demo-simple-select-standard"
size="small"
{...register("Type", { required: "Veuillez entrer le nom" })}
value={formData.Type}
onChange={(e) => setFormData({ ...formData, Type: e.target.value })}
>
<MenuItem value="">
  <em>None</em>
</MenuItem>
<MenuItem value="Injectable">Injectable</MenuItem>
<MenuItem value="Perfusion">Perfusion</MenuItem>
<MenuItem value="Autres">Autres</MenuItem>
</Select>
</FormControl>            

<TextField
className='inpt_material'
id="filled-basic" 
label="Designation" 
variant="filled" 
type="text"
size="small"
{...register("designation", { required: "Veuillez entrer le nom" })}
value={formData.designation}
onChange={(e) => setFormData({ ...formData, designation: e.target.value })}/>

<TextField
className='inpt_material'
id="filled-basic" 
label="Forme" 
variant="filled" 
type="text"
size="small"
{...register("forme", { required: "Veuillez entrer le nom" })}
value={formData.forme}
onChange={(e) => setFormData({ ...formData, forme: e.target.value })}/>

<TextField
className='inpt_material'
id="filled-basic" 
label="Dosage" 
variant="filled" 
size="small"
type='text'
{...register("dosage", { required: "Veuillez entrer le nom" })}
value={formData.dosage}
onChange={(e) => setFormData({ ...formData, dosage: e.target.value })}/>

 
<TextField
className='inpt_material'
id="filled-basic" 
label="Date" 
variant="filled" 
size="small"
type='date'
{...register("date", { required: "Veuillez entrer le nom" })}
value={formData.date}
onChange={(e) => setFormData({ ...formData, date: e.target.value })}/>


<TextField
className='inpt_material'
id="filled-basic" 
label="Entree" 
variant="filled" 
size="small"
type='text'
{...register("entree", { required: "Veuillez entrer le nom" })}
value={formData.entree}
onChange={(e) => setFormData({ ...formData, entree: e.target.value })}/>

<TextField
className='inpt_material'
id="filled-basic" 
label="Sortie" 
variant="filled" 
size="small"
type='text'
{...register("sortie", { required: "Veuillez entrer le nom" })}
value={formData.sortie}
onChange={(e) => setFormData({ ...formData, sortie: e.target.value })}/>

<TextField
className='inpt_material'
id="filled-basic" 
label="Solde" 
variant="filled" 
size="small"
type='text'
{...register("solde", { required: "Veuillez entrer le nom" })}
value={formData.solde}
onChange={(e) => setFormData({ ...formData, solde: e.target.value })}/>

<TextField
className='inpt_material'
id="filled-basic" 
label="Date d'expiration" 
variant="filled" 
size="small"
type='date'
{...register("date_expiration", { required: "Veuillez entrer le nom" })}
value={formData.date_expiration}
onChange={(e) => setFormData({ ...formData, date_expiration: e.target.value })}/>


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
export default MedicamentFormUpdt