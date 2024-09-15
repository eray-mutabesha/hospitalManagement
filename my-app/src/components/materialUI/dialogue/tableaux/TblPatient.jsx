import React from 'react'
import './tbl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faEye} from '@fortawesome/free-solid-svg-icons'
import { Navigate, useNavigate } from 'react-router-dom'
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
import PatientForm from '../PatientForm.jsx';
import Reception from '../../Reception.jsx';
import Consultation from '../../Consultation.jsx';
import Ressources from '../../Resources.jsx';
import Dashboard from '../../Dashboard.jsx';
import Laboratoire from '../../Laboratoire.jsx';
import OrganisationClinique from '../../OrganisationClinique.jsx';
import Factutation from '../../Facturation.jsx';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useState,useEffect } from 'react'
import PatientFormUpdt from '../PatientFormUpdt.jsx'


function TblPatient() {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const [datas, setDatas] = useState([]);

  const [singleData,setSingleData] = useState([])
  const [FormVisible,setFormVisible] =useState(false)
  

  // get patient route
  const get_patient = () => {
    axios.get(`${BASE_URL}/get_patient`)
      .then(({ data }) => {
        setDatas(data.data || []); 
      })
      .catch((err) => {
        console.log(err);
        toast.error("Il y a une erreur");
      });
  };

  



// delete patient route
const deleteEntree = (model) => {
  axios.delete(`${BASE_URL}/delete_patient/${model.id}`)
    .then(({ data }) => {
      setDatas(data.data || []); // Assurer que data.data est un tableau
      get_patient();
    })
    .catch((err) => {
      console.log(err);
      toast.error("Il y a une erreur");
    });
};


useEffect(() => {
  get_patient();
}, []);



const handleUpdate = () => {
  setFormVisible(false);
  get_patient();
};

const Edit_patient=(model)=>{
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
          <div className='menus'>
              <Dashboard />
              <Reception/>
              <Consultation/>
              <Laboratoire/>
              <OrganisationClinique/>
              <Factutation/>
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
          
           
           <PatientForm/>
        
        <Box sx={{
          display:"grid",
          alignItems:"center",
          width:"100%",
          marginLeft:"auto",
          marginRight:"auto",
          marginTop:"50px"
        }}>
          <Typography variant='h5'>Tout les Patient</Typography>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 950 ,textAlign:"left"}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell>#</TableCell>
            <TableCell >NOM</TableCell>
            <TableCell >POST NOM</TableCell>
            <TableCell >AGE</TableCell>
            <TableCell >GENRE</TableCell>
            <TableCell >TELEPHONE</TableCell>
            <TableCell >ADRESSE</TableCell>
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
                001
              </TableCell>
              <TableCell >{dat.nom}</TableCell>
              <TableCell >{dat.post_nom}</TableCell>
              <TableCell >{dat.age}</TableCell>
              <TableCell >{dat.sexe}</TableCell>
              <TableCell >{dat.telephone}</TableCell>
              <TableCell >{dat.adresse}</TableCell>
              <TableCell align="right">
              <Box sx={{
                display:"flex",
                gap:"10px",
              }}>
               
                <Button size="small" variant="outlined" onClick={() => Edit_patient(dat)}>Modf</Button>
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
    return <PatientFormUpdt singleData={singleData}  onUpdate={handleUpdate}/>
  }
}
export default TblPatient






