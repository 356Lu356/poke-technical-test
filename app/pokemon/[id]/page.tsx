import { fetchPokemon } from "@/services/pokeapi";
import PokemonDetailsPage from "@/containers/PokemonDetailsPage/PokemonDetailsPage";

interface PokemonDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function PokemonDetailPage({
  params,
}: PokemonDetailPageProps) {
  const { id } = await params;
  const pokemonId = Number.parseInt(id);

  const pokemon = await fetchPokemon(pokemonId);
  const imageUrl =
    pokemon.sprites.other["official-artwork"].front_default ||
    pokemon.sprites.front_default;

  return <PokemonDetailsPage pokemon={pokemon} imageUrl={imageUrl} />;
}
