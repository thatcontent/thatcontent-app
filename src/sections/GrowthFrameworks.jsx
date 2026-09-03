import { ArrowDown, CheckCircle2 } from 'lucide-react';

const organicSteps = [
  { step: "01", title: "DISCOVER", desc: "Understand your business, audience, competitors and goals." },
  { step: "02", title: "STRATEGIZE", desc: "Build a customized content roadmap." },
  { step: "03", title: "CREATE", desc: "Produce Reels, posts, stories and captions." },
  { step: "04", title: "PUBLISH", desc: "Consistently distribute content and engage with your audience." },
  { step: "05", title: "OPTIMIZE", desc: "Review performance and improve every month." }
];

const techSteps = [
  { step: "01", title: "UNDERSTAND", desc: "Understand the business problem." },
  { step: "02", title: "PLAN", desc: "Define requirements and solution architecture." },
  { step: "03", title: "BUILD", desc: "Develop the dashboard or web application." },
  { step: "04", title: "TEST", desc: "Validate functionality, usability and reliability." },
  { step: "05", title: "SUPPORT", desc: "Maintain, improve and scale the solution." }
];

export default function GrowthFrameworks() {
  return (
    <section id="how-it-works" className="relative py-24 px-6 overflow-hidden">
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
          50% { opacity: 0.8; transform: scale(1.15); }
        }
        .animate-breathe-glow {
          animation: breatheGlow 4s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        
        {/* Two Sides Funnel */}
        <div className="mb-32">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Two Sides of Business Growth.</h2>
            <p className="text-lg text-[var(--color-text-secondary)]">Helping businesses grow from the outside in and the inside out.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
            {/* Content Column */}
            <div 
              style={{ animationDelay: "200ms" }}
              className="animate-fade-in-up glass-panel p-8 text-center flex flex-col items-center gap-4 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(124,58,237,0.15)]"
            >
              <h3 className="text-xl font-bold text-white font-sora mb-4 border-b border-white/10 pb-4 w-full">CONTENT</h3>
              {['Attention', 'Trust', 'Engagement', 'Customers'].map((item, i, arr) => (
                <div key={item} className="flex flex-col items-center group">
                  <span className="text-[var(--color-text-secondary)] font-medium transition-colors duration-300 group-hover:text-white">{item}</span>
                  {i !== arr.length - 1 && <ArrowDown size={16} className="text-white/20 my-2 transition-transform duration-300 group-hover:translate-y-1" />}
                </div>
              ))}
            </div>

            {/* Center Brand */}
            <div 
              style={{ animationDelay: "400ms" }}
              className="animate-fade-in-up hidden md:flex flex-col items-center justify-center relative transition-transform duration-700 hover:scale-110"
            >
              {/* Breathing shadow matching your logo[cite: 1] */}
              <div className="absolute inset-0 bg-[#F97316]/30 blur-[35px] rounded-full pointer-events-none animate-breathe-glow"></div>
              <img 
                src="/logo.png" 
                alt="ThatContent Logo" 
                className="w-28 h-auto object-contain relative z-12 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]" 
              />
            </div>

            {/* Tech Column */}
            <div 
              style={{ animationDelay: "600ms" }}
              className="animate-fade-in-up glass-panel p-8 text-center flex flex-col items-center gap-4 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)]"
            >
              <h3 className="text-xl font-bold text-white font-sora mb-4 border-b border-white/10 pb-4 w-full">TECHNOLOGY</h3>
              {['Data', 'Insights', 'Efficiency', 'Growth'].map((item, i, arr) => (
                <div key={item} className="flex flex-col items-center group">
                  <span className="text-[var(--color-text-secondary)] font-medium transition-colors duration-300 group-hover:text-white">{item}</span>
                  {i !== arr.length - 1 && <ArrowDown size={16} className="text-white/20 my-2 transition-transform duration-300 group-hover:translate-y-1" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Framework Timelines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Organic Framework */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-10 border-l-4 border-[var(--color-accent-violet)] pl-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              The ThatContent Organic Growth Framework™
            </h3>
            <div className="space-y-8">
              {organicSteps.map((step, index) => (
                <div 
                  key={step.step} 
                  style={{ animationDelay: `${(index * 150) + 300}ms` }}
                  className="animate-fade-in-up flex gap-6 group cursor-default"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-white/20 font-sora transition-colors duration-300 group-hover:text-[var(--color-accent-violet)]">{step.step}</span>
                    <div className="w-px h-full bg-white/10 mt-2 transition-colors duration-300 group-hover:bg-[var(--color-accent-violet)]/50"></div>
                  </div>
                  <div className="pb-8 transition-transform duration-300 group-hover:translate-x-2">
                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-[var(--color-text-secondary)] transition-colors duration-300 group-hover:text-white/80">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Framework */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-10 border-l-4 border-[var(--color-accent-blue)] pl-4 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              The ThatContent Digital Solutions Framework™
            </h3>
            <div className="space-y-8">
              {techSteps.map((step, index) => (
                <div 
                  key={step.step} 
                  style={{ animationDelay: `${(index * 150) + 500}ms` }}
                  className="animate-fade-in-up flex gap-6 group cursor-default"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-white/20 font-sora transition-colors duration-300 group-hover:text-[var(--color-accent-blue)]">{step.step}</span>
                    <div className="w-px h-full bg-white/10 mt-2 transition-colors duration-300 group-hover:bg-[var(--color-accent-blue)]/50"></div>
                  </div>
                  <div className="pb-8 transition-transform duration-300 group-hover:translate-x-2">
                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-[var(--color-text-secondary)] transition-colors duration-300 group-hover:text-white/80">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}