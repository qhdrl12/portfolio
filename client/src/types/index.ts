export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Tool {
  name: string;
  icon: string;
}

export interface ProjectResult {
  title: string;
  description: string;
  imageUrl: string;
}

export interface Architecture {
  imageUrl: string;
}

export interface ProjectDetailContent {
  overview: string;
  architecture?: Architecture;
  results: ProjectResult[];
  myRole: string[];
  impact: string;
}

export interface Project {
  title: string;
  description: string;
  imageUrl?: string;
  categories: string[];
  link?: string;
  state?: string;
  content?: string;
  detailContent?: ProjectDetailContent;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface UserData {
  name: string;
  title?: string;
  headline: string;
  portraitUrl?: string;
  about: string[];
  detailAbout: string[];
  education: string[];
  experience: string[];
  resumeUrl?: string;
  portfolioUrl?: string;
  email: string;
  socialLinks: SocialLink[];
  designSkills: Skill[];
  technicalSkills: Skill[];
  tools: Tool[];
  projects: Project[];
}
