
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,faCaretDown,faCheck,faXmark,faMagnifyingGlass,faListCheck,faUserDoctor,faStethoscope,faCommentsDollar,faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Parametre from './components/materialUI/Parametre.jsx'
import Dashboard from './components/materialUI/Dashboard.jsx'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import { Button, Typography,Box } from '@mui/material'
import { Chart as chartjs } from 'chart.js/auto'
import {Bar,Line} from 'react-chartjs-2'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Ressources from './components/materialUI/Resources.jsx'
import Dossier from './components/materialUI/Dossier.jsx'
import Reception from './components/materialUI/Reception.jsx'
import Consultation from './components/materialUI/Consultation.jsx'
import Laboratoire from './components/materialUI/Laboratoire.jsx'
import OrganisationClinique from './components/materialUI/OrganisationClinique.jsx'
// rendez-vous................................................
import Factutation from './components/materialUI/Facturation.jsx'  
// ................................................................
import Icon from './components/materialUI/Icon.jsx'
import  {toast} from 'react-hot-toast';
import axios from 'axios';
import RendezVous from './components/materialUI/RendezVous.jsx'
import Hospital from './components/materialUI/Hospital.jsx'
import Ambulant from './components/materialUI/Ambulant.jsx'
import Patient from './components/materialUI/Patients.jsx'
import Sedeconecter from './components/materialUI/Sedeconecter.jsx'
import SupressionXicon from './components/materialUI/SupressionXicon.jsx'
import ValidXicon from './components/materialUI/ValidXicon.jsx'



function App() {
const navigate= useNavigate()
 const handleConsultation=()=>{
  navigate("/consultation")
 }
 const [rdv,setRDV]=useState([])

const [datas,setdatas]= useState([])
 const getUserData = () => {
  const INFO_Utilisateur_from_localStorage = JSON.parse(localStorage.getItem('Utilisateur'));
  setdatas(INFO_Utilisateur_from_localStorage);
}



  const BASE_URL = import.meta.env.VITE_API_URL;

  const [patientsCount, setPatientsCount] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/count_colones`)
      .then((response) => response.json())
      .then((data) => setPatientsCount(data.totalPatients))
      .catch((error) => console.error('Erreur de chargement:', error));
  }, []);



  const [hospitalisationCount, sethospitalisationCount] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/hospitalisations_rows`)
      .then((response) => response.json())
      .then((data) => sethospitalisationCount(data.totalhospitalisations))
      .catch((error) => console.error('Erreur de chargement:', error));
  }, []);


console.log(hospitalisationCount)














 // get dossier route
const get_all_rdv = () => {
  axios.get(`${BASE_URL}/get_all_rdv`)
    .then(({ data }) => {
      setRDV(data.data || []); 
    })
    .catch((err) => {
      console.log(err);
      toast.error("Il y a une erreur");
    });
};

const deleteRdv= (model) => {
  axios.delete(`${BASE_URL}/delete_get_all_rdv/${model.id}`)
    .then(({ data }) => {
      setRDV(data.data || []);
      toast.error("RDV annuler") 
      get_all_rdv()
      
    })
    .catch((err) => {
      console.log(err);
      toast.error("Il y a une erreur");
    });
};


const acceptedRdv=(model)=>{

  axios.post(`${BASE_URL}/post_rdv_accepted`,{
    id:model.id,
    nom_patient:model.nom_patient,
    date:model.date_entre,
    adresse:model.adresse,
    age:model.age,
    sexe:model.sexe,
    telephone:model.telephone
  })
          
  .then(({ data }) => {
    if (data.status == 500) {
      toast.error("Il y a une erreur");
    } else {
     
    toast.success("RDV accepter");
    axios.delete(`${BASE_URL}/delete_get_all_rdv/${model.id}`)
    .then(({ data }) => {
      setRDV(data.data || []);
      get_all_rdv()
      
    })
    .catch((err) => {
      console.log(err);
      toast.error("Il y a une erreur");
    });
  }
  })
   .catch((err) => {
     console.log(err);
     toast.error("Il y a une erreur");
   });
}



