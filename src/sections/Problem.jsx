import { PenSquare, Palette, Database, Settings } from 'lucide-react';

const problems = [
  {
    id: '01',
    title: "NOTHING TO POST",
    description: "You know social media matters, but creating quality content every week keeps getting pushed down the priority list.",
    icon: <PenSquare size={24} className="text-[#F97316]" />
  },
  {
    id: '02',
    title: "YOUR BRAND DOESN'T REFLECT YOUR BUSINESS",
    description: "Your business may be excellent, but your online presence doesn't communicate that quality.",
    icon: <Palette size={24} className="text-[#F97316]" />
  },
  {
    id: '03',
    title: "YOUR DATA IS EVERYWHERE",
    description: "Spreadsheets, reports and disconnected systems make it difficult to see what's really happening.",
    icon: <Database size={24} className="text-[#F97316]" />
  },
  {
    id: '04',
    title: "YOUR TECHNOLOGY DOESN'T FIT",
    description: "Off-the-shelf tools don't always work the way your business actually operates.",
    icon: <Settings size={24} className="text-[#F97316]" />
  }
];

export default function Problem() {
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
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold font-sora text-white mb-6">
            Your Business Is Growing.<br />
            <span className="bg-gradient-to-r from-[#EA580C] to-[#F97316] text-transparent bg-clip-text">Your Digital Presence Should Keep Up.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <div 
              key={problem.id} 
              style={{ animationDelay: `${(i * 150) + 200}ms` }}
              className="animate-fade-in-up glass-panel p-8 flex flex-col items-start transition-all duration-500 hover:-translate-y-2 hover:border-[#F97316]/30 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)] group cursor-default"
            >
              <div className="w-full flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-[#F97316]/10 group-hover:border-[#F97316]/30 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                  {problem.icon}
                </div>
                <span className="text-2xl font-bold text-white/10 font-sora transition-colors duration-500 group-hover:text-[#F97316]/20">{problem.id}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-4 tracking-wide">{problem.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed transition-colors duration-300 group-hover:text-white/80">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}