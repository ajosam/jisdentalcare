/* eslint-disable */
"use client";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const testimonials = [
  {
    name: "Paulson Abraham",
    avatar: "g",
    time: "a week ago",
    rating: 5,
    review:
      "Great ambience, nice atmosphere, affordable, amazing doctors!! Got my root canal done here, it was painless and hassle free, got it done within a day!! Highly recommend",
  },
  {
    name: "Saee Chaudhari",
    avatar: "g",
    time: "5 months ago",
    rating: 5,
    review:
      "By far the best dentist in the Whitefield area. Dr. Shoa is amazing. She made me feel extremely comfortable (i was crying the whole time!!), she was gentle yet super effective. This was my second time with wisdom tooth extraction and the first one was anything but painful and i had swelling for a week. But this time, she was so quick and effective that i had no swelling and my pain subsided in 2/3 days. Being pregnant made me worry a lot about these dentist procedures but she took all the necessary care and ensured that i was comfortable the whole time. She is the best dentist, i would highly recommend her for any kind of dentist procedure.",
  },
  {
    name: "Gourav Santhalia",
    avatar: "g",
    time: "a month ago",
    rating: 5,
    review:
      "I have visited this clinic last week and I would like to say, amazing doctor and soft spoken staffs. I went in for my wisdom tooth removal and Dr.Clement Liu did an amazing job. I m posting this review after 8 days, because i was a little skeptical about the procedure. But I am very happy to say that the entire process was handled very professionally . I did not have any problems after the removal also. Best dentist in Bangalore undoubtedly.",
  },
  // Add more testimonials as needed
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  // Responsive breakpoints for keen-slider
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrent(s.track.details.rel);
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 24 },
      },
    },
    slides: { perView: 1, spacing: 16 },
    loop: true,
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <section className="py-12 md:py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-2">
          Testimonials - Hear From Our Patients:
        </h2>
        <p className="text-center text-lg text-gray-600 italic mb-10">
          We have served more than 2k+ happy and satisfied patients, and hope to make many more smile along with us!
        </p>
        <div className="flex flex-col items-center">
          <div className="w-full mb-6">
            <div ref={sliderRef} className="keen-slider">
              {testimonials.map((t, idx) => (
                <div
                  key={t.name}
                  className="keen-slider__slide bg-gray-50 rounded-xl shadow p-6 flex flex-col relative min-w-[280px] max-w-md mx-auto"
                >
                  {/* Avatar and Name */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-purple-400 flex items-center justify-center text-white font-bold text-xl">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.time}</div>
                    </div>
                    <FcGoogle className="ml-auto text-2xl" />
                  </div>
                  {/* Stars */}
                  <div className="flex items-center mb-2">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 mr-1" />
                    ))}
                  </div>
                  {/* Review */}
                  <div className="text-gray-800 text-base mb-2">{t.review}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Carousel arrows */}
          {hasMounted && (
            <div className="flex gap-4 mb-4">
              <button
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-teal-700 shadow"
                onClick={() => instanceRef.current?.prev()}
                aria-label="Previous testimonial"
              >
                <FaChevronLeft size={28} />
              </button>
              <button
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-teal-700 shadow"
                onClick={() => instanceRef.current?.next()}
                aria-label="Next testimonial"
              >
                <FaChevronRight size={28} />
              </button>
            </div>
          )}
          {/* Dots */}
          <div className="flex gap-1 mb-6">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${i === current ? "bg-teal-700" : "bg-gray-300"} inline-block`}
              />
            ))}
          </div>
          {/* Google rating and button */}
          <div className="text-center text-gray-700 mb-4">
            <span className="font-bold">Google</span> rating score: <span className="font-bold">4.8</span> of 5, based on 100+ reviews
          </div>
          <a
            href="https://www.google.com/search?q=JIS+Multispeciality+Dental+Care+Pathanapuram"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded font-semibold shadow"
          >
            Review Us on Google
          </a>
        </div>
      </div>
    </section>
  );
} 