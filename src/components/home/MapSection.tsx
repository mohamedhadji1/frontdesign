"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import { MousePointerClick, X, MapPin } from "lucide-react";
import dynamic from "next/dynamic";

const Tooltip = dynamic(() => import("react-tooltip").then((mod) => mod.Tooltip), { ssr: false });

// TopoJSON for standard world map
const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

type Location = {
  id: string;
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
  type: "office" | "client";
  address?: string;
};

const locations: Location[] = [
  // Offices
  { id: "tn", name: "Tunisia", coordinates: [9.5375, 33.8869], type: "office", address: "Headquarters\\nTunis, Tunisia" },
  { id: "dz", name: "Algeria", coordinates: [1.6596, 28.0339], type: "office", address: "Regional Office\\nAlgiers, Algeria" },
  { id: "ly", name: "Libya", coordinates: [17.2283, 26.3351], type: "office", address: "Regional Branch\\nTripoli, Libya" },
  { id: "mr", name: "Mauritania", coordinates: [-10.9408, 21.0079], type: "office", address: "Regional Branch\\nNouakchott, Mauritania" },
  
  // Clients (as per requested and visual match)
  { id: "fr", name: "France", coordinates: [2.2137, 46.2276], type: "client", address: "Major operations across multiple client facilities in France." },
  { id: "cn", name: "Shanghai", coordinates: [121.4737, 31.2304], type: "client", address: "Park Place, Unit 04-05, 37/F\\nNo.1601, Nanjing West Road\\nJing'an District Shanghai,\\nChina" },
  { id: "ae", name: "Dubai", coordinates: [55.2708, 25.2048], type: "client" },
  { id: "au", name: "Sydney", coordinates: [151.2093, -33.8688], type: "client" },
  { id: "uk", name: "London", coordinates: [-0.1276, 51.5072], type: "client" },
  { id: "es", name: "Spain", coordinates: [-3.7038, 40.4168], type: "client" },
];

export function MapSection() {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);

  return (
    <section className="pb-20 pt-8 bg-[#ffffff] relative px-4 text-zinc-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-0 flex flex-col items-center relative z-30">
          <p className="text-zinc-500 max-w-2xl mx-auto mb-6 font-medium text-sm md:text-base">
            Discover our global presence, from active regional offices to worldwide client success stories.
          </p>
          <div className="flex gap-6 items-center text-sm font-medium mt-0 bg-white px-6 py-3 rounded-full shadow-sm border border-zinc-200">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-600 shadow-[0_0_0_4px_rgba(220,38,38,0.2)]"></span>
              <span className="text-zinc-700">Keystone Offices</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-slate-800 shadow-[0_0_0_4px_rgba(30,41,59,0.15)]"></span>
              <span className="text-zinc-700">Client Locations</span>
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-x-auto no-scrollbar flex justify-start md:justify-center items-center z-20 -mt-8 md:-mt-24 pb-8">
          {/* World Map Container */}
          <div className="w-[800px] md:w-full shrink-0 flex justify-center">
            <ComposableMap
              projectionConfig={{ scale: 155, center: [0, 0] }}
              className="w-full max-w-6xl h-auto outline-none"
              viewBox="0 0 800 500"
            >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const countryName = geo.properties.name;
                  const isOfficeCountry = ["Tunisia", "Algeria", "Libya", "Mauritania"].includes(countryName);
                  const officeLocation = locations.find(l => l.name === countryName && l.type === "office");

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      data-tooltip-id={isOfficeCountry ? "map-tooltip" : undefined}
                      data-tooltip-content={isOfficeCountry ? countryName : undefined}
                      fill={isOfficeCountry ? "#DC2626" : "#E4E7EB"}
                      stroke="#FFFFFF"
                      strokeWidth={0.5}
                      onClick={() => {
                        if (officeLocation) {
                          setActiveLocation(officeLocation);
                        }
                      }}
                      className={isOfficeCountry ? "cursor-pointer" : ""}
                      style={{
                        default: { outline: "none", transition: "fill 0.2s ease" },
                        hover: { fill: isOfficeCountry ? "#B91C1C" : "#D1D5DB", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {locations.filter(loc => loc.type === "client").map((loc) => {
              const isActive = activeLocation?.id === loc.id;
              
              return (
                <Marker 
                  key={loc.id} 
                  coordinates={loc.coordinates}
                  onClick={() => setActiveLocation(loc)}
                  data-tooltip-id="map-tooltip"
                  data-tooltip-content={loc.name}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                  className="cursor-pointer group"
                >
                  <g className="transition-all duration-300 group-hover:opacity-80">
                    <circle 
                      r={6} 
                      fill="transparent"
                    />
                    <circle 
                      r={4} 
                      fill="#1E293B" 
                      opacity={0.2}
                    />
                    <circle 
                      r={2} 
                      fill="#1E293B" 
                      stroke="#FFFFFF"
                      strokeWidth={0.5}
                    />
                  </g>
                </Marker>
              );
            })}
          </ComposableMap>
          </div>
          {/* Floating Card for selection */}
          <AnimatePresence>
            {activeLocation && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                className="absolute top-4 right-4 md:top-10 md:right-10 bg-white border border-zinc-100 shadow-2xl rounded-xl p-5 md:p-6 w-[280px] md:w-[320px] z-50"
              >
                <button 
                  onClick={() => setActiveLocation(null)}
                  className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 transition"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
                
                <h4 className={`text-lg md:text-xl font-bold mb-3 pr-6 ${activeLocation.type === 'office' ? 'text-red-600' : 'text-slate-800'}`}>
                  {activeLocation.name}
                  {activeLocation.type === 'office' && <span className="ml-2 text-xs uppercase tracking-widest text-red-400 bg-red-50 px-2 py-1 rounded-sm align-middle">HQ</span>}
                </h4>
                
                {activeLocation.address ? (
                  <p className="text-zinc-500 text-sm leading-relaxed whitespace-pre-line">
                    {activeLocation.address}
                  </p>
                ) : (
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Client presence located in the region of {activeLocation.name}. Supporting enterprise and digital transformation.
                  </p>
                )}
                
                <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center text-xs text-zinc-400 gap-1.5 font-medium">
                  <MapPin size={12} className={activeLocation.type === 'office' ? 'text-red-500' : 'text-slate-400'} />
                  {activeLocation.type === 'office' ? 'Keystone Strategic Operation' : 'Valued Client Base'}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Prompt */}
          {!activeLocation && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="absolute bottom-4 right-4 md:bottom-10 md:right-10 flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md text-xs font-medium text-zinc-600 pointer-events-none border border-black/5"
            >
              <MousePointerClick size={14} className="text-red-500" />
              Swipe or click markers for details
            </motion.div>
          )}

          <Tooltip id="map-tooltip" style={{ backgroundColor: "#18181b", color: "#fff", borderRadius: "8px", fontWeight: "500", fontSize: "12px", zIndex: 100 }} />
        </div>
      </motion.div>
    </section>
  );
}
