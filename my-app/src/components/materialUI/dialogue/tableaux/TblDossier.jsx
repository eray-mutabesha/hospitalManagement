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
import DetailDossierForm from './detailTableau/Dossier/DetailDossierForm.jsx'
import DetailConsultation from './detailTableau/Dossier/DetailConsultation.jsx'




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
          <div className='h1_dash'>
          <h1 style={{color:'white'}}>Dossier</h1>
          
          </div>
          
          <div className='table_div'>
      <div id='section_profil'>
      <div>
         <img src='public\profilphoto.png' alt='photo_de_profile'/>
      </div>
      <div className='informations_user'>
          <div className='administrateur'>
            <h2>Administrateur</h2>
            <p><strong>Email:</strong><span>eray@gmail.com</span></p>
          </div>
          <div className='identities'>
            <nav><p><strong>Nom:</strong><span>name</span></p><img src='public\editPhoto-removebg-preview.png'/></nav>
            <nav><p><strong>Genre:</strong><span>Genre</span></p><img src='public\editPhoto-removebg-preview.png'/></nav>
            <nav><p><strong>Statut:</strong><span>Statut</span></p><img src='public\editPhoto-removebg-preview.png'/></nav>
            <nav><p><strong>Action:</strong><span>une action</span></p><img src='public\editPhoto-removebg-preview.png'/></nav>
            <nav><p><strong>Mot de passe:</strong><span>12344434344343</span></p><img src='public\editPhoto-removebg-preview.png'/></nav>
          </div>
      </div>
    </div>
    <table>
        <thead>
          <tr>
          <th>#</th>
            <th>Date d'arriver</th>
            <th>Date de sortie</th>
            <th>Service</th>
            <th>Statut</th>
            <th>Action</th>
           
          </tr>
            
        </thead>
        <tbody >
        
              <tr >
                <td>00001</td>
                <td>12/08/2024</td>
                <td>12/08/2024</td>
                <td>Reception</td>
                <td style={{color:"green"}}>Terminer</td>
                <td className='action'>
                  <button className='detail_btn'><FontAwesomeIcon icon={faEye} /><DetailConsultation/></button>
                  <button className='detail_btn'><FontAwesomeIcon icon={faTrash} /> Suprimer</button>
                </td>
                
              </tr>
              <tr >
                <td>00001</td>
                <td>12/08/2024</td>
                <td>12/08/2024</td>
                <td>Reception</td>
                <td style={{color:"yellow"}}>En attante...</td>
                <td className='action'>
                  <button className='detail_btn'><FontAwesomeIcon icon={faEye} /><DetailConsultation/></button>
                  <button className='detail_btn'><FontAwesomeIcon icon={faTrash} /> Suprimer</button>
                </td>
                
              </tr>

              <tr >
                <td>00001</td>
                <td>12/08/2024</td>
                <td>12/08/2024</td>
                <td>Reception</td>
                <td style={{color:"yellow"}}>En attante...</td>
                <td className='action'>
                  <button className='detail_btn'><FontAwesomeIcon icon={faEye} /><DetailConsultation/></button>
                  <button className='detail_btn'><FontAwesomeIcon icon={faTrash} /> Suprimer</button>
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
export default TblDossier

