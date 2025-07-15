import { Heart, Mail, MessageCircle, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-12 px-4 border-t">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-kids bg-gradient-primary bg-clip-text text-transparent">
              KidsApp
            </h3>
            <p className="text-muted-foreground font-comic text-sm">
              Creating safe digital experiences for children worldwide. 
              Made with love by parents, for parents.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-accent" />
              <span>Trusted by 10,000+ families</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold font-comic text-foreground">Safety First</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-comic">
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Child Privacy Protected
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                No Data Collection
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Expert Approved Content
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold font-comic text-foreground">Get in Touch</h4>
            <div className="space-y-3">
              <a href="mailto:hello@kidsapp.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                hello@kidsapp.com
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4" />
                Parent Support Chat
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground font-comic">
            © 2024 KidsApp. Made with 💜 for amazing kids and their families.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;