import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".mobile-nav-link",
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: "power2.out" }
        );
      });
      return () => ctx.revert();
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-border/50 py-3"
            : "bg-transparent py-6"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          <Link href="/" aria-label="Refyno Home">
            <span className="text-2xl font-bold tracking-tight text-refyno-dark" data-testid="link-home-logo">
              Refyno<span className="text-refyno-green">.</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8" role="menubar">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    location === link.href
                      ? "text-refyno-green"
                      : "text-refyno-dark/70 hover:text-refyno-dark"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                  data-magnetic
                  role="menuitem"
                  aria-current={location === link.href ? "page" : undefined}
                >
                  {link.label}
                  {location === link.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-refyno-green rounded-full" aria-hidden="true" />
                  )}
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="https://wa.me/971567219287"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-refyno-dark text-white border-refyno-dark"
                data-testid="button-nav-start-project"
                data-magnetic
              >
                Message Us
              </Button>
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </Button>
        </div>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 bg-white md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          onKeyDown={handleKeyDown}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
            {navLinks.map((link, index) => (
              <Link key={link.href} href={link.href}>
                <button
                  className={`mobile-nav-link text-3xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-refyno-green focus:ring-offset-2 rounded-lg px-4 py-2 ${
                    location === link.href
                      ? "text-refyno-green"
                      : "text-refyno-dark"
                  }`}
                  onClick={() => setIsOpen(false)}
                  data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                  tabIndex={0}
                  autoFocus={index === 0}
                  aria-current={location === link.href ? "page" : undefined}
                >
                  {link.label}
                </button>
              </Link>
            ))}
            <a
              href="https://wa.me/971567219287"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-refyno-dark text-white border-refyno-dark mt-4"
                onClick={() => setIsOpen(false)}
                data-testid="button-mobile-start-project"
              >
                Message Us on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
