import React from 'react'
import './css_files/profil.css'
import Medecins from './materialUI/Medecins'
import Patients from './materialUI/Patients'
import Dossier from './materialUI/Reception'
import Medicament from './materialUI/Medicament'
import Departement from './materialUI/Departement'
import Chambres from './materialUI/Consultation'
import Facturation from './materialUI/Facturation'
import Personnel from './materialUI/Personnel'
import Parametre from './materialUI/Parametre'
import Dashboard from './materialUI/Dashboard'


function Profil() {
  return (
    <>
    <div className='profil_flex'>
    <div className='div_one'>
            <div>
              <Dashboard/>
              <Dossier/>
              <Medecins/>
              <Patients/>
              <Chambres/>
              <Personnel/>
              <Medicament/>
              <Facturation/>
              <Departement/>
              <Parametre/>
            </div>
        </div>
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
    </div>
    </>
  )
}

export default Profil
