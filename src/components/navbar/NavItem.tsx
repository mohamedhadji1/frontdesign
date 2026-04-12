import Link from "next/link";

interface NavItemProps {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isActive?: boolean;
  isLight?: boolean;
}

export function NavItem({ label, href, hasDropdown, isActive, isLight = false }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-1 hover:text-red-500 transition-colors font-medium text-sm py-2 relative
        ${isActive ? 'text-red-500' : isLight ? 'text-black/70' : 'text-white'}
      `}
    >
      {label}
      {hasDropdown && (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {/* Active Underline indicator (Optional) */}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 rounded-full" />
      )}
    </Link>
  );
}
