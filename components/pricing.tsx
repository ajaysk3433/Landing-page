import { Check } from "lucide-react"

const plans = [
  {
    id: 1,
    name: "Starter",
    price: 29,
    description: "Perfect for small teams just getting started",
    features: ["Up to 5 team members", "Unlimited projects", "Basic analytics", "Email support", "1GB storage"],
    highlighted: false,
  },
  {
    id: 2,
    name: "Professional",
    price: 79,
    description: "For growing teams and organizations",
    features: [
      "Up to 50 team members",
      "Unlimited projects",
      "Advanced analytics",
      "Priority email & chat support",
      "100GB storage",
      "Custom workflows",
      "API access",
    ],
    highlighted: true,
  },
  {
    id: 3,
    name: "Enterprise",
    price: null,
    description: "For large organizations with custom needs",
    features: [
      "Unlimited team members",
      "Unlimited projects",
      "Enterprise analytics",
      "Dedicated support",
      "Unlimited storage",
      "Custom workflows",
      "Advanced security",
      "SSO & SAML",
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Choose the perfect plan for your team. Always flexible to scale up or down.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl border transition-all ${
                plan.highlighted
                  ? "border-primary bg-primary/5 ring-2 ring-primary/20 md:scale-105"
                  : "border-border bg-background hover:border-primary/50"
              }`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  {plan.price ? (
                    <>
                      <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                      <span className="text-muted-foreground ml-2">/month</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-foreground">Custom pricing</span>
                  )}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all mb-8 ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "bg-muted text-foreground hover:bg-border"
                  }`}
                >
                  {plan.price ? "Start free trial" : "Contact sales"}
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  )
}
