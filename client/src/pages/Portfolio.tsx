import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PortfolioCard } from "@/components/PortfolioCard";

const categories = ["All", "E-commerce", "Restaurant", "Beauty", "Fitness", "Corporate"];

const projects = [
  {
    id: 1,
    title: "Bloom & Co",
    category: "E-commerce",
    color: "dark",
    description: "Dark, elegant e-commerce design with rich visuals and seamless checkout experience.",
    tags: ["E-commerce", "Redesign", "Mobile"],
  },
  {
    id: 2,
    title: "Noir Kitchen",
    category: "Restaurant",
    color: "elegant",
    description: "Sophisticated black and serif typography creating an upscale dining atmosphere.",
    tags: ["Restaurant", "Full Build", "SEO"],
  },
  {
    id: 3,
    title: "Glow Studio",
    category: "Beauty",
    color: "minimal",
    description: "Clean white minimalism that radiates luxury and tranquility for a premium spa.",
    tags: ["Beauty", "Redesign", "Booking"],
  },
  {
    id: 4,
    title: "Iron Forge Gym",
    category: "Fitness",
    color: "bold",
    description: "Bold, dark design with high-energy visuals that motivate action and membership.",
    tags: ["Fitness", "Full Build", "Mobile"],
  },
  {
    id: 5,
    title: "Desert Luxury Realty",
    category: "Corporate",
    color: "elegant",
    description: "Premium real estate website with property listings and virtual tour integration.",
    tags: ["Corporate", "Full Build", "API"],
  },
  {
    id: 6,
    title: "Artisan Bakery",
    category: "Restaurant",
    color: "minimal",
    description: "Warm, inviting design showcasing handcrafted pastries with online ordering.",
    tags: ["Restaurant", "E-commerce", "Mobile"],
  },
  {
    id: 7,
    title: "Zen Wellness",
    category: "Beauty",
    color: "dark",
    description: "Calming aesthetic for a holistic wellness center with class booking system.",
    tags: ["Beauty", "Booking", "Redesign"],
  },
  {
    id: 8,
    title: "Peak Athletics",
    category: "Fitness",
    color: "bold",
    description: "Dynamic fitness brand with membership management and trainer profiles.",
    tags: ["Fitness", "Full Build", "Mobile"],
  },
];

export default function Portfolio() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

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
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const filtered = activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
    
    setFilteredProjects(filtered);

    const grid = gridRef.current;
    if (grid) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          grid.querySelectorAll(".portfolio-item"),
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power2.out" }
        );
      });
      return () => ctx.revert();
    }
  }, [activeCategory]);

  return (
    <div className="overflow-x-hidden">
      <section ref={headerRef} className="pt-32 pb-16 px-6 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="portfolio-page-heading">
        <div className="max-w-4xl mx-auto text-center">
          <span className="header-animate inline-block text-refyno-green text-sm font-semibold uppercase tracking-wider mb-4">
            Our Portfolio
          </span>
          <h1 id="portfolio-page-heading" className="header-animate text-4xl md:text-6xl font-bold text-refyno-dark mb-6">
            Websites That
            <br />
            <span className="text-refyno-green">Impress & Convert</span>
          </h1>
          <p className="header-animate text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of premium websites crafted for UAE businesses
            across diverse industries.
          </p>
        </div>
      </section>

      <section className="py-8 px-6 border-b border-border/50 sticky top-16 bg-white/80 backdrop-blur-xl z-30" aria-label="Project filters">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter projects by category">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "bg-refyno-dark text-white border-refyno-dark"
                    : ""
                }
                data-testid={`button-filter-${category.toLowerCase()}`}
                role="tab"
                aria-selected={activeCategory === category}
                aria-controls="portfolio-grid"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section ref={gridRef} className="py-16 md:py-24 px-6" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="sr-only">Projects</h2>
        <div className="max-w-6xl mx-auto">
          <div id="portfolio-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="tabpanel">
            {filteredProjects.map((project, index) => (
              <article key={project.id} className="portfolio-item">
                <PortfolioCard
                  title={project.title}
                  category={project.category}
                  color={project.color}
                  description={project.description}
                  index={index}
                />
                <div className="flex flex-wrap gap-2 mt-3" aria-label="Project tags">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 text-muted-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-refyno-dark" aria-labelledby="portfolio-cta-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="portfolio-cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want Your Website Featured Here?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Let's create something amazing together. Start your project today and join our
            portfolio of successful UAE businesses.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-refyno-green text-refyno-dark border-refyno-green-dark text-base px-8"
              data-testid="button-start-project-portfolio"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
