import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

const HoneymoonSection = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="relative">
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
            <img 
              src="/lovable-uploads/968e4006-8463-464e-9699-e043eec0e330.png" 
              alt="Your new honey moon is coming"
              className="w-2/3 h-auto rounded-3xl shadow-card mx-auto"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            />
          </div>
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-60 animate-pulse" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  );
};

export default HoneymoonSection;