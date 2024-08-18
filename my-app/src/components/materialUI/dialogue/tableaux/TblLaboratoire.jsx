import React from 'react'
import './tbl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dashboard from '../../Dashboard.jsx'
import Parametre from '../../Parametre.jsx'
import { Box, Button, Typography,TextField, Stack } from '@mui/material'
import { faBell,faCaretDown,faCheck,faXmark,faMagnifyingGlass,faListCheck,faUserDoctor,faStethoscope,faCommentsDollar,faChevronDown} from '@fortawesome/free-solid-svg-icons'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import SaveIcon from '@mui/icons-material/Save';
import { InputLabel,Select,MenuItem,FormControl}  from '@mui/material';
import { useForm} from "react-hook-form"
import Consultation from '../../Consultation.jsx'
import Reception from '../../Reception.jsx'
import Ressources from '../../Resources.jsx'
import Laboratoire from '../../Laboratoire.jsx'
import OrganisationClinique from '../../OrganisationClinique.jsx'
import Factutation from '../../Facturation.jsx'



function TblLaboratoire() {
  const { register, handleSubmit,formState:{errors} } = useForm();
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <>
      <section  id='all_section'>
      <div className='div_one'>
        <div className='logo'>
            <img src='public/logo-removebg-preview.png' alt='logo hopital'/>
          </div>
        <div>
              <Dashboard />
             <Reception/>
              <Consultation/>
              <nav id='personaliser'><Laboratoire/></nav>
              <OrganisationClinique/>
              <Factutation/>
              <Ressources/>
              <Parametre/>
          </div>
        </div>
        <div className='div_two' style={{
           background:"rgba(231, 230, 230, 0.301)",
           height:"fit-content",
      
      }}> 
        <div className='header'>
              <div className='recherch'>
               <FontAwesomeIcon icon={faMagnifyingGlass} /> 
               <input type="text" placeholder='recherch'/>
              </div>

              <div className='administrateur'>
                <nav className='notification_icon'>
                <FontAwesomeIcon icon={faBell} />
                </nav>
               <nav>
               <img src='public/Dr. MUAMBA.jpg' className='admin_photo' alt='administrateur'/>
               </nav> 
               <nav> <p> Dr jonathan kasongo </p></nav>
               <nav><FontAwesomeIcon icon={faCaretDown} /></nav>
              </div>
           </div>
      




      
      <Box sx={{
      display:"flex",
      marginTop:"80px",
      justifyContent:"space-around",
      

    }}>    
      <Box sx={
        {
          
          
          width:"250px",
          height:"fit-content",
           border: "1px solid rgb(201, 199, 199)",
          display:"flex",
          justifyContent:"center",
          borderRadius:"10px",
          background:"white"

        }
      }>


      <List dense sx={{ width: '100%', maxWidth: 230, bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3,4,5,7,8].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
          sx={{
            background:"whitesmoke",
            margin:"2px auto"
          }}
          key={value}
          secondaryAction={
            <IconButton edge="end" aria-label="comments">
              <CommentIcon />
            </IconButton>
          }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <img src='/public/profilphoto.png' style={{
                  width:"40px",
                  height:"40px",
                  borderRadius:"50%",
                  objectFit:"cover"
                }}/>
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>

    </Box>
    <Box>
    

 {/* ......................................................... */}
 
          <Box  sx={{
            display:"flex",
            justifyContent:"space-between"
          }}>
          
          <Box sx={{
     
             width:"500px",
             height:"150px",
             border:"1px solid rgb(201, 199, 199)",
            background:"white",
             borderRadius:"10px",
             display:"grid",
             alignItems:"center",
             padding:"10px"
             
            
           }}>
             <Box sx={{
              display:"grid",
              gridTemplateColumns:"auto auto auto",
              
              justifyContent:"space-around",
              margin:"20px ",
              gap:"40px"
            }}>

             
              <p><strong>Nom : </strong> Katembo mwamijean</p>
              <p><strong>Adresse : </strong> ndosho/Av.ngungu</p>
              <p><strong>Age : </strong> 23 ans</p>
              
              
              <p><strong>Sexe : </strong>Masculim</p>
              <p><strong>Poids : </strong> 60 kg </p>
              <p><strong>Tel: </strong> 0791234442</p>
            
              
              
            </Box>
            </Box>
            
            <Box sx={{
              
              border:"1px solid rgb(201, 199, 199)",
               backgroundImage:"url('moderate-aquamarine-dark-gradient-background_608506-1382.avif')",
              backgroundRepeat:"no-repeat",
              backgroundSize: "cover",
             backgroundPosition:"center",
             width:"150px",
             height:"170px",
             borderRadius:"10px",
             display:"flex",
             alignItems:"center",
             justifyContent:"center"
            }}>
             
              <img src="/public/profilphoto.png" alt="" style={{
                width:"110px",
                height:"110px",
                borderRadius:"50%"
              }}/>
            
            </Box>
           </Box>








    <Typography variant='h5' mt={5}>Fiche Laboratoire</Typography>
    <Box sx={{
      
      padding:"10px",
       border: "1px solid rgb(201, 199, 199)",
      background:"white",
      borderRadius:"10px",
      marginTop:"20px"
    }}>

     <form action="" style={{
      width:"100%",
      display:"grid"
    }}
     >
<Box  sx={{
width:"100%",
display:"grid"

}}> 
<FormControl variant="filled"   >
<InputLabel id="demo-simple-select-filled-label">Patient ID</InputLabel>
        <Select
           labelId="demo-simple-select-filled-label"
          id="demo-simple-select-standard"
          size="small"
          {...register("patient_id", { required: true })}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
        </Select>
</FormControl>
<FormControl variant="filled"   >
<InputLabel id="demo-simple-select-filled-label">Service</InputLabel>
        <Select
           labelId="demo-simple-select-filled-label"
          id="demo-simple-select-standard"
          size="small"
          {...register("patient_id", { required: true })}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Hospitalisation</MenuItem>
          <MenuItem value={20}>Ambilatoire</MenuItem>
        </Select>
</FormControl>
</Box> 












<Typography variant='h6'>Hermatologie :</Typography>
<Box sx={{
  display:"grid",
  gridTemplateColumns:"auto  auto",
  gap:"10px",

}}>



<TextField
className='inpt_material'
 id="filled-basic" 
 label="Hemoglobine" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Hemoglobine", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Hematocrite" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Hematocrite", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Globule blanc" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Globule_blanc", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Globule rouge" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Globule_rouge", { required: true })}/>
</Box>         












<Typography variant='h6'>FL(%) :</Typography>
<Box sx={{
  display:"grid",
  gridTemplateColumns:"auto  auto",
  gap:"10px"
}}>

 <TextField
className='inpt_material'
 id="filled-basic" 
 label="N" 
 variant="filled" 
 type="text"
 size="small"
 {...register("fl_n", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="L" 
 variant="filled" 
 type="text"
 size="small"
 {...register("fl_l", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="E" 
 variant="filled" 
 type="text"
 size="small"
 {...register("fl_E", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="M" 
 variant="filled" 
 type="text"
 size="small"
 {...register("fl_m", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="B" 
 variant="filled" 
 type="text"
 size="small"
 {...register("fl_B", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Vitesse de sedimentation" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Vitesse_de_sedimentation", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="TS" 
 variant="filled" 
 type="text"
 size="small"
 {...register("ts", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="TC" 
 variant="filled" 
 type="text"
 size="small"
 {...register("tc", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Plaquette sanguines" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Plaquette_sanguines", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Test d'Emmel" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Test_Emmel", { required: true })}/>

</Box>












<Typography variant='h6'>Parasitologie/ Cytologie :</Typography>
<Box sx={{
  display:"grid",
  gridTemplateColumns:"auto  auto",
  gap:"10px",
  
}}>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Goutte epaisse" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Goutte_epaisse", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="TDR" 
 variant="filled" 
 type="text"
 size="small"
 {...register("TDR", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Goutte fraiche" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Goutte_fraiche", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Salle enrichies" 
 variant="filled" 
 type="text"
 size="small"
 {...register("salle_enrichie", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Salle directes" 
 variant="filled" 
 type="text"
 size="small"
 {...register("salle_directes", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Frottis uretral a frais" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Frottis_uretral", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Frottis vaginale a frais" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Frottis_vaginal", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Sediment urinaire" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Sediment_urinaire", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="LCR-Element" 
 variant="filled" 
 type="text"
 size="small"
 {...register("LCR_Element", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="FI" 
 variant="filled" 
 type="text"
 size="small"
 {...register("FI", { required: true })}/>

</Box>


     </form>
    </Box>
    </Box>
    </Box> 
        </div>
      </section>
    </>
  )
}




export default TblLaboratoire
