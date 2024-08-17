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
import TblDepartement from './components/materialUI/dialogue/tableaux/TblDepartement.jsx';
import TblDossier from './components/materialUI/dialogue/tableaux/TblDossier.jsx';
import TblFacturation from './components/materialUI/dialogue/tableaux/TblFacturation.jsx';
import TblMedicament from './components/materialUI/dialogue/tableaux/TblMedicament.jsx';
import TblPersonel from './components/materialUI/dialogue/tableaux/TblPersonel.jsx';
import Profil from './components/Profil.jsx';
import Deconnexion from './components/Deconnexion.jsx';
import TblConsultation from './components/materialUI/dialogue/tableaux/TblConsultation.jsx';
import DetailDossier from './components/materialUI/dialogue/tableaux/DetailDossier.jsx';
import DetailpatientInfos from './components/materialUI/dialogue/DetailpatientInfos.jsx';
import TblReception from './components/materialUI/dialogue/tableaux/TblReception.jsx';




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
    path:"/departements",
    element:<TblDepartement/>
  },
  {
    path:"/dossier",
    element:<TblDossier/>
  },
  {
    path:"/facturation",
    element:<TblFacturation/>
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
    path:"/consultation",
    element:<TblConsultation />
   },
   {
    path:"/detaildossier",
    element:<DetailDossier/>
   },
   {
    path:"/detailPatient",
    element:<DetailpatientInfos/>
   },
   {
    path:"/reception",
    element:<TblReception/>
   },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
