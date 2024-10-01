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
import  {toast} from 'react-hot-toast';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useState,useEffect,useContext } from 'react';













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


function Hospitalisation_detail() {
  

 const navigate = useNavigate()

 const handledossier=()=>{
   navigate("/hospitalisation",{ state: { detailData: data[0]?.id } })
 }
 const fiche_de_nursing=(event, value) =>{
  navigate(`/hospitalisationdetail${value}`)
}

const reception=()=>{
  navigate("/receptiondetail")
}

 





const BASE_URL = import.meta.env.VITE_API_URL;
// Access the data from location.state
const location = useLocation();
const { detailData } = location.state || {};  // Handle undefined state
const [data,setDatas]=useState([]);




const get_dossiers = () => {
axios.get(`${BASE_URL}/get_tout_les_dossiers_id/${detailData}`)
  .then(({ data }) => {
    setDatas(data.data || []); 
  })
  .catch((err) => {
    console.log(err);
    toast.error("Il y a une erreur");
  });
};

useEffect(()=>{
get_dossiers()

},[])




const [nursing,setNursing]=useState([])


const get_fiche_de_nursing = () => {
  axios.get(`${BASE_URL}/get_fiche_de_nursing/${detailData}`)
    .then(({ data }) => {
      setNursing(data.data || []); 
    })
    .catch((err) => {
      console.log(err);
      toast.error("Il y a une erreur");
    });
};

useEffect(()=>{
  get_fiche_de_nursing()

},[])




console.log(nursing)





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
              <Consultation/>
              <Laboratoire/>
              <nav id='personaliser'> <OrganisationClinique/></nav>
              <Factutation/>
              <Ressources/>
              <Parametre/>
          </div>
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
          margin:"20px"
        
        }}>


          <Box mt={5} >
          <Button variant="contained" color="error" onClick={handledossier}>
            Retour
           </Button>

           <Stack mt={5} spacing={2}>
           <Pagination count={2} color="primary" onChange={fiche_de_nursing}/>
           </Stack>

          </Box>



         <Box sx={{
          background:"white",
           padding:"20px",
           borderRadius:"10px",
           border:"1px solid rgba(0, 0, 0, 0.103)",
         }}>

          <h1>FICHE DE NURSING</h1>
         

          <Box sx={{
                marginTop:"10px",
                display:"flex",
                justifyContent:"space-between"
              }}>
              <Box sx={{
            display:"grid",
            gridTemplateColumns:"auto auto auto auto",
            gap:"30px",
            background:"white",
            
          }}>
            <h3>Nom: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.nom_patient}</span></h3>
            <h3>Age: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.age}</span></h3>
            <h3>Sexe: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.sexe}</span></h3>
            <h3>Poids: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.poids}</span></h3>
            <h3>TO: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.to_to}</span></h3>
            <h3>TA: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.ta_ta}</span></h3>
            <h3>Adresse: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.adresse}</span></h3>
            <h3>Telephone: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.telephone}</span></h3>
          </Box>
     

          <Box sx={{
              
              border:"1px solid rgb(201, 199, 199)",
               backgroundImage:"url('moderate-aquamarine-dark-gradient-background_608506-1382.avif')",
              backgroundRepeat:"no-repeat",
              backgroundSize: "cover",
             backgroundPosition:"center",
             width:"150px",
             height:"150px",
             borderRadius:"10px",
             display:"flex",
             alignItems:"center",
             justifyContent:"center"
            }}>
             
              <img src="/public/profilphoto.png" alt="" style={{
                width:"100px",
                height:"100px",
                borderRadius:"50%"
              }}/>
            
            </Box>
            </Box>
        
         
<Box  sx={{
 overflowX:"auto",
 marginTop:"80px"
}}>
          <TableContainer component={Paper}>
      <Table sx={{ 
        textAlign:"left",
       

        }} size="small" aria-label="a dense table">
        <TableHead  sx={{ backgroundImage:"url('moderate-aquamarine-dark-gradient-background_608506-1382.avif')",
               backgroundRepeat:"no-repeat",
               backgroundSize: "cover",
               backgroundPosition:"center",
               color:"white"}}>
          <TableRow >
            <TableCell sx={{ width: "100px",color:"white"}}>Diagnostic de prosomption</TableCell>
            <TableCell sx={{ width: "100px",color:"white"}}>Operation prevue</TableCell>
            <TableCell sx={{ width: "100px",color:"white"}}>Pouls</TableCell>
            <TableCell sx={{ width: "100px",color:"white"}}>Respiration</TableCell>
            <TableCell sx={{ width: "100px",color:"white"}}>Medicament per OS</TableCell>
            <TableCell sx={{ width: "100px",color:"white"}}>Injectable</TableCell>
            <TableCell sx={{ width: "100px",color:"white"}}>Perfusion</TableCell>
            <TableCell sx={{ width: "100px",color:"white"}}>Autre</TableCell>
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
              <TableCell > lorem lorem lorem</TableCell>
              <TableCell > lorem lorem lorem</TableCell>
              <TableCell > lorem lorem lorem</TableCell>
              <TableCell > lorem lorem lorem</TableCell>
              <TableCell > lorem lorem lorem</TableCell>

              
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
export default Hospitalisation_detail


