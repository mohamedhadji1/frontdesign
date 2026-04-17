export function SectionDivider({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={`flex w-full flex-col items-center justify-center ${className}`}>
      <div className="mb-3 h-10 w-px bg-gradient-to-b from-transparent via-red-500 to-transparent" />
      <h5 className="text-[11px] font-semibold uppercase tracking-[0.35em] text-red-600">
        {title}
      </h5>
      <div className="mt-3 h-px w-16 bg-red-200" />
    </div>
  );
}