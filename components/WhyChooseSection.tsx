import React from "react";

export default function WhyChooseSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center md:text-left mb-4">Why Choose Dentalis?</h2>
          <p className="italic text-lg text-gray-700 text-center md:text-left mb-6">
            <span className="font-semibold">Dentalis</span> is The <span className="font-bold">Best Dental Clinic in Whitefield</span> <span className="not-italic">If you are looking for exceptional and budget friendly dental care solutions, you have come to the right place!</span>
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-base">
            <li>State of the art facilities and Your one stop solution for all your dental needs.</li>
            <li>We always use the best quality products from the best brands available. We believe in quality over quantity.</li>
            <li>One to one Patient-Doctor approach, we make you worry less and clear your doubts instantly.</li>
            <li>We value your time and comfort, our team of Doctors work efficiently to restore your smile back to its full glory in the shortest amount of time.</li>
            <li>We are the best and also in your budget, so you wouldn&apos;t have to think twice.</li>
            <li>Our doctors focus on delivering smiles in a painless manner. That is you won&apos;t feel a thing during our treatment.</li>
          </ul>
        </div>
        {/* Right: Video */}
        <div className="flex justify-center">
          <div className="w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Dentalis Book Your Appointment | Invisalign Aligners"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
} 