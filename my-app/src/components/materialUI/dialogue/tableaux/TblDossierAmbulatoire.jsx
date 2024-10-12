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
import Dossier from '../../Dossier.jsx'
import { useState,useEffect } from 'react'
import axios from 'axios';
import  {toast} from 'react-hot-toast';
import DeleteIcon from '@mui/icons-material/Delete';
import Icon from '../../Icon.jsx'
import Ambulant from '../../Ambulant.jsx'
import Hospital from '../../Hospital.jsx'
import RendezVous from '../../RendezVous.jsx'







function TblDossierAmbulatoire() {
    // profil connected
    const [profil,setprofil]= useState([])
    const getUserData = () => {
     const INFO_Utilisateur_from_localStorage = JSON.parse(localStorage.getItem('Utilisateur'));
     setprofil(INFO_Utilisateur_from_localStorage);
   }
   
   useEffect(()=>{
     getUserData()
     
     },[])
  
  const navigate = useNavigate()
  const handledetail=(dat)=>{
   
    navigate("/detaildossier", { state: { detailData: dat.id } });
  }



  const [datas,setDatas]= useState([])
  const BASE_URL = import.meta.env.VITE_API_URL;

 // get dossier_labo route
const get_laboratoire_dossier = () => {
  axios.get(`${BASE_URL}/get_ambulatoires`)
    .then(({ data }) => {
      setDatas(data.data || []); 
    })
    .catch((err) => {
      console.log(err);
      toast.error("Il y a une erreur");
    });
};

useEffect(()=>{
  get_laboratoire_dossier()
},[])



 // delete  route
 const deleteEntree = (model) => {
  axios.delete(`${BASE_URL}/delete_ambulatoires/${model.id}`)
    .then(({ data }) => {
      setDatas(data.data || []); // Assurer que data.data est un tableau
      get_laboratoire_dossier()
    })
    .catch((err) => {
      console.log(err);
      toast.error("Il y a une erreur");
    });
};












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
               <nav> <p> {profil.nom} </p></nav>
               <nav><Icon /></nav>
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
          <Typography variant='h5'>Dossiers des patients ambulants</Typography>
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
        {datas?.map((dat,index) => (
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

                <Button size="small" variant="outlined" color="error" startIcon={<DeleteIcon />}  onClick={() => deleteEntree(dat)}>Sup</Button>
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
export default TblDossierAmbulatoire






