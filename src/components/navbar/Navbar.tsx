"use client";

import { useState, useEffect, useRef } from "react";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { ActionButton } from "./ActionButton";
import { ServicesDropdown } from "./ServicesDropdown";
import { SectorsDropdown } from "./SectorsDropdown";
import { CareersDropdown } from "./CareersDropdown";
import { MobileMenu } from "./MobileMenu";
import { usePathname } from "next/navigation";
import { AboutDropdown } from "./AboutDropdown";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const forceDarkNavbar = pathname === "/contact" || pathname === "/careers";
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || forceDarkNavbar
          ? "bg-black/90 backdrop-blur-md py-4 shadow-xl border-b border-white/10"
          : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center h-full relative">
        {/* Left: Logo */}
        <Logo />

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex space-x-8 items-center h-full">

          <div
            className="h-full flex items-center py-6"
            onMouseEnter={() => handleMouseEnter("About")}
            onMouseLeave={handleMouseLeave}
          >
            <NavItem
              label="About"
              href="/about"
              hasDropdown
              isActive={activeDropdown === "About"}
            />
            {activeDropdown === "About" && <AboutDropdown />}
          </div>

          <div
            className="h-full flex items-center py-6"
            onMouseEnter={() => handleMouseEnter("Services")}
            onMouseLeave={handleMouseLeave}
          >
            <NavItem
              label="Services"
              href="/services"
              hasDropdown
              isActive={activeDropdown === "Services"}
            />
            {activeDropdown === "Services" && <ServicesDropdown />}
          </div>

          <div
            className="h-full flex items-center py-6"
            onMouseEnter={() => handleMouseEnter("Sectors")}
            onMouseLeave={handleMouseLeave}
          >
            <NavItem
              label="Sectors"
              href="/sectors"
              hasDropdown
              isActive={activeDropdown === "Sectors"}
            />
            {activeDropdown === "Sectors" && <SectorsDropdown />}
          </div>

          <div
            className="h-full flex items-center py-6"
            onMouseEnter={() => handleMouseEnter("Careers")}
            onMouseLeave={handleMouseLeave}
          >
            <NavItem
              label="Careers"
              href="/careers"
              hasDropdown
              isActive={activeDropdown === "Careers"}
            />
            {activeDropdown === "Careers" && <CareersDropdown />}
          </div>

          <NavItem label="Contact Us" href="/contact" />
        </div>

        {/* Right: Action Button */}
        <div className="hidden lg:block">
          <ActionButton label="incident report" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Render Mobile Fullscreen Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
}
