const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#3D405B] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="font-display text-xl font-bold">
              <span className="text-[#E07A5F]">Port</span><span className="text-white">folio</span>
            </a>
          </div>
          
          <div className="font-sans text-sm text-white/80">
            <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <a href="#home" className="text-white/80 hover:text-[#E07A5F] transition-colors duration-300">
              <i className="fas fa-arrow-up"></i>
              <span className="ml-2">Back to Top</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
