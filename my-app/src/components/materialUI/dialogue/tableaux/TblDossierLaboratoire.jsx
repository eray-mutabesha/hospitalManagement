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
import { useState ,useEffect} from 'react'



function TblDossierLaboratoire() {
  const navigate = useNavigate()
  const handledetail=(dat)=>{
    localStorage.setItem("Dossier", JSON.stringify(dat));
    navigate("/detaildossier")
  }

  const handledossier=()=>{
    navigate("/reception")
  }

const [data,setdatas]=useState([])
const getLaboratoireData = () => {
  const INFO_Utilisateur_from_localStorage = JSON.parse(localStorage.getItem('Laboratoire'));
  setdatas(INFO_Utilisateur_from_localStorage);
}

useEffect(()=>{
  getLaboratoireData()
  },[])


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
          <Typography variant='h5'>Dossiers des patients a faire passer au labo</Typography>
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
        {data.map((dat,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {dat.id}
              </TableCell>
              <TableCell >{dat.nom_patient}</TableCell>
              <TableCell >{dat.date_entre}</TableCell>
              <TableCell sx={{color:"red"}}>En attente...</TableCell>
              <TableCell align="right" sx={{display:"flex",gap:"10px"}}>
               
                <Button sx={{border:"1px solid rgb(201, 199, 199)",color:"black"}} onClick={()=>handledetail(dat)}>Details</Button>
                
                </TableCell>
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
export default TblDossierLaboratoire






