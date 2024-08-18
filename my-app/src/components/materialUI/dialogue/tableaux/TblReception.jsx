import React from 'react'
import './tbl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faEye} from '@fortawesome/free-solid-svg-icons'
import { Navigate, useNavigate } from 'react-router-dom'
import Dashboard from '../../Dashboard.jsx'
import Reception from '../../Reception.jsx'
import Parametre from '../../Parametre.jsx'
import { faBell,faCaretDown,faCheck,faXmark,faMagnifyingGlass,faListCheck,faUserDoctor,faStethoscope,faCommentsDollar,faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { Box ,TextField, Typography,InputLabel,Select,MenuItem,FormControl,Button}  from '@mui/material';
import { useForm} from "react-hook-form"
import Consultation from '../../Consultation.jsx'
import SaveIcon from '@mui/icons-material/Save';
import ChoixTransferClt from '../../ChoixTransferClt.jsx'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DossierForm from '../DossierForm.jsx'
import DossierListe from '../../DossierListe.jsx'
import Ressources from '../../Resources.jsx'
import Laboratoire from '../../Laboratoire.jsx'

import OrganisationClinique from '../../OrganisationClinique.jsx'
import Factutation from '../../Facturation.jsx'







function createData(name, calories, fat, carbs, protein) {
return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1,'Katembo mwami john', '12/03/2024','En attente',),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


function TblReception() {
    const { register, handleSubmit,formState:{errors} } = useForm();
  const navigate = useNavigate()
  const handledetail=()=>{
    navigate("/detaildossier")
  }
  return (
    <>
      <section  id='all_section'>
        <div className='div_one'>
        <div className='logo'>
            <img src='public/logo-removebg-preview.png' alt='logo hopital'/>
          </div>
        <div>
              <Dashboard />
              <nav id='personaliser'> <Reception/></nav>
              <Consultation/>
              <Laboratoire/>
              <OrganisationClinique/>
              <Factutation/>
              <Ressources/>
              <Parametre/>
          </div>
        </div>
        <div className='div_two' style={{ background:"rgba(231, 230, 230, 0.301)",}}> 
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
    position:"relative",
    top:"80px",
    margin:"10px",
    display:"flex",
    justifyContent:"left",
    gap:"20px"
}}>
     
    <DossierListe/>
    <ChoixTransferClt/>
   

</Box>


<Box sx={{
    display:"flex",
    justifyContent:"space-between",
    position:"relative",
    top:"100px",
    margin:"10px"
}}>
    <Box sx={{
         width:"250px",
         border: "1px solid rgba(0, 0, 0, 0.103)",
        display:"flex",
        justifyContent:"center",
        borderRadius:"10px",
        background:"white"
    }}>
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
        <form action="" style={{
            width:"fit-content",
            padding:"20px",
            border:"1px solid rgba(0, 0, 0, 0.103)",
        
            borderRadius:"10px",
            background:"white"
        }}>
            <Typography variant='h6'>Identite</Typography>
<Box sx={
    {
        display:"grid",
        gap:"20px"
    }
}>
            <Box  sx={{
                display:"grid",
                gap:"10px",
                gridTemplateColumns:"auto auto",
                width:"100%"
            }}>
            


<FormControl variant="filled"   >
<InputLabel id="demo-simple-select-filled-label">Patient</InputLabel>
        <Select
           labelId="demo-simple-select-filled-label"
          id="demo-simple-select-standard"
          size="small"
          {...register("patient_id", { required: true })}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>kambale</MenuItem>
          <MenuItem value={20}>mussa</MenuItem>
          <MenuItem value={20}>alain</MenuItem>
          <MenuItem value={20}>john</MenuItem>
        </Select>
</FormControl>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Adresse" 
 variant="filled" 
 type="text"
 size="small"
 {...register("adress", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Age" 
 variant="filled" 
 type="number"
 size="small"
 {...register("age", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Sexe" 
 variant="filled" 
 type="text"
 size="small"
 {...register("sexe", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Poids" 
 variant="filled" 
 type="text"
 size="small"
 {...register("sexe", { required: true })}/>


<TextField
className='inpt_material'
 id="filled-basic" 
 label="Telephone" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Telephone", { required: true })}/>
            </Box>

            <Box sx={
                {
                    width:"780px"
                }
            }>
     <Typography variant='h6'>  Premiers diagnostics</Typography>
     <TextField
          sx={{width:"100%"
               }}
          id="filled-multiline-static"
          label="Premier diagnostic"
          multiline
          rows={10}
          variant="filled"
        />
     <Box sx={{
        display:"flex",
        justifyContent:"end",
        gap:"20px",
        marginTop:"10px"
     }}>
      <Button variant="contained" color="success" endIcon={<SaveIcon />}>
        Enregister
        </Button>
       
       
      </Box>
      </Box> 
      </Box> 
        </form>
      </Box> 
      </Box>
        </div>
      </section>
    </>
  )
}
export default TblReception







