export function SectionDivider({
  title,
  className = "",
  theme = "red",
}: {
  title: string;
  className?: string;
  theme?: "red" | "blue";
}) {
  // Inline styles bypass any potential Tailwind compiler caching/compilation limits
  const isBlue = theme === "blue";
  const gradientColor = isBlue ? "#3b82f6" : "#ef4444"; // blue-500 or red-500
  const bottomColor = isBlue ? "rgba(59, 130, 246, 0.4)" : "#fecaca"; // blue-500/40 or red-200

  return (
    <div className={`flex w-full flex-col items-center justify-center ${className}`}>
      <div 
        className="mb-3 h-10 w-px" 
        style={{ background: `linear-gradient(to bottom, transparent, ${gradientColor}, transparent)` }}
      />
      <h5 className={`px-4 text-center text-[10px] font-semibold uppercase tracking-[0.28em] sm:text-[11px] sm:tracking-[0.35em] ${isBlue ? "text-blue-600" : "text-red-600"}`}>
        {title}
      </h5>
      <div 
        className="mt-3 h-px w-16" 
        style={{ backgroundColor: bottomColor }}
      />
    </div>
  );
}
