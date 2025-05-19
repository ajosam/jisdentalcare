"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const doctors = [
  {
    name: "Dr. Jibin Joy",
    image: "/images/jibin.jpeg",
    bio: `Dr. Jibin Joy - A compassionate dentist with over five years of clinical experience, specializing in oral surgery, implants, full mouth rehabilitation, lasers, and more. With a strong focus on patient care, he emphasizes painless dentistry and works to alleviate any fears patients may have about invasive procedures. Dr. Clement values a collaborative approach, ensuring he works closely with patients throughout their treatment and follow-ups, fostering a comfortable and reassuring environment for everyone.`
  },
  {
    name: "Dr. Soumya Sajan",
    image: "/images/soumya.jpg",
    bio: `Dr. Soumya Sajan - An experienced orthodontist with a passion for creating beautiful smiles. She specializes in braces, aligners, and pediatric dentistry. Dr. Jane is known for her gentle approach and dedication to patient education, making sure every patient feels confident and informed about their treatment.`
  }
];

export default function DoctorsSection() {
  const [current, setCurrent] = useState(0);
  const total = doctors.length;
  const doctor = doctors[current];

  const prevDoctor = () => setCurrent((prev) => (prev - 1 + total) % total);
  const nextDoctor = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">Meet our Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Doctor Image with arrows */}
          <div className="flex items-center justify-center relative">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-teal-700 shadow-md z-10"
              onClick={prevDoctor}
              aria-label="Previous doctor"
            >
              <FaChevronLeft size={24} />
            </button>
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-72 h-72 object-cover rounded-xl border shadow-md mx-auto"
            />
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-teal-700 shadow-md z-10"
              onClick={nextDoctor}
              aria-label="Next doctor"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
          {/* Right: Doctor Info */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-teal-700 mb-4">{doctor.name}</h3>
            <p className="text-gray-800 text-lg leading-relaxed">
              {doctor.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 