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
import ChoixTransferClt from '../../ChoixTransferClt.jsx'



function TblAmbulatoire() {
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
              <Laboratoire/>
              <nav id='personaliser'><OrganisationClinique/></nav>
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
    position:"relative",
    top:"80px",
    margin:"10px",
    display:"grid",
    gap:"20px",
    left:"30px",
    width:"fit-content"
}}>
    
      <Typography variant='h5'> Patient Ambulatoire</Typography>
      <ChoixTransferClt/>
   

</Box>
      
      <Box sx={{
      display:"flex",
      marginTop:"100px",
      justifyContent:"space-evenly",
      

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
            justifyContent:"space-between",
            gap:"20px"
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









   

<form className='medecin_fom'  style={{
    display:"flex",
    width:"700px"
}}>

 <Box sx={{
    display:"grid",
    width:"50%"
 }}>   
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
  
</Box>

 <Box sx={{
    display:"grid",
    width:"50%"
 }}>

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

</Box>
 
</form>


    </Box>
    </Box> 
        </div>
      </section>
    </>
  )
}




export default TblAmbulatoire














     {/* <div id='section_profille'>
      <div>
         <img src='public\profilphoto.png' alt='photo_de_profile'/>
      </div>
      <div className='informations_user'>
          <div className='administrateur'>
            <h2>Administrateur</h2>
            <p><strong>Email:</strong><span>eray@gmail.com</span></p>
          </div>
          <div className='identities'>
            <nav><p><strong>Nom:</strong><span>name</span></p><img src='public\editPhoto-removebg-preview.png'/></nav>
            <nav><p><strong>Genre:</strong><span>Genre</span></p><img src='public\editPhoto-removebg-preview.png'/></nav>
            <nav><p><strong>Statut:</strong><span>Statut</span></p><img src='public\editPhoto-removebg-preview.png'/></nav>
            <nav><p><strong>Action:</strong><span>une action</span></p><img src='public\editPhoto-removebg-preview.png'/></nav>
            <nav><p><strong>Mot de passe:</strong><span>12344434344343</span></p><img src='public\editPhoto-removebg-preview.png'/></nav>
          </div>
      </div>
    </div>  */}