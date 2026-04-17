export function CyberSectionDivider() {
  return (
    <div className="relative w-full h-px border-t border-zinc-900/50 bg-black flex items-center justify-center -my-px z-20">
      {/* Glow highlight */}
      <div className="absolute w-32 md:w-64 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      
      {/* Decorative center element */}
      <div className="absolute flex items-center justify-center p-1 bg-black rounded-sm border border-zinc-800">
        <div className="w-1.5 h-1.5 bg-red-600/80 rounded-full animate-pulse" />
      </div>

      {/* Decorative side brackets */}
      <div className="absolute w-12 md:w-24 h-px flex justify-between items-center bg-transparent">
        <div className="w-px h-2 bg-red-900/50" />
        <div className="w-px h-2 bg-red-900/50" />
      </div>
    </div>
  );
}