import { UserData } from "@/types";

export const userData: UserData = {
  name: "Your Name",
  headline: "UX/UI Designer & Frontend Developer",
  about: [
    "I'm a passionate designer with a background in both design and development. My creative journey began over 5 years ago, and I've been crafting meaningful digital experiences ever since.",
    "I believe in creating designs that not only look beautiful but also solve real problems for users. My approach combines aesthetic sensibility with practical functionality.",
    "When I'm not designing, you can find me exploring nature trails, experimenting with new recipes, or diving into a good book."
  ],
  education: [
    "Bachelor of Design, University Name (2015-2019)",
    "UX Design Certification, Design Institute"
  ],
  experience: [
    "Senior Designer, Company Name (2020-Present)",
    "UI/UX Designer, Previous Company (2018-2020)"
  ],
  email: "hello@yourname.com",
  phone: "+1 (234) 567-890",
  location: "Seoul, South Korea",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/",
      icon: "fab fa-linkedin-in"
    },
    {
      platform: "Dribbble",
      url: "https://dribbble.com/",
      icon: "fab fa-dribbble"
    },
    {
      platform: "Behance",
      url: "https://behance.net/",
      icon: "fab fa-behance"
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/",
      icon: "fab fa-instagram"
    }
  ],
  designSkills: [
    { name: "UI/UX Design", level: 90 },
    { name: "Visual Design", level: 85 },
    { name: "Brand Identity", level: 80 },
    { name: "Wireframing & Prototyping", level: 95 }
  ],
  technicalSkills: [
    { name: "HTML & CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "Adobe Creative Suite", level: 90 },
    { name: "Figma & Sketch", level: 95 }
  ],
  tools: [
    { name: "Figma", icon: "fab fa-figma" },
    { name: "Adobe XD", icon: "fab fa-adobe" },
    { name: "Sketch", icon: "fab fa-sketch" },
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" }
  ],
  projects: [
    {
      title: "Website Redesign",
      description: "A complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
      categories: ["UX/UI Design", "Branding"],
      link: "#"
    },
    {
      title: "Mobile App Design",
      description: "A fitness tracking app with intuitive interfaces and engaging user experience for daily workout routines.",
      categories: ["Mobile UI", "Interaction Design"],
      link: "#"
    },
    {
      title: "Brand Identity",
      description: "Complete brand identity system for a sustainable lifestyle company, including logo, color palette and messaging.",
      categories: ["Branding", "Visual Design"],
      link: "#"
    }
  ]
};
