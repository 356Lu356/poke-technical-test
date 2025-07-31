import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchPokemon } from "@/services/pokeapi";

interface PokemonDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function PokemonDetailPage({
  params,
}: PokemonDetailPageProps) {
  const { id } = await params;
  const pokemonId = Number.parseInt(id);

  // Only allow Pokemon with IDs 1-9 as specified
  if (pokemonId < 1 || pokemonId > 9) {
    notFound();
  }

  const pokemon = await fetchPokemon(pokemonId);
  const imageUrl =
    pokemon.sprites.other["official-artwork"].front_default ||
    pokemon.sprites.front_default;

  // Get the main stats for the table
  const mainStats = pokemon.stats.slice(0, 3); // HP, Attack, Defense

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
      >
        ← Volver a la lista
      </Link>

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
          <div className="md:w-1/2 p-8">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-800 capitalize mb-2">
                {pokemon.name}
              </h1>
              <p className="text-gray-600 text-lg">#{pokemon.id}</p>
            </div>

            {/* Attributes Table */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Atributos
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">
                        Atributo
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">
                        Valor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-600">Altura</td>
                      <td className="py-3 px-4 font-medium">
                        {pokemon.height / 10} m
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-600">Peso</td>
                      <td className="py-3 px-4 font-medium">
                        {pokemon.weight / 10} kg
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-600">
                        Experiencia Base
                      </td>
                      <td className="py-3 px-4 font-medium">
                        {pokemon.base_experience}
                      </td>
                    </tr>
                    {mainStats.map((stat, index) => (
                      <tr
                        key={stat.stat.name}
                        className="border-b border-gray-100"
                      >
                        <td className="py-3 px-4 text-gray-600 capitalize">
                          {stat.stat.name.replace("-", " ")}
                        </td>
                        <td className="py-3 px-4 font-medium">
                          {stat.base_stat}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Types */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Tipos
              </h3>
              <div className="flex gap-2">
                {pokemon.types.map((type) => (
                  <span
                    key={type.type.name}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium capitalize"
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
