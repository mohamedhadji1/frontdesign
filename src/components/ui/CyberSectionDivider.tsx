type CyberSectionDividerProps = {
  className?: string;
  theme?: "red" | "blue";
};

export function CyberSectionDivider({
  className,
  theme = "red",
}: CyberSectionDividerProps) {
  const styles = {
    red: {
      glow: "via-red-600/50",
      dot: "bg-red-600/80",
      brackets: "bg-red-900/50",
    },
    blue: {
      glow: "via-blue-600/50",
      dot: "bg-blue-600/80",
      brackets: "bg-blue-900/50",
    },
  };

  const current = styles[theme];

  return (
    <div className="mx-auto w-full">
      <div
        className={`relative z-20 -my-px flex w-full items-center justify-center ${className ?? ""}`}
      >
        <div
          className={`absolute h-px w-32 bg-gradient-to-r from-transparent ${current.glow} to-transparent md:w-64`}
        />
        <div className="absolute flex items-center justify-center rounded-sm border border-zinc-800 bg-black/20 p-1">
          <div className={`h-1.5 w-1.5 rounded-full animate-pulse ${current.dot}`} />
        </div>
        <div className="absolute flex h-px w-12 items-center justify-between bg-transparent md:w-24">
          <div className={`h-2 w-px ${current.brackets}`} />
          <div className={`h-2 w-px ${current.brackets}`} />
        </div>
      </div>
    </div>
  );
}
