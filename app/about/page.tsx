/* eslint-disable */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaUserMd, FaRegHeart, FaStar, FaSmile } from "react-icons/fa";

const doctors = [
  {
    name: "Dr. Jibin Joy",
    image: "/images/jibin.jpeg",
    specialty: "Oral Surgeon",
    bio: "A compassionate dentist with over five years of clinical experience, specializing in oral surgery, implants, full mouth rehabilitation, and lasers. Focused on painless dentistry and patient comfort."
  },
  {
    name: "Dr. Soumya Sajan",
    image: "/images/soumya.jpg",
    specialty: "Orthodontist",
    bio: "Experienced orthodontist with a passion for creating beautiful smiles. Specializes in braces, aligners, and pediatric dentistry. Known for a gentle approach and patient education."
  }
];

const values = [
  {
    icon: <FaRegHeart className="text-teal-700 text-3xl mb-2" />,
    title: "Patient-Centered Care",
    desc: "We listen, we care, and we tailor every treatment to your needs."
  },
  {
    icon: <FaStar className="text-teal-700 text-3xl mb-2" />,
    title: "Excellence & Expertise",
    desc: "Highly qualified dentists using the latest technology for the best results."
  },
  {
    icon: <FaSmile className="text-teal-700 text-3xl mb-2" />,
    title: "Gentle & Friendly",
    desc: "We make every visit comfortable and stress-free for all ages."
  },
  {
    icon: <FaUserMd className="text-teal-700 text-3xl mb-2" />,
    title: "Comprehensive Services",
    desc: "From cleanings to implants, all your dental needs under one roof."
  }
];

export default function AboutPage() {
  return (
    <>
      <Header />
      {/* Hero/Intro */}
      <section className="py-12 md:py-16 px-4 sm:px-8 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-teal-700 mb-2">ABOUT US</h1>
          <div className="w-16 h-1 bg-teal-700 mx-auto mb-6 rounded" />
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            JIS is a MultiSpeciality Oral Health Care Dental Clinic in Pathanapuram, Kollam. We have a team of highly qualified dentists and dental hygienists who are trained to provide the best dental care to our clients. We use state-of-the-art equipment and latest technologies to deliver quality dental care to our patients.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-4">
            <div className="flex items-center gap-2 text-teal-700">
              <FaPhoneAlt />
              <a href="tel:+918951611570" className="hover:underline">+91 89516 11570</a>
            </div>
            <div className="flex items-center gap-2 text-teal-700">
              <FaEnvelope />
              <a href="mailto:info@dentalis.in" className="hover:underline">info@dentalis.in</a>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Overview */}
      

      {/* Team/Doctors Section */}
      <section className="py-12 md:py-16 px-4 sm:px-8 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-700 mb-10">Meet Our Doctors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {doctors.map((doc) => (
              <div key={doc.name} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
                <img src={doc.image} alt={doc.name} className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-teal-100" />
                <div className="font-bold text-xl text-gray-900 mb-1">{doc.name}</div>
                <div className="text-teal-700 font-semibold mb-2">{doc.specialty}</div>
                <div className="text-gray-700 text-base">{doc.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 px-4 sm:px-8 bg-white border-b">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-700 mb-10">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow">
                {v.icon}
                <div className="font-bold text-lg text-gray-900 mb-1">{v.title}</div>
                <div className="text-gray-700 text-base">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
} 