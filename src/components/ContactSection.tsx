import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Kontakt{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Oss
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Vi er her for å hjelpe deg og din familie. Ta kontakt med oss i dag for en gratis konsultasjon.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="border-0 shadow-soft hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">E-post</h3>
                      <p className="text-muted-foreground">kontakt@afaf.no</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Telefon</h3>
                      <p className="text-muted-foreground">+47 123 45 678</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Adresse</h3>
                      <p className="text-muted-foreground">Karl Johans gate 1<br />0154 Oslo, Norge</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-2xl">🕒</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Åpningstider</h3>
                      <p className="text-muted-foreground">
                        Man-Fre: 09:00-17:00<br />
                        Lør: 10:00-15:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-card">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Send oss en melding</h3>
                  <p className="text-muted-foreground">
                    Fyll ut skjemaet nedenfor så tar vi kontakt med deg så snart som mulig.
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Fornavn
                      </label>
                      <Input placeholder="Ditt fornavn" className="bg-background" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Etternavn
                      </label>
                      <Input placeholder="Ditt etternavn" className="bg-background" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      E-post
                    </label>
                    <Input type="email" placeholder="din@epost.no" className="bg-background" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Telefon
                    </label>
                    <Input type="tel" placeholder="+47 123 45 678" className="bg-background" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Tjeneste av interesse
                    </label>
                    <select className="w-full p-3 rounded-md border border-input bg-background text-foreground">
                      <option>Velg tjeneste</option>
                      <option>Norsk Språkopplæring</option>
                      <option>Jobbsøking og Karriere</option>
                      <option>Familierådgivning</option>
                      <option>Barns Utvikling</option>
                      <option>Juridisk Veiledning</option>
                      <option>Samfunnsintegrasjon</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Melding
                    </label>
                    <Textarea 
                      placeholder="Fortell oss hvordan vi kan hjelpe deg..."
                      className="min-h-[120px] bg-background"
                    />
                  </div>

                  <Button className="w-full shadow-soft hover:shadow-lg transition-all duration-300">
                    Send melding
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;