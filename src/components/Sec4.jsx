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

function Sec4() {
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
      {/* العنوان مع مساحات خارجية */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-lora font-bold text-white text-center mb-12 md:mb-16 leading-tight">
        Powerful features <br className="hidden md:block" />
        at your service.
      </h2>

      {/* المحتوى الرئيسي */}
      <div className="md:flex md:gap-12 lg:gap-20">
        {/* العمود الأيسر (النص + قائمة المميزات) */}
        <div className="md:w-5/12 flex flex-col">
          <ProgressBar activeIndex={currentIndex} />
          <h3 className="text-xl sm:text-2xl md:text-4xl font-lora font-medium text-white mt-8 mb-8 leading-snug">
            Manage every aspect of your practice
          </h3>

          {/* قائمة المميزات */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-5 rounded-lg cursor-pointer transition-colors duration-300 ${
                  currentIndex === index
                    ? "bg-[#0B3E7A]"
                    : "bg-[#174A86]"
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

          {/* الصورة الصغيرة تظهر فقط في الموبايل */}
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

        {/* العمود الأيمن (الصورة الكبيرة للشاشات md+) */}
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



export default Sec4;
function Sec45() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [manualSelect, setManualSelect] = useState(false);

  useEffect(() => {
    if (manualSelect) return; // skip auto change if user clicked

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [manualSelect]);

  const handleSelect = (index) => {
    setCurrentIndex(index);
    setManualSelect(true);
    setTimeout(() => setManualSelect(false), 5000); // resume autoplay after 5s
  };

  return (
    <div id="features" className="h-full md:h-[100%] 4xl:h-[60%] bg-[#0B3E7A]">
      <h2 className="text-4xl md:text-5xl md:px-0 px-5 w-full text-center whitespace-pre-wrap grow flex justify-center items-center text-white font-lora font-bold">
        Powerful features <br className="hidden md:block" />
        at your service.
      </h2>
      <div className="md:mx-20 md:flex md:flex-row md:mt-10 rounded-3xl md:bg-[#174A86] md:overflow-hidden py-7 px-8 md:px-16 h-[75%]">
        <div className="grow-[1] w-full md:w-2/6 h-full mt-10">
          <ProgressBar activeIndex={currentIndex} />
          <h3 className="text-2xl md:text-5xl text-white font-lora font-medium mb-5">
            Manage every aspect of your practice
          </h3>
          <div className="h-full">
            <div className="h-1/2 grow-[3] relative flex  md:hidden">
              <div className="w-full absolute transition-all duration-500 top-0 h-full">
                <AnimatePresence mode="wait">
                  <motion.img
                    variants={FadeUp(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    key={features[currentIndex].image}
                    src={features[currentIndex].image}
                    alt={features[currentIndex].title}
                    transition={{ duration: 1 }}
                    className="absolute w-full h-full object-contain rounded-xl shadow-xl"
                  />
                </AnimatePresence>
              </div>
            </div>
            {/*text  */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Features list */}
              <div className="flex flex-col gap-4 md:w-[800px] w-full">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`p-4  rounded-lg cursor-pointer transition-all duration-300 ${
                      currentIndex !== index
                        ? "bg-[#174A86] opacity-100"
                        : "bg-[#0B3E7A] opacity-100"
                    }`}
                    onClick={() => handleSelect(index)}
                  >
                    <div className="md:p-3 md:px-5 transition-all ease-in-out rounded-lg cursor-pointer md:mb-1 md:mt-0 w-full duration-500 h-[25%] 3xl:h-[20%] mt-5">
                      <p className="text-xl text-white font-semibold mb-1 ">
                        {feature.title}
                      </p>
                      <p
                        className={`text-white ${
                          index === currentIndex ? "" : "hidden"
                        }`}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Image Display */}
        <div className=" grow-[3] hidden md:flex relative">
          <div className="w-full absolute  top-0 h-full ">
            <AnimatePresence mode="wait">
              <motion.img
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView="visible"
                key={features[currentIndex].image}
                src={features[currentIndex].image}
                alt={features[currentIndex].title}
                transition={{ duration: 1 }}
                className="object-contain"
                sizes="100vw"
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
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}