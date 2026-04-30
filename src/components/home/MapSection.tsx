"use client";

import { useEffect, useRef, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Maximize2, MousePointerClick, Move, X } from "lucide-react";
import dynamic from "next/dynamic";

const Tooltip = dynamic(() => import("react-tooltip").then((mod) => mod.Tooltip), { ssr: false });

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";
const officeCountries = ["Tunisia", "Algeria", "Libya", "Mauritania"];

type Location = {
  id: string;
  name: string;
  coordinates: [number, number];
  type: "office" | "client";
  address?: string;
};

const locations: Location[] = [
  // Offices
  { id: "tn", name: "Tunisia", coordinates: [9.5375, 33.8869], type: "office", address: "Headquarters\nTunis, Tunisia" },
  { id: "dz", name: "Algeria", coordinates: [1.6596, 28.0339], type: "office", address: "Regional Office\nAlgiers, Algeria" },
  { id: "ly", name: "Libya", coordinates: [17.2283, 26.3351], type: "office", address: "Regional Branch\nTripoli, Libya" },
  { id: "mr", name: "Mauritania", coordinates: [-10.9408, 21.0079], type: "office", address: "Regional Branch\nNouakchott, Mauritania" },

  // Global clients
  { id: "fr", name: "France", coordinates: [2.2137, 46.2276], type: "client", address: "Major operations across multiple client facilities in France." },
  { id: "cn", name: "Shanghai", coordinates: [121.4737, 31.2304], type: "client", address: "Park Place, Unit 04-05, 37/F\nNo.1601, Nanjing West Road\nJing'an District Shanghai,\nChina" },
  { id: "ae", name: "Dubai", coordinates: [55.2708, 25.2048], type: "client", address: "Client presence in Dubai\nUnited Arab Emirates" },
  { id: "au", name: "Sydney", coordinates: [151.2093, -33.8688], type: "client", address: "Client presence in Sydney\nAustralia" },
  { id: "uk", name: "London", coordinates: [-0.1276, 51.5072], type: "client", address: "Client presence in London\nUnited Kingdom" },
  { id: "es", name: "Spain", coordinates: [-3.7038, 40.4168], type: "client", address: "Client presence in Madrid\nSpain" },

  // African clients
  { id: "eg", name: "Cairo", coordinates: [31.2357, 30.0444], type: "client", address: "Client operations in Egypt\nCairo, Egypt" },
  { id: "ma", name: "Casablanca", coordinates: [-7.5898, 33.5731], type: "client", address: "Client presence in Morocco\nCasablanca, Morocco" },
  { id: "ng", name: "Lagos", coordinates: [3.3792, 6.5244], type: "client", address: "West Africa operations\nLagos, Nigeria" },
  { id: "za", name: "Johannesburg", coordinates: [28.0473, -26.2041], type: "client", address: "Southern Africa hub\nJohannesburg, South Africa" },
  { id: "ke", name: "Nairobi", coordinates: [36.8219, -1.2921], type: "client", address: "East Africa operations\nNairobi, Kenya" },
  { id: "sn", name: "Dakar", coordinates: [-17.4441, 14.6937], type: "client", address: "West Africa client base\nDakar, Senegal" },
  { id: "gh", name: "Accra", coordinates: [-0.187, 5.6037], type: "client", address: "West Africa expansion\nAccra, Ghana" },
  { id: "ci", name: "Abidjan", coordinates: [-4.0305, 5.36], type: "client", address: "Francophone West Africa\nAbidjan, Cote d'Ivoire" },

  // Clients inside office countries
  { id: "tn-sfax", name: "Sfax", coordinates: [10.7603, 34.7406], type: "client", address: "Client operations\nSfax, Tunisia" },
  { id: "tn-sousse", name: "Sousse", coordinates: [10.6412, 35.8245], type: "client", address: "Client operations\nSousse, Tunisia" },
  { id: "dz-oran", name: "Oran", coordinates: [-0.6417, 35.6969], type: "client", address: "Client operations\nOran, Algeria" },
  { id: "dz-constantine", name: "Constantine", coordinates: [6.6147, 36.365], type: "client", address: "Client operations\nConstantine, Algeria" },
  { id: "ly-benghazi", name: "Benghazi", coordinates: [20.0686, 32.1194], type: "client", address: "Client operations\nBenghazi, Libya" },
  { id: "mr-nouadhibou", name: "Nouadhibou", coordinates: [-17.034, 20.931], type: "client", address: "Client operations\nNouadhibou, Mauritania" },
];

