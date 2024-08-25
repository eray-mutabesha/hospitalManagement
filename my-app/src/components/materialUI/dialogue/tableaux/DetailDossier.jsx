import React from 'react'
import './tbl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faEye} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Dashboard from '../../Dashboard.jsx'
import Parametre from '../../Parametre.jsx'
import { Box, Button, Typography } from '@mui/material'
import { faBell,faCaretDown,faCheck,faXmark,faMagnifyingGlass,faListCheck,faUserDoctor,faStethoscope,faCommentsDollar,faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Ressources from '../../Resources.jsx';
import Reception from '../../Reception.jsx';
import Consultation from '../../Consultation.jsx';
import Laboratoire from '../../Laboratoire.jsx';
import OrganisationClinique from '../../OrganisationClinique.jsx';
import Factutation from '../../Facturation.jsx';


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


function DetailDossier() {
  

 const navigate = useNavigate()
 const handledossier=()=>{
   navigate("/dossier")
 }
 const Detailpatient=()=>{
  navigate("/detailPatient")
}
const reception=()=>{
  navigate("/receptiondetail")
}
const laboratoire=()=>{
  navigate("/laboratoiredetail")
}
const Detailconsultation=()=>{
  navigate("/consultationdetail")
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
          display:"grid",
          gap:"30px",
          alignItems:"center",
          width:"950px",
          marginLeft:"auto",
          marginRight:"auto",
          marginTop:"80px",
        
        }}>
          <Box>
          <Button variant="contained" color="error" onClick={handledossier}>
            Retour
           </Button>
           {/* ......................................................... */}
      </Box>
          <Box  sx={{
            display:"flex",
            justifyContent:"space-between"
          }}>
          
          <Box sx={{
     
             width:"600px",
             height:"200px",
             border:"1px solid rgba(0, 0, 0, 0.103)",
             background:"white",
             borderRadius:"10px",
             
            
           }}>

            <Box sx={{
              display:"grid",
              gridTemplateColumns:"auto auto auto",
              
              justifyContent:"space-around",
              margin:"40px ",
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
             width:"300px",
             height:"200px",
             borderRadius:"10px",
             display:"flex",
             alignItems:"center",
             justifyContent:"center"
            }}>
             
              <img src="/public/profilphoto.png" alt="" style={{
                width:"150px",
                height:"150px",
                borderRadius:"50%"
              }}/>
            
            </Box>
           </Box>
      


      <TableContainer component={Paper}>
      <Typography variant='h5'>Services parcourus par le patient</Typography>
      <Table sx={{ minWidth: 950 ,textAlign:"left"}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell >SERVICES</TableCell>
            <TableCell >STATUT</TableCell>
            <TableCell  align='right'>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         



            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                002
              </TableCell>
              <TableCell >Reception</TableCell>
              <TableCell sx={{color:"green"}}>Terminer</TableCell>
              <TableCell align='right'> <Button onClick={reception} variant="contained" color="success">
               Details
             </Button></TableCell>
            </TableRow>




            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                002
              </TableCell>
              <TableCell >Laboratoire</TableCell>
              <TableCell sx={{color:"blue"}}>En cours...</TableCell>
              <TableCell align='right'> <Button onClick={laboratoire} variant="contained" color="success">
               Details
             </Button></TableCell>
            </TableRow>




            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                002
              </TableCell>
              <TableCell >Consultation</TableCell>
              <TableCell sx={{color:"red"}}>En attente</TableCell>
              <TableCell align='right'> <Button onClick={Detailconsultation} variant="contained" color="success">
               Details
             </Button></TableCell>
            </TableRow>




            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                002
              </TableCell>
              <TableCell >Embulatoire</TableCell>
              <TableCell sx={{color:"red"}}>En attente</TableCell>
              <TableCell align='right'> <Button onClick={Detailpatient} variant="contained" color="success">
               Details
             </Button></TableCell>
            </TableRow>
         



            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                002
              </TableCell>
              <TableCell >Consultation</TableCell>
              <TableCell sx={{color:"red"}}>En attente</TableCell>
              <TableCell align='right'> 
                <Button onClick={Detailpatient} variant="contained" color="success" >
               Details
             </Button></TableCell>
            </TableRow>
        </TableBody>


      </Table>
    </TableContainer>
    </Box>
        
        </div>
      </section>
    </>
  )
}
export default DetailDossier


