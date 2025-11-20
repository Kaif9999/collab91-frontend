import React from "react";
import Image from "next/image";

const AboutInvest = () => {
  return (
    <section className="w-full bg-white py-12 lg:py-16 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Title Section - Centered */}
        <div className="mb-8 lg:mb-12 text-center">
          <h2 className="text-[#00406E] leading-tight">
            <span className="block text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2">Investing in Tomorrow</span>
            <span className="block text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2">Education & Empowerment for</span>
            <span className="block text-2xl lg:text-3xl xl:text-4xl font-semibold">the Underprivileged</span>
          </h2>
        </div>

        {/* Central Illustration */}
        <div className="w-full flex items-center justify-center mb-8 lg:mb-12">
          <div className="w-full max-w-2xl h-auto">
            <Image
              src="/aboutInvest.svg"
              alt="Investing in Tomorrow - Education & Empowerment"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Descriptive Paragraph - Centered */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-base lg:text-lg xl:text-xl text-[#00406E] leading-relaxed">
            Leveraging our expertise in building future-ready talent, we actively support programs that provide underprivileged students with access to essential skills and training, particularly in technology and data literacy
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutInvest;

