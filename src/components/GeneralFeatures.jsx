import { motion } from "framer-motion";
import { FadeUp } from "../utility/animation";
function GeneralFeatures() {
  return (
    <section
      className="bg-[#F7F9FC] pt-10 pb-20 md:pt-16 md:pb-24 px-5 md:px-20 lg:px-40 flex flex-col-reverse md:flex-row items-center gap-10"
      style={{ scrollMarginTop: "80px" }}>
      {/* النص */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-lora font-semibold mb-6 md:mb-10 text-[#0B3E7A] leading-tight">
          Handcrafted to meet all your needs
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-12 text-gray-700 leading-relaxed">
          One Solution, one software. Trusted by the best in the medical field
          such as hospitals, pharmacies, laboratories, and doctors.
        </p>

        <ul className="space-y-5 text-gray-800 font-semibold md:text-lg">
          {[
            "Data backed up to the cloud",
            "Fully encrypted and unified software",
            "Available on all major devices and operating systems",
            "Ensuring smooth and simplified user experience",
            "Providing suitable training and support to users",
          ].map((text, idx) => (
            <li key={idx} className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-4 text-green-600 flex-shrink-0">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              <span>{text}</span>
            </li>
          ))}
        </ul>

        <a
          href="https://caresyncunity.live/login"
          title="Get Started"
          className="mt-8 md:mt-12 inline-block w-full md:w-[80%] lg:w-[60%]">
          <button className="w-full bg-[#0B3E7A] text-white font-semibold uppercase rounded-md py-4 hover:opacity-90 transition">
            Get Started
          </button>
        </a>
      </div>

      {/* الصورة */}
      <div className="w-full md:w-1/2 flex justify-center items-center max-h-[500px]">
        <motion.img
          variants={FadeUp(0.5)}
          initial="hidden"
          whileInView="visible"
          alt="Handcrafted solution"
          loading="lazy"
          decoding="async"
          src="/images/Sec2.png"
          className="
            object-contain
            w-full
            max-h-[250px]  /* للموبايل الصغير */
            sm:max-h-[350px] /* شاشات صغيرة */
            md:max-h-[400px] /* شاشات متوسطه (iPad) */
            lg:max-h-[500px] /* الشاشات الكبيرة */
          "
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          style={{ position: "relative", color: "transparent" }}
        />
      </div>
    </section>
  );
}
export default GeneralFeatures;