
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import ValueProposition from "@/components/ValueProposition";
import ServicesShowcase from "@/components/ServicesShowcase";
import PartnershipCTA from "@/components/PartnershipCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Statistics />
      <ValueProposition />
      <ServicesShowcase />
      <PartnershipCTA />
      <Footer />
    </div>
  );
};

export default Index;
