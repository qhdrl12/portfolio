import { useState, useEffect } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed w-full bg-[#F4F1DE]/90 backdrop-blur-sm z-50 transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-[#3D405B] font-display text-2xl font-bold">
            <span className="text-[#E07A5F]">Port</span>folio
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#home" className="nav-link font-sans text-[#3D405B] hover:text-[#E07A5F] transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="nav-link font-sans text-[#3D405B] hover:text-[#E07A5F] transition-colors duration-300">About</a></li>
              <li><a href="#projects" className="nav-link font-sans text-[#3D405B] hover:text-[#E07A5F] transition-colors duration-300">Projects</a></li>
              <li><a href="#skills" className="nav-link font-sans text-[#3D405B] hover:text-[#E07A5F] transition-colors duration-300">Skills</a></li>
              <li><a href="#contact" className="nav-link font-sans text-[#3D405B] hover:text-[#E07A5F] transition-colors duration-300">Contact</a></li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#3D405B] hover:text-[#E07A5F]" 
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <nav className={`md:hidden mt-4 pb-2 transition-all duration-300 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col space-y-4">
            <li><a href="#home" className="block py-2 nav-link font-sans text-[#3D405B] hover:text-[#E07A5F] transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="block py-2 nav-link font-sans text-[#3D405B] hover:text-[#E07A5F] transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#projects" className="block py-2 nav-link font-sans text-[#3D405B] hover:text-[#E07A5F] transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
            <li><a href="#skills" className="block py-2 nav-link font-sans text-[#3D405B] hover:text-[#E07A5F] transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
            <li><a href="#contact" className="block py-2 nav-link font-sans text-[#3D405B] hover:text-[#E07A5F] transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
