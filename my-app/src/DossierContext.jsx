import React from "react";
import { createContext, useState } from 'react';


// Créer le contexte
export const DossierContext = createContext();

// Créer le provider
export const DossierProvider = ({ children }) => {
  const [dossier, setDossier] = useState(null);
  const [Laboratoire,setLaboratoire] = useState(null)

  return (
    <DossierContext.Provider value={{ dossier, setDossier ,Laboratoire,setLaboratoire }}>
      {children}
    </DossierContext.Provider>
  );
};