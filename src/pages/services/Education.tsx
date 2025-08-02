import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Heart, Users, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";

const Education = () => {
  const { t } = useLanguage();
  const topics = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('education.topics.partner.title'),
      description: t('education.topics.partner.description')
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: t('education.topics.conflict.title'),
      description: t('education.topics.conflict.description')
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('education.topics.family.title'),
      description: t('education.topics.family.description')
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: t('education.topics.expectations.title'),
      description: t('education.topics.expectations.description')
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
            {t('education.backHome')}
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('education.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {t('education.subtitle')}
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                {t('education.description')}
              </p>
            </div>

            {/* Topics Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {topics.map((topic, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mb-4">
                      {topic.icon}
                    </div>
                    <CardTitle className="text-xl">{topic.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{topic.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Program Features */}
            <Card className="border-0 shadow-soft mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-center">{t('education.features.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">{t('education.features.learn.title')}</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• {t('education.features.learn.principles')}</li>
                      <li>• {t('education.features.learn.communication')}</li>
                      <li>• {t('education.features.learn.financial')}</li>
                      <li>• {t('education.features.learn.intimacy')}</li>
                      <li>• {t('education.features.learn.children')}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t('education.features.format.title')}</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• {t('education.features.format.workshops')}</li>
                      <li>• {t('education.features.format.discussions')}</li>
                      <li>• {t('education.features.format.sessions')}</li>
                      <li>• {t('education.features.format.resources')}</li>
                      <li>• {t('education.features.format.community')}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <Button size="lg" className="shadow-soft hover:shadow-lg transition-all duration-300">
                {t('education.cta')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;