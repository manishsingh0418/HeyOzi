import { Button } from "@/components/ui/button";
import { Smartphone, Download, Apple, Play } from "lucide-react";

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
              Ready to Start the Fun?
            </h2>
            <p className="text-lg text-primary-foreground/90 font-comic">
              Join thousands of families who trust our app for their kids' digital adventures. 
              Download now and get 7 days of premium features absolutely free!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="hero" 
              className="group bg-card hover:bg-card/90 text-card-foreground"
            >
              <Apple className="w-6 h-6 group-hover:animate-bounce-gentle" />
              Download for iOS
            </Button>
            <Button 
              variant="secondary" 
              size="hero" 
              className="group bg-card hover:bg-card/90 text-card-foreground"
            >
              <Play className="w-6 h-6 group-hover:animate-bounce-gentle" />
              Download for Android
            </Button>
          </div>
          
          <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-primary-foreground/90 font-comic">
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                <span>Free download</span>
              </div>
              <div className="w-px h-6 bg-primary-foreground/30 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <span>✨ 7-day premium trial</span>
              </div>
              <div className="w-px h-6 bg-primary-foreground/30 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <span>🔒 100% safe & ad-free</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;