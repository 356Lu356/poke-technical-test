import Link from "next/link";
import React from "react";

interface NavItemProps {
  navItems: { href: string; label: string; exact?: boolean }[];
  closeMobileMenu: () => void;
  classNameLink?: string;
  isClient: boolean;
  pathname: string;
}

function NavItem({
  navItems,
  isClient,
  pathname,
  classNameLink = "",
  closeMobileMenu,
}: NavItemProps) {
  return (
    <>
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
            className={`${classNameLink} px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
              isActive
                ? "bg-blue-100 text-blue-700"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

export default NavItem;
