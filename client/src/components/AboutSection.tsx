import { motion } from "framer-motion";
import { userData } from "@/data/portfolio";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white relative section-fade-in">
      {/* 장식 효과 */}
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-[#E07A5F]/10 blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#3D405B] mb-4">소개</h2>
          <div className="h-1 w-20 bg-[#E07A5F] mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#1E293B] text-white rounded-xl overflow-hidden shadow-xl mb-12">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 p-8 bg-[#1E293B]">
                <h3 className="font-display text-2xl font-bold text-[#E07A5F] mb-6">타임라인</h3>
                
                <div className="relative pl-8 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#E07A5F]">
                  <div className="relative">
                    <div className="absolute left-[-29px] top-1.5 w-3 h-3 rounded-full bg-[#E07A5F]"></div>
                    <p className="text-[#E07A5F] font-medium mb-1">2018 - 현재</p>
                    <p className="text-sm">페이스북 / 메타, 소프트웨어 엔지니어 (Instagram Ads Team)</p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-[-29px] top-1.5 w-3 h-3 rounded-full bg-[#E07A5F]"></div>
                    <p className="text-[#E07A5F] font-medium mb-1">2017 - 2018</p>
                    <p className="text-sm">Moloco, 소프트웨어 엔지니어 인턴</p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-[-29px] top-1.5 w-3 h-3 rounded-full bg-[#E07A5F]"></div>
                    <p className="text-[#E07A5F] font-medium mb-1">2016 - 2017</p>
                    <p className="text-sm">Johns Hopkins University, 연구 조교</p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-[-29px] top-1.5 w-3 h-3 rounded-full bg-[#E07A5F]"></div>
                    <p className="text-[#E07A5F] font-medium mb-1">2014 - 2018</p>
                    <p className="text-sm">Johns Hopkins University, 컴퓨터 과학 / 응용 수학 및 통계학 전공</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 p-8 bg-[#111827]">
                <h3 className="font-display text-2xl font-bold text-white mb-6">자기소개</h3>
                
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Johns Hopkins University에서 컴퓨터 과학과 응용 수학을 전공했으며, Facebook(Meta)에서 소프트웨어 엔지니어로 일하고 있습니다. 커리어에게 열렬한 유투브 채널 구독자 16만명을 통해 AI-커리어 인사이트를 실제 홍보하며 글로벌 커뮤니티를 성장시키고 있습니다. 데이터 기반 사고와 실용적 스토리텔링을 결합해, 기술과 비즈니스 사람을 연결하는 가교 역할을 지향합니다.
                  </p>
                  
                  <div className="mt-8">
                    <h4 className="text-[#E07A5F] text-lg font-medium mb-3">
                      <i className="fas fa-lightbulb mr-2"></i>홀스틱 개발자
                    </h4>
                    <p className="text-gray-300 pl-7">웹페이지 제작, 모바일 앱 제작, AI-기반 솔루션 등.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 text-[#333333]/80 font-sans">
            {userData.about.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
