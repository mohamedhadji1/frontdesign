"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { servicesDetails } from "./ServicesDropdown";
import { sectorsDetails } from "./SectorsDropdown";
import { careersDetails, careerSlug } from "@/lib/careers";
import { aboutDetails } from "./AboutDropdown";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

type MenuLinkItem =
  | string
  | {
      name?: string;
      label?: string;
      href?: string;
      slug?: string;
      subItems?: (string | { name: string; slug?: string })[];
    };

const slugify = (value: string) =>
  value
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openSubSections, setOpenSubSections] = useState<string[]>([]);

  const handleClose = () => {
    setOpenSection(null);
    setOpenSubSections([]);
    onClose();
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const toggleSubSection = (sub: string, e: React.MouseEvent) => {
    e.preventDefault();
    setOpenSubSections((prev) =>
      prev.includes(sub) ? prev.filter((s) => s !== sub) : [...prev, sub]
    );
  };

  const sections = [
    { name: "About", data: aboutDetails },
    { name: "Services", data: servicesDetails },
    { name: "Sectors", data: sectorsDetails },
    { name: "Careers", data: careersDetails },
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-[80] bg-black/70 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleClose}
      />
      
      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-[90] flex h-full w-full max-w-sm transform flex-col overflow-y-auto border-l border-gray-200 bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex grow flex-col px-6 py-6">
          {/* Header */}
          <div className="mb-10 flex items-center justify-between">
            <span className="text-gray-900 font-bold text-xl tracking-wider">
              MENU<span className="text-red-600">.</span>
            </span>
            <button 
              onClick={handleClose} 
              className="text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="flex grow flex-col space-y-6">
            {/* Accordion Sections */}
            {sections.map((section) => (
              <div key={section.name} className="border-b border-gray-100 pb-4">
                <button
                  className="flex w-full items-center justify-between text-left text-xl font-medium text-gray-800 transition-colors hover:text-red-600 focus:outline-none"
                  onClick={() => toggleSection(section.name)}
                >
                  <span>{section.name}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${
                      openSection === section.name ? "rotate-180 text-red-600" : "text-gray-400"
                    }`}
                  >
                    <path d="M6 9L12 15L18 9" />
                  </svg>
                </button>
                
                {/* Accordion Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openSection === section.name ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col space-y-6 pl-4 border-l-2 border-gray-100 ml-2 py-2">
                      {section.data.map((group, idx) => (
                        <div key={idx}>
                          <h4 className="text-red-600 text-xs font-bold uppercase tracking-wider mb-3">{group.category}</h4>
                          <ul className="flex flex-col space-y-3">
                            {group.items.map((item: MenuLinkItem, itemIdx: number) => {
                              const itemName =
                                typeof item === "string" ? item : item.name || item.label || "";
                              const itemHref = typeof item === "string" ? undefined : item.href;
                              const itemSlug = typeof item === "string" ? undefined : item.slug;
                              const href =
                                itemHref ||
                                (section.name === "Services"
                                  ? `/services/${itemSlug || slugify(itemName)}`
                                  : section.name === "Sectors"
                                    ? `/sectors/${slugify(itemName)}`
                                    : section.name === "Careers"
                                      ? `/careers/${careerSlug(group.category)}/${careerSlug(itemName)}`
                                      : `#${slugify(itemName)}`);
                                
                              return (
                                <div key={itemIdx}>
                                  <div className="flex items-center justify-between w-full">
                                    <Link
                                      href={href}
                                      className="block text-sm font-medium text-gray-600 transition-colors hover:text-red-600 flex-1 py-1"
                                      onClick={handleClose}
                                    >
                                      {itemName}
                                    </Link>
                                    {typeof item !== "string" && item.subItems && (
                                      <button 
                                        onClick={(e) => toggleSubSection(itemName, e)}
                                        className="p-1 ml-2 text-gray-400 hover:text-red-600 focus:outline-none"
                                      >
                                        <svg
                                          className={`w-4 h-4 transition-transform ${openSubSections.includes(itemName) ? "rotate-180 text-red-600" : ""}`}
                                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        >
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                      </button>
                                    )}
                                  </div>
                                  
                                  {typeof item !== "string" && item.subItems && (
                                    <div className={`grid transition-all duration-300 ease-in-out ${openSubSections.includes(itemName) ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                      <ul className="pl-4 mt-2 flex flex-col space-y-2 border-l-2 border-gray-100 overflow-hidden">
                                        {item.subItems.map((sub: string | { name: string; slug?: string }, subIdx: number) => {
                                          const subName = typeof sub === 'object' ? sub.name : sub;
                                          const subHref = typeof sub === 'object' && sub.slug 
                                            ? `/${sub.slug}` 
                                            : `/services/${itemSlug || slugify(itemName)}#${slugify(subName)}`;
                                            
                                          return (
                                          <li key={subIdx} className="pt-1 pb-1">
                                            <Link
                                              href={subHref}
                                              className="block text-xs text-gray-500 transition-colors hover:text-red-600"
                                              onClick={handleClose}
                                            >
                                              {subName}
                                            </Link>
                                          </li>
                                        )})}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              )
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Link 
              href="/contact" 
              className="text-xl font-medium text-gray-800 hover:text-red-600 transition-colors pt-2" 
              onClick={handleClose}
            >
              Contact Us
            </Link>
          </div>

          {/* Footer Action */}
          <div className="mt-12 mb-6 pt-6 border-t border-gray-100">
            <button
              onClick={handleClose}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded text-center transition-colors shadow-lg shadow-red-600/20"
            >
              incident report
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
