import { Check } from 'lucide-react';

export default function FreeAudit() {
  return (
    <section className="relative py-24 px-6">
      {/* Brand Conversion Glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#EA580C]/15 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto glass-panel p-8 md:p-12 lg:p-16 border-[#EA580C]/20 shadow-[0_0_50px_rgba(234,88,12,0.05)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Value Proposition */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Not Sure What's Holding Your Instagram Back?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Get a free personalized Instagram Growth Audit and discover exactly where your content can improve.
            </p>
            
            <ul className="space-y-4 mb-8">
              {['Profile review', 'Content assessment', 'Competitor observations', 'Content opportunities', 'Personalized recommendations'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 rounded-full bg-[#EA580C]/20 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-[#F97316]" />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: The Form */}
          <div className="bg-[#07070A]/50 rounded-2xl p-6 border border-white/5">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#EA580C]/50 transition-colors" />
                <input type="text" placeholder="Business Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#EA580C]/50 transition-colors" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#EA580C]/50 transition-colors" />
                <input type="tel" placeholder="Phone" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#EA580C]/50 transition-colors" />
              </div>
              <input type="text" placeholder="Instagram Handle (@)" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#EA580C]/50 transition-colors" />
              <textarea placeholder="Biggest Social Media Challenge" rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#EA580C]/50 transition-colors resize-none"></textarea>
              
              <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#F97316] text-black font-bold text-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-300 mt-2">
                Get My Free Audit
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}