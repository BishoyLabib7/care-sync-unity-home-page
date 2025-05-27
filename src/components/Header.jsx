/* function Header() {
  return (
    <header className="sm:px-16 md:px-24 lg:px-36 shadow-md bg-[#0B3E7A] text-white flex justify-between items-center p-2 w-full sticky top-0 z-50 h-[91px]">
      <div className="md:hidden">
        <div className="cursor-pointer px-5">
          <svg
            width={20}
            height={14}
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              d="M1 1h18M1 7h18M1 13h18"
            />
          </svg>
        </div>
        <div className="fixed bg-black flex items-center bg-opacity-60 top-0 left-0 w-screen h-screen hidden" />
        <div className="-translate-x-60 w-60 transition-all fixed top-0 left-0 p-5 shadow-lg h-full bg-[#0B3E7A] flex flex-col rounded-r-lg z-10">
          <div className="border-b pb-5">
            <img
              alt="Kliniki Logo"
              loading="lazy"
              width={188}
              height={75}
              decoding="async"
              data-nimg={1}
              style={{ color: "transparent" }}
            />
          </div>
          <div className="flex flex-col h-full pl-5 pt-5 gap-10 text-white font-manrope">
            <a className="text-xl" href="#features">
              Features
            </a>
            <a className="text-xl" href="#fields">
              Fields
            </a>
            <a
              className="text-xl"
              title="Click to go to the Resellers page"
              href="#pricing"
            >
              Pricing
            </a>
            <a className="text-xl" href="#faq" title="Open website menu">
              FAQ
            </a>
          </div>
        </div>
      </div>
      <div className="relative grow">
        <div className="w-fit">
          <a href>
            <div className="flex items-center gap-2">
              {" "}
              <img
                alt="care-sync Logo"
                loading="lazy"
                width={70}
                height={75}
                className=" move"
                // style={{ color: "transparent" }}
                src="/images/logo-icon.png"
              />
              <img
                alt="care-sync Logo"
                loading="lazy"
                width={70}
                height={75}
                className="logo"
                // style={{ color: "transparent" }}
                src="/images/care-sync-unity-logo.png"
              />{" "}
            </div>
          </a>
        </div>
      </div>
      <div className="hidden grow md:flex justify-between">
        <a
          href="#features"
          aria-label="Features"
          title="View the Features section"
        >
          Features
        </a>
        <a
          href="#fields"
          aria-label="    Fields"
          title="View the Pricing section"
        >
          Fields
        </a>
        <a
          aria-label="Resell"
          title="Click to go to the Resellers page"
          href="#pricing"
        >
          Pricing
        </a>
        <a
          href="#contact-us"
          aria-label="Frequently Asked Questions (FAQ)"
          title="View the Frequently Asked Questions section"
        >
          
        </a>
      </div>
      <div className="grow flex-row-reverse flex">
        <a
          className
          aria-label="Get Started Free - Start now"
          title="Click to get started for free"
          href="https://caresyncunity.live/login"
        >
          <button
            className="text-[#0B3E7A] text-center flex items-center justify-center transition-all capitalize bg-white font-semibold rounded-md border-gray-200 hover:opacity-90 h-[40px] w-[155px]"
            aria-label="Start for Free"
            title="Start for Free"
          >
            <div className="flex items-center gap-2  font-manrope">
              Start now{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 undefined"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </button>
        </a>
      </div>
    </header>
  );
}

export default Header;
 */
/* import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sm:px-16 md:px-24 lg:px-36 shadow-md bg-[#0B3E7A] text-white flex justify-between items-center p-2 w-full sticky top-0 z-50 h-[91px]">
      <div className="md:hidden ">
        <div className="cursor-pointer px-5" onClick={toggleMenu}>
          <svg
            width={20}
            height={14}
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              d="M1 1h18M1 7h18M1 13h18"
            />
          </svg>
        </div>
        
        <div
          className={`fixed bg-blue-400 blur-[150px] top-0 left-0 w-screen h-screen ${
            menuOpen ? "block" : "hidden"
          }`}
          onClick={toggleMenu}
        />
        
        <div
          className={`${
            menuOpen ? "translate-x-0" : "-translate-x-60"
          } w-60 transition-all fixed  top-0 left-0 p-5 shadow-lg h-full bg-[#0B3E7A] flex flex-col rounded-r-lg z-50`}>
          <div className="border-b pb-5">
            <img
              alt="Kliniki Logo"
              loading="lazy"
              width={188}
              height={75}
              decoding="async"
              data-nimg={1}
              style={{ color: "transparent" }}
              src="/images/logo-icon.png"
            />
          </div>
          <div className="flex flex-col h-full pl-5 pt-5 gap-10 text-white font-manrope">
            <a className="text-xl" href="#features">
              Features
            </a>
            <a className="text-xl" href="#fields">
              Fields
            </a>
            <a
              className="text-xl"
              title="Click to go to the Resellers page"
              href="#pricing">
              Pricing
            </a>
            <a className="text-xl" href="#contact-us" title="Open website menu">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="relative grow">
        <div className="w-fit">
          <a href="#">
            <div className="flex items-center gap-2">
              <img
                alt="care-sync Logo"
                loading="lazy"
                width={70}
                height={75}
                className="move"
                src="/images/logo-icon.png"
              />
              <img
                alt="care-sync Logo"
                loading="lazy"
                width={70}
                height={75}
                className="logo"
                src="/images/care-sync-unity-logo.png"
              />
            </div>
          </a>
        </div>
      </div>
      <div className="hidden grow md:flex justify-between">
        <a
          href="#features"
          aria-label="Features"
          title="View the Features section">
          Features
        </a>
        <a href="#fields" aria-label="Fields" title="View the Fields section">
          Fields
        </a>
        <a
          aria-label="Resell"
          title="Click to go to the Resellers page"
          href="#pricing">
          Pricing
        </a>
        <a
          href="#contact-us"
          aria-label="Frequently Asked Questions (FAQ)"
          title="View the Frequently Asked Questions section">
          Contact Us
        </a>
      </div>
      <div className="grow flex-row-reverse flex">
        <a
          className
          aria-label="Get Started Free - Start now"
          title="Click to get started for free"
          href="https://caresyncunity.live/login">
          <button
            className="text-[#0B3E7A] text-center flex items-center justify-center transition-all capitalize bg-white font-semibold rounded-md border-gray-200 hover:opacity-90 h-[40px] w-[155px]"
            aria-label="Start for Free"
            title="Start for Free">
            <div className="flex items-center gap-2 font-manrope">
              Start now{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </button>
        </a>
      </div>
    </header>
  );
}

export default Header;
 */
