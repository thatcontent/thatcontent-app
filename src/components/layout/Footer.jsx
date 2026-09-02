export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#07070A] pt-20 pb-10 px-6 mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div className="w-20 h-20 rounded-[10px] flex items-center justify-center">
                <img 
    src="/logo.png" 
    alt="ThatContent Logo" 
    className="h-16 w-auto object-contain" 
  />
              </div>
              <span className="text-2xl font-sora font-bold text-white tracking-wide">ThatContent</span>
            </div>
            <p className="text-text-secondary max-w-sm mx-auto md:mx-0">
              Content & Digital Solutions for Growing Businesses.
            </p>
          </div>

          {/* Nav Col */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-6 font-sora">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Content', 'IT Solutions', 'Packages', 'Work', 'About'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-text-secondary hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-6 font-sora">Contact</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li>Edmonton, Alberta, Canada</li>
              <li><a href="mailto:hello@thatcontent.com" className="hover:text-white transition-colors">hello@thatcontent.com</a></li>
              <li className="pt-4 flex justify-center md:justify-start gap-4">
                {['Instagram', 'Facebook', 'LinkedIn'].map(social => (
                  <a key={social} href="#" className="hover:text-white transition-colors">{social}</a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary/60">
          <p>© {currentYear} ThatContent. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}