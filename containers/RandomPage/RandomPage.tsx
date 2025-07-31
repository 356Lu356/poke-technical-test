"use client";

import { Suspense, useMemo } from "react";

import TryAgain from "./components/TryAgain";
import PokemonList from "@/components/PokemonList";
import LoadingSpinner from "@/components/LoadingSpinner";
import GenerateNewPokemonButton from "./components/GenerateNewPokemonButton";
import VowelCountTable from "@/containers/RandomPage/components/VowelCountTable";

import useLoadRandomPokemons from "@/hooks/useLoadRandomPokemons";

function RandomPage() {
  const { pokemon, error, vowelCount, loadRandomPokemon } =
    useLoadRandomPokemons();

  const pokemonNames = useMemo(
    () => pokemon.map((p) => p.name).join(", "),
    [pokemon]
  );

  if (error) {
    return <TryAgain error={error} loadRandomPokemon={loadRandomPokemon} />;
  }

  console.log("RandomPage render - Pokemon count:", pokemon.length);
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Pokémon Aleatorios
          </h1>
          <p className="text-gray-600 text-lg mb-6">5 Pokémon aleatorios</p>
          <GenerateNewPokemonButton loadRandomPokemon={loadRandomPokemon} />
        </div>

        <div className="mb-12">
          <PokemonList pokemon={pokemon} showIndex={true} />
        </div>

        <div className="max-w-md mx-auto">
          <VowelCountTable vowelCount={vowelCount} />
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Nombres analizados:
          </h3>
          <p className="text-gray-600">{pokemonNames}</p>
        </div>
      </div>
    </Suspense>
  );
}

export default RandomPage;
