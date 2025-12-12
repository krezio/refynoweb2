import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Website Repairs", href: "/services" },
    { label: "Modern Redesigns", href: "/services" },
    { label: "Full Builds", href: "/services" },
    { label: "Mobile Optimization", href: "/services" },
    { label: "SEO Performance", href: "/services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
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
              UAE's premier web design studio. We transform outdated websites into stunning, high-performance digital experiences.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="mailto:hello@refyno.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-refyno-green/20 transition-colors focus:outline-none focus:ring-2 focus:ring-refyno-green"
                aria-label="Email us"
                data-testid="link-footer-email"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="tel:+971000000000"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-refyno-green/20 transition-colors focus:outline-none focus:ring-2 focus:ring-refyno-green"
                aria-label="Call us"
                data-testid="link-footer-phone"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://maps.google.com/?q=Dubai,UAE"
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
              Contact
            </h4>
            <address className="not-italic">
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-refyno-green flex-shrink-0" aria-hidden="true" />
                  <span>Dubai, United Arab Emirates</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-refyno-green flex-shrink-0" aria-hidden="true" />
                  <a href="mailto:hello@refyno.com" className="hover:text-refyno-green transition-colors">
                    hello@refyno.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-refyno-green flex-shrink-0" aria-hidden="true" />
                  <a href="tel:+971000000000" className="hover:text-refyno-green transition-colors">
                    +971 XX XXX XXXX
                  </a>
                </li>
              </ul>
            </address>
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
