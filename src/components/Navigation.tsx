import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("NO");

  const content = {
    NO: {
      menuItems: [
        { name: "Hjem", href: "#home" },
        { name: "Om oss", href: "#about" },
        { name: "Tjenester", href: "#services" },
        { name: "Kontakt", href: "#contact" },
      ]
    },
    EN: {
      menuItems: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
      ]
    },
    AR: {
      menuItems: [
        { name: "الرئيسية", href: "#home" },
        { name: "من نحن", href: "#about" },
        { name: "الخدمات", href: "#services" },
        { name: "اتصل بنا", href: "#contact" },
      ]
    }
  };

  const languages = [
    { code: "NO", name: "Norsk", flag: "🇳🇴" },
    { code: "EN", name: "English", flag: "🇬🇧" },
    { code: "AR", name: "العربية", flag: "🇸🇦" },
  ];

  const currentContent = content[currentLanguage];
  const menuItems = currentContent.menuItems;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">A</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Afaf</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Globe size={16} />
                  {languages.find(lang => lang.code === currentLanguage)?.flag}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border z-50">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => setCurrentLanguage(language.code)}
                    className="flex items-center gap-2 cursor-pointer hover:bg-accent"
                  >
                    <span>{language.flag}</span>
                    <span>{language.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-accent transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full mt-4 flex items-center justify-center gap-2">
                    <Globe size={16} />
                    {languages.find(lang => lang.code === currentLanguage)?.flag}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border-border z-50 w-full">
                  {languages.map((language) => (
                    <DropdownMenuItem
                      key={language.code}
                      onClick={() => setCurrentLanguage(language.code)}
                      className="flex items-center gap-2 cursor-pointer hover:bg-accent"
                    >
                      <span>{language.flag}</span>
                      <span>{language.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;