import React, { useEffect, useState } from 'react'
import './tbl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navigate, useNavigate } from 'react-router-dom'
import Dashboard from '../../Dashboard.jsx'
import Reception from '../../Reception.jsx'
import Dossier from '../../Dossier.jsx'
import Parametre from '../../Parametre.jsx'
import { Box, Button, Typography ,Stack} from '@mui/material'
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
import DeleteIcon from '@mui/icons-material/Delete';
import  {toast} from 'react-hot-toast';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react'
import ChoixtransferTout_les_Dossier from '../../ChoixtransferTout_les_Dossier.jsx'
import RendezVousForm from '../RendezVousForm.jsx'
import Icon from '../../Icon.jsx'
import Ambulant from '../../Ambulant.jsx'
import Hospital from '../../Hospital.jsx'
import RendezVous from '../../RendezVous.jsx'
import Patient from '../../Patients.jsx'
import Sedeconecter from '../../Sedeconecter.jsx'
import SupressionChoix from '../../SupressionChoix.jsx'


function Tout_les_dossiers() {
    // profil connected
    const [profil,setprofil]= useState([])
    const getUserData = () => {
     const INFO_Utilisateur_from_localStorage = JSON.parse(localStorage.getItem('Utilisateur'));
     setprofil(INFO_Utilisateur_from_localStorage);
   }
   
   useEffect(()=>{
     getUserData()
     
     },[])
  
  const [datas,setDatas]= useState([])
  const BASE_URL = import.meta.env.VITE_API_URL;


 // get dossier route
const get_dossiers = () => {
  axios.get(`${BASE_URL}/get_tout_les_dossiers`)
    .then(({ data }) => {
      setDatas(data.data || []); 
    })
    .catch((err) => {
      console.log(err);
      toast.error("Il y a une erreur");
    });
};


  
 // delete dossier route
const deleteEntree = (model) => {
  axios.delete(`${BASE_URL}/delete_tout_dossier/${model.id}`)
    .then(({ data }) => {
      setDatas(data.data || []); // Assurer que data.data est un tableau
      get_dossiers();
    })
    .catch((err) => {
      console.log(err);
      toast.error("Il y a une erreur");
    });
};


useEffect(() => {
  get_dossiers();
}, []);
 
 

  const navigate = useNavigate()
  const handledetail=(dat)=>{

    // const location = useLocation();
    navigate("/detaildossier", { state: { detailData: dat.id } });
 

  }

  const [searchTerm, setSearchTerm] = useState(''); // État pour la recherche
  // Filtrer les dossiers en fonction de la recherche
  const filteredDatas = datas.filter((dat) =>
    dat.nom_patient.toLowerCase().includes(searchTerm.toLowerCase()) // Filtre par nom du patient
  );


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
              <nav id='personaliser'> <Dossier/></nav>
            <Reception/>
             
              <Parametre/>
              </div>):profil.service == "Consultation"? (
                        <div className='menus'>
                          <nav id='deconection'> <Sedeconecter/> </nav>
                        <Dashboard />
                        <nav id='personaliser'><Consultation/></nav>
                        <RendezVous/>
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
              ):profil.service == "Administrateur"?(
                <div className='menus'>
                <nav id='deconection'> <Sedeconecter /> </nav>
                  <Dashboard />
                    <nav id='personaliser'> <Dossier/></nav>
                    <Reception/>
                    <Consultation/>
                    <Laboratoire/>
                    <OrganisationClinique/>
                    <Ressources/>
                    <Parametre/>
                    
                </div>
              ):null

          }
        </div>
        <div className='div_two' style={{ background:"rgba(231, 230, 230, 0.301)",}}> 
        <div className='header'>
              <div className='recherch'>
               <FontAwesomeIcon icon={faMagnifyingGlass} /> 

               <input
                type="text"
                placeholder="recherch"
                value={searchTerm} // Lier la valeur de l'input à l'état searchTerm
                onChange={(e) => setSearchTerm(e.target.value)} // Mettre à jour la recherche à chaque saisie
              />
              </div>

              <div className='administrateur'>
                <nav className='notification_icon'>
                <FontAwesomeIcon icon={faBell} />
                </nav>
               <nav>
               <img src={`http://localhost:3001${profil.image}`} alt="Profile" className='admin_photo'/>
               </nav> 
               <nav> <p> {profil.nom}</p></nav>
               <nav><Icon/></nav>
              </div>
           </div>

        <Box sx={{
          display:"grid",
          gap:"50px",
          margin:"20px",
          }}>

       <Box mt={5} sx={{display:"flex",gap:"75%"}}>
       <DossierForm/>
       <RendezVousForm/>
       </Box>
          
         
        <Box sx={{
          display:"grid",
          alignItems:"center",
         
          
          
        }}>
          <Typography variant='h5'>TOUT LES DOSSIERS</Typography>



        <TableContainer component={Paper} sx={{marginTop:"40px"}}>
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
                                {/* Si aucun élément n'est trouvé, afficher un message */}
                                {filteredDatas.length === 0 ? (
                <Typography variant="body1" sx={{ textAlign: "center", marginTop: "20px" ,color:"red"}}>
                  Aucun dossier trouvé pour "{searchTerm}"
                </Typography>
              ) : (
        <TableBody>
          {filteredDatas.map((dat,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {index + 1} 
              </TableCell>
              <TableCell >{dat.nom_patient}</TableCell>
              <TableCell >{dat.date_entre}</TableCell>
              <TableCell sx={{color:"red"}}>En attente...</TableCell>
              <TableCell align="right" sx={{display:"flex",gap:"10px"}}>
                {/* <Button size="small" variant="outlined" color="error" startIcon={<DeleteIcon />}  onClick={() => deleteEntree(dat)}>Sup</Button> */}
                <SupressionChoix deleteEntree={() => deleteEntree(dat)}/>
                <Button sx={{border:"1px solid rgb(201, 199, 199)",color:"black"}} onClick={()=>handledetail(dat)}>Details</Button>
                <ChoixtransferTout_les_Dossier  dat={dat}/>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>)}
      </Table>
    </TableContainer>
    </Box>
    </Box>  
        </div>
        
      </section>
      
    </>
    
  )
  
}

export default Tout_les_dossiers






