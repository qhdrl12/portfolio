import { UserData } from "@/types";

export const userData: UserData = {
  name: "이봉기",
  title: "카카오페이 AI 개발자",
  headline: "카카오페이 생성형 AI 개발을 담당하고 있습니다",
  about: [
    "안녕하세요, 카카오페이에서 생성형 AI 개발을 담당하고 있는 이봉기입니다. 사용자 경험 중심의 AI 솔루션을 개발하는 것을 좋아합니다."
  ],
  education: [
    "서울대학교 컴퓨터공학과, 학사 (2007-2014)"
  ],
  experience: [
    "카카오페이, 생성형 AI 개발자 (2018-현재)",
    "유엔젤, 선임연구원 (2017-2018)",
    "지나웍스, 연구원 (2013-2017)"
  ],
  resumeUrl: "https://example.com/resume.pdf",
  portfolioUrl: "https://github.com/bongkilee",
  email: "bongki.lee@kakaopay.com",
  phone: "010-9876-5432",
  location: "서울, 대한민국",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/bongkilee",
      icon: "fab fa-github"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/bongkilee",
      icon: "fab fa-linkedin-in"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/bongkilee",
      icon: "fab fa-twitter"
    }
  ],
  designSkills: [
    { name: "AI 시스템 설계", level: 95 },
    { name: "데이터 파이프라인 설계", level: 90 },
    { name: "UX/UI 디자인", level: 80 },
    { name: "서비스 아키텍처 설계", level: 85 }
  ],
  technicalSkills: [
    { name: "Python", level: 95 },
    { name: "TensorFlow/PyTorch", level: 90 },
    { name: "JavaScript/TypeScript", level: 85 },
    { name: "NLP & 생성형 AI", level: 95 },
    { name: "Go", level: 80 },
    { name: "Kubernetes", level: 75 }
  ],
  tools: [
    { name: "Python", icon: "fab fa-python" },
    { name: "TensorFlow", icon: "fas fa-brain" },
    { name: "PyTorch", icon: "fas fa-fire" },
    { name: "React", icon: "fab fa-react" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "TypeScript", icon: "fab fa-js" },
    { name: "Docker", icon: "fab fa-docker" },
    { name: "Kubernetes", icon: "fas fa-dharmachakra" },
    { name: "AWS", icon: "fab fa-aws" },
    { name: "Git", icon: "fab fa-git-alt" }
  ],
  projects: [
    {
      title: "KakaoPay 챗봇 어시스턴트",
      description: "카카오페이 금융 서비스를 위한 AI 기반 챗봇 시스템으로, 고객 문의에 실시간으로 대응하고 간단한 금융 거래를 도움",
      categories: ["생성형 AI", "자연어 처리", "금융 기술"],
      state: "개발 진행 중"
    },
    {
      title: "송금 패턴 분석 시스템",
      description: "사용자의 송금 패턴을 분석하여 이상 거래를 탐지하고 개인화된 송금 추천을 제공하는 머신러닝 시스템",
      categories: ["데이터 분석", "머신러닝", "보안"],
      state: "알파 테스트 중"
    },
    {
      title: "금융 문서 자동 요약 API",
      description: "복잡한 금융 문서와 계약서를 자동으로 분석하고 핵심 내용을 요약해주는 NLP 기반 API 서비스",
      categories: ["NLP", "API 개발", "문서 분석"],
      state: "2025 출시 예정"
    },
    {
      title: "오픈소스 AI 모델 컨트리뷰션",
      description: "한국어 특화 금융 대화 모델 개발과 관련 오픈소스 프로젝트에 기여한 내용",
      categories: ["오픈소스", "LLM", "한국어 NLP"],
      state: "Coming Soon"
    }
  ]
};
