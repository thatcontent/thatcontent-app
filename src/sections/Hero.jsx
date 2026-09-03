import { Play, LayoutDashboard, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EA580C]/15 rounded-full blur-[120px] pointer-events-none animate-breathe-glow" />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl lg:text-[64px] font-bold text-white mb-8 tracking-tight leading-[1.1]">
          Content That Builds Your<br className="hidden sm:block" /> Brand.
          <br />
          Technology That Moves<br className="hidden sm:block" /> Your Business.
        </h1>
        
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto">
          ThatContent helps growing businesses build visibility through strategic organic content and improve the way they work through practical digital solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#audit" 
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Get My Free Content Audit 
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a 
            href="#it-solutions" 
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center"
          >
            Discuss a Digital Project
          </a>
        </div>
      </div>

      {/* Left Floating Badge - Reels & Posts */}
      <div 
        className="hidden lg:flex absolute left-10 xl:left-24 top-1/2 -translate-y-1/2 glass-panel p-4 items-center gap-4 animate-float-dash border border-white/10 bg-[#07070A]/80 backdrop-blur-md shadow-xl" 
        style={{ animationDelay: '0ms' }}
      >
        <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
          <Play size={20} className="fill-current ml-1" />
        </div>
        <div className="text-left pr-2">
          <p className="text-sm font-bold text-white leading-tight">Reels & Posts</p>
          <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">Attention & Trust</p>
        </div>
      </div>

      {/* Right Floating Badge - Dashboards */}
      <div 
        className="hidden lg:flex absolute right-10 xl:right-24 top-1/2 -translate-y-1/2 glass-panel p-4 items-center gap-4 animate-float-dash border border-white/10 bg-[#07070A]/80 backdrop-blur-md shadow-xl" 
        style={{ animationDelay: '1500ms' }}
      >
        <div className="text-right pl-2 order-1">
          <p className="text-sm font-bold text-white leading-tight">Dashboards</p>
          <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">Data & Insights</p>
        </div>
        <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)] order-2">
          <LayoutDashboard size={20} />
        </div>
      </div>

    </section>
  );
}