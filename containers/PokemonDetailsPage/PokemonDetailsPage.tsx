import Image from "next/image";
import { Pokemon } from "@/types/pokemon";

import BadgeTypes from "@/containers/PokemonDetailsPage/components/BadgeTypes";
import ButtonReturn from "@/containers/PokemonDetailsPage/components/ButtonReturn";
import AttributesTable from "@/containers/PokemonDetailsPage/components/AttributesTable";

interface PokemonDetailsPageProps {
  pokemon: Pokemon;
  imageUrl: string;
}

function PokemonDetailsPage({ pokemon, imageUrl }: PokemonDetailsPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <ButtonReturn />

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="md:flex">
          {/* Image Section */}
          <div className="md:w-1/2 bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex items-center justify-center">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={pokemon.name}
              width={300}
              height={300}
              className="object-contain"
              priority
            />
          </div>

          {/* Details Section */}
          <div className="md:w-1/2 p-8 space-y-3">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 capitalize mb-2">
                {pokemon.name}
              </h1>
              <p className="text-gray-600 text-lg">#{pokemon.id}</p>
            </div>

            <BadgeTypes pokemon={pokemon} />

            <AttributesTable pokemon={pokemon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetailsPage;
