import React from 'react'
import './tbl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Dashboard from '../../Dashboard.jsx'
import Facturation from '../../Facturation.jsx'
import Parametre from '../../Parametre.jsx'
import Reception from '../../Reception.jsx'
import Consultation from '../../Consultation.jsx'
import Ressources from '../../Resources.jsx'




function TblDepartement() {
 
  return (
    <>
      <section id='all_section'>
        <div className='div_one'>
        <div>
              <Dashboard/>
              <Reception/>
              <Consultation/>
              <Facturation/>
              <Ressources/>
              <Parametre/>
          </div>
        </div>
        <div className='div_two'> 
          <div className='h1_dash'>
          <h1 style={{color:'white'}}>Departements</h1>
          
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
      </section>
    </>
  )
}
export default TblDepartement

