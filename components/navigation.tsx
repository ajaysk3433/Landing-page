export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                T
              </span>
            </div>
            <span className="font-bold text-xl text-foreground">TaskFlow</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-foreground hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </a>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 p-4">
            <button className="px-4 py-2 text-foreground hover:text-primary transition-colors text-xs sm:text-base whitespace-nowrap">
              Log in
            </button>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-medium text-xs sm:text-base whitespace-nowrap">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
