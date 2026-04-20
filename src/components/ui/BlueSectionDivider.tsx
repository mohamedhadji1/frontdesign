export function BlueSectionDivider() {
  return (
    <div className="relative w-full h-px bg-zinc-200 flex items-center justify-center -my-px z-20">
      {/* Glow highlight */}
      <div className="absolute w-32 md:w-64 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      {/* Decorative center element */}
      <div className="absolute flex items-center justify-center p-1 bg-zinc-50 rounded-sm border border-zinc-200">
        <div className="w-1.5 h-1.5 bg-blue-600/80 rounded-full animate-pulse" />
      </div>

      {/* Decorative side brackets */}
      <div className="absolute w-12 md:w-24 h-px flex justify-between items-center bg-transparent">
        <div className="w-px h-2 bg-blue-400/50" />
        <div className="w-px h-2 bg-blue-400/50" />
      </div>
    </div>
  );
}
