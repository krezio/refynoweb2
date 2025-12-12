import { useState, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import newWebsiteImage from "@assets/image_1765541971043.png";

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
      className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden select-none shadow-2xl"
      data-testid="slider-before-after"
      role="group"
      aria-label="Before and after comparison slider"
    >
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)" }}>
        <div className="absolute inset-0 p-4" style={{ fontFamily: "Times New Roman, serif" }}>
          <div style={{ 
            background: "linear-gradient(to bottom, #000080 0%, #0000aa 100%)", 
            padding: "8px 12px", 
            marginBottom: "8px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}>
            <div style={{ display: "flex", gap: "4px" }}>
              <div style={{ width: "12px", height: "12px", background: "#c0c0c0", border: "1px solid #808080" }} />
              <div style={{ width: "12px", height: "12px", background: "#c0c0c0", border: "1px solid #808080" }} />
              <div style={{ width: "12px", height: "12px", background: "#c0c0c0", border: "1px solid #808080" }} />
            </div>
            <span style={{ color: "white", fontSize: "12px", fontWeight: "bold" }}>Old Website - Internet Explorer</span>
          </div>
          
          <div style={{ background: "#ffffff", border: "3px inset #c0c0c0", padding: "16px", height: "calc(100% - 50px)", overflow: "hidden" }}>
            <div style={{ textAlign: "center", marginBottom: "16px", overflow: "hidden" }}>
              <div className="animate-marquee" style={{ color: "#ff0000", fontSize: "14px", fontWeight: "bold", whiteSpace: "nowrap" }}>
                *** Welcome to our website! Click here for special offers!!! *** BEST PRICES GUARANTEED!!! ***
              </div>
            </div>
            
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={{ width: "30%", verticalAlign: "top", padding: "8px", background: "#ffffcc", border: "2px solid #999" }}>
                    <p style={{ color: "#0000ff", textDecoration: "underline", fontSize: "11px", margin: "4px 0", cursor: "pointer" }}>Home</p>
                    <p style={{ color: "#0000ff", textDecoration: "underline", fontSize: "11px", margin: "4px 0", cursor: "pointer" }}>About Us</p>
                    <p style={{ color: "#0000ff", textDecoration: "underline", fontSize: "11px", margin: "4px 0", cursor: "pointer" }}>Services</p>
                    <p style={{ color: "#0000ff", textDecoration: "underline", fontSize: "11px", margin: "4px 0", cursor: "pointer" }}>Contact</p>
                    <div style={{ marginTop: "12px", padding: "8px", background: "#ff00ff", border: "2px dashed #000" }}>
                      <p style={{ color: "#ffff00", fontSize: "10px", fontWeight: "bold", textAlign: "center" }}>CLICK HERE!!!</p>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "top", padding: "12px" }}>
                    <h1 style={{ color: "#800000", fontSize: "18px", fontFamily: "Comic Sans MS, cursive", marginBottom: "8px" }}>
                      Welcome To Our Company!!!
                    </h1>
                    <p style={{ fontSize: "11px", color: "#333", lineHeight: "1.4" }}>
                      We are the best at what we do. Call us today for a FREE quote!!!
                    </p>
                    <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
                      <div style={{ width: "60px", height: "60px", background: "#c0c0c0", border: "2px solid #808080", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: "8px", color: "#666" }}>IMAGE</span>
                      </div>
                      <div style={{ width: "60px", height: "60px", background: "#c0c0c0", border: "2px solid #808080", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: "8px", color: "#666" }}>IMAGE</span>
                      </div>
                    </div>
                    <p style={{ fontSize: "9px", color: "#666", marginTop: "16px" }}>
                      Last updated: January 15, 2008 | Visitor counter: 00012847
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        aria-hidden="true"
      >
        <img 
          src={newWebsiteImage} 
          alt="Modern website design"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-refyno-green/90 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-refyno-green/30">
          <span className="text-white text-xs font-medium">Modern & Premium</span>
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
