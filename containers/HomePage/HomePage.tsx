import PokemonList from "@/components/PokemonList";
import { fetchMultiplePokemon } from "@/lib/pokemonApi";
import React from "react";

async function HomePage() {
  const pokemonIds = Array.from({ length: 9 }, (_, i) => i + 1);
  const pokemon = await fetchMultiplePokemon(pokemonIds);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Pokémon 1-9</h1>
        <p className="text-gray-600 text-lg">
          Explora los primeros 9 Pokémon y descubre sus detalles
        </p>
      </div>

      <PokemonList pokemon={pokemon} />
    </div>
  );
}

export default HomePage;
