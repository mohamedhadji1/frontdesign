export function SectionDivider({ title, className = "bg-white" }: { title: string, className?: string }) {
  return (
    <div className={`w-full flex flex-col items-center justify-center z-20 relative ${className}`}>
      <div className="w-[2px] h-8 bg-red-600 mb-2"></div>
      <h5 className="text-red-600 uppercase tracking-[0.2em] text-xs font-bold whitespace-nowrap">
        {title}
      </h5>
    </div>
  );
}