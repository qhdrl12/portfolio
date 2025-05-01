import { useState, useEffect } from 'react';
import { userData } from "@/data/portfolio";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // 헤더 스크롤 효과 처리
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
    <header className={`fixed w-full bg-[#121212]/80 backdrop-blur-md z-50 transition-all duration-300 ${scrolled ? 'shadow-md shadow-black/30' : ''}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-white font-display text-xl md:text-2xl font-bold flex items-center">
            <span className="text-[#4D8CFF] mr-1">이봉기</span>
            <span className="opacity-70 text-base mx-1">|</span>
            <span className="opacity-90 text-sm font-medium tracking-wide flex items-center">
              <span className="hidden sm:inline-block">카카오페이</span>
              <span className="sm:mx-1.5 mx-1 opacity-50">·</span>
              <span className="text-white/90">AI 개발자</span>
            </span>
          </a>
          
          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#home" className="nav-link font-sans text-white hover:text-[#4D8CFF] transition-colors duration-300">홈</a></li>
              <li><a href="#about" className="nav-link font-sans text-white hover:text-[#4D8CFF] transition-colors duration-300">소개</a></li>
              <li><a href="#projects" className="nav-link font-sans text-white hover:text-[#4D8CFF] transition-colors duration-300">프로젝트</a></li>
              <li><a href="#skills" className="nav-link font-sans text-white hover:text-[#4D8CFF] transition-colors duration-300">기술</a></li>
              <li><a href="#contact" className="nav-link font-sans text-white hover:text-[#4D8CFF] transition-colors duration-300">연락처</a></li>
            </ul>
          </nav>
          
          {/* 모바일 메뉴 버튼 */}
          <button 
            className="md:hidden text-white hover:text-[#4D8CFF]" 
            onClick={toggleMobileMenu}
            aria-label="메뉴 토글"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {/* 모바일 네비게이션 */}
        <nav className={`md:hidden mt-4 pb-2 transition-all duration-300 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col space-y-4">
            <li><a href="#home" className="block py-2 nav-link font-sans text-white hover:text-[#4D8CFF] transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>홈</a></li>
            <li><a href="#about" className="block py-2 nav-link font-sans text-white hover:text-[#4D8CFF] transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>소개</a></li>
            <li><a href="#projects" className="block py-2 nav-link font-sans text-white hover:text-[#4D8CFF] transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>프로젝트</a></li>
            <li><a href="#skills" className="block py-2 nav-link font-sans text-white hover:text-[#4D8CFF] transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>기술</a></li>
            <li><a href="#contact" className="block py-2 nav-link font-sans text-white hover:text-[#4D8CFF] transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>연락처</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
