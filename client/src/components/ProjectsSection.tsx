import { motion } from "framer-motion";
import { userData } from "@/data/portfolio";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-[#F4F1DE]/50 section-fade-in">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#3D405B] mb-6">My Projects</h2>
          <div className="h-1 w-20 bg-[#E07A5F] mb-8 mx-auto"></div>
          <p className="font-sans text-[#333333]/80 leading-relaxed">
            Here's a selection of my recent work. Each project represents a unique challenge
            and showcases different aspects of my design philosophy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userData.projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md project-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="h-56 overflow-hidden">
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-[#E07A5F]/20 to-[#F2CC8F]/20 flex items-center justify-center">
                    <span className="text-[#3D405B] font-medium">Project Image</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-[#3D405B] mb-2">{project.title}</h3>
                <p className="text-[#333333]/70 text-sm mb-4">{project.categories.join(', ')}</p>
                <p className="font-sans text-[#333333]/80 mb-6">{project.description}</p>
                {project.link && (
                  <a 
                    href={project.link} 
                    className="text-[#E07A5F] font-medium hover:text-[#E07A5F]/80 transition-colors duration-300 inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Details</span>
                    <i className="fas fa-arrow-right ml-2 text-sm"></i>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        {userData.portfolioUrl && (
          <div className="text-center mt-12">
            <a 
              href={userData.portfolioUrl} 
              className="inline-block px-8 py-3 border-2 border-[#E07A5F] text-[#E07A5F] font-sans font-medium rounded-lg hover:bg-[#E07A5F] hover:text-white transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
