import { motion } from "framer-motion";
import { FadeLeft } from "../utility/animation";
import { useState, useEffect } from "react";

const Data = [
  {
    title: "Doctor",
    descriptionH3: "The best tools for doctors",
    descriptionP: "All the tools a doctor would need to manage their patients",
    Point1: "Pie chart for your hospitals, clinic",
    Point2: "Providing dashboards that show their timetables for remainders",
    Point3:
      "Providing current patients` status and their recent analysis results",
    image: "/images/Medical.png",
  },

  {
    title: "Patient",
    descriptionH3:
      "Your healthcare process is taken care of with Care Sync Unity",
    descriptionP:
      "We take care of everything a patient might need for their healthcare to help them take best service",

    Point1: "Providing a real time counter of their turn",
    Point2:
      "Determining all the nearest healthcare providers to their region with less prices",
    Point3:
      "Providing a list of top nearest and eligible and qualified doctors to their region",

    image: "/images/patient.png",
  },
  {
    title: "Clinic",
    descriptionH3: "Handcrafted to maintain your Medical Clinic",
    descriptionP: "All the tools you need are built into Care Sync Unity",

    Point1: "Helping them to increase their profit.",
    Point2: "Make small clinics visible for both patients and doctors",
    Point3:
      "Providing an organized and secure system to deal with patients and doctors",

    image: "/images/clinic.png",
  },
  {
    title: "Pharmacy",
    descriptionH3: "You register, leave the management to us",
    descriptionP: "Provieding trainer needs to manage their business",

    Point1:
      "When a patient sees a new specialist, the pharmacy within the CareSync Unity System can quickly access the updated medication list",
    Point2:
      "Automation frees up pharmacists' time to focus on clinical tasks, patient counseling, and providing more personalized care",

    image: "/images/Pharmacy.PNG",
  },
  {
    title: "Laboratory",
    descriptionH3: "You register, leave the management to us",
    descriptionP: "Provieding trainer needs to manage their business",

    Point1:
      "When a patient sees a new specialist, the pharmacy within the CareSync Unity System can quickly access the updated medication list",
    Point2:
      "Automation frees up pharmacists' time to focus on clinical tasks, patient counseling, and providing more personalized care",

    image: "/images/Laboratory.PNG",
  },
];

function SpecializedFeaturesSection() {
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
                  {[data.Point1, data.Point2, data.Point3].map(
                    (point, i) =>
                      point && (
                        <div
                          key={i}
                          className="flex gap-3 items-start box-border">
                          <SVGIcon />
                          <p className="text-white text-xs sm:text-sm md:text-base">
                            {point}
                          </p>
                        </div>
                      )
                  )}
                  <a
                    href="/business/medical-clinics"
                    className="bg-white text-[#0B3E7A] px-5 sm:px-6 md:px-8 py-2 rounded font-semibold hover:opacity-75 text-xs sm:text-sm md:text-base mt-6 self-start"
                    title="Kliniki For Medical Clinics">
                    Register Now
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

export default SpecializedFeaturesSection;
