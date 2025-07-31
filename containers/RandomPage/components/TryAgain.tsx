import React from "react";

interface TryAgainProps {
  error: string;
  loadRandomPokemon: () => Promise<void>;
}
function TryAgain({ error, loadRandomPokemon }: TryAgainProps) {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">Error</h2>
        <p className="text-gray-600 mb-8">{error}</p>
        <button
          onClick={loadRandomPokemon}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}

export default TryAgain;
