import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const footerLinks = [
    {
      title: t('footer.services'),
      links: [
        t('services.education.title'),
        t('services.platform.title'),
        t('services.consulting.title'),
        t('footer.contact')
      ]
    },
    {
      title: t('footer.resources'),
      links: [
        t('footer.links.useful'),
        t('footer.links.downloads'),
        t('footer.links.faq'),
        t('footer.contact')
      ]
    },
    {
      title: t('about.title'),
      links: [
        t('footer.links.history'),
        t('footer.links.team'),
        t('footer.links.career'),
        t('footer.links.partners')
      ]
    }
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">A</span>
              </div>
              <span className="text-2xl font-bold">Afaf</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300 cursor-pointer">
                <span className="text-lg">📧</span>
              </div>
              <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300 cursor-pointer">
                <span className="text-lg">📞</span>
              </div>
              <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300 cursor-pointer">
                <span className="text-lg">📍</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-background/80 hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 Afaf. {t('footer.rights')}
            </p>
             <div className="flex space-x-6 text-sm">
               <a href="#" className="text-background/60 hover:text-primary transition-colors duration-200">
                 {t('footer.links.privacy')}
               </a>
               <a href="#" className="text-background/60 hover:text-primary transition-colors duration-200">
                 {t('footer.links.terms')}
               </a>
               <a href="#" className="text-background/60 hover:text-primary transition-colors duration-200">
                 {t('footer.links.cookies')}
               </a>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;