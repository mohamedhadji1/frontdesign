import Link from "next/link";
import { Phone } from "lucide-react";

interface ActionButtonProps {
  label: string;
  href: string;
}

export function ActionButton({ label, href }: ActionButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <Phone size={16} className="fill-current" />
      {label}
    </Link>
  );
}
