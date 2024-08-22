import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
import Dashboard from './materialUI/Dashboard.jsx'
import Reception from './materialUI/Reception.jsx'
import Consultation from './materialUI/Consultation.jsx'
import Laboratoire from './materialUI/Laboratoire.jsx'
import OrganisationClinique from './materialUI/OrganisationClinique.jsx'
import Factutation from './materialUI/Facturation.jsx'
import Ressources from './materialUI/Resources.jsx'
import Parametre from './materialUI/Parametre.jsx'



function Profil() {
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
              <OrganisationClinique/>
              <Factutation/>
              <Ressources/>
              <nav id='personaliser'><Parametre/></nav>
          </div>
        </div>
        <div className='div_two' style={{
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

          <div style={{
            marginTop:"150px",
            display:"flex",
            justifyContent:"center",
          }}>


            <Box  sx={{
              display:"flex",
              justifyContent:"space-around",
              
              border:"1px solid rgb(201, 199, 199)",
              width:"600px",
              padding:"10px",
              borderRadius:"10px",
              background:"white"
            }}>


             <Box sx={{
              width:"250px",
              height:"200px",
              backgroundImage:"url('moderate-aquamarine-dark-gradient-background_608506-1382.avif')",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
             }}>
              <img src='public/profilphoto.png' style={{
                width:"150px",
                height:"150px",
                borderRadius:"50%"
              }}/>
              </Box> 
             <Box sx={{
              display:"grid",
              gap:"20px",
              height:"fit-content"
             }}>


              <Box sx={{
                display:"flex",
                border:"1px solid rgb(201, 199, 199)",
                 justifyContent:"space-between",
                 heigth:"fit-content",
                 padding:"5px",
                 borderRadius:"5px"
              }}><p><strong>Nom : </strong>jonathan</p>
              <img src='public/editPhoto-removebg-preview.png' style={{
                width:"20px",
                height:"20px"
              }}/>
              </Box>


              <Box sx={{
                display:"flex",
                border:"1px solid rgb(201, 199, 199)",
                 justifyContent:"space-between",
                 heigth:"fit-content",
                 padding:"5px",
                 borderRadius:"5px"
              }}><p><strong>Post-nom : </strong>kasongo</p>
              <img src='public/editPhoto-removebg-preview.png' style={{
                width:"20px",
                height:"20px"
              }}/></Box>


              <Box sx={{
                display:"flex",
                border:"1px solid rgb(201, 199, 199)",
                 justifyContent:"space-between",
                 heigth:"fit-content",
                 padding:"5px",
                 borderRadius:"5px"
              }}><p><strong>Fonction : </strong>docteur</p>
              <img src='public/editPhoto-removebg-preview.png' style={{
                width:"20px",
                height:"20px"
              }}/></Box>



              <Box sx={{
                display:"flex",
                border:"1px solid rgb(201, 199, 199)",
                 justifyContent:"space-between",
                 heigth:"fit-content",
                 padding:"5px",
                 borderRadius:"5px"
              }}><p><strong>Adresse : </strong>goma/Q.kyeshero/AV.mageni</p>
              <img src='public/editPhoto-removebg-preview.png' style={{
                width:"20px",
                height:"20px"
              }}/></Box>


              <Box sx={{
                display:"flex",
                border:"1px solid rgb(201, 199, 199)",
                 justifyContent:"space-between",
                 heigth:"fit-content",
                 padding:"5px",
                 borderRadius:"5px"
              }}><p><strong>Mot de passe : </strong>23331212121212111</p>
              <img src='public/editPhoto-removebg-preview.png' style={{
                width:"20px",
                height:"20px"
              }}/></Box>


              <Box sx={{
                display:"flex",
                border:"1px solid rgb(201, 199, 199)",
                 justifyContent:"space-between",
                 heigth:"fit-content",
                 padding:"5px",
                 borderRadius:"5px"
              }}><p><strong>Email : </strong>jonathan@gmail.com</p>
              <img src='public/editPhoto-removebg-preview.png' style={{
                width:"20px",
                height:"20px"
              }}/></Box>
             </Box>
            </Box>
          </div>
        </div>
      </section>
    </>
  )
}




export default Profil

