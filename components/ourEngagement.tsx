"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, containerStagger, cardItem } from "./motionVariants";

const OurEngagement = () => {
  const engagementModels = [
    {
      title: "Managed Teams",
      description: [
        "Launch your offshore team",
        "Maximum speed",
        "We manage; you scale.",
      ],
      bestFor:
        "Small-cap customers seeking hassle-free and rapid team setup without operational complexities.",
      details: {
        "Entity Ownership": "Colab91",
        "Intellectual Property": "Client",
        "Quality Control": "Client-led & Client-approved",
        "Talent Acquisition": "Client-led & Client-approved",
        "Operations Support": "Client-led & Client-standards",
      },
    },
    {
      title: "Build-Operate-Transfer",
      description: [
        "Build with experts",
        "Operate with confidence",
        "Transfer with ease.",
      ],
      bestFor:
        "Mid-scale enterprises seeking smooth transition to full control after set up and stabilization of offshore center.",
      details: {
        "Entity Ownership": "Colab91",
        "Intellectual Property": "Client",
        "Quality Control": "Client-led & Colab91-supported",
        "Talent Acquisition": "Client-led & Colab91-supported",
        "Operations Support": "Client-led & Client-standards",
      },
    },
    {
      title: "Global Capability Center",
      description: ["Your team.", "Total control", "Maximum impact."],
      bestFor:
        "Mature set-ups (business size agnostic) desiring full ownership and strategic control of offshore operations.",
      details: {
        "Entity Ownership": "Client",
        "Intellectual Property": "Client",
        "Quality Control": "Client",
        "Talent Acquisition": "Client-led & Client-approved",
        "Operations Support": "Client-led & Client-approved",
      },
    },
  ];

  // Custom variants for card details row
  const rowVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.section 
      className="py-16 lg:py-24 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerStagger}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Title Section */}
        <div className="mb-12 lg:mb-16">
          <motion.h2 
            className="text-4xl lg:text-5xl font-semibold mb-4 text-center lg:text-left"
            variants={fadeInUp}
          >
            <span className="text-[#00406E]">Our</span>{" "}
            <span className="bg-[#010080] rounded-lg text-white px-3 py-1 inline-block">
              engagement models
            </span>
          </motion.h2>
          <motion.p 
            className="text-base lg:text-lg text-black max-w-3xl text-center lg:text-left"
            variants={fadeInUp}
          >
            Flexible partnership options designed to match your organization's
            strategic objectives.
          </motion.p>
        </div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {engagementModels.map((model, index) => (
            <motion.div
              key={index}
              variants={cardItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-lg overflow-hidden shadow-[0_6px_12px_rgba(0,0,0,0.15),6px_0_12px_rgba(0,0,0,0.15)] flex flex-col"
            >
              {/* Upper Section with Gray Background */}
              <div className="bg-[#E8F1FA] px-3 py-3 relative overflow-hidden group">
                {/* Subtle gradient pulse effect on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%]"
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                
                <motion.h3 
                  className="text-xl lg:text-2xl text-right text-[#00406E] mb-2 font-bold"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  {model.title}
                </motion.h3>
                <div className="space-y-1 text-right">
                  {model.description.map((line, lineIndex) => (
                    <motion.p
                      key={lineIndex}
                      className="text-md text-[#00406E]"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (index * 0.1) + (lineIndex * 0.1) }}
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>
                <motion.div 
                  className="mt-4 bg-white p-2 rounded-lg shadow-sm border-l-4 border-[#00406E]"
                  whileHover={{ scale: 1.02, backgroundColor: "#f8fafc" }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-sm text-[#666666] leading-relaxed">
                    <span className="font-semibold text-[#00406E]">Best for:</span>{" "}
                    {model.bestFor}
                  </p>
                </motion.div>
              </div>

              {/* Lower Section with White Background - Details Table */}
              <div className="bg-[#E8F1FA] px-3 py-3 flex-1">
                <div className="space-y-0 border-t border-gray-200">
                  {Object.entries(model.details).map(([key, value], detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      className={`py-3 ${
                        detailIndex !== Object.keys(model.details).length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                      variants={rowVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + (index * 0.1) + (detailIndex * 0.05) }}
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.5)", paddingLeft: "4px", paddingRight: "4px", borderRadius: "4px" }}
                    >
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-md text-[#00406E] shrink-0 font-medium">
                          {key}:
                        </span>
                        <span className="text-md text-[#434B] text-right flex-1 text-gray-700">
                          {value}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OurEngagement;

