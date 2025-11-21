"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Methodology = () => {
  const [activeShake, setActiveShake] = useState<number | null>(null);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setActiveShake(currentIndex);
      currentIndex = (currentIndex + 1) % 4;
    }, 3000); // 15 seconds per item

    // Initial shake
    setActiveShake(0);

    return () => clearInterval(interval);
  }, []);

  const methodologySteps = [
    {
      romanNumeral: "I",
      title: "Assessment",
      description:
        "We engage with business stakeholders to gather requirements and understand operational challenges/capabilities gap.",
      image: "/asessment.svg",
    },
    {
      romanNumeral: "II",
      title: "Planning",
      description:
        "Our Strategy team designs an org structure and an operating model that aligns with client's goals",
      image: "/planning.svg",
    },
    {
      romanNumeral: "III",
      title: "Team set-up",
      description:
        "We mobilize our specialized recruiters, aligned by functional expertise, to source the country's best talent at exceptional speeds.",
      image: "/team.svg",
    },
    {
      romanNumeral: "IV",
      title: "Delivery",
      description:
        "Our Project Delivery team continuously identifies improvement opportunities through digital transformation and AI integration.",
      image: "/delivery.svg",
    },
  ];

  return (
    <section className="relative py-12 lg:py-12 bg-white">

      <div
        className="relative py-8 lg:py-12 w-full"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              to bottom,
              transparent,
              transparent 39px,
              #e5e7eb 39px,
              #e5e7eb 40px
            ),
            repeating-linear-gradient(
              to right,
              transparent,
              transparent 39px,
              #e5e7eb 39px,
              #e5e7eb 40px
            )
          `,
          backgroundSize: "100% 40px, 40px 100%",
        }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          {/* Title Section */}
          <div className="mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-48 text-center lg:text-left">
              <span className="text-[#00406E]">Our</span>{" "}
              <span className="bg-[#010080] rounded-lg text-white px-3 py-1 inline-block">
                methodology.
              </span>
            </h2>
          </div>

          {/* Methodology Steps - Horizontal Layout */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {methodologySteps.map((step, index) => {
 
              const isRaised = index === 1 || index === 3;
              const needsBorders = index === 0 || index === 2;
              
              return (
                <motion.div
                  key={index}
                  className={`flex flex-col ${isRaised ? 'lg:-mt-40 ' : ''}`}
                  animate={activeShake === index ? {
                    x: [0, -5, 5, -5, 5, 0],
                    transition: {
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "mirror",
                      repeatDelay: 3 
                    }
                  } : {}}
                >
                  {/* Icon Image - Above text box */}
                  <div className="w-full h-48 md:h-56 lg:h-48 mb-4 flex items-center justify-center">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={300}
                      height={300}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Text Box - Below illustration */}
                  <div className={`bg-white border border-b-4 border-gray-300 rounded-lg p-4 py-10 lg:p-6 flex flex-col ${
                    needsBorders ? 'border-l-4 border-r-4 border-b-4 border-gray-300' : ''
                  }`}>
                    {/* Roman Numeral and Title */}
                    <div className="mb-3">
                      <span className="text-xl lg:text-2xl font-bold text-[#00406E] mr-2">
                        {step.romanNumeral}.
                      </span>
                      <span className="text-xl lg:text-2xl font-bold text-[#00406E]">
                        {step.title}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-lg lg:text-base text-black leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
