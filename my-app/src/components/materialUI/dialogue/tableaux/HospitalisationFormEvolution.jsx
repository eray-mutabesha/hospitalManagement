import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { Button ,TextField} from '@mui/material';
import { useForm} from "react-hook-form"


export default function HospitalisationFormEvolution() {
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
           Fiche d'Evolution
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
<Typography>Fiche d'Evolution</Typography>
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
 label="Sexe" 
 variant="filled" 
 size="small"
 type='email'
 {...register("Sexe", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Poigs" 
 variant="filled" 
 size="small"
 type='email'
 {...register("Diagnostic_de_presomption", { required: true })}/>



<TextField
className='inpt_material'
 id="filled-basic" 
 label="Telephone" 
 variant="filled" 
 size="small"
 type='email'
 {...register("Telephone", { required: true })}/>


<TextField
className='inpt_material'
 id="filled-basic" 
 label="To" 
 variant="filled" 
 size="small"
 type='email'
 {...register("Tot", { required: true })}/>



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
 label="Date" 
 variant="filled" 
 size="small"
 type='email'
 {...register("Date ", { required: true })}/>

<Typography variant='h6'>  TRAITEMENT</Typography>
     <TextField
         
          id="filled-multiline-static"
          label="Traitement"
          multiline
          rows={10}
          variant="filled"
        />
      
        <Typography variant='h6'>OBSERVATION</Typography>
     <TextField
          
          id="filled-multiline-static"
          label="Observation"
          multiline
          rows={10}
          variant="filled"
        />
 <Button variant='contained' color="success">
  Enregistrer
 </Button>
</form>
      </Collapse>
    </div>
  );
}
