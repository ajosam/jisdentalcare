/* eslint-disable */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      <Header />
      {/* Hero/Intro */}
      <section className="py-12 md:py-16 px-4 sm:px-8 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-teal-700 mb-2">CONTACT US</h1>
          <div className="w-16 h-1 bg-gray-200 mx-auto mb-6 rounded" />
          <p className="text-lg text-gray-700 mb-2">We'd love to hear from you! Reach out for appointments, questions, or feedback.</p>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section className="py-12 md:py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <div className="space-y-6">
            <div>
              <div className="font-bold text-xl text-gray-900 mb-2">Clinic Address</div>
              <div className="flex items-start gap-2 text-gray-700">
                <FaMapMarkerAlt className="text-teal-700 mt-1" />
                <span>1st floor, near Aswini hospital, Pathanapuram, Kollam, Kerala 689695</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaPhoneAlt className="text-teal-700" />
              <a href="tel:+918951611570" className="hover:underline">+91 89516 11570</a>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaEnvelope className="text-teal-700" />
              <a href="mailto:info@dentalis.in" className="hover:underline">info@dentalis.in</a>
            </div>
            <div className="flex gap-4 text-2xl text-teal-700 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-teal-900"><FaFacebook /></a>
              <a href="#" aria-label="Instagram" className="hover:text-teal-900"><FaInstagram /></a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-50 rounded-xl shadow p-8 space-y-6 w-full">
            <div className="text-2xl font-bold text-gray-900 mb-2">Send us a message</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name*" required className="border-b w-full py-2 px-2 focus:outline-none focus:border-teal-700 text-black placeholder:text-gray-500 bg-transparent" />
              <input type="email" placeholder="Your Email*" required className="border-b w-full py-2 px-2 focus:outline-none focus:border-teal-700 text-black placeholder:text-gray-500 bg-transparent" />
            </div>
            <input type="tel" placeholder="Phone Number" className="border-b w-full py-2 px-2 focus:outline-none focus:border-teal-700 text-black placeholder:text-gray-500 bg-transparent" />
            <textarea placeholder="Your Message*" required className="border-b w-full py-2 px-2 focus:outline-none focus:border-teal-700 text-black placeholder:text-gray-500 bg-transparent min-h-[100px]" />
            <button type="submit" className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded w-full font-semibold shadow">Send Message</button>
          </form>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-8 px-4 sm:px-8 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="font-bold text-lg text-gray-900 mb-4">Find us here:</div>
          <div className="w-full h-64 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
            {/* Updated Google Maps embed link for the exact location */}
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.689534937471!2d76.8557406748077!3d9.092020890971853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06734418e5af95%3A0xe866d23d00c6e970!2sJIS%20Multispeciality%20Dental%20Care!5e0!3m2!1sen!2sae!4v1751197468187!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 