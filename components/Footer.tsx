import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#151c28] text-gray-300 pt-12 pb-4 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        {/* Logo and tagline */}
        <div className="col-span-1 flex flex-col items-center md:items-start mb-6 md:mb-0">
          <img src="/logo.webp" alt="Dentalis Logo" className="h-20 mb-4" />
          <div className="text-lg font-semibold text-gray-200 text-center md:text-left">
            Multi-Speciality Oral Health Centre
          </div>
        </div>
        {/* Quick Links */}
        <div className="col-span-1">
          <div className="font-bold text-gray-100 mb-3 tracking-wide">QUICK LINKS</div>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#plans" className="hover:text-white">Plans</a></li>
            <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>
        {/* Contact Details */}
        <div className="col-span-1">
          <div className="font-bold text-gray-100 mb-3 tracking-wide">CONTACT DETAILS</div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              <span>1st floor,near Aswini hospital, Pathanapuram</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>+91 89516 11570</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <span>info@dentalis.in</span>
            </li>
          </ul>
        </div>
        {/* Social Links */}
        <div className="col-span-1">
          <div className="font-bold text-gray-100 mb-3 tracking-wide">SOCIAL LINKS</div>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-white" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" className="hover:text-white" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" className="hover:text-white" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="hover:text-white" aria-label="Pinterest"><FaPinterest /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-10 mb-2">
        © 2025 Dentalis.<br className="md:hidden" /> All Rights Reserved.
      </div>
      <div className="text-center text-gray-400 text-xs">
        Designed & Developed by: <a href="ajosam.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Ajo Sam</a>
      </div>
    </footer>
  );
} 