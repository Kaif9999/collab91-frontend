"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "./motionVariants";
import { useState, useEffect, useRef } from "react";

function useTypewriter(text: string, speed: number = 80, startTyping: boolean = true) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (!startTyping || hasStartedRef.current) return;
    
    setIsTyping(true);
    hasStartedRef.current = true;
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, startTyping]);

  return { displayedText, isTyping };
}

export default function HeroHome() {
  const headingText = "Next-gen Capability Centers";
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { displayedText, isTyping } = useTypewriter(headingText, 80, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
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

  const handleLearnMoreClick = () => {
    const ourBusinessSection = document.getElementById("our-business");
    if (ourBusinessSection) {
      ourBusinessSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.section
      className="relative w-full bg-white min-h-[600px] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div ref={sectionRef} className="container mx-auto py-8 px-2 bg-white">
        <div className="flex flex-col lg:hidden gap-6">
          <motion.h1 className="text-4xl text-[#00406E] leading-tight px-2" variants={fadeInUp}>
            {displayedText}
            {isTyping && <span className="animate-pulse">|</span>}
          </motion.h1>

          <motion.p className="text-2xl text-[#00406E] leading-relaxed px-2 mt-6" variants={fadeInUp}>
            Move beyond with our <span className="bg-[#010080] rounded-sm text-white px-2 py-1 font-semibold">"sum of parts"</span> approach, augmenting in house talent with domain expertise, create value, advance innovation and accelerate growth.
          </motion.p>

          <div className="relative w-full min-h-[300px] flex items-center justify-center">
            <Image src="/herosection.svg" alt="Hero Home" width={794} height={554} className="w-full h-auto" />
          </div>

          <div className="flex flex-col items-center gap-4 px-2 mt-10">
            <button onClick={handleLearnMoreClick} className="w-[200px] px-8 py-1 bg-white border-2 border-[#00406E] rounded-lg hover:bg-blue-50 transition-colors shadow-[0_4px_8px_0_#B4C3D1]" style={{ fontFamily: '"Myriad Pro", "Myriad Pro Regular", Myriad, "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
              <span className="text-[#00406E] uppercase text-lg block tracking-widest">LEARN</span>
              <span className="text-[#00406E] uppercase text-lg block tracking-widest">MORE</span>
            </button>
            <motion.button
              className="relative w-[200px] px-8 py-1 bg-[#00406E] rounded-lg overflow-hidden cursor-pointer"
              style={{ fontFamily: '"Myriad Pro", "Myriad Pro Regular", Myriad, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              animate={{
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 4px 8px 0 #B4C3D1",
                  "0 8px 16px 0 rgba(0, 64, 110, 0.4)",
                  "0 4px 8px 0 #B4C3D1",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 24px 0 rgba(0, 64, 110, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
              />
              <span className="relative z-10 text-white uppercase text-lg block tracking-widest">REQUEST</span>
              <span className="relative z-10 text-white uppercase text-lg block tracking-widest">CONSULTATION</span>
            </motion.button>
          </div>

          <div className="-ml-2">
            <Image src="/blue-bg.svg" alt="Blue Background" width={321} height={149} className="w-auto h-auto max-w-[321px] sm:max-w-[321px]" />
          </div>
        </div>

        <motion.div className="hidden lg:grid lg:grid-cols-2 gap-6 relative z-10" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp}>
          <div className="flex mx-2 flex-col -mt-6 lg:mt-6">
            <motion.h1 className="text-4xl lg:text-5xl text-[#00406E] leading-tight whitespace-nowrap" variants={fadeInUp}>
              {displayedText}
              {isTyping && <span className="animate-pulse">|</span>}
            </motion.h1>
            <motion.p className="mt-8 text-2xl text-[#00406E] leading-relaxed max-w-xl" variants={fadeInUp}>
              Move beyond with our <span className="bg-[#010080] rounded-sm text-white px-2 py-1 font-semibold">"sum of parts"</span> approach, augmenting in house talent with domain expertise, create value, advance innovation and accelerate growth.
            </motion.p>
            <div className="flex flex-row flex-wrap gap-4 mt-8 w-[80%]">
              <button onClick={handleLearnMoreClick} className="flex-1 min-w-[180px] px-8 py-1 bg-white border-2 border-[#00406E] rounded-lg hover:bg-blue-50 transition-colors shadow-[0_4px_8px_0_#B4C3D1]" style={{ fontFamily: '"Myriad Pro", "Myriad Pro Regular", Myriad, "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                <span className="text-[#00406E] uppercase text-lg block tracking-widest">LEARN</span>
                <span className="text-[#00406E] uppercase text-lg block tracking-widest">MORE</span>
              </button>
              <motion.button
                className="relative flex-1 min-w-[180px] px-8 py-1 bg-[#00406E] rounded-lg overflow-hidden cursor-pointer"
                style={{ fontFamily: '"Myriad Pro", "Myriad Pro Regular", Myriad, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
                animate={{
                  scale: [1, 1.02, 1],
                  boxShadow: [
                    "0 4px 8px 0 #B4C3D1",
                    "0 8px 16px 0 rgba(0, 64, 110, 0.4)",
                    "0 4px 8px 0 #B4C3D1",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 12px 24px 0 rgba(0, 64, 110, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut",
                  }}
                />
                <span className="relative z-10 text-white uppercase text-lg block tracking-widest">REQUEST</span>
                <span className="relative z-10 text-white uppercase text-lg block tracking-widest">CONSULTATION</span>
              </motion.button>
            </div>
          </div>
          <motion.div className="relative w-full h-full min-h-[400px] flex items-center justify-center mt-6 lg:mt-8" variants={fadeInUp}>
            <Image src="/herosection.svg" alt="Hero Home" width={794} height={554} className="w-full h-full" />
          </motion.div>
        </motion.div>
      </div>

      <div className="hidden lg:block relative min-h-[149px] w-full">
        <Image src="/blue-bg.svg" alt="Blue Background" width={642} height={299} className="w-auto h-auto max-w-[642px] xl:max-w-[800px] 2xl:max-w-[1000px]" />
      </div>
    </motion.section>
  );
}
