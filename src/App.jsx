


// Le composant principal de ton application React.
// C’est ici qu’on gère les "états" globaux : la recherche, le tri, le rafraîchissement, etc.
// Puis on envoie ces valeurs (et leurs fonctions) aux composants enfants :
// - <Navbar /> (la barre du haut)
// - <FiltersRow /> (les filtres de recherche)
// - <CountriesGrid /> (l’affichage des pays)
// - <Footer /> (le pied de page)


// Importation des composants utilisés dans la page
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, { useState } from "react";
import FiltersRow from "./components/FiltersRow";
import CountriesGrid from "./components/CountriesGrid";

export default function App() {
 
  //  DÉCLARATION DES ÉTATS (useState)
 
  // useState() permet de créer des "états" (valeurs qui peuvent changer).
  // Quand une valeur change, le composant se "re-render" (se met à jour automatiquement).

  // continent : pour filtrer les pays par continent sélectionné
  const [continent, setContinent] = useState("");
  // query : texte tapé par l'utilisateur pour rechercher un pays
  const [query, setQuery] = useState("");
  // sortOrder : ordre de tri (A-Z ou Z-A)
  const [sortOrder, setSortOrder] = useState("A-Z");
  // refreshTick : compteur qui change à chaque clic sur "Actualiser"
  // (sert à relancer l'appel API dans CountriesGrid)
  const [refreshTick, setRefreshTick] = useState(0);

 
  //  RENDU JSX : ce que React doit afficher à l’écran
  
  return (
    // container principal avec marges et espacements Bootstrap
    <div className="wx-shell container my-4 py-5 mt-5">
      
      {/* NAVBAR : barre du haut (fixe et stylée) */}
      <Navbar />

      {/* Titre principal de la page */}
      <h1 className="text-center text-white fw-bold mb-4">
        World<span className="brand-accent">Xplorer</span>
      </h1>

      {/*
         3 COMPOSANT DES FILTRES
         - ----J passe toutes les valeurs d’état (continent, query, etc.)
         --------- et les fonctions correspondantes pour les modifier
         ------ c’est ce qu’on appelle "lever l’état vers le haut" :
           App garde la logique centrale et transmet les infos.
      */}
      <FiltersRow
        continent={continent}
        onContinentChange={setContinent}   // quand on change le continent
        query={query}
        onQueryChange={setQuery}           // quand on tape dans la recherche
        sortOrder={sortOrder}
        onSortChange={setSortOrder}        // quand on change l’ordre de tri
        onRefresh={() => setRefreshTick((n) => n + 1)} // déclenche un rechargement
      />

      {/* 
          COMPOSANT D’AFFICHAGE DES PAYS
         - reçoit les filtres (continent, query, sortOrder)
         - reçoit refreshTick pour relancer l’appel API
         - se charge d’afficher les résultats avec <CountryCard />
    */}
      <CountriesGrid
        continent={continent}
        query={query}
        sortOrder={sortOrder}
        refreshTick={refreshTick}
      />

      {/* FOOTER : bas de page */}
      <Footer />
    </div>
  );
}

/*

 RÉSUMÉ (Mémo débutant)

- useState(valeurInitiale)
    crée un "état" local (variable réactive).
      Ex : const [nom, setNom] = useState("Karim");

- onChange={() => ...}
     sert à exécuter une fonction quand l’utilisateur modifie un champ (input, select…).

- Props :
    ce sont les "informations" qu’on envoie à un composant enfant.
      Ici : App → FiltersRow et App → CountriesGrid.

- Architecture de l’app :
    App.jsx
     ├── Navbar.jsx      (barre du haut)
     ├── FiltersRow.jsx  (barre des filtres)
     ├── CountriesGrid.jsx (affiche les cartes de pays)
     └── Footer.jsx      (bas de page)

-- refreshTick :
     sert à "forcer" une mise à jour de CountriesGrid quand on clique sur "Actualiser".
*/
