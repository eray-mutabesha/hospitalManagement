import React from 'react'
import './tbl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faEye} from '@fortawesome/free-solid-svg-icons'
import { Navigate, useNavigate } from 'react-router-dom'
import Dashboard from '../../Dashboard.jsx'
import Facturation from '../../Facturation.jsx'
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
import DeleteIcon from '@mui/icons-material/Delete';
import MedecinsForm from '../MedecinsForm.jsx'
import Reception from '../../Reception.jsx'
import Consultation from '../../Consultation.jsx'
import Ressources from '../../Resources.jsx'
import Laboratoire from '../../Laboratoire.jsx'
import OrganisationClinique from '../../OrganisationClinique.jsx'
import { useState,useEffect } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import MedecinsFormUpdt from '../MedecinsFormUpdt.jsx'
import Dossier from '../../Dossier.jsx'
import ChoixTransferClt from '../../ChoixTransferClt.jsx'
import Icon from '../../Icon.jsx'
import Ambulant from '../../Ambulant.jsx'
import Hospital from '../../Hospital.jsx'
import RendezVous from '../../RendezVous.jsx'
import Patient from '../../Patients.jsx'
import Sedeconecter from '../../Sedeconecter.jsx'


function TblMedecins() {


      // profil connected
  const [profil,setprofil]= useState([])
  const getUserData = () => {
   const INFO_Utilisateur_from_localStorage = JSON.parse(localStorage.getItem('Utilisateur'));
   setprofil(INFO_Utilisateur_from_localStorage);
 }
 
 useEffect(()=>{
   getUserData()
   
   },[])

  const BASE_URL = import.meta.env.VITE_API_URL;
  const [datas, setDatas] = useState([]);

  // get medecin route
  const getRDV= () => {
    axios.get(`${BASE_URL}/get_rdv_accepted`)
      .then(({ data }) => {
        setDatas(data.data || []); 
      })
      .catch((err) => {
        console.log(err);
        toast.error("Il y a une erreur");
      });
  };

  useEffect(() => {
    getRDV();
  }, []);





// delete medecin route
  const deleteEntree = (model) => {
    axios.delete(`${BASE_URL}/delete_rdv_accepted/${model.id}`)
      .then(({ data }) => {
        setDatas(data.data || []); // Assurer que data.data est un tableau
        getRDV();
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
                <nav id='deconection'> <Sedeconecter/> </nav>
              <Dashboard />
              <Patient/>
              <Dossier/>
             <nav id='personaliser'><Reception/></nav>
             
              <Parametre/>
              </div>):profil.service == "Consultation"? (
                        <div className='menus'>
                       <nav id='deconection'> <Sedeconecter/> </nav>
                        <Dashboard />
                        <Consultation/>
                       <nav id='personaliser'><RendezVous/></nav> 
                        <Parametre/>
                       
                       </div>
              ) : profil.service == "Laboratoire"? (
                <div className='menus'>
                  <nav id='deconection'> <Sedeconecter/> </nav>
                <Dashboard />
                <nav id='personaliser'><Laboratoire/></nav>
                <Parametre/>
               </div>
              ): profil.service == "Hospitalisation"? (
                <div className='menus'>
                  <nav id='deconection'> <Sedeconecter/> </nav>
                <Dashboard />
                <nav id='personaliser'><Hospital/></nav>
                <Parametre/>
               </div>
              ) : profil.service == "Ambulatoire"? (
                <div className='menus'>
                  <nav id='deconection'> <Sedeconecter/> </nav>
                <Dashboard />
                <nav id='personaliser'><Ambulant/></nav>
                <Parametre/>
               </div>
              ):null

          }
        </div>
  
        <div className='div_two'  style={{ background:"rgba(231, 230, 230, 0.301)",}}> 
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
               <nav> <p>{profil.nom}</p></nav>
               <nav><Icon /></nav>
              </div>
           </div>
          <div style={{
            margin:"10px",
            marginTop:"100px"
          }}>

        
        <Box sx={{
          display:"grid",
          alignItems:"center",
          width:"100%",
          marginLeft:"auto",
          marginRight:"auto",
          marginTop:"50px"
        }}>
          <Typography variant='h5'>Tout les Rendez-vous prevus</Typography>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 950 ,textAlign:"left"}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell>#</TableCell>
            <TableCell >NOM</TableCell>
            <TableCell >DATE</TableCell>
            <TableCell >GENRE</TableCell>
            <TableCell >AGE</TableCell>
            <TableCell >TELEPHONE</TableCell>
            <TableCell >ADRESSE</TableCell>
            <TableCell >ACTION</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((dat,index) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              key={index}
            >
              <TableCell component="th" scope="row">
                {dat.id}
              </TableCell>
              <TableCell >{dat.nom_patient}</TableCell>
              <TableCell >{dat.date_entre}</TableCell>
              <TableCell >{dat.sexe}</TableCell>
              <TableCell >{dat.age}</TableCell>
              <TableCell >{dat.telephone}</TableCell>
              <TableCell >{dat.adresse}</TableCell>
              <TableCell align="right">
              <Box sx={{
                display:"flex",
                gap:"10px",
              }}>
               
                
                <Button size="small" variant="outlined" onClick={() => deleteEntree(dat)}>TERMINER</Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </div>
        </div>
      </section>
    </>
  )}
 

export default TblMedecins













