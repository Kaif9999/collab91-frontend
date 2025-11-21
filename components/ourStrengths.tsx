 "use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, containerStagger, cardStagger } from "./motionVariants";

export default function OurStrengths() {
  // Initialize as empty (all collapsed) - all cards start collapsed
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

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
      title: (
        <>
          A team that consistently <br />
          delivers.
        </>
      ),
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
    <motion.section
      id="our-strengths"
      className="w-full bg-white py-16 px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerStagger}
    >
      <div className="container mx-auto">
        <motion.div className="mb-12" variants={fadeInUp}>
          <h2 className="text-4xl lg:text-5xl text-center lg:text-left">
            <motion.span 
              className="text-[#00406E] inline-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our
            </motion.span>{" "}
            <motion.span 
              className="bg-[#010080] text-white px-3 py-2 rounded-lg inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              strengths.
            </motion.span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6" 
          variants={cardStagger}
        >
          {strengths.map((strength, index) => {
            const isExpanded = expanded.has(index);
            return (
              <motion.div 
                key={index} 
                className="relative" 
                variants={fadeInUp}
                layout
              >
                <motion.div 
                  className={`bg-white rounded-lg overflow-hidden shadow-sm transition-shadow duration-300 ${isExpanded ? 'shadow-md' : ''} border-l-2 border-r-2 border-b-6 border-[#6BA4CD]`}
                  layout
                  transition={{ layout: { duration: 0.4, type: "spring", stiffness: 100, damping: 15 } }}
                >
                  <motion.button
                    onClick={() => toggleExpanded(index)}
                    className="w-full px-6 py-5 flex items-start justify-between hover:bg-gray-50 transition-colors text-left relative z-10 bg-white"
                    layout="position"
                  >
                    <h3 className="text-2xl font-normal text-[#00406E] flex-1 pr-4">
                      {strength.title}
                    </h3>
                    <div className="shrink-0 mt-1">
                      <motion.div
                        initial={false}
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: "anticipate" }}
                      >
                        {isExpanded ? (
                          <Minus className="w-6 h-6 text-[#6BA4CD]" />
                        ) : (
                          <Plus className="w-6 h-6 text-[#6BA4CD]" />
                        )}
                      </motion.div>
                    </div>
                  </motion.button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-6 pb-6 pt-2">
                          <motion.p 
                            className="text-black leading-relaxed text-xl"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                          >
                            {strength.content}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

