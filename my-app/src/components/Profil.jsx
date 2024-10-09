import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, Typography,TextField, Stack } from '@mui/material'
import { faBell,faCaretDown,faCheck,faXmark,faMagnifyingGlass,faListCheck,faUserDoctor,faStethoscope,faCommentsDollar,faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Dashboard from './materialUI/Dashboard.jsx'
import Reception from './materialUI/Reception.jsx'
import Dossier from './materialUI/Dossier.jsx'
import Consultation from './materialUI/Consultation.jsx'
import Laboratoire from './materialUI/Laboratoire.jsx'
import OrganisationClinique from './materialUI/OrganisationClinique.jsx'
import Factutation from './materialUI/Facturation.jsx'
import Ressources from './materialUI/Resources.jsx'
import Parametre from './materialUI/Parametre.jsx'
import Inscription from './Inscription.jsx'
import UpdateProfil from './UpdateProfil.jsx'
import { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import Icon from './materialUI/Icon.jsx'

function Profil() {
  const BASE_URL = import.meta.env.VITE_API_URL;
  const [datas,setdatas]=useState([])
  const [singleData,setSingleData] = useState([])
  const [FormVisible,setFormVisible] =useState(false)

  const getUserData = () => {
    const INFO_Utilisateur_from_localStorage = JSON.parse(localStorage.getItem('Utilisateur'));
    setdatas(INFO_Utilisateur_from_localStorage);
  }

  useEffect(()=>{
    getUserData()
    },[])

    const handleUpdate = () => {
      setFormVisible(false);
      getUserData()
    };
    
    const Edit_nom=(model)=>{
      setSingleData(model)
      setFormVisible(true)
    }
 

    if(FormVisible == false){
      
   
  return (
    <>
      <section  id='all_section'>
      <div className='div_one'>
        <div className='logo'>
            <img src='public/logo-removebg-preview.png' alt='logo hopital'/>
          </div>
          <div className='menus'>
              <Dashboard />
              <Dossier/>
              <Reception/>
              <Consultation/>
              <Laboratoire/>
              <OrganisationClinique/>
              <Factutation/>
              <Ressources/>
              <nav id='personaliser'><Parametre/></nav>
          </div>
        </div>
        <div className='div_two' style={{
           height:"fit-content",
      
      }}> 
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
               <nav> <p>{datas.nom}</p></nav>
               <nav><Icon/></nav>
              </div>





           </div>

          <div style={{
            marginTop:"150px",
            display:"flex",
            justifyContent:"center",
          }}>


            <Box  sx={{
              display:"flex",
              justifyContent:"space-around",
              border:"1px solid rgb(201, 199, 199)",
              width:"600px",
              padding:"10px",
              borderRadius:"10px",
              background:"white"
            }}>


             <Box sx={{
              width:"250px",
              height:"200px",
              backgroundImage:"url('moderate-aquamarine-dark-gradient-background_608506-1382.avif')",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
             }}>
              <img src='public/profilphoto.png' style={{
                width:"150px",
                height:"150px",
                borderRadius:"50%"
              }}/>
              </Box> 
             <Box sx={{
              display:"grid",
              gap:"20px",
              height:"fit-content"
             }}>


              <Box sx={{
                display:"flex",
                border:"1px solid rgb(201, 199, 199)",
                 justifyContent:"space-between",
                 heigth:"fit-content",
                 padding:"5px",
                 borderRadius:"5px"
              }}><p><strong>Nom et post-nom: </strong>{datas.nom}</p>
              <img src='public/editPhoto-removebg-preview.png' style={{
                width:"20px",
                height:"20px",
                cursor:"pointer"
              }}
              onClick={() => Edit_nom(datas)}/>
              </Box>


              <Box sx={{
                display:"flex",
                border:"1px solid rgb(201, 199, 199)",
                 justifyContent:"space-between",
                 heigth:"fit-content",
                 padding:"5px",
                 borderRadius:"5px"
              }}><p><strong>Fonction : </strong>{datas.fonction}</p>
              <img src='public/editPhoto-removebg-preview.png' style={{
                width:"20px",
                height:"20px",
                cursor:"pointer"
              }}
              onClick={() => Edit_nom(datas)}/></Box>



              <Box sx={{
                display:"flex",
                border:"1px solid rgb(201, 199, 199)",
                 justifyContent:"space-between",
                 heigth:"fit-content",
                 padding:"5px",
                 borderRadius:"5px"
              }}><p><strong>Adresse : </strong>{datas.Adresse}</p>
              <img src='public/editPhoto-removebg-preview.png' style={{
                width:"20px",
                height:"20px",
                cursor:"pointer"
              }}
              onClick={() => Edit_nom(datas)}/></Box>

             <Box sx={{
                display:"flex",
                border:"1px solid rgb(201, 199, 199)",
                 justifyContent:"space-between",
                 heigth:"fit-content",
                 padding:"5px",
                 borderRadius:"5px"
              }}><p><strong>Genre : </strong>{datas.sexe}</p>
              <img src='public/editPhoto-removebg-preview.png' style={{
                width:"20px",
                height:"20px",
                cursor:"pointer"
              }}
              onClick={() => Edit_nom(datas)}/></Box>




              <Box sx={{
                display:"flex",
                border:"1px solid rgb(201, 199, 199)",
                 justifyContent:"space-between",
                 heigth:"fit-content",
                 padding:"5px",
                 borderRadius:"5px"
              }}><p><strong>Email : </strong>{datas.email}</p>
              <img src='public/editPhoto-removebg-preview.png' style={{
                width:"20px",
                height:"20px",
                cursor:"pointer"
              }}
              onClick={() => Edit_nom(datas)}/></Box>
             </Box>
            </Box>
          </div>
        </div>
      </section>
    </>
  ) }
  else{
    return <UpdateProfil  singleData={singleData} onUpdate={handleUpdate}/>
  }
}




export default Profil

