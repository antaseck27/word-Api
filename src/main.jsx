

import React from "react"; // Import de la librairie React
import ReactDOM from "react-dom/client"; // Permet d’afficher  app dans le DOM (le HTML)
import App from "./App.jsx"; // Composant principal de l'application 

// j' ajoute Bootstrap (style + JS du menu)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// mon fichier de styles perso
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode> est un outil de vérification de React
  // Il aide à repérer les erreurs ou mauvaises pratiques pendant le développement.
  <React.StrictMode>
    {/* j'affiche le composant principal App */}
    <App />
  </React.StrictMode>
);