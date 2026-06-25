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
      className=" py-20 px-6"
    >
    <div className="flex items-center justify-center px-10 py-5">  
      <span className="text-[#2f5d50] font-bold px-6 py-3 rounded-full 
              hover:scale-105 hover:bg-[#2f5d50] hover:text-white transition duration-300 shadow-md">
              SINCE 1970
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
                src="/images/im8.jpeg"
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

              <h2 className=" text-6xl text-[#2f5d50] font-bold flex items-center justify-center">{count30}%</h2>

              <p className="text-sm mt-3 text-[#2f5d50] mb-6 flex items-center justify-center">
                Daily Growing Students are <br /> still growing
              </p>

              <div className="w-full h-[3px] bg-white">
                <div
                  className="h-[3px] bg-[#2f5d50] transition-all duration-300"
                  style={{ width: progress30 + "%" }}
                ></div>
              </div>

            </div>

            {/* 95% */}
            <div className=" border-l border-gray-300 pl-8">

              <h2 className="text-6xl text-[#2f5d50] font-bold flex items-center justify-center">{count95}%</h2>

              <p className="text-sm mt-3 text-[#2f5d50] mb-6 flex items-center justify-center">
                They are in a job related to their field of study
              </p>

              <div className="w-full h-[3px] bg-white">
                <div
                  className="h-[3px] bg-[#2f5d50] transition-all duration-300"
                  style={{ width: progress95 + "%" }}
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
              The right opportunity can turn dreams into limitless potential.
            </h2>

            <p className="text-[#2f5d50] mt-4">
              Founded in 1970, our institute is a community driven institution
              renowned for its unique contributions to education and student
              success.
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