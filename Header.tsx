import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onChatClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onChatClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/95'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold text-blue-800 tracking-wide">
            泉韵<span className="text-yellow-600">志启</span>
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {[
            { label: '核心功能', id: 'features', action: 'scroll' },
            { label: 'AI体验', id: 'ai-demo', action: 'scroll' },
            { label: '特色文化', id: 'highlight', action: 'scroll' },
            { label: '文化问答', id: 'chat', action: 'chat' },
            { label: '联系我们', id: 'contact', action: 'scroll' }
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => item.action === 'chat' ? onChatClick() : scrollToSection(item.id)}
                className="text-slate-700 font-semibold hover:text-blue-800 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <ul className="py-4">
              {[
                { label: '核心功能', id: 'features', action: 'scroll' },
                { label: 'AI体验', id: 'ai-demo', action: 'scroll' },
                { label: '特色文化', id: 'highlight', action: 'scroll' },
                { label: '文化问答', id: 'chat', action: 'chat' },
                { label: '联系我们', id: 'contact', action: 'scroll' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => item.action === 'chat' ? onChatClick() : scrollToSection(item.id)}
                    className="block w-full text-left px-6 py-3 text-slate-700 font-semibold hover:bg-blue-50 hover:text-blue-800 transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;