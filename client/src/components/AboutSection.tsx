import { motion } from "framer-motion";
import { userData } from "@/data/portfolio";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative section-fade-in">
      {/* 배경 효과 */}
      <div className="absolute inset-0 dot-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 rounded-full px-3 py-1 text-xs font-medium bg-[#4D8CFF]/10 text-[#4D8CFF]">
            소개 & 프로필
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">경험 & 프로젝트</h2>
          <div className="h-1 w-20 bg-[#4D8CFF] mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#151515]/80 backdrop-blur-sm border border-[#333]/40 text-white rounded-xl overflow-hidden shadow-xl mb-12">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 p-8 border-r border-[#333]/40">
                <h3 className="font-display text-xl font-bold text-[#4D8CFF] mb-6">타임라인</h3>
                
                <div className="relative pl-8 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-[#4D8CFF] before:to-[#7B5FFF]">
                  {userData.experience.map((exp, index) => (
                    <div key={`exp-${index}`} className="relative">
                      <div className="absolute left-[-29px] top-1.5 w-3 h-3 rounded-full bg-[#4D8CFF]"></div>
                      <p className="text-[#4D8CFF] font-medium mb-1 text-sm">{exp.split(',')[1].trim()}</p>
                      <p className="text-sm text-white/70">{exp.split(',')[0].trim()}</p>
                    </div>
                  ))}
                  
                  {userData.education.map((edu, index) => (
                    <div key={`edu-${index}`} className="relative">
                      <div className="absolute left-[-29px] top-1.5 w-3 h-3 rounded-full bg-[#7B5FFF]"></div>
                      <p className="text-[#7B5FFF] font-medium mb-1 text-sm">{edu.split(',')[1]?.trim() || '학력'}</p>
                      <p className="text-sm text-white/70">{edu.split(',')[0].trim()}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="md:w-2/3 p-8">
                <h3 className="font-display text-xl font-bold text-white mb-6">자기소개</h3>
                
                <div className="space-y-6">
                  <p className="text-white/70 leading-relaxed">
                    {userData.about.join(' ')}
                  </p>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start bg-[#1D1D1D] p-4 rounded-lg border border-[#333]/40 hover:border-[#4D8CFF]/30 transition-colors duration-300">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-[#4D8CFF]/10 flex items-center justify-center mr-4 text-[#4D8CFF]">
                        <i className="fas fa-brain text-lg"></i>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">AI 전문가</h4>
                        <p className="text-white/60 text-sm">최신 생성형 AI 기술과 대규모 언어 모델 개발</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start bg-[#1D1D1D] p-4 rounded-lg border border-[#333]/40 hover:border-[#4D8CFF]/30 transition-colors duration-300">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-[#7B5FFF]/10 flex items-center justify-center mr-4 text-[#7B5FFF]">
                        <i className="fas fa-code text-lg"></i>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">풀스택 개발자</h4>
                        <p className="text-white/60 text-sm">강력한 웹 애플리케이션 및 API 시스템 구축</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start bg-[#1D1D1D] p-4 rounded-lg border border-[#333]/40 hover:border-[#4D8CFF]/30 transition-colors duration-300">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-[#4D8CFF]/10 flex items-center justify-center mr-4 text-[#4D8CFF]">
                        <i className="fas fa-chart-line text-lg"></i>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">데이터 분석가</h4>
                        <p className="text-white/60 text-sm">복잡한 데이터에서 의미 있는 통찰력 도출</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start bg-[#1D1D1D] p-4 rounded-lg border border-[#333]/40 hover:border-[#4D8CFF]/30 transition-colors duration-300">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-[#7B5FFF]/10 flex items-center justify-center mr-4 text-[#7B5FFF]">
                        <i className="fas fa-users text-lg"></i>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">팀 리더</h4>
                        <p className="text-white/60 text-sm">효과적인 커뮤니케이션과 팀워크 구축</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
