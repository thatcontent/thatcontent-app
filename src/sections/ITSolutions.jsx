import { LayoutDashboard, Code2, Workflow, LifeBuoy, TrendingUp, Users, DollarSign } from 'lucide-react';

const solutions = [
  {
    title: "BUSINESS DASHBOARDS",
    desc: "Turn your business data into simple, actionable insights.",
    tags: ["KPIs", "Sales", "Real-Time Reporting"],
    icon: <LayoutDashboard className="text-[var(--color-accent-blue)]" />
  },
  {
    title: "WEB APPLICATIONS",
    desc: "Build custom applications around the way your business works.",
    tags: ["Customer Portals", "Internal Tools", "Booking"],
    icon: <Code2 className="text-[var(--color-accent-blue)]" />
  },
  {
    title: "DATA & SYSTEM INTEGRATION",
    desc: "Connect your systems and make your data work together.",
    tags: ["APIs", "Databases", "Automated Pipelines"],
    icon: <Workflow className="text-[var(--color-accent-blue)]" />
  },
  {
    title: "APPLICATION SUPPORT",
    desc: "Keep your digital systems reliable and continuously improving.",
    tags: ["Maintenance", "Bug Fixing", "Performance"],
    icon: <LifeBuoy className="text-[var(--color-accent-blue)]" />
  }
];

export default function ITSolutions() {
  return (
    <section id="it-solutions" className="relative py-24 px-6">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[var(--color-accent-blue)]/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Technology Built Around Your Business.
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
            From business dashboards to custom web applications, we build practical digital solutions designed around your workflow.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {solutions.map((item, i) => (
            <div key={i} className="glass-panel p-8 lg:p-10 flex flex-col h-full group hover:border-white/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-blue)]/10 border border-[var(--color-accent-blue)]/20 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-[var(--color-text-secondary)] mb-8 flex-grow">{item.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Dashboard Showcase Mockup */}
        <div className="relative glass-panel p-2 overflow-hidden border-white/20 bg-[#0D0D12]/80">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent-blue)]/20 blur-[80px] pointer-events-none" />
          
          <div className="glass-panel border-none shadow-none rounded-[20px] p-6 lg:p-10 flex flex-col gap-8">
            <div className="flex justify-between items-center border-b border-white/10 pb-6">
              <div>
                <span className="text-xs text-[var(--color-text-secondary)] uppercase tracking-widest font-bold">Sample Dashboard Concept</span>
                <h4 className="text-2xl font-bold text-white mt-1">Performance Overview</h4>
              </div>
              <button className="btn-primary py-2 text-xs">Build My Dashboard</button>
            </div>

            {/* Mock Data Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Total Revenue", val: "$48,290", icon: <DollarSign size={18}/>, trend: "+12%" },
                { label: "Active Customers", val: "1,204", icon: <Users size={18}/>, trend: "+5%" },
                { label: "Conversion Rate", val: "4.8%", icon: <TrendingUp size={18}/>, trend: "+1.2%" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-4 text-[var(--color-text-secondary)]">
                    <span className="text-sm font-medium">{stat.label}</span>
                    {stat.icon}
                  </div>
                  <div className="flex items-end gap-3">
                    <span className="text-3xl font-bold text-white font-sora">{stat.val}</span>
                    <span className="text-xs text-green-400 font-medium mb-1">{stat.trend}</span>
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