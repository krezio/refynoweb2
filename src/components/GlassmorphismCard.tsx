interface GlassmorphismCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

export function GlassmorphismCard({
  children,
  className = "",
  variant = "light",
}: GlassmorphismCardProps) {
  const baseStyles = variant === "light"
    ? "bg-white/40 border-white/20"
    : "bg-refyno-dark/40 border-white/10";

  return (
    <div
      className={`
        ${baseStyles}
        backdrop-blur-xl
        rounded-2xl
        border
        shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  );
}
