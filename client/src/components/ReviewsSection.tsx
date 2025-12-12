import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Ahmed Al-Rashid",
    company: "Luxury Auto Dubai",
    rating: 5,
    text: "Refyno completely transformed our website in just 2 days. The new design is stunning and our leads have increased by 40%. Highly recommend!",
    avatar: "A",
  },
  {
    name: "Sarah Mitchell",
    company: "Bloom Events",
    rating: 5,
    text: "Fast response, beautiful work, and they actually listen to what you want. Our event booking website looks absolutely premium now.",
    avatar: "S",
  },
  {
    name: "Mohammed Hassan",
    company: "Golden Real Estate",
    rating: 4,
    text: "Professional team that delivers on time. They redesigned our property listings site and made it so much easier for clients to browse.",
    avatar: "M",
  },
  {
    name: "Emily Chen",
    company: "Zen Spa & Wellness",
    rating: 5,
    text: "From the first message on WhatsApp to the final delivery, everything was smooth. Our new website perfectly captures our brand's essence.",
    avatar: "E",
  },
  {
    name: "Khalid Bin Omar",
    company: "Desert Adventures",
    rating: 5,
    text: "They built our tour booking website from scratch in 3 days! The mobile experience is flawless and bookings have doubled.",
    avatar: "K",
  },
  {
    name: "Fatima Al-Zahra",
    company: "Artisan Bakery",
    rating: 4,
    text: "Our old website was embarrassing. Now we have something we're proud to share. Great communication throughout the project.",
    avatar: "F",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i <= rating
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (section) {
        gsap.fromTo(
          section.querySelectorAll(".review-card"),
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 px-6 bg-gradient-to-b from-gray-50/50 to-white"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-refyno-green text-sm font-semibold uppercase tracking-wider">
            Client Love
          </span>
          <h2
            id="reviews-heading"
            className="text-3xl md:text-5xl font-bold text-refyno-dark mt-4 mb-6"
          >
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real feedback from UAE businesses we've helped transform their online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="review-card bg-white rounded-2xl p-6 border border-border/50 hover:border-refyno-green/30 transition-all hover:shadow-lg hover:shadow-refyno-green/5 group"
            >
              <Quote className="w-8 h-8 text-refyno-green/20 mb-4 group-hover:text-refyno-green/40 transition-colors" />
              
              <p className="text-refyno-dark/80 mb-6 leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-refyno-green to-refyno-green-dark flex items-center justify-center text-white font-semibold">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-refyno-dark text-sm">
                      {review.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {review.company}
                    </p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
