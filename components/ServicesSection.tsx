import React from "react";

const services = [
  "Root Canal Treatment",
  "Dental Implants",
  "Dental Consultation",
  "Teeth Whitening",
  "Dental Crowns",
  "Scaling & Polishing",
  "Oral Surgery",
  "Pediatric Dentistry",
  "Cosmetic Dentistry",
  "Periodontology (Gum Problems)",
  "Dental Fillings",
  "Orthodontics (Braces & Aligners)",
  "Dentures",
  "Invisalign Clear Aligners",
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">Dental Services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col items-center p-6 w-full max-w-[200px] min-h-[180px] transition hover:shadow-lg text-center"
            >
              <span className="text-5xl mb-4" role="img" aria-label="tooth">🦷</span>
              <span className="font-semibold text-lg text-gray-900 break-words">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 