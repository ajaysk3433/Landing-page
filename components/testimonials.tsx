import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager at TechStart",
    image: "/professional-woman-headshot.png",
    content:
      "TaskFlow has transformed how our team collaborates. We've reduced project completion time by 40%.",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "CEO at Creative Studio",
    image: "/professional-man-headshot.png",
    content:
      "The best project management tool we've used. Intuitive, powerful, and our entire team loves it.",
  },
  {
    id: 3,
    name: "Emily Thompson",
    role: "Engineering Lead at DevCorp",
    image: "/professional-woman-headshot.png",
    content:
      "Finally, a tool that scales with our team. Support is incredible and features keep improving.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Loved by teams worldwide
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            See what our customers have to say about TaskFlow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-card-foreground mb-6 leading-relaxed">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                  width={40}
                  height={40}
                />
                <div>
                  <p className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
