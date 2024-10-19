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
import DeleteIcon from '@mui/icons-material/Delete';
import Reception from '../../Reception.jsx'
import Consultation from '../../Consultation.jsx'
import Ressources from '../../Resources.jsx'
import MedicamentForm from '../MedicamentForm.jsx'
import Laboratoire from '../../Laboratoire.jsx'
import OrganisationClinique from '../../OrganisationClinique.jsx'
import Factutation from '../../Facturation.jsx'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState,useEffect } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import MedicamentFormUpdt from './MedicamentFormUpdt.jsx'
import Dossier from '../../Dossier.jsx'
import Icon from '../../Icon.jsx'
import Ambulant from '../../Ambulant.jsx'
import Hospital from '../../Hospital.jsx'
import RendezVous from '../../RendezVous.jsx'
import Sedeconecter from '../../Sedeconecter.jsx'










function TblMedicamentPerfusion() {

  const [singleData,setSingleData] = useState([])
  const [FormVisible,setFormVisible] =useState(false)

  const BASE_URL = import.meta.env.VITE_API_URL;
  const [datas, setDatas] = useState([]);
  const navigate = useNavigate()


    // profil connected
    const [profil,setprofil]= useState([])
    const getUserData = () => {
     const INFO_Utilisateur_from_localStorage = JSON.parse(localStorage.getItem('Utilisateur'));
     setprofil(INFO_Utilisateur_from_localStorage);
   }
   
   useEffect(()=>{
     getUserData()
     
     },[])
  

  // get medicament route
  const get_medicament_injectables = () => {
    axios.get(`${BASE_URL}/get_medicament_perfusions`)
      .then(({ data }) => {
        setDatas(data.data || []); 
      })
      .catch((err) => {
        console.log(err);
        toast.error("Il y a une erreur");
      });
  };



  // delete medecin route
  const deleteEntree = (model) => {
    axios.delete(`${BASE_URL}/delete_medicament_perfusions/${model.id}`)
      .then(({ data }) => {
        setDatas(data.data || []); // Assurer que data.data est un tableau
        get_medicament_injectables();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Il y a une erreur");
      });
  };


  useEffect(() => {
    get_medicament_injectables();
  }, []);




  const fiche_de_nursing=(event, value) =>{
    navigate(`/medicament${value}`)
  }


  const handleUpdate = () => {
    setFormVisible(false);
    get_medicament_injectables();
  };
  
  const Edit_medecin=(model)=>{
    setSingleData(model)
    setFormVisible(true)
  }


  if(FormVisible == false){
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
              <Dossier/>
             <nav id='personaliser'><Reception/></nav>
             
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
                    <Dossier/>
                    <Reception/>
                    <Consultation/>
                     <Laboratoire/>
                    <OrganisationClinique/>
                    <nav id='personaliser'><Ressources/></nav>
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
               <nav> <p> {profil.nom}</p></nav>
               <nav><Icon/></nav>
              </div>
           </div>
          <div style={{
            margin:"10px",
            marginTop:"100px",
            
          }}>
          
           
           <MedicamentForm/>
        
        <Box sx={{
          display:"grid",
          alignItems:"center",
          width:"100%",
          marginLeft:"auto",
          marginRight:"auto",
          marginTop:"50px"
        }}>
           <Stack mt={5} spacing={2}>
           <Pagination count={3} color="primary" onChange={fiche_de_nursing}/>
           </Stack>


          <Typography variant='h5'>Medicament du type Perfusion</Typography>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 950 ,textAlign:"left"}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell>#</TableCell>
            <TableCell >DESIGNATION</TableCell>
            <TableCell >FORME</TableCell>
            <TableCell >DOSAGE</TableCell>
            <TableCell >DATE DE PRODUCTION</TableCell>
            <TableCell >ENTRE</TableCell>
            <TableCell >SORTIE</TableCell>
            <TableCell >SOLDE</TableCell>
            <TableCell >DATE D'EXPIRATION</TableCell>
            <TableCell >ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((dat,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {dat.id}
              </TableCell>
              <TableCell >{dat.designation}</TableCell>
              <TableCell >{dat.forme}</TableCell>
              <TableCell >{dat.dosage}</TableCell>
              <TableCell >{dat.date_entre}</TableCell>
              <TableCell >{dat.entre}</TableCell>
              <TableCell >{dat.sortie}</TableCell>
              <TableCell >{dat.solde}</TableCell>
              <TableCell >{dat.date_expiration}</TableCell>
              <TableCell align="right">
              <Box sx={{
                display:"flex",
                gap:"10px",
              }}>
               
                <Button size="small" variant="outlined" onClick={() => Edit_medecin(dat)}>Modf</Button>
                <Button size="small" variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={() => deleteEntree(dat)}>
                Sup
                </Button>
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
  else{
 return <MedicamentFormUpdt singleData={singleData}  onUpdate={handleUpdate}/>
  }
}
export default TblMedicamentPerfusion






