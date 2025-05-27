import React from "react";

export default function AboutSection() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            JIS - Multi-Speciality Oral Health Centre, Pathanapuram
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Excellent Dentistry<span role="img" aria-label="tooth">🦷</span> in the <span role="img" aria-label="heart">❤️</span> of Bengaluru!
          </h3>
          <p className="text-gray-700 text-base sm:text-lg mb-2">
            JIS is a MultiSpeciality Oral Health Care <span className="font-semibold">Dental Clinic in Pathanapuram</span>.<br />
            We have a team of highly qualified dentists and dental hygienists who are trained to provide the best dental care to our clients. We use state-of-the-art equipment and latest technologies to deliver quality dental care to our patients.
          </p>
        </div>
        {/* Right Column */}
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Everything You Need Under One Roof</h4>
            <p className="text-gray-700 text-base">
              Our comprehensive services allow you to receive all needed dental care right here in our state-of-art <span className="font-semibold">dental clinic in whitefield</span> – from dental cleanings and fillings to dental implants and extractions.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Our Patient-Focused Approach</h4>
            <p className="text-gray-700 text-base">
              Your treatment plan will perfectly match your needs, lifestyle, and goals. Even if it&apos;s been years since you last visited the dentist, we can help. Our comfortable office, compassionate team, and minimally-invasive treatments will help you feel completely at ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 