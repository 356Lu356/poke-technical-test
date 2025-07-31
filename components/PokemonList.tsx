import { Pokemon } from "@/types/pokemon";
import PokemonCard from "./PokemonCard";

interface PokemonGridProps {
  pokemon: Pokemon[];
  showIndex?: boolean;
  showDetailsButton?: boolean;
}

export default function PokemonList({
  pokemon,
  showIndex = false,
  showDetailsButton = true,
}: PokemonGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {pokemon.map((poke) => (
        <PokemonCard
          key={poke.id}
          pokemon={poke}
          showIndex={showIndex}
          showDetailsButton={showDetailsButton}
        />
      ))}
    </div>
  );
}
