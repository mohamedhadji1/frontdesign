import { Phone } from "lucide-react";

interface ActionButtonProps {
  label: string;
  onClick?: () => void;
}

export function ActionButton({ label, onClick }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded text-sm transition-colors shadow-lg flex items-center justify-center gap-2"
    >
      <Phone size={16} className="fill-current" />
      {label}
    </button>
  );
}
