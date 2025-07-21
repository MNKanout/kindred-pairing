import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, MessageSquare, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Consulting = () => {
  const consultingServices = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Pre-Marriage Counseling",
      description: "Get guidance before taking the important step of marriage. Discuss expectations, compatibility, and concerns."
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Relationship Doubts",
      description: "If you're unsure about your current relationship or potential partner, get professional Islamic guidance."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Marriage Planning",
      description: "Plan your marriage journey with proper Islamic guidance and practical advice for a successful union."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Ongoing Support",
      description: "Continuous support throughout your marriage journey with follow-up sessions and guidance."
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
            Personal Consulting
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Get personalized guidance for your specific marriage and relationship situations with our experienced consultants.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                Every individual and couple faces unique challenges in their journey toward marriage or within 
                their relationship. Our personal consulting services provide you with one-on-one guidance 
                tailored to your specific situation, whether you're considering marriage, have doubts about 
                your partner, or need support in your relationship decisions.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {consultingServices.map((service, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* When to Consult */}
            <Card className="border-0 shadow-soft mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-center">When Should You Consult?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">Before Marriage:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• You're considering a marriage proposal</li>
                      <li>• Unsure about compatibility with your potential partner</li>
                      <li>• Need guidance on Islamic marriage principles</li>
                      <li>• Family or cultural concerns about the match</li>
                      <li>• Financial or practical concerns</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Relationship Concerns:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Having doubts about your current partner</li>
                      <li>• Communication issues in your relationship</li>
                      <li>• Different life goals or values</li>
                      <li>• Family pressure or disapproval</li>
                      <li>• Need Islamic perspective on relationship issues</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Consultation Process */}
            <Card className="border-0 shadow-soft mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Consultation Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">1</div>
                    <h3 className="font-semibold mb-2">Book Appointment</h3>
                    <p className="text-muted-foreground text-sm">Schedule a convenient time for your consultation session.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">2</div>
                    <h3 className="font-semibold mb-2">Private Session</h3>
                    <p className="text-muted-foreground text-sm">Discuss your situation in complete confidentiality with our experienced consultant.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">3</div>
                    <h3 className="font-semibold mb-2">Get Guidance</h3>
                    <p className="text-muted-foreground text-sm">Receive personalized advice and action plan based on Islamic principles.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Consultation Options */}
            <Card className="border-0 shadow-soft mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Consultation Options</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Single Session</h3>
                    <p className="text-muted-foreground text-sm mb-4">One-time consultation for specific questions or concerns.</p>
                    <p className="text-2xl font-bold text-primary">60 min</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Follow-up Package</h3>
                    <p className="text-muted-foreground text-sm mb-4">Initial consultation with two follow-up sessions.</p>
                    <p className="text-2xl font-bold text-primary">3 Sessions</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Ongoing Support</h3>
                    <p className="text-muted-foreground text-sm mb-4">Monthly sessions for continuous guidance and support.</p>
                    <p className="text-2xl font-bold text-primary">Monthly</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <Button size="lg" className="shadow-soft hover:shadow-lg transition-all duration-300">
                Book Your Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;