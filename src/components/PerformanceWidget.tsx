import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Zap, TrendingUp, Clock, Shield } from "lucide-react";

interface Metric {
  label: string;
  value: number;
  icon: typeof Zap;
  suffix: string;
}

const metrics: Metric[] = [
  { label: "Performance", value: 98, icon: Zap, suffix: "/100" },
  { label: "Speed Index", value: 1.2, icon: Clock, suffix: "s" },
  { label: "SEO Score", value: 95, icon: TrendingUp, suffix: "/100" },
  { label: "Security", value: 100, icon: Shield, suffix: "%" },
];

export function PerformanceWidget() {
  const [animatedValues, setAnimatedValues] = useState<number[]>(metrics.map(() => 0));
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const gsapCtxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            
            gsapCtxRef.current = gsap.context(() => {
              metrics.forEach((metric, index) => {
                const obj = { value: 0 };
                gsap.to(obj, {
                  value: metric.value,
                  duration: 2,
                  delay: index * 0.15,
                  ease: "power2.out",
                  onUpdate: () => {
                    setAnimatedValues((prev) => {
                      const newValues = [...prev];
                      newValues[index] = Number(obj.value.toFixed(1));
                      return newValues;
                    });
                  },
                });
              });
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (gsapCtxRef.current) {
        gsapCtxRef.current.revert();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-refyno-dark rounded-2xl p-6 md:p-8"
      data-testid="widget-performance"
      role="region"
      aria-label="Live performance metrics"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 rounded-full bg-refyno-green animate-pulse" aria-hidden="true" />
        <span className="text-white/60 text-sm font-medium uppercase tracking-wider">
          Live Performance Score
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const progressPercent = metric.label === "Speed Index" 
            ? Math.max(0, 100 - (animatedValues[index] * 20))
            : animatedValues[index];
          
          return (
            <div
              key={metric.label}
              className="bg-white/5 rounded-xl p-4 border border-white/10"
              data-testid={`metric-${metric.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-4 h-4 text-refyno-green" aria-hidden="true" />
                <span className="text-white/60 text-xs font-medium">{metric.label}</span>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2" aria-live="polite">
                {animatedValues[index]}
                <span className="text-sm text-white/40">{metric.suffix}</span>
              </div>
              <div 
                className="h-1.5 bg-white/10 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow={Math.round(progressPercent)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${metric.label} progress`}
              >
                <div
                  className="h-full bg-gradient-to-r from-refyno-green to-refyno-green-dark rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
