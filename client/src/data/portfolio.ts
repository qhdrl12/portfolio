import { UserData } from "@/types";

export const userData: UserData = {
  name: "이봉기",
  title: "Kakaopay AI Backend Developer",
  headline: "생성형 AI 서비스 개발자",
  about: [
    "뛰어난 사용자 서비스 경험을 위한 AI 솔루션을 개발합니다.",
    "현재는 카카오페이 AI 기반 프로덕트에 기여하고 있습니다."
  ],
  detailAbout: [
    "동서대학교에서 컴퓨터공학을 전공한 후 지나웍스와 유엔젤에서의 경험을 바탕으로 카카오페이에 입사해 데이터 수집 업무를 시작으로 얼굴 인식 시스템을 개발하고, 현재는 AI 서비스 엔지니어로서 사람들이 보다 쉽고 편리하게 기술을 활용할 수 있도록 돕는 역할을 하고 있습니다."
  ],
  education: [
    "동서대학교 컴퓨터공학과, 2007-2014"
  ],
  experience: [
    "카카오페이, 생성형 AI 개발자 (2018-현재)",
    "유엔젤, 대리 (2017-2018)",
    "지나웍스, 주임 연구원 (2013-2017)"
  ],
  resumeUrl: "https://example.com/resume.pdf",
  portfolioUrl: "https://github.com/qhdrl12",
  email: "qhdrl12@gmail.com",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/qhdrl12",
      icon: "fab fa-github"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/bongki-lee-3b53b911a/",
      icon: "fab fa-linkedin-in"
    },
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
    { name: "Java", icon: "fa-brands fa-java" },
    { name: "React", icon: "fab fa-react" },
    { name: "Docker", icon: "fab fa-docker" },
    { name: "Kubernetes", icon: "fas fa-dharmachakra" },    
    { name: "AWS", icon: "fab fa-aws" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "vLLM", icon: "/images/icons/vllm.svg" },
    { name: "OpenAI", icon: "/images/icons/openai.png" },
    { name: "Langchain", icon: "/images/icons/langchain.png" }
  ],
  projects: [
    {
      title: "KakaoPay 보험진단 AI",
      description: "카카오페이 보험진단 AI는 생성형 AI 기술을 활용하여 사용자가 가진 복잡한 보험 상품과 막막한 건강 관리에 대한 걱정을 해소하고, 개인 맞춤형 정보를 제안하는 서비스",
      categories: ["LLM", "RAG", "vLLM", "LangChain", "FastAPI", "K8s", "CSP", "Monitoring"],
      state: "개발 완료",
      detailContent: {
        overview: "보험진단 AI는 사용자의 보험 상품과 건강 상태를 분석하여 맞춤형 정보를 제공하는 카카오페이의 AI 서비스입니다. LLM과 RAG 기술을 활용하여 복잡한 보험 정보를 이해하기 쉽게 설명하고 보험을 진단합니다.",
        architecture: {
          imageUrl: "/images/projects/insurance-ai/architecture.png"
        },
        results: [
          {
            title: "개인화된 보험 진단 리포트",
            description: "사용자의 기존 보험 상품과 건강 검진 결과를 분석하여 생성한 맞춤형 리포트를 활용하여 정확한 정보를 제공합니다. 이를 통해 사용자는 자신의 보험 보장 현황과 부족한 부분을 한눈에 파악할 수 있습니다.",
            imageUrl: "/images/projects/insurance-ai/main.jpeg"
          },
          {
            title: "대화 이력 기반 태깅 및 모델 개선 파이프라인 구축",
            description: "사용자 대화 로그를 기반으로 주요 발화, 의도, 응답 품질등을 태깅하고, 이를 통해 모델 성능을 지속적으로 개선하는 데이터 루프를 구축했습니다. 특히, 잘못된 응답 유형, 부적절한 정보 제공 등을 분류하고 이를 정제된 학습 데이터로 전환하여 정기적인 파인튜닝 및 평가에 반영하고 있습니다.",
            imageUrl: "/images/projects/insurance-ai/main2.jpeg"
          }
        ],
        myRole: [
          "프로젝트 아키텍처 설계 및 기술 스택 선정",
          "RAG 설계 및 구현",
          "vLLM 기반 추론 서버 구축",
          "LangChain/LangGraph을 활용한 Workflow API 개발",
          "Kubernetes 환경 구성 및 배포 자동화",
          "서비스 모니터링 시스템 구축(Prometheus/Grafana)"
        ],
        impact: "해당 서비스는 카카오페이 사용자의 보험 이해도를 높이고, 건강 상태에 적절한 보장을 제안함으로써, 금융 건정성을 높이고 효율적인 보험 관리가 가능하도록 지원할 것으로 기대됩니다."
      }
    },
    {
      title: "외국인 E-KYC 서비스",
      description: "외국인 eKYC 서비스는 안면인식과 신분증 인식을 활용하여 비대면 환경에서 외국인 고객의 신원을 신뢰성 있게 확인하는 전자 고객확인제도 서비스",
      categories: ["얼굴인식", "신분증인식", "FastAPI", "Triton Inference Server", "Android SDK", "Admin", "Monitoring"],
      state: "개발 완료",
      detailContent: {
        overview: "외국인 E-KYC 서비스는 비대면 환경에서 외국인 고객의 신원을 확인하는 시스템입니다. 얼굴 인식과 신분증 인식 기술을 결합하여 안전하고 효율적인 고객 확인 과정을 제공합니다.",
        architecture: {
          imageUrl: "/images/projects/ekyc-service/architecture.png"
        },
        results: [
          {
            title: "신분증/얼굴 인식 시스템",
            description: "딥러닝 기반의 얼굴 인식 기술을 활용하여 사용자의 얼굴과 신분증 사진을 대조합니다. 실시간 Liveness 감지 기능을 통해 사진이나 영상을 이용한 우회 시도를 방지합니다.",
            imageUrl: "/images/projects/ekyc-service/ocr_face.png"
          },
          {
            title: "안전한 서비스 제공",
            description: "SDK 단에서의 라이브니스 검사를 통해 실제 사용자 여부를 판별하며, 데이터 전송시에는 이중 암호화 방식을 적용하여 보안을 강화하였습니다. 또한 서버에서는 스푸핑 탐지 기능을 통해 위조 시도를 확인하며, Strategy 관리 체계를 통해 악의적인 공격 요청을 차단합니다.",
            imageUrl: "/images/projects/ekyc-service/security.png"
          }
        ],
        myRole: [
          "얼굴 인식 알고리즘 개발 및 최적화",
          "신분증 인식 시스템 설계 및 구현",
          "FastAPI 기반 백엔드 서비스 개발",
          "Android SDK 개발 및 배포",
          "관리자 대시보드 설계 및 구현",
          "모니터링 시스템 구축"
        ],
        impact: "이 서비스 도입 후 외국인 고객의 계정 개설 시간이 평균 30분에서 3분으로 단축되었으며, 신원 확인 과정의 정확도는 99.7%에 달합니다. 또한 비용 절감 효과가 연간 약 5억 원에 이르는 것으로 추산됩니다."
      }
    },
    {
      title: "AICC 상담 평가 AI",
      description: "AICC 상담 평가 AI는 LLM을 활용하여 상담 유형별 내용을 정해진 평가 기준에 따라 100% 자동 평가함으로써, 기존 수작업 평가의 한계를 넘어 상담 품질을 획기적으로 향상시키는 서비스",
      categories: ["LLM", "COT", "vLLM", "LangGraph", "LangChain", "FastAPI", "Monitoring"],
      state: "Coming Soon",
      detailContent: {
        overview: "AICC 상담 평가 AI는 고객 상담 품질을 자동으로 평가하는 시스템입니다. 기존에 수작업으로 이루어지던 상담 평가를 LLM 기반의 AI가 대체함으로써 평가의 일관성과 효율성을 대폭 향상시켰습니다.",
        architecture: {
          imageUrl: "/images/projects/aicc-evaluation/empty.png"
        },
        results: [
          {
            title: "자동화된 상담 평가 시스템",
            description: "LLM을 활용해 상담 내용을 분석하고 정해진 평가 기준에 따라 자동으로 평가합니다. 상담사의 응대 태도, 정보 제공의 정확성, 문제 해결 능력 등 다양한 측면에서 객관적인 평가를 제공합니다.",
            imageUrl: "/images/projects/aicc-evaluation/empty.png"
          }
        ],
        myRole: [
          "상담 평가 시스템 설계",
          "Chain-of-Thought 프롬프트 엔지니어링",
          "LangGraph를 활용한 Workflow 구축",
          "vLLM 기반 추론 서버 구축",
          "FastAPI 기반 백엔드 서비스 개발",
          "실시간 평가 모니터링 시스템 구현"
        ],
        impact: "이 서비스를 통해 상담 평가에 소요되는 시간이 99% 이상 감소하고, 평가의 일관성이 크게 향상되었습니다. 또한 상담사들에게 즉각적인 피드백을 제공함으로써 상담 품질이 전반적으로 20% 이상 향상될 것으로 기대됩니다."
      }
    },
    {
      title: "KakaoPay AI Platform 1.0 구축",
      description: "H200 및 L40s GPU 구성 및 인프라 설계를 기반으로, 학습, 서빙, 에이전트, 플레이그라운드 환경을 포괄하며 GPU 자원을 효율적으로 활용할 수 있는 플랫폼을 구축하는 것을 목표로 합니다",
      categories: ["GPU Infra", "모델 학습", "모델 서빙", "Agent", "MCP", "K8s", "Kubeflow"],
      state: "Coming Soon",
      detailContent: {
        overview: "KakaoPay AI Platform은 카카오페이 내부 개발자들이 AI 모델을 효율적으로 학습, 배포, 모니터링할 수 있는 통합 플랫폼입니다. 최신 GPU 인프라를 기반으로 모델 개발부터 서비스 배포까지 전 과정을 지원합니다.",
        architecture: {
          imageUrl: "/images/projects/ai-platform/empty.png"
        },
        results: [
          {
            title: "GPU 인프라 구축",
            description: "On-premise 환경에 구축된 H200 및 L40s GPU를 기반으로, Kubernetes 기반 GPU 리소스 관리 시스템을 설계하고 구현하여 GPU 자원의 효율적으로 분배 및 활용이 가능하도록 인프라를 최적화합니다. 또한, 통합 배포 시스템과의 연동을 통해 편리한 배포 지원과 모니터링 구성 및 로그 수집 자동화 쳬계를 구축하여 안정적인 운영 기반을 마련하였습니다.",
            imageUrl: "/images/projects/ai-platform/empty.png"
          },
          {
            title: "통합 AI 개발 환경 제공",
            description: "Kubeflow 기반의 모델 학습 및 실험 관리 등 ML 파이프라인을 지원하고, MCP, RAG 연동을 통한 편리한 Agent 구축 및 Playground 환경에서의 다양한 실험 수행이 가능하며, 프롬프트와 데이터셋 관리 등 AI 서비스 개발을 위한 통합 기능을 제공합니다.",
            imageUrl: "/images/projects/ai-platform/empty.png"
          }
        ],
        myRole: [
          "Kubernetes(GPU) 기반 리소스 관리 시스템 개발",
          "Kubeflow 기반 ML 파이프라인 구축",
          "모델 서빙 플랫폼 아키텍처 설계",
          "AI 에이전트 플레이그라운드 개발"
        ],
        impact: "이 플랫폼을 통해 카카오페이 내 AI 모델 개발 및 배포 시간이 평균 70% 단축될 것으로 예상됩니다. 또한 학습 및 평가 지원을 통해 GPU 자원을 효율적으로 활용할 수 있도록 지원합니다."
      }
    }
  ]
};
