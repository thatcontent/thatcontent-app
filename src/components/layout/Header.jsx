import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = ['Home', 'Content', 'IT Solutions', 'Packages', 'About'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#07070A]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img 
            src="/logo.png" 
            alt="ThatContent Logo" 
            className="h-10 w-auto object-contain" 
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a 
              key={link} 
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
              className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
          <a href="#audit" className="btn-primary py-2 px-6">Free Audit</a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#07070A] border-b border-white/10 px-6 py-8 flex flex-col gap-6 shadow-2xl">
          {navLinks.map(link => (
            <a 
              key={link} 
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-white/80 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
          <a 
            href="#audit" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary w-full mt-4 py-3"
          >
            Free Audit
          </a>
        </div>
      )}
    </header>
  );
}