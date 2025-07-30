import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                {t('contact.title')}{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('contact.subtitle')}
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
                       <h3 className="text-lg font-semibold text-foreground">{t('contact.email.label')}</h3>
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
                       <h3 className="text-lg font-semibold text-foreground">{t('contact.phone.label')}</h3>
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
                       <h3 className="text-lg font-semibold text-foreground">{t('contact.address.label')}</h3>
                       <p className="text-muted-foreground">{t('contact.address.street')}<br />{t('contact.address.city')}</p>
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
                       <h3 className="text-lg font-semibold text-foreground">{t('contact.hours.label')}</h3>
                       <p className="text-muted-foreground">
                         {t('contact.hours.weekdays')}<br />
                         {t('contact.hours.saturday')}
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
                   <h3 className="text-2xl font-bold text-foreground mb-2">{t('contact.form.title')}</h3>
                   <p className="text-muted-foreground">
                     {t('contact.subtitle')}
                   </p>
                 </div>

                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                     <div>
                       <label className="text-sm font-medium text-foreground mb-2 block">
                         {t('contact.form.firstname')}
                       </label>
                       <Input placeholder={t('contact.form.placeholder.name')} className="bg-background" />
                     </div>
                     <div>
                       <label className="text-sm font-medium text-foreground mb-2 block">
                         {t('contact.form.lastname')}
                       </label>
                       <Input placeholder={t('contact.form.lastname')} className="bg-background" />
                     </div>
                  </div>

                   <div>
                     <label className="text-sm font-medium text-foreground mb-2 block">
                       {t('contact.email')}
                     </label>
                     <Input type="email" placeholder={t('contact.form.placeholder.email')} className="bg-background" />
                   </div>

                   <div>
                     <label className="text-sm font-medium text-foreground mb-2 block">
                       {t('contact.form.phone')}
                     </label>
                     <Input type="tel" placeholder={t('contact.form.placeholder.phone')} className="bg-background" />
                   </div>

                   <div>
                     <label className="text-sm font-medium text-foreground mb-2 block">
                       {t('contact.form.service')}
                     </label>
                     <select className="w-full p-3 rounded-md border border-input bg-background text-foreground">
                       <option>{t('contact.form.selectService')}</option>
                       <option>{t('services.education.title')}</option>
                       <option>{t('services.platform.title')}</option>
                       <option>{t('services.consulting.title')}</option>
                     </select>
                   </div>

                   <div>
                     <label className="text-sm font-medium text-foreground mb-2 block">
                       {t('contact.message')}
                     </label>
                     <Textarea 
                       placeholder={t('contact.form.placeholder.message')}
                       className="min-h-[120px] bg-background"
                     />
                   </div>

                  <Button className="w-full shadow-soft hover:shadow-lg transition-all duration-300">
                    {t('contact.send')}
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