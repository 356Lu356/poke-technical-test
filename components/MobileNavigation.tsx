import Link from "next/link";
import React from "react";

interface MobileMenuToggleProps {
  isMobileMenuOpen: boolean;
  navItems: { href: string; label: string; exact?: boolean }[];
  closeMobileMenu: () => void;
  isClient: boolean;
  pathname: string;
}

function MobileNavigation({
  isMobileMenuOpen,
  navItems,
  closeMobileMenu,
  isClient,
  pathname,
}: MobileMenuToggleProps) {
  return (
    <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
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
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
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
    </div>
  );
}

export default MobileNavigation;
