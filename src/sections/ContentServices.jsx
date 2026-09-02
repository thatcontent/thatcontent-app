import { Target, Video, Image, Smartphone, Type, Share2, Users, LineChart } from 'lucide-react';

const services = [
  {
    title: "CONTENT STRATEGY",
    desc: "Know what to say, who you're saying it to, and why it matters.",
    icon: <Target size={20} className="text-white" />
  },
  {
    title: "REELS",
    desc: "Short-form video designed to capture attention and communicate your value.",
    icon: <Video size={20} className="text-white" />
  },
  {
    title: "POSTS & CAROUSELS",
    desc: "Educational and engaging content that builds authority.",
    icon: <Image size={20} className="text-white" />
  },
  {
    title: "STORIES",
    desc: "Stay connected with your audience between major posts.",
    icon: <Smartphone size={20} className="text-white" />
  },
  {
    title: "CAPTIONS & COPY",
    desc: "Clear, authentic messaging that sounds like your business.",
    icon: <Type size={20} className="text-white" />
  },
  {
    title: "SOCIAL MEDIA MANAGEMENT",
    desc: "We handle planning, scheduling, publishing and ongoing management.",
    icon: <Share2 size={20} className="text-white" />
  },
  {
    title: "COMMUNITY ENGAGEMENT",
    desc: "Turn your audience into an active community.",
    icon: <Users size={20} className="text-white" />
  },
  {
    title: "ANALYTICS & OPTIMIZATION",
    desc: "Learn what works and continuously improve.",
    icon: <LineChart size={20} className="text-white" />
  }
];

export default function ContentServices() {
  return (
    <section id="content" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow for depth */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[var(--color-accent-violet)]/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Organic Content That Gives Your Brand a Voice.
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Stop wondering what to post. Start showing customers why they should choose you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="glass-panel p-8 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-sm font-bold text-white mb-3 tracking-wider">{service.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}