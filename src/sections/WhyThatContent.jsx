import { MapPin, Zap, ArrowRight } from 'lucide-react';

export default function WhyThatContent() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 rounded-[100%] blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Local Understanding.<br />
            <span className="text-text-secondary">Premium Execution.</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We combine deep local market understanding and client relationships in Edmonton with an expert creative and technology team to deliver efficient, high-quality results.
          </p>
        </div>

        <div className="glass-panel p-8 md:p-16 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            
            {/* Local Side */}
            <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-sora">Edmonton 🇨🇦</h3>
              <p className="text-text-secondary">Local communication & Canadian market strategy.</p>
            </div>

            {/* Connection Flow */}
            <div className="hidden md:flex flex-1 items-center justify-center relative">
              <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent border-dashed"></div>
              <div className="w-12 h-12 rounded-full bg-[#0D0D12] border border-white/10 flex items-center justify-center z-10">
                <ArrowRight className="text-text-secondary" size={20} />
              </div>
            </div>

            {/* Execution Side */}
            <div className="flex-1 text-center md:text-right flex flex-col items-center md:items-end z-10">
              <div className="w-16 h-16 rounded-2xl bg-[#EA580C]/10 border border-[#EA580C]/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(234,88,12,0.15)]">
                <Zap className="text-[#F97316]" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-sora">Expert Team ⚡</h3>
              <p className="text-text-secondary">Efficient execution & premium technical expertise.</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}