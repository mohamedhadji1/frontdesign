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
      <div className="relative h-11 w-44 sm:h-12 sm:w-48">
        <Image 
          src="/logos/logo.png" 
          alt="Keystone Logo"
          fill
          unoptimized
          className="object-contain object-left"
          priority
        />
      </div>
    </Link>
  );
}
