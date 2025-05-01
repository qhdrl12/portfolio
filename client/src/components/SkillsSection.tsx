import { motion } from "framer-motion";
import { userData } from "@/data/portfolio";

const SkillCard = ({ name, icon, category }: { name: string, icon: string, category: string }) => {
  const bgColor = category === "design" ? "bg-[#F4F1DE]" : category === "technical" ? "bg-[#E07A5F]/10" : "bg-[#3D405B]/10";
  const iconColor = category === "design" ? "text-[#E07A5F]" : category === "technical" ? "text-[#3D405B]" : "text-[#F2CC8F]";
  
  return (
    <motion.div 
      className="text-center"
      whileHover={{ y: -5, scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`w-20 h-20 md:w-24 md:h-24 ${bgColor} rounded-xl flex items-center justify-center shadow-sm mb-3 mx-auto`}>
        <i className={`${icon} text-2xl md:text-4xl ${iconColor}`}></i>
      </div>
      <span className="font-sans text-sm font-medium text-[#333333]/80">{name}</span>
    </motion.div>
  );
};

const SkillsSection = () => {
  // 디자인 스킬을 아이콘 형태로 변환
  const designSkillsWithIcons = userData.designSkills.map(skill => {
    // 스킬 이름에 따라 적절한 아이콘 할당
    let icon = "";
    if (skill.name.includes("UI/UX")) {
      icon = "fas fa-pencil-ruler";
    } else if (skill.name.includes("시각")) {
      icon = "fas fa-eye";
    } else if (skill.name.includes("브랜드")) {
      icon = "fas fa-copyright";
    } else if (skill.name.includes("와이어프레임")) {
      icon = "fas fa-object-group";
    } else {
      icon = "fas fa-paint-brush";
    }
    
    return {
      name: skill.name,
      icon: icon
    };
  });
  
  // 기술 스킬을 아이콘 형태로 변환
  const technicalSkillsWithIcons = userData.technicalSkills.map(skill => {
    // 스킬 이름에 따라 적절한 아이콘 할당
    let icon = "";
    if (skill.name.includes("HTML")) {
      icon = "fab fa-html5";
    } else if (skill.name.includes("JavaScript")) {
      icon = "fab fa-js";
    } else if (skill.name.includes("React")) {
      icon = "fab fa-react";
    } else if (skill.name.includes("Figma")) {
      icon = "fab fa-figma";
    } else {
      icon = "fas fa-code";
    }
    
    return {
      name: skill.name,
      icon: icon
    };
  });

  return (
    <section id="skills" className="py-20 bg-white section-fade-in">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#3D405B] mb-6">기술 스택</h2>
          <div className="h-1 w-20 bg-[#E07A5F] mb-8 mx-auto"></div>
          <p className="font-sans text-[#333333]/80 leading-relaxed">
            제가 사용하는 다양한 기술과 도구들입니다. 꾸준한 학습과 프로젝트 경험을 통해 다양한 전문 기술을 갖추고 있습니다.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h3 className="font-display text-2xl font-semibold text-[#3D405B] mb-8 text-center">디자인 스킬</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
              {designSkillsWithIcons.map((skill, index) => (
                <SkillCard 
                  key={`design-${index}`} 
                  name={skill.name} 
                  icon={skill.icon}
                  category="design"
                />
              ))}
            </div>
          </div>
          
          <div className="mb-16">
            <h3 className="font-display text-2xl font-semibold text-[#3D405B] mb-8 text-center">기술 스킬</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
              {technicalSkillsWithIcons.map((skill, index) => (
                <SkillCard 
                  key={`tech-${index}`} 
                  name={skill.name} 
                  icon={skill.icon}
                  category="technical"
                />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-2xl font-semibold text-[#3D405B] mb-8 text-center">사용 도구</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
              {userData.tools.map((tool, index) => (
                <SkillCard 
                  key={`tool-${index}`} 
                  name={tool.name} 
                  icon={tool.icon}
                  category="tool"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
