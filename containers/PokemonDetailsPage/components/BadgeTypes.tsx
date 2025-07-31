import { Pokemon } from "@/types/pokemon";

interface BadgeTypesProps {
  pokemon: Pokemon;
}
function BadgeTypes({ pokemon }: BadgeTypesProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Tipos</h3>
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
  );
}

export default BadgeTypes;
