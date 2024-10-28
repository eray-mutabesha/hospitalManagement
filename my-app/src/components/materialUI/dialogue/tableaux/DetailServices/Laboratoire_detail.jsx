import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faEye} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'
import { faBell,faCaretDown,faCheck,faXmark,faMagnifyingGlass,faListCheck,faUserDoctor,faStethoscope,faCommentsDollar,faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Ressources from '../../../Resources.jsx';
import Reception from '../../../Reception.jsx';
import Consultation from '../../../Consultation.jsx';
import Laboratoire from '../../../Laboratoire.jsx';
import OrganisationClinique from '../../../OrganisationClinique.jsx';
import Factutation from '../../../Facturation.jsx';
import Dashboard from '../../../Dashboard.jsx'
import Parametre from '../../../Parametre.jsx'
import Dossier from '../../../Dossier';
import { useLocation } from 'react-router-dom'
import { useState,useEffect,useContext } from 'react';
import  {toast} from 'react-hot-toast';
import axios from 'axios';
import Icon from '../../../Icon.jsx'
import Ambulant from '../../../Ambulant.jsx'
import Hospital from '../../../Hospital.jsx'
import RendezVous from '../../../RendezVous.jsx'
import Patient from '../../../Patients.jsx'
import Sedeconecter from '../../../Sedeconecter.jsx'



















function Laboratoire_detail() {
  
const BASE_URL = import.meta.env.VITE_API_URL;
 const navigate = useNavigate()
 const handledossier=()=>{
   if(profil.service == "Laboratoire"){
    navigate("/Laboratoire", { state: { detailData: data[0]?.id } });
  }else{
    navigate("/detaildossier", { state: { detailData: data[0]?.id } })
  }
 }


  // Access the data from location.state
  const location = useLocation();
  const { detailData } = location.state || {};  // Handle undefined state
  const [data,setDatas]=useState([]);



  
  const get_dossiers = () => {
   axios.get(`${BASE_URL}/get_tout_les_dossiers_id/${detailData}`)
     .then(({ data }) => {
       setDatas(data.data || []); 
     })
     .catch((err) => {
       console.log(err);
       toast.error("Il y a une erreur");
     });
 };
 
 useEffect(()=>{
 get_dossiers()
 
 },[])



console.log(data[0])

  // profil connected
  const [profil,setprofil]= useState([])
  const getUserData = () => {
   const INFO_Utilisateur_from_localStorage = JSON.parse(localStorage.getItem('Utilisateur'));
   setprofil(INFO_Utilisateur_from_localStorage);
 }
 
 useEffect(()=>{
   getUserData()
   
   },[])



 
  return (
    <>
      <section  id='all_section'>
      <div className='div_one'>
        <div className='logo'>
            <img src='public/logo-removebg-preview.png' alt='logo hopital'/>
          </div>
          {
            profil.service == "Reception"? (
              <div className='menus'>
                <nav id='deconection'> <Sedeconecter/> </nav>
              <Dashboard />
              <Patient/>
              <Dossier/>
             <nav id='personaliser'><Reception/></nav>
             
              <Parametre/>
              </div>):profil.service == "Consultation"? (
                        <div className='menus'>
                          <nav id='deconection'> <Sedeconecter/> </nav>
                        <Dashboard />
                        <nav id='personaliser'><Consultation/></nav>
                        <RendezVous/>
                        <Parametre/>
                       
                       </div>
              ) : profil.service == "Laboratoire"? (
                <div className='menus'>
                  <nav id='deconection'> <Sedeconecter/> </nav>
                <Dashboard />
                <nav id='personaliser'><Laboratoire/></nav>
                <Parametre/>
               </div>
              ): profil.service == "Hospitalisation"? (
                <div className='menus'>
                  <nav id='deconection'> <Sedeconecter/> </nav>
                <Dashboard />
                <nav id='personaliser'><Hospital/></nav>
                <Parametre/>
               </div>
              ) : profil.service == "Ambulatoire"? (
                <div className='menus'>
                  <nav id='deconection'> <Sedeconecter/> </nav>
                <Dashboard />
                <nav id='personaliser'><Ambulant/></nav>
                <Parametre/>
               </div>
              ):profil.service == "Administrateur"?(
                <div className='menus'>
                <nav id='deconection'> <Sedeconecter /> </nav>
                  <Dashboard />
                    <Dossier/>
                    <Reception/>
                    <Consultation/>
                    <Laboratoire/>
                    <nav id='personaliser'><OrganisationClinique/></nav>
                    <Ressources/>
                    <Parametre/>
                    
                </div>
              ):null

          }
        </div>
        <div className='div_two' > 
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
               <img src={`http://localhost:3001${profil.image}`} alt="Profile" className='admin_photo'/>
               </nav> 
               <nav> <p> {profil.nom} </p></nav>
               <nav><Icon/></nav>
              </div>
           </div>
           
        <Box sx={{
          display:"grid",
          gap:"30px",
          alignItems:"center",
          margin:"20px"
          
        
        }}>
          <Box mt={5}>
          <Button variant="contained" color="error" onClick={handledossier}>
            Retour
           </Button>
           {/* ......................................................... */}
      </Box>
         <Box sx={{
          background:"white",
          borderRadius:"10px",
          border:"1px solid rgba(0, 0, 0, 0.103)",
          padding:"20px",
         }}>
          

          <h1>FICHE LABORATOIRE</h1>



          <Box sx={{
                marginTop:"10px",
                display:"flex",
                justifyContent:"space-between"
              }}>
              <Box sx={{
            display:"grid",
            gridTemplateColumns:"auto auto auto auto",
            gap:"30px",
            background:"white",
            padding:"0px"
          }}>
            <h3>Nom: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.nom_patient}</span></h3>
            <h3>Age: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.age}</span></h3>
            <h3>Sexe: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.sexe}</span></h3>
            <h3>Poids: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.poids}</span></h3>
            <h3>TO: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.to_to}</span></h3>
            <h3>TA: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.ta_ta}</span></h3>
            <h3>Adresse: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.adresse}</span></h3>
            <h3>Telephone: <span style={{color:"rgba(0, 0, 0, 0.322)"}}>{data[0]?.telephone}</span></h3>
          </Box>
     

          <Box sx={{
              
              border:"1px solid rgb(201, 199, 199)",
               backgroundImage:"url('moderate-aquamarine-dark-gradient-background_608506-1382.avif')",
              backgroundRepeat:"no-repeat",
              backgroundSize: "cover",
             backgroundPosition:"center",
             width:"150px",
             height:"150px",
             borderRadius:"10px",
             display:"flex",
             alignItems:"center",
             justifyContent:"center"
            }}>
             
              <img src="/public/profilphoto.png" alt="" style={{
                width:"100px",
                height:"100px",
                borderRadius:"50%"
              }}/>
            
            </Box>
            </Box>











            <Box
  sx={{
    background: "white",
    marginTop: "150px",
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gap: "40px",
  }}
