/* eslint-disable */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaTooth, FaSmile, FaTeethOpen, FaUserMd, FaRegHeart, FaStar, FaChild, FaPhoneAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaTooth className="text-teal-700 text-3xl mb-2" />,
    name: "Root Canal Treatment",
    desc: "Painless, precise root canal therapy to save your natural tooth."
  },
  {
    icon: <FaSmile className="text-teal-700 text-3xl mb-2" />,
    name: "Teeth Whitening",
    desc: "Brighten your smile safely with professional whitening."
  },
  {
    icon: <FaTeethOpen className="text-teal-700 text-3xl mb-2" />,
    name: "Dental Implants",
    desc: "Permanent, natural-looking tooth replacement solutions."
  },
  {
    icon: <FaUserMd className="text-teal-700 text-3xl mb-2" />,
    name: "Oral Surgery",
    desc: "Expert surgical care for wisdom teeth, extractions, and more."
  },
  {
    icon: <FaChild className="text-teal-700 text-3xl mb-2" />,
    name: "Pediatric Dentistry",
    desc: "Gentle dental care for children in a friendly environment."
  },
  {
    icon: <FaRegHeart className="text-teal-700 text-3xl mb-2" />,
    name: "Gum Treatment",
    desc: "Advanced care for healthy gums and a strong foundation."
  },
  {
    icon: <FaStar className="text-teal-700 text-3xl mb-2" />,
    name: "Cosmetic Dentistry",
    desc: "Smile makeovers, veneers, and aesthetic enhancements."
  },
  {
    icon: <FaTooth className="text-teal-700 text-3xl mb-2" />,
    name: "Dental Crowns & Bridges",
    desc: "Restore function and beauty with custom crowns and bridges."
  },
  {
    icon: <FaSmile className="text-teal-700 text-3xl mb-2" />,
    name: "Braces & Aligners",
    desc: "Straighten teeth discreetly with modern orthodontics."
  }
];

const benefits = [
  {
    icon: <FaUserMd className="text-teal-700 text-2xl mb-1" />,
    title: "Expert Team",
    desc: "Highly qualified dentists and specialists."
  },
  {
    icon: <FaRegHeart className="text-teal-700 text-2xl mb-1" />,
    title: "Gentle Care",
    desc: "Patient comfort is our top priority."
  },
  {
    icon: <FaStar className="text-teal-700 text-2xl mb-1" />,
    title: "Modern Technology",
    desc: "State-of-the-art equipment for best results."
  },
  {
    icon: <FaSmile className="text-teal-700 text-2xl mb-1" />,
    title: "All Ages Welcome",
    desc: "Care for children, adults, and seniors."
  }
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      {/* Hero/Intro */}
      <section className="py-12 md:py-16 px-4 sm:px-8 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-teal-700 mb-2">OUR SERVICES</h1>
          <div className="w-16 h-1 bg-gray-200 mx-auto mb-6 rounded" />
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.name} className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-center text-center">
                {s.icon}
                <div className="font-bold text-lg text-gray-900 mb-1">{s.name}</div>
                <div className="text-gray-700 text-base">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Why Choose Us / Benefits */}
      <section className="py-12 md:py-16 px-4 sm:px-8 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-700 mb-10">Why Choose JIS?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow">
                {b.icon}
                <div className="font-bold text-lg text-gray-900 mb-1">{b.title}</div>
                <div className="text-gray-700 text-base">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 px-4 sm:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for a healthier, brighter smile?</h3>
          <a href="tel:+918951611570" className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded font-semibold shadow text-lg">
            <FaPhoneAlt /> Book an Appointment
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
} 