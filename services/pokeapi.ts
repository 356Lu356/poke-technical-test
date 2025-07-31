import { Pokemon } from "@/types/pokemon";

const POKEMON_API_BASE = "https://pokeapi.co/api/v2/pokemon";

export async function fetchPokemon(id: number): Promise<Pokemon> {
  const response = await fetch(`${POKEMON_API_BASE}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon ${id}`);
  }
  return response.json();
}
