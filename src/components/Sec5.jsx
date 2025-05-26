import { motion } from "framer-motion";
import { FadeLeft } from "../utility/animation";
import { useState, useEffect } from "react";

const Data = [
  {
    title: "Doctor",
    descriptionH3: "Handcrafted to maintain your Medical Clinic",
    descriptionP:
      "Whether you are a physiotherapist or a surgeon, all the tools you need are built into Kliniki",
    Point1: "Custom forms assignable to patients or sessions",
    Point2: "Exercise dashboard to share videos with your patients",
    Point3: "Research tools from the National Library of Medicine",
    image: "/public/images/Medical.png",
  },
  {
    title: "Patient",
    descriptionH3: "The best tools for the best dentists",
    descriptionP: "All the tools a dentist would need to manage their clinic",
    Point1: "Dental chart for your patients",
    Point2: "SMS, Email and Whatsapp reminders",
    Point3: "Full patient management with custom forms and data points",
    image: "/images/patient-appointments.png",
  },
  {
    title: "Clinic",
    descriptionH3: "Your beauty clinic, managed",
    descriptionP:
      "Everything you need to provide efficient scheduling for your beauty clinic",
    Point1: "Custom branding, colors and logo",
    Point2:
      "10 different calendar views to be able to schedule appointments fast and clearly",
    Point3: "Public booking for your customers",
    image: "/images/statistics.png",
  },
  {
    title: "Pharmacy",
    descriptionH3: "Your law practice is taken care of with Kliniki",
    descriptionP:
      "We take care of everything a lawyer might need for their practice to help you offer the best service possible",
    Point1: "Video conferencing",
    Point2:
      "Public forms for your customers to explain their situation and upload files",
    Point3: "Documents sharing and signing",
    image: "/images/chatting.png",
  },
  {
    title: "Laboratory",
    descriptionH3: "You train, leave the management to us",
    descriptionP: "Anything a personal trainer needs to manage their business",
    Point1: "Session Recurrency",
    Point2: "Customers management and online booking",
    Point3:
      "Fully integrated public profile SEO for new customers to find you faster",
    image: "/images/chatting.png",
  },
];

/* function Sec5() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [manualSelect, setManualSelect] = useState(false);

  useEffect(() => {
    if (manualSelect) return; // توقف التحديث التلقائي عند التفاعل اليدوي
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [manualSelect]);

  const handleSelect = (index) => {
    setCurrentIndex(index);
    setManualSelect(true);
    setTimeout(() => setManualSelect(false), 2000); // استئناف التشغيل التلقائي بعد 5 ثوانٍ
  };

  return (
    <div
      id="fields"
      className="md:h-[110%] 4xl:h-[65%] flex-col flex bg-[#0B3E7A] pt-10">
      <h2 className="text-2xl md:text-4xl md:px-0 px-5 w-full text-center whitespace-pre-wrap grow flex justify-center items-center text-white font-lora font-semibold">
        Specific features <br className="hidden md:block" />
        for your field of work
      </h2>

      
      <div className="mt-6 flex flex-wrap md:flex-nowrap bg-[#174A86] max-w-full md:w-2/3 justify-between mx-2 md:mx-auto py-2 px-1 rounded-md md:rounded-full relative">
        
        {Data.map((item, index) => (
          <h3
            key={index}
            onClick={() => handleSelect(index)}
            className={`p-4 cursor-pointer rounded md:rounded-full text-white transition-all w-1/3 md:w-full text-center ease-in duration-300 z-10 bg-none font-medium text-base  ${
              index === currentIndex ? "bg-[#3165EB] font-semibold" : "bg-none"
            }`}>
            {item.title}
          </h3>
        ))}
      </div>

      
      <div className="mx-2 md:mx-20 mt-10 rounded md:rounded-3xl bg-[#174A86] py-7 h-[70%] md:h-[60%] overflow-hidden">
        <div className="transition-all duration-1000">
          {Data.map((data, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse md:flex-row px-5 md:px-16 md:h-[600px] md:justify-between h-full w-[100%] transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0 hidden"
              }`}>
              <div className="z-10 grow-[1] md:w-2/6 h-3/4 md:h-full mt-10">
                <h3 className="text-2xl md:text-4xl text-white font-lora font-semibold mb-5">
                  {data.descriptionH3}
                </h3>
                <p className="text-white">{data.descriptionP}</p>
                <div className="md:px-10 mt-10">
                  {[data.Point1, data.Point2, data.Point3].map((point, i) => (
                    <div key={i} className="flex gap-3 mb-5">
                      <SVGIcon />
                      <p className="text-white">{point}</p>
                    </div>
                  ))}
                  <a
                    href="/business/medical-clinics"
                    className="bg-white text-[#0B3E7A] px-8 py-2 rounded font-semibold hover:opacity-75"
                    title="Kliniki For Medical Clinics">
                    Kliniki For Medical Clinics
                  </a>
                </div>
              </div>
              <div className="grow-[3] flex justify-center items-center ">
                <div className="w-full h-[300px] md:h-full relative">
                  <motion.img
                    variants={FadeLeft(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    alt={data.descriptionH3}
                    src={data.image}
                    className="object-contain w-[full] h-[100%] md:h-[100%] "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} */
