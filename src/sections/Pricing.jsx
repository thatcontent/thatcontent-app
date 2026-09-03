import { Check } from 'lucide-react';

const packages = [
  {
    name: "VISIBILITY",
    price: "499",
    desc: "For businesses that need to become consistent.",
    features: [
      "1x 30-min strategy & onboarding call",
      "8 posts + 4 reels per month",
      "Custom captions & copywriting",
      "Automated scheduling & publishing",
      "Basic audience engagement",
      "Monthly performance report"
    ],
    cta: "Build My Visibility",
    highlight: false
  },
  {
    name: "AUTHORITY",
    price: "999",
    badge: "MOST POPULAR",
    desc: "For businesses ready to become a trusted name in their market.",
    features: [
      "Everything in Visibility",
      "12 posts + 8 reels per month",
      "1x 45-min monthly strategy review",
      "Competitor & content research",
      "Proactive community engagement",
      "Performance optimization tuning"
    ],
    cta: "Build My Authority",
    highlight: true
  },
  {
    name: "GROWTH PARTNER",
    price: "1,799",
    desc: "For businesses that want a dedicated organic content partner.",
    features: [
      "Everything in Authority",
      "5–7 content pieces per week",
      "10-14 day priority onboarding",
      "Dedicated ongoing video series",
      "Deeper analytics & audience insights",
      "Priority email & Slack support"
    ],
    cta: "Become a Growth Partner",
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="packages" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Simple Monthly Content Plans.</h2>
          <p className="text-lg text-[var(--color-text-secondary)]">Choose the level of support your business needs.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, i) => (
            <div 
              key={i} 
              style={{ animationDelay: `${i * 150 + 200}ms` }}
              className={`animate-fade-in-up group glass-panel p-8 relative flex flex-col h-full transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 cursor-default ${
                pkg.highlight 
                  ? 'border-[#F97316]/50 bg-white/10 shadow-[0_0_40px_rgba(249,115,22,0.15)] hover:shadow-[0_0_60px_rgba(249,115,22,0.25)] lg:-translate-y-4 z-10' 
                  : 'opacity-90 hover:opacity-100 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#EA580C] to-[#F97316] text-black text-xs font-bold px-4 py-1.5 rounded-full tracking-wider animate-glow-pulse">
                  {pkg.badge}
                </div>
              )}
              
              <div className="border-b border-white/10 pb-8 mb-8 mt-4 transition-colors duration-500 group-hover:border-white/20">
                <h3 className="text-xl font-bold text-white tracking-widest font-sora mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-[var(--color-text-secondary)]">CAD</span>
                  <span className="text-4xl font-bold text-white font-sora">{pkg.price}</span>
                  <span className="text-[var(--color-text-secondary)]">/month</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] h-10">{pkg.desc}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feat, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-white/80">
                    <Check 
                      size={16} 
                      className={`shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-125 ${
                        pkg.highlight ? 'text-[#F97316]' : 'text-white/40 group-hover:text-white/80'
                      }`} 
                    />
                    <span className="transition-colors duration-300 group-hover:text-white">{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                pkg.highlight 
                  ? 'bg-gradient-to-r from-[#EA580C] to-[#F97316] text-black hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:scale-105' 
                  : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20'
              }`}>
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>

        {/* IT Pricing Note */}
        <div 
          style={{ animationDelay: "800ms" }}
          className="animate-fade-in-up mt-24 glass-panel p-10 text-center max-w-4xl mx-auto bg-gradient-to-b from-white/5 to-transparent transition-all duration-500 hover:border-white/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Every Business Is Different.</h3>
          <p className="text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
            Dashboard and application projects are scoped around your requirements, complexity and business goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary hover:scale-105">Discuss My Digital Project</button>
            <button className="px-6 py-2.5 rounded-full bg-transparent border border-white/10 text-white text-sm font-medium transition-all duration-300 hover:bg-white/5 hover:border-white/30 hover:scale-105">
              Request a Project Estimate
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}