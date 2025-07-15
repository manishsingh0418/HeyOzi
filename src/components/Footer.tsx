import { Heart, Mail, MessageCircle, Package } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-12 px-4 border-t">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-kids bg-gradient-primary bg-clip-text text-transparent">
              KidsCart
            </h3>
            <p className="text-muted-foreground font-comic text-sm">
              Quick commerce for kids - delivering toys, snacks, and essentials 
              to families worldwide in minutes, not hours.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-accent" />
              <span>Trusted by 10,000+ families</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold font-comic text-foreground">Quick Delivery</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-comic">
              <li className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                30-Minute Delivery
              </li>
              <li className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                Safe Kids Products
              </li>
              <li className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                Quality Guaranteed
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold font-comic text-foreground">Get in Touch</h4>
            <div className="space-y-3">
              <a href="mailto:orders@kidscart.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                orders@kidscart.com
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4" />
                24/7 Customer Support
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground font-comic">
            © 2024 KidsCart. Made with 💜 for amazing families who want convenience and quality.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;