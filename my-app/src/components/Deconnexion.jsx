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
        
        
        <Button  onClick={handleAcceuil} variant='outlined' sx={{
          // width:"fit-content",
          // marginLeft:"auto",
          // marginRight:"auto"
        }}>
            Retour a l'Acceuil
        </Button>


        <Button variant="outlined" color='error'  onClick={handleout} sx={{
          // width:"fit-content",
          // marginLeft:"auto",
          // marginRight:"auto"
        }}>
            Se deconnecter
        </Button>

    </Box>
    </Box>
    </div>
  )
}

export default Deconnexion
