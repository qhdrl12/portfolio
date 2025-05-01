import { motion } from "framer-motion";
import { userData } from "@/data/portfolio";

// 프로젝트 아이콘 매핑
const getProjectIcon = (categories: string[]) => {
  if (categories.includes("생성형 AI") || categories.includes("NLP")) {
    return "fas fa-brain";
  } else if (categories.includes("데이터 분석") || categories.includes("머신러닝")) {
    return "fas fa-chart-bar";
  } else if (categories.includes("오픈소스") || categories.includes("API 개발")) {
    return "fas fa-code-branch";
  } else if (categories.includes("자연어 처리") || categories.includes("LLM")) {
    return "fas fa-comment-alt";
  } else {
    return "fas fa-project-diagram";
  }
};

// 프로젝트 색상 테마
const getProjectTheme = (index: number) => {
  const themes = [
    {
      bg: "bg-gradient-to-br from-[#4D8CFF]/10 to-[#4D8CFF]/5",
      iconBg: "bg-[#4D8CFF]/10",
      iconColor: "text-[#4D8CFF]",
      borderHover: "hover:border-[#4D8CFF]/40",
      buttonColor: "text-[#4D8CFF]"
    },
    {
      bg: "bg-gradient-to-br from-[#7B5FFF]/10 to-[#7B5FFF]/5",
      iconBg: "bg-[#7B5FFF]/10",
      iconColor: "text-[#7B5FFF]",
      borderHover: "hover:border-[#7B5FFF]/40",
      buttonColor: "text-[#7B5FFF]"
    },
    {
      bg: "bg-gradient-to-br from-[#5AC8FA]/10 to-[#5AC8FA]/5",
      iconBg: "bg-[#5AC8FA]/10",
      iconColor: "text-[#5AC8FA]",
      borderHover: "hover:border-[#5AC8FA]/40",
      buttonColor: "text-[#5AC8FA]"
    },
    {
      bg: "bg-gradient-to-br from-[#34C759]/10 to-[#34C759]/5",
      iconBg: "bg-[#34C759]/10",
      iconColor: "text-[#34C759]",
      borderHover: "hover:border-[#34C759]/40",
      buttonColor: "text-[#34C759]"
    }
  ];
  
  return themes[index % themes.length];
};

// 상태 표시 스타일
const getStateStyle = (state: string) => {
  switch(state) {
    case "Coming Soon":
      return "text-yellow-400 bg-yellow-400/10";
    case "개발 진행 중":
      return "text-blue-400 bg-blue-400/10";
    case "알파 테스트 중":
      return "text-green-400 bg-green-400/10";
    case "2025 출시 예정":
      return "text-purple-400 bg-purple-400/10";
    default:
      return "text-gray-400 bg-gray-400/10";
  }
};

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const theme = getProjectTheme(index);
  const icon = getProjectIcon(project.categories);
  
  return (
    <motion.div 
      className={`project-card rounded-xl ${theme.bg} ${theme.borderHover}`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div className={`${theme.iconBg} w-12 h-12 rounded-lg flex items-center justify-center`}>
            <i className={`${icon} ${theme.iconColor} text-xl`}></i>
          </div>
          
          {project.state && (
            <span className={`${getStateStyle(project.state)} text-xs font-medium py-1 px-3 rounded-full inline-flex items-center`}>
              <i className="fas fa-circle text-[8px] mr-2"></i>
              {project.state}
            </span>
          )}
        </div>
        
        <h3 className="font-display text-xl font-semibold text-white mb-3">{project.title}</h3>
        
        <p className="font-sans text-white/70 mb-6 text-sm">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {project.categories.map((category: string, catIndex: number) => (
            <span 
              key={catIndex}
              className="text-xs font-medium py-1 px-2 rounded-full bg-[#333]/50 text-white/70"
            >
              {category}
            </span>
          ))}
        </div>
        
        <div className="pt-4 border-t border-[#333]/30">
          <a 
            href="#" 
            className={`${theme.buttonColor} font-medium text-sm transition-colors duration-300 inline-flex items-center`}
          >
            <span>{project.state === "Coming Soon" ? "출시 예정" : "자세히 보기"}</span>
            <i className="fas fa-arrow-right ml-2 text-xs"></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 section-fade-in">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 rounded-full px-3 py-1 text-xs font-medium bg-[#4D8CFF]/10 text-[#4D8CFF]">
            프로젝트 & 성과
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">주요 프로젝트</h2>
          <div className="h-1 w-20 bg-[#4D8CFF] mb-8 mx-auto"></div>
          <p className="font-sans text-white/70 leading-relaxed">
            카카오페이에서 진행한 AI 기반 금융 서비스 프로젝트들입니다.
            사용자 경험을 개선하고 혁신적인 금융 솔루션을 제공하는 것을 목표로 합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {userData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
