import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import AppDownload from "@/components/AppDownload";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <About />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Index;
