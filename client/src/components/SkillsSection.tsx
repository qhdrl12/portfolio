import { motion } from "framer-motion";
import { userData } from "@/data/portfolio";

const SkillBar = ({ name, level, index }: { name: string, level: number, index: number }) => {
  // 기술 레벨에 따라 색상 설정
  const getColorForLevel = () => {
    if (level >= 90) return "bg-gradient-to-r from-[#4D8CFF] to-[#7B5FFF]";
    if (level >= 80) return "bg-[#4D8CFF]";
    if (level >= 70) return "bg-[#5AC8FA]";
    return "bg-[#4CD964]";
  };

  return (
    <motion.div 
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between mb-2">
        <span className="font-sans font-medium text-white">{name}</span>
        <span className="font-sans text-sm text-white/60">{level}%</span>
      </div>
      <div className="h-2 w-full bg-[#333] rounded-full overflow-hidden">
        <motion.div 
          className={`h-full ${getColorForLevel()} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
        />
      </div>
    </motion.div>
  );
};

const TechIcon = ({ name, icon, index }: { name: string, icon: string, index: number }) => {
  // Check if the icon is a path to an SVG file
  const isSvgPath = icon.startsWith('/');
  
  return (
    <motion.div 
      className="flex flex-col items-center"
      whileHover={{ y: -5, scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div className="tech-icon w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center shadow-sm mb-3 mx-auto">
        {isSvgPath ? (
          <img src={icon} alt={name} className="w-10 h-10 md:w-12 md:h-12" />
        ) : (
          <i className={`${icon} text-2xl md:text-3xl text-[#4D8CFF]`}></i>
        )}
      </div>
      <span className="font-sans text-sm font-medium text-white/70">{name}</span>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 section-fade-in">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 rounded-full px-3 py-1 text-xs font-medium bg-[#4D8CFF]/10 text-[#4D8CFF]">
            기술 & 역량
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">기술 스택</h2>
          <div className="h-1 w-20 bg-[#4D8CFF] mb-8 mx-auto"></div>
          <p className="font-sans text-white/70 leading-relaxed">
            생성형 AI 개발에 특화된 최신 기술 스택과 프로그래밍 언어를 사용합니다.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#151515]/80 backdrop-blur-sm border border-[#333]/40 rounded-xl p-8 mb-10">
            <h3 className="font-display text-xl font-bold text-white mb-8 text-center">개발 도구 & 기술</h3>
            
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {userData.tools.map((tool, index) => (
                <TechIcon 
                  key={`tool-${index}`} 
                  name={tool.name} 
                  icon={tool.icon}
                  index={index}
                />
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
            <div className="flex-1 bg-[#151515]/80 backdrop-blur-sm border border-[#333]/40 rounded-xl p-6 hover:border-[#4D8CFF]/30 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-[#4D8CFF]/10 flex items-center justify-center mr-4 text-[#4D8CFF]">
                  <i className="fas fa-brain text-lg"></i>
                </div>
                <h4 className="text-white font-medium">AI & Serving</h4>
              </div>
              <p className="text-white/60 text-sm">Hugging Face, RAG, ChatGPT, OpenSource LLM, LangChain, LangGraph, Dify, Agent, MCP, vLLM, Triton Inference Server</p>
            </div>
            
            <div className="flex-1 bg-[#151515]/80 backdrop-blur-sm border border-[#333]/40 rounded-xl p-6 hover:border-[#4D8CFF]/30 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-[#7B5FFF]/10 flex items-center justify-center mr-4 text-[#7B5FFF]">
                  <i className="fas fa-cloud text-lg"></i>
                </div>
                <h4 className="text-white font-medium">클라우드 & 배포</h4>
              </div>
              <p className="text-white/60 text-sm">AWS, Google Cloud, Azure, Docker, Kubernetes, CI/CD, Serverless Architecture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
