import React from 'react'
import './tbl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Medecins from '../../Medecins.jsx'
import Patients from '../../Medecins.jsx'
import Dossier from '../../Medecins.jsx'
import Medicament from '../../Medecins.jsx'
import Departement from '../../Medecins.jsx'
import Chambres from '../../Medecins.jsx'
import Facturation from '../../Medecins.jsx'
import Personnel from '../../Medecins.jsx'
import Parametre from '../../Medecins.jsx'







function TblMedicament() {
  return (
    <div className='all_flex'>
    <div className='div_one'>
    <div>
      <nav> <FontAwesomeIcon icon={faEnvelope} /><p>Dashboard</p></nav>
      <Medecins/>
      <Patients/>
      <Dossier/>
      <Medicament/>
      <Departement/>
      <Chambres/>
      <Facturation/>
      <Personnel/>
      <Parametre/>
    </div>
</div>
    <div className='table_div'>
    <table>
        <thead>
          <tr>
          <th>Date </th>
            <th>Nom</th>
            <th>post nom</th>
            <th>Action</th>
            <th>Numero </th>
            <th>email</th>
          </tr>
            
        </thead>
        <tbody >
        
              <tr >
                <td>lorom lorem</td>
                <td>lorom</td>
                <td>lorom</td>
                <td>lorom</td>
                <td>lorom</td>
                <td className='action'>
                  <img src='public/editPhoto-removebg-preview.png' className='corbeil_image' />
                  <img src='public/up_2.png' className='corbeil_image' />
                  <img src='/public/delete_corbrille.png' className='corbeil_image'/>
                </td>
                
              </tr>
           
   </tbody>
</table>
    </div>
    </div>
  )
}

export default TblMedicament
