import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { useForm} from "react-hook-form"
import '../../../index.css';
import { Box ,TextField, Typography,InputLabel,Select,MenuItem,FormControl}  from '@mui/material';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DetailConsultation() {
  const { register, handleSubmit,formState:{errors} } = useForm();
 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <p onClick={handleClickOpen}>
        Details
      </p>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'fixed' }} id='appBar'>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Dossier du patient : KATEMBO MWAMI
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
             voire tout les fiches
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={{
            display:"flex",
            background:" rgba(38, 233, 233, 0.5)"
            
        }}>
        <Box sx={{
            // border:"1px solid red",
            marginTop:"65px",
            overflowY:"scroll",
            position:"fixed",
            width:"400px",
            height:"100vh",
            // backgroundColor:"rgba(0, 0, 0, 0.089)",
            background:"whitesmoke",
            
           
        }}>

            <Box>
                
                <Box sx={{
                 margin:"20px",
                 textAlign:"justify"
                }}>
                  <Box sx={{
                    borderBottom:"1px solid black"
                }}>
                    <Typography variant='h5' sx={{}}>Note medical</Typography>
                </Box>
                <Typography mt={2}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ratione obcaecati ut consequuntur magnam inventore odio esse quod, ad nesciunt minima cumque asperiores consectetur unde! Deserunt sequi exercitationem officiis laudantium?
               </Typography>
               <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ratione obcaecati ut consequuntur magnam inventore odio esse quod, ad nesciunt minima cumque asperiores consectetur unde! Deserunt sequi exercitationem officiis laudantium?
               </Typography>
               <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ratione obcaecati ut consequuntur magnam inventore odio esse quod, ad nesciunt minima cumque asperiores consectetur unde! Deserunt sequi exercitationem officiis laudantium?
               </Typography>
               
              </Box>
            </Box>
          
        </Box>
        <Box sx={{
            margin:"50px auto",
            display:"grid",
            gap:"20px",
            gridTemplateColumns:"auto auto",
            // border:"1px solid red",
            marginLeft:"430px"
        }}>
        <form className='medecin_fom'>
        <Typography variant='h6'>BON DE LABORATOIRE</Typography>


<FormControl variant="filled"   >
<InputLabel id="demo-simple-select-filled-label">Patient ID</InputLabel>
        <Select
           labelId="demo-simple-select-filled-label"
          id="demo-simple-select-standard"
          size="small"
          {...register("patient_id", { required: true })}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
        </Select>
</FormControl>
<FormControl variant="filled"   >
<InputLabel id="demo-simple-select-filled-label">Service</InputLabel>
        <Select
           labelId="demo-simple-select-filled-label"
          id="demo-simple-select-standard"
          size="small"
          {...register("patient_id", { required: true })}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Hospitalisation</MenuItem>
          <MenuItem value={20}>Ambilatoire</MenuItem>
        </Select>
</FormControl>



<Typography variant='h6'>Hermatologie :</Typography>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Hemoglobine" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Hemoglobine", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Hematocrite" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Hematocrite", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Globule blanc" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Globule_blanc", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Globule rouge" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Globule_rouge", { required: true })}/>


 <Typography variant='h6'>FL(%) :</Typography>
 <TextField
