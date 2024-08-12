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
import { Box } from '@mui/material'
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
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


function TblDossier() {
 
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
          display:"flex",
          alignItems:"center",
          marginLeft:"auto",
          marginRight:"auto"
        }}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 950 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>SERVICES</TableCell>
            <TableCell align="right">CLIENT</TableCell>
            <TableCell align="right">DATE D'ARRIVER</TableCell>
            <TableCell align="right">DATE DE SORTIE</TableCell>
            <TableCell align="right">STATUT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
        
        </div>
      </section>
    </>
  )
}
export default TblDossier






