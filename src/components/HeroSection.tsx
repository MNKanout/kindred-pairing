import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
const heroIllustration = "/lovable-uploads/79b1a218-de72-4c32-b45b-3073d63a55e9.png";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-xl animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '4s' }}
        />
        <div 
          className="absolute bottom-32 right-20 w-24 h-24 bg-accent rounded-full blur-lg animate-pulse"
          style={{ animationDelay: '2s', animationDuration: '3s' }}
        />
        <div 
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary rounded-full blur-md animate-pulse"
          style={{ animationDelay: '1s', animationDuration: '5s' }}
        />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              {t('hero.title')}{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Afaf
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {t('hero.description')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="shadow-soft hover:shadow-lg transition-all duration-300">
              {t('hero.cta')}
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-accent transition-all duration-300">
              {t('hero.secondary')}
            </Button>
          </div>

        </div>

        {/* Illustration */}
        <div className="relative">
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
            <img 
              src={heroIllustration} 
              alt="Diverse families learning together"
              className="w-full h-auto rounded-3xl shadow-card"
            />
          </div>
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-60 animate-pulse" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;