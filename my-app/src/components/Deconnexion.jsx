import React from 'react'
import { Stack,Box,Typography,TextField,Button,Link} from '@mui/material'
import './css_files/deconnexion.css'
import { useNavigate } from 'react-router-dom'

function Deconnexion() {
    
    const navigate=useNavigate();
    const handleAcceuil=()=>{
     navigate("/")
    }
    const handleout=()=>{
        localStorage.clear();
        navigate("/connexion")
    }
  return (
    <div className="all" sx={{
        
        
    }}>
    <Box sx={{
       width:"400px",
    }}>
    <Box  sx={{
        display:"grid",
        gap:"20px",
        textAlign:"center",
        margin:"10px "
        
       
    }}> 
   <img src='public\logoutimage-removebg-preview.png' alt='logoutimage' className='logoutimage'/>
        <Typography sx={{color:"red"}} variant="h5">Oh !! voulez-vous vraiment vous deconnectez??</Typography>
        <Button sx={{
            
            color:"white",
            borderRadius:"10px",
            boxShadow: "0px 0px 5px 0px rgba(38, 233, 233, 0.644)"
            }}  onClick={handleAcceuil}>
            Retour a l'Acceuil
        </Button>
        <Button variant="contained"  onClick={handleout} sx={{
            background:"black",
            boxShadow: "0px 0px 5px 0px rgba(38, 233, 233, 0.644)",
            "&:hover":{
              background:"0px 0px 5px 0px rgba(38, 233, 233, 0.644)",
            }
        }}>
            Se deconnecter
        </Button>
    </Box>
    </Box>
    </div>
  )
}

export default Deconnexion
