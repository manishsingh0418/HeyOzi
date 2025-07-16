import { Heart, Mail, MessageCircle, Package } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card py-12 px-4 border-t">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <img
              src="/ozi-logo.png"
              alt="Ozi Logo"
              className="h-16 w-auto object-contain"
            />
            <p className="text-muted-foreground font-comic text-sm">
              Quick commerce for kids - delivering toys, snacks, and essentials
              to families worldwide in minutes, not hours.
            </p>
            {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-accent" />
              <span>Trusted by 10,000+ families</span>
            </div> */}
          </div>

          <div className="space-y-4">
            <h4 className="font-bold font-comic text-foreground">
              Quick Delivery
            </h4>
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
            <h4 className="font-bold font-comic text-foreground">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@ozi.in"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@ozi.in
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                24/7 Customer Support
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-2">
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors underline"
            >
              Terms & Conditions
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors underline"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-sm text-muted-foreground font-comic">
            © 2025 Ozi. Made with 💜 for amazing parents by parents
          </p>
          <p className="text-xs text-muted-foreground font-comic mt-2">
            Ozi is operated by Ozi Technologies Pvt Ltd (U46901HR2025PTC132282)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
