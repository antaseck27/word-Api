// Composant très simple d'affichage d'un pays
import React from "react";

export default function CountryCard({ country }) {
  // Données sûres (avec valeurs par défaut si l'API ne renvoie pas tout)
  const name = country?.name?.common ?? "Nom inconnu";
  const flag = country?.flags?.png ?? country?.flags?.svg ?? "";
  const capital = Array.isArray(country?.capital) ? country.capital[0] : (country?.capital ?? "—");
  const continent = Array.isArray(country?.continents) ? country.continents[0] : (country?.continents ?? "—");
  const region = country?.region ?? "—";
  const population = country?.population ?? 0;
  const language =
    country?.languages ? Object.values(country.languages)[0] : "—";

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="country-card">
        <div className="flag-container">
          <img src={flag} alt={name} className="flag" />
        </div>

        <div className="country-info">
          <h5 className="country-name">{name}</h5>
          <p className="continent">{continent}</p>
        </div>

        {/* Détails visibles au survol */}
        <div className="country-hover">
          <p><strong>Capitale :</strong> {capital}</p>
          <p><strong>Population :</strong> {population.toLocaleString()}</p>
          <p><strong>Région :</strong> {region}</p>
          <p><strong>Langue principale :</strong> {language}</p>
        </div>
      </div>
    </div>
  );
}
