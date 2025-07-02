
import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import OurStory from "@/components/OurStory";
import ApproachPhilosophy from "@/components/ApproachPhilosophy";
import CoreValues from "@/components/CoreValues";
import ChineseNetwork from "@/components/ChineseNetwork";
import JoinMission from "@/components/JoinMission";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutHero />
      <OurStory />
      <ApproachPhilosophy />
      <CoreValues />
      <ChineseNetwork />
      <JoinMission />
      <Footer />
    </div>
  );
};

export default About;
