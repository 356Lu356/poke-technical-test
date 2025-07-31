interface VowelCountTableProps {
  vowelCount: Record<string, number>;
}

export default function VowelCountTable({ vowelCount }: VowelCountTableProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Conteo de Vocales
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase tracking-wider">
                Vocal
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 uppercase tracking-wider">
                Cantidad
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(vowelCount).map(([vowel, count]) => (
              <tr
                key={vowel}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-3 px-4 font-medium text-gray-900 uppercase">
                  {vowel}
                </td>
                <td className="py-3 px-4 text-gray-700 font-semibold">
                  {count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
