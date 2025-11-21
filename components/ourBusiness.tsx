"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, smoothFadeIn, wordStagger, containerStagger, cardStagger, cardItem } from "./motionVariants";

export default function OurBusiness() {
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  const cards = [
    {
      id: 1,
      content: (
        <p className="text-[#00406E] leading-relaxed">
          We set up dedicated teams of domain experts to deliver rapid, measurable and transformational results for{" "}
          <strong className="bg-blue-200">mid-market companies and private equity portfolios.</strong>
        </p>
      ),
    },
    {
      id: 2,
      content: (
        <p className="text-[#00406E] leading-relaxed">
          We carry deep sectorial experience in <strong className="bg-blue-200">procurement and analytics</strong> domains to structure organizations, recruit top-tier talent and manage operations.
        </p>
      ),
    },
    {
      id: 3,
      content: (
        <p className="text-[#00406E] leading-relaxed">
          Our leadership has mastered the art of building high-functioning teams that deliver exceptional results by{" "}
          <strong className="bg-blue-200">blending onshore expertise with offshore efficiency.</strong>
        </p>
      ),
    },
  ];

  // Duplicate cards for seamless infinite scroll
  const duplicatedCards = [...cards, ...cards, ...cards];

  useEffect(() => {
    const updateCardWidth = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        const gap = 16; // gap-4 = 1rem = 16px
        // Calculate based on viewport width
        let numCards = 3; // desktop default
        if (window.innerWidth < 768) {
          numCards = 1; // mobile
        } else if (window.innerWidth < 1024) {
          numCards = 2; // tablet
        }
        const numGaps = numCards - 1;
        const cardWidthValue = (containerWidth - gap * numGaps) / numCards;
        setCardWidth(cardWidthValue);
      }
    };

    // Initial calculation
    updateCardWidth();
    
    // Recalculate on resize
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);
  return (
    <motion.section
      id="our-business"
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
            <motion.span
              className="text-[#00406E] inline-block"
              variants={wordStagger}
            >
              Our
            </motion.span>
            <motion.span
              className="bg-[#010080] text-white px-3 py-2 rounded-lg inline-block ml-2"
              variants={wordStagger}
            >
              business.
            </motion.span>
          </motion.h2>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-10 gap-8 mb-4"
          variants={fadeInUp}
        >
          <div className="order-1 lg:order-2 lg:col-span-6 flex flex-col justify-center lg:-mt-24 text-center lg:text-left px-2">
            <motion.h3 className="text-3xl lg:text-4xl text-black mb-4" variants={fadeInUp}>
              Design with simplicity
            </motion.h3>
            <motion.p className="text-xl text-black leading-relaxed" variants={fadeInUp}>
              We help our customers build <strong className="underline">offshore teams that serve as <br className="hidden lg:block" /></strong> <strong className="underline">strategic hubs</strong> for global operations.
            </motion.p>
          </div>

          <motion.div
            className="order-2 lg:order-1 lg:col-span-4 flex items-center justify-center"
            variants={fadeInUp}
          >
            <div

              className="w-full h-full min-h-[300px] flex items-center justify-center relative overflow-hidden"
            >
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
          className="bg-gray-100 px-4 py-4 rounded-lg overflow-hidden relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardStagger}
        >
          {/* Left Cloud-like Border Effect */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, rgba(243, 244, 246, 1) 0%, rgba(243, 244, 246, 0.8) 20%, rgba(243, 244, 246, 0.4) 50%, transparent 100%)",
              maskImage: "radial-gradient(ellipse 80px 100% at left center, black 40%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 80px 100% at left center, black 40%, transparent 100%)",
            }}
          />
          
          {/* Right Cloud-like Border Effect */}
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to left, rgba(243, 244, 246, 1) 0%, rgba(243, 244, 246, 0.8) 20%, rgba(243, 244, 246, 0.4) 50%, transparent 100%)",
              maskImage: "radial-gradient(ellipse 80px 100% at right center, black 40%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 80px 100% at right center, black 40%, transparent 100%)",
            }}
          />

          <div className="overflow-hidden" ref={carouselRef}>
            <motion.div
              className="flex gap-4 w-fit"
              animate={
                !isHovered && cardWidth > 0
                  ? {
                      x: [0, -(cardWidth * 3 + 16 * 2)],
                    }
                  : {}
              }
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {duplicatedCards.map((card, index) => (
                <motion.div
                  key={`${card.id}-${index}`}
                  className="bg-white p-6 rounded-lg shrink-0 w-full md:w-[calc((100%-1rem)/2)] lg:w-auto"
                  style={{
                    width: cardWidth > 0 ? `${cardWidth}px` : undefined,
                    minWidth: cardWidth > 0 ? `${cardWidth}px` : undefined,
                  }}
                  variants={cardItem}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {card.content}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        @keyframes pulseGlow {
          0% {
            transform: scale(0.9);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.15);
            opacity: 1;
          }
          100% {
            transform: scale(0.9);
            opacity: 0.5;
          }
        }
      `}</style>
    </motion.section>
  );
}
