import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faEye} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'
import { faBell,faCaretDown,faCheck,faXmark,faMagnifyingGlass,faListCheck,faUserDoctor,faStethoscope,faCommentsDollar,faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Ressources from '../../../Resources.jsx';
import Reception from '../../../Reception.jsx';
import Consultation from '../../../Consultation.jsx';
import Laboratoire from '../../../Laboratoire.jsx';
import OrganisationClinique from '../../../OrganisationClinique.jsx';
import Factutation from '../../../Facturation.jsx';
import Dashboard from '../../../Dashboard.jsx'
import Parametre from '../../../Parametre.jsx'
import Dossier from '../../../Dossier';


















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


function Laboratoire_detail() {
  

 const navigate = useNavigate()
 const handledossier=()=>{
   navigate("/Laboratoire")
 }
 const Detailpatient=()=>{
  navigate("/detailPatient")
}
const reception=()=>{
  navigate("/receptiondetail")
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
              <Dossier/>
              <Reception/>
              <Consultation/>
              <Laboratoire/>
              <nav id='personaliser'> <OrganisationClinique/></nav>
              <Factutation/>
              <Ressources/>
              <Parametre/>
          </div>
        </div>
        <div className='div_two' > 
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
          display:"grid",
          gap:"30px",
          alignItems:"center",
          margin:"20px"
          
        
        }}>
          <Box mt={5}>
          <Button variant="contained" color="error" onClick={handledossier}>
            Retour
           </Button>
           {/* ......................................................... */}
      </Box>
         <Box sx={{
          background:"white",
          borderRadius:"10px",
          border:"1px solid rgba(0, 0, 0, 0.103)",
          padding:"20px",
         }}>
          

          <h1>FICHE LABORATOIRE</h1>



          <Box sx={{
                marginTop:"10px",
                display:"flex",
                justifyContent:"space-between"
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
     

          <Box sx={{
              
              border:"1px solid rgb(201, 199, 199)",
               backgroundImage:"url('moderate-aquamarine-dark-gradient-background_608506-1382.avif')",
              backgroundRepeat:"no-repeat",
              backgroundSize: "cover",
             backgroundPosition:"center",
             width:"150px",
             height:"150px",
             borderRadius:"10px",
             display:"flex",
             alignItems:"center",
             justifyContent:"center"
            }}>
             
              <img src="/public/profilphoto.png" alt="" style={{
                width:"100px",
                height:"100px",
                borderRadius:"50%"
              }}/>
            
            </Box>
            </Box>











          <Box sx={{
            background:"white",
           
            marginTop:"150px",
            display:"grid",
            gridTemplateColumns:"auto auto auto",
            gap:"40px"
          }}>





            
            <Box>
           <h2  style={{color:"rgba(0, 0, 0, 0.322)"}}>Hermatologie :</h2>
           <p><strong>Hemoglobine:</strong> lorem lorem</p>
           <p><strong>Hematocrite:</strong> lorem</p>
           <p><strong>Globule blanc:</strong> lorem</p>
           <p><strong>Globule rouge:</strong> lorem</p>
           </Box>


        <Box>
           <h2 style={{color:"rgba(0, 0, 0, 0.322)"}}>FL(%) :</h2>
           <p><strong>N:</strong> lorem</p>
           <p><strong>E:</strong> lorem</p>
           <p><strong>B:</strong> lorem</p>
           <p><strong>TS:</strong> lorem</p>
           <p><strong>Paquette sanguine:</strong> lorem</p>
           <p><strong>L:</strong> lorem</p>
           <p><strong>M:</strong> lorem</p>
           <p><strong>Vitesse sedimentation:</strong> lorem</p>
           <p><strong>TC:</strong> lorem</p>
           <p><strong>Test d'EMEIL: lorem</strong> lorem</p>
           </Box>
           

           <Box>
           <h2 style={{color:"rgba(0, 0, 0, 0.322)"}}>Parasitologie/cytologie :</h2>
           <p><strong>Goutte epaisse:</strong> lorem</p>
           <p><strong>Goutte fraiche:</strong> lorem</p>
           <p><strong>Salle directes:</strong> lorem</p>
           <p><strong>Frottis vaginale a frais:</strong> lorem</p>
           <p><strong>LCR-Element:</strong> lorem</p>
           <p><strong>TDR:</strong> lorem</p>
           <p><strong>Salle-enrechies:</strong> lorem</p>
           <p><strong>Frottis uretrale a frais:</strong> lorem</p>
           <p><strong>Sediment urinaire:</strong> lorem</p>
           <p><strong>FI:</strong> lorem</p>
           </Box>



         <Box >
          <h2 style={{color:"rgba(0, 0, 0, 0.322)"}}>Bacteriologie :</h2>
           <p><strong>Fv-Gram:</strong> lorem</p>
           <p><strong>FU-Gram:</strong> lorem</p>
           <p><strong>LCR-Gram:</strong> lorem</p>
           <p><strong>Sediment urinaire Gram:</strong> lorem</p>
           <p><strong>Spermatogram:</strong> lorem</p>
           </Box>

<Box>
           <h2 style={{color:"rgba(0, 0, 0, 0.322)"}}>Biochimie :</h2>
           <p><strong>Glycemie:</strong> lorem</p>
           <p><strong>Creatine sanguine:</strong> lorem</p>
           <p><strong>SGOT(AST):</strong> lorem</p>
           <p><strong>Bil to:</strong> lorem</p>
           <p><strong>Bil Dir:</strong> lorem</p>
           <p><strong>Phosphatase alcoline:</strong> lorem</p>
           <p><strong>Glucosirie:</strong> lorem</p>
           <p><strong>uree sanguine:</strong> lorem</p>
           <p><strong>Creatine sanguine:</strong> lorem</p>
           <p><strong>SGPT(ALT):</strong> lorem</p>
           <p><strong>Bil Dir:</strong> lorem</p>
           <p><strong>Bil ind:</strong> lorem</p>
           <p><strong>Phosphatase acide:</strong> lorem</p>
           <p><strong>Albuminurie:</strong> lorem</p>
           </Box>



<Box>
           <h2 style={{color:"rgba(0, 0, 0, 0.322)"}}>Sero-immunologie :</h2>
           <p><strong>Test WIDAL TO:</strong> lorem</p>
           <p><strong>Facteurs rhumatoide:</strong> lorem</p>
           <p><strong>Hbs Ag :</strong> lorem</p>
           <p><strong>Test VDRL ou RPR:</strong> lorem</p>
           <p><strong>Test grossesse:</strong> lorem</p>
           <p><strong>Hapatite virale B:</strong> lorem</p>
           <p><strong>TH:</strong> lorem</p>
           <p><strong>ALSO:</strong> lorem</p>
           <p><strong>Hbs Age ALSO:</strong> lorem</p>
           <p><strong>Test VIH:</strong> lorem</p>
           <p><strong>CRP:</strong> lorem</p>
           <p><strong>H.Pilori:</strong> lorem</p>
           <p><strong>Date:</strong> lorem</p>
           <p><strong>Autre:</strong> lorem</p>
           </Box>

        </Box>
        <Box sx={{
        display:"flex",
        justifyContent:"end",
        gap:"20px",
        marginTop:"10px"
     }}>

      <Button variant='outlined' >Modifier</Button>
      
       
       
      </Box>
         </Box>
      
      
    </Box>
        
        </div>
      </section>
    </>
  )
}
export default Laboratoire_detail



