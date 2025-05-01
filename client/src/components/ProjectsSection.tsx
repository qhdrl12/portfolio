import { motion } from "framer-motion";
import { userData } from "@/data/portfolio";

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  // 각 프로젝트 카드에 대한 아이콘 선택
  const getIconForProject = (index: number) => {
    const icons = [
      "fas fa-star", // 프로젝트 1
      "fas fa-globe", // 프로젝트 2
      "fas fa-code", // 프로젝트 3
      "fas fa-microchip" // 프로젝트 4
    ];
    return icons[index % icons.length];
  };

  // 각 프로젝트 카드에 대한 배경색 선택
  const getBgColorForProject = (index: number) => {
    const colors = [
      "bg-[#4D8CFF]/10", // 파란색
      "bg-[#7B5FFF]/10", // 보라색
      "bg-[#5AC8FA]/10", // 하늘색
      "bg-[#4CD964]/10"  // 초록색
    ];
    return colors[index % colors.length];
  };

  // 각 프로젝트 카드에 대한 텍스트색 선택
  const getTextColorForProject = (index: number) => {
    const colors = [
      "text-[#4D8CFF]", // 파란색
      "text-[#7B5FFF]", // 보라색
      "text-[#5AC8FA]", // 하늘색
      "text-[#4CD964]"  // 초록색
    ];
    return colors[index % colors.length];
  };

  // 상태 텍스트에 따른 스타일 설정
  const getStateStyle = (state: string) => {
    switch(state) {
      case "Coming Soon":
        return "text-yellow-400";
      case "개발 진행 중":
        return "text-blue-400";
      case "알파 테스트 중":
        return "text-green-400";
      case "2025 출시 예정":
        return "text-purple-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <motion.div 
      className="project-card rounded-xl"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="p-6">
        <div className={`${getBgColorForProject(index)} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
          <i className={`${getIconForProject(index)} ${getTextColorForProject(index)} text-xl`}></i>
        </div>
        
        <h3 className="font-display text-xl font-semibold text-white mb-3">{project.title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.categories.map((category: string, catIndex: number) => (
            <span 
              key={catIndex}
              className="text-xs font-medium py-1 px-2 rounded-full bg-[#333]/50 text-white/70"
            >
              {category}
            </span>
          ))}
        </div>
        
        <p className="font-sans text-white/70 mb-6 text-sm">{project.description}</p>
        
        {project.state && (
          <div className="flex items-center justify-between mt-6">
            <div className={`${getStateStyle(project.state)} text-sm font-medium flex items-center`}>
              <i className="fas fa-circle text-xs mr-2"></i>
              {project.state}
            </div>
            
            <a 
              href="#" 
              className={`${getTextColorForProject(index)} font-medium text-sm transition-colors duration-300 inline-flex items-center`}
            >
              <span>{project.state === "Coming Soon" ? "Coming Soon" : "자세히 보기"}</span>
              <i className="fas fa-arrow-right ml-2 text-xs"></i>
            </a>
          </div>
        )}
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
            경험 & 프로젝트
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">저의 전문 프로젝트들을 소개합니다</h2>
          <div className="h-1 w-20 bg-[#4D8CFF] mb-8 mx-auto"></div>
          <p className="font-sans text-white/70 leading-relaxed">
            카카오페이와 메타에서 진행한 최신 AI 프로젝트들입니다.
            보안상의 이유로 일부 정보는 제한적으로 공개됩니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {userData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="https://github.com/bongkilee" 
            className="inline-block px-8 py-3 bg-[#1E1E1E] border border-[#333] text-white font-sans font-medium rounded-md hover:border-[#4D8CFF]/50 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github mr-2"></i> GitHub에서 오픈 소스 프로젝트 보기
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
