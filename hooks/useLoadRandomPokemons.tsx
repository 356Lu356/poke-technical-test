import {
  fetchMultiplePokemon,
  generateRandomConsecutiveIds,
} from "@/lib/pokemonApi";
import { countVowels } from "@/lib/vowelCounter";
import { Pokemon } from "@/types/pokemon";
import { useState, useEffect, useCallback } from "react";

function useLoadRandomPokemons() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [vowelCount, setVowelCount] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadRandomPokemon = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const randomIds = generateRandomConsecutiveIds();
      const randomPokemon = await fetchMultiplePokemon(randomIds);

      const names = randomPokemon.map((pokemon) => pokemon.name);
      console.log("Nombres de Pokémon:", names);
      const vowels = countVowels(names);

      setPokemon(randomPokemon);
      setVowelCount(vowels);
    } catch (err) {
      setError("Error al cargar los Pokémon aleatorios");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadRandomPokemon();
  }, [loadRandomPokemon]);

  return {
    pokemon,
    vowelCount,
    loading,
    error,
    loadRandomPokemon,
  };
}

export default useLoadRandomPokemons;
