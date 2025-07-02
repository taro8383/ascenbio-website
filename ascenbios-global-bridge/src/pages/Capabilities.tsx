
import Header from "@/components/Header";
import CapabilitiesHero from "@/components/CapabilitiesHero";
import CapabilitiesOverview from "@/components/CapabilitiesOverview";
import ClinicalExcellence from "@/components/ClinicalExcellence";
import StrategicPartnerships from "@/components/StrategicPartnerships";
import ChineseNetworkCapabilities from "@/components/ChineseNetworkCapabilities";
import LogisticsArchitecture from "@/components/LogisticsArchitecture";
import DigitalInfrastructure from "@/components/DigitalInfrastructure";
import GovernmentRelations from "@/components/GovernmentRelations";
import HumanResourceDevelopment from "@/components/HumanResourceDevelopment";
import CapabilityAssessment from "@/components/CapabilityAssessment";
import PartnershipApproachCTA from "@/components/PartnershipApproachCTA";
import Footer from "@/components/Footer";

const Capabilities = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CapabilitiesHero />
      <CapabilitiesOverview />
      <ClinicalExcellence />
      <StrategicPartnerships />
      <ChineseNetworkCapabilities />
      <LogisticsArchitecture />
      <DigitalInfrastructure />
      <GovernmentRelations />
      <HumanResourceDevelopment />
      <CapabilityAssessment />
      <PartnershipApproachCTA />
      <Footer />
    </div>
  );
};

export default Capabilities;
