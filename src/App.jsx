// // /** @format */

// // import { Component } from 'react';
// // import './App.css';



// // fetch('https://jsonplaceholder.typicode.com/todos/1')
// // .then((response) => {
// //   return response.json()
// // })
// // .then((result) => {
// //   console.log(result)
// // })
// // function App() {

// // })
// // .then((result) => {
// //   setTimeout(() => {

// //   }, 1500);
// //   this.setState({post: result})
// // })
// //   }
// //   // const [count, setCount] = useState(0)

// //   return (
// //     <>
// //     <div className="App">
// //     <h1>Test use API</h1>
// //     {this.state.post.title}

// //     </div>
// //     </>
// //   );
// // }

// // export default App;

// import React from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import FiltersRows from "./components/FiltersRow"
// import CountryCard from "./components/CountryCard";
// function App() {
//   return (
//     <div className="container text-center mt-5">

//     <Navbar />
//     <FiltersRows />

//        {/* Grille de cartes */}
//        <div className="container mt-5">
//         <div className="row">
//           {countries.map((c, index) => (
//             <CountryCard key={index} country={c} />
//           ))}
//         </div>
//       </div>
//       {/* <h1 className="text-primary">Bootstrap fonctionne 🎉</h1>
//       <button className="btn btn-success">Clique ici</button> */}

//       <Footer />
//     </div>
//   );
// }

// export default App;
// Composant principal (la page)
// Ici on gère juste les "états" des filtres et on les envoie aux autres composants.
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, { useState } from "react";
import FiltersRow from "./components/FiltersRow";
import CountriesGrid from "./components/CountriesGrid";

export default function App() {
  // États des filtres (très simples)
  const [continent, setContinent] = useState("");
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("A-Z");
  const [refreshTick, setRefreshTick] = useState(0); // change quand on clique "Actualiser"

  return (
    <div className="wx-shell container my-4 py-5 mt-5">
          <Navbar />

      <h1 className="text-center text-white fw-bold mb-4">
      World<span className="brand-accent">Xplorer</span>
        {/* WorldXplorer  */}
      </h1>

      {/* Barre de filtres : on passe les valeurs + fonctions pour les modifier */}
      <FiltersRow
        continent={continent}
        onContinentChange={setContinent}
        query={query}
        onQueryChange={setQuery}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        onRefresh={() => setRefreshTick((n) => n + 1)}
      />

      {/* La grille des pays : elle va chercher les données et applique les filtres */}
      <CountriesGrid
        continent={continent}
        query={query}
        sortOrder={sortOrder}
        refreshTick={refreshTick}
      />
        <Footer />

    </div>
  );
}


// import React from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import FiltersRow from "./components/FiltersRow"; // <------------------------------------------------------ nom cohérent (singulier)
// import CountriesGrid from "./components/CountriesGrid"; // <------------------------------------------------------ place le fichier dans /components

// export default function App() {
//   return (
//     <div className="wx-shell">
//       <Navbar />
//       {/*--------------------------------------Filtres sous la navbar------------------------------------------------------*/}
//       <FiltersRow />

//       {/*----------------------------------------------------- Grille alimentée par l'API----------------------------------------------------- */}
//       <main className="container my-4">
//         <h1 className="text-center text-white fw-bold mb-4">WorldXplorer</h1>
//         <CountriesGrid />
//       </main>

//       <Footer />
//     </div>
//   );
// }
