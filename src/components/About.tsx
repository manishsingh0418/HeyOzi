import { Button } from "@/components/ui/button";
import { Heart, Shield, Star, Users } from "lucide-react";

const About = () => {
  const stats = [
    { number: "50K+", label: "Happy Kids", icon: Heart },
    { number: "100%", label: "Safe Content", icon: Shield },
    { number: "4.9★", label: "Parent Rating", icon: Star },
    { number: "10K+", label: "Families", icon: Users }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-kids bg-gradient-primary bg-clip-text text-transparent">
                Made by Parents, for Parents
              </h2>
              <p className="text-lg text-muted-foreground font-comic leading-relaxed">
                We're a team of parents and child development experts who believe 
                technology should enhance childhood, not replace real-world experiences. 
                Our app is designed to inspire creativity, support learning, and 
                keep kids safe in the digital world.
              </p>
              <p className="text-lg text-muted-foreground font-comic leading-relaxed">
                Every feature is tested with real families and approved by child 
                safety experts. No data collection, no advertising, just pure fun 
                and learning for your little ones.
              </p>
            </div>
            
            <Button variant="playful" size="lg" className="group">
              <Heart className="w-5 h-5 group-hover:animate-wiggle" />
              Meet Our Team
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 text-center shadow-cute hover:shadow-playful transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-2xl md:text-3xl font-kids bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-comic text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;