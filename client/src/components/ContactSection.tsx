import { useState } from "react";
import { motion } from "framer-motion";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { userData } from "@/data/portfolio";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to backend
      const response = await apiRequest("POST", "/api/contact", formData);
      
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      
      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Show success toast
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#F4F1DE]/50 relative section-fade-in">
      {/* Decorative blob */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#F2CC8F]/30 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#3D405B] mb-6">Get In Touch</h2>
          <div className="h-1 w-20 bg-[#E07A5F] mb-8 mx-auto"></div>
          <p className="font-sans text-[#333333]/80 leading-relaxed">
            Have a project in mind or just want to say hello? I'd love to hear from you!
            Feel free to reach out using the contact form or through my social media.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-2/5">
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <h3 className="font-display text-2xl font-semibold text-[#3D405B] mb-6">Contact Information</h3>
                
                <div className="space-y-6 font-sans">
                  {userData.email && (
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#E07A5F]/10 flex items-center justify-center mr-4">
                        <i className="fas fa-envelope text-[#E07A5F]"></i>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-[#333333]/60 mb-1">Email</h4>
                        <a href={`mailto:${userData.email}`} className="text-[#3D405B] hover:text-[#E07A5F] transition-colors duration-300">{userData.email}</a>
                      </div>
                    </div>
                  )}
                  
                  {userData.phone && (
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#E07A5F]/10 flex items-center justify-center mr-4">
                        <i className="fas fa-phone text-[#E07A5F]"></i>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-[#333333]/60 mb-1">Phone</h4>
                        <a href={`tel:${userData.phone}`} className="text-[#3D405B] hover:text-[#E07A5F] transition-colors duration-300">{userData.phone}</a>
                      </div>
                    </div>
                  )}
                  
                  {userData.location && (
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#E07A5F]/10 flex items-center justify-center mr-4">
                        <i className="fas fa-map-marker-alt text-[#E07A5F]"></i>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-[#333333]/60 mb-1">Location</h4>
                        <p className="text-[#3D405B]">{userData.location}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-10">
                  <h4 className="font-sans text-sm font-medium text-[#333333]/60 mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {userData.socialLinks.map((social, index) => (
                      <motion.a 
                        key={index}
                        href={social.url} 
                        className="h-10 w-10 rounded-full bg-[#3D405B] flex items-center justify-center text-white hover:bg-[#E07A5F] transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className={social.icon}></i>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5">
              <form 
                className="bg-white p-8 rounded-lg shadow-md" 
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block font-sans text-sm font-medium text-[#333333]/70 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E07A5F]/50 focus:border-[#E07A5F] transition-colors duration-300" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-sans text-sm font-medium text-[#333333]/70 mb-2">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E07A5F]/50 focus:border-[#E07A5F] transition-colors duration-300" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block font-sans text-sm font-medium text-[#333333]/70 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E07A5F]/50 focus:border-[#E07A5F] transition-colors duration-300" 
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block font-sans text-sm font-medium text-[#333333]/70 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E07A5F]/50 focus:border-[#E07A5F] transition-colors duration-300" 
                    placeholder="Hello, I'd like to discuss a project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-[#E07A5F] text-white font-sans font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-[#E07A5F]/90 transition-all duration-300 disabled:opacity-70"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
