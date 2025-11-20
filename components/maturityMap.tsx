"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const MaturityMap = () => {
  const [activeStage, setActiveStage] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Convert number to Roman numeral
  const toRoman = (num: number): string => {
    const romanNumerals: { [key: number]: string } = {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
    };
    return romanNumerals[num] || num.toString();
  };

  const maturityStages = [
    {
      title: "Foundation",
      description: ["Cost optimization and", "operational efficiency"],
      weDeliver: [
        "Entity set-up",
        "Modest labor arbitrage",
        "Basic automation",
        "24/7 delivery model",
      ],
      stageOutcome: [
        "Rapid market entry",
        "30-50% cost savings vs. onshore talent",
      ],
      image: "/maturitybrick.svg",
    },
    {
      title: "Satellite",
      description: ["Service delivery", "excellence"],
      weDeliver: [
        "Talent arbitrage strategies",
        "Structured learning programs",
        "Critical domain expertise",
      ],
      stageOutcome: [
        "Enhanced efficiency",
        "Scalable operations",
        "Quality standardization",
      ],
      image: "/maturitySatellite.svg",
    },
    {
      title: "Innovation Hub",
      description: ["Global innovation", "engine"],
      weDeliver: [
        "IP creation",
        "Multi-disciplinary teams",
        "Embedded AI and intelligent automation",
      ],
      stageOutcome: [
        "Direct business alignment",
        "Competitive differentiation",
        "Innovation enablement",
      ],
      image: "/maturitybulb.svg",
    },
    {
      title: "Capability hub",
      description: ["Strategic partnership", "and innovation"],
      weDeliver: [
        "Technology-led business transformation",
        "Industry-ready talent in emerging micro-skills",
        "Functional leadership development",
      ],
      stageOutcome: [
        "Strategic market advantage",
        "Large-scale AI implementation",
        "Complete operational ownership",
      ],
      image: "/maturitycapability.svg",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Calculate which stage should be active based on scroll position
      const relativeScroll = scrollPosition - sectionTop;
      const stageHeight = sectionHeight / maturityStages.length;
      const newActiveStage = Math.min(
        Math.max(1, Math.floor(relativeScroll / stageHeight) + 1),
        maturityStages.length
      );

      setActiveStage(newActiveStage);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [maturityStages.length]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-36 min-h-[120vh]"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Title Section */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-center lg:text-left">
            <span className="text-[#00406E]">Colab 91's</span>{" "}
            <span className="bg-[#010080] rounded-lg text-white px-3 py-1 inline-block">
              GCC maturity map
            </span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 text-center lg:text-left">
            Accelerate your global capability center journey
          </p>
        </div>
      </div>

      {/* Notebook Background Area - Full Width */}
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
          backgroundSize: '100% 40px, 40px 100%'
        }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          {/* Desktop: Maturity Stages - Horizontal Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {maturityStages.map((stage, index) => (
            <div
              key={index}
              ref={(el) => {
                stageRefs.current[index] = el;
              }}
              className="relative"
            >
              <h3 
                className="text-xl lg:text-2xl font-semibold text-[#00406E] mb-4 text-center cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setActiveStage(index + 1)}
              >
                {stage.title}
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
                <div className="text-sm text-black text-center space-y-0">
                  {stage.description.map((line, lineIndex) => (
                    <p key={lineIndex}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical Stage Layout - Show all stages stacked */}
        <div className="block lg:hidden space-y-16 mb-16">
          {maturityStages.map((stage, index) => (
            <div
              key={index}
              ref={(el) => {
                stageRefs.current[index] = el;
              }}
              className="relative min-h-[80vh] flex flex-col justify-center"
            >
              {/* Stage Title and Description */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#00406E] mb-4 text-center">
                  {stage.title}
                </h3>
                <div className="bg-white border border-gray-200 rounded-lg px-4 py-3">
                  <div className="text-sm text-black text-center space-y-0">
                    {stage.description.map((line, lineIndex) => (
                      <p key={lineIndex}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile: Vertical Layout for WE DELIVER, Illustration, and STAGE OUTCOME */}
              <div className="flex flex-col items-center space-y-8">
                {/* Illustration */}
                <div className="w-full h-48 flex items-center justify-center">
                  <Image
                    src={stage.image || "/maturitybrick.svg"}
                    alt={`${stage.title} Illustration`}
                    width={300}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* WE DELIVER Section */}
                <div className="w-full flex flex-col items-center">
                  <h3 className="text-lg font-semibold text-black text-center w-full mb-4">
                    WE DELIVER
                  </h3>
                  <div className="space-y-2 w-full max-w-[90%]">
                    {stage.weDeliver.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="bg-white border border-gray-200 rounded-lg px-3 py-2 flex items-center justify-center gap-2"
                      >
                        <span className="text-sm text-black text-center flex-1">✓{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* STAGE OUTCOME Section */}
                <div className="w-full flex flex-col items-center">
                  <h3 className="text-lg font-bold text-black text-center w-full mb-4">
                    STAGE OUTCOME
                  </h3>
                  <div className="space-y-2 w-full max-w-[90%]">
                    {stage.stageOutcome.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="bg-white border border-gray-200 rounded-lg px-3 py-2 flex items-center justify-center gap-2"
                      >
                        <span className="text-sm text-black text-center flex-1">✓{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Roman Numeral Indicator */}
                <div className="w-full flex justify-center py-4">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded-full border-4 border-[#BCD6ED] shadow-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-black">
                        {toRoman(index + 1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Lower Section with WE DELIVER, Illustration, and STAGE OUTCOME */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-0 items-start max-w-[950px] mx-auto">
          {/* WE DELIVER Section */}
          <div className="lg:col-span-1 flex flex-col items-center">
            <h3 className="text-lg lg:text-xl font-semibold text-black text-center w-full">
              WE DELIVER
            </h3>
            <div className="space-y-1 w-full max-w-[85%] lg:max-w-[80%]">
              {maturityStages[activeStage - 1].weDeliver.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg px-2 py-2 flex items-center justify-center gap-2"
                >
                  <span className="text-sm text-black text-center flex-1">✓{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Central Illustration Area with Number */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center relative">
            {/* 3D Illustration */}
            <div className="w-full h-64 mb-8 flex items-center justify-center relative">
              <Image
                src={maturityStages[activeStage - 1].image || "/maturitybrick.svg"}
                alt={`${maturityStages[activeStage - 1].title} Illustration`}
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>

            
          </div>

          {/* STAGE OUTCOME Section */}
          <div className="lg:col-span-1 flex flex-col items-center">
            <h3 className="lg:text-xl font-bold text-black text-center w-full">
              STAGE OUTCOME
            </h3>
            <div className="space-y-1 w-full max-w-[85%] lg:max-w-[80%]">
              {maturityStages[activeStage - 1].stageOutcome.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg px-2 py-2 flex items-center justify-center gap-2"
                >
                  <span className="text-sm text-black text-center flex-1">✓{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Full-width Roman Numeral Section */}
      <div className="w-full bg-linear-to-r from-white via-[#BCD6ED] to-white py-4 lg:py-4">
        <div className="flex items-center justify-center">
          <div className="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-full border-10 border-[#BCD6ED] shadow-lg flex items-center justify-center">
              <span className="text-3xl lg:text-4xl text-black">
                {toRoman(activeStage)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaturityMap;

