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
import Ressources from '../../Resources.jsx';
import Reception from '../../Reception.jsx';
import Dossier from '../../Dossier.jsx'
import Consultation from '../../Consultation.jsx';
import Laboratoire from '../../Laboratoire.jsx';
import OrganisationClinique from '../../OrganisationClinique.jsx';
import Factutation from '../../Facturation.jsx';
import { useState,useEffect, useContext } from 'react'
import  {toast} from 'react-hot-toast';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


function DetailDossier() {

  const location = useLocation();

  // Access the data from location.state
  const { detailData } = location.state || {};  // Handle undefined state

  const BASE_URL = import.meta.env.VITE_API_URL;
  const [data,setDatas]=useState([])

  const get_dossiers = () => {
    if (detailData) {
      axios.get(`${BASE_URL}/get_dossiers_id/${detailData}`)
        .then(({ data }) => {
          setDatas(data.data || []); 
        })
        .catch((err) => {
          console.log(err);
          toast.error("Il y a une erreur");
        });
    } else {
      console.log("detailData is undefined");
    }
  };
  
  
useEffect(()=>{
  get_dossiers()
},[])

console.log(data)




 const navigate = useNavigate()
 const handledossier=()=>{
  localStorage.removeItem("Dossier");
   navigate("/dossier")
 }
 const Detailpatient=()=>{
  navigate("/detailPatient")
}
const reception=()=>{
  navigate("/reception", { state: { detailData: data[0]?.id } });

}
const laboratoire=()=>{
  navigate("/Laboratoire")
}
const Detailconsultation=()=>{
  navigate("/consultation",{ state: { detailData: data[0]?.id } })
}

const hospitalisation =()=>{
  navigate("/hospitalisation")
}

const ambulatoiredetail= ()=>{
  navigate("/ambulatoire")
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
              <Consultation/>
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
          gap:"30px",
          alignItems:"center",
          margin:"20px"
        
        }}>
          {/* <Box mt={5}>
          <Button variant="contained" color="error" onClick={handledossier}>
            Retour
           </Button>
      </Box> */}



          <Box  sx={{
            display:"flex",
            justifyContent:"space-between",
            marginTop:"50px"
          }}>
          

          <Box sx={{
             border:"1px solid rgba(0, 0, 0, 0.103)",
             background:"white",
             borderRadius:"10px",
             padding:"20px"
           }}>




          <Box sx={{
            display:"grid",
            gridTemplateColumns:"auto auto auto auto",
            gap:"30px",
            background:"white",
            padding:"0px"
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
      


      <TableContainer component={Paper}>
      <Typography variant='h5'>Services parcourus par le patient</Typography>
      <Table sx={{ minWidth: 950 ,textAlign:"left"}} size="small" aria-label="a dense table">
        <TableHead   sx={{ backgroundImage:"url('moderate-aquamarine-dark-gradient-background_608506-1382.avif')",
               backgroundRepeat:"no-repeat",
               backgroundSize: "cover",
               backgroundPosition:"center",
               color:"white"}}>
          <TableRow>
            <TableCell sx={{color:"white"}}>#</TableCell>
            <TableCell sx={{color:"white"}}>SERVICES</TableCell>
            <TableCell sx={{color:"white"}}>STATUT</TableCell>
            <TableCell  align='right' sx={{color:"white"}}>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         



            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                002
              </TableCell>
              <TableCell >Reception</TableCell>
              {data[0]?.diagnostic? <TableCell sx={{color:"green"}}>Terminer</TableCell> :
              <TableCell sx={{color:"red"}}>En attente...</TableCell>}
              
              <TableCell align='right'> <Button onClick={reception} variant="outlined" color="success">
               Details
             </Button></TableCell>
            </TableRow>









            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                002
              </TableCell>
              <TableCell >Consultation</TableCell>
              {data[0]  && data[0]?.observation ? <TableCell sx={{color:"green"}}>Terminer</TableCell> :
              <TableCell sx={{color:"red"}}>En attente...</TableCell>}
              <TableCell align='right'> <Button onClick={Detailconsultation} variant="outlined"  color="success">
               Details
             </Button></TableCell>
            </TableRow>


            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                002
              </TableCell>
              <TableCell >Laboratoire</TableCell>
              <TableCell sx={{color:"blue"}}>En cours...</TableCell>
              <TableCell align='right'> <Button onClick={laboratoire} variant="outlined"  color="success">
               Details
             </Button></TableCell>
            </TableRow>






            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                002
              </TableCell>
              <TableCell >Hospitalisation</TableCell>
              <TableCell sx={{color:"red"}}>En attente</TableCell>
              <TableCell align='right'> <Button onClick={hospitalisation} variant="outlined"  color="success">
               Details
             </Button></TableCell>
            </TableRow>
         



            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                002
              </TableCell>
              <TableCell >Ambulatoire</TableCell>
              <TableCell sx={{color:"red"}}>En attente</TableCell>
              <TableCell align='right'> 
                <Button onClick={ambulatoiredetail} variant="outlined"  color="success" >
               Details
             </Button></TableCell>
            </TableRow>
        </TableBody>


      </Table>
    </TableContainer>
    </Box>
        
        </div>
      </section>
      
    </>
    
  )

}
export default DetailDossier


