import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import AppDownload from "@/components/AppDownload";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <About />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Index;
