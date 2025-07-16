import { Button } from "@/components/ui/button";
import { Smartphone, ShoppingCart, Apple, Play } from "lucide-react";
import { Link } from "react-router-dom";

const AppDownload = () => {
  return (
    <section className="py-20 px-4 bg-gradient-primary">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-6">
            <div className="w-20 h-20 mx-auto bg-white/20 rounded-3xl flex items-center justify-center animate-bounce-gentle">
              <Smartphone className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-5xl font-kids text-primary-foreground">
              Ready to Order? 
            </h2>
            <p className="text-lg text-primary-foreground/90 font-comic">
              Join thousands of families who get everything kids need delivered in minutes. 
              Download our app and get free delivery on your first order!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/coming-soon">
              <Button 
                variant="secondary" 
                size="hero" 
                className="group bg-card hover:bg-card/90 text-card-foreground"
              >
                <Apple className="w-6 h-6 group-hover:animate-bounce-gentle" />
                Download for iOS
              </Button>
            </Link>
            <Link to="/coming-soon">
              <Button 
                variant="secondary" 
                size="hero" 
                className="group bg-card hover:bg-card/90 text-card-foreground"
              >
                <Play className="w-6 h-6 group-hover:animate-bounce-gentle" />
                Download for Android
              </Button>
            </Link>
          </div>
          
          <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-primary-foreground/90 font-comic">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Free download</span>
              </div>
              <div className="w-px h-6 bg-primary-foreground/30 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <span>🚚 Free delivery on first order</span>
              </div>
              <div className="w-px h-6 bg-primary-foreground/30 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <span>⚡ 30-minute delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;