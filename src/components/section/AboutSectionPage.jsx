"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function AboutSectionPage() {

  const [count100, setCount100] = useState(0);
  const [counta100, setCounta100] = useState(0);

  const [progress100, setProgress100] = useState(0);
  const [progressa100, setProgressa100] = useState(0);

  const [show, setShow] = useState(false);
  const sectionRef = useRef(null);


  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

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

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    if (!show) return;

    const interval100 = setInterval(() => {
      setCount100((prev) => {
        const next = Math.min(prev + 1, 100);
        setProgress100(next);
        if (next >= 100) clearInterval(interval100);
        return next;
      });
    }, 50);

    const intervala100 = setInterval(() => {
      setCounta100((prev) => {
        const next = Math.min(prev + 1, 100);
        setProgressa100(next);
        if (next >= 100) clearInterval(intervala100);
        return next;
      });
    }, 40);

    return () => {
      clearInterval(interval100);
      clearInterval(intervala100);
    };
  }, [show]);

  return (

    <section
      ref={sectionRef}
      className=" py-20 px-6"
    >
    <div className="flex items-center justify-center px-10 py-5">  
      <span className="text-[#2f5d50] font-bold px-6 py-3 rounded-full 
              hover:scale-105 hover:bg-[#2f5d50] hover:text-white transition duration-300 shadow-md">
              SINCE 1999
        </span> 
    </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 max-[722px]:grid-cols-1 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div>

          {/* LEFT IMAGE */}
          <div
            className={`relative w-full h-[350px] mb-8 group transform transition-all duration-1000
            ${show ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"}`}
          >

            <div className="absolute -top-1 -left-1 w-full h-full border-5 border-[#2f5d50]"></div>

            <div className="relative w-full h-[105%] overflow-hidden">
              <Image
                src="/images/im5.jpeg"
                alt="Graduates"
                fill
                className="object-fit transition-transform duration-500 group-hover:scale-107"
              />
            </div>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 mt-10 gap-10">

            {/* 30% */}
            <div className="">

              <h2 className=" text-6xl text-[#2f5d50] font-bold flex items-center justify-center">{count100}%</h2>

              <p className="text-sm mt-3 text-[#2f5d50] mb-6 flex items-center justify-center">
                Care, Creativity and <br/> Values for Children
              </p>

              <div className="w-full h-[3px] bg-[#2f5d50]">
                <div
                  className="h-[3px] bg-white transition-all duration-300"
                  style={{ width: progress100 + "%" }}
                ></div>
              </div>

            </div>

            {/* 100% */}
            <div className=" border-l border-gray-300 pl-8">

              <h2 className="text-6xl text-[#2f5d50] font-bold flex items-center justify-center">{counta100}%</h2>

              <p className="text-sm mt-3 text-[#2f5d50] mb-6 flex items-center justify-center">
                Parent Satisfaction & <br/>Academic Success 
              </p>

              <div className="w-full h-[3px] bg-[#2f5d50]">
                <div
                  className="h-[3px] bg-white transition-all duration-300"
                  style={{ width: progressa100 + "%" }}
                ></div>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div>

          <div className=" border-1px border-[#2f5d50] since-badge relative inline-block px-10 py-3 text-sm rounded-full text-white overflow-hidden">

            {/* Start Border Animation */}
        
            

          </div>
          <div className="">
            <h2 className="text-3xl text-[#2f5d50] md:text-4xl font-bold mt-6 leading-snug">
              Strong foundations today, brighter opportunities tomorrow.
            </h2>

            <p className="text-[#2f5d50] mt-4">
              “Founded in 1999 by [Founder’s Name] in [Location], Jahnawi School has been committed to nurturing children from LKG to Class 8 with care, creativity, and strong values. We believe the right opportunity helps every child shine — whether through academics, extracurricular activities, or character-building experiences. With dedicated teachers, a safe environment, and a focus on holistic growth, Jahnawi School ensures that every student receives the right start to their educational journey, laying strong foundations for lifelong success.”
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`relative w-full h-[300px] mt-10 group transform transition-all duration-1000
            ${show ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"}`}
          >

            <div className="absolute -top-1 -left-1 w-full h-[105%] border-5 border-[#2f5d50]">

              <div className="relative w-[103%] h-[105%] overflow-hidden">
                <Image
                  src="/images/im7.jpeg"
                  alt="Students"
                  fill
                  className="object-fit transition-transform duration-500 group-hover:scale-110"
                />
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}