import React from 'react'
import './tbl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faEye} from '@fortawesome/free-solid-svg-icons'
import { Navigate, useNavigate } from 'react-router-dom'
import Dashboard from '../../Dashboard.jsx'
import Facturation from '../../Laboratoire.jsx'
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





function TblMedecins() {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const [datas, setDatas] = useState([]);
  
  const navigate = useNavigate()
  const handledetail=()=>{
    navigate("/detaildossier")
  }

  const getMedecins = () => {
    axios.get(`${BASE_URL}/get_medecins_data`)
      .then(({ data }) => {
        console.log(data);
        setDatas(data.data || []); 
      })
      .catch((err) => {
        console.log(err);
        toast.error("Il y a une erreur");
      });
  };

  useEffect(() => {
    getMedecins();
  }, []);


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
              <Laboratoire/>
              <OrganisationClinique/>
              <Facturation/>
              <nav id='personaliser'> <Ressources/></nav>
              <Parametre/>
          </div>
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
               <nav> <p> Dr jonathan kasongo </p></nav>
               <nav><FontAwesomeIcon icon={faCaretDown} /></nav>
              </div>
           </div>
          <div style={{
            margin:"10px",
            marginTop:"100px"
          }}>
          
           
           <MedecinsForm/>
        
        <Box sx={{
          display:"grid",
          alignItems:"center",
          width:"100%",
          marginLeft:"auto",
          marginRight:"auto",
          marginTop:"50px"
        }}>
          <Typography variant='h5'>Tout les Medecins</Typography>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 950 ,textAlign:"left"}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell>#</TableCell>
            <TableCell >NOM</TableCell>
            <TableCell >DATE D'ARRIVER</TableCell>
            <TableCell >SEXE</TableCell>
            <TableCell >SPECIALISATION</TableCell>
            <TableCell >TELEPHONE</TableCell>
            <TableCell >MEIL</TableCell>
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
              <TableCell >{dat.nom}</TableCell>
              <TableCell >{dat.date_arrive}</TableCell>
              <TableCell >{dat.sexe}</TableCell>
              <TableCell >{dat.specialisation}</TableCell>
              <TableCell >{dat.telephone}</TableCell>
              <TableCell >{dat.email}</TableCell>
              <TableCell align="right">
              <Box sx={{
                display:"flex",
                gap:"10px",
              }}>
               
                <Button size="small" variant="outlined">Modf</Button>
                <Button size="small" variant="outlined" color="error" startIcon={<DeleteIcon />}>
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
  )
}
export default TblMedecins






