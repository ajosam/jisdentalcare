import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "918129631239"; // Replace with your WhatsApp number
const welcomeMessage = "Hello JIS! I would like to book an appointment.";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(welcomeMessage)}`;

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 right-6 bg-green-500 hover:bg-green-600 rounded-full shadow-lg p-4 flex items-center justify-center transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-white" size={32} />
    </a>
  );
} 