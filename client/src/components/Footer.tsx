import { Link } from "wouter";
import { MapPin, MessageCircle } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const footerLinks = {
  services: [
    { label: "Website Repairs", href: "/services" },
    { label: "Modern Redesigns", href: "/services" },
    { label: "New Website Builds", href: "/services" },
    { label: "Mobile Optimization", href: "/services" },
    { label: "SEO Performance", href: "/services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-refyno-dark text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Refyno Home">
              <span className="text-2xl font-bold tracking-tight" data-testid="link-footer-logo">
                Refyno<span className="text-refyno-green">.</span>
              </span>
            </Link>
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">
              UAE's premier web design studio. We build new websites and transform outdated ones into stunning, high-performance digital experiences.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://wa.me/971567219287"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-refyno-green/20 transition-colors focus:outline-none focus:ring-2 focus:ring-refyno-green"
                aria-label="Message us on WhatsApp"
                data-testid="link-footer-whatsapp"
              >
                <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com/refyno"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-refyno-green/20 transition-colors focus:outline-none focus:ring-2 focus:ring-refyno-green"
                aria-label="Follow us on Instagram"
                data-testid="link-footer-instagram"
              >
                <FaInstagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://maps.google.com/?q=Al+Ain,UAE"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-refyno-green/20 transition-colors focus:outline-none focus:ring-2 focus:ring-refyno-green"
                aria-label="View our location on map"
                data-testid="link-footer-location"
              >
                <MapPin className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Services navigation">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span
                      className="text-white/70 hover:text-refyno-green transition-colors text-sm"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company navigation">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span
                      className="text-white/70 hover:text-refyno-green transition-colors text-sm"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 mt-0.5 text-refyno-green flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-white/70 text-sm">Response time</p>
                  <p className="text-white font-medium">Within minutes</p>
                </div>
              </div>
              <a
                href="https://wa.me/971567219287"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-refyno-green transition-colors"
              >
                <FaWhatsapp className="w-4 h-4 text-refyno-green flex-shrink-0" aria-hidden="true" />
                <span className="text-sm">+971 56 721 9287</span>
              </a>
              <a
                href="https://instagram.com/refyno"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-refyno-green transition-colors"
              >
                <FaInstagram className="w-4 h-4 text-refyno-green flex-shrink-0" aria-hidden="true" />
                <span className="text-sm">DM us on Instagram</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-refyno-green flex-shrink-0" aria-hidden="true" />
                <span className="text-white/70 text-sm">Al Ain, United Arab Emirates</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} Refyno. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Crafted with precision in the UAE
          </p>
        </div>
      </div>
    </footer>
  );
}