import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sm:px-16 md:px-24 lg:px-36 shadow-md bg-[#0B3E7A]  text-white flex justify-between items-center p-2 w-full sticky top-0 z-50 h-[91px]">
      <div className="md:hidden ">
        <div className="cursor-pointer px-5" onClick={toggleMenu}>
          <svg
            width={20}
            height={14}
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              d="M1 1h18M1 7h18M1 13h18"
            />
          </svg>
        </div>
        {/* Overlay */}
        <div
          className={`fixed bg-blue-400 blur-[150px] top-0 left-0 w-screen h-screen ${
            menuOpen ? "block" : "hidden"
          }`}
          onClick={toggleMenu}
        />
        {/* Sidebar */}
        <div
          className={`${
            menuOpen ? "translate-x-0" : "-translate-x-60"
          } w-60 transition-all fixed top-0 left-0 p-5 shadow-lg h-full bg-[#0B3E7A] flex flex-col rounded-r-lg z-50`}>
          <div className="border-b pb-5">
            <img
              alt="Kliniki Logo"
              loading="lazy"
              width={188}
              height={75}
              decoding="async"
              data-nimg={1}
              style={{ color: "transparent" }}
              src="/images/logo-icon.png"
            />
          </div>
          <div className="flex flex-col h-full pl-5 pt-5 gap-10 text-white font-manrope">
            {/* Add onClick={closeMenu} to each link */}
            <a className="text-xl" href="#features" onClick={closeMenu}>
              Features
            </a>
            <a className="text-xl" href="#fields" onClick={closeMenu}>
              Fields
            </a>
            <a
              className="text-xl"
              title="Click to go to the Resellers page"
              href="#pricing"
              onClick={closeMenu}>
              Pricing
            </a>
            <a className="text-xl" href="#contact-us" onClick={closeMenu} title="Open website menu">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="relative grow">
        <div className="w-fit">
          <a href="#">
            <div className="flex items-center gap-2">
              <img
                alt="care-sync Logo"
                loading="lazy"
                width={70}
                height={75}
                className="move"
                src="/images/logo-icon.png"
              />
              <img
                alt="care-sync Logo"
                loading="lazy"
                width={70}
                height={75}
                className="logo"
                src="/images/care-sync-unity-logo.png"
              />
            </div>
          </a>
        </div>
      </div>
      <div className="hidden grow md:flex justify-between">
        <a
          href="#features"
          aria-label="Features"
          title="View the Features section">
          Features
        </a>
        <a href="#fields" aria-label="Fields" title="View the Fields section">
          Fields
        </a>
        <a
          aria-label="Resell"
          title="Click to go to the Resellers page"
          href="#pricing">
          Pricing
        </a>
        <a
          href="#contact-us"
          aria-label="Frequently Asked Questions (FAQ)"
          title="View the Frequently Asked Questions section">
          Contact Us
        </a>
      </div>
      <div className="grow flex-row-reverse flex">
        <a
          className
          aria-label="Get Started Free - Start now"
          title="Click to get started for free"
          href="https://caresyncunity.live/login">
          <button
            className="text-[#0B3E7A] text-center flex items-center justify-center transition-all capitalize bg-white font-semibold rounded-md border-gray-200 hover:opacity-90 h-[40px] w-[155px]"
            aria-label="Start for Free"
            title="Start for Free">
            <div className="flex items-center gap-2 font-manrope">
              Start now{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </button>
        </a>
      </div>
    </header>
  );
}

export default Header;
