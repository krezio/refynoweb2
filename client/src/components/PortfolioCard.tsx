import { useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";

interface PortfolioCardProps {
  title: string;
  category: string;
  color: string;
  description: string;
  index: number;
}

export function PortfolioCard({
  title,
  category,
  color,
  description,
  index,
}: PortfolioCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isTouchDevice = useRef(false);

  useEffect(() => {
    isTouchDevice.current = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (isTouchDevice.current) return;
    const image = imageRef.current;
    if (!image) return;
    gsap.to(image, {
      scale: 1.1,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (isTouchDevice.current) return;
    const image = imageRef.current;
    if (!image) return;
    gsap.to(image, {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  const gradientColors: Record<string, string> = {
    dark: "from-zinc-900 to-zinc-800",
    elegant: "from-stone-800 to-stone-900",
    minimal: "from-gray-100 to-white",
    bold: "from-slate-900 to-slate-800",
  };

  const textColors: Record<string, string> = {
    dark: "text-white",
    elegant: "text-amber-100",
    minimal: "text-gray-900",
    bold: "text-white",
  };

  const accentColors: Record<string, string> = {
    dark: "bg-rose-400",
    elegant: "bg-amber-400",
    minimal: "bg-gray-900",
    bold: "bg-orange-500",
  };

  return (
    <article
      ref={cardRef}
      className="group cursor-pointer focus-within:ring-2 focus-within:ring-refyno-green focus-within:ring-offset-2 rounded-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-testid={`card-portfolio-${index}`}
      tabIndex={0}
      aria-labelledby={`portfolio-title-${index}`}
    >
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
        <div
          ref={imageRef}
          className={`absolute inset-0 bg-gradient-to-br ${gradientColors[color]} flex items-center justify-center`}
        >
          <div className={`text-center ${textColors[color]}`}>
            <div className={`w-16 h-1 ${accentColors[color]} rounded-full mx-auto mb-4`} aria-hidden="true" />
            <div className="text-3xl font-bold tracking-tight">{title.split(" ")[0]}</div>
            <div className="text-sm opacity-60 mt-2">{category}</div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-30" aria-hidden="true">
            <div className={`w-20 h-2 ${accentColors[color]} rounded-full`} />
            <div className={`w-8 h-8 ${accentColors[color]} rounded-lg`} />
          </div>
        </div>

        <div className="absolute inset-0 bg-refyno-dark/80 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <p className="text-sm leading-relaxed opacity-80">{description}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-refyno-green text-sm font-medium">
              View Project
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <h3 id={`portfolio-title-${index}`} className="text-lg font-semibold text-refyno-dark group-hover:text-refyno-green transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm">{category}</p>
    </article>
  );
}
