
import Header from "@/components/Header";
import GlobalReachHero from "@/components/GlobalReachHero";
import MarketEntryStrategy from "@/components/MarketEntryStrategy";
import CrossCulturalExcellence from "@/components/CrossCulturalExcellence";
import GlobalSupplyChain from "@/components/GlobalSupplyChain";
import RegionalGrowthOpportunities from "@/components/RegionalGrowthOpportunities";
import GlobalPartnershipCTA from "@/components/GlobalPartnershipCTA";
import Footer from "@/components/Footer";

const GlobalReach = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <GlobalReachHero />
      <MarketEntryStrategy />
      <CrossCulturalExcellence />
      <GlobalSupplyChain />
      <RegionalGrowthOpportunities />
      <GlobalPartnershipCTA />
      <Footer />
    </div>
  );
};

export default GlobalReach;
