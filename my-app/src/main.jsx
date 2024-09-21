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
import TblMedicamentPerfusion from './components/materialUI/dialogue/tableaux/TblMedicamentPerfusion.jsx';

import TblPersonel from './components/materialUI/dialogue/tableaux/TblPersonel.jsx';
import Profil from './components/Profil.jsx';
import Deconnexion from './components/Deconnexion.jsx';
import DetailDossier from './components/materialUI/dialogue/tableaux/DetailDossier.jsx';
import TblReception from './components/materialUI/dialogue/tableaux/TblReception.jsx';
import TblLaboratoire from './components/materialUI/dialogue/tableaux/TblLaboratoire.jsx';
import TblHospitalisation from './components/materialUI/dialogue/tableaux/TblHospitalisation.jsx';
import TblAmbulatoire from './components/materialUI/dialogue/tableaux/TblAmbulatoire.jsx';
import Reception_detail from './components/materialUI/dialogue/tableaux/DetailServices/Reception_detail.jsx';
import Laboratoire_detail from './components/materialUI/dialogue/tableaux/DetailServices/Laboratoire_detail.jsx';
import Consultation_detail from './components/materialUI/dialogue/tableaux/DetailServices/Consultation_detail.jsx';
import Hospitalisation_detail from './components/materialUI/dialogue/tableaux/DetailServices/Hospitalisation_detail.jsx';
import Fiched_evolution from './components/materialUI/dialogue/tableaux/DetailServices/Fiched_evolution.jsx';
import Ambulatoire_detail from './components/materialUI/dialogue/tableaux/DetailServices/Ambulatoire_detail.jsx';
import TblDossierConsultation from './components/materialUI/dialogue/tableaux/TblDossierConsultation.jsx';
import TblDossierLaboratoire from './components/materialUI/dialogue/tableaux/TblDossierLaboratoire.jsx';
import TblDossierHospitalisation from './components/materialUI/dialogue/tableaux/TblDossierHospitalisation.jsx';
import UpdateProfil from './components/UpdateProfil.jsx';
import TblMedicamentAutre from './components/materialUI/dialogue/tableaux/TblMedicamentAutre.jsx';





const routes=createBrowserRouter([
 
  {
    path:"/",
    element:<ConnexionPage />
},
  {
   path:"/home",
   element:<App/>
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
    path:"/medicament1",
    element:<TblMedicament/>
  },
  {
    path:"/medicament2",
    element:<TblMedicamentPerfusion/>
  },
  {
    path:"/medicament3",
    element:<TblMedicamentAutre/>
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
   {
    path:"/receptiondetail",
    element:<Reception_detail/>
   },
   ,
   {
    path:"/laboratoiredetail",
    element:<Laboratoire_detail/>
   },
   {
    path:"/consultationdetail",
    element:<Consultation_detail/>
   },
   {
    path:"/hospitalisationdetail1",
    element:<Hospitalisation_detail/>
   },
   {
    path:"/hospitalisationdetail2",
    element:<Fiched_evolution/>
   },
   {
    path:"/ambulatoiredetail",
    element:<Ambulatoire_detail/>
   },
   {
    path:"/acceuilconsultation",
    element:<TblDossierConsultation/>
   },
   {
    path:"/acceuillaboratoire",
    element:<TblDossierLaboratoire/>
   },
   {
    path:"/acceuilHospitalisation",
    element:<TblDossierHospitalisation/>
   },
   {
    path:"/updateprofil",
    element:<UpdateProfil/>
   }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Toaster />
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
