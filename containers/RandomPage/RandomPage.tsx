"use client";

import { useState, useEffect } from "react";
import type { Pokemon } from "@/types/pokemon";
import {
  fetchMultiplePokemon,
  generateRandomConsecutiveIds,
} from "@/lib/pokemonApi";
import { countVowels } from "@/lib/vowelCounter";
import LoadingSpinner from "@/components/LoadingSpinner";
import PokemonList from "@/components/PokemonList";
import VowelCountTable from "@/containers/RandomPage/components/VowelCountTable";

function RandomPage() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [vowelCount, setVowelCount] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadRandomPokemon = async () => {
    try {
      setLoading(true);
      setError(null);

      const randomIds = generateRandomConsecutiveIds();
      const randomPokemon = await fetchMultiplePokemon(randomIds);

      const names = randomPokemon.map((p) => p.name);
      const vowels = countVowels(names);

      setPokemon(randomPokemon);
      setVowelCount(vowels);
    } catch (err) {
      setError("Error al cargar los Pokémon aleatorios");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRandomPokemon();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Error</h2>
          <p className="text-gray-600 mb-8">{error}</p>
          <button
            onClick={loadRandomPokemon}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Intentar de nuevo
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Pokémon Aleatorios
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          5 Pokémon consecutivos aleatorios (índices 1-500, comenzando en número
          impar)
        </p>
        <button
          onClick={loadRandomPokemon}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Generar Nuevos Pokémon
        </button>
      </div>

      {/* Pokemon List */}
      <div className="mb-12">
        <PokemonList pokemon={pokemon} showIndex={true} />
      </div>

      {/* Vowel Count Table */}
      <div className="max-w-md mx-auto">
        <VowelCountTable vowelCount={vowelCount} />
      </div>

      {/* Pokemon Names Display */}
      <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Nombres analizados:
        </h3>
        <p className="text-gray-600">{pokemon.map((p) => p.name).join(", ")}</p>
      </div>
    </div>
  );
}

export default RandomPage;
