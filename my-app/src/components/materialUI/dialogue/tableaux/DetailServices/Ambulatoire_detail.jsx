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


function Ambulatoire_detail() {
  

 const navigate = useNavigate()
 const handledossier=()=>{
   navigate("/ambulatoire")
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
              <Reception/>
              <Consultation/>
              <Laboratoire/>
              <nav id='personaliser'> <OrganisationClinique/></nav>
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
          display:"grid",
          gap:"30px",
          alignItems:"center",
          margin:"20px"
        
        }}>


          <Box  mt={5}>
          <Button variant="contained" color="error" onClick={handledossier}>
            Retour
           </Button>
          </Box>


      
         <Box sx={{
          background:"white",
          padding:"20px",
          borderRadius:"10px",
          border:"1px solid rgba(0, 0, 0, 0.103)",
         }}>


        <h1>FICHE DE CONSULTATION AMBULATOIRE</h1>


         
          <Box sx={{
                display:"flex",
                justifyContent:"space-between",
                marginTop:"10px"
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
            
            marginTop:"30px"
          }}>
           <h3>Traitement :</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde culpa facilis adipisci, ipsum repellat reprehenderit quia ut error cum minima, ex quae quod saepe maxime est perspiciatis, rerum maiores? Necessitatibus eaque provident mollitia veritatis sed quia et cum at quisquam voluptatem. Facilis dicta cumque dolorem quibusdam voluptate similique ipsam consectetur quasi repellendus perferendis voluptatum rerum sed nostrum deserunt sapiente, ducimus architecto. Maxime illo nihil voluptates qui inventore distinctio corporis tempora. Animi, ab tempore? Nostrum distinctio quaerat atque deserunt eum eaque, quo repudiandae quos aperiam! Consequatur, voluptate? Adipisci quis reprehenderit, repellendus, saepe aut tempora sint, odit sequi similique et incidunt ipsa autem minima. Esse dolorem corporis facilis veniam excepturi similique magni nisi harum aperiam delectus labore rem magnam, accusantium consequatur, voluptatum ipsum laborum praesentium accusamus vitae odio dolor at. Natus culpa eaque, a alias quam quasi repudiandae blanditiis vitae nesciunt? Fugiat eos perspiciatis quod qui nobis, magnam repudiandae veniam autem doloribus?</p>
          </Box>

          <Box sx={{
            background:"white",
            marginTop:"30px"
          }}>
           <h3>Observation :</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde culpa facilis adipisci, ipsum repellat reprehenderit quia ut error cum minima, ex quae quod saepe maxime est perspiciatis, rerum maiores? Necessitatibus eaque provident mollitia veritatis sed quia et cum at quisquam voluptatem. Facilis dicta cumque dolorem quibusdam voluptate similique ipsam consectetur quasi repellendus perferendis voluptatum rerum sed nostrum deserunt sapiente, ducimus architecto. Maxime illo nihil voluptates qui inventore distinctio corporis tempora. Animi, ab tempore? Nostrum distinctio quaerat atque deserunt eum eaque, quo repudiandae quos aperiam! Consequatur, voluptate? Adipisci quis reprehenderit, repellendus, saepe aut tempora sint, odit sequi similique et incidunt ipsa autem minima. Esse dolorem corporis facilis veniam excepturi similique magni nisi harum aperiam delectus labore rem magnam, accusantium consequatur, voluptatum ipsum laborum praesentium accusamus vitae odio dolor at. Natus culpa eaque, a alias quam quasi repudiandae blanditiis vitae nesciunt? Fugiat eos perspiciatis quod qui nobis, magnam repudiandae veniam autem doloribus?</p>
          </Box>
         </Box>
      
      
    </Box>
        
        </div>
      </section>
    </>
  )
}
export default Ambulatoire_detail



