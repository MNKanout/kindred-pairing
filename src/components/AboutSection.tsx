import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
const aboutIllustration = "/lovable-uploads/909fc04e-f4db-47e7-91e7-b7b8039ba3fa.png";

const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Illustration */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img 
                src={aboutIllustration} 
                alt="Norwegian integration concept"
                className="w-3/4 h-auto rounded-3xl shadow-card mx-auto"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-60 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Our{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Values
                </span>
              </h2>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Introduction</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At [Institute Name], our core values are rooted in Islamic guidance and prophetic wisdom. We strive to help individuals and families build lives filled with knowledge, love, and community—all based on the teachings of the Qur'an and the Prophet Muhammad (peace be upon him). Our goal is to strengthen society through healthy, loving relationships and enduring family values.
                </p>
              </div>
            </div>

            {/* Mission Cards */}
            <div className="space-y-4">
              <Card className="border-0 shadow-soft hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-2xl">📖</span>
                    </div>
                     <div>
                       <h3 className="text-xl font-semibold text-foreground mb-2">Knowledge & Guidance</h3>
                       <p className="text-muted-foreground mb-3">
                         <strong>Islamic Perspective:</strong>
                       </p>
                       <p className="text-muted-foreground">
                         Knowledge ('ilm) holds a central place in Islam, and the Prophet Muhammad (peace be upon him) said: "Seeking knowledge is an obligation upon every Muslim." (Ibn Majah) Through Islamic knowledge and guidance, we learn about responsibilities, rights, and how to make sound decisions—especially when it comes to choosing the right spouse and building a strong marriage for the sake of Allah.
                       </p>
                     </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-2xl">❤️</span>
                    </div>
                     <div>
                       <h3 className="text-xl font-semibold text-foreground mb-2">Loving Relationships</h3>
                       <p className="text-muted-foreground mb-3">
                         <strong>Islamic Perspective:</strong>
                       </p>
                       <p className="text-muted-foreground">
                         Love (mawaddah) and mercy (rahmah) are the foundations of an Islamic home. Allah says in the Qur'an [30:21]: "And among His signs is that He created for you spouses… and placed between you love and mercy." We emphasize nurturing healthy relationships built on respect, compassion, and mutual support, as highlighted in the Prophet's (peace be upon him) example (sunnah).
                       </p>
                     </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-2xl">🌳</span>
                    </div>
                     <div>
                       <h3 className="text-xl font-semibold text-foreground mb-2">Family Tree & Community</h3>
                       <p className="text-muted-foreground mb-3">
                         <strong>Islamic Perspective:</strong>
                       </p>
                       <p className="text-muted-foreground">
                         A strong family is the cornerstone of a healthy society. The Prophet Muhammad (peace be upon him) said: "The best of you are those who are best to their families." (Tirmidhi) This value encompasses supporting the growth and unity of generations and strengthening the bonds of both family and community in accordance with Islamic principles.
                       </p>
                     </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;