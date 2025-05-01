import { UserData } from "@/types";

export const userData: UserData = {
  name: "홍길동",
  headline: "UX/UI 디자이너 & 프론트엔드 개발자",
  about: [
    "디자인과 개발 모두에 경험이 있는 열정적인 디자이너입니다. 5년 전부터 창의적인 여정을 시작했으며, 그 이후로 의미 있는 디지털 경험을 만들어 왔습니다.",
    "아름다울 뿐만 아니라 사용자의 실제 문제를 해결하는 디자인을 만드는 것을 중요하게 생각합니다. 저의 접근 방식은 미적 감각과 실용성을 결합합니다.",
    "디자인 작업을 하지 않을 때는 자연 탐험, 새로운 요리 실험, 또는 좋은 책을 읽으며 시간을 보냅니다."
  ],
  education: [
    "Johns Hopkins University, 컴퓨터 과학 / 응용 수학 및 통계학 전공 (2014-2018)",
    "Johns Hopkins University, 연구 조교 (2016-2017)"
  ],
  experience: [
    "페이스북 / 메타, 소프트웨어 엔지니어 (2018-현재)",
    "Moloco, 소프트웨어 엔지니어 인턴 (2017-2018)"
  ],
  email: "hello@youremail.com",
  phone: "010-1234-5678",
  location: "서울, 대한민국",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/",
      icon: "fab fa-linkedin-in"
    },
    {
      platform: "GitHub",
      url: "https://github.com/",
      icon: "fab fa-github"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/",
      icon: "fab fa-twitter"
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/",
      icon: "fab fa-instagram"
    }
  ],
  designSkills: [
    { name: "UI/UX 디자인", level: 90 },
    { name: "시각 디자인", level: 85 },
    { name: "브랜드 아이덴티티", level: 80 },
    { name: "와이어프레임 & 프로토타이핑", level: 95 }
  ],
  technicalSkills: [
    { name: "HTML & CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 90 },
    { name: "Figma & Sketch", level: 95 }
  ],
  tools: [
    { name: "React", icon: "fab fa-react" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "Python", icon: "fab fa-python" },
    { name: "Java", icon: "fab fa-java" }
  ],
  projects: [
    {
      title: "웹사이트 리디자인",
      description: "사용자 경험과 전환율 최적화에 초점을 맞춘 이커머스 플랫폼의 완전한 리디자인 프로젝트입니다.",
      categories: ["UX/UI 디자인", "브랜딩"],
      link: "#"
    },
    {
      title: "모바일 앱 디자인",
      description: "일상 운동 루틴을 위한 직관적인 인터페이스와 매력적인 사용자 경험을 갖춘 피트니스 추적 앱입니다.",
      categories: ["모바일 UI", "인터랙션 디자인"],
      link: "#"
    },
    {
      title: "브랜드 아이덴티티",
      description: "지속 가능한 라이프스타일 기업을 위한 로고, 색상 팔레트 및 메시징을 포함한 완전한 브랜드 아이덴티티 시스템입니다.",
      categories: ["브랜딩", "시각 디자인"],
      link: "#"
    }
  ]
};
