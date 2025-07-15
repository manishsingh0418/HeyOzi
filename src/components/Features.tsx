import { Shield, Gamepad2, Palette, Music, BookOpen, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import appFeatures from "@/assets/app-features.jpg";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Safe",
      description: "No ads, no inappropriate content, completely safe environment for kids",
      color: "text-primary"
    },
    {
      icon: Gamepad2,
      title: "Fun Games",
      description: "Educational games that make learning math, reading, and science exciting",
      color: "text-secondary"
    },
    {
      icon: Palette,
      title: "Creative Tools",
      description: "Digital art, music maker, and storytelling tools to spark creativity",
      color: "text-accent"
    },
    {
      icon: Music,
      title: "Music & Songs",
      description: "Kid-friendly songs, nursery rhymes, and music creation activities",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      title: "Interactive Stories",
      description: "Engaging stories that adapt to your child's reading level and interests",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Safe Social",
      description: "Supervised interactions with friends and family members only",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-kids bg-gradient-primary bg-clip-text text-transparent mb-6">
            Everything Kids Love in One App
          </h2>
          <p className="text-lg text-muted-foreground font-comic max-w-2xl mx-auto">
            Designed by child development experts and loved by parents worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-cute transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-2 rounded-3xl">
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-primary p-3 ${feature.color}`}>
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold font-comic">{feature.title}</h3>
                <p className="text-muted-foreground font-comic">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <img 
            src={appFeatures} 
            alt="App features preview" 
            className="max-w-md mx-auto rounded-3xl shadow-soft animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;