import { fetchPokemon } from "@/services/pokeapi";
import { Pokemon } from "@/types/pokemon";

export async function fetchMultiplePokemon(ids: number[]): Promise<Pokemon[]> {
  const promises = ids.map((id) => fetchPokemon(id));
  return Promise.all(promises);
}

export function generateRandomConsecutiveIds(): number[] {
  const maxStart = 496;
  let start: number;

  do {
    start = Math.floor(Math.random() * maxStart) + 1;
  } while (start % 2 === 0); // Ensure it's odd

  return [start, start + 1, start + 2, start + 3, start + 4];
}
