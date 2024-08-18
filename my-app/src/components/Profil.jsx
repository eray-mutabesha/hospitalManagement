import React from 'react'
import './css_files/profil.css'
import Parametre from './materialUI/Parametre'
import Dashboard from './materialUI/Dashboard'
import Ressources from './materialUI/Resources'
import Laboratoire from './materialUI/Laboratoire'
import OrganisationClinique from './materialUI/OrganisationClinique'
import Factutation from './materialUI/Facturation'


function Profil() {
  return (
    <>
    <div className='profil_flex'>
    <div className='div_one'>
         <div>
              <nav id='personaliser'><Dashboard /></nav>
              <Reception/>
              <Consultation/>
              <Laboratoire/>
              <OrganisationClinique/>
              <Factutation/>
              <Ressources/>
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
