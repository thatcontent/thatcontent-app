import { PenSquare, Palette, Database, Settings } from 'lucide-react';

const problems = [
  {
    id: '01',
    title: "NOTHING TO POST",
    description: "You know social media matters, but creating quality content every week keeps getting pushed down the priority list.",
    icon: <PenSquare size={24} className="text-accent-violet" />
  },
  {
    id: '02',
    title: "YOUR BRAND DOESN'T REFLECT YOUR BUSINESS",
    description: "Your business may be excellent, but your online presence doesn't communicate that quality.",
    icon: <Palette size={24} className="text-accent-blue" />
  },
  {
    id: '03',
    title: "YOUR DATA IS EVERYWHERE",
    description: "Spreadsheets, reports and disconnected systems make it difficult to see what's really happening.",
    icon: <Database size={24} className="text-accent-violet" />
  },
  {
    id: '04',
    title: "YOUR TECHNOLOGY DOESN'T FIT",
    description: "Off-the-shelf tools don't always work the way your business actually operates.",
    icon: <Settings size={24} className="text-accent-blue" />
  }
];

export default function Problem() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-sora text-white mb-6">
            Your Business Is Growing.<br />
            <span className="text-text-secondary">Your Digital Presence Should Keep Up.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => (
            <div 
              key={problem.id} 
              className="glass-panel p-8 flex flex-col items-start transition-transform duration-300 hover:-translate-y-2 group"
            >
              <div className="w-full flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  {problem.icon}
                </div>
                <span className="text-2xl font-bold text-white/10 font-sora">{problem.id}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-4 tracking-wide">{problem.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}