import React from 'react'
import './tbl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navigate, useNavigate } from 'react-router-dom'
import Dashboard from '../../Dashboard.jsx'
import Reception from '../../Reception.jsx'
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
import Consultation from '../../Consultation.jsx'
import Ressources from '../../Resources.jsx'
import Laboratoire from '../../Laboratoire.jsx'
import OrganisationClinique from '../../OrganisationClinique.jsx'
import Factutation from '../../Facturation.jsx'
import DossierForm from '../DossierForm.jsx'



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


function TblDossierConsultation() {
  const navigate = useNavigate()
  const handledetail=()=>{
    navigate("/detaildossier")
  }

  const handledossier=()=>{
    navigate("/reception")
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
          
          display:"grid",
          gap:"50px",
          margin:"20px",
          }}>
          
       <Box mt={5}>
       </Box>
          
         
        <Box sx={{
          display:"grid",
          alignItems:"center",
         
          
          
        }}>
          <Typography variant='h5'>Dossiers des patients a consulter</Typography>
        <TableContainer component={Paper}>
      <Table sx={{ textAlign:"left"}} size="small" aria-label="a dense table">
        <TableHead  
              sx={{ backgroundImage:"url('moderate-aquamarine-dark-gradient-background_608506-1382.avif')",
               backgroundRepeat:"no-repeat",
               backgroundSize: "cover",
               backgroundPosition:"center",
               color:"white"}}>
          <TableRow >
            <TableCell sx={{color:"white"}}>#</TableCell>
            <TableCell sx={{color:"white"}}>PATIENT</TableCell>
            <TableCell sx={{color:"white"}}>DATE D'ARRIVER</TableCell>
            <TableCell sx={{color:"white"}}>STATUT</TableCell>
            <TableCell align="right" sx={{color:"white"}}>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                002
              </TableCell>
              <TableCell >Katembo mwami jean</TableCell>
              <TableCell >12/04/2024</TableCell>
              <TableCell sx={{color:"red"}}>En attente...</TableCell>
              <TableCell align="right"><Button sx={{
                border:"1px solid rgb(201, 199, 199)",
                color:"black"
              }}   onClick={handledetail}>Details</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </Box>  
        </div>
      </section>
    </>
  )
}
export default TblDossierConsultation






