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



function TblDepartement() {
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
          <th>Date de transaction</th>
            <th>Provenence</th>
            <th>Montant</th>
            <th>Action</th>
            <th>Numero du compte</th>
            <th>Action</th>
          </tr>
            
        </thead>
        <tbody >
        
              <tr >
                <td>date_transaction</td>
                <td>date_transaction</td>
                <td>date_transaction</td>
                <td>date_transaction</td>
                <td>date_transaction</td>
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

export default TblDepartement
