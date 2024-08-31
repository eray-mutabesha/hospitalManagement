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
import { useNavigate } from 'react-router-dom'



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
  const navigate = useNavigate()
  const detail =()=>{
    navigate("/hospitalisationdetail1")
  }
  const handledossier=()=>{
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
      marginTop:"100px",
      justifyContent:"space-evenly",
      margin:"20px",
    }}>    


      <Button  variant="contained" color="error" sx={{
    width:"fit-content",
    marginTop:"40px"}}onClick={handledossier}>
            Retour
           </Button>

    <Box>
    
          


    
    <Box sx={{
      
      padding:"10px",
       border: "1px solid rgb(201, 199, 199)",
      background:"white",
      borderRadius:"10px",
      marginTop:"20px"
    }}>

   
<h1>FICHE DE NURSING</h1>



<Box  sx={{
            display:"flex",
            justifyContent:"space-between",
            gap:"20px",
          }}>
          
          <Box sx={{
     
            background:"white",
             borderRadius:"10px",
             display:"grid",
             alignItems:"center",
             padding:"10px"
             
            
           }}>
             <Box sx={{
            display:"grid",
            gridTemplateColumns:"auto auto auto auto",
            gap:"30px",
            background:"white",
            padding:"0px"
          }}>
            <h3>Nom: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>kasongo</span></h3>
            <h3>Age: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>22 ans</span></h3>
            <h3>Sexe: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>masculin</span></h3>
            <h3>Poids: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>67 kg</span></h3>
            <h3>TO: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>67 kg</span></h3>
            <h3>TA: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>67 kg</span></h3>
            <h3>Adresse: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>Goma/Q.ndosho/AV.ngungu</span></h3>
            <h3>Telephone: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>078374848</span></h3>
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








<form style={{
  display:"grid",
  gridTemplateColumns:"auto auto auto",
  gap:"10px"
}}>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Nom" 
 variant="standard" 
 type="text"
 size="small"
 {...register("nom", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Adresse" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Adresse", { required: true })}/>

        
<TextField
className='inpt_material'
 id="standard-basic" 
 label="Age" 
 variant="standard" 
 size="small"
 type='number'
 {...register("age", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Sex" 
 variant="standard" 
 size="small"
 type='email'
 {...register("Sex", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Diagnostic de presomption" 
 variant="standard" 
 size="small"
 type='email'
 {...register("Diagnostic_de_presomption", { required: true })}/>



<TextField
className='inpt_material'
 id="standard-basic" 
 label="Operation prevue" 
 variant="standard" 
 size="small"
 type='email'
 {...register("Operation_prevue", { required: true })}/>


<TextField
className='inpt_material'
 id="standard-basic" 
 label="POULS" 
 variant="standard" 
 size="small"
 type='email'
 {...register("POULS", { required: true })}/>



<TextField
className='inpt_material'
 id="standard-basic" 
 label="RESPIRATION" 
 variant="standard" 
 size="small"
 type='email'
 {...register("RESPIRATION", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="TA" 
 variant="standard" 
 size="small"
 type='email'
 {...register("TA", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="POIDS" 
 variant="standard" 
 size="small"
 type='email'
 {...register("POIDS", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Medicament per OS" 
 variant="standard" 
 size="small"
 type='email'
 {...register("Medicament_per_OS", { required: true })}/>


<TextField
className='inpt_material'
 id="standard-basic" 
 label="Perfusion" 
 variant="standard" 
 size="small"
 type='email'
 {...register("Perfusion", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Injectable" 
 variant="standard" 
 size="small"
 type='email'
 {...register("Injectable", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Autre" 
 variant="standard" 
 size="small"
 type='email'
 {...register("Autre", { required: true })}/>


</form>
<Box mt={5} sx={{
  display:"flex",
  justifyContent:"space-between"
}}>
 <ChoixTransferClt/>
 <Button variant='outlined' color="success" onClick={detail}>
  details
 </Button>
</Box>

    </Box>
    </Box>
    </Box> 
        </div>
      </section>
    </>
  )
}




export default TblLaboratoire
