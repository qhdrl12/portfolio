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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">경력 & 기술</h2>
          <div className="h-1 w-20 bg-[#4D8CFF] mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* 자기소개 */}
          <div className="bg-[#151515]/80 backdrop-blur-sm border border-[#333]/40 text-white rounded-xl overflow-hidden shadow-xl mb-12">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 p-8 border-r border-[#333]/40">
                <h3 className="font-display text-xl font-bold text-[#4D8CFF] mb-6">경력 & 학력</h3>
                
                <div className="relative pl-8 space-y-6">
                  {/* 타임라인 선 - 그라데이션 유지 */}
                  <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#4D8CFF] via-[#6A74E0] to-[#7B5FFF] rounded-full opacity-80 shadow-sm"></div>
                  
                  {userData.experience.map((exp, index) => {
                    const parts = exp.split('(');
                    const company = parts[0].trim();
                    const position = parts[1] ? parts[1].split(')')[0].trim() : '';
                    const isLast = index === userData.experience.length - 1;
                    
                    return (
                      <div key={`exp-${index}`} className="relative">
                        {/* 원 포인트에 그림자와 테두리 추가 */}
                        <div className="absolute left-[-29px] top-1.5 w-3 h-3 rounded-full bg-[#4D8CFF] shadow-[0_0_8px_rgba(77,140,255,0.6)] z-10 border border-[#121212]"></div>
                        
                        <p className="text-[#4D8CFF] font-medium mb-1 text-sm">
                          {position}
                          <span className="ml-2 text-white/40 text-xs">{parts[1] ? parts[1].replace('(', '').replace(')', '') : ''}</span>
                        </p>
                        <p className="text-sm text-white/70">{company}</p>
                      </div>
                    );
                  })}
                  
                  {userData.education.map((edu, index) => {
                    const parts = edu.split(',');
                    const school = parts[0].trim();
                    const degree = parts[1]?.trim() || '';
                    
                    return (
                      <div key={`edu-${index}`} className="relative">
                        {/* 원 포인트에 그림자와 테두리 추가 */}
                        <div className="absolute left-[-29px] top-1.5 w-3 h-3 rounded-full bg-[#7B5FFF] shadow-[0_0_8px_rgba(123,95,255,0.6)] z-10 border border-[#121212]"></div>
                        
                        <p className="text-[#7B5FFF] font-medium mb-1 text-sm">
                          {degree}
                          <span className="ml-2 text-white/40 text-xs">{parts[1] ? parts[1].replace('(', '').replace(')', '') : ''}</span>
                        </p>
                        <p className="text-sm text-white/70">{school}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="md:w-2/3 p-8">
                <h3 className="font-display text-xl font-bold text-white mb-6">소개</h3>
                
                <div className="space-y-4">
                  {userData.detailAbout.map((paragraph, index) => (
                    <p key={index} className="text-white/70 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start bg-[#1D1D1D] p-4 rounded-lg border border-[#333]/40 hover:border-[#4D8CFF]/30 transition-colors duration-300">
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-[#4D8CFF]/10 flex items-center justify-center mr-4 text-[#4D8CFF]">
                      <i className="fas fa-brain text-lg"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">AI 서비스</h4>
                      <p className="text-white/60 text-sm">오픈소스 LLM 활용, 모델 평가, 모델 서빙, 모델 개선</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start bg-[#1D1D1D] p-4 rounded-lg border border-[#333]/40 hover:border-[#4D8CFF]/30 transition-colors duration-300">
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-[#7B5FFF]/10 flex items-center justify-center mr-4 text-[#7B5FFF]">
                      <i className="fas fa-code text-lg"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">풀스택 개발자</h4>
                      <p className="text-white/60 text-sm">웹 애플리케이션 제작, AI 기반 솔루션 등</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 추가 스킬 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-[#151515]/80 backdrop-blur-sm border border-[#333]/40 rounded-xl p-6 hover:border-[#4D8CFF]/30 transition-colors duration-300">
              <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-[#4D8CFF]/10 flex items-center justify-center mb-6 text-[#4D8CFF]">
                <i className="fas fa-chart-line text-xl"></i>
              </div>
              <h4 className="text-white font-medium mb-3">데이터 분석</h4>
              <p className="text-white/60 text-sm">복잡한 데이터에서 의미 있는 통찰력을 도출하고 비즈니스 의사결정을 지원합니다.</p>
            </div>
            
            <div className="bg-[#151515]/80 backdrop-blur-sm border border-[#333]/40 rounded-xl p-6 hover:border-[#4D8CFF]/30 transition-colors duration-300">
              <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-[#7B5FFF]/10 flex items-center justify-center mb-6 text-[#7B5FFF]">
                <i className="fas fa-users text-xl"></i>
              </div>
              <h4 className="text-white font-medium mb-3">기술 리더십</h4>
              <p className="text-white/60 text-sm">효과적인 커뮤니케이션과 팀워크를 통해 프로젝트를 성공적으로 이끕니다.</p>
            </div>
            
            <div className="bg-[#151515]/80 backdrop-blur-sm border border-[#333]/40 rounded-xl p-6 hover:border-[#4D8CFF]/30 transition-colors duration-300">
              <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-[#5AC8FA]/10 flex items-center justify-center mb-6 text-[#5AC8FA]">
                <i className="fas fa-laptop-code text-xl"></i>
              </div>
              <h4 className="text-white font-medium mb-3">솔루션 아키텍처</h4>
              <p className="text-white/60 text-sm">복잡한 기술 요구사항을 분석하고 확장 가능한 아키텍처를 설계합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
