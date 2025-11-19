import Image from "next/image";

export default function OurServices() {
  return (
    <section id="our-services" className="w-full bg-white py-16 px-8">
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="mb-6">
          <h2 className="text-4xl lg:text-5xl text-center lg:text-left">
            <span className="text-[#00406E]">Our</span>{" "}
            <span className="bg-[#010080] text-white px-3 py-2 rounded-lg inline-block">
              Services.
            </span>
          </h2>
        </div>

        {/* 30-70 Grid Section: Image on Left, Text on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 mb-4">
          {/* Right Section - Text with Heading */}
          <div className="order-1 lg:order-2 lg:col-span-6 flex flex-col justify-center lg:-mt-24 text-center lg:text-left px-2">
            <h3 className="text-3xl lg:text-4xl text-black mb-4">
              Build with experts
            </h3>
            <p className="text-xl text-black leading-relaxed">
              Our strength lies in operating and excelling within our{" "}
              <strong>circle of competence</strong>. Colab91's leadership has a proven track record of nearly two decades in delivering services and building products in procurement and analytics space.
            </p>
          </div>

          {/* Left Section - Image Space */}
          <div className="order-2 lg:order-1 lg:col-span-4 flex items-center justify-center">
            <div className="w-full h-full min-h-[300px] flex items-center justify-center">
              <Image
                src="/lightbulbs.svg"
                alt="Lightbulbs"
                width={1536}
                height={1024}
                className="w-3/4 max-w-xs sm:max-w-sm lg:w-4/5 h-auto"
              />
            </div>
          </div>
        </div>

        {/* Three Grid Boxes Section - Gray Background Container with Blue Shadow */}
        <div className="bg-gray-100 px-4 py-4 rounded-lg relative shadow-[4px_0_0_0_#69B2F3,0_4px_0_0_#69B2F3]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1: Sourcing & Procurement */}
            <div className="bg-white rounded-lg flex shadow-[4px_-4px_8px_0_rgba(0,0,0,0.1)]">
              {/* Blue Horizontal Line - 20% */}
              <div className="w-1/10 mr-2 shrink-0">
                <div className="w-full h-full rounded-bl-lg rounded-tl-lg bg-[#79BDF7]"></div>
              </div>
              {/* Text Content - 80% */}
              <div className="w-9/10 py-4 px-2">
                <h4 className="text-2xl font-bold text-[#00406E] mb-3">
                  Sourcing & Procurement
                </h4>
                <p className="text-black leading-relaxed text-lg">
                  Colab91 delivers end-to-end procurement excellence through buy-desk support, category management, strategic sourcing and spend analytics. We blend human expertise with technology-driven insights to help you modernize your procurement function.
                </p>
              </div>
            </div>

            {/* Card 2: Business Analytics */}
            <div className="bg-white rounded-lg flex shadow-[4px_-4px_8px_0_rgba(0,0,0,0.1)]">
              {/* Blue Horizontal Line - 20% */}
              <div className="w-1/10 mr-2 shrink-0">
                <div className="w-full h-full rounded-bl-lg rounded-tl-lg bg-[#69B2F8]"></div>
              </div>
              {/* Text Content - 80% */}
              <div className="w-9/10 py-4 px-2">
                <h4 className="text-2xl font-bold text-[#00406E] mb-3">
                  Business Analytics
                </h4>
                <p className="text-black leading-relaxed text-lg">
                  Our analytics specialists transform raw data into clear, actionable insights that sharpen decision-making, and drive strategic outcomes. From data preparation to predictive modeling, we enable you to unlock value, anticipate trends, and accelerate your competitive edge.
                </p>
              </div>
            </div>

            {/* Card 3: Third Service */}
            <div className="bg-white rounded-lg flex shadow-[4px_-4px_8px_0_rgba(0,0,0,0.1)]">
              {/* Blue Horizontal Line - 20% */}
              <div className="w-1/10 mr-2 shrink-0">
                <div className="w-full h-full rounded-bl-lg rounded-tl-lg bg-[#3CA0FA]"></div>
              </div>
              {/* Text Content - 80% */}
              <div className="w-9/10 py-4 px-2">
                <h4 className="text-2xl font-bold text-[#00406E] mb-3">
                  Third one
                </h4>
                <p className="text-black leading-relaxed text-lg">
                  Our analytics specialists transform raw data into clear, actionable insights that sharpen decision-making, and drive strategic outcomes. From data preparation to predictive modeling, we enable you to unlock value, anticipate trends, and accelerate your competitive edge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
