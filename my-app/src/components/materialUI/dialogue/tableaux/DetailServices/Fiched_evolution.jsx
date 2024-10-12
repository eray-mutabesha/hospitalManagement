import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faEye} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'
import { faBell,faCaretDown,faCheck,faXmark,faMagnifyingGlass,faListCheck,faUserDoctor,faStethoscope,faCommentsDollar,faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Ressources from '../../../Resources.jsx';
import Reception from '../../../Reception.jsx';
import Consultation from '../../../Consultation.jsx';
import Laboratoire from '../../../Laboratoire.jsx';
import OrganisationClinique from '../../../OrganisationClinique.jsx';
import Factutation from '../../../Facturation.jsx';
import Dashboard from '../../../Dashboard.jsx'
import Parametre from '../../../Parametre.jsx'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Dossier from '../../../Dossier';
import Ambulant from '../../../Ambulant.jsx'
import Hospital from '../../../Hospital.jsx'
import RendezVous from '../../../RendezVous.jsx'

















function Fiched_evolution() {


 const navigate = useNavigate()
 const handledossier=()=>{
   navigate("/detaildossier")
 }
 const fiche_de_nursing=(event, value) =>{
  navigate(`/hospitalisationdetail${value}`)
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
          {
            profil.service == "Reception"? (
              <div className='menus'>
              <Dashboard />
              <Dossier/>
             <nav id='personaliser'><Reception/></nav>
             
              <Parametre/>
              </div>):profil.service == "Consultation"? (
                        <div className='menus'>
                        <Dashboard />
                        <nav id='personaliser'><Consultation/></nav>
                        <RendezVous/>
                        <Parametre/>
                       
                       </div>
              ) : profil.service == "Laboratoire"? (
                <div className='menus'>
                <Dashboard />
                <nav id='personaliser'><Laboratoire/></nav>
                <Parametre/>
               </div>
              ): profil.service == "Hospitalisation"? (
                <div className='menus'>
                <Dashboard />
                <nav id='personaliser'><Hospital/></nav>
                <Parametre/>
               </div>
              ) : profil.service == "Ambulatoire"? (
                <div className='menus'>
                <Dashboard />
                <nav id='personaliser'><Ambulant/></nav>
                <Parametre/>
               </div>
              ):null

          }
        </div>
        <div className='div_two'> 
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

           <Stack mt={5} spacing={2}>
           <Pagination count={2} color="primary" onChange={fiche_de_nursing}/>
           </Stack>
      </Box>
         <Box sx={{
          background:"white",
           padding:"20px"
         }}>

          <h1>FICHE D'EVOLUTION</h1>
          <Box sx={{
            display:"grid",
            gridTemplateColumns:"auto auto auto",
            gap:"30px",
            background:"white",
            marginTop:"50px"
           
          }}>
            <h3>Nom: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>kasongo</span></h3>
            <h3>Age: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>22 ans</span></h3>
            <h3>Sexe: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>masculin</span></h3>
            <h3>Poids: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>67 kg</span></h3>
            <h3>Adresse: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>Goma/Q.ndosho/AV.ngungu</span></h3>
            <h3>Telephone: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>078374848</span></h3>
          </Box>
        
         
<Box  sx={{
 overflowX:"auto",
 width:"950px",
 marginTop:"80px"
}}>
          <TableContainer component={Paper}>
      <Table sx={{ 
        minWidth: 1200 ,
        textAlign:"left",
       

        }} size="small" aria-label="a dense table">
        <TableHead  >
          <TableRow >
            <TableCell sx={{ width: "100px"}}>TO</TableCell>
            <TableCell sx={{ width: "100px"}}>TA</TableCell>
            <TableCell sx={{ width: "100px"}}>DATE</TableCell>
            <TableCell sx={{ width: "100px"}}>TRAITEMENT</TableCell>
            <TableCell sx={{ width: "100px"}}>OBSERVATION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell > lorem lorem lorem</TableCell>
              <TableCell > lorem lorem lorem</TableCell>
              <TableCell > lorem lorem lorem</TableCell>
              <TableCell > lorem lorem  lorem lorem lorem
              lorem lorem lorem
              lorem lorem lorem
              lorem lorem lorem
              </TableCell>
              <TableCell > lorem lorem  lorem lorem lorem
              lorem lorem lorem
              lorem lorem lorem
              lorem lorem lorem
              </TableCell>

              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </Box>


         
    </Box>
    
        </div>
      </section>
    </>
  )
}
export default  Fiched_evolution
