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
      {/* <div className="h-1/6 w-full md:relative -z-10 hidden md:block gradientSplit" /> */}

      {/*   <div className="h-1/6 w-full md:relative -z-10 md:block hidden rotate-180 gradientSplit" /> */}

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

/* function Sec2() {
  return (
    <div className="md:h-full bg-[#F7F9FC] md:px-40 md:pt-5 flex md:flex-row flex-col-reverse pb-20 md:pb-0">
      <div className="grow my-auto w-full">
        <div className="px-5 md:px-10">
          <h2 className="text-3xl md:text-5xl font-lora font-semibold mb-5 md:mb-10 text-[#0B3E7A]">
            Handcrafted to meet all your needs
          </h2>
          <p className="mb-5 md:mb-10 md:text-xl whitespace-pre-wrap">
            One Solution, one software. Trusted by the best in the medical field
            such as hospitals, pharmacies , labortories and doctors
          </p>
          <div className="lg:mt-20">
            <ul className="md:text-lg mb-10 font-semibold">
              <li className="flex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-5 mb-10 fill-green-600 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <h3>Data backed up to the cloud</h3>
              </li>
              <li className="flex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-5 mb-10 fill-green-600 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <h3>Fully encrypted and unified software</h3>
              </li>
              <li className="flex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-5 mb-10 fill-green-600 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <h3>Available on all major devices and operating systems</h3>
              </li>
              <li className="flex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-5 mb-10 fill-green-600 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <h3>Ensuring smooth and simplified user experience</h3>
              </li>
              <li className="flex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-5 mb-10 fill-green-600 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <h3>Providing suitable training and support to users</h3>
              </li>
            </ul>
            <a title="login" href="https://caresyncunity.live/login">
              <button className="w-full md:w-[80%] lg:w-[80%] xl:w-[52%] bg-[#0B3E7A] text-center items-center transition-all uppercase text-white font-semibold rounded-md p-4 border-gray-200 hover:opacity-90">
                <template data-dgst="BAILOUT_TO_CLIENT_SIDE_RENDERING" />
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="h-full min-h-[200px] grow flex w-full">
        <div className="w-full relative">
          <motion.img
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            id="img1.png"
            alt="image"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="object-contain "
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: "0",
              top: "0",
              right: "0",
              bottom: "0",
              color: "transparent",
            }}
            sizes="100vw"
            src="/images/Sec2.png"
          />
        </div>
      </div>
    </div>
  );
} */

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
