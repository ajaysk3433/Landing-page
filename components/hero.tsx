export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-block w-fit">
              <span className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
                Trusted by 10,000+ teams
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-balance text-foreground">Simplify your workflow</h1>

            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              Collaborate seamlessly with your team, track progress in real-time, and deliver projects faster than ever
              before.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-semibold text-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-colors font-semibold text-lg">
                Watch Demo
              </button>
            </div>

            <p className="text-sm text-muted-foreground pt-4">
              ✓ No credit card required • ✓ 14-day free trial • ✓ Cancel anytime
            </p>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-border">
                <div className="space-y-4">
                  <div className="h-8 bg-gradient-to-r from-primary to-accent rounded-lg w-3/4"></div>
                  <div className="h-4 bg-muted rounded-lg w-full"></div>
                  <div className="h-4 bg-muted rounded-lg w-5/6"></div>
                  <div className="pt-4 space-y-3">
                    <div className="h-12 bg-primary/20 rounded-lg"></div>
                    <div className="h-12 bg-secondary/20 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
