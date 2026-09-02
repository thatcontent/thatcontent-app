import { MapPin, ArrowRight, Play, Database, Layout, Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden px-6">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent-violet/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-blue/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      {/* Amber glow to match the ThatContent logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
          <MapPin size={14} className="text-text-secondary" />
          <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
            Edmonton, Alberta • Serving Growing Businesses
          </span>
        </div>

        {/* Headlines */}
        <h1 className="text-5xl md:text-7xl font-bold font-sora text-white leading-tight mb-6 tracking-tight max-w-4xl">
          Content That Builds Your Brand.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50">
            Technology That Moves Your Business.
          </span>
        </h1>
        
        <p className="text-lg text-text-secondary mb-10 max-w-2xl font-inter leading-relaxed">
          ThatContent helps growing businesses build visibility through strategic organic content and improve the way they work through practical digital solutions.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
          <button className="px-8 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-medium transition-all duration-300 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] flex items-center gap-2 backdrop-blur-md">
            Get My Free Content Audit
            <ArrowRight size={18} />
          </button>
          <button className="px-8 py-3.5 rounded-full bg-transparent border border-white/10 text-white font-medium transition-all duration-300 hover:bg-white/5 backdrop-blur-md">
            Discuss a Digital Project
          </button>
        </div>
      </div>

      {/* Floating Glass Ecosystem (Desktop Only) */}
      <div className="hidden lg:block absolute inset-0 -z-5 pointer-events-none">
        {/* Left Side: Content */}
        <div className="absolute top-[30%] left-[5%] p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3 animate-[float_6s_ease-in-out_infinite]">
          <div className="w-10 h-10 rounded-full bg-accent-violet/20 flex items-center justify-center">
            <Play size={18} className="text-accent-violet" />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-white">Reels & Posts</p>
            <p className="text-xs text-text-secondary">Attention & Trust</p>
          </div>
        </div>

        {/* Right Side: Technology */}
        <div className="absolute top-[45%] right-[5%] p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3 animate-[float_8s_ease-in-out_infinite_reverse]">
          <div className="text-right">
            <p className="text-sm font-semibold text-white">Dashboards</p>
            <p className="text-xs text-text-secondary">Data & Insights</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center">
            <Database size={18} className="text-accent-blue" />
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="w-full max-w-6xl mx-auto mt-auto pt-10 border-t border-white/10">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70">
          {['Organic Content', 'Social Media Management', 'Reels', 'Business Dashboards', 'Web Applications', 'Digital Solutions'].map((item, i) => (
            <span key={i} className="text-sm font-medium text-text-secondary px-4 py-2 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
              {item}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}