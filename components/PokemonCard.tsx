import Image from "next/image";
import Link from "next/link";
import type { Pokemon } from "@/types/pokemon";

interface PokemonCardProps {
  pokemon: Pokemon;
  showIndex?: boolean;
  showDetailsButton?: boolean;
}

export default function PokemonCard({
  pokemon,
  showIndex = false,
  showDetailsButton = true,
}: PokemonCardProps) {
  const imageUrl =
    pokemon.sprites.other["official-artwork"].front_default ||
    pokemon.sprites.front_default;

  return (
    <div className="pokemon-card">
      <div className="pokemon-card-content">
        {showIndex && (
          <div className="text-sm font-semibold text-gray-500 mb-2">
            #{pokemon.id}
          </div>
        )}
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={pokemon.name}
          width={128}
          height={128}
          className="pokemon-image"
          priority
        />
        <h3 className="pokemon-name">{pokemon.name}</h3>
        {showDetailsButton && (
          <Link href={`/pokemon/${pokemon.id}`}>
            <button className="details-button">Ver detalles</button>
          </Link>
        )}
      </div>
    </div>
  );
}
