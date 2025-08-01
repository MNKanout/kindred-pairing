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
    <section className="py-24 bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="relative z-10">
          <img 
            src="/lovable-uploads/968e4006-8463-464e-9699-e043eec0e330.png" 
            alt="Your new honey moon is coming"
            className="w-full h-[800px] object-cover rounded-3xl shadow-card"
            style={{
              objectPosition: `center ${50 + scrollY * 0.03}%`,
              transition: 'object-position 0.1s ease-out'
            }}
          />
        </div>
        {/* Floating elements */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-60 animate-pulse" />
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};

export default HoneymoonSection;