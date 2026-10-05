
"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function ContactSection() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isError, setIsError] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sectionRef = useRef(null);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShow(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setIsError(false);
        setPopupMessage("Thank you for contacting us.\nWe will contact you soon.");
        setShowPopup(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setIsError(true);
        setPopupMessage(data.error || "Something went wrong.");
        setShowPopup(true);
      }
    } catch (error) {
      setIsError(true);
      setPopupMessage("An error occurred. Please try again.");
      setShowPopup(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="w-full bg-white py-20 px-6"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div
            className={`relative h-[500px] transform transition-all duration-1000
            ${
              show
                ? "translate-x-0 opacity-100"
                : "-translate-x-40 opacity-0"
            }`}
          >
            <div className="absolute -top-1 -left-1 w-full h-full border-4 border-[#2f6b5f]"></div>

            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/images/im9.jpeg"
                alt="Contact Us"
                fill
                className="object-fit hover:scale-110 transition duration-500"
              />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            className={`transform transition-all duration-1000
            ${
              show
                ? "translate-x-0 opacity-100"
                : "translate-x-40 opacity-0"
            }`}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-[#2f6b5f]/10 text-[#2f6b5f] font-semibold">
              CONTACT US
            </span>

            <h2 className="text-4xl font-bold text-gray-800 mt-5">
              Get In Touch With Us
            </h2>

            <p className="text-gray-600 mt-4 mb-8">
              We’re here to help parents and guardians connect with Jahnawi School. Reach out for admissions, activities, or general inquiries.
            </p>

            {/* FORM */}
            <form className="space-y-5" onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none focus:border-[#2f6b5f]"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none focus:border-[#2f6b5f]"
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none focus:border-[#2f6b5f]"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none focus:border-[#2f6b5f]"
                required
              ></textarea>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="bg-[#2f6b5f] text-white px-8 py-3 rounded-lg hover:bg-[#25574d] transition flex items-center justify-center min-w-[180px]"
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* ================= POPUP ================= */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">

          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">

            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-red-500"
            >
              ×
            </button>

            {/* Status Icon */}
            <div className="flex justify-center mb-4">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${isError ? 'bg-red-100' : 'bg-green-100'}`}>
                <span className={`text-3xl ${isError ? 'text-red-600' : 'text-green-600'}`}>
                  {isError ? '×' : '✓'}
                </span>
              </div>
            </div>

            <h3 className={`text-2xl font-bold text-center ${isError ? 'text-red-600' : 'text-green-600'}`}>
              {isError ? 'Error!' : 'Message Sent Successfully!'}
            </h3>

            <p className="text-center text-gray-600 mt-4 whitespace-pre-line">
              {popupMessage}
            </p>

            {/* OK BUTTON */}
            <button
              onClick={() => setShowPopup(false)}
              className="w-full mt-6 bg-[#2f6b5f] text-white py-3 rounded-lg hover:bg-[#25574d]"
            >
              OK
            </button>

          </div>
        </div>
      )}
    </>
  );
}
