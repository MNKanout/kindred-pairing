import { Card, CardContent } from "@/components/ui/card";
import aboutIllustration from "@/assets/about-illustration.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Illustration */}
          <div className="relative order-2 lg:order-1">
            <img 
              src={aboutIllustration} 
              alt="Norwegian integration concept"
              className="w-full h-auto rounded-3xl shadow-card"
            />
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary opacity-20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent opacity-30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Om{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Afaf Instituttet
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Afaf Instituttet er et ledende senter for utdanning og integrasjon som spesialiserer seg på å støtte muslimske familier i deres reise mot en vellykket tilpasning til det norske samfunnet.
              </p>
            </div>

            {/* Mission Cards */}
            <div className="space-y-4">
              <Card className="border-0 shadow-soft hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Utdanning</h3>
                      <p className="text-muted-foreground">
                        Omfattende utdanningsprogrammer som kombinerer akademisk læring med kulturell forståelse.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Coaching</h3>
                      <p className="text-muted-foreground">
                        Personlig coaching og mentoring for å bygge selvtillit og navigere norsk kultur.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-2xl">💡</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Rådgivning</h3>
                      <p className="text-muted-foreground">
                        Ekspert rådgivning om juridiske, sosiale og praktiske aspekter ved livet i Norge.
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