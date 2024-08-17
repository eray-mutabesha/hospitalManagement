import React from 'react'
import './tbl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faEye} from '@fortawesome/free-solid-svg-icons'
import { Navigate, useNavigate } from 'react-router-dom'
import Medecins from '../../Medecins.jsx'
import Dashboard from '../../Dashboard.jsx'
import Departement from '../../Departement.jsx'
import Reception from '../../Reception.jsx'
import Facturation from '../../Facturation.jsx'
import Medicament from '../../Medicament.jsx'
import Parametre from '../../Parametre.jsx'
import Patients from '../../Patients.jsx'
import Personnel from '../../Personnel.jsx'
import { Box, Button, Typography } from '@mui/material'
import { faBell,faCaretDown,faCheck,faXmark,faMagnifyingGlass,faListCheck,faUserDoctor,faStethoscope,faCommentsDollar,faChevronDown} from '@fortawesome/free-solid-svg-icons'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DossierForm from '../DossierForm.jsx'
import Consultation from '../../Consultation.jsx'





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


function TblDossier() {
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
        <div>
              <Dashboard/>
              <Medicament/>
              <Reception/>
              <Medecins/>
              <Patients/>
              <Consultation/>
              <Personnel/>
              <Facturation/>
              <Departement/>
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
          marginTop:"100px",
          display:"grid",
          gap:"50px",
          width:"950px",
          marginLeft:"auto",
          marginRight:"auto",
          }}>
          

          <Button variant="contained" color="error"  sx={{
            width:"fit-content",
            
          }}   onClick={handledossier}>
            Retour
           </Button>
         
        <Box sx={{
          display:"grid",
          alignItems:"center",
          width:"950px",
          
          
        }}>
          <Typography variant='h5'>Tout les dossiers des patients</Typography>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 950 ,textAlign:"left"}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell>#</TableCell>
            <TableCell >PATIENT</TableCell>
            <TableCell >DATE D'ARRIVER</TableCell>
            <TableCell >STATUT</TableCell>
            <TableCell align="right">ACTION</TableCell>
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
export default TblDossier






