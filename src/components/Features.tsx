import { Clock, Package, Shield, Truck, Star, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import appFeatures from "@/assets/app-features.jpg";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "30-Min Delivery",
      description: "Lightning-fast delivery of toys, snacks, and kids essentials to your door",
      color: "text-primary"
    },
    {
      icon: Package,
      title: "Curated for Kids",
      description: "Age-appropriate toys, healthy snacks, and educational materials handpicked for children",
      color: "text-secondary"
    },
    {
      icon: Shield,
      title: "Safe Products",
      description: "All items are safety-tested, non-toxic, and meet strict child safety standards",
      color: "text-accent"
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "No delivery fees on orders over $25 - making it affordable for families",
      color: "text-primary"
    },
    {
      icon: Star,
      title: "Quality Brands",
      description: "Top kids brands and local favorites that parents trust and children love",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Family-Friendly",
      description: "Easy ordering for busy parents with kid-safe packaging and delivery",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-kids bg-gradient-primary bg-clip-text text-transparent mb-6 pb-4">
            Everything Kids Need, Delivered Fast
          </h2>
          <p className="text-lg text-muted-foreground font-comic max-w-2xl mx-auto">
            From toys to snacks to learning materials - we've got parents covered with quick, reliable delivery
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
            alt="Kids products and delivery preview" 
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto mx-auto rounded-3xl shadow-soft animate-float mt-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;