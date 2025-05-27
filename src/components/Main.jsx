import HeroSec from "./HeroSec";
import GeneralFeatures from "./GeneralFeatures";
import Testimonials from "./Testimonials";
import MiddleFeaturesSection from "./MiddleFeaturesSection";
import SpecializedFeaturesSection from "./SpecializedFeaturesSection";
import BenefitsSection from "./BenefitsSection";
import CallToAction from "./CallToAction";
import ContactUsSection from "./ContactUsSection";
import Footer from "./Footer";
function Main() {
  return (
    <main className="h-screen">
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
    </main>
  );
}


function Card({ title, text, imgSrc, alt, name, role }) {
  return (
    <div className="bg-white shadow-md rounded-lg py-6 px-9 mx-2 md:mx-0 flex flex-col justify-between w-full snap-center min-w-[90%] md:min-w-[40%]">
      <div>
        <h3 className="text-xl text-[#0B3E7A] font-semibold mb-5">{title}</h3>
        <p>{text}</p>
      </div>
      <div className="mt-5 flex items-center">
        <div className="w-16 h-16 relative mr-3 rounded-full overflow-hidden">
          <img
            alt={alt}
            title={alt}
            loading="lazy"
            decoding="async"
            className="object-cover w-full h-full"
            src={imgSrc}
          />
        </div>
        <div>
          <div className="text-lg font-semibold">{name}</div>
          <div className="font-semibold">{role}</div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ title, text, imgSrc, alt, name, role }) {
  return (
    <div className="bg-white shadow-md rounded-lg py-6 px-9 mx-2 md:mx-0 flex flex-col justify-between w-full snap-center min-w-[90%] md:min-w-[40%]">
      <div>
        <h3 className="text-xl text-[#0B3E7A] font-semibold mb-5">{title}</h3>
        <p>{text}</p>
      </div>
      <div className="mt-5 flex items-center">
        <div className="w-16 h-16 relative mr-3 rounded-full overflow-hidden">
          <img
            alt={alt}
            title={alt}
            loading="lazy"
            decoding="async"
            className="object-cover w-full h-full"
            src={imgSrc}
          />
        </div>
        <div>
          <div className="text-lg font-semibold">{name}</div>
          <div className="font-semibold">{role}</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
