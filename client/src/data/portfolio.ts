import { UserData } from "@/types";

export const userData: UserData = {
  name: "이봉기",
  title: "KAKAOPAY AI ENGINEER",
  headline: "생성형 AI 리더 & 크리에이터",
  about: [
    "다년간 광고와 커리어를 위한 AI 솔루션을 개발합니다.",
    "메타(페이스북)에서 AI 기반 인스타그램 광고 프로젝트에 기여하고 있습니다.",
    "최신 AI 기술과 대규모 언어 모델을 활용하여 혁신적인 솔루션을 제공합니다."
  ],
  education: [
    "서울대학교, 컴퓨터 공학 석사 (2016-2018)",
    "한국과학기술원(KAIST), 전산학과 학사 (2012-2016)"
  ],
  experience: [
    "카카오페이, 생성형 AI 개발자 (2023-현재)",
    "메타(페이스북), 소프트웨어 엔지니어 - Instagram Ads 팀 (2018-2023)"
  ],
  email: "bongki.lee@kakaopay.com",
  phone: "010-9876-5432",
  location: "서울, 대한민국",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/bongkilee",
      icon: "fab fa-linkedin-in"
    },
    {
      platform: "GitHub",
      url: "https://github.com/bongkilee",
      icon: "fab fa-github"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/bongkilee",
      icon: "fab fa-twitter"
    }
  ],
  designSkills: [
    { name: "시스템 아키텍처", level: 95 },
    { name: "UX 리서치", level: 80 },
    { name: "데이터 시각화", level: 85 },
    { name: "API 디자인", level: 90 }
  ],
  technicalSkills: [
    { name: "Python", level: 95 },
    { name: "TensorFlow/PyTorch", level: 90 },
    { name: "React/TypeScript", level: 85 },
    { name: "GPT/LLM 개발", level: 95 },
    { name: "Go", level: 80 },
    { name: "Kubernetes", level: 75 }
  ],
  tools: [
    { name: "Python", icon: "fab fa-python" },
    { name: "TensorFlow", icon: "fas fa-brain" },
    { name: "PyTorch", icon: "fas fa-fire" },
    { name: "React", icon: "fab fa-react" },
    { name: "TypeScript", icon: "fab fa-js" },
    { name: "Docker", icon: "fab fa-docker" },
    { name: "Kubernetes", icon: "fas fa-dharmachakra" },
    { name: "AWS", icon: "fab fa-aws" },
    { name: "Git", icon: "fab fa-git-alt" }
  ],
  projects: [
    {
      title: "비밀 프로젝트 #1",
      description: "생성형 AI를 활용한 차세대 인스타그램 광고 시스템 (자세한 내용은 비공개)",
      categories: ["생성형 AI", "광고 시스템"],
      state: "Coming Soon"
    },
    {
      title: "비밀 프로젝트 #2",
      description: "개인화된 자기개발을 위한 AI 기반 솔루션 개발 중",
      categories: ["AI 코칭", "머신러닝"],
      state: "개발 진행 중"
    },
    {
      title: "비밀 프로젝트 #3",
      description: "대규모 언어 모델을 활용한 챗봇 서비스 개발 및 배포",
      categories: ["LLM", "챗봇"],
      state: "알파 테스트 중"
    },
    {
      title: "비밀 프로젝트 #4",
      description: "AI 기반 스센드 콘텐츠 분석 솔루션",
      categories: ["AI", "컨텐츠 분석"],
      state: "2025 출시 예정"
    }
  ]
};
