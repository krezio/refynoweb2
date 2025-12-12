import { useEffect, useState, useRef, useCallback } from "react";
import { gsap } from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(isTouchDevice || isSmallScreen);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const checkIfInteractive = useCallback((target: EventTarget | null): boolean => {
    if (!target || !(target instanceof HTMLElement)) return false;
    
    const interactive = target.closest("a, button, [data-magnetic], input, textarea, select");
    return interactive !== null;
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (checkIfInteractive(e.target)) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (checkIfInteractive(e.target)) {
        const relatedTarget = e.relatedTarget as HTMLElement | null;
        if (!relatedTarget || !checkIfInteractive(relatedTarget)) {
          setIsHovering(false);
        }
      }
    };

    const animate = () => {
      cursorPosRef.current.x += (mouseRef.current.x - cursorPosRef.current.x) * 0.15;
      cursorPosRef.current.y += (mouseRef.current.y - cursorPosRef.current.y) * 0.15;
      
      gsap.set(cursor, {
        x: cursorPosRef.current.x,
        y: cursorPosRef.current.y,
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver, true);
    document.addEventListener("mouseout", handleMouseOut, true);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver, true);
      document.removeEventListener("mouseout", handleMouseOut, true);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMobile, checkIfInteractive]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-300 ${
          isHovering ? "scale-150" : "scale-100"
        }`}
        style={{ transform: "translate(-50%, -50%)" }}
        aria-hidden="true"
      >
        <div
          className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
            isHovering
              ? "border-refyno-green bg-refyno-green/10"
              : "border-refyno-dark/30"
          }`}
        />
      </div>
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ transform: "translate(-50%, -50%)" }}
        aria-hidden="true"
      >
        <div className="w-2 h-2 rounded-full bg-refyno-green" />
      </div>
    </>
  );
}