>
  <Box>
    <h2 style={{ color: "rgba(0, 0, 0, 0.322)" }}>Hermatologie :</h2>
    <p><strong>Hemoglobine:</strong> {data[0]?.hermoglobine}</p>
    <p><strong>Hematocrite:</strong> {data[0]?.hematocrite}</p>
    <p><strong>Globule blanc:</strong> {data[0]?.globule_blanc}</p>
    <p><strong>Globule rouge:</strong> {data[0]?.globule_rouge}</p>
  </Box>

  <Box>
    <h2 style={{ color: "rgba(0, 0, 0, 0.322)" }}>FL(%) :</h2>
    <p><strong>N:</strong> {data[0]?.n_n}</p>
    <p><strong>E:</strong> {data[0]?.e_e}</p>
    <p><strong>B:</strong> {data[0]?.b_b}</p>
    <p><strong>TS:</strong> {data[0]?.t_s}</p>
    <p><strong>Paquette sanguine:</strong> {data[0]?.plaquette_sanguines}</p>
    <p><strong>L:</strong> {data[0]?.l_l}</p>
    <p><strong>M:</strong> {data[0]?.m_m}</p>
    <p><strong>Vitesse sedimentation:</strong> {data[0]?.vitesse_de_sedimentation}</p>
    <p><strong>TC:</strong> {data[0]?.t_c}</p>
    <p><strong>Test d'EMEIL:</strong> {data[0]?.test_emmel}</p>
  </Box>

  <Box>
    <h2 style={{ color: "rgba(0, 0, 0, 0.322)" }}>Parasitologie/cytologie :</h2>
    <p><strong>Goutte epaisse:</strong> {data[0]?.goute_epaisse}</p>
    <p><strong>Goutte fraiche:</strong> {data[0]?.goute_fraiche}</p>
    <p><strong>Salle directes:</strong> {data[0]?.salle_directe}</p>
    <p><strong>Frottis vaginale a frais:</strong> {data[0]?.frottis_vaginale}</p>
    <p><strong>LCR-Element:</strong> {data[0]?.lcr_element}</p>
    <p><strong>TDR:</strong> {data[0]?.tdr}</p>
    <p><strong>Salle-enrechies:</strong> {data[0]?.salle_enrechies}</p>
    <p><strong>Frottis uretrale a frais:</strong> {data[0]?.frottis_urettrale}</p>
    <p><strong>Sediment urinaire:</strong> {data[0]?.sediment_urinaire}</p>
    <p><strong>FI:</strong> {data[0]?.f_i}</p>
  </Box>

  <Box>
    <h2 style={{ color: "rgba(0, 0, 0, 0.322)" }}>Bacteriologie :</h2>
    <p><strong>Fv-Gram:</strong> {data[0]?.fv_gram}</p>
    <p><strong>FU-Gram:</strong> {data[0]?.fu_gram}</p>
    <p><strong>LCR-Gram:</strong> {data[0]?.lcr_gram}</p>
    <p><strong>Sediment urinaire Gram:</strong> {data[0]?.sediment_urinaire_gram}</p>
    <p><strong>Spermatogram:</strong> {data[0]?.spermogramme}</p>
  </Box>

  <Box>
    <h2 style={{ color: "rgba(0, 0, 0, 0.322)" }}>Biochimie :</h2>
    <p><strong>Glycemie:</strong> {data[0]?.glycemie}</p>
    <p><strong>Creatine sanguine:</strong> {data[0]?.creatine_sanguine}</p>
    <p><strong>SGOT(AST):</strong> {data[0]?.sgot_ast}</p>
    <p><strong>Bil to:</strong> {data[0]?.bil_tot}</p>
    <p><strong>Bil Dir:</strong> {data[0]?.bil_dir}</p>
    <p><strong>Phosphatase alcoline:</strong> {data[0]?.phosphatase_alcaline}</p>
    <p><strong>Glucosirie:</strong> {data[0]?.glucosurie}</p>
    <p><strong>Uree sanguine:</strong> {data[0]?.uree_sanguine}</p>
    <p><strong>Creatine sanguine:</strong> {data[0]?.creatine_sanguine}</p>
    <p><strong>SGPT(ALT):</strong> {data[0]?.sgpt_alt}</p>
    <p><strong>Bil ind:</strong> {data[0]?.bil_ind}</p>
    <p><strong>Phosphatase acide:</strong> {data[0]?.phosphatase_acide}</p>
    <p><strong>Albuminurie:</strong> {data[0]?.albuminirie}</p>
  </Box>

  <Box>
    <h2 style={{ color: "rgba(0, 0, 0, 0.322)" }}>Sero-immunologie :</h2>
    <p><strong>Test WIDAL TO:</strong> {data[0]?.test_widal_to}</p>
    <p><strong>Facteurs rhumatoide:</strong> {data[0]?.facteurs_rhumatoides}</p>
    <p><strong>Hbs Ag :</strong> {data[0]?.hbs_age}</p>
    <p><strong>Test VDRL ou RPR:</strong> {data[0]?.test_vdrl}</p>
    <p><strong>Test grossesse:</strong> {data[0]?.test_grossesse}</p>
    <p><strong>Hapatite virale B:</strong> {data[0]?.hapatite_viral_b}</p>
    <p><strong>TH:</strong> {data[0]?.t_h}</p>
    <p><strong>ALSO:</strong> {data[0]?.also}</p>
    <p><strong>Hbs Age ALSO:</strong> {data[0]?.hbs_age_also}</p>
    <p><strong>Test VIH:</strong> {data[0]?.test_vih}</p>
    <p><strong>CRP:</strong> {data[0]?.crp}</p>
    <p><strong>H.Pilori:</strong> {data[0]?.hpylorie}</p>
    <p><strong>Date:</strong> {data[0]?.date}</p>
    <p><strong>Autre:</strong> {data[0]?.autre}</p>
  </Box>
</Box>

 
        <Box sx={{
        display:"flex",
        justifyContent:"end",
        gap:"20px",
        marginTop:"10px"
     }}>

      {/* <Button variant='outlined' >Modifier</Button> */}
      
       
       
      </Box>
         </Box>
      
      
    </Box>
        
        </div>
      </section>
    </>
  )
}
export default Laboratoire_detail



