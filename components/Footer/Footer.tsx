import React from "react";
import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white shadow-md border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">
              Pokemon App
            </h3>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/random"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm"
                >
                  Pokemon Aleatorio
                </Link>
              </li>
            </ul>
          </div>

          {/* Technical Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Información Técnica
            </h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <span className="font-medium">API:</span> PokeAPI
              </p>
              <p>
                <span className="font-medium">Framework:</span> Next.js
              </p>
              <p>
                <span className="font-medium">Estilos:</span> Tailwind CSS
              </p>
              <p>
                <span className="font-medium">Lenguaje:</span> TypeScript
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">
              © {currentYear} PokeApp - LC. Todos los derechos reservados.
            </div>
            <div className="text-sm text-gray-500">
              Datos proporcionados por{" "}
              <a
                href="https://pokeapi.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700 transition-colors duration-200"
              >
                PokeAPI
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
