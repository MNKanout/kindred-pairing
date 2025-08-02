import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Heart, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";

const Platform = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('platform.features.islamic.title'),
      description: t('platform.features.islamic.description')
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('platform.features.privacy.title'),
      description: t('platform.features.privacy.description')
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('platform.features.cultural.title'),
      description: t('platform.features.cultural.description')
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: t('platform.features.quality.title'),
      description: t('platform.features.quality.description')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Header */}
      <div className="bg-gradient-primary py-20">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-white hover:text-primary-foreground/80 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('platform.backHome')}
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('platform.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {t('platform.subtitle')}
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t('platform.description')}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* How It Works */}
            <Card className="border-0 shadow-soft mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-center">{t('platform.howItWorks.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">1</div>
                    <h3 className="font-semibold mb-2">{t('platform.howItWorks.step1.title')}</h3>
                    <p className="text-muted-foreground text-sm">{t('platform.howItWorks.step1.description')}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">2</div>
                    <h3 className="font-semibold mb-2">{t('platform.howItWorks.step2.title')}</h3>
                    <p className="text-muted-foreground text-sm">{t('platform.howItWorks.step2.description')}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">3</div>
                    <h3 className="font-semibold mb-2">{t('platform.howItWorks.step3.title')}</h3>
                    <p className="text-muted-foreground text-sm">{t('platform.howItWorks.step3.description')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Platform Benefits */}
            <Card className="border-0 shadow-soft mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-center">{t('platform.benefits.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">{t('platform.benefits.forYou.title')}</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• {t('platform.benefits.forYou.verified')}</li>
                      <li>• {t('platform.benefits.forYou.privacy')}</li>
                      <li>• {t('platform.benefits.forYou.scoring')}</li>
                      <li>• {t('platform.benefits.forYou.family')}</li>
                      <li>• {t('platform.benefits.forYou.support')}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('platform.benefits.islamic.title')}</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• {t('platform.benefits.islamic.halal')}</li>
                      <li>• {t('platform.benefits.islamic.marriage')}</li>
                      <li>• {t('platform.benefits.islamic.compatibility')}</li>
                      <li>• {t('platform.benefits.islamic.oriented')}</li>
                      <li>• {t('platform.benefits.islamic.guidance')}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <Button size="lg" className="shadow-soft hover:shadow-lg transition-all duration-300">
                {t('platform.cta')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platform;