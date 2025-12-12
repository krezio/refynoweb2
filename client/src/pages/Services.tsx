import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Wrench,
  Palette,
  Rocket,
  Smartphone,
  TrendingUp,
  ArrowRight,
  Check,
  Zap,
  Clock,
  Shield,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "repairs",
    title: "Website Repairs & Fixes",
    subtitle: "Quick Fixes, Lasting Solutions",
    description:
      "Is your website broken, slow, or glitchy? We diagnose and fix technical issues fast, ensuring your site runs smoothly and professionally.",
    icon: Wrench,
    features: [
      "Bug fixes and error resolution",
      "Broken link and 404 repairs",
      "Cross-browser compatibility fixes",
      "Form and checkout repairs",
      "Plugin and integration fixes",
      "Security vulnerability patches",
    ],
    timeline: "1-3 days",
    startingAt: "AED 500",
  },
  {
    id: "redesigns",
    title: "Modern Redesigns",
    subtitle: "Fresh Look, Better Results",
    description:
      "Transform your outdated website into a stunning, contemporary digital experience that captivates visitors and converts them into customers.",
    icon: Palette,
    features: [
      "Complete visual overhaul",
      "Modern UI/UX design",
      "Brand-aligned aesthetics",
      "Improved user experience",
      "Updated content structure",
      "Enhanced call-to-actions",
    ],
    timeline: "24hrs - 3 days",
    startingAt: "AED 2,000",
  },
  {
    id: "builds",
    title: "New Website Builds",
    subtitle: "Built From the Ground Up",
    description:
      "Complete website development from concept to launch. We create custom, high-performance websites tailored to your business needs. Simpler sites delivered in 24hrs-3 days.",
    icon: Rocket,
    features: [
      "Custom design & development",
      "Content management system",
      "E-commerce integration",
      "API & third-party integrations",
      "SEO-optimized structure",
      "Performance optimization",
    ],
    timeline: "24hrs - 3 days",
    startingAt: "AED 3,000",
  },
  {
    id: "mobile",
    title: "Mobile-Optimized Layouts",
    subtitle: "Perfect on Every Device",
    description:
      "Ensure your website looks and performs flawlessly on smartphones, tablets, and desktops with responsive design optimization.",
    icon: Smartphone,
    features: [
      "Responsive design conversion",
      "Touch-friendly interfaces",
      "Mobile-first approach",
      "Fast mobile loading",
      "Gesture navigation support",
      "Cross-device testing",
    ],
    timeline: "24hrs - 3 days",
    startingAt: "AED 1,500",
  },
  {
    id: "seo",
    title: "SEO Performance Upgrades",
    subtitle: "Rank Higher, Load Faster",
    description:
      "Boost your search rankings and site speed with technical SEO optimizations that drive organic traffic and improve user experience.",
    icon: TrendingUp,
    features: [
      "Technical SEO audit",
      "Page speed optimization",
      "Core Web Vitals fixes",
      "Schema markup implementation",
      "Image & asset optimization",
      "Performance monitoring setup",
    ],
    timeline: "24hrs - 3 days",
    startingAt: "AED 2,000",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We analyze your current website and understand your goals.",
    icon: Zap,
  },
  {
    step: "02",
    title: "Planning",
    description: "We create a detailed plan and timeline for your project.",
    icon: Clock,
  },
  {
    step: "03",
    title: "Execution",
    description: "Our team implements changes with precision and care.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Delivery",
    description: "We launch your improved website with ongoing support.",
    icon: Shield,
  },
];

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = headerRef.current;
      if (header) {
        gsap.fromTo(
          header.querySelectorAll(".header-animate"),
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" }
        );
      }

      const services = servicesRef.current;
      if (services) {
        gsap.fromTo(
          services.querySelectorAll(".service-detail"),
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: services,
              start: "top 80%",
            },
          }
        );
      }

      const process = processRef.current;
      if (process) {
        gsap.fromTo(
          process.querySelectorAll(".process-step"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: process,
              start: "top 80%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <section ref={headerRef} className="pt-32 pb-16 px-6 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="services-page-heading">
        <div className="max-w-4xl mx-auto text-center">
          <span className="header-animate inline-block text-refyno-green text-sm font-semibold uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h1 id="services-page-heading" className="header-animate text-4xl md:text-6xl font-bold text-refyno-dark mb-6">
            Web Solutions That
            <br />
            <span className="text-refyno-green">Drive Results</span>
          </h1>
          <p className="header-animate text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            From quick fixes to complete overhauls, we offer comprehensive web
            services tailored to UAE businesses.
          </p>
        </div>
      </section>

      <section ref={servicesRef} className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <article
                key={service.id}
                id={service.id}
                className={`service-detail grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
                data-testid={`service-section-${service.id}`}
                aria-labelledby={`service-title-${service.id}`}
              >
                <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
                  <div className="w-14 h-14 rounded-xl bg-refyno-green/10 flex items-center justify-center mb-6" aria-hidden="true">
                    <Icon className="w-7 h-7 text-refyno-green" />
                  </div>
                  <span className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
                    {service.subtitle}
                  </span>
                  <h2 id={`service-title-${service.id}`} className="text-2xl md:text-4xl font-bold text-refyno-dark mt-2 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-6 mb-8">
                    <div>
                      <p className="text-sm text-muted-foreground">Timeline</p>
                      <p className="text-lg font-semibold text-refyno-dark">{service.timeline}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Starting at</p>
                      <p className="text-lg font-semibold text-refyno-green">{service.startingAt}</p>
                    </div>
                  </div>
                  <Link href="/contact">
                    <Button
                      className="bg-refyno-dark text-white border-refyno-dark"
                      data-testid={`button-get-started-${service.id}`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                    </Button>
                  </Link>
                </div>
                <div className={isEven ? "order-2" : "order-2 lg:order-1"}>
                  <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-border/50">
                    <h3 className="text-lg font-semibold text-refyno-dark mb-6">
                      What's Included
                    </h3>
                    <ul className="space-y-4" role="list">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-refyno-green mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <span className="text-refyno-dark">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section ref={processRef} className="py-16 md:py-24 px-6 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="process-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-refyno-green text-sm font-semibold uppercase tracking-wider">
              How We Work
            </span>
            <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-refyno-dark mt-4">
              Our Simple Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="process-step text-center"
                  data-testid={`process-step-${step.step}`}
                >
                  <div className="w-16 h-16 rounded-2xl bg-refyno-dark text-white flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="text-refyno-green font-bold text-sm mb-2">{step.step}</div>
                  <h3 className="text-xl font-semibold text-refyno-dark mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-refyno-dark" aria-labelledby="consultation-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="consultation-heading" className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure What You Need?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Message us on WhatsApp and we'll respond within minutes with a free consultation.
          </p>
          <a
            href="https://wa.me/971567219287"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-base px-8 gap-2"
              data-testid="button-free-consultation"
            >
              <FaWhatsapp className="w-5 h-5" />
              Message on WhatsApp
              <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
