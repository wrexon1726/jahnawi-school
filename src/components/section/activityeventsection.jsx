"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ActivityEventSection() {

  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

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

  }, []);

const cards = [
  {
    title: "Inspiring Student Life",
    text: "We have focused on generating new knowledge & providing modern learning experiences.",
 image: "/activityevent/image6.png"
  },
  {
    title: "Education Affordability",
    text: "We help students access education through scholarships and flexible learning systems.",
    image: "/activityevent/image4.png"
  },
  {
    title: "Core-level Academics solutions",
    text: "High quality academic systems that prepare students for the real world.",
    image: "/activityevent/image5.png"
  }
];

  return (

    <section
      ref={sectionRef}
      className="w-full bg-[#f7f8f9] py-24 px-6"
    >

      <div className="max-w-7xl mx-auto text-center">

        {/* badge */}
        <div className="since-badge border border-gray-300 relative inline-block px-10 py-3 bg-gray/20 text-sm rounded-full text-white overflow-hidden">

  {/* Start Border Animation */}
  <span className="start-border-activity"></span>

  <span className="relative z-10  text-sm text-gray-700">  Why Choose Us</span>

</div>
      

        {/* heading */}
        <h2
className={`text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto
transform transition-all duration-700
${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
>
One of the largest, most diverse universities in the World
</h2>

       <p
className={`text-gray-500 mt-4 max-w-2xl mx-auto
transform transition-all duration-700 delay-200
${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
>
Home to students from every corner of the globe, fostering diversity,
inclusion, and world-class academic excellence.
</p>

        {/* cards */}
        <div className="grid md:grid-cols-3 max-[722px]:grid-cols-1 gap-8 mt-16">

          {cards.map((card, index) => (

            <div
  key={index}
  className={`group bg-white  rounded-2xl p-10 border border-transparent shadow-md 
  transition-all duration-500 hover:-translate-y-2 hover:shadow-xl 
  hover:border-[#2f6b5f] hover:scale-105
  ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
>

 <div className="relative w-[110px] h-[110px] mx-auto mb-6 transition-transform duration-500 group-hover:scale-125">

  <Image
    src={card.image}
    alt={card.title}
    fill
    className="object-contain"
  />

</div>

  <h3 className="text-xl font-semibold text-gray-800">
    {card.title}
  </h3>

  <p className="text-gray-500 mt-4 text-sm">
    {card.text}
  </p>

 <div className="relative inline-block mt-6 group/btn">

  {/* Hover Background */}
<div className="absolute -top-[1px] -bottom-[1px] -left-[0.5px] -right-[0.5px] rounded-full border border-[#244f46] bg-white scale-0 group-hover/btn:scale-110 transition-all duration-500"></div>

  {/* Button */}
  <button className="relative z-10 bg-white text-[#244f46] px-20 py-2 rounded-full text-sm border border-[#244f46] hover:bg-[#244f46] hover:text-white transition duration-300">

    Read More →

  </button>

</div>

</div>

          ))}

        </div>

      </div>

    </section>

  );
}