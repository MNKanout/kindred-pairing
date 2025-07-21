import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Heart, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Platform = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Islamic Values Based",
      description: "Our platform prioritizes Islamic principles and values in every match we suggest."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy Protection",
      description: "Your personal information is secure with advanced privacy controls and verification."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Cultural Alignment",
      description: "Find someone who shares your cultural background and understands your traditions."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Quality Matches",
      description: "Our advanced algorithm ensures meaningful connections based on compatibility."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary py-20">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-white hover:text-primary-foreground/80 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Matchmaking Platform
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Connect with potential partners who share your Islamic and cultural values through our secure platform.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                Finding the right life partner is one of life's most important journeys. Our Islamic matchmaking 
                platform is designed to help you connect with compatible individuals who share your values, 
                faith, and vision for marriage. We prioritize Islamic principles while providing a modern, 
                secure, and user-friendly experience.
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
                <CardTitle className="text-2xl text-center">How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">1</div>
                    <h3 className="font-semibold mb-2">Create Profile</h3>
                    <p className="text-muted-foreground text-sm">Build a comprehensive profile highlighting your values, interests, and what you're looking for in a partner.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">2</div>
                    <h3 className="font-semibold mb-2">Get Matched</h3>
                    <p className="text-muted-foreground text-sm">Our algorithm suggests compatible profiles based on your preferences, values, and compatibility factors.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">3</div>
                    <h3 className="font-semibold mb-2">Connect Safely</h3>
                    <p className="text-muted-foreground text-sm">Start conversations in a safe, monitored environment with family involvement when desired.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Platform Benefits */}
            <Card className="border-0 shadow-soft mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Platform Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">For You:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Verified profiles and backgrounds</li>
                      <li>• Advanced privacy settings</li>
                      <li>• Compatibility scoring system</li>
                      <li>• Family involvement options</li>
                      <li>• 24/7 customer support</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Islamic Approach:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Halal way of meeting potential partners</li>
                      <li>• Emphasis on marriage intentions</li>
                      <li>• Cultural and religious compatibility</li>
                      <li>• Family-oriented matching</li>
                      <li>• Islamic guidance throughout</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <Button size="lg" className="shadow-soft hover:shadow-lg transition-all duration-300">
                Join Our Platform
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platform;