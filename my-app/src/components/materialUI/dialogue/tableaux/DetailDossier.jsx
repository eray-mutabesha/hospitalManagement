import React from 'react'
import './tbl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faEye} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Medecins from '../../Medecins.jsx'
import Chambres from '../../Chambre.jsx'
import Dashboard from '../../Dashboard.jsx'
import Departement from '../../Departement.jsx'
import Dossier from '../../Dossier.jsx'
import Facturation from '../../Facturation.jsx'
import Medicament from '../../Medicament.jsx'
import Parametre from '../../Parametre.jsx'
import Patients from '../../Patients.jsx'
import Personnel from '../../Personnel.jsx'
import { Box, Button, Typography } from '@mui/material'
import { faBell,faCaretDown,faCheck,faXmark,faMagnifyingGlass,faListCheck,faUserDoctor,faStethoscope,faCommentsDollar,faChevronDown} from '@fortawesome/free-solid-svg-icons'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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


function DetailDossier() {
 
  return (
    <>
      <section  id='all_section'>
        <div className='div_one'>
        <div>
              <Dashboard/>
              <Medicament/>
              <Dossier/>
              <Medecins/>
              <Patients/>
              <Chambres/>
              <Personnel/>
              <Facturation/>
              <Departement/>
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
          width:"950px",
          marginLeft:"auto",
          marginRight:"auto",
          marginTop:"80px",
        
        }}>
          <Box>
          <Button variant="contained" color="error">
            Retour
           </Button>
      </Box>
          <Box  sx={{
            display:"flex",
            justifyContent:"space-between"
          }}>
          
          <Box sx={{
     
             width:"600px",
             height:"200px",
             border:"1px solid rgb(201, 199, 199)",
             borderRadius:"10px",
             
            
           }}>

            <Box sx={{
              display:"grid",
              gridTemplateColumns:"auto auto auto",
              gap:"20px",
              margin:"20px "
              
            }}>

              <Box >
              <p><strong>Nom : </strong> Katembo mwamijean</p>
              <p><strong>Nom : </strong> lore</p>
              <p><strong>Poig : </strong> 80(kg)</p>
              
              </Box>
              <Box >
              <p><strong>Nom : </strong> Katembo </p>
              <p><strong>Nom : </strong> lorem</p>
              <p><strong>Poig : </strong> 80(kg)</p>
              
              </Box>
              <Box >
              <p><strong>Nom : </strong> Katembo mwamis</p>
              <p><strong>Nom : </strong> lorem</p>
              <p><strong>Poig : </strong> 80(kg)</p>
              
              </Box>
              <Box >
              <p><strong>Nom : </strong> Katembo mwamis </p>
              <p><strong>Nom : </strong> lorem</p>
              <p><strong>Poig : </strong> 80(kg)</p>
              
              </Box>
              <Box >
              <p><strong>Nom : </strong> Katembo mwamis jean</p>
              <p><strong>Nom : </strong> lorem</p>
              
              
              </Box>
              <Box >
              <p><strong>Nom : </strong> Katembo mwamis jean</p>
              <p><strong>Nom : </strong> lorem</p>
              
              
              </Box>
              
            </Box>
            </Box>
            <Box sx={{
              
              border:"1px solid rgb(201, 199, 199)",
               backgroundImage:"url('moderate-aquamarine-dark-gradient-background_608506-1382.avif')",
              backgroundRepeat:"no-repeat",
              backgroundSize: "cover",
             backgroundPosition:"center",
             width:"300px",
             height:"200px",
             borderRadius:"10px",
             display:"flex",
             alignItems:"center",
             justifyContent:"center"
            }}>
             
              <img src="/public/profilphoto.png" alt="" style={{
                width:"150px",
                height:"150px",
                borderRadius:"50%"
              }}/>
            
            </Box>
           </Box>
      
      <TableContainer component={Paper}>
      <Typography variant='h5'>Services parcourus par le patient</Typography>
      <Table sx={{ minWidth: 950 ,textAlign:"left"}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{background:"rgba(231, 230, 230, 0.301)",}}>
            <TableCell>#</TableCell>
            <TableCell >SERVICES</TableCell>
            <TableCell >STATUT</TableCell>
            <TableCell >ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                002
              </TableCell>
              <TableCell >Consultation</TableCell>
              <TableCell sx={{color:"green"}}>Terminer</TableCell>
              <TableCell > <Button variant="contained" color="success">
               Details
             </Button></TableCell>
            </TableRow>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                002
              </TableCell>
              <TableCell >Laboratoire</TableCell>
              <TableCell sx={{color:"blue"}}>En cours...</TableCell>
              <TableCell > <Button variant="contained" color="success">
               Details
             </Button></TableCell>
            </TableRow>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                002
              </TableCell>
              <TableCell >Hospitalisation</TableCell>
              <TableCell sx={{color:"red"}}>En attente</TableCell>
              <TableCell > <Button variant="contained" color="success">
               Details
             </Button></TableCell>
            </TableRow>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                002
              </TableCell>
              <TableCell >Embulatoire</TableCell>
              <TableCell sx={{color:"red"}}>En attente</TableCell>
              <TableCell > <Button variant="contained" color="success">
               Details
             </Button></TableCell>
            </TableRow>
         
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                002
              </TableCell>
              <TableCell >Consultation</TableCell>
              <TableCell sx={{color:"red"}}>En attente</TableCell>
              <TableCell > <Button variant="contained" color="success">
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


