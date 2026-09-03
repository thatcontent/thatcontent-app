import { MapPin, Zap, ArrowRight } from 'lucide-react';

export default function WhyThatContent() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
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
          50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.15); }
        }
        .animate-breathe-glow {
          animation: breatheGlow 6s ease-in-out infinite;
        }
        @keyframes slideRight {
          0%, 100% { transform: translateX(-4px); opacity: 0.6; }
          50% { transform: translateX(4px); opacity: 1; }
        }
        .animate-slide-right {
          animation: slideRight 2.5s ease-in-out infinite;
        }
      `}</style>

      {/* Breathing Ambient Background */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-white/5 rounded-[100%] blur-[120px] -z-10 pointer-events-none animate-breathe-glow" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Local Understanding.<br />
            <span className="text-text-secondary">Premium Execution.</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We combine deep local market understanding and client relationships in Edmonton with an expert creative and technology team to deliver efficient, high-quality results.
          </p>
        </div>

        <div 
          style={{ animationDelay: "200ms" }}
          className="animate-fade-in-up glass-panel p-8 md:p-16 relative transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.05)]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            
            {/* Local Side */}
            <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start z-10 group cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] group-hover:border-white/40">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-sora">Edmonton 🇨🇦</h3>
              <p className="text-text-secondary transition-colors duration-300 group-hover:text-white/80">Local communication & Canadian market strategy.</p>
            </div>

            {/* Connection Flow */}
            <div className="hidden md:flex flex-1 items-center justify-center relative">
              <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent border-dashed"></div>
              <div className="w-12 h-12 rounded-full bg-[#0D0D12] border border-white/10 flex items-center justify-center z-10 transition-transform duration-500 hover:scale-110 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <ArrowRight className="text-text-secondary animate-slide-right" size={20} />
              </div>
            </div>

            {/* Execution Side */}
            <div className="flex-1 text-center md:text-right flex flex-col items-center md:items-end z-10 group cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-[#EA580C]/10 border border-[#EA580C]/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(234,88,12,0.15)] transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(234,88,12,0.3)] group-hover:border-[#F97316]/50">
                <Zap className="text-[#F97316]" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-sora">Expert Team ⚡</h3>
              <p className="text-text-secondary transition-colors duration-300 group-hover:text-white/80">Efficient execution & premium technical expertise.</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}