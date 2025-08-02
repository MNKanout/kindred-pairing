import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import servicesIllustration from "@/assets/services-illustration.jpg";

const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t('services.education.title'),
      description: t('services.education.description'),
      icon: "📚",
      features: ["Partner Selection Guidance", "Conflict Resolution", "Family Duties", "Marriage Expectations"],
      slug: "education"
    },
    {
      title: t('services.platform.title'), 
      description: t('services.platform.description'),
      icon: "💕",
      features: ["Islamic Values Based", "Cultural Alignment", "Secure Matching", "Privacy Protection"],
      slug: "platform"
    },
    {
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      icon: "🤝",
      features: ["Personal Consultations", "Pre-Marriage Counseling", "Relationship Guidance", "Flexible Appointments"],
      slug: "consulting"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            {t('services.title')}{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Illustration */}
        <div className="flex justify-center mb-16">
          <div className="relative max-w-md">
            <img 
              src={servicesIllustration} 
              alt="Educational services illustration"
              className="w-full h-auto rounded-2xl shadow-card"
            />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary opacity-20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent opacity-30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-soft hover:shadow-card transition-all duration-300 group hover:-translate-y-2"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {service.slug !== 'consulting' && (
                  <Link to={`/services/${service.slug}`}>
                    <Button variant="outline" className="w-full mt-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      {t('services.cta')}
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;