import { motion } from "framer-motion";
import { userData } from "@/data/portfolio";

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 md:pt-32 pb-20 md:pb-28 relative overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div 
            className="w-full md:w-3/5 md:pr-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <div className="inline-block mb-2 rounded-full px-3 py-1 text-xs font-medium bg-[#4D8CFF]/10 text-[#4D8CFF]">
                {userData.title}
              </div>
            </div>

            <h1 className="font-display text-5xl font-bold text-white mb-6">
              안녕하세요,<br />
              저는 <span className="text-[#4D8CFF]">이봉기</span>입니다
            </h1>
            
            <h2 className="font-display text-3xl font-medium text-[#4D8CFF]/90 mb-6">
              {userData.headline}
            </h2>
            
            <div className="space-y-4 text-white/70 leading-relaxed mb-8">
              {userData.about.map((paragraph, index) => (
                <p key={index} className={`font-sans ${index === 0 ? 'text-lg' : 'text-base'}`}>
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <motion.a 
                href="#projects"
                className="px-6 py-3 bg-[#4D8CFF] text-white font-sans font-medium rounded-md shadow-lg hover:shadow-xl hover:bg-[#4D8CFF]/90 transition-all duration-300 blue-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-th-large mr-2"></i> 프로젝트 보기
              </motion.a>
              
              <motion.a 
                href={userData.socialLinks.find(social => social.platform === "GitHub")?.url || "#"} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#1E1E1E] border border-[#333] text-white font-sans font-medium rounded-md hover:border-[#4D8CFF]/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-github mr-2"></i> GitHub
              </motion.a>
            </div>
            
            <div className="mt-10 flex items-center">
              <span className="text-white/60 text-sm mr-4">소셜 미디어</span>
              <div className="flex space-x-3">
                {userData.socialLinks.map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.url} 
                    className="h-8 w-8 rounded bg-[#1E1E1E] border border-[#333] flex items-center justify-center text-white/70 hover:text-[#4D8CFF] hover:border-[#4D8CFF]/50 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-2/5 mt-10 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* 배경 장식 */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4D8CFF]/20 to-[#7B5FFF]/20 rounded-lg blur-xl"></div>
              
              {/* 프로필 이미지 컨테이너 */}
              <div className="relative z-10 p-1 bg-gradient-to-r from-[#4D8CFF] to-[#7B5FFF] rounded-lg shadow-xl">
                <div className="bg-[#121212] p-4 rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600&h=600&crop=faces"
                    alt="이봉기 프로필"
                    className="w-full h-auto rounded-lg shadow-inner object-cover"
                  />
                  
                  <div className="absolute -bottom-3 -right-3 bg-[#121212] border-4 border-[#121212] rounded-full shadow-lg blue-glow">
                    <div className="bg-gradient-to-r from-[#4D8CFF] to-[#7B5FFF] text-white text-xs px-3 py-1 rounded-full">
                      <i className="fas fa-check mr-1"></i> 카카오페이
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 md:mt-20 flex justify-center">
          <motion.a 
            href="#about" 
            className="text-white/60 hover:text-[#4D8CFF] transition-all duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            <i className="fas fa-chevron-down text-xl"></i>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
