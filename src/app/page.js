// src/app/page.js
'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/answer');
        const data = await response.json();
        setResult(data.result);
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
        setResult("Erreur lors de la récupération des données.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <h1>Résultat du prompt :</h1>
      {result ? <p>{result}</p> : <p>Aucun résultat.</p>}
    </div>
  );
}
