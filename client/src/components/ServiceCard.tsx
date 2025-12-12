import { useRef, useEffect, useCallback, useState } from "react";
import { gsap } from "gsap";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function ServiceCard({ title, description, icon: Icon, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isTouchDevice) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [isTouchDevice]);

  const handleMouseLeave = useCallback(() => {
    if (isTouchDevice) return;
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [isTouchDevice]);

  return (
    <article
      ref={cardRef}
      className="group relative bg-white rounded-2xl p-6 md:p-8 border border-border/50 transition-all duration-300 hover:border-refyno-green/30 hover:shadow-xl hover:shadow-refyno-green/5 focus-within:ring-2 focus-within:ring-refyno-green focus-within:ring-offset-2"
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-testid={`card-service-${index}`}
      tabIndex={0}
      aria-labelledby={`service-title-${index}`}
    >
      <div
        className="w-14 h-14 rounded-xl bg-refyno-green/10 flex items-center justify-center mb-6 group-hover:bg-refyno-green/20 transition-colors duration-300"
        style={{ transform: "translateZ(30px)" }}
        aria-hidden="true"
      >
        <Icon className="w-6 h-6 text-refyno-green" />
      </div>

      <h3
        id={`service-title-${index}`}
        className="text-xl font-semibold text-refyno-dark mb-3"
        style={{ transform: "translateZ(20px)" }}
      >
        {title}
      </h3>

      <p
        className="text-muted-foreground leading-relaxed"
        style={{ transform: "translateZ(10px)" }}
      >
        {description}
      </p>

      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300" aria-hidden="true">
        <div className="w-8 h-8 rounded-full bg-refyno-green flex items-center justify-center">
          <svg
            className="w-4 h-4 text-refyno-dark"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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
    </article>
  );
}
