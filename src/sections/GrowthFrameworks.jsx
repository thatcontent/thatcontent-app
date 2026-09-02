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
      <div className="max-w-7xl mx-auto">
        
        {/* Two Sides Funnel */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Two Sides of Business Growth.</h2>
            <p className="text-lg text-[var(--color-text-secondary)]">Helping businesses grow from the outside in and the inside out.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
            {/* Content Column */}
            <div className="glass-panel p-8 text-center flex flex-col items-center gap-4">
              <h3 className="text-xl font-bold text-white font-sora mb-4 border-b border-white/10 pb-4 w-full">CONTENT</h3>
              {['Attention', 'Trust', 'Engagement', 'Customers'].map((item, i, arr) => (
                <div key={item} className="flex flex-col items-center">
                  <span className="text-[var(--color-text-secondary)] font-medium">{item}</span>
                  {i !== arr.length - 1 && <ArrowDown size={16} className="text-white/20 my-2" />}
                </div>
              ))}
            </div>

            {/* Center Brand */}
           <div className="hidden md:flex flex-col items-center justify-center relative">
  {/* Keeps a subtle glowing shadow behind your image */}
  <div className="absolute inset-0 bg-[#F97316]/20 blur-[30px] rounded-full pointer-events-none"></div>
  <img 
    src="/logo.png" 
    alt="ThatContent Logo" 
    className="w-28 h-auto object-contain relative z-12" 
  />
</div>

            {/* Tech Column */}
            <div className="glass-panel p-8 text-center flex flex-col items-center gap-4">
              <h3 className="text-xl font-bold text-white font-sora mb-4 border-b border-white/10 pb-4 w-full">TECHNOLOGY</h3>
              {['Data', 'Insights', 'Efficiency', 'Growth'].map((item, i, arr) => (
                <div key={item} className="flex flex-col items-center">
                  <span className="text-[var(--color-text-secondary)] font-medium">{item}</span>
                  {i !== arr.length - 1 && <ArrowDown size={16} className="text-white/20 my-2" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Framework Timelines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Organic Framework */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-10 border-l-4 border-[var(--color-accent-violet)] pl-4">The ThatContent Organic Growth Framework™</h3>
            <div className="space-y-8">
              {organicSteps.map((step) => (
                <div key={step.step} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-white/20 font-sora">{step.step}</span>
                    <div className="w-px h-full bg-white/10 mt-2"></div>
                  </div>
                  <div className="pb-8">
                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-[var(--color-text-secondary)]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Framework */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-10 border-l-4 border-[var(--color-accent-blue)] pl-4">The ThatContent Digital Solutions Framework™</h3>
            <div className="space-y-8">
              {techSteps.map((step) => (
                <div key={step.step} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-white/20 font-sora">{step.step}</span>
                    <div className="w-px h-full bg-white/10 mt-2"></div>
                  </div>
                  <div className="pb-8">
                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-[var(--color-text-secondary)]">{step.desc}</p>
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