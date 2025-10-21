



import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

export default function CountriesGrid({ query, refreshTick }) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Appel API
  useEffect(() => {
    setLoading(true);
    setError(null);

    const url = "https://restcountries.com/v3.1/all?fields=name,capital,continents,region,population,languages,flags,cca3";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Trie les pays par ordre alphabétique
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Erreur : impossible de charger les pays.");
        setLoading(false);
      });
  }, [refreshTick]);

  // Filtrer selon le texte tapé
  const searchText = query.toLowerCase();
  const filtered = countries.filter((c) =>
    c.name.common.toLowerCase().includes(searchText)
  );

  if (loading) return <p className="text-center mt-4">Chargement...</p>;
  if (error) return <p className="text-center text-danger mt-4">{error}</p>;

  return (
    <div className="row mt-4">
      {filtered.map((c) => (
        <CountryCard key={c.cca3} country={c} />
      ))}
      {filtered.length === 0 && (
        <p className="text-center text-muted mt-3">Aucun pays trouvé.</p>
      )}
    </div>
  );
}


