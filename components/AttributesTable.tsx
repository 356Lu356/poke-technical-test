import { Pokemon } from "@/types/pokemon";
import React from "react";

interface AttributesTableProps {
  pokemon: Pokemon;
}

function AttributesTable({ pokemon }: AttributesTableProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Atributos</h2>
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
              <td className="py-3 px-4 font-medium">{pokemon.height / 10} m</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-gray-600">Peso</td>
              <td className="py-3 px-4 font-medium">
                {pokemon.weight / 10} kg
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-4 text-gray-600">Experiencia Base</td>
              <td className="py-3 px-4 font-medium">
                {pokemon.base_experience}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AttributesTable;
