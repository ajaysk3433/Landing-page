import { CheckCircle2, Zap, Users, BarChart3 } from "lucide-react"

const features = [
  {
    id: 1,
    icon: CheckCircle2,
    title: "Smart Task Management",
    description: "Organize tasks by priority, assignee, or status. Keep everything on track with automated workflows.",
  },
  {
    id: 2,
    icon: Users,
    title: "Real-time Collaboration",
    description: "Work together in real-time with your team. Comments, mentions, and file sharing all in one place.",
  },
  {
    id: 3,
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track project metrics, team productivity, and identify bottlenecks with detailed insights.",
  },
  {
    id: 4,
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed. Load your projects instantly and never worry about performance.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Everything you need</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Powerful features designed to help your team collaborate effectively and deliver results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.id}
                className="p-8 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
