


// - Aller chercher la liste de TOUS les pays via l'API REST Countries
// - Pendant que ça charge, afficher "Chargement..."
// - En cas d'erreur (pas d'internet par ex.), afficher un message
// - Une fois les pays reçus :
//   -les afficher avec le composant <CountryCard />
// - Le bouton "Actualiser" dans ton app parent change "refreshTick",
//   ce qui relance le useEffect et donc re-fait l'appel API.
// 

import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard"; // affiche 1 pays (drapeau, nom, etc.)

// Le composant reçoit 2 "props":
// - query : le texte tapé par l'utilisateur pour chercher un pays
// - refreshTick : un nombre qui change quand on clique "Actualiser" (pour relancer l'API)
export default function CountriesGrid({ query, refreshTick }) {
  // ----------------- ÉTATS (state) -----------------
  // countries : la liste complète des pays reçus de l'API
  const [countries, setCountries] = useState([]);
  // loading : pendant qu'on attend la réponse de l'API (true au début)
  const [loading, setLoading] = useState(true);
  // error : message d'erreur si l'appel API échoue
  const [error, setError] = useState(null);

  // ----------------- EFFET : appel API -----------------
  //------- useEffect se lance :
  // -------- au premier affichage du composant
  // -------- puis à CHAQUE fois que "refreshTick" change (grâce à la dépendance [refreshTick])
  useEffect(() => {
    // On passe en mode "chargement" et on efface l'erreur éventuelle
    setLoading(true);
    setError(null);

    //------- URL de l'API REST Countries
    //---- "fields=..." pour ne récupérer que les champs utiles (réponse plus légère)
    const url =
      "https://restcountries.com/v3.1/all?fields=name,capital,continents,region,population,languages,flags,cca3";

    // -------fetch : fonction native JS pour appeler une API (retourne une Promesse)
    fetch(url)
      //--- res.json() : transforme la réponse HTTP en objet/array JS
      .then((res) => res.json())
      .then((data) => {
        //--------- "data" = tableau de pays (chaque pays a "name", "flags", etc.)

        //---- 1) TRIER les pays par nom commun (A → Z)
        // -----   localeCompare = comparaison de chaînes "propre" (gère accents, etc.)
        data.sort((a, b) => (a?.name?.common || "").localeCompare(b?.name?.common || ""));

        //---- ENREGISTRER la liste dans le state : ça déclenche un re-render
        setCountries(data);

        // -----On n’est plus en chargement
        setLoading(false);
      })
      .catch(() => {
        //-- En cas d'erreur réseau/API
        setError("Erreur : impossible de charger les pays.");
        setLoading(false);
      });
  }, [refreshTick]); // ← re-lance l'effet quand refreshTick change

  // ----------- FILTRAGE par texte ---------------------------------------------------------------
  // On sécurise query (si jamais c'est undefined) puis on met en minuscules
  const searchText = (query || "").toLowerCase();

  // On garde uniquement les pays dont le nom contient "searchText"
  // .filter parcourt le tableau et ne garde QUE ceux qui passent la condition
  const filtered = countries.filter((c) =>
    (c?.name?.common || "").toLowerCase().includes(searchText)
  );

  // ---------------------------- AFFICHAGES selon l'état -------------
  // Si ça charge encore → on affiche un petit message
  if (loading) return <p className="text-center mt-4">Chargement...</p>;

  // Si on a eu une erreur → on l'affiche en rouge
  if (error) return <p className="text-center text-danger mt-4">{error}</p>;

  // ----------------- RENDU final ------
  return (
    <div className="row mt-4">
      {/* .map transforme chaque pays en un composant <CountryCard /> */}
      {filtered.map((c) => (
        // "key" doit être unique et stable : on utilise "cca3" (code pays)
        <CountryCard key={c.cca3} country={c} />
      ))}

      {/* Si aucun pays ne correspond à la recherche, on affiche un message */}
      {filtered.length === 0 && (
        <p className="text-center text-muted mt-3">Aucun pays trouvé.</p>
      )}
    </div>
  );
}

/*
ce que j'ai apriss
-------------- useState(valeurInitiale)
         crée un état [valeur, setValeur]. Modifier l'état redessine le composant.
-------------- useEffect(callback, [deps])
    exécute "callback" après le rendu. Si [deps] change, ça ré-exécute callback.
--------------fetch(url)
    récupère des données sur Internet (API). Retourne une Promesse.
-------------- .then(...).catch(...)
    gère la réponse OK (then) et les erreurs (catch).

-------------- .filter(...)
    garde uniquement les éléments qui matchent une condition (recherche texte).
-------------- .map(...)
   transforme un tableau en éléments JSX à afficher (une <CountryCard /> par pays).
*/

