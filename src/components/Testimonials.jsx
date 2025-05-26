import { motion } from "framer-motion";
import { FadeLeft } from "../utility/animation";

function Testimonials() {
  return (
    <div className="h-full md:h-2/3 flex flex-col relative">
      <div className="grow bg-[#F7F9FC]" />
      <div className="grow-[2] bg-[#0B3E7A]" />
      <motion.div
        variants={FadeLeft(0.1)}
        initial="hidden"
        whileInView="visible"
        className="absolute w-screen top-[5%] left-0 overflow-x-auto">
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

export default Testimonials;
