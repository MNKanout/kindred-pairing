import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'NO' | 'EN' | 'AR';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  NO: {
    // Navigation
    'nav.home': 'Hjem',
    'nav.about': 'Om oss',
    'nav.services': 'Tjenester',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'Velkommen til Afaf',
    'hero.subtitle': 'Din partner for et lykkelig familieliv',
    'hero.description': 'Vi hjelper deg med å bygge sterke familiebånd gjennom veiledning, utdanning og støtte basert på islamske verdier og kulturell forståelse.',
    'hero.cta': 'Kom i gang',
    'hero.secondary': 'Lær mer',
    
    // About Section
    'about.title': 'Om oss',
    'about.subtitle': 'Vår misjon er å støtte familier',
    'about.description': 'Afaf er dedikert til å hjelpe familier med å navigere livets utfordringer gjennom islamsk veiledning, kulturell forståelse og praktisk støtte. Vi tror på styrken av sterke familiebånd og fellesskap.',
    
    // Services Section
    'services.title': 'Våre Tjenester',
    'services.subtitle': 'Vi tilbyr skreddersydde løsninger for å hjelpe deg og din familie',
    'services.education.title': 'Utdanning',
    'services.education.description': 'Lær om plikter, forventninger og hvordan du velger din partner. Hvordan løse konflikter for å ha kunnskapen som trengs for et lykkelig familieliv.',
    'services.platform.title': 'Plattform',
    'services.platform.description': 'Matchmaking-plattform som fokuserer på islamske og kulturelle verdier for å gi en opplevelse som stemmer overens med disse verdiene.',
    'services.consulting.title': 'Rådgivning',
    'services.consulting.description': 'Muligheten til å bestille time for å rådføre deg om din spesifikke situasjon; enten du skal gifte deg eller er i tvil om personen er riktig for deg.',
    'services.cta': 'Lær mer',
    'services.contact': 'Kontakt oss for en gratis konsultasjon',
    
    // Contact Section
    'contact.title': 'Kontakt oss',
    'contact.subtitle': 'Vi er her for å hjelpe deg',
    'contact.name': 'Navn',
    'contact.email': 'E-post',
    'contact.message': 'Melding',
    'contact.send': 'Send melding',
    
    // Footer
    'footer.description': 'Støtter familier gjennom islamsk veiledning og kulturell forståelse.',
    'footer.quickLinks': 'Hurtiglenker',
    'footer.services': 'Tjenester',
    'footer.contact': 'Kontakt',
    'footer.rights': 'Alle rettigheter forbeholdt.',
    
    // Contact details
    'contact.email.label': 'E-post',
    'contact.phone.label': 'Telefon',
    'contact.address.label': 'Adresse',
    'contact.hours.label': 'Åpningstider',
    'contact.hours.weekdays': 'Man-Fre: 09:00-17:00',
    'contact.hours.saturday': 'Lør: 10:00-15:00',
    'contact.address.street': 'Karl Johans gate 1',
    'contact.address.city': '0154 Oslo, Norge',
    
    // Form fields
    'contact.form.title': 'Send melding',
    'contact.form.firstname': 'Fornavn',
    'contact.form.lastname': 'Etternavn', 
    'contact.form.phone': 'Telefon',
    'contact.form.service': 'Tjeneste av interesse',
    'contact.form.selectService': 'Velg tjeneste',
    'contact.form.placeholder.name': 'Ditt fornavn',
    'contact.form.placeholder.email': 'your@email.com',
    'contact.form.placeholder.phone': '+47 123 45 678',
    'contact.form.placeholder.message': 'Fortell oss hvordan vi kan hjelpe deg...',
    
    // Footer links
    'footer.resources': 'Ressurser',
    'footer.links.useful': 'Nyttige lenker',
    'footer.links.downloads': 'Nedlastninger',
    'footer.links.faq': 'FAQ',
    'footer.links.history': 'Vår historie',
    'footer.links.team': 'Vårt team',
    'footer.links.career': 'Karriere',
    'footer.links.partners': 'Partnere',
    'footer.links.privacy': 'Personvern',
    'footer.links.terms': 'Vilkår',
    'footer.links.cookies': 'Cookies',
    
    // About section cards
    'about.education.title': 'Utdanning',
    'about.education.description': 'Omfattende utdanningsprogrammer som kombinerer akademisk læring med kulturell forståelse.',
    'about.coaching.title': 'Coaching',
    'about.coaching.description': 'Personlig coaching og mentoring for å bygge selvtillit og navigere norsk kultur.',
    'about.consulting.title': 'Rådgivning',
    'about.consulting.description': 'Ekspert rådgivning om juridiske, sosiale og praktiske aspekter ved livet i Norge.'
  },
  
  EN: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Welcome to Afaf',
    'hero.subtitle': 'Your partner for a happy family life',
    'hero.description': 'We help you build strong family bonds through guidance, education, and support based on Islamic values and cultural understanding.',
    'hero.cta': 'Get Started',
    'hero.secondary': 'Learn More',
    
    // About Section
    'about.title': 'About Us',
    'about.subtitle': 'Our mission is to support families',
    'about.description': 'Afaf is dedicated to helping families navigate life\'s challenges through Islamic guidance, cultural understanding, and practical support. We believe in the strength of strong family bonds and community.',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'We offer tailored solutions to help you and your family',
    'services.education.title': 'Education',
    'services.education.description': 'Learn about the duties, expectations, and how to choose your partner. How to solve conflicts to have the knowledge needed for a happy family life.',
    'services.platform.title': 'Platform',
    'services.platform.description': 'Matchmaking platform that focuses on Islamic and cultural values to provide an experience that aligns with these values.',
    'services.consulting.title': 'Consulting',
    'services.consulting.description': 'The ability to book an appointment to consult about your specific situation; whether you are going to get married or if you are in doubt if the person is right for you.',
    'services.cta': 'Learn More',
    'services.contact': 'Contact us for a free consultation',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to help you',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    
    // Footer
    'footer.description': 'Supporting families through Islamic guidance and cultural understanding.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    
    // Contact details
    'contact.email.label': 'Email',
    'contact.phone.label': 'Phone',
    'contact.address.label': 'Address',
    'contact.hours.label': 'Opening Hours',
    'contact.hours.weekdays': 'Mon-Fri: 09:00-17:00',
    'contact.hours.saturday': 'Sat: 10:00-15:00',
    'contact.address.street': 'Karl Johans gate 1',
    'contact.address.city': '0154 Oslo, Norway',
    
    // Form fields
    'contact.form.title': 'Send Message',
    'contact.form.firstname': 'First Name',
    'contact.form.lastname': 'Last Name',
    'contact.form.phone': 'Phone',
    'contact.form.service': 'Service of Interest',
    'contact.form.selectService': 'Select Service',
    'contact.form.placeholder.name': 'Your first name',
    'contact.form.placeholder.email': 'your@email.com',
    'contact.form.placeholder.phone': '+47 123 45 678',
    'contact.form.placeholder.message': 'Tell us how we can help you...',
    
    // Footer links
    'footer.resources': 'Resources',
    'footer.links.useful': 'Useful Links',
    'footer.links.downloads': 'Downloads',
    'footer.links.faq': 'FAQ',
    'footer.links.history': 'Our History',
    'footer.links.team': 'Our Team',
    'footer.links.career': 'Career',
    'footer.links.partners': 'Partners',
    'footer.links.privacy': 'Privacy',
    'footer.links.terms': 'Terms',
    'footer.links.cookies': 'Cookies',
    
    // About section cards
    'about.education.title': 'Education',
    'about.education.description': 'Comprehensive educational programs that combine academic learning with cultural understanding.',
    'about.coaching.title': 'Coaching',
    'about.coaching.description': 'Personal coaching and mentoring to build confidence and navigate Norwegian culture.',
    'about.consulting.title': 'Consulting',
    'about.consulting.description': 'Expert advice on legal, social and practical aspects of life in Norway.'
  },
  
  AR: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'الخدمات',
    'nav.contact': 'اتصل بنا',
    
    // Hero Section
    'hero.title': 'مرحباً بكم في عفاف',
    'hero.subtitle': 'شريكك لحياة عائلية سعيدة',
    'hero.description': 'نساعدك في بناء روابط عائلية قوية من خلال التوجيه والتعليم والدعم القائم على القيم الإسلامية والفهم الثقافي.',
    'hero.cta': 'ابدأ الآن',
    'hero.secondary': 'اعرف المزيد',
    
    // About Section
    'about.title': 'من نحن',
    'about.subtitle': 'مهمتنا هي دعم الأسر',
    'about.description': 'عفاف مكرسة لمساعدة الأسر في التغلب على تحديات الحياة من خلال التوجيه الإسلامي والفهم الثقافي والدعم العملي. نحن نؤمن بقوة الروابط الأسرية القوية والمجتمع.',
    
    // Services Section
    'services.title': 'خدماتنا',
    'services.subtitle': 'نقدم حلول مخصصة لمساعدتك وعائلتك',
    'services.education.title': 'التعليم',
    'services.education.description': 'تعلم عن الواجبات والتوقعات وكيفية اختيار شريك حياتك. كيفية حل النزاعات للحصول على المعرفة اللازمة لحياة عائلية سعيدة.',
    'services.platform.title': 'المنصة',
    'services.platform.description': 'منصة خطابة تركز على القيم الإسلامية والثقافية لتوفير تجربة تتماشى مع هذه القيم.',
    'services.consulting.title': 'الاستشارة',
    'services.consulting.description': 'القدرة على حجز موعد للاستشارة حول وضعك المحدد؛ سواء كنت ستتزوج أو كنت في شك إذا كان الشخص مناسب لك.',
    'services.cta': 'اعرف المزيد',
    'services.contact': 'تواصل معنا للحصول على استشارة مجانية',
    
    // Contact Section
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'نحن هنا لمساعدتك',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    
    // Footer
    'footer.description': 'دعم الأسر من خلال التوجيه الإسلامي والفهم الثقافي.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.services': 'الخدمات',
    'footer.contact': 'اتصل بنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
    
    // Contact details
    'contact.email.label': 'البريد الإلكتروني',
    'contact.phone.label': 'الهاتف',
    'contact.address.label': 'العنوان',
    'contact.hours.label': 'ساعات العمل',
    'contact.hours.weekdays': 'الاثنين-الجمعة: 09:00-17:00',
    'contact.hours.saturday': 'السبت: 10:00-15:00',
    'contact.address.street': 'كارل يوهانس جيت 1',
    'contact.address.city': '0154 أوسلو، النرويج',
    
    // Form fields
    'contact.form.title': 'إرسال رسالة',
    'contact.form.firstname': 'الاسم الأول',
    'contact.form.lastname': 'اسم العائلة',
    'contact.form.phone': 'الهاتف',
    'contact.form.service': 'الخدمة المطلوبة',
    'contact.form.selectService': 'اختر الخدمة',
    'contact.form.placeholder.name': 'اسمك الأول',
    'contact.form.placeholder.email': 'your@email.com',
    'contact.form.placeholder.phone': '+47 123 45 678',
    'contact.form.placeholder.message': 'أخبرنا كيف يمكننا مساعدتك...',
    
    // Footer links
    'footer.resources': 'الموارد',
    'footer.links.useful': 'روابط مفيدة',
    'footer.links.downloads': 'التحميلات',
    'footer.links.faq': 'الأسئلة الشائعة',
    'footer.links.history': 'تاريخنا',
    'footer.links.team': 'فريقنا',
    'footer.links.career': 'الوظائف',
    'footer.links.partners': 'الشركاء',
    'footer.links.privacy': 'الخصوصية',
    'footer.links.terms': 'الشروط',
    'footer.links.cookies': 'ملفات تعريف الارتباط',
    
    // About section cards
    'about.education.title': 'التعليم',
    'about.education.description': 'برامج تعليمية شاملة تجمع بين التعلم الأكاديمي والفهم الثقافي.',
    'about.coaching.title': 'التدريب',
    'about.coaching.description': 'تدريب شخصي وإرشاد لبناء الثقة والتنقل في الثقافة النرويجية.',
    'about.consulting.title': 'الاستشارة',
    'about.consulting.description': 'مشورة خبيرة حول الجوانب القانونية والاجتماعية والعملية للحياة في النرويج.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('NO');

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};