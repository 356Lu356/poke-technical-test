"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileMenuToggle from "./MobileMenuToggle";
import { is } from "./../.next/static/chunks/fallback/amp";
import MobileNavigation from "./MobileNavigation";

export default function Navigation() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: "/", label: "Pokémon 1-9", exact: true },
    { href: "/pokemon", label: "Detalles", exact: false },
    { href: "/random", label: "Aleatorios", exact: true },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">PokéApp</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => {
              const isActive =
                isClient &&
                (item.exact
                  ? pathname === item.href
                  : pathname.startsWith(item.href) && item.href !== "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <MobileMenuToggle
              isOpen={isMobileMenuOpen}
              onToggle={toggleMobileMenu}
              ariaLabel="Abrir menú principal"
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileNavigation
        isMobileMenuOpen={isMobileMenuOpen}
        navItems={navItems}
        closeMobileMenu={closeMobileMenu}
        isClient={isClient}
        pathname={pathname}
      />
    </nav>
  );
}
