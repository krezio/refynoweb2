import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const serviceOptions = [
  "Website Repairs & Fixes",
  "Modern Redesign",
  "Full Website Build",
  "Mobile Optimization",
  "SEO Performance",
  "Other",
] as const;

const budgetOptions = [
  "Under AED 2,000",
  "AED 2,000 - 5,000",
  "AED 5,000 - 10,000",
  "AED 10,000 - 20,000",
  "AED 20,000+",
] as const;

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@refyno.com",
    description: "We respond within 24 hours",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 XX XXX XXXX",
    description: "Mon-Fri, 9am-6pm GST",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dubai, UAE",
    description: "Serving businesses across the Emirates",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "< 24 Hours",
    description: "For all inquiries",
  },
];

export default function Contact() {
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at hello@refyno.com",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
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
            Ready to transform your website? Share your project details and we'll
            get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-refyno-dark mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={info.label}
                      className="flex items-start gap-4"
                      data-testid={`contact-info-${info.label.toLowerCase()}`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-refyno-green/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <Icon className="w-5 h-5 text-refyno-green" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-lg font-semibold text-refyno-dark">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 p-6 bg-refyno-dark rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-5 h-5 text-refyno-green" aria-hidden="true" />
                  <span className="text-white font-medium">Free Consultation</span>
                </div>
                <p className="text-white/70 text-sm">
                  Not sure what you need? Book a free 30-minute consultation call
                  and we'll help you figure out the best solution for your business.
                </p>
              </div>
            </div>

            <div ref={formRef} className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-border/50 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-refyno-dark mb-2">
                  Tell Us About Your Project
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll be in touch shortly.
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Smith"
                                {...field}
                                data-testid="input-name"
                                aria-required="true"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@company.com"
                                {...field}
                                data-testid="input-email"
                                aria-required="true"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your Company"
                              {...field}
                              data-testid="input-company"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Interested In</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-service">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {serviceOptions.map((service) => (
                                  <SelectItem key={service} value={service}>
                                    {service}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Budget Range</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-budget">
                                  <SelectValue placeholder="Select budget" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {budgetOptions.map((budget) => (
                                  <SelectItem key={budget} value={budget}>
                                    {budget}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Details *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project, goals, and any specific requirements..."
                              className="min-h-[150px] resize-none"
                              {...field}
                              data-testid="input-message"
                              aria-required="true"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-refyno-dark text-white border-refyno-dark"
                      disabled={mutation.isPending}
                      data-testid="button-submit-contact"
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2" aria-hidden="true" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