className='inpt_material'
 id="filled-basic" 
 label="N" 
 variant="filled" 
 type="text"
 size="small"
 {...register("fl_n", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="L" 
 variant="filled" 
 type="text"
 size="small"
 {...register("fl_l", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="E" 
 variant="filled" 
 type="text"
 size="small"
 {...register("fl_E", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="M" 
 variant="filled" 
 type="text"
 size="small"
 {...register("fl_m", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="B" 
 variant="filled" 
 type="text"
 size="small"
 {...register("fl_B", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Vitesse de sedimentation" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Vitesse_de_sedimentation", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="TS" 
 variant="filled" 
 type="text"
 size="small"
 {...register("ts", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="TC" 
 variant="filled" 
 type="text"
 size="small"
 {...register("tc", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Plaquette sanguines" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Plaquette_sanguines", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Test d'Emmel" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Test_Emmel", { required: true })}/>
<Typography variant='h6'>Parasitologie/ Cytologie :</Typography>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Goutte epaisse" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Goutte_epaisse", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="TDR" 
 variant="filled" 
 type="text"
 size="small"
 {...register("TDR", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Goutte fraiche" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Goutte_fraiche", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Salle enrichies" 
 variant="filled" 
 type="text"
 size="small"
 {...register("salle_enrichie", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Salle directes" 
 variant="filled" 
 type="text"
 size="small"
 {...register("salle_directes", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Frottis uretral a frais" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Frottis_uretral", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Frottis vaginale a frais" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Frottis_vaginal", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Sediment urinaire" 
 variant="filled" 
 type="text"
 size="small"
 {...register("Sediment_urinaire", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="LCR-Element" 
 variant="filled" 
 type="text"
 size="small"
 {...register("LCR_Element", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="FI" 
 variant="filled" 
 type="text"
 size="small"
 {...register("FI", { required: true })}/>
<Typography variant='h6'>Bacteriologie :</Typography>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="FV Gram" 
 variant="filled" 
 type="text"
 size="small"
 {...register("FV_Gram", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="FU Gram" 
 variant="filled" 
 type="text"
 size="small"
 {...register("FU_Gram", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="L" 
 variant="filled" 
 type="text"
 size="small"
 {...register("FU_Gram", { required: true })}/>

</form>





<form className='medecin_fom'>
<Typography variant='h6'>FICHE D'EVOLUTION</Typography>
<FormControl variant="filled"   >
<InputLabel id="demo-simple-select-filled-label">Service</InputLabel>
        <Select
           labelId="demo-simple-select-filled-label"
          id="demo-simple-select-standard"
          size="small"
          {...register("patient_id", { required: true })}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Hospitalisation</MenuItem>
          <MenuItem value={20}>Ambilatoire</MenuItem>
        </Select>
</FormControl>

<FormControl variant="filled"   >
<InputLabel id="demo-simple-select-filled-label">Destination</InputLabel>
        <Select
           labelId="demo-simple-select-filled-label"
          id="demo-simple-select-standard"
          size="small"
          {...register("patient_id", { required: true })}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Consultation</MenuItem>
          <MenuItem value={20}>Urgence</MenuItem>
        </Select>
</FormControl>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Emplacement" 
 variant="filled" 
 type="text"
 size="small"
 {...register("emplacement", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Emplacement" 
 variant="filled" 
 type="text"
 size="small"
 {...register("emplacement", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Emplacement" 
 variant="filled" 
 type="text"
 size="small"
 {...register("emplacement", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Emplacement" 
 variant="filled" 
 type="text"
 size="small"
 {...register("emplacement", { required: true })}/>
</form>

<form className='medecin_fom'>
<Typography variant='h6'>FICHE DE NURSING</Typography>
<FormControl variant="filled"   >
<InputLabel id="demo-simple-select-filled-label">Service</InputLabel>
        <Select
           labelId="demo-simple-select-filled-label"
          id="demo-simple-select-standard"
          size="small"
          {...register("patient_id", { required: true })}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Hospitalisation</MenuItem>
          <MenuItem value={20}>Ambilatoire</MenuItem>
        </Select>
</FormControl>

<FormControl variant="filled"   >
<InputLabel id="demo-simple-select-filled-label">Destination</InputLabel>
        <Select
           labelId="demo-simple-select-filled-label"
          id="demo-simple-select-standard"
          size="small"
          {...register("patient_id", { required: true })}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Consultation</MenuItem>
          <MenuItem value={20}>Urgence</MenuItem>
        </Select>
</FormControl>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Emplacement" 
 variant="filled" 
 type="text"
 size="small"
 {...register("emplacement", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Emplacement" 
 variant="filled" 
 type="text"
 size="small"
 {...register("emplacement", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Emplacement" 
 variant="filled" 
 type="text"
 size="small"
 {...register("emplacement", { required: true })}/>

<TextField
className='inpt_material'
 id="filled-basic" 
 label="Emplacement" 
 variant="filled" 
 type="text"
 size="small"
 {...register("emplacement", { required: true })}/>
</form>

        </Box>
        </Box>

       
       
      </Dialog>
    </React.Fragment>
  );
}
