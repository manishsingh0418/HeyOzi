import { Button } from "@/components/ui/button";
import { Clock, Shield, Star, Package } from "lucide-react";

const About = () => {
  const stats = [
    { number: "10K+", label: "Happy Families", icon: Package },
    { number: "30min", label: "Avg Delivery", icon: Clock },
    { number: "4.9★", label: "Parent Rating", icon: Star },
    { number: "100%", label: "Safe Products", icon: Shield }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-kids bg-gradient-primary bg-clip-text text-transparent">
                Quick Commerce for Busy Parents
              </h2>
              <p className="text-lg text-muted-foreground font-comic leading-relaxed">
                We're parents too, and we know how challenging it can be to keep kids happy 
                while managing busy schedules. That's why we created the fastest way to get 
                everything kids need - from last-minute birthday gifts to healthy snacks 
                for school lunches.
              </p>
              <p className="text-lg text-muted-foreground font-comic leading-relaxed">
                Every product is hand-selected by our team of parents and child safety experts. 
                No questionable toys, no unhealthy snacks - just quality items that kids love 
                and parents trust, delivered in minutes.
              </p>
            </div>
            
            <Button variant="playful" size="lg" className="group">
              <Package className="w-5 h-5 group-hover:animate-wiggle" />
              View Our Products
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