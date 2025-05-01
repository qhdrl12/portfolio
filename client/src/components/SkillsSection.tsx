import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { userData } from "@/data/portfolio";

const SkillsSection = () => {
  const progressBarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find all progress bars inside the container
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            
            // Set the width for each progress bar
            progressBars.forEach((bar) => {
              const width = bar.getAttribute('data-width') || '0%';
              (bar as HTMLElement).style.setProperty('--progress-width', width);
              const after = bar.querySelector(':after') as HTMLElement;
              if (after) {
                after.style.width = width;
              } else {
                (bar as HTMLElement).style.setProperty('--after-width', width);
              }
            });
            
            // Stop observing once triggered
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (progressBarsRef.current) {
      observer.observe(progressBarsRef.current);
    }

    return () => {
      if (progressBarsRef.current) {
        observer.unobserve(progressBarsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-white section-fade-in">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#3D405B] mb-6">My Skills</h2>
          <div className="h-1 w-20 bg-[#E07A5F] mb-8 mx-auto"></div>
          <p className="font-sans text-[#333333]/80 leading-relaxed">
            I've developed a diverse set of skills throughout my journey. Here's a glimpse of my expertise and what I can bring to your project.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto" ref={progressBarsRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-2xl font-semibold text-[#3D405B] mb-8">Design Skills</h3>
              
              <div className="space-y-6">
                {userData.designSkills.map((skill, index) => (
                  <div key={`design-${index}`}>
                    <div className="flex justify-between mb-2">
                      <span className="font-sans font-medium text-[#333333]">{skill.name}</span>
                      <span className="font-sans text-sm text-[#333333]/70">{skill.level}%</span>
                    </div>
                    <div className="progress-bar" data-width={`${skill.level}%`}>
                      <style jsx>{`
                        .progress-bar:after {
                          width: ${skill.level}%;
                        }
                      `}</style>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-display text-2xl font-semibold text-[#3D405B] mb-8">Technical Skills</h3>
              
              <div className="space-y-6">
                {userData.technicalSkills.map((skill, index) => (
                  <div key={`tech-${index}`}>
                    <div className="flex justify-between mb-2">
                      <span className="font-sans font-medium text-[#333333]">{skill.name}</span>
                      <span className="font-sans text-sm text-[#333333]/70">{skill.level}%</span>
                    </div>
                    <div className="progress-bar" data-width={`${skill.level}%`}>
                      <style jsx>{`
                        .progress-bar:after {
                          width: ${skill.level}%;
                        }
                      `}</style>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="font-display text-2xl font-semibold text-[#3D405B] mb-8 text-center">Tools I Work With</h3>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {userData.tools.map((tool, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F4F1DE] rounded-lg flex items-center justify-center shadow-sm mb-3 mx-auto">
                    <i className={`${tool.icon} text-2xl md:text-3xl text-[#E07A5F]`}></i>
                  </div>
                  <span className="font-sans text-sm text-[#333333]/80">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
