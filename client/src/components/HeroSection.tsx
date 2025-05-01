import { motion } from "framer-motion";
import { userData } from "@/data/portfolio";

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 md:pt-40 pb-20 md:pb-32 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#F2CC8F]/30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#E07A5F]/20 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#E07A5F] font-sans text-lg mb-3 opacity-90">Hello, I'm</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-[#3D405B] mb-6">{userData.name}</h1>
          <p className="font-sans text-xl md:text-2xl text-[#333333]/80 leading-relaxed mb-8">
            I create <span className="text-[#E07A5F] font-medium">thoughtful designs</span> and craft <span className="text-[#E07A5F] font-medium">engaging experiences</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <motion.a 
              href="#projects" 
              className="px-8 py-3 bg-[#E07A5F] text-white font-sans font-medium rounded-lg shadow-lg hover:shadow-xl hover:bg-[#E07A5F]/90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              className="px-8 py-3 bg-transparent border-2 border-[#E07A5F] text-[#E07A5F] font-sans font-medium rounded-lg hover:bg-[#E07A5F]/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
        
        <div className="mt-16 md:mt-20 flex justify-center">
          <motion.a 
            href="#about" 
            className="text-[#3D405B]/60 hover:text-[#E07A5F] transition-all duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            <i className="fas fa-chevron-down text-2xl"></i>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
