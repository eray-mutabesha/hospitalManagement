import React, { useState } from 'react'
import './tbl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faEye} from '@fortawesome/free-solid-svg-icons'
import { Navigate, useNavigate } from 'react-router-dom'
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
import PersonelForm from '../PersonelForm.jsx'
import Reception from '../../Reception.jsx'
import Ressources from '../../Resources.jsx'
import Consultation from '../../Consultation.jsx'
import Laboratoire from '../../Laboratoire.jsx'
import OrganisationClinique from '../../OrganisationClinique.jsx'
import Factutation from '../../Facturation.jsx'
import toast from 'react-hot-toast';
import axios from 'axios';
import {useEffect } from 'react'
import PersonelFormUpdt from '../PersonelFormUpdt.jsx'
import Dossier from '../../Dossier.jsx'
import Icon from '../../Icon.jsx'


function TblPersonel() {

    // profil connected
    const [profil,setprofil]= useState([])
    const getUserData = () => {
     const INFO_Utilisateur_from_localStorage = JSON.parse(localStorage.getItem('Utilisateur'));
     setprofil(INFO_Utilisateur_from_localStorage);
   }
   
   useEffect(()=>{
     getUserData()
     
     },[])
  
const [datas,setDatas]=useState([])
const BASE_URL = import.meta.env.VITE_API_URL;

const [singleData,setSingleData] = useState([])
const [FormVisible,setFormVisible] =useState(false)


// get patient route
const get_personel = () => {
  axios.get(`${BASE_URL}/get_personel`)
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
  axios.delete(`${BASE_URL}/delete_personel/${model.id}`)
    .then(({ data }) => {
      setDatas(data.data || []); // Assurer que data.data est un tableau
      get_personel();
    })
    .catch((err) => {
      console.log(err);
      toast.error("Il y a une erreur");
    });
};



useEffect(() => {
get_personel();
}, []);




const handleUpdate = () => {
  setFormVisible(false);
  get_personel();
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
              <Dossier/>
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
               <nav> <p> {profil.nom}</p></nav>
               <nav><Icon/></nav>
              </div>
           </div>
          <div style={{
            margin:"10px",
            marginTop:"100px"
          }}>
          
           
           <PersonelForm/>
        
        <Box sx={{
          display:"grid",
          alignItems:"center",
          width:"100%",
          marginLeft:"auto",
          marginRight:"auto",
          marginTop:"50px"
        }}>
          <Typography variant='h5'>Tout les Personnels</Typography>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 950 ,textAlign:"left"}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell>#</TableCell>
            <TableCell >NOM</TableCell>
            <TableCell >NOM DE FAMILLE</TableCell>
            <TableCell >FONCTION</TableCell>
            <TableCell >SPECIALISATION</TableCell>
            <TableCell >TELEPHONE</TableCell>
            <TableCell >MEIL</TableCell>
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
              <TableCell >{dat.nom}</TableCell>
              <TableCell >{dat.nom_famille}</TableCell>
              <TableCell >{dat.fonction}</TableCell>
              <TableCell >{dat.specialisation}</TableCell>
              <TableCell >{dat.telephone}</TableCell>
              <TableCell >{dat.email}</TableCell>
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
    return <PersonelFormUpdt singleData={singleData}  onUpdate={handleUpdate}/>
  }
}
export default TblPersonel






