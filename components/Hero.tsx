"use client";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center min-h-[80vh] flex items-center justify-center px-4 sm:px-8"
      style={{ backgroundImage: "url('/images/hero.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl w-full">
        {/* Left: Text */}
        <div className="text-white max-w-xl space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Best Dental Clinic in Pathanapuram
          </h1>
          <p className="text-lg">
            Affordable, Gentle, and Experienced Dentists in Pathanapuram.
            <br />
            Book an Appointment now!
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+911234567890"
              className="bg-teal-700 hover:bg-teal-800 active:bg-teal-900 text-white px-4 py-2 rounded flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
              aria-label="Call the clinic"
            >
              <FaPhoneAlt /> Call
            </a>
            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-4 py-2 rounded flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="https://goo.gl/maps/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-4 py-2 rounded flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              aria-label="View location on Google Maps"
            >
              <FaMapMarkerAlt /> Location
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <form className="bg-white p-6 sm:p-8 rounded shadow-xl w-full max-w-md space-y-4 mx-auto mt-8 md:mt-0">
          <div className="text-center">
            <img
              src="/logo.webp"
              alt="Dentalis Logo"
              className="mx-auto h-10 mb-2"
            />
            <h3 className="font-semibold text-lg text-black">Book a Consultation!</h3>
          </div>
          <label className="block text-black">
            <span className="sr-only">Your Name</span>
            <input
              type="text"
              placeholder="Your Name*"
              className="border-b w-full py-2 focus:outline-none focus:border-teal-700 text-black placeholder:text-black"
              required
            />
          </label>
          <label className="block text-black">
            <span className="sr-only">Phone Number</span>
            <input
              type="tel"
              placeholder="Phone Number*"
              className="border-b w-full py-2 focus:outline-none focus:border-teal-700 text-black placeholder:text-black"
              required
            />
          </label>
          <label className="block text-black">
            <span className="sr-only">Select a service</span>
            <select className="border-b w-full py-2 focus:outline-none focus:border-teal-700 text-black">
              <option>Select a service</option>
              <option>Cleaning</option>
              <option>Braces</option>
              <option>Whitening</option>
            </select>
          </label>
          <button
            type="submit"
            className="bg-teal-700 hover:bg-teal-800 active:bg-teal-900 text-white px-4 py-2 rounded w-full flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
          >
            Submit <FaArrowRight />
          </button>
        </form>
      </div>
    </section>
  );
}
