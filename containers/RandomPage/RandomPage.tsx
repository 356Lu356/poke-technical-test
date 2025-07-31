"use client";

import { Suspense } from "react";

import LoadingSpinner from "@/components/LoadingSpinner";
import PokemonList from "@/components/PokemonList";
import VowelCountTable from "@/containers/RandomPage/components/VowelCountTable";
import TryAgain from "./components/TryAgain";

import useLoadRandomPokemons from "@/hooks/useLoadRandomPokemons";
import GenerateNewPokemonButton from "./components/GenerateNewPokemonButton";

function RandomPage() {
  const { pokemon, error, loadRandomPokemon } = useLoadRandomPokemons();

  if (error) {
    return <TryAgain error={error} loadRandomPokemon={loadRandomPokemon} />;
  }
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Pokémon Aleatorios
          </h1>
          <p className="text-gray-600 text-lg mb-6">5 Pokémon aleatorios</p>
          <GenerateNewPokemonButton />
        </div>

        <div className="mb-12">
          <PokemonList pokemon={pokemon} showIndex={true} />
        </div>

        <div className="max-w-md mx-auto">
          <VowelCountTable />
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Nombres analizados:
          </h3>
          <p className="text-gray-600">
            {pokemon.map((p) => p.name).join(", ")}
          </p>
        </div>
      </div>
    </Suspense>
  );
}

export default RandomPage;
