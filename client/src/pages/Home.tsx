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
  CheckCircle,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { PortfolioCard } from "@/components/PortfolioCard";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { PerformanceWidget } from "@/components/PerformanceWidget";
import { GlassmorphismCard } from "@/components/GlassmorphismCard";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Website Repairs & Fixes",
    description: "Fast fixes for broken layouts, slow loading, and technical issues plaguing your site.",
    icon: Wrench,
  },
  {
    title: "Modern Redesigns",
    description: "Transform your outdated website into a stunning, contemporary digital experience.",
    icon: Palette,
  },
  {
    title: "Full Website Builds",
    description: "Complete website development from concept to launch with cutting-edge technology.",
    icon: Rocket,
  },
  {
    title: "Mobile-Optimized Layouts",
    description: "Responsive designs that look and perform flawlessly on every device and screen size.",
    icon: Smartphone,
  },
  {
    title: "SEO Performance Upgrades",
    description: "Boost your search rankings and site speed with technical SEO optimizations.",
    icon: TrendingUp,
  },
];

const portfolio = [
  {
    title: "Bloom & Co",
    category: "Premium Flower Shop",
    color: "dark",
    description: "Dark, elegant e-commerce design with rich visuals and seamless checkout experience.",
  },
  {
    title: "Noir Kitchen",
    category: "Restaurant & Menu",
    color: "elegant",
    description: "Sophisticated black and serif typography creating an upscale dining atmosphere.",
  },
  {
    title: "Glow Studio",
    category: "Beauty & Spa",
    color: "minimal",
    description: "Clean white minimalism that radiates luxury and tranquility.",
  },
  {
    title: "Iron Forge Gym",
    category: "Fitness & Training",
    color: "bold",
    description: "Bold, dark design with high-energy visuals that motivate action.",
  },
];

