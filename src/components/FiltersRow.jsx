



// FiltersRow.jsx

// Ce composant affiche une "barre de recherche" avec :
//   ---------- un champ texte pour rechercher un pays
//   -------- un bouton "Actualiser" pour relancer la récupération des pays
//
// Les données (query, onQueryChange, onRefresh) sont passées
// par le composant parent (App.jsx ou CountriesGrid).
// 

import React from "react";

// Définition du composant fonctionnel "FiltersRow"
// Il reçoit 3 "props" (valeurs venant du parent) :
// -------- -------query : le texte tapé dans la recherche
// - -------onQueryChange : une fonction appelée quand l'utilisateur écrit dans le champ
// -------- onRefresh : une fonction appelée quand on clique sur le bouton "Actualiser"
function FiltersRow({ query, onQueryChange, onRefresh }) {
  return (

    //  Structure générale du composant
 
    // Le composant est constitué d'une "barre" contenant un champ + un bouton.
    // "filters-bar" est une classe CSS (le style sera défini dans index.css)
    <div className="filters-bar py-4">
      {/* Le conteneur Bootstrap pour centrer le contenu */}
      <div className="container">
        {/* "row" = ligne Bootstrap / "align-items-center" = centrer verticalement
            "g-3" = espacement entre colonnes / "justify-content-center" = centrage horizontal */}
        <div className="row align-items-center g-3 justify-content-center">
          
          {/* 
               Champ de recherche
            
              ------- C’est un <input> de type texte
              --------------- Il est relié à la variable "query"
              - -------À chaque frappe, il déclenche "onQueryChange"
                pour envoyer la nouvelle valeur au composant parent.
          */}
          <div className="col-md-8 col-sm-12">
            <input
              type="text"
              className="form-control search-input"
              placeholder="🔍 Rechercher un pays (ex : Burkina Faso)"
              value={query} // valeur actuelle (venant du parent)
              onChange={(e) => onQueryChange(e.target.value)} // quand on tape → on envoie la valeur
            />
          </div>

          {/*
              Bouton Actualiser
             
              -------- Quand on clique, il déclenche la fonction "onRefresh"
                (qui relance le chargement des pays dans le parent).
              - -------"d-grid" = met le bouton sur toute la largeur de sa colonne.
          */}
          <div className="col-md-3 col-sm-12 d-grid">
            <button
              className="btn btn-refresh"
              onClick={onRefresh} // au clic → relance le useEffect côté parent
            >
              Actualiser
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

// On exporte le composant pour pouvoir l'utiliser dans App.jsx
export default FiltersRow;

/*
 RÉSUMÉ 


 1. Props reçues :
   --------- query → texte de recherche
   ------- onQueryChange → fonction appelée quand l’utilisateur tape
   ----------- onRefresh → fonction appelée quand on clique sur le bouton

 2. Comment ça marche :
   ------- L’utilisateur tape un texte → "onQueryChange" envoie ce texte à App.jsx
   -------- App.jsx met à jour "query" → React redessine la liste filtrée
   - Si on clique sur "Actualiser" → App.jsx change "refreshTick"
     → CountriesGrid relance le "fetch()" vers l’API

 3. Classes Bootstrap :
   ------- container → centre le contenu
  ------- row / col-md / col-sm → structure en grille responsive
    ------- form-control → style par défaut du champ input
   ------- btn → style de base du bouton
     -------- d-grid → bouton pleine largeur
    ------- g-3 → espacement entre colonnes

 4. Syntaxe utile :
   - onChange={(e) => onQueryChange(e.target.value)}
         récupère la valeur du champ à chaque frappe
   - onClick={onRefresh}
         déclenche l’action du parent (rechargement)



1Importer dans App.jsx :
     import FiltersRow from "./components/FiltersRow";

2 Utiliser ainsi :
     <FiltersRow
       query={query}
       onQueryChange={setQuery}
       onRefresh={handleRefresh}
     />

 Associer à CountriesGrid pour filtrer la liste des pays.


*/