useEffect(()=>{
  getUserData(),
  get_all_rdv()
  },[])
 
  const [searchTerm, setSearchTerm] = useState(''); // État pour la recherche
  // Filtrer les dossiers en fonction de la recherche
  const filteredDatas = rdv.filter((dat) =>
    dat.nom_patient.toLowerCase().includes(searchTerm.toLowerCase()) // Filtre par nom du patient
  );
  

  return (

    <>
      <section id='all_section'>
        <div className='div_one'>
          <div className='logo'>
            <img src='public/logo-removebg-preview.png' alt='logo hopital'/>
          </div>
          {
            datas.service == "Reception"? (
              <div className='menus'>
              <nav id='deconection'> <Sedeconecter /> </nav>
              <nav id='personaliser'> <Dashboard /> </nav>
              <Patient/>
              <Dossier/>
              <Reception/>
              <Parametre/>
              
              </div>):datas.service == "Consultation"? (
                        <div className='menus'>
                          <nav id='deconection'> <Sedeconecter /> </nav>
                        <nav id='personaliser'><Dashboard /></nav>
                        <Consultation/>
                        <RendezVous/>
                        <Parametre/>
                       
                       </div>
              ) : datas.service == "Laboratoire"? (
                <div className='menus'>
                  <nav id='deconection'> <Sedeconecter /> </nav>
               <nav id='personaliser'> <Dashboard /></nav>
                <Laboratoire/>
                <Parametre/>
               </div>
              ): datas.service == "Hospitalisation"? (
                <div className='menus'>
               <nav id='personaliser'> <Dashboard /></nav>
                <Hospital/>
                <Parametre/>
               </div>
              ) : datas.service == "Ambulatoire"? (
                <div className='menus'>
                  <nav id='deconection'> <Sedeconecter /> </nav>
               <nav id='personaliser'> <Dashboard /> </nav>
                <Ambulant/>
                <Parametre/>
               </div>
              ):datas.service == "Administrateur"?(
                <div className='menus'>
                <nav id='deconection'> <Sedeconecter /> </nav>
                <nav id='personaliser'>  <Dashboard /></nav>
                    <Dossier/>
                    <Reception/>
                    <Consultation/>
                    <Laboratoire/>
                    <OrganisationClinique/>
                    <Ressources/>
                    <Parametre/>
                    
                </div>
              ):null

          }

        </div>
        <div className='section_two'>
           <div className='header'>
              <div className='recherch'>
               <FontAwesomeIcon icon={faMagnifyingGlass} /> 
               <input
                type="text"
                placeholder="recherch"
                value={searchTerm} // Lier la valeur de l'input à l'état searchTerm
                onChange={(e) => setSearchTerm(e.target.value)} // Mettre à jour la recherche à chaque saisie
              />
              </div>

              <div className='administrateur'>
                <nav className='notification_icon'>
                <FontAwesomeIcon icon={faBell} />
                </nav>
               <nav>
               <img src={`http://localhost:3001${datas.image}`} alt="Profile" className='admin_photo' />
               </nav> 
               <nav> <p>{datas.nom}</p></nav>
               <nav><Icon/></nav>
              </div>
           </div>
           <div className='statistic'>
           <div className='all_stat_flex'>

            <div className='statistic_flex'>
              <div>
               <nav>

{patientsCount !== null ? (
      <Typography variant='h4'>{patientsCount}</Typography>
      ) : (
        <p>Chargement...</p>
      )}
                </nav>
               <nav>
                <Typography>Tout les Patients</Typography>
               </nav>
              </div>
              <div className='icone_stat'>
               <FontAwesomeIcon icon={faListCheck} className='icon_ui'/>
              </div>
              
            </div>

            <div className='statistic_flex'>
              <div>
               <nav>
                <Typography variant='h4'>23</Typography>
                </nav>
               <nav>
                <Typography>Nos docteurs</Typography>
               </nav>
              </div>
              <div className='icone_stat'>
               <FontAwesomeIcon icon={faUserDoctor} className='icon_ui'/>
              </div>
              
            </div>
           

            <div className='statistic_flex'>
              <div>
               <nav>
               {hospitalisationCount !== null ? (
                  <Typography variant='h4'>{hospitalisationCount}</Typography>
      ) : (
        <p>Chargement...</p>
      )}
              
                </nav>
               <nav>
                <Typography>Patients internés</Typography>
               </nav>
              </div>
              <div className='icone_stat'>
               <FontAwesomeIcon icon={faStethoscope} className='icon_ui'/>
              </div>
              
            </div>

            <div className='statistic_flex'>
              <div>
               <nav>
                <Typography variant='h4'>$3445</Typography>
                </nav>
               <nav>
                <Typography>Income</Typography>
               </nav>
              </div>
              <div className='icone_stat'>
               <FontAwesomeIcon icon={faCommentsDollar} className='icon_ui'/>
              </div>
              
            </div>
            </div>
           </div>

           <div className='all_graphic_and_doctor_div'>
              <div className='all_graphic_div'>
              <Typography variant='h6'>Statut du patient</Typography>
                <Line
                data={{
                  labels:["jav","fev","mar","avl","mai","jun","jlt","aut","sep","oct","nov","dec"],
                  datasets:[
                    {
                      label:"Revenue",
                      data:[200,30,400,10,500,100,10,500],
                      borderColor: 'rgba(75, 192, 192, 1)',  // Couleur de la ligne
                      backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Couleur de remplissage sous la ligne (optionnel)
                      fill: false,  // Désactiver le remplissage sous la ligne
                      tension: 0.1,  // Pour créer une courbe lisse, ajuste ce paramètre
                    },
                    {
                      label: "Profit",
                      data:[40,300,40,600,340,10,600,0],
                      borderColor: 'rgba(134, 134, 177, 0.541)',  // Couleur de la deuxième ligne
                      backgroundColor: 'rgba(255, 99, 132, 0.2)',  // Couleur de remplissage sous la deuxième ligne (optionnel)
                      fill: false,  // Désactiver le remplissage sous la deuxième ligne
                      tension: 0.1,  // Courbure de la deuxième ligne
                    }
                  ]

                }}
                
                />
               
              </div>
              <div className='all_doctor_div'>
                <div className='all_doctor_div_header'>
                    <nav>
                       <h4>Personel agreer</h4>
                    </nav>
                    <nav style={{
                      display:"flex",
                      gap:"10px",
                      alignItems:"center"
                  }}>
                     <p><strong>{datas.service}</strong></p>
                      <FontAwesomeIcon icon={faChevronDown} style={{fontSize:"13px"}}/>
                     
                      
                     
                    </nav>
                </div>
                
               <img src={`http://localhost:3001${datas.image}`} alt="Profile" className='admin_photos' style={{objectFit:"cover"}}/>
               <Typography variant='h5'sx={{color:"white"}}>{datas.fonction}</Typography>
               <p style={{color:"rgb(223, 221, 221)"}}>Email: {datas.email}</p>

               {/* <div className='buttons'>
                <div>
                  <h4>Experience</h4>
                  <nav><h4>18 ans</h4></nav>
                </div>
                <div>
                  <h4>Patients</h4>
                  <nav><h4>2.400</h4></nav>
                  </div>
                <div>
                <h4>Operations</h4>
                  <nav><h4>1.500</h4></nav>
                </div>
              
               </div> */}
               </div>
             
           </div>
























       <Box  sx={{
        border:"1px solid rgb(223, 221, 221)",
        borderRadius:"10px",
        margin:"20px",
       
       }}>
           <TableContainer sx={{
           borderRadius:"10px",
           height:"400px",
           overflowY:"scroll"
           }} component={Paper}>
            <Typography sx={{margin:"20px"}} variant='h6'>Demande d'un rendez-vous </Typography>


   
                      {/* Si aucun élément n'est trouvé, afficher un message */}
                      {filteredDatas.length === 0 ? (
                <Typography variant="body1" sx={{ textAlign: "center", marginTop: "20px" ,color:"red"}}>
                  Aucun dossier trouvé pour "{searchTerm}"
                </Typography>
              ) :( 
      <Table  aria-label="caption table">
      
           
            {filteredDatas.map((dat,index) => (
              <TableHead key={index}>
              <TableRow >
                <TableCell>{dat.nom_patient}</TableCell>
                <TableCell align="right">{dat.updated_at}</TableCell>
                <TableCell align="right">{dat.date_entre}</TableCell>
                <TableCell align="right" >
                  <Box sx={{
                    display:"flex",
                    justifyContent:"flex-end",
                    gap:"10px"
                  }}>
  
                  <ValidXicon acceptedRdv={()=>acceptedRdv(dat)}/>
                  <SupressionXicon deleteRdv={()=>deleteRdv(dat)}/>
                  </Box>
                  </TableCell>
              </TableRow>
            </TableHead>
          ))}


      </Table>)}
    </TableContainer>
    </Box>
        </div>
     
      </section>
    </>
  )
}

export default App
