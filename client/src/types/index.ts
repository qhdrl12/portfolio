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

export interface Project {
  title: string;
  description: string;
  imageUrl?: string;
  categories: string[];
  link?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface UserData {
  name: string;
  headline: string;
  portraitUrl?: string;
  about: string[];
  education: string[];
  experience: string[];
  resumeUrl?: string;
  portfolioUrl?: string;
  email: string;
  phone?: string;
  location: string;
  socialLinks: SocialLink[];
  designSkills: Skill[];
  technicalSkills: Skill[];
  tools: Tool[];
  projects: Project[];
}
