import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  isLight?: boolean;
}

export function Logo({ isLight = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 transition-all ${
        isLight ? "bg-black/45 backdrop-blur-sm rounded-md px-2 py-1" : ""
      }`}
    >
      <div className="relative w-40 h-10 md:w-48 md:h-12">
        <Image 
          src="/logos/logo.png" 
          alt="Keystone Logo"
          fill
          className="object-contain object-left"
          priority
        />
      </div>
    </Link>
  );
}
