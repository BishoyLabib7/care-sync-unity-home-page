import { motion } from "framer-motion";
import { FadeUp } from "../utility/animation";
import { FadeLeft } from "../utility/animation";
import HeroSec from "./HeroSec";
import Sec4 from "./Sec4";
function Body() {
  return (
    <div className="h-screen">
      <HeroSec />
      <Sec2 />
      {/* <div className="h-1/6 w-full md:relative -z-10 hidden md:block gradientSplit" /> */}

      {/*   <div className="h-1/6 w-full md:relative -z-10 md:block hidden rotate-180 gradientSplit" /> */}

      <Sec3 />
      <Sec4 />
      <Sec5 />

      <div className="h-[20%] md:h-[30%] bg-[#0B3E7A] w-full" />

      <Sec6 />

      <Sec7 />
    </div>
  );
}

function Sec2() {
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
}

function Sec3() {
  return (
    <div className="h-full md:h-2/3 flex flex-col relative">
      <div className="grow bg-[#F7F9FC]" />
      <div className="grow-[2] bg-[#0B3E7A]" />
      <motion.div
        variants={FadeLeft(0.1)}
        initial="hidden"
        whileInView="visible"
        className="absolute w-screen top-[5%] left-0 overflow-x-auto"
      >
        {" "}
        <div className="flex gap-0 md:gap-5 h-full snap-mandatory snap-x overflow-x-scroll md:px-5 lg:px-40 pb-1">
          <div className="bg-white shadow-md rounded-lg py-6 p-9 mx-3 md:mx-0 flex flex-col justify-between w-full snap-center min-w-[90%] md:min-w-[40%]">
            <div>
              <h3 className="text-xl text-[#0B3E7A] font-semibold mb-5">
                Unity Health Care
              </h3>
              <p>
                Using a system within Unity Health Care would likely find it
                integrated with electronic health records (EHRs) to manage
                patient data, schedule appointments, and communicate with
                patients and other providers. Feedback might relate to the
                efficiency of the system, its user-friendliness, and its impact
                on workflow and patient care
              </p>
            </div>
            <div className="mt-5 flex align-middle items-center">
              <div className="w-16 h-16 relative mr-3">
                <img
                  alt="Dr. Kamal Al Kassir at PhysioMove"
                  title="Dr. Kamal Al Kassir at PhysioMove"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover -z-0 rounded-full"
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
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 250px, 250px"
                  src="https://res.cloudinary.com/deqvr46ch/image/upload/v1743593815/care-sync/profile-photos/fe4j4z3sboujt35cu2xg.jpg"
                />
              </div>
              <div>
                <div className="text-lg font-semibold">George Philip</div>
                <div className="font-semibold">Cardiologist</div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg py-6 p-9 mx-3 md:mx-0 flex flex-col justify-between w-full snap-center min-w-[90%] md:min-w-[40%]">
            <div>
              <h3 className="text-xl text-[#0B3E7A] font-semibold mb-5">
                More Coordinated Care
              </h3>
              <p>
                I feel like my different doctors are finally on the same page.
                They seem to have access to the same information, which makes my
                care feel more seamless. The platform makes it easier for me to
                track my medications and any at-home care instructions.
              </p>
            </div>
            <div className="mt-5 flex align-middle items-center">
              <div className="w-16 h-16 relative mr-3">
                <img
                  alt="Mona Tauk at UHeal"
                  title="Mona Tauk at UHeal"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover -z-0 rounded-full"
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
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 250px, 250px"
                  src="https://res.cloudinary.com/deqvr46ch/image/upload/v1743424812/care-sync/profile-photos/im1qoxutnibwsei7fdhe.jpg"
                />
              </div>
              <div>
                <div className="text-lg font-semibold">Barsoum Adly</div>
                <div className="font-semibold">Patient</div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg py-6 p-9 mx-3 md:mx-0 flex flex-col justify-between w-full snap-center min-w-[90%] md:min-w-[40%]">
            <div>
              <h3 className="text-xl text-[#0B3E7A] font-semibold mb-5">
                Enhanced Efficiency and Workflow
              </h3>
              <p>
                he system has streamlined administrative tasks, such as
                scheduling, referrals, and documentation, freeing up staff time
                to focus more on direct patient care. Real-time alerts and
                notifications for critical patient events or tasks have improved
                response times and proactive care management.
              </p>
            </div>
            <div className="mt-5 flex align-middle items-center">
              <div className="w-16 h-16 relative mr-3">
                <img
                  alt="Mark Ramirez at LawPro Solutions"
                  title="Mark Ramirez at LawPro Solutions"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover -z-0 rounded-full"
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
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 250px, 250px"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT23gnoIRErwkM0xO--XSaGVrgnoU-VaDEgmw&s"
                />
              </div>
              <div>
                <div className="text-lg font-semibold">Dr. Khaled Mohamed</div>
                <div className="font-semibold">Al Abd Dental Clinic</div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg py-6 p-9 mx-3 md:mx-0 flex flex-col justify-between w-full snap-center min-w-[90%] md:min-w-[40%]">
            <div>
              <h3 className="text-xl text-[#0B3E7A] font-semibold mb-5">
                Improved Inventory Management
              </h3>
              <p>
                The platform integrates inventory data with prescription
                information, it helps optimize stock levels and reduce waste.
                Data on frequently prescribed medications and patient needs
                could inform purchasing decisions.
              </p>
            </div>
            <div className="mt-5 flex align-middle items-center">
              <div className="w-16 h-16 relative mr-3">
                <img
                  alt="Dr. Charlie Jabbour at Clinic Dr. Jabbour"
                  title="Dr. Charlie Jabbour at Clinic Dr. Jabbour"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover -z-0 rounded-full"
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
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 250px, 250px"
                  src="https://gludo.org/U/d/2024_09_02/l-pZzgP18sZT275RJ779jS-1725248150.jpg"
                />
              </div>
              <div>
                <div className="text-lg font-semibold">El Ezaby </div>
                <div className="font-semibold">Pharmacy</div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg py-6 p-9 mx-3 md:mx-0 flex flex-col justify-between w-full snap-center min-w-[90%] md:min-w-[40%]">
            <div>
              <h3 className="text-xl text-[#0B3E7A] font-semibold mb-5">
                Seamless Results Reporting
              </h3>
              <p>
                The platform facilitates the timely and secure electronic
                delivery of test results to ordering physicians and other
                authorized healthcare providers. Integration with billing
                systems through the platform can streamline the process of
                generating and submitting claims for laboratory services.
              </p>
            </div>
            <div className="mt-5 flex align-middle items-center">
              <div className="w-16 h-16 relative mr-3">
                <img
                  alt="Dr. Charlie Jabbour at Clinic Dr. Jabbour"
                  title="Dr. Charlie Jabbour at Clinic Dr. Jabbour"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-cover -z-0 rounded-full"
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
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 250px, 250px"
                  src="https://res.cloudinary.com/deqvr46ch/image/upload/v1741634894/care-sync/profile-photos/mnfblistxm7sxztczoq9.jpg"
                />
              </div>
              <div>
                <div className="text-lg font-semibold">Royal </div>
                <div className="font-semibold">Laboratory</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const fields = [
  {
    title: "The best tools for doctors",
    details: "All the tools a doctor would need to manage their patients",
    features: [
      "Pie chart for your hospitals, clinic",
      "Providing dashboards that show their timetables for remainders",
      "Providing current patients’ status and their recent analysis results",
    ],
    image: "/images/Medical.png",
    button: "Register Now",
  },

  {
    title: "Your healthcare process is taken care of with Care Sync Unity",
    details:
      "We take care of everything a patient might need for their healthcare to help them take best service",
    features: [
      "Providing a real time counter of their turn",
      "Determining all the nearest healthcare providers to their region with less prices",
      "Providing a list of top nearest and eligible and qualified doctors to their region",
    ],
    image: "/images/patient.png",
    button: "Register Now",
  },
  {
    title: "Handcrafted to maintain your Medical Clinic",
    details: "All the tools you need are built into Care Sync Unity",
    features: [
      "Helping them to increase their profit.",
      "Make small clinics visible for both patients and doctors",
      "Providing an organized and secure system to deal with patients and doctors",
    ],
    image: "/images/clinic.png",
    button: "Register Now",
  },
  {
    title: "You register, leave the management to us",
    details: "Provieding trainer needs to manage their business",
    features: [
      "When a patient sees a new specialist, the pharmacy within the CareSync Unity System can quickly access the updated medication list",
      "Automation frees up pharmacists' time to focus on clinical tasks, patient counseling, and providing more personalized care",
    ],
    image: "/images/Medical.png",
    button: "Register Now",
  },
  {
    title: "You register, leave the management to us",
    details: "Provieding trainer needs to manage their business",
    features: [
      "When a patient sees a new specialist, the pharmacy within the CareSync Unity System can quickly access the updated medication list",
      "Automation frees up pharmacists' time to focus on clinical tasks, patient counseling, and providing more personalized care",
    ],
    image: "/images/Medical.png",
    button: "Register Now",
  },
];
function Sec5() {
  return (
    <div
      id="fields"
      className="md:h-[110%] 4xl:h-[65%] flex-col flex bg-[#0B3E7A] pt-10"
    >
      <h2 className="text-2xl md:text-4xl md:px-0 px-5 w-full text-center whitespace-pre-wrap grow flex justify-center items-center text-white font-lora font-semibold">
        Specific features <br className="hidden md:block" />
        for your field of work
      </h2>
      <div className="mt-6 flex flex-wrap md:flex-nowrap bg-[#174A86] max-w-full md:w-2/3 justify-between mx-2 md:mx-auto py-2 px-1 rounded-md md:rounded-full relative">
        <div className="w-1/6 hidden left-7 md:inline rounded md:rounded-full h-[90%] top-1 bg-gradient-to-r from-[#3165EB] to-[#2F9CEB] absolute transition-all duration-300 ease-in" />

        <h3 className="p-4  cursor-pointer rounded md:rounded-full text-white transition-all w-1/3 md:w-full text-center ease-in duration-300 z-10 bg-[#1d6699] md:bg-transparent font-semibold text-xl">
          Doctor
        </h3>
        <h3 className="p-4 cursor-pointer rounded md:rounded-full text-white transition-all w-1/3 md:w-full text-center ease-in duration-300 z-10 bg-none font-medium text-base">
          Patient
        </h3>
        <h3 className="p-4 cursor-pointer rounded md:rounded-full text-white transition-all w-1/3 md:w-full text-center ease-in duration-300 z-10 bg-none font-medium text-base">
          Clinic
        </h3>
        <h3 className="p-4 cursor-pointer rounded md:rounded-full text-white transition-all w-1/3 md:w-full text-center ease-in duration-300 z-10 bg-none font-medium text-base">
          Pharmacy
        </h3>
        <h3 className="p-4 cursor-pointer rounded md:rounded-full text-white transition-all w-1/3 md:w-full text-center ease-in duration-300 z-10 bg-none font-medium text-base">
          Laboratory
        </h3>
      </div>
      <div className="mx-2 md:mx-20 mt-10 rounded md:rounded-3xl bg-[#174A86] py-7 h-[70%] md:h-[60%] overflow-hidden">
        {/* fields object */}
        <div className="justify-between w-[600%] flex h-full transition-all duration-1000">
          <div className="w-full">
            <div className="flex flex-col-reverse md:flex-row px-5 md:px-16 h-full w-[100%] transition-opacity duration-100 opacity-100">
              <div className="z-10 grow-[1] md:w-2/6 h-3/4 md:h-full mt-10">
                <h3 className="text-2xl md:text-4xl text-white font-lora font-semibold mb-5">
                  Handcrafted to maintain your Medical Clinic
                </h3>
                <p className="text-white">
                  Whether you are a physiotherapist or a surgeon, all the tools
                  you need are built into Kliniki
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
                        className="w-6 h-6 fill-green-600 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                    <p className="text-white">
                      Custom forms assignable to patients or sessions
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
                        className="w-6 h-6 fill-green-600 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                    <p className="text-white">
                      Exercise dashboard to share videos with your patients
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
                        className="w-6 h-6 fill-green-600 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                    <p className="text-white">
                      Research tools from the National Library of Medicine
                    </p>
                  </div>
                  <a
                    about="Learn more about Handcrafted to maintain your Medical Clinic"
                    aria-label="Handcrafted to maintain your Medical Clinic - Kliniki For Medical Clinics"
                    className="bg-white text-[#0B3E7A] px-8 py-2 rounded font-semibold hover:opacity-75"
                    title="Kliniki For Medical Clinics"
                    href="business/medical-clinics"
                  >
                    Kliniki For Medical Clinics
                  </a>
                </div>
              </div>
              <div className="grow-[3] flex justify-center items-center animate-[slideInFromBottom_ease-in-out_1000ms]">
                <div className="w-full h-[300px] lg:h-full relative">
                  <img
                    alt="Handcrafted to maintain your Medical Clinic"
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
                    src="/public/images/Medical.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
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
                        className="w-6 h-6 fill-green-600 text-white"
                      >
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
                        className="w-6 h-6 fill-green-600 text-white"
                      >
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
                        className="w-6 h-6 fill-green-600 text-white"
                      >
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
                    href="business/dental-clinics"
                  >
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
                    srcSet="
                  _next/image?url=%2Fdental.png&w=640&q=75    640w,
                  /_next/image?url=%2Fdental.png&w=750&q=75   750w,
                  /_next/image?url=%2Fdental.png&w=828&q=75   828w,
                  /_next/image?url=%2Fdental.png&w=1080&q=75 1080w,
                  /_next/image?url=%2Fdental.png&w=1200&q=75 1200w,
                  /_next/image?url=%2Fdental.png&w=1920&q=75 1920w,
                  /_next/image?url=%2Fdental.png&w=2048&q=75 2048w,
                  /_next/image?url=%2Fdental.png&w=3840&q=75 3840w
                "
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
                        className="w-6 h-6 fill-green-600 text-white"
                      >
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
                        className="w-6 h-6 fill-green-600 text-white"
                      >
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
                        className="w-6 h-6 fill-green-600 text-white"
                      >
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
                    href="business/beauty-clinics"
                  >
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
                    srcSet="
                  _next/image?url=%2Fbeauty.png&w=640&q=75    640w,
                  /_next/image?url=%2Fbeauty.png&w=750&q=75   750w,
                  /_next/image?url=%2Fbeauty.png&w=828&q=75   828w,
                  /_next/image?url=%2Fbeauty.png&w=1080&q=75 1080w,
                  /_next/image?url=%2Fbeauty.png&w=1200&q=75 1200w,
                  /_next/image?url=%2Fbeauty.png&w=1920&q=75 1920w,
                  /_next/image?url=%2Fbeauty.png&w=2048&q=75 2048w,
                  /_next/image?url=%2Fbeauty.png&w=3840&q=75 3840w
                "
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
                        className="w-6 h-6 fill-green-600 text-white"
                      >
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
                        className="w-6 h-6 fill-green-600 text-white"
                      >
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
                        className="w-6 h-6 fill-green-600 text-white"
                      >
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
                    href="business/lawyer-practices"
                  >
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
                    srcSet="
                  _next/image?url=%2Flaw.png&w=640&q=75    640w,
                  /_next/image?url=%2Flaw.png&w=750&q=75   750w,
                  /_next/image?url=%2Flaw.png&w=828&q=75   828w,
                  /_next/image?url=%2Flaw.png&w=1080&q=75 1080w,
                  /_next/image?url=%2Flaw.png&w=1200&q=75 1200w,
                  /_next/image?url=%2Flaw.png&w=1920&q=75 1920w,
                  /_next/image?url=%2Flaw.png&w=2048&q=75 2048w,
                  /_next/image?url=%2Flaw.png&w=3840&q=75 3840w
                "
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
                        className="w-6 h-6 fill-green-600 text-white"
                      >
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
                        className="w-6 h-6 fill-green-600 text-white"
                      >
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
                        className="w-6 h-6 fill-green-600 text-white"
                      >
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
                    href="business/personal-trainers"
                  >
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
                    srcSet="
                  _next/image?url=%2Fsports.png&w=640&q=75    640w,
                  /_next/image?url=%2Fsports.png&w=750&q=75   750w,
                  /_next/image?url=%2Fsports.png&w=828&q=75   828w,
                  /_next/image?url=%2Fsports.png&w=1080&q=75 1080w,
                  /_next/image?url=%2Fsports.png&w=1200&q=75 1200w,
                  /_next/image?url=%2Fsports.png&w=1920&q=75 1920w,
                  /_next/image?url=%2Fsports.png&w=2048&q=75 2048w,
                  /_next/image?url=%2Fsports.png&w=3840&q=75 3840w
                "
                    src="_next/image?url=%2Fsports.png&w=3840&q=75"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col-reverse md:flex-row px-5 md:px-16 h-full w-[100%] transition-opacity duration-100">
              <div className="grow-[1] md:w-2/6 h-3/4 md:h-full mt-10">
                <h3 className="text-2xl md:text-4xl text-white font-lora font-semibold mb-5">
                  Focus on your drawing, and leave to rest to us
                </h3>
                <p className="text-white">
                  Whether you run a Tattoo Shop or a Tattoo Removal practice, we
                  provide you with the best tools
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
                        className="w-6 h-6 fill-green-600 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                    <p className="text-white">
                      Appointment management and online scheduling
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
                        className="w-6 h-6 fill-green-600 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                    <p className="text-white">
                      Pictures and file uploads for those amazing before and
                      afters
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
                        className="w-6 h-6 fill-green-600 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                    <p className="text-white">
                      Fully integrated accounting system
                    </p>
                  </div>
                  <a
                    about="Learn more about Focus on your drawing, and leave to rest to us"
                    aria-label="Focus on your drawing, and leave to rest to us - Kliniki For Tattoo Shops"
                    className="bg-white text-[#0B3E7A] px-8 py-2 rounded font-semibold hover:opacity-75"
                    title="Kliniki For Tattoo Shops"
                    href="business/tattoo-shops"
                  >
                    Kliniki For Tattoo Shops
                  </a>
                </div>
              </div>
              <div className="grow-[3] flex justify-center items-center">
                <div className="w-full h-[300px] lg:h-full relative">
                  <img
                    alt="Focus on your drawing, and leave to rest to us"
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
                    srcSet="
                  _next/image?url=%2Ftattoo.png&w=640&q=75    640w,
                  /_next/image?url=%2Ftattoo.png&w=750&q=75   750w,
                  /_next/image?url=%2Ftattoo.png&w=828&q=75   828w,
                  /_next/image?url=%2Ftattoo.png&w=1080&q=75 1080w,
                  /_next/image?url=%2Ftattoo.png&w=1200&q=75 1200w,
                  /_next/image?url=%2Ftattoo.png&w=1920&q=75 1920w,
                  /_next/image?url=%2Ftattoo.png&w=2048&q=75 2048w,
                  /_next/image?url=%2Ftattoo.png&w=3840&q=75 3840w
                "
                    src="_next/image?url=%2Ftattoo.png&w=3840&q=75"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sec6() {
  return (
    <section id="pricing" className="w-full py-12">
      <div className="container min-w-full px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-semibold text-zinc-900">
            Tone up your clinic's management
          </h2>
          <p className="text-sm mt-2 text-zinc-600">
            We offer a range of services to help you manage your work
            efficiently
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center lg:gap-10">
          <div className="flex flex-col items-center justify-center bg-zinc-100 rounded-lg p-8 shadow-sm">
            <svg
              className="h-8 w-8 text-zinc-900 mb-4"
              fill="none"
              height={24}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              width={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx={12} cy={12} r={10} />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <h3 className="text-lg font-semibold mb-2 capitalize">
              Reduce time spent on admin
            </h3>
            <p className="text-zinc-600 text-sm">
              Using automation, Kliniki saves clinics an average of 2.5 hours
              every day - time you could spend building your business.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-zinc-100 rounded-lg p-8 shadow-sm">
            <svg
              className="h-8 w-8 text-zinc-900 mb-4"
              fill="none"
              height={24}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              width={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            <h3 className="text-lg font-semibold mb-2 capitalize">
              Gain new customers
            </h3>
            <p className="text-zinc-600 text-sm">
              We make it easier to capture and retain customers with powerful
              automated marketing features that work for you 24/7.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-zinc-100 rounded-lg p-8 shadow-sm">
            <svg
              className="h-8 w-8 text-zinc-900 mb-4"
              fill="none"
              height={24}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              width={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <h3 className="text-lg font-semibold mb-2 capitalize">
              Improve patient experience
            </h3>
            <p className="text-zinc-600 text-sm">
              From online booking to paperless forms, our system allows you to
              create the perfect patient journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sec7() {
  return (
    <>
      <div className="h-[70vh] md:h-fit flex flex-col justify-between bg-[#F7F9FC] overflow-x-hidden md:overflow-x-auto">
        <div className="h-full grow bg-gradient-to-r from-[#0B3E7A] to-[#477BFF] relative box-content">
          <div className="py-16 px-3 md:pl-20 text-white flex flex-col h-full z-50 relative">
            <div className="grow-[2] md:hidden" />
            <div className="pb-2">What are you waiting for?</div>
            <div className="text-4xl font-lora font-medium">
              Unlock a full month of free <br />
              access on the platform
            </div>
            <div className="md:flex mt-10 md:grow items-end">
              <a
                className="w-1/3"
                aria-label="Get Started Free - Start now"
                title="Click to get started for free"
                href="https://caresyncunity.live/login"
              >
                <div className="mb-5 md:mb-0 grow text-sm text-white text-center items-center transition-all  bg-gradient-to-t from-[#3266EB] to-[#309DEB] font-semibold rounded-md px-5 p-3 border-gray-200 hover:opacity-90">
                  Get Started Now - It's Free!
                </div>
              </a>
            </div>
          </div>
          <div className="absolute h-1/2 md:h-full -top-12 md:top-0 z-0 w-[120%] md:w-[50%] -right-[30%] md:right-0">
            <svg
              width={350}
              height={320}
              viewBox="0 0 377 377"
              fill="none"
              className="absolute -top-[5%] right-[20%] z-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.6"
                cx="188.5"
                cy="188.5"
                r={188}
                stroke="#ECECF1"
              />
            </svg>
            <img
              alt="image"
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
              src="/images/laptop.png"
            />
          </div>
        </div>{" "}
        <div
          id="contact-us"
          className=" w-full flex-col flex justify-center items-center py-15"
        >
          <h1 className="text-3xl md:text-5xl font-lora font-semibold text-[#0B3E7A] text-center">
            Contact Us
          </h1>

          <h3 className="text-xl font-lora font-semibold my-5 text-center">
            Let's build your dream
          </h3>
          <div className=" bg-zinc-100 rounded-lg p-8 shadow-sm  w-full md:w-1/2 lg:w-1/3 md:mb-[10%]">
            <form action="/api/contact" method="POST">
              <div className="mb-5">
                <div className="text-sm font-semibold  font-inter leading-[24px] mb-1">
                  Name
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    id="name"
                    className="p-3 pl-5 w-full rounded-md border-2 disabled:bg-amber-50"
                    name="name"
                    fdprocessedid="2y6fk5"
                  />
                </div>
              </div>
              <div className="mb-5">
                <div className="text-sm font-semibold font-inter leading-[24px] mb-1">
                  Email
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    id="email"
                    className="p-3 pl-5 w-full rounded-md border-2 disabled:bg-inherit"
                    name="email"
                    fdprocessedid="4jbbn8"
                  />
                </div>
              </div>
              <div className="mb-5">
                <div className="text-sm font-semibold font-inter leading-[24px] mb-1">
                  Phone Number
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="+201234567891"
                    id="phone"
                    className="p-3 pl-5 w-full rounded-md border-2 disabled:bg-inherit"
                    name="phone"
                    fdprocessedid="myi4r"
                  />
                </div>
              </div>
              <div className="mb-5">
                <div className="text-sm font-semibold font-inter leading-[24px] mb-1">
                  Country
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Egypt"
                    id="country"
                    className="p-3 pl-5 w-full rounded-md border-2 disabled:bg-inherit"
                    name="country"
                    fdprocessedid="r4dyzt8"
                  />
                </div>
              </div>
              <div className="mb-5">
                <div className="text-sm font-semibold font-inter leading-[24px] mb-1">
                  How can we help?
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your problem..."
                    rows={4}
                    id="details"
                    name="details"
                    className="p-3 pl-5 w-full rounded-md border-2 disabled:bg-inherit resize-none"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="flex justify-center md:py-0 py-5">
                <button
                  className=" w-[60%] md:w-full lg:w-[50%] m-auto bg-[#0B3E7A] text-center items-center transition-all uppercase text-white font-semibold rounded-md px-4 py-2  border-gray-200 hover:opacity-90"
                  fdprocessedid="v73y6j"
                >
                  <div className="flex mx-auto justify-center">
                    Send Message{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6  ml-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="bg-[#F7F9FC]">
            <div className="pt-14 flex flex-col justify-between px-5 text-center md:text-left md:px-20 text-sm">
              <div className="pb-5 flex flex-col justify-center items-center w-full">
                <div className="text-4xl text-[#29419B] mb-5 font-extrabold">
                  Care Sync Unity
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-8 text-[#5B5B5B] px-4 py-8 text-center">
                  <a
                    className="hover:font-semibold w-[135px]"
                    title="The leading beauty clinic management platform"
                    aria-label="The leading beauty clinic management software"
                    about="The leading beauty clinic software"
                    href="#"
                  >
                    <h2>Clinic dashboard</h2>
                  </a>
                  <a
                    className="hover:font-semibold w-[135px]"
                    title="The leading dental clinic management platform"
                    aria-label="The leading dental clinic management software"
                    about="The leading dental clinic software"
                    href="#"
                  >
                    <h2>Doctor dashboard</h2>
                  </a>
                  <a
                    className="hover:font-semibold w-[135px]"
                    title="The leading lawyer practice management platform"
                    aria-label="The leading lawyer practice management software"
                    about="The leading lawyer practice software"
                    href="#"
                  >
                    <h2>Patient dashboard</h2>
                  </a>
                  <a
                    className="hover:font-semibold w-[135px]"
                    title="The leading medical clinic management platform"
                    aria-label="The leading medical clinic management software"
                    about="The leading medical clinic software"
                    href="#"
                  >
                    <h2>Pharmacy dashboard</h2>
                  </a>
                  <a
                    className="hover:font-semibold w-[140px]"
                    title="The leading personal trainers management platform"
                    aria-label="The leading personal trainers management software"
                    about="The leading personal trainers software"
                    href="#"
                  >
                    <h2>Laboratory dashboard</h2>
                  </a>

                  <a
                    className="hover:font-semibold w-[115px]"
                    title="The leading all in one management platform"
                    aria-label="The leading fully customizable management software"
                    about="The leading management software"
                    href="#"
                  >
                    <h2>Many More!</h2>
                  </a>
                </div>
                <div className="flex gap-5 justify-center mb-5">
                  <a target="_blank" aria-label="Instagram">
                    <div className="w-5 undefined">
                      <svg
                        strokeWidth="1.5"
                        stroke="currentColor"
                        version="1.1"
                        viewBox="0 0 512 512"
                        width="100%"
                        fill="#29419B"
                      >
                        <path d="M251.921,0.159C183.503,0.159 174.924,0.449 148.054,1.675C121.24,2.899 102.927,7.157 86.902,13.385C70.336,19.823 56.287,28.437 42.282,42.442C28.277,56.447 19.663,70.496 13.225,87.062C6.997,103.086 2.739,121.399 1.515,148.213C0.289,175.083 0,183.662 0,252.08C0,320.497 0.289,329.076 1.515,355.946C2.739,382.76 6.997,401.073 13.225,417.097C19.663,433.663 28.277,447.712 42.282,461.718C56.287,475.723 70.336,484.337 86.902,490.775C102.927,497.002 121.24,501.261 148.054,502.484C174.924,503.71 183.503,504 251.921,504C320.338,504 328.917,503.71 355.787,502.484C382.601,501.261 400.914,497.002 416.938,490.775C433.504,484.337 447.553,475.723 461.559,461.718C475.564,447.712 484.178,433.663 490.616,417.097C496.843,401.073 501.102,382.76 502.325,355.946C503.551,329.076 503.841,320.497 503.841,252.08C503.841,183.662 503.551,175.083 502.325,148.213C501.102,121.399 496.843,103.086 490.616,87.062C484.178,70.496 475.564,56.447 461.559,42.442C447.553,28.437 433.504,19.823 416.938,13.385C400.914,7.157 382.601,2.899 355.787,1.675C328.917,0.449 320.338,0.159 251.921,0.159ZM251.921,45.551C319.186,45.551 327.154,45.807 353.718,47.019C378.28,48.14 391.619,52.244 400.496,55.693C412.255,60.263 420.647,65.723 429.462,74.538C438.278,83.353 443.737,91.746 448.307,103.504C451.757,112.381 455.861,125.72 456.981,150.282C458.193,176.846 458.45,184.814 458.45,252.08C458.45,319.345 458.193,327.313 456.981,353.877C455.861,378.439 451.757,391.778 448.307,400.655C443.737,412.414 438.278,420.806 429.462,429.621C420.647,438.437 412.255,443.896 400.496,448.466C391.619,451.916 378.28,456.02 353.718,457.14C327.158,458.352 319.191,458.609 251.921,458.609C184.65,458.609 176.684,458.352 150.123,457.14C125.561,456.02 112.222,451.916 103.345,448.466C91.586,443.896 83.194,438.437 74.378,429.621C65.563,420.806 60.103,412.414 55.534,400.655C52.084,391.778 47.98,378.439 46.859,353.877C45.647,327.313 45.391,319.345 45.391,252.08C45.391,184.814 45.647,176.846 46.859,150.282C47.98,125.72 52.084,112.381 55.534,103.504C60.103,91.746 65.563,83.353 74.378,74.538C83.194,65.723 91.586,60.263 103.345,55.693C112.222,52.244 125.561,48.14 150.123,47.019C176.687,45.807 184.655,45.551 251.921,45.551Z" />
                        <path d="M251.921,336.053C205.543,336.053 167.947,298.457 167.947,252.08C167.947,205.702 205.543,168.106 251.921,168.106C298.298,168.106 335.894,205.702 335.894,252.08C335.894,298.457 298.298,336.053 251.921,336.053ZM251.921,122.715C180.474,122.715 122.556,180.633 122.556,252.08C122.556,323.526 180.474,381.444 251.921,381.444C323.367,381.444 381.285,323.526 381.285,252.08C381.285,180.633 323.367,122.715 251.921,122.715Z" />
                        <path d="M416.627,117.604C416.627,134.3 403.092,147.834 386.396,147.834C369.701,147.834 356.166,134.3 356.166,117.604C356.166,100.908 369.701,87.374 386.396,87.374C403.092,87.374 416.627,100.908 416.627,117.604Z" />
                      </svg>
                    </div>
                  </a>
                  <a target="_blank" aria-label="Facebook">
                    <div className="w-5 undefined">
                      <svg
                        strokeWidth="1.5"
                        stroke="currentColor"
                        version="1.1"
                        viewBox="0 0 512 512"
                        width="100%"
                        fill="#29419B"
                      >
                        <path d="M374.244,285.825l14.105,-91.961l-88.233,0l0,-59.677c0,-25.159 12.325,-49.682 51.845,-49.682l40.116,0l0,-78.291c0,0 -36.407,-6.214 -71.213,-6.214c-72.67,0 -120.165,44.042 -120.165,123.775l0,70.089l-80.777,0l0,91.961l80.777,0l0,222.31c16.197,2.541 32.798,3.865 49.709,3.865c16.911,0 33.511,-1.324 49.708,-3.865l0,-222.31l74.128,0Z" />
                      </svg>
                    </div>
                  </a>
                  <a target="_blank" aria-label="LinkedIn">
                    <div className="w-5 undefined">
                      <svg
                        width="100%"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.41367 0.120914C1.61811 0.0403045 1.83656 0.00151516 2.05616 0.00682821C2.48605 0.0172286 2.89483 0.195795 3.19521 0.504385C3.49558 0.812974 3.66373 1.22712 3.66373 1.65836C3.66373 2.08961 3.49558 2.50375 3.19521 2.81234C2.89483 3.12093 2.48605 3.2995 2.05616 3.3099C1.83656 3.31521 1.61811 3.27642 1.41367 3.19581C1.20924 3.11521 1.02294 2.9944 0.865753 2.84052C0.708562 2.68663 0.583648 2.50277 0.498362 2.29976C0.413076 2.09674 0.369141 1.87866 0.369141 1.65836C0.369141 1.43807 0.413076 1.21999 0.498362 1.01697C0.583648 0.813955 0.708562 0.630095 0.865753 0.47621C1.02294 0.322325 1.20924 0.201523 1.41367 0.120914Z"
                          fill="#29419B"
                        />
                        <path
                          d="M8.04544 5.86241C8.42301 5.14547 9.33626 4.39106 10.7095 4.39106C13.5728 4.39106 14.0941 6.26123 14.0941 8.71571V13.7313H11.2797V9.28657C11.2797 8.22751 11.2605 6.88398 9.81156 6.88398C8.3406 6.88398 8.10486 8.03626 8.10486 9.22602V13.7313H5.28942V4.60153H7.98507V5.86241H8.04544Z"
                          fill="#29419B"
                        />
                        <path
                          d="M0.678148 13.7313V4.60153H3.5233V13.7313H0.678148Z"
                          fill="#29419B"
                        />
                      </svg>
                    </div>
                  </a>
                  <a target="_blank" aria-label="Youtube">
                    <div className="w-5 undefined">
                      <svg
                        width="100%"
                        version="1.1"
                        id="Layer_1"
                        viewBox="0 0 461.001 461.001"
                        fill="#29419B"
                      >
                        <g>
                          <path d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728   c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137   C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607   c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z" />
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="mb-16 text-center">
                  The easiest way to manage your practice
                </div>
                <div className="flex w-[90%] md:w-[50%] justify-between">
                  <div className="pb-2 font-bold">
                    <a
                      title="Click to go to the Blog page"
                      className="hover:underline"
                      aria-label="The Kliniki Blog"
                      href="#features"
                    >
                      Features
                    </a>
                  </div>
                  <div className="pb-2 font-bold">
                    <a
                      title="Click to go to the Support page"
                      className="hover:underline"
                      aria-label="Kliniki Customer Support"
                      href="#fields"
                    >
                      Fields
                    </a>
                  </div>
                  <div className="pb-2 font-bold">
                    <a
                      href="#pricing"
                      title="View the Pricing section"
                      className="hover:underline"
                      aria-label="The Kliniki Platform Pricing"
                    >
                      Pricing
                    </a>
                  </div>
                  <div className="pb-2 font-bold">
                    <a
                      title="Click to go to the Resellers page"
                      className="hover:underline"
                      aria-label="Resell the Kliniki Platform"
                      href="#contact-us"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <a
                title="Click to view HBTech's website"
                href="https://www.hb-tech.org"
              >
                <div className="py-8 border-t text-center mt-10 md:mt-0 text-[#4B5563] text-xs">
                  All rights reserved © 2025 CareSyncUnity
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default Body;
