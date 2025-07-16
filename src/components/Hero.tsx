import { Button } from "@/components/ui/button";
import { Smartphone, Download, Heart, Star } from "lucide-react";
import heroMascot from "@/assets/hero-mascot.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-2 sm:px-4 py-8 sm:py-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div className="text-center lg:text-left space-y-6 sm:space-y-8">
          {/* Logo at the top of the left column */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/ozi-logo.png"
              alt="Ozi Logo"
              className="h-20 sm:h-24 md:h-28 w-auto object-contain rounded-2xl mb-4 animate-float"
            />
          </div>
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-kids bg-gradient-primary bg-clip-text text-transparent animate-bounce-gentle pb-2 sm:pb-4">
              Fast, Fun & Fabulous Simplifying Parenting
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-comic max-w-xl mx-auto lg:mx-0">
              The fastest way to get toys, snacks, books, and everything kids
              love. Safe products, curated for children, delivered to your door
              in under 30 minutes!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full max-w-xl mx-auto lg:mx-0">
            <Link to="/coming-soon">
              <Button variant="hero" size="hero" className="group w-full sm:w-auto">
                <Download className="w-6 h-6 group-hover:animate-bounce-gentle" />
                Order Now - Free Delivery
              </Button>
            </Link>
            <Link to="/coming-soon">
              <Button variant="secondary" size="hero" className="group w-full sm:w-auto">
                <Heart className="w-5 h-5 group-hover:animate-wiggle" />
                Browse Products
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center lg:justify-start text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-4">
            <div className="flex items-center gap-1">
              <span>🧸 Designed for tomorrow’s parenting</span>
            </div>
            <div className="flex items-center gap-1">
              <span>👶Only the safest picks</span>
            </div>
            <div className="flex items-center gap-1">
              <Smartphone className="w-4 h-4" />
              <span>30-min delivery</span>
            </div>
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0">
          <div className="relative animate-float">
            <img
              src={heroMascot}
              alt="Cute app mascot character"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto rounded-3xl shadow-playful"
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
