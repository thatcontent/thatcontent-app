import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? 'bg-[#07070A]/80 backdrop-blur-xl border-glass-border' 
        : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer">
  <img 
    src="/logo.png" 
    alt="ThatContent Logo" 
    className="h-16 w-auto object-contain" 
  />
</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Content', 'IT Solutions', 'Packages', 'How It Works', 'Work', 'About', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-text-secondary hover:text-white transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Primary CTA & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex btn-primary">
            Get Free Audit
          </button>
          <button className="md:hidden p-2 text-text-secondary hover:text-white">
            <Menu size={24} />
          </button>
        </div>

      </div>
    </header>
  );
}