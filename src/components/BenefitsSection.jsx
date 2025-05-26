

function BenefitsSection() {
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
              xmlns="http://www.w3.org/2000/svg">
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
              xmlns="http://www.w3.org/2000/svg">
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
              xmlns="http://www.w3.org/2000/svg">
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
export default BenefitsSection;