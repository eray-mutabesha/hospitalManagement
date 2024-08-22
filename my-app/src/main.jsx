import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';
import './index.css';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import ConnexionPage from './components/ConnexionPage.jsx';
import Inscription from './components/Inscription.jsx'
import TblMedecins from './components/materialUI/dialogue/tableaux/TblMedecins.jsx';
import TblPatient from './components/materialUI/dialogue/tableaux/TblPatient.jsx';
import TblChambre from './components/materialUI/dialogue/tableaux/TblChambre.jsx';
import TblDossier from './components/materialUI/dialogue/tableaux/TblDossier.jsx';
import TblMedicament from './components/materialUI/dialogue/tableaux/TblMedicament.jsx';
import TblPersonel from './components/materialUI/dialogue/tableaux/TblPersonel.jsx';
import Profil from './components/Profil.jsx';
import Deconnexion from './components/Deconnexion.jsx';
import DetailDossier from './components/materialUI/dialogue/tableaux/DetailDossier.jsx';
import TblReception from './components/materialUI/dialogue/tableaux/TblReception.jsx';
import TblLaboratoire from './components/materialUI/dialogue/tableaux/TblLaboratoire.jsx';
import TblHospitalisation from './components/materialUI/dialogue/tableaux/TblHospitalisation.jsx';
import TblAmbulatoire from './components/materialUI/dialogue/tableaux/TblAmbulatoire.jsx';




const routes=createBrowserRouter([
 
  {
    path:"/",
    element:<App/>
},
  {
   path:"/connexion",
   element:<ConnexionPage />
  },
  {
    path:"/deconnexion",
    element:<Deconnexion/>
   },
  {
    path:"/inscription",
    element:<Inscription />
  },
  {
    path:"/profil",
    element:<Profil />
  },
  {
    path:"/tableaumedecins",
    element:<TblMedecins/>
  },
  {
    path:"/tableaupatient",
    element:<TblPatient />
  },
  {
    path:"/Consultation",
    element:<TblChambre/>
  },
  
  {
    path:"/dossier",
    element:<TblDossier/>
  },
  {
    path:"/Laboratoire",
    element:<TblLaboratoire/>
  },
  {
    path:"/medicament",
    element:<TblMedicament/>
  },
  {
    path:"/personel",
    element:<TblPersonel/>
  },
   {
    path:"/detaildossier",
    element:<DetailDossier/>
   },
   {
    path:"/reception",
    element:<TblReception/>
   },
   {
    path:"/hospitalisation",
    element:<TblHospitalisation/>
   },
   {
    path:"/ambulatoire",
    element:<TblAmbulatoire/>
   },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
