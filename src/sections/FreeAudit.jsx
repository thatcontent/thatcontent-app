import { Check } from 'lucide-react';
import { useState } from 'react';

export default function FreeAudit() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending request...');
    
    const formData = new FormData(e.target);
    formData.append("access_key", "9085f4f5-3f5d-4536-af65-64389071619a"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setStatus('Success! We will review your details and reach out shortly.');
        e.target.reset();
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Error submitting form. Please check your connection.');
    }
  };

  return (
    <section id="audit" className="relative py-24 px-6 overflow-hidden">
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
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.15); }
        }
        .animate-breathe-glow {
          animation: breatheGlow 5s ease-in-out infinite;
        }
      `}</style>

      {/* Brand Conversion Glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#EA580C]/15 rounded-full blur-[120px] -z-10 pointer-events-none animate-breathe-glow" />

      <div className="max-w-6xl mx-auto glass-panel p-8 md:p-12 lg:p-16 border-[#EA580C]/20 shadow-[0_0_50px_rgba(234,88,12,0.05)] animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Value Proposition */}
          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Not Sure What's Holding Your Instagram Back?
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8">
              Get a free personalized Instagram Growth Audit and discover exactly where your content can improve.
            </p>
            
            <ul className="space-y-4 mb-8">
              {['Profile review', 'Content assessment', 'Competitor observations', 'Content opportunities', 'Personalized recommendations'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white group cursor-default">
                  <div className="w-6 h-6 rounded-full bg-[#EA580C]/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-125 group-hover:bg-[#EA580C]/30 group-hover:shadow-[0_0_10px_rgba(234,88,12,0.3)]">
                    <Check size={14} className="text-[#F97316]" />
                  </div>
                  <span className="font-medium transition-colors duration-300 group-hover:text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: The Form */}
          <div 
            style={{ animationDelay: "400ms" }}
            className="animate-fade-in-up bg-[#07070A]/50 rounded-2xl p-6 border border-white/5 transition-all duration-500 hover:border-[#EA580C]/30 hover:shadow-[0_20px_40px_-15px_rgba(234,88,12,0.1)]"
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#EA580C]/50 hover:bg-white/10 transition-colors" 
                />
                <input 
                  type="text" 
                  name="business_name"
                  placeholder="Business Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#EA580C]/50 hover:bg-white/10 transition-colors" 
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#EA580C]/50 hover:bg-white/10 transition-colors" 
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#EA580C]/50 hover:bg-white/10 transition-colors" 
                />
              </div>
              <input 
                type="text" 
                name="instagram_handle"
                placeholder="Instagram Handle (@)" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#EA580C]/50 hover:bg-white/10 transition-colors" 
              />
              <textarea 
                name="challenge"
                required
                placeholder="Biggest Social Media Challenge" 
                rows={3} 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#EA580C]/50 hover:bg-white/10 transition-colors resize-none"
              ></textarea>
              
              <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#F97316] text-black font-bold text-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:scale-[1.02] transition-all duration-300 mt-2">
                Get My Free Audit
              </button>

              {status && (
                <p className="text-center text-sm mt-4 font-medium text-[#F97316] animate-fade-in-up">
                  {status}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}