export function MapSection() {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);
  const [popupPos, setPopupPos] = useState<{ x: number; y: number; wrapperWidth: number } | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPanning, setIsPanning] = useState(false);
  const mapWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const syncViewport = () => {
      const mobile = mediaQuery.matches;

      setIsMobile(mobile);

      if (mobile) {
        setPopupPos(null);
      } else {
        setIsFullscreen(false);
        setIsPanning(false);
      }
    };

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const previousOverflow = document.body.style.overflow;

    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isFullscreen]);

  const handleLocationClick = (loc: Location, e: React.MouseEvent) => {
    e.stopPropagation();

    if (!isMobile) {
      const rect = mapWrapperRef.current?.getBoundingClientRect();

      if (rect) {
        setPopupPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          wrapperWidth: rect.width,
        });
      }
    } else {
      setPopupPos(null);
    }

    setActiveLocation(loc);
  };

  const markerHitRadius = isMobile ? 10 : 6;
  const markerHaloRadius = isMobile ? 5 : 4;
  const markerCoreRadius = isMobile ? 2.5 : 2;

  const handleMoveStart = () => {
    if (!isMobile) return;

    setIsPanning(true);
    setActiveLocation(null);
  };

  const handleMoveEnd = () => {
    if (!isMobile) return;

    setIsPanning(false);
  };

  const renderMobileLocationCard = (fullscreen = false) => {
    if (!activeLocation || !isMobile) return null;

    return (
      <motion.div
        key={`${activeLocation.id}-${fullscreen ? "fullscreen" : "mobile"}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.18 }}
        onClick={(e) => e.stopPropagation()}
        className={`pointer-events-auto absolute z-50 rounded-[24px] border border-zinc-200 bg-white p-4 shadow-2xl ${
          fullscreen ? "inset-x-4 bottom-4" : "inset-x-3 bottom-3"
        }`}
      >
        <button
          type="button"
          onPointerDown={(e) => {
            e.stopPropagation();
            setActiveLocation(null);
          }}
          className="absolute top-3 right-3 rounded-md p-1 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700"
          aria-label="Close"
        >
          <X size={14} />
        </button>

        <h4 className={`pr-6 text-base font-bold ${activeLocation.type === "office" ? "text-red-600" : "text-slate-800"}`}>
          {activeLocation.name}
          {activeLocation.type === "office" && (
            <span className="ml-2 rounded-sm bg-red-50 px-2 py-0.5 align-middle text-[10px] uppercase tracking-[0.24em] text-red-400">
              Office
            </span>
          )}
        </h4>

        <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-zinc-500">
          {activeLocation.address ?? `Client presence in ${activeLocation.name}. Supporting enterprise and digital transformation.`}
        </p>

        <div className="mt-4 flex items-center gap-1.5 border-t border-zinc-100 pt-3 text-xs font-medium text-zinc-400">
          <MapPin size={12} className={activeLocation.type === "office" ? "text-red-500" : "text-slate-400"} />
          {activeLocation.type === "office" ? "Keystone Strategic Operation" : "Valued Client Base"}
        </div>
      </motion.div>
    );
  };

  const renderMapGraphic = (fullscreen = false) => (
    <div
      className={
        fullscreen
          ? "flex h-full w-full items-center justify-center px-2 pb-32 pt-16 select-none overscroll-contain touch-none"
          : "mx-auto flex w-full max-w-[28rem] justify-center select-none overscroll-contain touch-none md:max-w-none"
      }
    >
      <ComposableMap
        projectionConfig={{ scale: 155, center: [0, 0] }}
        className={`h-auto w-full outline-none ${fullscreen ? "max-w-none" : "max-w-6xl"}`}
        viewBox="0 0 800 500"
        style={{
          touchAction: isMobile ? "none" : "auto",
          WebkitUserSelect: "none",
          userSelect: "none",
        }}
      >
        <ZoomableGroup
          center={isMobile ? [18, 20] : [0, 0]}
          zoom={isMobile ? (fullscreen ? 2.15 : 1.85) : 1}
          minZoom={isMobile ? 1.7 : 1}
          maxZoom={isMobile ? (fullscreen ? 3.4 : 3) : 1}
          onMoveStart={handleMoveStart}
          onMoveEnd={handleMoveEnd}
          style={{ willChange: isMobile ? "transform" : undefined }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryName = geo.properties.name;
                const isOfficeCountry = officeCountries.includes(countryName);
                const officeLocation = locations.find((loc) => loc.name === countryName && loc.type === "office");

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    data-tooltip-id={!isMobile ? "map-tooltip" : undefined}
                    data-tooltip-content={!isMobile && isOfficeCountry ? countryName : undefined}
                    fill={isOfficeCountry ? "#DC2626" : "#E4E7EB"}
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                    onClick={(e: React.MouseEvent) => {
                      if (officeLocation) handleLocationClick(officeLocation, e);
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

          {locations
            .filter((loc) => loc.type === "client")
            .map((loc) => (
              <Marker
                key={loc.id}
                coordinates={loc.coordinates}
                onClick={(e: React.MouseEvent) => handleLocationClick(loc, e)}
                data-tooltip-id={!isMobile ? "map-tooltip" : undefined}
                data-tooltip-content={!isMobile ? loc.name : undefined}
                style={{ default: { outline: "none" }, hover: { outline: "none" }, pressed: { outline: "none" } }}
                className="group cursor-pointer"
              >
                <g className="transition-all duration-300 group-hover:opacity-80">
                  <circle r={markerHitRadius} fill="transparent" />
                  <circle r={markerHaloRadius} fill="#1E293B" opacity={0.2} />
                  <circle r={markerCoreRadius} fill="#1E293B" stroke="#FFFFFF" strokeWidth={0.5} />
                </g>
              </Marker>
            ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      id="map-section"
      className="relative bg-[#ffffff] px-3 pt-8 pb-16 text-zinc-900 md:px-4 md:pb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        <div className="relative z-30 mb-0 flex flex-col items-center text-center">
          <p className="mx-auto mb-6 max-w-2xl text-sm font-medium text-zinc-500 md:text-base">
            Discover our global presence, from active regional offices to worldwide client success stories.
          </p>
          <div className="mx-auto flex max-w-fit flex-wrap items-center justify-center gap-3 rounded-3xl border border-zinc-200 bg-white px-4 py-3 text-xs font-medium shadow-sm md:gap-6 md:rounded-full md:px-6 md:text-sm">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-600 shadow-[0_0_0_4px_rgba(220,38,38,0.2)]"></span>
              <span className="text-zinc-700">Keystone Offices</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-slate-800 shadow-[0_0_0_4px_rgba(30,41,59,0.15)]"></span>
              <span className="text-zinc-700">Client Locations</span>
            </div>
          </div>
        </div>

        <div
          ref={mapWrapperRef}
          className="map-wrapper relative z-20 mx-auto mt-6 w-full overflow-hidden rounded-[28px] border border-zinc-200/70 bg-gradient-to-b from-zinc-50 to-white shadow-sm md:-mt-24 md:rounded-none md:border-0 md:bg-transparent md:shadow-none"
          onClick={() => {
            setActiveLocation(null);
            setPopupPos(null);
          }}
        >

          {isMobile && !isPanning && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsFullscreen(true);
              }}
              className="absolute top-3 right-3 z-40 flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2 text-[11px] font-semibold text-zinc-700 shadow-md transition-colors hover:bg-zinc-50"
              aria-label="Open map in full screen"
            >
              <Maximize2 size={14} />
              Full screen
            </button>
          )}

          {renderMapGraphic()}

          <AnimatePresence>
            {renderMobileLocationCard()}

            {activeLocation && popupPos && !isMobile && (
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0, scale: 0.9, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -8 }}
                transition={{ duration: 0.18 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: "absolute",
                  left: (() => {
                    const cardWidth = 280;
                    const wrapperWidth = popupPos.wrapperWidth;

                    if (popupPos.x + cardWidth + 20 > wrapperWidth) {
                      return Math.max(popupPos.x - cardWidth - 12, 8);
                    }

                    return popupPos.x + 12;
                  })(),
                  top: Math.max(popupPos.y - 20, 8),
                  transform: "translateY(-100%)",
                }}
                className="pointer-events-auto z-50 w-[260px] rounded-xl border border-zinc-100 bg-white p-5 shadow-2xl md:w-[300px]"
              >
                <button
                  type="button"
                  onPointerDown={(e) => {
                    e.stopPropagation();
                    setActiveLocation(null);
                    setPopupPos(null);
                  }}
                  className="absolute top-3 right-3 rounded-md p-1 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700"
                  aria-label="Close"
                >
                  <X size={14} />
                </button>

                <h4 className={`mb-2 pr-6 text-base font-bold md:text-lg ${activeLocation.type === "office" ? "text-red-600" : "text-slate-800"}`}>
                  {activeLocation.name}
                  {activeLocation.type === "office" && (
                    <span className="ml-2 rounded-sm bg-red-50 px-2 py-0.5 align-middle text-xs uppercase tracking-widest text-red-400">
                      Office
                    </span>
                  )}
                </h4>

                {activeLocation.address ? (
                  <p className="whitespace-pre-line text-sm leading-relaxed text-zinc-500">{activeLocation.address}</p>
                ) : (
                  <p className="text-sm leading-relaxed text-zinc-500">
                    Client presence in {activeLocation.name}. Supporting enterprise and digital transformation.
                  </p>
                )}

                <div className="mt-4 flex items-center gap-1.5 border-t border-zinc-100 pt-3 text-xs font-medium text-zinc-400">
                  <MapPin size={12} className={activeLocation.type === "office" ? "text-red-500" : "text-slate-400"} />
                  {activeLocation.type === "office" ? "Keystone Strategic Operation" : "Valued Client Base"}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!activeLocation && !isPanning && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-[11px] font-medium text-zinc-600 shadow-md md:inset-x-auto md:right-10 md:bottom-10 md:text-xs"
            >
              <MousePointerClick size={14} className="text-red-500" />
              {isMobile ? "Tap markers for details" : "Swipe or click markers for details"}
            </motion.div>
          )}

          {!isMobile && (
            <Tooltip
              id="map-tooltip"
              style={{ backgroundColor: "#18181b", color: "#fff", borderRadius: "8px", fontWeight: "500", fontSize: "12px", zIndex: 100 }}
            />
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {isMobile && isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-white"
            onClick={() => setIsFullscreen(false)}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative flex h-full w-full flex-col bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400">Interactive Map</p>
                  <h3 className="mt-1 text-sm font-semibold text-zinc-900">Explore client locations in full screen</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsFullscreen(false)}
                  className="rounded-full border border-zinc-200 p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                  aria-label="Close full screen map"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="relative flex-1 overflow-hidden bg-gradient-to-b from-zinc-50 to-white">
                <div className="pointer-events-none absolute top-4 left-4 right-4 z-20 rounded-full border border-black/5 bg-white px-4 py-2 text-[11px] font-medium text-zinc-600 shadow-sm">
                  <div className="flex items-center justify-center gap-2">
                    <Move size={14} className="text-red-500" />
                    Scroll inside the map to move around and reveal more markers
                  </div>
                </div>

                {renderMapGraphic(true)}

                <AnimatePresence>{renderMobileLocationCard(true)}</AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
