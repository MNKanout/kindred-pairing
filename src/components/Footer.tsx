const Footer = () => {
  const footerLinks = [
    {
      title: "Tjenester",
      links: [
        "Norsk Språkopplæring",
        "Jobbsøking og Karriere",
        "Familierådgivning",
        "Barns Utvikling"
      ]
    },
    {
      title: "Ressurser",
      links: [
        "Nyttige lenker",
        "Nedlastninger",
        "FAQ",
        "Kontakt oss"
      ]
    },
    {
      title: "Om oss",
      links: [
        "Vår historie",
        "Vårt team",
        "Karriere",
        "Partnere"
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
              Et trygt hjem for utdanning, veiledning og støtte for muslimske familier i Norge.
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
              © 2024 Afaf Instituttet. Alle rettigheter forbeholdt.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors duration-200">
                Personvern
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors duration-200">
                Vilkår
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;