

function ContactUsSection() {
  return (
    <div
      id="contact-us"
      className=" w-full flex-col flex justify-center items-center py-15">
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
              fdprocessedid="v73y6j">
              <div className="flex mx-auto justify-center">
                Send Message{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6  ml-5">
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
  );
}
export default ContactUsSection;