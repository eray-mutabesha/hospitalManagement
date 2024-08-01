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
    path:"/inscription",
    element:<Inscription />
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
    path:"/chambres",
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
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
