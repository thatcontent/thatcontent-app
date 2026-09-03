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
      {/* Component-level keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        @keyframes breatheGlow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); }
        }
        .animate-breathe-glow {
          animation: breatheGlow 5s ease-in-out infinite;
        }
      `}</style>

      {/* Background depth element */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-[#F97316]/5 rounded-[100%] blur-[120px] -z-10 pointer-events-none animate-breathe-glow" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold font-sora text-white mb-4">
            Most Agencies Sell Services.<br />
            <span className="bg-gradient-to-r from-[#EA580C] to-[#F97316] text-transparent bg-clip-text">We Solve Problems.</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          
          {/* Traditional Agency Column */}
          <div 
            style={{ animationDelay: "200ms" }}
            className="animate-fade-in-up flex-1 glass-panel p-8 md:p-10 opacity-70 transition-all duration-500 hover:opacity-100 hover:border-white/10"
          >
            <h3 className="text-xl font-bold text-[var(--color-text-secondary)] mb-8 font-sora uppercase tracking-wider text-center transition-colors duration-300">
              Traditional Agency
            </h3>
            <ul className="space-y-6">
              {traditional.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-[var(--color-text-secondary)] group cursor-default">
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <X size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="font-medium transition-colors duration-300 group-hover:text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ThatContent Column */}
          <div 
            style={{ animationDelay: "400ms" }}
            className="animate-fade-in-up flex-1 glass-panel relative p-8 md:p-10 border-white/20 bg-white/10 shadow-[0_0_40px_rgba(249,115,22,0.1)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(249,115,22,0.2)] hover:border-[#F97316]/40 z-10"
          >
            {/* Highlight Orb */}
            <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-[#F97316]/30 rounded-full blur-[40px] pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100" />
            
            <h3 className="text-xl font-bold text-white mb-8 font-sora uppercase tracking-wider text-center flex flex-col items-center gap-2">
              ThatContent
              <span className="text-xs text-[#F97316] tracking-widest font-bold">Strategy Before Posting</span>
            </h3>
            <ul className="space-y-6 relative z-10">
              {thatcontent.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white group cursor-default">
                  <div className="w-6 h-6 rounded-full bg-[#F97316]/20 border border-[#F97316]/50 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(249,115,22,0.2)] transition-transform duration-300 group-hover:scale-125 group-hover:bg-[#F97316]/30 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                    <Check size={14} className="text-[#F97316]" />
                  </div>
                  <span className="font-medium transition-transform duration-300 group-hover:translate-x-2">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}