"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, containerStagger, wordStagger, cardStagger, cardItem } from "./motionVariants";

export default function OurServices() {
  return (
    <motion.section
      id="our-services"
      className="w-full bg-white py-16 px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="container mx-auto">
        <div className="mb-6">
          <motion.h2
            className="text-4xl lg:text-5xl text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerStagger}
          >
            <motion.span className="text-[#00406E] inline-block" variants={wordStagger}>
              Our
            </motion.span>
            <motion.span
              className="bg-[#010080] text-white px-3 py-2 rounded-lg inline-block ml-2"
              variants={wordStagger}
            >
              Services.
            </motion.span>
          </motion.h2>
        </div>

        <motion.div className="grid grid-cols-1 lg:grid-cols-10 gap-8 mb-4" variants={fadeInUp}>
          <div className="order-1 lg:order-2 lg:col-span-6 flex flex-col justify-center lg:-mt-24 text-center lg:text-left px-2">
            <motion.h3 className="text-3xl lg:text-4xl text-black mb-4" variants={fadeInUp}>
              Build with experts
            </motion.h3>
            <motion.p className="text-xl text-black leading-relaxed" variants={fadeInUp}>
              Our strength lies in operating and excelling within our <strong>circle of competence</strong>. Colab91's leadership has a proven track record of nearly two decades in delivering services and building products in procurement and analytics space.
            </motion.p>
          </div>

          <motion.div className="order-2 lg:order-1 lg:col-span-4 flex items-center justify-center" variants={fadeInUp}>
            <div className="w-full h-full min-h-[300px] flex items-center justify-center">
              <Image
                src="/lightbulbs.svg"
                alt="Lightbulbs"
                width={1536}
                height={1024}
                className="w-3/4 max-w-xs sm:max-w-sm lg:w-4/5 h-auto"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-gray-100 px-4 py-4 rounded-lg relative shadow-[4px_0_0_0_#69B2F3,0_4px_0_0_#69B2F3]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardStagger}
        >
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div className="bg-white rounded-lg flex shadow-[4px_-4px_8px_0_rgba(0,0,0,0.1)]" variants={cardItem}>
              <div className="w-1/10 mr-2 shrink-0">
                <div className="w-full h-full rounded-bl-lg rounded-tl-lg bg-[#79BDF7]"></div>
              </div>
              <div className="w-9/10 py-4 px-2">
                <h4 className="text-2xl font-bold text-[#00406E] mb-3">Sourcing & Procurement</h4>
                <p className="text-black leading-relaxed text-lg">
                  Colab91 delivers end-to-end procurement excellence through buy-desk support, category management, strategic sourcing and spend analytics. We blend human expertise with technology-driven insights to help you modernize your procurement function.
                </p>
              </div>
            </motion.div>

            <motion.div className="bg-white rounded-lg flex shadow-[4px_-4px_8px_0_rgba(0,0,0,0.1)]" variants={cardItem}>
              <div className="w-1/10 mr-2 shrink-0">
                <div className="w-full h-full rounded-bl-lg rounded-tl-lg bg-[#69B2F8]"></div>
              </div>
              <div className="w-9/10 py-4 px-2">
                <h4 className="text-2xl font-bold text-[#00406E] mb-3">Business Analytics</h4>
                <p className="text-black leading-relaxed text-lg">
                  Our analytics specialists transform raw data into clear, actionable insights that sharpen decision-making, and drive strategic outcomes. From data preparation to predictive modeling, we enable you to unlock value, anticipate trends, and accelerate your competitive edge.
                </p>
              </div>
            </motion.div>

            <motion.div className="bg-white rounded-lg flex shadow-[4px_-4px_8px_0_rgba(0,0,0,0.1)]" variants={cardItem}>
              <div className="w-1/10 mr-2 shrink-0">
                <div className="w-full h-full rounded-bl-lg rounded-tl-lg bg-[#3CA0FA]"></div>
              </div>
              <div className="w-9/10 py-4 px-2">
                <h4 className="text-2xl font-bold text-[#00406E] mb-3">Third one</h4>
                <p className="text-black leading-relaxed text-lg">
                  Our analytics specialists transform raw data into clear, actionable insights that sharpen decision-making, and drive strategic outcomes. From data preparation to predictive modeling, we enable you to unlock value, anticipate trends, and accelerate your competitive edge.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
