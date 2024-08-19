import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { Button ,TextField} from '@mui/material';
import { useForm} from "react-hook-form"


export default function HospitalisationFormNursing() {
  const [expanded, setExpanded] = useState(false);
  const { register, handleSubmit,formState:{errors} } = useForm();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
        <Button sx={{
          background:"whitesmoke",
          color:"black"
        }} onClick={handleExpandClick}>
           Fiche de nursing
        <IconButton
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
     
        </Button>
        
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <form className='medecin_fom'>
<Typography>Fiche de nursing</Typography>
<TextField
className='inpt_material'
 id="filled-basic" 
 label="Nom" 
 variant="filled" 
 type="text"
 size="small"
 {...register("nom", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Adresse" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Adresse", { required: true })}/>

        
<TextField
className='inpt_material'
 id="filled-basic" 
 label="Age" 
 variant="filled" 
 size="small"
 type='number'
 {...register("age", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Sex" 
 variant="filled" 
 size="small"
 type='email'
 {...register("Sex", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Diagnostic de presomption" 
 variant="filled" 
 size="small"
 type='email'
 {...register("Diagnostic_de_presomption", { required: true })}/>



<TextField
className='inpt_material'
 id="filled-basic" 
 label="Operation prevue" 
 variant="filled" 
 size="small"
 type='email'
 {...register("Operation_prevue", { required: true })}/>


<TextField
className='inpt_material'
 id="filled-basic" 
 label="POULS" 
 variant="filled" 
 size="small"
 type='email'
 {...register("POULS", { required: true })}/>



<TextField
className='inpt_material'
 id="filled-basic" 
 label="RESPIRATION" 
 variant="filled" 
 size="small"
 type='email'
 {...register("RESPIRATION", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="TA" 
 variant="filled" 
 size="small"
 type='email'
 {...register("TA", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="POIDS" 
 variant="filled" 
 size="small"
 type='email'
 {...register("POIDS", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Medicament per OS" 
 variant="filled" 
 size="small"
 type='email'
 {...register("Medicament_per_OS", { required: true })}/>


<TextField
className='inpt_material'
 id="filled-basic" 
 label="Perfusion" 
 variant="filled" 
 size="small"
 type='email'
 {...register("Perfusion", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Injectable" 
 variant="filled" 
 size="small"
 type='email'
 {...register("Injectable", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Autre" 
 variant="filled" 
 size="small"
 type='email'
 {...register("Autre", { required: true })}/>

 <Button variant='contained' color="success" >
  Enregistrer
 </Button>
</form>
      </Collapse>
    </div>
  );
}
