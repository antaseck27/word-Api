

// import React from "react";

// // Un composant simple avec un champ de recherche + un bouton Actualiser
// function FiltersRow({ query, onQueryChange, onRefresh }) {
//   return (
//     <div className="container mt-5 py-2 mb-5" py-5>
//       {/* Bloc avec bordure et ombre */}
//       <div className="  p-3 border rounded-3 shadow-sm bg-white filers1">
//         <div className="row g-3 align-items-end">

//           {/*  Champ de recherche */}
//           <div className="col-md-9">
//             <label htmlFor="search" className="form-label fw-semibold">
//               Rechercher un pays
//             </label>
//             <input
//               type="text"
//               id="search"
//               placeholder="Ex : Burkina Faso"
//               className="form-control"
//               value={query}
//               onChange={(e) => onQueryChange(e.target.value)} // envoie la valeur à App.jsx
//             />
//           </div>

//           {/* Bouton Actualiser */}
//           <div className="col-md-3 d-grid">
//             <label className="form-label fw-semibold me-5">
//               Actualiser
//             </label>
//             <button className="btn btn-wx border" onClick={onRefresh}>
//               Actualiser
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default FiltersRow;

import React from "react";

function FiltersRow({ query, onQueryChange, onRefresh }) {
  return (
    // Conteneur avec fond dégradé
    <div className="filters-bar py-4">
      <div className="container">
        <div className="row align-items-center g-3 justify-content-center">
          
          {/* Champ de recherche */}
          <div className="col-md-8 col-sm-12">
            <input
              type="text"
              className="form-control search-input"
              placeholder="🔍 Rechercher un pays (ex : Burkina Faso)"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
            />
          </div>

          {/* Bouton actualiser */}
          <div className="col-md-3 col-sm-12 d-grid">
      <button className="btn btn-refresh" onClick={onRefresh}>
            Actualiser
            </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default FiltersRow;
