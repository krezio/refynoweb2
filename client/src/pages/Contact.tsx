import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MapPin, Clock, Send, MessageCircle, ArrowRight } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InstagramEmbed } from "@/components/InstagramEmbed";

const serviceOptions = [
  "New Website Build",
  "Website Redesign",
  "Website Repairs & Fixes",
  "Mobile Optimization",
  "SEO Performance",
  "Other",
];

export default function Contact() {
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    service: "",
    message: "",
  });

  const handleWhatsAppSubmit = () => {
    let message = `Hi! I'm interested in your web design services.\n\n`;
    if (formData.name) message += `Name: ${formData.name}\n`;
    if (formData.company) message += `Company: ${formData.company}\n`;
    if (formData.service) message += `Service: ${formData.service}\n`;
    if (formData.message) message += `\nMessage:\n${formData.message}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/971567219287?text=${encodedMessage}`, "_blank");
  };

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

      const formEl = formRef.current;
      if (formEl) {
        gsap.fromTo(
          formEl,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power2.out" }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <section ref={headerRef} className="pt-32 pb-16 px-6 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="contact-page-heading">
        <div className="max-w-4xl mx-auto text-center">
          <span className="header-animate inline-block text-refyno-green text-sm font-semibold uppercase tracking-wider mb-4">
            Get in Touch
          </span>
          <h1 id="contact-page-heading" className="header-animate text-4xl md:text-6xl font-bold text-refyno-dark mb-6">
            Let's Create Something
            <br />
            <span className="text-refyno-green">Amazing Together</span>
          </h1>
          <p className="header-animate text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your website? Message us on WhatsApp or Instagram and we'll respond within minutes.
          </p>
          
          <div className="header-animate flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="https://wa.me/971567219287"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2">
                <FaWhatsapp className="w-5 h-5" />
                Message on WhatsApp
              </Button>
            </a>
            <a
              href="https://instagram.com/refyno"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="gap-2 border-pink-500 text-pink-500 hover:bg-pink-50">
                <FaInstagram className="w-5 h-5" />
                DM on Instagram
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-refyno-dark mb-8">Quick Contact</h2>
              <div className="space-y-6">
                <a
                  href="https://wa.me/971567219287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="text-lg font-semibold text-refyno-dark">+971 56 721 9287</p>
                    <p className="text-sm text-refyno-green">Response within minutes</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/refyno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center flex-shrink-0">
                    <FaInstagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Instagram</p>
                    <p className="text-lg font-semibold text-refyno-dark">@refyno</p>
                    <p className="text-sm text-pink-500">DM us anytime</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-refyno-green/10">
                  <div className="w-12 h-12 rounded-xl bg-refyno-green/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-refyno-green" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Delivery Time</p>
                    <p className="text-lg font-semibold text-refyno-dark">24hrs - 3 Days</p>
                    <p className="text-sm text-muted-foreground">Depending on project scope</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-refyno-dark" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-lg font-semibold text-refyno-dark">Dubai, UAE</p>
                    <p className="text-sm text-muted-foreground">Serving businesses across the Emirates</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-refyno-dark mb-4">Our Latest Work</h3>
                <InstagramEmbed postUrl="https://www.instagram.com/p/DSIrJK2E2hz/" />
              </div>
            </div>

            <div ref={formRef} className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-border/50 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-refyno-dark mb-2">
                  Quick Project Inquiry
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form and we'll send your inquiry directly to WhatsApp for a faster response.
                </p>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-refyno-dark mb-2">
                        Your Name
                      </label>
                      <Input
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-refyno-dark mb-2">
                        Company Name
                      </label>
                      <Input
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-refyno-dark mb-2">
                      What do you need?
                    </label>
                    <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-refyno-dark mb-2">
                      Tell us about your project
                    </label>
                    <Textarea
                      placeholder="Describe what you're looking for..."
                      className="min-h-[150px] resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
                    onClick={handleWhatsAppSubmit}
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Send via WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Or message us directly on{" "}
                    <a
                      href="https://wa.me/971567219287"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-refyno-green hover:underline"
                    >
                      WhatsApp
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://instagram.com/refyno"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:underline"
                    >
                      Instagram
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
