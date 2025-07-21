import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Heart, Users, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Education = () => {
  const topics = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Partner Selection",
      description: "Learn the important criteria and Islamic principles for choosing the right life partner."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Conflict Resolution",
      description: "Develop skills to handle disagreements and maintain harmony in your relationship."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Duties",
      description: "Understand the rights and responsibilities of each family member in Islam."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Marriage Expectations",
      description: "Set realistic expectations and prepare for the journey of married life."
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
            Marriage Education
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Build the foundation for a successful Islamic marriage through comprehensive education and guidance.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto mb-12">
              <p className="text-muted-foreground text-center">
                Marriage is one of the most important decisions in life. Our education program provides you with 
                the knowledge and tools needed to make informed choices and build a happy, Islamic family life. 
                Learn about duties, expectations, partner selection, and conflict resolution through our 
                comprehensive curriculum.
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
                <CardTitle className="text-2xl text-center">Program Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">What You'll Learn:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Islamic principles of marriage</li>
                      <li>• Communication skills for couples</li>
                      <li>• Financial planning and responsibilities</li>
                      <li>• Building emotional intimacy</li>
                      <li>• Raising children in Islam</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Program Format:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Interactive workshops</li>
                      <li>• Group discussions</li>
                      <li>• One-on-one sessions</li>
                      <li>• Online resources and materials</li>
                      <li>• Ongoing support community</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <Button size="lg" className="shadow-soft hover:shadow-lg transition-all duration-300">
                Enroll in Education Program
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;