const whyChooseUs = [
  "UAE-focused expertise with local market understanding",
  "Average 3-5 day turnaround for most projects",
  "Performance-first approach for fast-loading sites",
  "Ongoing support and maintenance packages",
  "100% satisfaction guarantee on all projects",
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const hero = heroRef.current;
      if (hero) {
        gsap.fromTo(
          hero.querySelectorAll(".hero-animate"),
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power3.out" }
        );
      }

      const services = servicesRef.current;
      if (services) {
        gsap.fromTo(
          services.querySelectorAll(".service-card"),
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: services,
              start: "top 80%",
            },
          }
        );
      }

      const portfolio = portfolioRef.current;
      if (portfolio) {
        gsap.fromTo(
          portfolio.querySelectorAll(".portfolio-card"),
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: portfolio,
              start: "top 75%",
            },
          }
        );
      }

      const whyUs = whyUsRef.current;
      if (whyUs) {
        gsap.fromTo(
          whyUs.querySelectorAll(".why-item"),
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: whyUs,
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
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-refyno-green/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-refyno-green/5 rounded-full blur-3xl animate-float-slow" />
        </div>

        <GlassmorphismCard className="absolute top-32 right-8 md:right-24 p-4 animate-float hidden md:block" aria-hidden="true">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-refyno-green/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-refyno-green" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Performance</p>
              <p className="font-semibold text-refyno-dark">+285%</p>
            </div>
          </div>
        </GlassmorphismCard>

        <GlassmorphismCard className="absolute bottom-40 left-8 md:left-24 p-4 animate-float-slow hidden md:block" aria-hidden="true">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-refyno-green to-refyno-green-dark border-2 border-white"
                />
              ))}
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Happy Clients</p>
              <p className="font-semibold text-refyno-dark">50+ UAE Businesses</p>
            </div>
          </div>
        </GlassmorphismCard>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="hero-animate inline-flex items-center gap-2 bg-refyno-green/10 border border-refyno-green/20 rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-refyno-green" aria-hidden="true" />
            <span className="text-sm font-medium text-refyno-dark">UAE's Premier Web Design Studio</span>
          </div>

          <h1 id="hero-heading" className="hero-animate text-4xl md:text-6xl lg:text-7xl font-bold text-refyno-dark leading-tight mb-6">
            Refyno —{" "}
            <span className="relative">
              <span className="relative z-10">Websites Rebuilt</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-refyno-green/30 -z-0" aria-hidden="true" />
            </span>
            <br />
            to Perfection
          </h1>

          <p className="hero-animate text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Fixing, redesigning, and future-proofing UAE business websites.
            We transform outdated sites into high-performance digital experiences.
          </p>

          <div className="hero-animate flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-refyno-dark text-white border-refyno-dark text-base px-8"
                data-testid="button-hero-start"
                data-magnetic
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8"
                data-testid="button-hero-portfolio"
                data-magnetic
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section ref={servicesRef} className="py-20 md:py-32 px-6 bg-gradient-to-b from-white to-gray-50/50" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-refyno-green text-sm font-semibold uppercase tracking-wider">
              What We Do
            </span>
            <h2 id="services-heading" className="text-3xl md:text-5xl font-bold text-refyno-dark mt-4 mb-6">
              Services That Transform
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From quick fixes to complete overhauls, we handle every aspect of your web presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={service.title} className="service-card">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6" aria-labelledby="transformation-heading">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-refyno-green text-sm font-semibold uppercase tracking-wider">
                The Difference
              </span>
              <h2 id="transformation-heading" className="text-3xl md:text-4xl font-bold text-refyno-dark mt-4 mb-6">
                See the Transformation
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Drag the slider to see how we transform outdated websites into modern,
                high-performance digital experiences.
              </p>
              <PerformanceWidget />
            </div>
            <div>
              <BeforeAfterSlider
                beforeLabel="Before Refyno"
                afterLabel="After Refyno"
              />
            </div>
          </div>
        </div>
      </section>

      <section ref={portfolioRef} className="py-20 md:py-32 px-6 bg-gradient-to-b from-gray-50/50 to-white" aria-labelledby="portfolio-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-refyno-green text-sm font-semibold uppercase tracking-wider">
                Our Work
              </span>
              <h2 id="portfolio-heading" className="text-3xl md:text-5xl font-bold text-refyno-dark mt-4">
                Featured Projects
              </h2>
            </div>
            <Link href="/portfolio">
              <Button variant="outline" data-testid="button-view-all-work" data-magnetic>
                View All Work
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <div key={project.title} className="portfolio-card">
                <PortfolioCard
                  title={project.title}
                  category={project.category}
                  color={project.color}
                  description={project.description}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={whyUsRef} className="py-20 md:py-32 px-6" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-refyno-green text-sm font-semibold uppercase tracking-wider">
                Why Refyno
              </span>
              <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-refyno-dark mt-4 mb-8">
                Why UAE Businesses Choose Us
              </h2>
              <ul className="space-y-4" role="list">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="why-item flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-refyno-green mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-refyno-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-refyno-dark rounded-3xl p-8 md:p-12">
                <div className="text-refyno-green text-6xl md:text-8xl font-bold mb-4" data-testid="stat-projects">50+</div>
                <p className="text-white/80 text-lg mb-2">Projects Delivered</p>
                <p className="text-white/60">for UAE businesses across all industries</p>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="text-2xl font-bold text-white" data-testid="stat-rating">4.9/5</div>
                      <div className="text-white/60 text-sm">Client Rating</div>
                    </div>
                    <div className="flex" aria-label="4.9 out of 5 stars">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i <= 4 ? "text-refyno-green fill-refyno-green" : "text-refyno-green"}`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-refyno-green/20 rounded-full blur-2xl" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-refyno-dark" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Website?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you create a stunning,
            high-performance website that drives results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-refyno-green text-refyno-dark border-refyno-green-dark text-base px-8"
                data-testid="button-cta-start"
                data-magnetic
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 border-white/30 text-white hover:bg-white/10"
                data-testid="button-cta-services"
                data-magnetic
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
