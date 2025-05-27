import React from "react";

const WhiteCheckIcon = () => (
  <svg
    className="w-7 h-7 min-w-7 min-h-7"
    fill="none"
    stroke="white"
    strokeWidth="3"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2" fill="none" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 13l3 3 6-6" />
  </svg>
);

export default function PersonalTouchSection() {
  return (
    <section className="w-full py-12 md:py-16 px-4 sm:px-8">
      <div className="flex flex-col md:flex-row w-full min-h-[350px]">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full h-64 md:h-auto">
          <img
            src="/images/hero.webp"
            alt="Dentalis Reception"
            className="object-cover w-full h-full rounded-t-xl md:rounded-t-none md:rounded-l-xl"
          />
        </div>
        {/* Right: Content */}
        <div className="md:w-1/2 w-full bg-teal-700 flex flex-col justify-center p-8 md:p-16 text-white rounded-b-xl md:rounded-b-none md:rounded-r-xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Dental Care with a Personal Touch</h2>
          <ul className="space-y-6 text-lg">
            <li className="flex items-center gap-4">
              <WhiteCheckIcon />
              <span>Expert Dental Specialists</span>
            </li>
            <li className="flex items-center gap-4">
              <WhiteCheckIcon />
              <span>State of the art Facilities</span>
            </li>
            <li className="flex items-center gap-4">
              <WhiteCheckIcon />
              <span>Affordable Dental treatments</span>
            </li>
            <li className="flex items-center gap-4">
              <WhiteCheckIcon />
              <span>All in one Dental Destination</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
} 