"use client";

import { useState } from "react";
import Link from "next/link";
import { servicesDetails } from "./ServicesDropdown";
import { sectorsDetails } from "./SectorsDropdown";
import { careersDetails } from "./CareersDropdown";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const sections = [
    { name: "Services", data: servicesDetails },
    { name: "Sectors", data: sectorsDetails },
    { name: "Careers", data: careersDetails },
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-90 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-neutral-950 border-l border-white/10 z-100 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto shadow-2xl flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-6 flex flex-col grow">
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <span className="text-white font-bold text-xl tracking-wider">
              MENU<span className="text-red-600">.</span>
            </span>
            <button 
              onClick={onClose} 
              className="text-white/70 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
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
          <div className="flex flex-col space-y-6 grow">
            <Link 
              href="/about" 
              className="text-xl font-medium text-white/90 hover:text-white transition-colors" 
              onClick={onClose}
            >
              About
            </Link>

            {/* Accordion Sections */}
            {sections.map((section) => (
              <div key={section.name} className="border-b border-white/5 pb-4">
                <button
                  className="w-full flex justify-between items-center text-xl font-medium text-white/90 hover:text-white transition-colors focus:outline-none"
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
                      openSection === section.name ? "rotate-180 text-red-500" : "text-white/50"
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
                    <div className="flex flex-col space-y-6 pl-4 border-l border-white/10 ml-2 py-2">
                      {section.data.map((group, idx) => (
                        <div key={idx}>
                          <h4 className="text-red-500 text-sm font-semibold mb-3 tracking-wide">{group.category}</h4>
                          <ul className="flex flex-col space-y-3">
                            {group.items.map((item: any, itemIdx: number) => {
                              const itemName = typeof item === 'string' ? item : item.name;
                              
                              // Change hash links to valid routing links for Services components
                              const href = section.name === "Services"
                                ? `/services/${itemName.replace(/[\s(),&]+/g, "-").replace(/-+/g, '-').toLowerCase()}`
                                : `#${itemName.replace(/[\s(),&]+/g, "-").toLowerCase()}`;
                                
                              return (
                                <div key={itemIdx}>
                                  <li>
                                    <Link
                                      href={href}
                                      className="text-white/60 hover:text-white text-sm transition-colors block"
                                      onClick={onClose}
                                    >
                                      {itemName}
                                    </Link>
                                  </li>
                                  {item.subItems && (
                                    <ul className="pl-4 mt-2 flex flex-col space-y-2 border-l border-white/10">
                                      {item.subItems.map((sub: string, subIdx: number) => (
                                        <li key={subIdx}>
                                          <Link
                                            href={`/services/${itemName.replace(/[\\s(),&]+/g, "-").replace(/-+/g, '-').toLowerCase()}#${sub.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase()}`}
                                            className="text-white/50 hover:text-white text-xs transition-colors block"
                                            onClick={onClose}
                                          >
                                            {sub}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
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
              className="text-xl font-medium text-white/90 hover:text-white transition-colors pt-2" 
              onClick={onClose}
            >
              Contact Us
            </Link>
          </div>

          {/* Footer Action */}
          <div className="mt-12 mb-6 pt-6 border-t border-white/10">
            <button
              onClick={onClose}
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
