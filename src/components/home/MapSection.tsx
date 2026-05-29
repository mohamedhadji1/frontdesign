"use client";

import { useEffect, useRef, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Maximize2, MousePointerClick, Move, X } from "lucide-react";
import dynamic from "next/dynamic";

const Tooltip = dynamic(() => import("react-tooltip").then((mod) => mod.Tooltip), { ssr: false });

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";
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
  {
    id: "tn",
    name: "Tunisia",
    coordinates: [9.5375, 33.8869],
    type: "office",
    address: `Tunisia Office:
Corner of Rue El Waquidi, El Menzah 4 and Boulevard Charles Nicolle – Tunis
+216 71 755 755`
  },
  {
    id: "dz",
    name: "Algeria",
    coordinates: [1.6596, 28.0339],
    type: "office",
    address: `Algeria Office:
Mohammadia Mall Business Center No. 1272, Algiers
+213 (0) 23 80 47 57`
  },
  {
    id: "ly",
    name: "Libya",
    coordinates: [17.2283, 26.3351],
    type: "office",
    address: "Regional Branch\nTripoli, Libya"
  },
  {
    id: "mr",
    name: "Mauritania",
    coordinates: [-10.9408, 21.0079],
    type: "office",
    address: `Mauritania Office:
No. 225 EXT NOT MODULE L TVZ Nouakchott
Tel: +222 26976239`
  },

  // Europe clients
  { id: "fr", name: "France", coordinates: [2.2137, 46.2276], type: "client", address: "Major operations across multiple client facilities in France." },
  { id: "de", name: "Germany", coordinates: [10.4515, 51.1657], type: "client", address: "Client facilities across Germany." },
  { id: "be", name: "Belgium", coordinates: [4.4699, 50.5039], type: "client", address: "Client presence in Brussels, Belgium." },
  { id: "it", name: "Italy", coordinates: [12.5674, 41.8719], type: "client", address: "Client operations across Italy." },
  { id: "lu", name: "Luxembourg", coordinates: [6.1296, 49.8153], type: "client", address: "Financial sector clients in Luxembourg." },
  { id: "cy", name: "Cyprus", coordinates: [33.4299, 35.1264], type: "client", address: "Client presence in Nicosia, Cyprus." },

  // Asia clients
  { id: "sa", name: "Saudi Arabia", coordinates: [45.0792, 23.8859], type: "client", address: "Strategic client operations in Saudi Arabia." },
  { id: "qa", name: "Qatar", coordinates: [51.1839, 25.3548], type: "client", address: "Client presence in Doha, Qatar." },

  // African clients
  { id: "ma", name: "Morocco", coordinates: [-7.0926, 31.7917], type: "client", address: "Client operations across Morocco." },
  { id: "eh", name: "Western Sahara", coordinates: [-13.0, 24.5], type: "client", address: "Client presence in Western Sahara." },
  { id: "ml", name: "Mali", coordinates: [-1.9810, 17.5707], type: "client", address: "Client presence in Bamako, Mali." },
  { id: "ne", name: "Niger", coordinates: [8.0817, 17.6078], type: "client", address: "Client presence in Niamey, Niger." },
  { id: "eg", name: "Egypt", coordinates: [30.8025, 26.8206], type: "client", address: "Client operations in Cairo, Egypt." },
  { id: "bj", name: "Benin", coordinates: [2.3158, 9.3077], type: "client", address: "Client presence in Cotonou, Benin." },
  { id: "bi", name: "Burundi", coordinates: [29.9189, -3.3731], type: "client", address: "Client presence in Bujumbura, Burundi." },
  { id: "ci", name: "Côte d'Ivoire", coordinates: [-5.5471, 7.5400], type: "client", address: "Client operations in Abidjan, Côte d'Ivoire." },
  { id: "cd", name: "DR Congo", coordinates: [23.6560, -2.8770], type: "client", address: "Client presence in Kinshasa, DR Congo." },
  { id: "gn", name: "Guinea", coordinates: [-11.3414, 9.9456], type: "client", address: "Client presence in Conakry, Guinea." },
  { id: "ke", name: "Kenya", coordinates: [37.9062, -0.0236], type: "client", address: "East Africa client operations in Nairobi, Kenya." },
  { id: "ng", name: "Nigeria", coordinates: [8.6753, 9.0820], type: "client", address: "West Africa client operations in Lagos, Nigeria." },
  { id: "cg", name: "Republic of Congo", coordinates: [15.8277, -0.2280], type: "client", address: "Client presence in Brazzaville, Republic of Congo." },
  { id: "sn", name: "Senegal", coordinates: [-14.4524, 14.4974], type: "client", address: "Client presence in Dakar, Senegal." },
  { id: "tg", name: "Togo", coordinates: [0.8248, 8.6195], type: "client", address: "Client presence in Lomé, Togo." },
  { id: "tz", name: "Tanzania", coordinates: [39.2083, -6.7924], type: "client", address: "East Africa expansion\nDar es Salaam, Tanzania" },
  { id: "et", name: "Ethiopia", coordinates: [38.7578, 8.9806], type: "client", address: "East Africa operations hub\nAddis Ababa, Ethiopia" },
  { id: "dj", name: "Djibouti", coordinates: [43.1450, 11.5890], type: "client", address: "Horn of Africa footprint\nDjibouti City, Djibouti" },
  { id: "rw", name: "Rwanda", coordinates: [30.0619, -1.9441], type: "client", address: "East Africa regional hub\nKigali, Rwanda" },
  { id: "mz", name: "Mozambique", coordinates: [32.5732, -25.9653], type: "client", address: "Southeast Africa operations\nMaputo, Mozambique" },
  { id: "cv", name: "Cape Verde", coordinates: [-23.5087, 14.9315], type: "client", address: "Atlantic island operations\nPraia, Cape Verde" },
  { id: "km", name: "Comoros", coordinates: [43.2536, -11.6986], type: "client", address: "East Africa island operations\nMoroni, Comoros" },
  { id: "td", name: "Chad", coordinates: [15.0557, 12.1348], type: "client", address: "Central Africa presence\nN'Djamena, Chad" },
  { id: "cm", name: "Cameroon", coordinates: [11.5021, 3.8480], type: "client", address: "Central Africa operations\nYaoundé, Cameroon" },
  { id: "ga", name: "Gabon", coordinates: [9.4544, 0.4162], type: "client", address: "Central Africa hub\nLibreville, Gabon" },
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
        className={`pointer-events-auto absolute z-50 rounded-[24px] border border-zinc-200 bg-white p-4 shadow-2xl ${fullscreen ? "inset-x-4 bottom-4" : "inset-x-3 bottom-3"
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

        <h4 className={`pr-6 text-base font-bold ${activeLocation.type === "office" ? "text-red-600" : "text-slate-800"} flex items-center gap-2`}>
          <span>{activeLocation.name}</span>
          <img 
            src={`https://flagcdn.com/${activeLocation.id.toLowerCase()}.svg`} 
            alt={`${activeLocation.name} flag`} 
            className="w-5 h-3.5 object-cover rounded-xs border border-zinc-200/50 shadow-xs"
          />
          {activeLocation.type === "office" && (
            <span className="ml-2 rounded-sm bg-red-50 px-2 py-0.5 align-middle text-[10px] uppercase tracking-[0.24em] text-red-400 font-medium">
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
                const rawName = geo.properties.name;
                const countryName = rawName;
                const isOfficeCountry = officeCountries.includes(countryName);
                const matchedLocation = locations.find((loc) =>
                  loc.name === countryName ||
                  (countryName === "Ivory Coast" && loc.name === "Ivory Coast")
                );
                const officeLocation = matchedLocation?.type === "office" ? matchedLocation : undefined;
                const tooltipContent = matchedLocation ? `${matchedLocation.name}|${matchedLocation.id}` : undefined;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    data-tooltip-id={!isMobile ? "map-tooltip" : undefined}
                    data-tooltip-content={!isMobile ? tooltipContent : undefined}
                    fill={isOfficeCountry ? "#DC2626" : "#E4E7EB"}
                    stroke={rawName === "Western Sahara" ? "#E4E7EB" : "#FFFFFF"}
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
                data-tooltip-content={!isMobile ? `${loc.name}|${loc.id}` : undefined}
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
    <section
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

          {/* Stats + Regional bar chart */}
          {(() => {
            const offices = locations.filter(l => l.type === "office");
            const clients = locations.filter(l => l.type === "client");
            const africa  = clients.filter(l => ["ma","eh","ml","ne","eg","bj","bi","ci","cd","gn","ke","ng","cg","sn","tg","tz","et","dj","rw","mz","cv","km","td","cm","ga"].includes(l.id));
            const europe  = clients.filter(l => ["fr","de","be","it","lu","cy"].includes(l.id));
            const asia    = clients.filter(l => ["sa","qa"].includes(l.id));
            const total   = clients.length;
            const regions = [
              { label: "Africa",  count: africa.length,  color: "#DC2626", pct: Math.round((africa.length  / total) * 100) },
              { label: "Europe",  count: europe.length,  color: "#1E293B", pct: Math.round((europe.length  / total) * 100) },
              { label: "Asia",    count: asia.length,    color: "#6B7280", pct: Math.round((asia.length    / total) * 100) },
            ];
            return (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mx-auto mt-6 w-full max-w-2xl rounded-2xl border border-zinc-100 bg-white px-5 py-4 shadow-sm"
              >
                {/* Stat counters */}
                <div className="mb-4 flex items-center justify-around divide-x divide-zinc-100">
                  <div className="flex flex-col items-center gap-0.5 px-4">
                    <span className="text-2xl font-black text-red-600">{offices.length}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">Offices / HQ</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 px-4">
                    <span className="text-2xl font-black text-slate-800">{total}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">Client Countries</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 px-4">
                    <span className="text-2xl font-black text-zinc-700">{regions.length}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">Regions</span>
                  </div>
                </div>

                {/* Regional breakdown bar */}
                <div className="space-y-2">
                  {regions.map((r) => (
                    <div key={r.label} className="flex items-center gap-3">
                      <span className="w-12 shrink-0 text-right text-[10px] font-semibold uppercase tracking-wide text-zinc-400">{r.label}</span>
                      <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-zinc-100">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${r.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
                          className="absolute inset-y-0 left-0 rounded-full"
                          style={{ backgroundColor: r.color }}
                        />
                      </div>
                      <span className="w-8 shrink-0 text-[11px] font-bold text-zinc-600">{r.count}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })()}
        </div>

        <div
          ref={mapWrapperRef}
          className="map-wrapper relative z-20 mx-auto mt-6 w-full overflow-hidden rounded-[28px] border border-zinc-200/70 to-white shadow-sm md:-mt-24 md:rounded-none md:border-0 md:bg-transparent md:shadow-none"
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

                <h4 className={`mb-2 pr-6 text-base font-bold md:text-lg ${activeLocation.type === "office" ? "text-red-600" : "text-slate-800"} flex items-center gap-2`}>
                  <span>{activeLocation.name}</span>
                  <img 
                    src={`https://flagcdn.com/${activeLocation.id.toLowerCase()}.svg`} 
                    alt={`${activeLocation.name} flag`} 
                    className="w-5 h-3.5 object-cover rounded-xs border border-zinc-200/50 shadow-xs"
                  />
                  {activeLocation.type === "office" && (
                    <span className="ml-2 rounded-sm bg-red-50 px-2 py-0.5 align-middle text-xs uppercase tracking-widest text-red-400 font-medium">
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
              render={({ content }) => {
                if (!content) return null;
                const [name, id] = content.split("|");
                if (id) {
                  return (
                    <div className="flex items-center gap-2 px-1 py-0.5">
                      <img 
                        src={`https://flagcdn.com/${id.toLowerCase()}.svg`} 
                        alt={`${name} flag`} 
                        className="w-4.5 h-3 object-cover rounded-xs border border-zinc-700/50 shadow-xs"
                      />
                      <span>{name}</span>
                    </div>
                  );
                }
                return <span>{content}</span>;
              }}
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
    </section>
  );
}
