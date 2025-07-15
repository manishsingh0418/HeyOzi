import { Button } from "@/components/ui/button";
import { Smartphone, Download, Heart, Star } from "lucide-react";
import heroMascot from "@/assets/hero-mascot.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-12">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-kids bg-gradient-primary bg-clip-text text-transparent animate-bounce-gentle">
              Kids Stuff Delivered in Minutes!
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-comic">
              The fastest way to get toys, snacks, books, and everything kids love. 
              Safe products, curated for children, delivered to your door in under 30 minutes!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="hero" size="hero" className="group">
              <Download className="w-6 h-6 group-hover:animate-bounce-gentle" />
              Order Now - Free Delivery
            </Button>
            <Button variant="secondary" size="hero" className="group">
              <Heart className="w-5 h-5 group-hover:animate-wiggle" />
              Browse Products
            </Button>
          </div>
          
          <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <span>4.9/5 from parents</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              <span>30-min delivery</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative animate-float">
            <img 
              src={heroMascot} 
              alt="Cute app mascot character" 
              className="w-full max-w-lg mx-auto rounded-3xl shadow-playful"
            />
            <div className="absolute -top-4 -right-4 bg-gradient-accent rounded-full p-3 animate-bounce-gentle">
              <Heart className="w-6 h-6 text-accent-foreground" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-secondary rounded-full p-3 animate-wiggle">
              <Star className="w-6 h-6 text-secondary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;