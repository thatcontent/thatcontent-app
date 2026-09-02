import { X, Check } from 'lucide-react';

const traditional = [
  "Random posting",
  "Content volume",
  "Trend chasing",
  "Vanity metrics",
  "Generic packages",
  "Short-term campaigns"
];

const thatcontent = [
  "Strategy first",
  "Purpose-driven content",
  "Local relevance",
  "Brand building",
  "Practical technology",
  "Long-term partnership"
];

export default function Differentiation() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background depth element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-blue/5 rounded-[100%] blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-sora text-white mb-4">
            Most Agencies Sell Services.<br />
            <span className="text-accent-blue">We Solve Problems.</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          
          {/* Traditional Agency Column */}
          <div className="flex-1 glass-panel p-8 md:p-10 opacity-70">
            <h3 className="text-xl font-bold text-text-secondary mb-8 font-sora uppercase tracking-wider text-center">
              Traditional Agency
            </h3>
            <ul className="space-y-6">
              {traditional.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-text-secondary">
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <X size={14} />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ThatContent Column */}
          <div className="flex-1 glass-panel relative p-8 md:p-10 border-white/20 bg-white/10 shadow-[0_0_40px_rgba(37,99,235,0.1)]">
            {/* Highlight Orb */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-blue/30 rounded-full blur-[40px] pointer-events-none" />
            
            <h3 className="text-xl font-bold text-white mb-8 font-sora uppercase tracking-wider text-center flex flex-col items-center gap-2">
              ThatContent
              <span className="text-xs text-accent-blue tracking-widest">Strategy Before Posting</span>
            </h3>
            <ul className="space-y-6 relative z-10">
              {thatcontent.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white">
                  <div className="w-6 h-6 rounded-full bg-accent-blue/20 border border-accent-blue/50 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(37,99,235,0.2)]">
                    <Check size={14} className="text-accent-blue" />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}