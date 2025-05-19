"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full p-4">
      {/* Top Bar */}
      <div className="bg-white dark:bg-white text-sm flex justify-between items-center px-4 py-2 flex-wrap sm:flex-nowrap gap-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4 text-gray-700 w-full sm:w-auto">
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-teal-600" />
            <span>1st floor,near Aswini hospital, Pathanapuram</span>
          </div>
          <div className="flex items-center gap-1">
            <FaPhoneAlt className="text-teal-600" />
            <span>+91 85920 75085</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-700 text-lg ml-auto">
          <FaFacebook />
          <FaInstagram />
          <FaEnvelope />
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white dark:bg-white px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="text-2xl font-script text-black">JIS Dental Care</div>
          <div className="text-xs text-gray-500">
            Multi-Speciality Oral Health Centre
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-black hover:text-teal-600">Home</Link>
          <Link href="/about" className="text-black hover:text-teal-600">About Us</Link>
          <Link href="/services" className="text-black hover:text-teal-600">Services</Link>
          <Link href="/contact" className="text-black hover:text-teal-600">Contact Us</Link>
          <Link href="/faqs" className="text-black hover:text-teal-600">FAQS</Link>
          <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
            Book Appointment
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-2 flex flex-col gap-3 text-sm font-medium">
          <Link href="/" className="text-black hover:text-teal-600">Home</Link>
          <Link href="/about" className="text-black hover:text-teal-600">About Us</Link>
          <Link href="/services" className="text-black hover:text-teal-600">Services</Link>
          <Link href="/plans" className="text-black hover:text-teal-600">Plans</Link>
          <Link href="/contact" className="text-black hover:text-teal-600">Contact Us</Link>
          <Link href="/faqs" className="text-black hover:text-teal-600">FAQS</Link>
          <Link href="/blogs" className="text-black hover:text-teal-600">Blogs</Link>
          <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 mt-2">
            Book Appointment
          </button>
        </div>
      )}
    </header>
  );
}
