
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Medecins from './components/materialUI/Medecins.jsx'
import Patients from './components/materialUI/Patients.jsx'
import Dossier from './components/materialUI/Dossier.jsx'
import Medicament from './components/materialUI/Medicament.jsx'
import Departement from './components/materialUI/Departement.jsx'
import Chambres from './components/materialUI/Chambre.jsx'
import Facturation from './components/materialUI/Facturation.jsx'
import Personnel from './components/materialUI/Personnel.jsx'
import Parametre from './components/materialUI/Parametre.jsx'

function App() {
 
  return (
    <>
      <section id='all_section'>
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
        <div className='div_two'> 
          <div className='h1_dash'>
          <h1>Dashboard</h1>
          <p>Comminique</p>
          <p>Recrutement</p>
          <p>Blog</p>
          </div>
          
          <div className='flex'>
             <div className='one'>
              <div>
              <h1>HOPITAL GENERALE DE GOMA</h1>
              </div>
              <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, asperiores? Laudantium autem eos quaerat ratione molestiae commodi aliquam illo suscipit perspiciatis, sint laboriosam, id optio fugiat mollitia enim. Soluta, a?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste voluptate quam id, molestiae blanditiis illum obcaecati amet earum ducimus libero voluptatibus magni rem excepturi adipisci at. Expedita, quidem veritatis!</p>
                
              </div>
               
                <div>
                  <button className='btn_fex'>Rendez-vous</button>
                  <button className='btn_fex'>Prescription</button>
                </div>
             </div>
             <div>
               <img src='/public/doctor_img-removebg-preview.png'/>
             </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default App
