import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Target,
  Heart,
  Zap,
  Users,
  MapPin,
  ArrowRight,
  Award,
  Clock,
  Shield,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every pixel, every interaction is crafted with meticulous attention to detail.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We genuinely care about helping UAE businesses succeed online.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Speed and efficiency are at the core of everything we build.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work alongside you, not just for you, as true collaborators.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24hrs-3 Days", label: "Delivery Time" },
  { value: "Minutes", label: "Response Time" },
];

const features = [
  {
    icon: MapPin,
    title: "UAE-Focused Expertise",
    description:
      "Deep understanding of the UAE market, culture, and business landscape ensures your website resonates with local audiences.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description:
      "We stand behind our work with a 100% satisfaction guarantee. If you're not happy, we'll make it right.",
  },
  {
    icon: Clock,
    title: "Lightning Fast Delivery",
    description:
      "Most projects are delivered within 24 hours to 3 days. We respond to messages within minutes on WhatsApp and Instagram.",
  },
  {
    icon: Shield,
    title: "Ongoing Support",
    description:
      "Your relationship with us doesn't end at launch. We offer maintenance packages to keep your site performing.",
  },
];

export default function About() {
  const headerRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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

      const values = valuesRef.current;
      if (values) {
        gsap.fromTo(
          values.querySelectorAll(".value-card"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: values,
              start: "top 80%",
            },
          }
        );
      }

      const features = featuresRef.current;
      if (features) {
        gsap.fromTo(
          features.querySelectorAll(".feature-card"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: features,
              start: "top 80%",
            },
          }
        );
      }

      const stats = statsRef.current;
      if (stats) {
        gsap.fromTo(
          stats.querySelectorAll(".stat-item"),
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: stats,
              start: "top 85%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <section ref={headerRef} className="pt-32 pb-16 px-6 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="about-page-heading">
        <div className="max-w-4xl mx-auto text-center">
          <span className="header-animate inline-block text-refyno-green text-sm font-semibold uppercase tracking-wider mb-4">
            About Refyno
          </span>
          <h1 id="about-page-heading" className="header-animate text-4xl md:text-6xl font-bold text-refyno-dark mb-6">
            We Build Websites
            <br />
            <span className="text-refyno-green">UAE Businesses Trust</span>
          </h1>
          <p className="header-animate text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Based in Dubai, we're a boutique web design studio dedicated to helping
            UAE businesses shine online with stunning, high-performance websites.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6" aria-labelledby="story-heading">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-refyno-green text-sm font-semibold uppercase tracking-wider">
                Our Story
              </span>
              <h2 id="story-heading" className="text-3xl md:text-4xl font-bold text-refyno-dark mt-4 mb-6">
                Born From a Simple Belief
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Refyno was founded on a simple observation: too many UAE businesses
                  were held back by outdated, slow, and poorly designed websites. In
                  a digital-first world, your website is often the first impression
                  you make — and it should be a great one.
                </p>
                <p>
                  We set out to change that. Our mission is to help every UAE
                  business, from startups to established brands, have a website
                  they're proud of — one that not only looks stunning but performs
                  exceptionally.
                </p>
                <p>
                  Today, we've helped 50+ businesses transform their online presence,
                  and we're just getting started. Our commitment to quality,
                  speed, and customer satisfaction drives everything we do.
                </p>
              </div>
            </div>
            <div className="relative">
              <blockquote className="bg-refyno-dark rounded-3xl p-8 md:p-12">
                <p className="text-refyno-green text-2xl md:text-3xl font-bold mb-4 leading-relaxed">
                  "Design is not just what it looks like. Design is how it works."
                </p>
                <footer className="text-white/60 text-lg">— Steve Jobs</footer>
              </blockquote>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-refyno-green/20 rounded-full blur-2xl" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section ref={valuesRef} className="py-16 md:py-24 px-6 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="values-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-refyno-green text-sm font-semibold uppercase tracking-wider">
              Our Values
            </span>
            <h2 id="values-heading" className="text-3xl md:text-4xl font-bold text-refyno-dark mt-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article
                  key={value.title}
                  className="value-card bg-white rounded-2xl p-6 border border-border/50 text-center"
                  data-testid={`card-value-${value.title.toLowerCase()}`}
                >
                  <div className="w-14 h-14 rounded-xl bg-refyno-green/10 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                    <Icon className="w-6 h-6 text-refyno-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-refyno-dark mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section ref={statsRef} className="py-16 md:py-24 px-6 bg-refyno-dark" aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">Our Statistics</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="stat-item text-center"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="text-3xl md:text-5xl font-bold text-refyno-green mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={featuresRef} className="py-16 md:py-24 px-6" aria-labelledby="features-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-refyno-green text-sm font-semibold uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-refyno-dark mt-4">
              The Refyno Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="feature-card flex gap-4 p-6 bg-gray-50 rounded-2xl"
                  data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-refyno-green/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Icon className="w-6 h-6 text-refyno-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-refyno-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="about-cta-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="about-cta-heading" className="text-3xl md:text-4xl font-bold text-refyno-dark mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Message us on WhatsApp and we'll respond within minutes to discuss your project.
          </p>
          <a
            href="https://wa.me/971567219287"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-base px-8 gap-2"
              data-testid="button-work-with-us"
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
