import React from 'react'
import './tbl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dashboard from '../../Dashboard.jsx'
import Parametre from '../../Parametre.jsx'
import { Box, Button, Typography,TextField, Stack } from '@mui/material'
import { faBell,faCaretDown,faCheck,faXmark,faMagnifyingGlass,faListCheck,faUserDoctor,faStethoscope,faCommentsDollar,faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { InputLabel,Select,MenuItem,FormControl}  from '@mui/material';
import { useForm} from "react-hook-form"
import Consultation from '../../Consultation.jsx'
import Reception from '../../Reception.jsx'
import Ressources from '../../Resources.jsx'
import Laboratoire from '../../Laboratoire.jsx'
import OrganisationClinique from '../../OrganisationClinique.jsx'
import Factutation from '../../Facturation.jsx'
import ChoixTransferClt from '../../ChoixTransferClt.jsx'
import { useNavigate } from 'react-router-dom'
import Dossier from '../../Dossier.jsx'
import { useLocation } from 'react-router-dom'
import { useState,useEffect,useContext } from 'react';
import  {toast} from 'react-hot-toast';
import axios from 'axios';
import Icon from '../../Icon.jsx'
import Ambulant from '../../Ambulant.jsx'
import Hospital from '../../Hospital.jsx'
import RendezVous from '../../RendezVous.jsx'
import Patient from '../../Patients.jsx'
import Sedeconecter from '../../Sedeconecter.jsx'












function TblLaboratoire() {


    // profil connected
    const [profil,setprofil]= useState([])
    const getUserData = () => {
     const INFO_Utilisateur_from_localStorage = JSON.parse(localStorage.getItem('Utilisateur'));
     setprofil(INFO_Utilisateur_from_localStorage);
   }
   
   useEffect(()=>{
     getUserData()
     
     },[])
  
  const BASE_URL = import.meta.env.VITE_API_URL;
  const { register, handleSubmit,formState:{errors} } = useForm();
  const [checked, setChecked] = React.useState([1]);


  const navigate = useNavigate()
  const handledossier=()=>{
    navigate("/detaildossier",{ state: { detailData: data[0]?.id } })
  }
  const detailLabo =()=>{
    navigate("/laboratoiredetail",{ state: { detailData: data[0]?.id } })
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




















const [formData,setFormData] = useState({
  hermoglobine:"",
  globule_blanc:"",
  hematocrite:"",
  globule_rouge:"",
  n_n:"",
  e_e:"",
  b_b:"",
  t_s:"",
  plaquette_sanguines:"",
  l_l:"",
  m_m:"",
  vitesse_de_sedimentation:"",
  t_c:"",
  test_emmel:"",
  goute_epaisse:"",
  goute_fraiche:"",
  salle_directe:"",
  frottis_urettrale:"",
  frottis_vaginale:"",
  lcr_element:"",
  tdr:"",
  salle_enrechies:"",
  sediment_urinaire:"",
  f_i:"",
  fv_gram:"",
  lcr_gram:"",
  spermogramme:"",
  fu_gram:"",
  sediment_urinaire_gram:"",
  glycemie:"",
  creatine_sanguine:"",
  sgot_ast:"",
  bil_tot:"",
  bil_dir:"",
  phosphatase_alcaline:"",
  glucosurie:"",
  uree_sanguine:"",
  creatine_sanguine:"",
  sgpt_alt:"",
  bil_dir:"",
  bil_ind:"",
  phosphatase_acide:"",
  albuminirie:"",
  test_widal_to:"",
  facteurs_rhumatoides:"",
  hbs_age:"",
  test_vdrl:"",
  test_grossesse:"",
  hapatite_viral_b:"",
  t_h:"",
  also:"",
  hbs_age_also:"",
  test_vih:"",
  crp:"",
  hpylorie:"",
  date:"",
  autre:""

})

const onsubmit = () => {
 
  axios.put(`${BASE_URL}/update_tout_le_dossier_labo_datas/${detailData}`, 
    formData
  )      
  .then(({ data }) => {
    setDatas(data.data || []); 
  })
  .catch((err) => {
    console.log(err);
    toast.error("Il y a une erreur");
  });





  axios.put(`${BASE_URL}/update_labo_datas/${detailData}`, 
    formData
  )      
  .then(({ data }) => {
    setDatas(data.data || []); 
    setDatas({
      hermoglobine:"",
      globule_blanc:"",
      hematocrite:"",
      globule_rouge:"",
      n_n:"",
      e_e:"",
      b_b:"",
      t_s:"",
      plaquette_sanguines:"",
      l_l:"",
      m_m:"",
      vitesse_de_sedimentation:"",
      t_c:"",
      test_emmel:"",
      goute_epaisse:"",
      goute_fraiche:"",
      salle_directe:"",
      frottis_urettrale:"",
      frottis_vaginale:"",
      lcr_element:"",
      tdr:"",
      salle_enrechies:"",
      sediment_urinaire:"",
      f_i:"",
      fv_gram:"",
      lcr_gram:"",
      spermogramme:"",
      fu_gram:"",
      sediment_urinaire_gram:"",
      glycemie:"",
      creatine_sanguine:"",
      sgot_ast:"",
      bil_tot:"",
      bil_dir:"",
      phosphatase_alcaline:"",
      glucosurie:"",
      uree_sanguine:"",
      creatine_sanguine:"",
      sgpt_alt:"",
      bil_dir:"",
      bil_ind:"",
      phosphatase_acide:"",
      albuminirie:"",
      test_widal_to:"",
      facteurs_rhumatoides:"",
      hbs_age:"",
      test_vdrl:"",
      test_grossesse:"",
      hapatite_viral_b:"",
      t_h:"",
      also:"",
      hbs_age_also:"",
      test_vih:"",
      crp:"",
      hpylorie:"",
      date:"",
      autre:""
    })
  })
  .catch((err) => {
    console.log(err);
    toast.success("Enregistrement reussi")
    toast.error("Il y a une erreur");
  });






};
































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
        <div className='div_two' style={{
           background:"rgba(231, 230, 230, 0.301)",
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
               <img src={`http://localhost:3001${profil.image}`} alt="Profile" className='admin_photo'/>
               </nav> 
               <nav> <p> {profil.nom} </p></nav>
               <nav><Icon/></nav>
              </div>
           </div>
      
      <Box sx={{
      marginTop:"100px",
      justifyContent:"space-evenly",
      margin:"20px",
      // border:"1px solid red"
    }}>    
      

      
      <Button  variant="contained" color="error" sx={{
    width:"fit-content",
    marginTop:"40px"}}onClick={handledossier}>
            Retour
           </Button>


    <Box>
    
   



    
    <Box sx={{
      
      padding:"10px",
       border: "1px solid rgb(201, 199, 199)",
      background:"white",
      borderRadius:"10px",
      marginTop:"20px"
    }}>



<h1>FICHE LABORATOIRE</h1>






<Box  sx={{
            display:"flex",
            justifyContent:"space-between",
            gap:"20px",
          }}>
          
          <Box sx={{
     
            background:"white",
             borderRadius:"10px",
             display:"grid",
             alignItems:"center",
             padding:"10px"
             
            
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
            </Box>
            
            <Box sx={{
              
              border:"1px solid rgb(201, 199, 199)",
               backgroundImage:"url('moderate-aquamarine-dark-gradient-background_608506-1382.avif')",
              backgroundRepeat:"no-repeat",
              backgroundSize: "cover",
             backgroundPosition:"center",
             width:"150px",
             height:"170px",
             borderRadius:"10px",
             display:"flex",
             alignItems:"center",
             justifyContent:"center"
            }}>
             
              <img src="/public/profilphoto.png" alt="" style={{
                width:"110px",
                height:"110px",
                borderRadius:"50%"
              }}/>
            
            </Box>
           </Box>














<form  onSubmit={handleSubmit(onsubmit)} style={{display:"grid"}}
     >
<Typography variant='h6'>Hermatologie :</Typography>
<Box sx={{
  display:"grid",
  gridTemplateColumns:"auto  auto",
  gap:"10px",

}}>



<TextField
className='inpt_material'
id="standard-basic" label="Hermoglobine" variant="standard"
 type="text"
 size="small"
 {...register("hermoglobine", { required: "Veuillez entrer le point" })}
 value={formData.hermoglobine}
 onChange={(e) => setFormData({ ...formData, hermoglobine: e.target.value })}/>


<TextField
className='inpt_material'
 id="standard-basic"
 label="Hematocrite" 
 variant="standard"
 type="text"
 size="small"
{...register("hematocrite", { required: "Veuillez entrer le point" })}
 value={formData.hematocrite}
 onChange={(e) => setFormData({ ...formData, hematocrite: e.target.value })}/>




<TextField
className='inpt_material'
 id="standard-basic"
 label="Globule blanc" 
 variant="standard" 
 type="text"
 size="small"
 {...register("globule_blanc", { required: "Veuillez entrer le point" })}
 value={formData.globule_blanc}
 onChange={(e) => setFormData({ ...formData, globule_blanc: e.target.value })}/>



<TextField
className='inpt_material'
 id="standard-basic" 
 label="Globule rouge" 
 variant="standard" 
 type="text"
 size="small"
 {...register("globule_rouge", { required: "Veuillez entrer le point" })}
 value={formData.globule_rouge}
 onChange={(e) => setFormData({ ...formData, globule_rouge: e.target.value })}/>
</Box>         
{/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}











<Typography variant='h6'>FL(%) :</Typography>
<Box sx={{
  display:"grid",
  gridTemplateColumns:"auto  auto",
  gap:"10px"
}}>

 <TextField
className='inpt_material'
 id="standard-basic" 
 label="N" 
 variant="standard" 
 type="text"
 size="small"
 {...register("n_n", { required: "Veuillez entrer le point" })}
 value={formData.n_n}
 onChange={(e) => setFormData({ ...formData, n_n: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="L" 
 variant="standard" 
 type="text"
 size="small"
 {...register("l_l", { required: "Veuillez entrer le point" })}
 value={formData.l_l}
 onChange={(e) => setFormData({ ...formData, l_l: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="E" 
 variant="standard" 
 type="text"
 size="small"
 {...register("e_e", { required: "Veuillez entrer le point" })}
 value={formData.e_e}
 onChange={(e) => setFormData({ ...formData, e_e: e.target.value })}/>



<TextField
className='inpt_material'
 id="standard-basic" 
 label="M" 
 variant="standard" 
 type="text"
 size="small"
 {...register("m_m", { required: "Veuillez entrer le point" })}
 value={formData.m_m}
 onChange={(e) => setFormData({ ...formData, m_m: e.target.value })}/>


<TextField
className='inpt_material'
 id="standard-basic" 
 label="B" 
 variant="standard" 
 type="text"
 size="small"
 {...register("b_b", { required: "Veuillez entrer le point" })}
 value={formData.b_b}
 onChange={(e) => setFormData({ ...formData, b_b: e.target.value })}/>



<TextField
className='inpt_material'
 id="standard-basic" 
 label="Vitesse de sedimentation" 
 variant="standard" 
 type="text"
 size="small"
 {...register("vitesse_de_sedimentation", { required: "Veuillez entrer le point" })}
 value={formData.vitesse_de_sedimentation}
 onChange={(e) => setFormData({ ...formData, vitesse_de_sedimentation: e.target.value })}/>



<TextField
className='inpt_material'
 id="standard-basic" 
 label="TS" 
 variant="standard" 
 type="text"
 size="small"
 {...register("t_s", { required: "Veuillez entrer le point" })}
 value={formData.t_s}
 onChange={(e) => setFormData({ ...formData, t_s: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="TC" 
 variant="standard" 
 type="text"
 size="small"
 {...register("t_c", { required: "Veuillez entrer le point" })}
 value={formData.t_c}
 onChange={(e) => setFormData({ ...formData, t_c: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Plaquette sanguines" 
 variant="standard" 
 type="text"
 size="small"
 {...register("plaquette_sanguines", { required: "Veuillez entrer le point" })}
 value={formData.plaquette_sanguines}
 onChange={(e) => setFormData({ ...formData, plaquette_sanguines: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Test d'Emmel" 
 variant="standard" 
 type="text"
 size="small"
 {...register("test_emmel", { required: "Veuillez entrer le point" })}
 value={formData.test_emmel}
 onChange={(e) => setFormData({ ...formData, test_emmel: e.target.value })}/>

</Box>












<Typography variant='h6'>Parasitologie/ Cytologie :</Typography>
<Box sx={{
  display:"grid",
  gridTemplateColumns:"auto  auto",
  gap:"10px",
  
}}>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Goutte epaisse" 
 variant="standard" 
 type="text"
 size="small"
 {...register("goute_epaisse", { required: "Veuillez entrer le point" })}
 value={formData.goute_epaisse}
 onChange={(e) => setFormData({ ...formData, goute_epaisse: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="TDR" 
 variant="standard" 
 type="text"
 size="small"
 {...register("tdr", { required: "Veuillez entrer le point" })}
 value={formData.tdr}
 onChange={(e) => setFormData({ ...formData, tdr: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Goutte fraiche" 
 variant="standard" 
 type="text"
 size="small"
 {...register("goute_fraiche", { required: "Veuillez entrer le point" })}
 value={formData.goute_fraiche}
 onChange={(e) => setFormData({ ...formData, goute_fraiche: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Salle enrichies" 
 variant="standard" 
 type="text"
 size="small"
 {...register("salle_enrechies", { required: "Veuillez entrer le point" })}
 value={formData.salle_enrechies}
 onChange={(e) => setFormData({ ...formData, salle_enrechies: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Salle directes" 
 variant="standard" 
 type="text"
 size="small"
 {...register("salle_directe", { required: "Veuillez entrer le point" })}
 value={formData.salle_directe}
 onChange={(e) => setFormData({ ...formData, salle_directe: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Frottis uretral a frais" 
 variant="standard" 
 type="text"
 size="small"
 {...register("frottis_urettrale", { required: "Veuillez entrer le point" })}
 value={formData.frottis_urettrale}
 onChange={(e) => setFormData({ ...formData, frottis_urettrale: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Frottis vaginale a frais" 
 variant="standard" 
 type="text"
 size="small"
 {...register("frottis_vaginale", { required: "Veuillez entrer le point" })}
 value={formData.frottis_vaginale}
 onChange={(e) => setFormData({ ...formData, frottis_vaginale: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Sediment urinaire" 
 variant="standard" 
 type="text"
 size="small"
 {...register("sediment_urinaire", { required: "Veuillez entrer le point" })}
 value={formData.sediment_urinaire}
 onChange={(e) => setFormData({ ...formData, sediment_urinaire: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="LCR-Element" 
 variant="standard" 
 type="text"
 size="small"
 {...register("lcr_element", { required: "Veuillez entrer le point" })}
 value={formData.lcr_element}
 onChange={(e) => setFormData({ ...formData, lcr_element: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="FI" 
 variant="standard" 
 type="text"
 size="small"
 {...register("f_i", { required: "Veuillez entrer le point" })}
 value={formData.f_i}
 onChange={(e) => setFormData({ ...formData, f_i: e.target.value })}/>

</Box>

{/* ////////////////////////////////////////////////////////////////////////////////////////////// */}
{/* ////////////////////////////////////////////////////////////////////////////////////////////// */}










<Typography variant='h6'>Bacteriologie :</Typography>
<Box sx={{
  display:"grid",
  gridTemplateColumns:"auto  auto",
  gap:"10px"
}}>


<TextField
className='inpt_material'
 id="standard-basic" 
 label="FV Gram" 
 variant="standard" 
 type="text"
 size="small"
 {...register("fv_gram", { required: "Veuillez entrer le point" })}
 value={formData.fv_gram}
 onChange={(e) => setFormData({ ...formData, fv_gram: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="FU Gram" 
 variant="standard" 
 type="text"
 size="small"
 {...register("fu_gram", { required: "Veuillez entrer le point" })}
 value={formData.fu_gram}
 onChange={(e) => setFormData({ ...formData, fu_gram: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="LCR Gram" 
 variant="standard" 
 type="text"
 size="small"
 {...register("lcr_gram", { required: "Veuillez entrer le point" })}
 value={formData.lcr_gram}
 onChange={(e) => setFormData({ ...formData, lcr_gram: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Sediment urinaire Gram" 
 variant="standard" 
 type="text"
 size="small"
 {...register("sediment_urinaire_gram", { required: "Veuillez entrer le point" })}
 value={formData.sediment_urinaire_gram}
 onChange={(e) => setFormData({ ...formData, sediment_urinaire_gram: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Spermogramme" 
 variant="standard" 
 type="text"
 size="small"
 {...register("spermogramme", { required: "Veuillez entrer le point" })}
 value={formData.spermogramme}
 onChange={(e) => setFormData({ ...formData, spermogramme: e.target.value })}/>

</Box>




<Typography variant='h6'>Biochimie :</Typography>
<Box sx={{
  display:"grid",
  gridTemplateColumns:"auto  auto",
  gap:"10px"
}}>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Glycemie" 
 variant="standard" 
 type="text"
 size="small"
 {...register("glycemie", { required: "Veuillez entrer le point" })}
 value={formData.glycemie}
 onChange={(e) => setFormData({ ...formData, glycemie: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Uree sanguine" 
 variant="standard" 
 type="text"
 size="small"
 {...register("uree_sanguine", { required: "Veuillez entrer le point" })}
 value={formData.uree_sanguine}
 onChange={(e) => setFormData({ ...formData, uree_sanguine: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Creatine sanguine" 
 variant="standard" 
 type="text"
 size="small"
 {...register("creatine_sanguine", { required: "Veuillez entrer le point" })}
 value={formData.creatine_sanguine}
 onChange={(e) => setFormData({ ...formData, creatine_sanguine: e.target.value })}/>


<TextField
className='inpt_material'
 id="standard-basic" 
 label="SGOT(AST)" 
 variant="standard" 
 type="text"
 size="small"
 {...register("sgot_ast", { required: "Veuillez entrer le point" })}
 value={formData.sgot_ast}
 onChange={(e) => setFormData({ ...formData, sgot_ast: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="SGPT(ALT)" 
 variant="standard" 
 type="text"
 size="small"
 {...register("sgpt_alt", { required: "Veuillez entrer le point" })}
 value={formData.sgpt_alt}
 onChange={(e) => setFormData({ ...formData, sgpt_alt: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Bil Tot" 
 variant="standard" 
 type="text"
 size="small"
 {...register("bil_tot", { required: "Veuillez entrer le point" })}
 value={formData.bil_tot}
 onChange={(e) => setFormData({ ...formData, bil_tot: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Bil Dir" 
 variant="standard" 
 type="text"
 size="small"
 {...register("bil_dir", { required: "Veuillez entrer le point" })}
 value={formData.bil_dir}
 onChange={(e) => setFormData({ ...formData, bil_dir: e.target.value })}/>



<TextField
className='inpt_material'
 id="standard-basic" 
 label="Bil ind" 
 variant="standard" 
 type="text"
 size="small"
 {...register("bil_ind", { required: "Veuillez entrer le point" })}
 value={formData.bil_ind}
 onChange={(e) => setFormData({ ...formData, bil_ind: e.target.value })}/>


<TextField
className='inpt_material'
 id="standard-basic" 
 label="Phosphatase alcaline" 
 variant="standard" 
 type="text"
 size="small"
 {...register("phosphatase_alcaline", { required: "Veuillez entrer le point" })}
 value={formData.phosphatase_alcaline}
 onChange={(e) => setFormData({ ...formData, phosphatase_alcaline: e.target.value })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Phosphatase acide" 
 variant="standard" 
 type="text"
 size="small"
 {...register("phosphatase_acide", { required: "Veuillez entrer le point" })}
 value={formData.phosphatase_acide}
 onChange={(e) => setFormData({ ...formData, phosphatase_acide: e.target.value })}/>


<TextField
className='inpt_material'
 id="standard-basic" 
 label="Glucosurie" 
 variant="standard" 
 type="text"
 size="small"
 {...register("glucosurie", { required: "Veuillez entrer le point" })}
 value={formData.glucosurie}
 onChange={(e) => setFormData({ ...formData, glucosurie: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Albuminirie" 
 variant="standard" 
 type="text"
 size="small"
 {...register("albuminirie", { required: "Veuillez entrer le point" })}
 value={formData.albuminirie}
 onChange={(e) => setFormData({ ...formData, albuminirie: e.target.value })}/>

</Box>


{/* ..................................................................................................... */}
{/* ..................................................................................................... */}






<Typography variant='h6'>Sero-immunologie :</Typography>
<Box sx={{
  display:"grid",
  gridTemplateColumns:"auto  auto",
  gap:"10px"
}}>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Test WIDAL TO" 
 variant="standard" 
 type="text"
 size="small"
 {...register("test_widal_to", { required: "Veuillez entrer le point" })}
 value={formData.test_widal_to}
 onChange={(e) => setFormData({ ...formData, test_widal_to: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="TH" 
 variant="standard" 
 type="text"
 size="small"
 {...register("t_h", { required: "Veuillez entrer le point" })}
 value={formData.t_h}
 onChange={(e) => setFormData({ ...formData, t_h: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Facteurs Rhumatoides" 
 variant="standard" 
 type="text"
 size="small"
 {...register("facteurs_rhumatoides", { required: "Veuillez entrer le point" })}
 value={formData.facteurs_rhumatoides}
 onChange={(e) => setFormData({ ...formData, facteurs_rhumatoides: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="ASLO" 
 variant="standard" 
 type="text"
 size="small"
 {...register("also", { required: "Veuillez entrer le point" })}
 value={formData.also}
 onChange={(e) => setFormData({ ...formData, also: e.target.value })}/>


<TextField
className='inpt_material'
 id="standard-basic" 
 label="Hbs Ag" 
 variant="standard" 
 type="text"
 size="small"
 {...register("hbs_age", { required: "Veuillez entrer le point" })}
 value={formData.hbs_age}
 onChange={(e) => setFormData({ ...formData, hbs_age: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Hbs Ag ALSO" 
 variant="standard" 
 type="text"
 size="small"
 {...register("hbs_age_also", { required: "Veuillez entrer le point" })}
 value={formData.hbs_age_also}
 onChange={(e) => setFormData({ ...formData, hbs_age_also: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Test VDRL ou RPR" 
 variant="standard" 
 type="text"
 size="small"
 {...register("test_vdrl", { required: "Veuillez entrer le point" })}
 value={formData.test_vdrl}
 onChange={(e) => setFormData({ ...formData, test_vdrl: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Test VIH" 
 variant="standard" 
 type="text"
 size="small"
 {...register("test_vih", { required: "Veuillez entrer le point" })}
 value={formData.test_vih}
 onChange={(e) => setFormData({ ...formData, test_vih: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Test de Grossesse" 
 variant="standard" 
 type="text"
 size="small"
 {...register("test_grossesse", { required: "Veuillez entrer le point" })}
 value={formData.test_grossesse}
 onChange={(e) => setFormData({ ...formData, test_grossesse: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="CRP" 
 variant="standard" 
 type="text"
 size="small"
 {...register("crp", { required: "Veuillez entrer le point" })}
 value={formData.crp}
 onChange={(e) => setFormData({ ...formData, crp: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Hapatite virale B" 
 variant="standard" 
 type="text"
 size="small"
 {...register("hapatite_viral_b", { required: "Veuillez entrer le point" })}
 value={formData.hapatite_viral_b}
 onChange={(e) => setFormData({ ...formData, hapatite_viral_b: e.target.value })}/>


<TextField
className='inpt_material'
 id="standard-basic" 
 label="H.Pylori" 
 variant="standard" 
 type="text"
 size="small"
 {...register("hpylorie", { required: "Veuillez entrer le point" })}
 value={formData.hpylorie}
 onChange={(e) => setFormData({ ...formData, hpylorie: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Autre" 
 variant="standard" 
 type="text"
 size="small"
 {...register("autre", { required: "Veuillez entrer le point" })}
 value={formData.autre}
 onChange={(e) => setFormData({ ...formData, autre: e.target.value })}/>

<TextField
className='inpt_material'
 id="standard-basic" 
 label="Date" 
 variant="standard" 
 type="date"
 size="small"
 {...register("date", { required: "Veuillez entrer le point" })}
 value={formData.date}
 onChange={(e) => setFormData({ ...formData, date: e.target.value })}/>

</Box>


<Box mt={2} sx={{display:"flex",justifyContent:"space-between"}}>
<ChoixTransferClt/>

<Button   sx={{
  width:"fit-content",
}}variant="outlined" color="success" onClick={detailLabo}>
          Voire la fiche
</Button>
</Box>



     </form>
    </Box>
    </Box>
    </Box> 
        </div>
      </section>
    </>
  )
}




export default TblLaboratoire
