import { useState } from "react";
import { motion } from "framer-motion";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { userData } from "@/data/portfolio";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 백엔드로 폼 데이터 전송
      const response = await apiRequest("POST", "/api/contact", formData);
      
      if (!response.ok) {
        throw new Error("메시지 전송 실패");
      }
      
      // 폼 초기화
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // 성공 메시지 표시
      toast({
        title: "메시지가 성공적으로 전송되었습니다!",
        description: "연락해 주셔서 감사합니다. 곧 답변 드리겠습니다.",
      });
    } catch (error) {
      toast({
        title: "메시지 전송 실패",
        description: "나중에 다시 시도해 주세요.",
        variant: "destructive",
      });
      console.error("연락 폼 오류:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative section-fade-in">
      {/* 배경 효과 */}
      <div className="absolute inset-0 dot-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 rounded-full px-3 py-1 text-xs font-medium bg-[#4D8CFF]/10 text-[#4D8CFF]">
            연락처 & 문의
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">함께 일해보세요</h2>
          <div className="h-1 w-20 bg-[#4D8CFF] mb-8 mx-auto"></div>
          <p className="font-sans text-white/70 leading-relaxed">
            AI 프로젝트 협업이나 기술 관련 문의가 있으신가요? 아래 양식으로 연락주세요.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form 
            className="bg-[#151515]/80 backdrop-blur-sm border border-[#333]/40 rounded-xl p-8" 
            onSubmit={handleSubmit}
          >
            <h3 className="font-display text-xl font-bold text-white mb-6">메시지 보내기</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block font-sans text-sm font-medium text-white/70 mb-2">이름</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-[#1D1D1D] border border-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4D8CFF]/50 focus:border-[#4D8CFF] text-white transition-colors duration-300" 
                  placeholder="홍길동"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-sans text-sm font-medium text-white/70 mb-2">이메일</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-[#1D1D1D] border border-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4D8CFF]/50 focus:border-[#4D8CFF] text-white transition-colors duration-300" 
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block font-sans text-sm font-medium text-white/70 mb-2">제목</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-3 bg-[#1D1D1D] border border-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4D8CFF]/50 focus:border-[#4D8CFF] text-white transition-colors duration-300" 
                placeholder="AI 프로젝트 협업 문의"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block font-sans text-sm font-medium text-white/70 mb-2">메시지</label>
              <textarea 
                id="message" 
                rows={5} 
                className="w-full px-4 py-3 bg-[#1D1D1D] border border-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4D8CFF]/50 focus:border-[#4D8CFF] text-white transition-colors duration-300" 
                placeholder="안녕하세요, 생성형 AI 프로젝트에 대해 논의하고 싶습니다..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <motion.button 
              type="submit" 
              className="w-full px-6 py-3 bg-gradient-to-r from-[#4D8CFF] to-[#7B5FFF] text-white font-sans font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 blue-glow"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? "전송 중..." : "메시지 보내기"}
            </motion.button>
          </form>
          
          <div className="mt-8 text-center">
            <a href={`mailto:${userData.email}`} className="text-white/70 hover:text-[#4D8CFF] transition-colors duration-300">
              {userData.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;