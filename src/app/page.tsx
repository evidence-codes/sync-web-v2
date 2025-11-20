
import HeroClientsSection from "./components/public/HeroClientsSection";
import ClientsSection from "./components/public/OurClients";
import FeaturesSection from "./components/public/FeaturesSection";
// import HeroClientsSection from "./components/public/hhherro";


import LandingPage from "./components/public/LandingPage";
import UniquenessSection from "./components/public/Uniqueness";
import TargetAndFaqSection from "./components/public/TargetAndFaqSection";



export default function Home() {
  return (
    <div className="w-full overflow-hidden">

    
       
      <HeroClientsSection />

      <FeaturesSection />


      {/* <ClientsSection /> */}


      <UniquenessSection />

      <TargetAndFaqSection />

      {/* <Footer /> */}

      {/* <ClientsSection /> */}

      {/* <LandingPage /> */}
    </div>
  );
}
