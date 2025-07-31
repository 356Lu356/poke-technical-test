import React from "react";
import NavItem from "./NavItem";

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
        <NavItem
          navItems={navItems}
          isClient={isClient}
          pathname={pathname}
          closeMobileMenu={closeMobileMenu}
          classNameLink="block"
        />
      </div>
    </div>
  );
}

export default MobileNavigation;
