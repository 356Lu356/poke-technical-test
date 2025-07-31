import {
  fetchMultiplePokemon,
  generateRandomConsecutiveIds,
} from "@/lib/pokemonApi";
import { countVowels } from "@/lib/vowelCounter";
import { Pokemon } from "@/types/pokemon";
import { useState, useEffect, useCallback, useRef } from "react";

function useLoadRandomPokemons() {
  const isInitialLoad = useRef(true);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [vowelCount, setVowelCount] = useState<Record<string, number>>({});

  const loadRandomPokemon = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const randomIds = generateRandomConsecutiveIds();
      const randomPokemon = await fetchMultiplePokemon(randomIds);

      const names = randomPokemon.map((pokemon) => pokemon.name);

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
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      loadRandomPokemon();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    pokemon,
    vowelCount,
    loading,
    error,
    loadRandomPokemon,
  };
}

export default useLoadRandomPokemons;
