import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "../utility/animation";

const features = [
  {
    title: "Patient Management",
    description: "Seamless tools for handling patients & customers",
    image: "/images/appointments.png",
  },
  {
    title: "Appointment Scheduling",
    description: "Book, track, and manage appointments with ease",
    image: "/images/patient-appointments.png",
  },
  {
    title: "Accounting & Statistics",
    description: "Track income, expenses & generate reports",
    image: "/images/statistics.png",
  },
  {
    title: "Online chatting",
    description:
      "Seemless Email, platform online chat and reminders integration for your users to always be on-time",
    image: "/images/chatting.png",
  },
];
function ProgressBar({ activeIndex = 1 }) {
  return (
    <div className="flex h-1 mb-5 items-center space-x-2">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={`h-1.5 w-1/6 bg-[#48BDFF] rounded-full transition-all duration-300 ${
            i === activeIndex ? "opacity-100" : "opacity-20"
          }`}
        />
      ))}
    </div>
  );
}

function MiddleFeaturesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [manualSelect, setManualSelect] = useState(false);

  useEffect(() => {
    if (manualSelect) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [manualSelect]);

  const handleSelect = (index) => {
    setCurrentIndex(index);
    setManualSelect(true);
    setTimeout(() => setManualSelect(false), 5000);
  };

  return (
    <section
      id="features"
      className="bg-[#0B3E7A] pt-16 md:pt-24 pb-20 md:pb-28 px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-40"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-lora font-bold text-white text-center mb-12 md:mb-16 leading-tight">
        Powerful features <br className="hidden md:block" />
        at your service.
      </h2>

      <div className="md:flex md:gap-12 lg:gap-20">
        <div className="md:w-5/12 flex flex-col">
          <ProgressBar activeIndex={currentIndex} />
          <h3 className="text-xl sm:text-2xl md:text-4xl font-lora font-medium text-white mt-8 mb-8 leading-snug">
            Manage every aspect of your practice
          </h3>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-5 rounded-lg cursor-pointer transition-colors duration-300 ${
                  currentIndex === index ? "bg-[#0B3E7A]" : "bg-[#174A86]"
                }`}
                onClick={() => handleSelect(index)}
              >
                <p className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {feature.title}
                </p>
                {currentIndex === index && (
                  <p className="text-white text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden mt-10 rounded-xl overflow-hidden shadow-lg h-[280px] sm:h-[340px]">
            <AnimatePresence mode="wait">
              <motion.img
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView="visible"
                key={features[currentIndex].image}
                src={features[currentIndex].image}
                alt={features[currentIndex].title}
                transition={{ duration: 1 }}
                className="w-full h-full object-contain"
              />
            </AnimatePresence>
          </div>
        </div>
        <div className="hidden md:block md:w-7/12 rounded-xl overflow-hidden shadow-lg min-h-[500px] sm:min-h-[600px] lg:min-h-[650px] xl:min-h-[700px] 2xl:min-h-[750px]">
          <AnimatePresence mode="wait">
            <motion.img
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              key={features[currentIndex].image}
              src={features[currentIndex].image}
              alt={features[currentIndex].title}
              transition={{ duration: 1 }}
              className="w-full h-full object-contain"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default MiddleFeaturesSection;
