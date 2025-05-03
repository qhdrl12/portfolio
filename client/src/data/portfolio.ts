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
      isMain: true,
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
      isMain: true,
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
      title: "사내 AI 서비스 환경 구축",
      description: "금융 환경 특성상 self-hosted 방식으로 Dify, LabelStudio, Langfuse 등 다양한 AI 도구들을 내부에 구축하여 AI 역량 강화 및 개발 생산성을 향상시키는 환경 조성",
      categories: ["Dify", "LabelStudio", "Langfuse", "Milvus", "Workflow", "Agent", "MCP", "RAG"],
      state: "개발 진행 중",
      isMain: true,
      detailContent: {
        overview: "금융 보안 환경 내에서 AI 개발 생산성을 높이기 위해 다양한 오픈소스 도구들을 self-hosted로 구축하고 통합하여 내부 개발자들이 AI 기반 서비스를 효율적으로 개발할 수 있는 환경을 조성하고 있습니다.",
        architecture: {
          imageUrl: ""
        },
        results: [
          {
            title: "Dify 기반 AI Playground 환경 구축",
            description: "통합 AI 개발을 위한 Dify 기반 Playground 환경을 구축했습니다. Workflow, Agent, MCP Tools등 다양한 AI 개발 기능을 제공하여 개발자들이 효율적으로 AI 애플리케이션을 테스트할 수 있는 환경을 조성했습니다.",
            imageUrl: "/images/projects/ai-platform/dify.png"
          },
          {
            title: "Milvus 벡터 데이터베이스 구축",
            description: "효율적인 벡터 검색 기반의 RAG 시스템을 지원하기 위해 Milvus vectorstore를 구축하고 운영했습니다. 대규모 데이터셋에서 신속하고 정확한 검색을 가능하게 하여 AI 모델의 성능을 향상시켰습니다.",
            imageUrl: "/images/projects/ai-platform/milvus-admin.png"
          },
          {
            title: "LabelStudio 및 Langfuse 구축",
            description: "데이터 라벨링을 위한 LabelStudio와 LLM trace 분석을 위한 Langfuse를 내부 시스템에 구축하고 서비스 연동을 완료했습니다. 이를 통해 고품질 학습 데이터 생성과 AI 모델 성능 분석 환경을 제공하였습니다.",
            imageUrl: "/images/projects/ai-platform/labelstudio.png"
          },
          {
            title: "프롬프트 관리 도구 및 데이터셋 평가 시스템 개발",
            description: "AI 서비스 개발 효율성을 높이기 위한 프롬프트 관리 도구와 데이터셋 평가 연동 도구를 자체 개발을 진행하고 있습니다.",
            imageUrl: "/images/projects/ai-platform/prompt.png"
          }
        ],
        myRole: [
          "Dify 기반 AI Playground 환경 구축",
          "LabelStudio와 Langfuse 시스템 내부 구축 및 서비스 연동",
          "Milvus vectorstore 구성 및 운영, RAG 서비스 연동",
          "프롬프트 관리 도구 및 데이터셋 평가 연동 도구 개발"
        ],
        impact: "이 환경 구축을 통해 사내 AI 서비스 개발 속도가 약 70% 향상되었으며, 자체 구축된 도구들을 통해 프롬프트 최적화 및 데이터 품질 향상으로 AI 서비스의 전반적인 품질이 크게 개선될것으로 예상합니다."
      }
    },
    {
      title: "AICC 상담 평가 AI",
      description: "AICC 상담 평가 AI는 LLM을 활용하여 상담 유형별 내용을 정해진 평가 기준에 따라 100% 자동 평가함으로써, 기존 수작업 평가의 한계를 넘어 상담 품질을 획기적으로 향상시키는 서비스",
      categories: ["LLM", "COT", "vLLM", "LangGraph", "LangChain", "FastAPI", "Monitoring"],
      state: "Coming Soon",
      isMain: true,
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
      title: "Kakaopay AI 고객센터 FAQ & 주식봇",
      description: "사용자의 카카오페이 거래 데이터를 분석하여 소비 패턴을 시각화하고 맞춤형 절약 팁을 제공하는 간단한 데이터 분석 도구",
      categories: ["Gemma", "Mistral-Nemo", "RAG", "Langchain", "Milvus", "React", "Monitoring"],
      state: "개발 완료",
      isMain: false,
      detailContent: {
        overview: "LLM을 활용해 FAQ 문의 대응과 주식 정보 제공을 자동화함으로써, 카카오페이의 서비스 품질과 사용자 경험을 개선하였습니다.",
        architecture: {
          imageUrl: ""
        },
        results: [
          {
            title: "RAG 기반 고객센터 FAQ",
            description: "카카오페이 고객들의 자주 묻는 질문(FAQ)에 대해 자연어로 이해하고 답변할 수 있는 LLM 기반의 고객센터 FAQ 시스템을 구축했습니다. 다양한 표현을 이해하고 문맥에 맞는 정확한 답변을 제공함으로써 고객 만족도를 높이고, 상담 효율을 개선합니다.",
            imageUrl: "/images/projects/faq/faq.png"
          },
          {
            title: "LLM 기반 주식봇",
            description: "LLM을 활용해 주식 토론방 요약, 실적 분석, 기업 개요 요약 기능을 제공하는 서비스입니다. 사용자는 방대한 주식 정보를 간단하고 직관적으로 확인할 수 있어, 빠르고 효율적인 투자 판단이 가능합니다.",
            imageUrl: "/images/projects/faq/stock.png"
          }
        ],
        myRole: [
          "고객센터 FAQ & 주식봇 시스템 설계",
          "Langchain RAG 기반 API 개발",
          "Cache 최적화 및 모니터링 시스템 구축",
          "주식 데이터 수집 파이프라인 구축",
          "FAQ 데이터 임베딩 및 업로드 관리를 위한 관리자 페이지 개발"
        ],
        impact: "고객센터 FAQ 탐색 시간을 30% 감소 시켰습니다. 주식봇은 복잡한 주식 정보를 간결하게 요약하여 제공함으로써, 정보 탐색 시간을 줄이는데 기여하였습니다."
      }
    }
  ]
};
