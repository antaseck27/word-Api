



// CountryCard.jsx

// Ce composant affiche les informations d’un seul pays :
//  - le drapeau
//  - le nom
//  - le continent
//  - la capitale
//  - la population
//  - la langue principale

import React from "react";

// -----------Le composant reçoit une "prop" appelée `country`
// -------------- c’est un objet contenant toutes les infos du pays (envoyé par CountriesGrid)
export default function CountryCard({ country }) {

  // 
  //   Préparation des données du pays

  // On utilise l’opérateur "?."
  //   ------ permet d’accéder à une propriété sans provoquer d’erreur si elle n’existe pas
  // On utilise aussi "??" (opérateur de coalescence nulle)
  //   ------- renvoie la valeur de droite si celle de gauche est "null" ou "undefined"

  // Nom du pays (ou "Nom inconnu" si manquant)
  const name = country?.name?.common ?? "Nom inconnu";

  // URL du drapeau (préférence pour .png sinon .svg)
  const flag = country?.flags?.png ?? country?.flags?.svg ?? "";

  // Capitale : certaines API renvoient un tableau (ex: ["Ouagadougou"])
  // donc on vérifie si c’est un tableau, sinon on prend la valeur directe.
  const capital = Array.isArray(country?.capital)
    ? country.capital[0]
    : (country?.capital ?? "—"); // "—" = tiret si non renseigné

  // Continent (même logique que capitale)
  const continent = Array.isArray(country?.continents)
    ? country.continents[0]
    : (country?.continents ?? "—");

  // Région (ex: "Western Africa")
  const region = country?.region ?? "—";

  // Population (par défaut 0 si non indiquée)
  const population = country?.population ?? 0;

  // Langue principale : "languages" est un objet, donc on prend la 1ère valeur avec Object.values()
  const language = country?.languages
    ? Object.values(country.languages)[0]
    : "—";

  
  // Ici, on crée la "carte" d’un pays (country-card)
  // Elle est organisée comme ceci :
  //   - une image du drapeau
  //   - le nom + continent
  //   - une zone cachée (visible seulement au survol)

  return (
    
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="country-card">

        {/* Bloc contenant le drapeau */}
        <div className="flag-container">
          <img src={flag} alt={name} className="flag" />
        </div>

        {/* Bloc affichant le nom et le continent */}
        <div className="country-info">
          <h5 className="country-name">{name}</h5>
          <p className="continent">{continent}</p>
        </div>

        {/* ----------------------------------------------------
            Détails supplémentaires visibles au survol (hover)
            → Cette partie s’affiche quand on passe la souris sur la carte
            (grâce au CSS que tu ajouteras plus tard)
           ---------------------------------------------------------------------------------------------- */}
        <div className="country-hover">
          <p><strong>Capitale :</strong> {capital}</p>
          {/* .toLocaleString() : formate le nombre avec des espaces selon la langue locale */}
          <p><strong>Population :</strong> {population.toLocaleString()}</p>
          <p><strong>Région :</strong> {region}</p>
          <p><strong>Langue principale :</strong> {language}</p>
        </div>

      </div>
    </div>
  );
}

/*


--country?.nom
      évite une erreur si "country" ou "nom" n’existe pas encore.
-- ?? "valeurParDéfaut"
      permet d’afficher une valeur par défaut si rien n’est trouvé.
-- Array.isArray()
     vérifie si une donnée est un tableau (utile pour "capital" ou "continents").
-- Object.values(objet)
      transforme les valeurs d’un objet en tableau (ici pour récupérer la 1ère langue).
-- .toLocaleString()
     formate joliment les grands nombres (ex: 25000000 → 25 000 000).
-- { ... } dans JSX
     permet d’insérer du JavaScript dans le rendu HTML.
--className
     équivalent de "class" en HTML, mais version React.



- Ce composant est appelé dans CountriesGrid.jsx via :
    <CountryCard key={pays.cca3} country={pays} />
- Il affiche les infos d’un seul pays à partir des données reçues de l’API.
*/
