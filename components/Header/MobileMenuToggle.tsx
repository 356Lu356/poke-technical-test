import CloseIcon from "../icons/CloseIcon";
import HamburgerIcon from "../icons/HamburgerIcon";

interface MobileMenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
  ariaLabel?: string;
}

export default function MobileMenuToggle({
  isOpen,
  onToggle,
  ariaLabel = "Abrir menú principal",
}: MobileMenuToggleProps) {
  return (
    <button
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <span className="sr-only">{ariaLabel}</span>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </button>
  );
}
