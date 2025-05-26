function CallToAction() {
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
                href="https://caresyncunity.live/login">
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
              xmlns="http://www.w3.org/2000/svg">
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
      </div>{" "}
    </>
  );
}
export default CallToAction;
