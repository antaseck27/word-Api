

// import React from "react";

// function Navbar() {
//   return (
//     // 🔹 "fixed-top" = reste en haut, 100% largeur
//     // 🔹 suppression du container-fluid → on gère nous-mêmes le style plein écran
//     <nav className="navbar navbar-expand-lg" style={styles.navbar}>
//       <div style={styles.inner}>
//         <a className="navbar-brand text-light fw-bold" href="#">
//           MonProjet<span style={styles.brandAccent}>Pro</span>
//         </a>

//         <button
//           className="navbar-toggler bg-light"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a className="nav-link text-light" href="#accueil">
//                 Accueil
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-light" href="#services">
//                 Services
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-light" href="#contact">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// // Styles personnalisés
// const styles = {
//   navbar: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0, // ✅ occupe toute la largeur
//     background: "linear-gradient(90deg, #0a4d68, #088395, #05BFDB)",
//     padding: "10px 0",
//     zIndex: 1000, // pour rester au-dessus du contenu
//   },
//   inner: {
//     width: "100%",
//     maxWidth: "1200px", // largeur max pour centrer le contenu
//     margin: "0 auto",
//     padding: "0 20px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   brandAccent: {
//     color: "#FFD700",
//   },
// };

// export default Navbar;


import React from "react";

function Navbar() {
  return (

    
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container-fluid navbar-inner">
        <a className="navbar-brand fw-bold" href="#">
        World<span className="brand-accent">Xplorer</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#accueil">Accueil</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
