const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0A0A0A] text-white py-8 border-t border-[#222222]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="font-display text-xl font-bold flex items-center">
              <span className="text-[#4D8CFF] mr-1">이봉기</span>
              <span className="text-white/60 text-sm ml-2">생성형 AI 개발자</span>
            </a>
          </div>
          
          <div className="font-sans text-sm text-white/60">
            <p>&copy; {currentYear} 이봉기. 모든 권리 보유.</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <a 
              href="#home"
              className="text-white/60 hover:text-[#4D8CFF] transition-colors duration-300 border border-[#333] px-4 py-2 rounded-full hover:border-[#4D8CFF]/50 bg-[#111]/80"
            >
              <i className="fas fa-arrow-up"></i>
              <span className="ml-2">맨 위로</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
