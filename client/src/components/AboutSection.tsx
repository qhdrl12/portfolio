import { motion } from "framer-motion";
import { userData } from "@/data/portfolio";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white relative section-fade-in">
      {/* Decorative blob */}
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-[#E07A5F]/10 blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-2/5">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full absolute top-4 left-4 bg-[#E07A5F]/20 rounded-lg"></div>
                {userData.portraitUrl ? (
                  <img 
                    src={userData.portraitUrl} 
                    alt={`Portrait of ${userData.name}`}
                    className="w-full h-auto rounded-lg shadow-lg relative z-10 object-cover"
                  />
                ) : (
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=800" 
                    alt="Portrait placeholder"
                    className="w-full h-auto rounded-lg shadow-lg relative z-10 object-cover"
                  />
                )}
              </motion.div>
            </div>
            
            <div className="md:w-3/5">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#3D405B] mb-6">About Me</h2>
              <div className="h-1 w-20 bg-[#E07A5F] mb-8"></div>
              
              <div className="space-y-4 text-[#333333]/80 font-sans">
                {userData.about.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">{paragraph}</p>
                ))}
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#3D405B] mb-3">Education</h3>
                  <ul className="space-y-3 font-sans text-[#333333]/80">
                    {userData.education.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-graduation-cap text-[#E07A5F] mt-1 mr-3"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#3D405B] mb-3">Experience</h3>
                  <ul className="space-y-3 font-sans text-[#333333]/80">
                    {userData.experience.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-briefcase text-[#E07A5F] mt-1 mr-3"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {userData.resumeUrl && (
                <div className="mt-10">
                  <a 
                    href={userData.resumeUrl} 
                    className="inline-flex items-center text-[#E07A5F] hover:text-[#E07A5F]/80 font-medium transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Download Resume</span>
                    <i className="fas fa-download ml-2"></i>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
