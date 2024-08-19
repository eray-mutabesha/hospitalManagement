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
import ChoixTransferClt from '../../ChoixTransferClt.jsx'
import Reception from '../../Reception.jsx'
import Consultation from '../../Consultation.jsx'
import Ressources from '../../Resources.jsx'
import Laboratoire from '../../Laboratoire.jsx'
import OrganisationClinique from '../../OrganisationClinique.jsx'
import Factutation from '../../Facturation.jsx'



function TblChambre() {
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
             <nav id='personaliser'> <Consultation/></nav>
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
      justifyContent:"space-around",
      

    }}>    
      <Box sx={
        {
          
          
          width:"250px",
           border: "1px solid rgba(0, 0, 0, 0.103)",
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
             border:"1px solid rgba(0, 0, 0, 0.103)",
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




    <Box sx={{
      
      display:"flex",
       border: "1px solid rgba(0, 0, 0, 0.103)",
      background:"white",
      justifyContent:"center",
      borderRadius:"10px",
      width:"700px",
      height:"35 0px",
      marginTop:"20px"
    }}>


      
     <form action="" style={{width:"100%"}}>
      <Box sx={{
      display:"flex",
      gap:"20px",
      margin:"10px",
      justifyContent:"space-between"
      
     }}>
     <Box>
     <Typography variant='h6'>  TRAITEMENT</Typography>
     <TextField
          sx={{width:"330px"
               }}
          id="filled-multiline-static"
          label="Traitement"
          multiline
          rows={10}
          variant="filled"
        />
      </Box>  
        <Box>
        <Typography variant='h6'>OBSERVATION</Typography>
     <TextField
          sx={{width:"330px"
               }}
          id="filled-multiline-static"
          label="Observation"
          multiline
          rows={10}
          variant="filled"
        />
        <Box sx={{
          display:"flex",
          marginTop:"10px",
          justifyContent:"end"
          
        }}>
        <Button  variant="contained" color="success" endIcon={<SaveIcon />}>
        Enregister
        </Button>
       
       
      
       </Box>
      </Box>  
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




export default TblChambre
