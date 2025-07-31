import useLoadRandomPokemons from "@/hooks/useLoadRandomPokemons";
import React from "react";

function GenerateNewPokemonButton() {
  const { loadRandomPokemon } = useLoadRandomPokemons();
  return (
    <button
      onClick={loadRandomPokemon}
      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
    >
      Generar Nuevos Pokémon
    </button>
  );
}

export default GenerateNewPokemonButton;