function Sec5() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [manualSelect, setManualSelect] = useState(false);

  useEffect(() => {
    if (manualSelect) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [manualSelect]);

  const handleSelect = (index) => {
    setCurrentIndex(index);
    setManualSelect(true);
    setTimeout(() => setManualSelect(false), 2000);
  };

  return (
    <div
      id="fields"
      className="flex flex-col bg-[#0B3E7A] pt-8 sm:pt-10 md:pt-12 lg:pt-16 min-h-screen md:min-h-[110%] 4xl:min-h-[65%] overflow-x-hidden box-border"
      style={{ boxSizing: "border-box" }}>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl px-4 sm:px-6 md:px-0 w-full text-center whitespace-pre-wrap flex justify-center items-center text-white font-lora font-semibold leading-tight">
        Specific features <br className="hidden md:block" />
        for your field of work
      </h2>

      {/* Navigation */}
      <div className="mt-4 sm:mt-6 md:mt-8 flex flex-wrap md:flex-nowrap bg-[#174A86] max-w-full md:w-2/3 justify-between mx-auto py-2 sm:py-3 md:py-4 px-2 sm:px-4 md:px-6 rounded-md md:rounded-full relative box-border">
        {Data.map((item, index) => (
          <h3
            key={index}
            onClick={() => handleSelect(index)}
            className={`cursor-pointer rounded md:rounded-full text-white transition-all text-center ease-in duration-300 z-10 font-medium
              text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-4 py-2 sm:py-3
              w-1/2 sm:w-1/3 md:w-full
              ${
                index === currentIndex
                  ? "bg-[#3165EB] font-semibold"
                  : "bg-none"
              }`}
            style={{ boxSizing: "border-box" }}>
            {item.title}
          </h3>
        ))}
      </div>

      {/* Content Display */}
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 mt-8 sm:mt-10 md:mt-12 rounded-md md:rounded-3xl bg-[#174A86] py-6 sm:py-8 md:py-10 h-auto min-h-[50vh] md:min-h-[55vh] lg:min-h-[60vh] xl:min-h-[65vh] 2xl:min-h-[70vh] overflow-auto box-border">
        <div className="transition-all duration-1000 h-full box-border">
          {Data.map((data, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse md:flex-row px-4 sm:px-8 md:px-4 lg:px-8 h-full w-full transition-opacity duration-500
              ${index === currentIndex ? "opacity-100" : "opacity-0 hidden"}`}
              style={{ boxSizing: "border-box" }}>
              {/* Text Content */}
              <div className="z-10 flex flex-col grow-[1] basis-full md:basis-2/6 h-auto md:h-full mt-4 sm:mt-6 md:mt-10 box-border">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-lora font-semibold mb-4 sm:mb-6 md:mb-8 leading-tight">
                  {data.descriptionH3}
                </h3>
                <p className="text-white text-xs sm:text-sm md:text-base mb-6 sm:mb-8">
                  {data.descriptionP}
                </p>
                <div className="md:px-8 lg:px-10 flex flex-col gap-4 box-border">
                  {[data.Point1, data.Point2, data.Point3].map((point, i) => (
                    <div key={i} className="flex gap-3 items-start box-border">
                      <SVGIcon />
                      <p className="text-white text-xs sm:text-sm md:text-base">
                        {point}
                      </p>
                    </div>
                  ))}
                  <a
                    href="/business/medical-clinics"
                    className="bg-white text-[#0B3E7A] px-5 sm:px-6 md:px-8 py-2 rounded font-semibold hover:opacity-75 text-xs sm:text-sm md:text-base mt-6 self-start"
                    title="Kliniki For Medical Clinics">
                    Kliniki For Medical Clinics
                  </a>
                </div>
              </div>

              {/* Image Content */}
              <div className="grow-[3] flex justify-center items-center basis-full md:basis-4/6 mt-4 sm:mt-6 md:mt-0 box-border">
                <div className="grow-[3] flex justify-center items-center basis-full md:basis-4/6 mt-4 sm:mt-6 md:mt-0 relative overflow-hidden">
                  <motion.img
                    variants={FadeLeft(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    alt={data.descriptionH3}
                    src={data.image}
                    className="max-w-full max-h-[60vh] md:max-h-[70vh] lg:max-h-[75vh] xl:max-h-[80vh] object-contain"
                    style={{ margin: "0 auto" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SVGIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 fill-green-600 text-white">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  );
}

export default Sec5;

{
  /*      <div className="w-full">
            <div className="flex flex-col-reverse md:flex-row px-5 md:px-16 h-full w-[100%] transition-opacity duration-100">
              <div className="grow-[1] md:w-2/6 h-3/4 md:h-full mt-10">
                <h3 className="text-2xl md:text-4xl text-white font-lora font-semibold mb-5">
                  The best tools for the best dentists
                </h3>
                <p className="text-white">
                  All the tools a dentist would need to manage their clinic
                </p>
                <div className="md:px-10 mt-10">
                  <div className="flex gap-3 mb-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 fill-green-600 text-white">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                    <p className="text-white">Dental chart for your patients</p>
                  </div>
                  <div className="flex gap-3 mb-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 fill-green-600 text-white">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                    <p className="text-white">
                      SMS, Email and Whatsapp reminders
                    </p>
                  </div>
                  <div className="flex gap-3 mb-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 fill-green-600 text-white">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                    <p className="text-white">
                      Full patient management with custom forms and data points
                    </p>
                  </div>
                  <a
                    about="Learn more about The best tools for the best dentists"
                    aria-label="The best tools for the best dentists - Kliniki For Dental Clinics"
                    className="bg-white text-[#0B3E7A] px-8 py-2 rounded font-semibold hover:opacity-75"
                    title="Kliniki For Dental Clinics"
                    href="business/dental-clinics">
                    Kliniki For Dental Clinics
                  </a>
                </div>
              </div>
              <div className="grow-[3] flex justify-center items-center">
                <div className="w-full h-[300px] lg:h-full relative">
                  <img
                    alt="The best tools for the best dentists"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain"
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
                    src="_next/image?url=%2Fdental.png&w=3840&q=75"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col-reverse md:flex-row px-5 md:px-16 h-full w-[100%] transition-opacity duration-100">
              <div className="grow-[1] md:w-2/6 h-3/4 md:h-full mt-10">
                <h3 className="text-2xl md:text-4xl text-white font-lora font-semibold mb-5">
                  Your beauty clinic, managed
                </h3>
                <p className="text-white">
                  Everything you need to provide efficient scheduling for your
                  beauty clinic
                </p>
                <div className="md:px-10 mt-10">
                  <div className="flex gap-3 mb-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 fill-green-600 text-white">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                    <p className="text-white">
                      Custom branding, colors and logo
                    </p>
                  </div>
                  <div className="flex gap-3 mb-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 fill-green-600 text-white">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                    <p className="text-white">
                      10 different calendar views to be able to schedule
                      appointments fast and clearly
                    </p>
                  </div>
                  <div className="flex gap-3 mb-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 fill-green-600 text-white">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                    <p className="text-white">
                      Public booking for your customers
                    </p>
                  </div>
                  <a
                    about="Learn more about Your beauty clinic, managed"
                    aria-label="Your beauty clinic, managed - Kliniki For Beauty Clinics"
                    className="bg-white text-[#0B3E7A] px-8 py-2 rounded font-semibold hover:opacity-75"
                    title="Kliniki For Beauty Clinics"
                    href="business/beauty-clinics">
                    Kliniki For Beauty Clinics
                  </a>
                </div>
              </div>
              <div className="grow-[3] flex justify-center items-center">
                <div className="w-full h-[300px] lg:h-full relative">
                  <img
                    alt="Your beauty clinic, managed"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain"
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
                    src="_next/image?url=%2Fbeauty.png&w=3840&q=75"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col-reverse md:flex-row px-5 md:px-16 h-full w-[100%] transition-opacity duration-100">
              <div className="grow-[1] md:w-2/6 h-3/4 md:h-full mt-10">
                <h3 className="text-2xl md:text-4xl text-white font-lora font-semibold mb-5">
                  Your law practice is taken care of with Kliniki
                </h3>
                <p className="text-white">
                  We take care of everything a lawyer might need for their
                  practice to help you offer he best service possible
                </p>
                <div className="md:px-10 mt-10">
                  <div className="flex gap-3 mb-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 fill-green-600 text-white">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                    <p className="text-white">Video conferencing</p>
                  </div>
                  <div className="flex gap-3 mb-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 fill-green-600 text-white">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                    <p className="text-white">
                      Public forms for your customers to explain their situation
                      and upload files
                    </p>
                  </div>
                  <div className="flex gap-3 mb-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 fill-green-600 text-white">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                    <p className="text-white">Documents sharing and signing</p>
                  </div>
                  <a
                    about="Learn more about Your law practice is taken care of with Kliniki"
                    aria-label="Your law practice is taken care of with Kliniki - Kliniki For Lawyer Practices"
                    className="bg-white text-[#0B3E7A] px-8 py-2 rounded font-semibold hover:opacity-75"
                    title="Kliniki For Lawyer Practices"
                    href="business/lawyer-practices">
                    Kliniki For Lawyer Practices
                  </a>
                </div>
              </div>
              <div className="grow-[3] flex justify-center items-center">
                <div className="w-full h-[300px] lg:h-full relative">
                  <img
                    alt="Your law practice is taken care of with Kliniki"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain"
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
                    src="_next/image?url=%2Flaw.png&w=3840&q=75"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col-reverse md:flex-row px-5 md:px-16 h-full w-[100%] transition-opacity duration-100">
              <div className="grow-[1] md:w-2/6 h-3/4 md:h-full mt-10">
                <h3 className="text-2xl md:text-4xl text-white font-lora font-semibold mb-5">
                  You train, leave the management to us
                </h3>
                <p className="text-white">
                  Anything a personal trainer needs to manage their business
                </p>
                <div className="md:px-10 mt-10">
                  <div className="flex gap-3 mb-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 fill-green-600 text-white">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                    <p className="text-white">Session Recurrency</p>
                  </div>
                  <div className="flex gap-3 mb-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 fill-green-600 text-white">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                    <p className="text-white">
                      Customers management and online booking
                    </p>
                  </div>
                  <div className="flex gap-3 mb-5">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 fill-green-600 text-white">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                    <p className="text-white">
                      Fully integrated public profile SEO for new customers to
                      find you faster
                    </p>
                  </div>
                  <a
                    about="Learn more about You train, leave the management to us"
                    aria-label="You train, leave the management to us - Kliniki For Personal Trainers"
                    className="bg-white text-[#0B3E7A] px-8 py-2 rounded font-semibold hover:opacity-75"
                    title="Kliniki For Personal Trainers"
                    href="business/personal-trainers">
                    Kliniki For Personal Trainers
                  </a>
                </div>
              </div>
              <div className="grow-[3] flex justify-center items-center">
                <div className="w-full h-[300px] lg:h-full relative">
                  <img
                    alt="You train, leave the management to us"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-contain"
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
                    src="_next/image?url=%2Fsports.png&w=3840&q=75"
                  />
                </div>
              </div>
            </div>
          </div> */
}
