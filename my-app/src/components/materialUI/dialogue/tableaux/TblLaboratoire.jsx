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


  const navigate = useNavigate()
  const detailLabo =()=>{
    navigate("/laboratoiredetail")
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
          <div className='menus'>
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
      marginTop:"100px",
      justifyContent:"space-evenly",
      margin:"20px",
      // border:"1px solid red"
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



<h1>FICHE LABORATOIRE</h1>






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














     <form action="" style={{
     
      display:"grid"
    }}
     >
<Box  sx={{
display:"grid",
gridTemplateColumns:"auto  auto",
gap:"10px",}}> 
<FormControl variant="standard"   >
<InputLabel id="demo-simple-select-standard-label">Nom du patient</InputLabel>
        <Select
           labelId="demo-simple-select-standard-label"
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
<FormControl variant="standard"   >
<InputLabel id="demo-simple-select-standard-label">Service</InputLabel>
        <Select
           labelId="demo-simple-select-standard-label"
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
id="standard-basic" label="Hemoglobine" variant="standard"
 type="text"
 size="small"
 {...register("Hemoglobine", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic"
 label="Hematocrite" 
 variant="standard"
 type="text"
 size="small"
 {...register("Hematocrite", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic"
 label="Globule blanc" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Globule_blanc", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Globule rouge" 
 variant="standard" 
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
 id="standard-basic" 
 label="N" 
 variant="standard" 
 type="text"
 size="small"
 {...register("fl_n", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="L" 
 variant="standard" 
 type="text"
 size="small"
 {...register("fl_l", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="E" 
 variant="standard" 
 type="text"
 size="small"
 {...register("fl_E", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="M" 
 variant="standard" 
 type="text"
 size="small"
 {...register("fl_m", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="B" 
 variant="standard" 
 type="text"
 size="small"
 {...register("fl_B", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Vitesse de sedimentation" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Vitesse_de_sedimentation", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="TS" 
 variant="standard" 
 type="text"
 size="small"
 {...register("ts", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="TC" 
 variant="standard" 
 type="text"
 size="small"
 {...register("tc", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Plaquette sanguines" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Plaquette_sanguines", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Test d'Emmel" 
 variant="standard" 
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
 id="standard-basic" 
 label="Goutte epaisse" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Goutte_epaisse", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="TDR" 
 variant="standard" 
 type="text"
 size="small"
 {...register("TDR", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Goutte fraiche" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Goutte_fraiche", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Salle enrichies" 
 variant="standard" 
 type="text"
 size="small"
 {...register("salle_enrichie", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Salle directes" 
 variant="standard" 
 type="text"
 size="small"
 {...register("salle_directes", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Frottis uretral a frais" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Frottis_uretral", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Frottis vaginale a frais" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Frottis_vaginal", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Sediment urinaire" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Sediment_urinaire", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="LCR-Element" 
 variant="standard" 
 type="text"
 size="small"
 {...register("LCR_Element", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="FI" 
 variant="standard" 
 type="text"
 size="small"
 {...register("FI", { required: true })}/>

</Box>













<Typography variant='h6'>Bacteriologie :</Typography>
<Box sx={{
  display:"grid",
  gridTemplateColumns:"auto  auto",
  gap:"10px"
}}>


<TextField
className='inpt_material'
 id="standard-basic" 
 label="FV Gram" 
 variant="standard" 
 type="text"
 size="small"
 {...register("FV_Gram", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="FU Gram" 
 variant="standard" 
 type="text"
 size="small"
 {...register("FU_Gram", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="LCR Gram" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Lcr_gram", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Sediment urinaire Gram" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Sediment_urinaire_Gram", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Spermogramme" 
 variant="standard" 
 type="text"
 size="small"
 {...register("spermogramme", { required: true })}/>

</Box>




<Typography variant='h6'>Biochimie :</Typography>
<Box sx={{
  display:"grid",
  gridTemplateColumns:"auto  auto",
  gap:"10px"
}}>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Glycemie" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Glycemie", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Uree sanguine" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Uree_sanguine", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Creatine sanguine" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Creatine_sanguine", { required: true })}/>


<TextField
className='inpt_material'
 id="standard-basic" 
 label="Creatine sanguine" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Creatine_sanguine", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="SGOT(AST)" 
 variant="standard" 
 type="text"
 size="small"
 {...register("SGOT", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="SGPT(ALT)" 
 variant="standard" 
 type="text"
 size="small"
 {...register("SGPT(ALT)", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Bil Tot" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Bil_Tot", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Bil Dir" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Bil_dir", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Bil Dir" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Bil_dir", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Bil ind" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Bil_ind", { required: true })}/>


<TextField
className='inpt_material'
 id="standard-basic" 
 label="Phosphatase alcaline" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Phosphatase_alcaline", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Phosphatase acide" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Phosphatase_acide", { required: true })}/>


<TextField
className='inpt_material'
 id="standard-basic" 
 label="Glucosurie" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Glucosurie", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Albuminirie" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Albuminirie", { required: true })}/>

</Box>










<Typography variant='h6'>Sero-immunologie :</Typography>
<Box sx={{
  display:"grid",
  gridTemplateColumns:"auto  auto",
  gap:"10px"
}}>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Test WIDAL TO" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Test_WIDAL_TO", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="TH" 
 variant="standard" 
 type="text"
 size="small"
 {...register("TH", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Facteurs Rhumatoides" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Facteurs_Rhumatoides", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="ASLO" 
 variant="standard" 
 type="text"
 size="small"
 {...register("ASLO", { required: true })}/>


<TextField
className='inpt_material'
 id="standard-basic" 
 label="Hbs Ag" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Hbs_Ag", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Hbs Ag ALSO" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Hbs_Ag_ALSO", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Test VDRL ou RPR" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Test_VDRL_ou_RPR", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Test VIH" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Test_VIH", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Test de Grossesse" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Test_de_Grossesse", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="CRP" 
 variant="standard" 
 type="text"
 size="small"
 {...register("CRP", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Hapatite virale B" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Hapatite_virale_B", { required: true })}/>


<TextField
className='inpt_material'
 id="standard-basic" 
 label="H.Pylori" 
 variant="standard" 
 type="text"
 size="small"
 {...register("H.Pylori", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Autre" 
 variant="standard" 
 type="text"
 size="small"
 {...register("Autre", { required: true })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Date" 
 variant="standard" 
 type="date"
 size="small"
 {...register("date", { required: true })}/>

</Box>


<Box mt={2} sx={{display:"flex",justifyContent:"space-between"}}>
<ChoixTransferClt/>

<Button   sx={{
  width:"fit-content",
}}variant="outlined" color="success" onClick={detailLabo}>
          Detail
</Button>
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
