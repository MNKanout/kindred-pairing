import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import servicesIllustration from "@/assets/services-illustration.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Norsk Språkopplæring",
      description: "Intensive språkkurs tilpasset forskjellige nivåer, fra nybegynner til avansert.",
      icon: "📚",
      features: ["Små grupper", "Erfarne lærere", "Fleksible tidspunkter", "Gratis materiell"]
    },
    {
      title: "Jobbsøking og Karriere",
      description: "Veiledning i jobbsøking, CV-skriving og intervjuforberedelse for det norske arbeidsmarkedet.",
      icon: "💼",
      features: ["CV-optimalisering", "Intervjutrening", "Nettverksbygging", "Karriererådgivning"]
    },
    {
      title: "Familierådgivning",
      description: "Støtte for familier i overgangsprosessen og tilpasning til norske samfunnsnormer.",
      icon: "👨‍👩‍👧‍👦",
      features: ["Konflikthåndtering", "Kommunikasjon", "Kulturell tilpasning", "Parterapi"]
    },
    {
      title: "Barns Utvikling",
      description: "Spesialiserte programmer for barn og ungdom for å sikre vellykket skolegang og sosial integrasjon.",
      icon: "🎈",
      features: ["Leksehjelp", "Sosiale ferdigheter", "Identitetsutvikling", "Mobbing-forebygging"]
    },
    {
      title: "Juridisk Veiledning",
      description: "Assistanse med dokumenter, søknader og forståelse av norske lover og regler.",
      icon: "⚖️",
      features: ["Oppholdstillatelse", "Familiegjenforening", "Borgerskapsøknad", "Boligrettigheter"]
    },
    {
      title: "Samfunnsintegrasjon",
      description: "Omfattende programmer for å forstå og delta aktivt i det norske samfunnet.",
      icon: "🏛️",
      features: ["Samfunnskunnskap", "Demokratiforståelse", "Lokalsamfunn", "Frivillighetsarbeid"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Våre{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Tjenester
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vi tilbyr skreddersydde løsninger for å hjelpe deg og din familie med en smidig overgang til livet i Norge
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
                <Button variant="outline" className="w-full mt-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  Les mer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="shadow-soft hover:shadow-lg transition-all duration-300">
            Kontakt oss for en gratis konsultasjon
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;