import { useState, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        handleRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    });
    return () => ctx.revert();
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent | MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleTouchMove = useCallback((e: React.TouchEvent | TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const startDrag = useCallback(() => setIsDragging(true), []);
  const stopDrag = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (isDragging) {
      const handleGlobalMouseMove = (e: MouseEvent) => handleMouseMove(e);
      const handleGlobalTouchMove = (e: TouchEvent) => {
        e.preventDefault();
        handleMove(e.touches[0].clientX);
      };

      window.addEventListener("mousemove", handleGlobalMouseMove);
      window.addEventListener("mouseup", stopDrag);
      window.addEventListener("touchmove", handleGlobalTouchMove, { passive: false });
      window.addEventListener("touchend", stopDrag);

      return () => {
        window.removeEventListener("mousemove", handleGlobalMouseMove);
        window.removeEventListener("mouseup", stopDrag);
        window.removeEventListener("touchmove", handleGlobalTouchMove);
        window.removeEventListener("touchend", stopDrag);
      };
    }
  }, [isDragging, handleMouseMove, handleMove, stopDrag]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const step = 5;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((prev) => Math.max(0, prev - step));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((prev) => Math.min(100, prev + step));
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden select-none"
      data-testid="slider-before-after"
      role="group"
      aria-label="Before and after comparison slider"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl font-bold text-gray-400/50 mb-2">OLD</div>
            <p className="text-gray-500/50">Outdated Design</p>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-refyno-dark to-refyno-dark/90">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-refyno-green mb-2">NEW</div>
              <p className="text-white/70">Modern & Fast</p>
            </div>
          </div>
          <div className="absolute top-4 right-4 bg-refyno-green/20 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-refyno-green/30">
            <span className="text-refyno-green text-xs font-medium">Performance: 98/100</span>
          </div>
        </div>
      </div>

      <button
        ref={handleRef}
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 focus:outline-none focus:ring-2 focus:ring-refyno-green focus:ring-offset-2"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        onKeyDown={handleKeyDown}
        aria-label={`Comparison slider at ${Math.round(position)}%. Use arrow keys to adjust.`}
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        role="slider"
        tabIndex={0}
        data-testid="slider-handle"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
          <div className="flex items-center gap-1" aria-hidden="true">
            <div className="w-0 h-0 border-t-4 border-b-4 border-r-6 border-transparent border-r-refyno-dark" />
            <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-refyno-dark" />
          </div>
        </div>
      </button>

      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5" aria-hidden="true">
        <span className="text-refyno-dark text-xs font-medium">{beforeLabel}</span>
      </div>
      <div className="absolute bottom-4 right-4 bg-refyno-dark/90 backdrop-blur-sm rounded-lg px-3 py-1.5" aria-hidden="true">
        <span className="text-white text-xs font-medium">{afterLabel}</span>
      </div>
    </div>
  );
}
