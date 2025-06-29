"use client";
/* eslint-disable */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    q: "What services do you offer at JIS Multispeciality Dental Care?",
    a: "We offer a full range of dental services including root canal treatment, dental implants, teeth whitening, oral surgery, pediatric dentistry, gum treatment, cosmetic dentistry, crowns & bridges, and orthodontics (braces & aligners)."
  },
  {
    q: "How can I book an appointment?",
    a: "You can book an appointment by calling us at +91 89516 11570 or using the contact form on our Contact Us page."
  },
  {
    q: "Do you treat children?",
    a: "Yes! We provide gentle and friendly dental care for children of all ages."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, credit/debit cards, and UPI payments."
  },
 
  {
    q: "Do you offer emergency dental care?",
    a: "Yes, we provide emergency dental care. Please call us immediately if you have a dental emergency."
  }
];

export default function FaqsPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Header />
      {/* Hero/Intro */}
      <section className="py-12 md:py-16 px-4 sm:px-8 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-teal-700 mb-2">Frequently Asked Questions</h1>
          <div className="w-16 h-1 bg-gray-200 mx-auto mb-6 rounded" />
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={faq.q} className="border border-gray-200 rounded-xl bg-gray-50">
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-gray-900 focus:outline-none"
                  onClick={() => setOpen(open === idx ? null : idx)}
                  aria-expanded={open === idx}
                  aria-controls={`faq-${idx}`}
                >
                  <span>{faq.q}</span>
                  {open === idx ? <FaChevronUp className="text-teal-700" /> : <FaChevronDown className="text-teal-700" />}
                </button>
                {open === idx && (
                  <div id={`faq-${idx}`} className="px-6 pb-4 text-gray-700 text-base animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

   

      {/* Contact CTA */}
      <section className="py-8 px-4 sm:px-8 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-lg text-gray-900 mb-2 font-semibold">Still have questions?</div>
          <a href="/contact" className="inline-block bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded font-semibold shadow">Contact Us</a>
        </div>
      </section>

      <Footer />
    </>
  );
} 