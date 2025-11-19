"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function OurStrengths() {
  // Initialize with all cards expanded on desktop
  const [expanded, setExpanded] = useState<Set<number>>(new Set([0, 1, 2]));

  const toggleExpanded = (index: number) => {
    setExpanded((prev) => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(index)) {
        newExpanded.delete(index);
      } else {
        newExpanded.add(index);
      }
      return newExpanded;
    });
  };

  const strengths = [
    {
      title: "A team that consistently delivers.",
      content: (
        <>
          Our team is driven by a culture of{" "}
          <strong className="underline">accountability, collaboration and excellence</strong>. Our employees are front-end, domain-experts and AI-trained. They thrive on integrating deeply with our clients' culture and act as an extension to their in-house functions.
        </>
      ),
    },
    {
      title: "Services that resonate with mid-market customers.",
      content: (
        <>
          We understand the distinct challenges and ambitions of mid-market businesses. Our services are tailored to{" "}
          <strong className="underline">bridge capability gaps, optimize operations, and accelerate growth</strong>. We empower our clients to compete effectively in dynamic markets.
        </>
      ),
    },
    {
      title: "Engagement models that are flexible and scale-agnostic.",
      content: (
        <>
          New-age offshore operations come with strategic considerations: entity ownership, IP rights, ease of scale and strategic control. We design our engagement models to{" "}
          <strong className="underline">adapt to the size, scope, and complexity</strong> of each client's needs.
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-8">
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl">
            <span className="text-[#00406E]">Our</span>{" "}
            <span className="bg-[#010080] text-white px-3 py-2 rounded-lg inline-block">
              strengths.
            </span>
          </h2>
        </div>

        {/* Three Expandable Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strengths.map((strength, index) => {
            const isExpanded = expanded.has(index);
            return (
              <div key={index} className="relative">
                {/* Card Container */}
                {isExpanded ? (
                  <div className="bg-white rounded-lg border-l-2 border-r-2 border-b-6 border-[#6BA4CD] overflow-hidden">
                    {/* Card Header - Clickable */}
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="w-full px-6 py-5 flex items-start justify-between hover:bg-gray-50 transition-colors text-left"
                    >
                      <h3 className="text-2xl font-normal text-[#00406E] flex-1 pr-4 flex items-center">
                        {strength.title}
                       
                      </h3>
                      <div className="shrink-0 mt-1">
                        <Minus className="w-6 h-6 text-[#6BA4CD]" />
                      </div>
                    </button>

                    {/* Card Content - Expandable */}
                    <div className="px-6 pb-6">
                      <p className="text-black leading-relaxed text-xl">
                        {strength.content}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    {/* Collapsed Header - Positioned slightly outside */}
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="w-full px-6 py-5 flex items-start justify-between hover:bg-gray-50 transition-colors text-left bg-white rounded-lg border-l-2 border-r-2 border-b-6 border-[#6BA4CD] relative z-10 -mt-1"
                    >
                      <h3 className="text-2xl font-normal text-[#00406E] flex-1 pr-4 flex items-center">
                        {strength.title}
                        
                      </h3>
                      <div className="shrink-0 mt-1">
                        <Plus className="w-6 h-6 text-[#6BA4CD]" />
                      </div>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

