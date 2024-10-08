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
import { useState,useEffect } from 'react'
import axios from 'axios';
import  {toast} from 'react-hot-toast';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext} from 'react'
import { DossierContext } from '../../../../DossierContext.jsx'
import Dossier from '../../Dossier.jsx'
import Icon from '../../Icon.jsx'











function TblDossierConsultation() {

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
  const { setDossier } = useContext(DossierContext);
const [data,setDatas]=useState([])

  const get_dossiers_consultation = () => {
    axios.get(`${BASE_URL}/get_consultation_dossier`)
      .then(({ data }) => {
        setDatas(data.data || []); 
      })
      .catch((err) => {
        console.log(err);
        toast.error("Il y a une erreur");
      });
  };

useEffect(()=>{
 get_dossiers_consultation()
},[])






const deleteEntree = (model) => {
  axios.delete(`${BASE_URL}/delete_dossier_consultation/${model.id}`)
    .then(({ data }) => {
      setDatas(data.data || []); // Assurer que data.data est un tableau
      get_dossiers_consultation()
    })
    .catch((err) => {
      console.log(err);
      toast.error("Il y a une erreur");
    });
};




  const navigate = useNavigate()
  const handledetail=(dat)=>{
        // const location = useLocation();
        navigate("/detaildossier", { state: { detailData: dat.id } });
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
          <div className='menus'>
              <Dashboard />
              <Dossier/>
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
               <nav> <p>{profil.nom}</p></nav>
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
          {data.map((dat,key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data[0]?.id}
              </TableCell>
              <TableCell >{dat.nom_patient}</TableCell>
              <TableCell >{dat.date_entre}</TableCell>
              <TableCell sx={{color:"red"}}>En attente...</TableCell>
              <TableCell align="right">
             <Button sx={{
                border:"1px solid rgb(201, 199, 199)",
                color:"black"
              }}   onClick={()=>handledetail(dat)}>Details</Button>
               <Button size="small" variant="outlined" color="error" startIcon={<DeleteIcon />}  onClick={() => deleteEntree(dat)}>Sup</Button>
                
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
export default TblDossierConsultation






