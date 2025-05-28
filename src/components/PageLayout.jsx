import HeroSec from "./HeroSec";
import GeneralFeatures from "./GeneralFeatures";
import Testimonials from "./Testimonials";
import MiddleFeaturesSection from "./MiddleFeaturesSection";
import SpecializedFeaturesSection from "./SpecializedFeaturesSection";
import BenefitsSection from "./BenefitsSection";
import CallToAction from "./CallToAction";
import ContactUsSection from "./ContactUsSection";
import Footer from "./Footer";
function PageLayout() {
  return (
    <>
      <HeroSec />
      <GeneralFeatures />
      <Testimonials />
      <MiddleFeaturesSection />
      <SpecializedFeaturesSection />
      <div className="h-[20%] md:h-[30%] bg-[#0B3E7A] w-full" />
      <BenefitsSection />
      <CallToAction />
      <ContactUsSection />
      <Footer />
    </>
  );
}

export default PageLayout;
