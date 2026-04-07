"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function AboutSectionPage() {

  const [count30, setCount30] = useState(1);
  const [count95, setCount95] = useState(1);

  const [progress30, setProgress30] = useState(0);
  const [progress95, setProgress95] = useState(0);

  const [show, setShow] = useState(false);
  const sectionRef = useRef(null);


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

  useEffect(() => {

    const interval30 = setInterval(() => {
      setCount30((prev) => {
        if (prev >= 30) {
          clearInterval(interval30);
          return 30;
        }
        setProgress30(prev + 1);
        return prev + 1;
      });
    }, 50);

    const interval95 = setInterval(() => {
      setCount95((prev) => {
        if (prev >= 95) {
          clearInterval(interval95);
          return 95;
        }
        setProgress95(prev + 1);
        return prev + 1;
      });
    }, 40);

    return () => {
      clearInterval(interval30);
      clearInterval(interval95);
    };

  }, []);

  return (
    
    <section
ref={sectionRef}
className="w-full bg-[#2f6b5f] text-white py-20 px-6"
>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 max-[722px]:grid-cols-1 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          {/* LEFT IMAGE */}
          <div
            className={`relative w-full h-[350px] mb-8 group transform transition-all duration-1000
            ${show ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"}`}
          >

            <div className="absolute -top-2 -left-2 w-full h-full border-7 border-gray-200"></div>

            <div className="relative w-full h-[105%] overflow-hidden">
              <Image
                src="/aboutimage/image1.jpg"
                alt="Graduates"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-107"
              />
            </div>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 mt-10 gap-10">

            {/* 30% */}
            <div>

              <h2 className="text-6xl font-bold">{count30}%</h2>

              <p className="text-sm mt-3 text-gray-200 mb-6">
                Daily Growing Students are <br /> still growing
              </p>

              <div className="w-full h-[3px] bg-gray-400">
                <div
                  className="h-[3px] bg-white transition-all duration-300"
                  style={{ width: progress30 + "%" }}
                ></div>
              </div>

            </div>

            {/* 95% */}
            <div className="border-l border-gray-300 pl-8">

              <h2 className="text-6xl font-bold">{count95}%</h2>

              <p className="text-sm mt-3 text-gray-200 mb-6">
                They are in a job related to their field of study
              </p>

              <div className="w-full h-[3px] bg-gray-400">
                <div
                  className="h-[3px] bg-white transition-all duration-300"
                  style={{ width: progress95 + "%" }}
                ></div>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div>

<div className="since-badge relative inline-block px-10 py-3 bg-white/20 text-sm rounded-full text-white overflow-hidden">

  {/* Start Border Animation */}
  <span className="start-border"></span>

  <span className="relative z-10">SINCE 1970</span>

</div>

          <h2 className="text-3xl md:text-4xl font-bold mt-6 leading-snug">
            The right opportunity can turn dreams into limitless potential.
          </h2>

          <p className="text-gray-200 mt-4">
            Founded in 1970, our institute is a community driven institution
            renowned for its unique contributions to education and student
            success.
          </p>

          {/* RIGHT IMAGE */}
          <div
            className={`relative w-full h-[300px] mt-10 group transform transition-all duration-1000
            ${show ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"}`}
          >

            <div className="absolute -top-2 -left-2 w-full h-[105%] border-7 border-gray-200">

              <div className="relative w-[103%] h-[105%] overflow-hidden">
                <Image
                  src="/aboutimage/image2.avif"
                  alt="Students"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}