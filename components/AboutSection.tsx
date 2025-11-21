import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-white min-h-[600px] overflow-hidden mt-32">
      <div className="container mx-auto py-8 px-2 bg-white">
        {/* About US Section */}
        <div className="mb-8 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 lg:mb-6 text-left">
            <span className="text-[#00406E]">About</span>{" "}
            <span className="bg-[#010080] rounded-lg text-white px-3 py-1 inline-block">
              US
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-[#00406E] leading-relaxed max-w-5xl text-left">
            Colab91 helps mid-market and Private-Equity-backed firms generate
            alpha through specialized procurement and analytics teams that
            accelerate execution, drive digital transformation and enhance
            enterprise value.teams that accelerate execution, drive digital
            transformation and enhance enterprise value.
          </p>
        </div>

        {/* The Vision & Mission Section */}
        <div className="mb-8 lg:mb-12">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-8 lg:mb-12 text-center lg:text-left">
            <span className="text-[#00406E]">The</span>{" "}
            <span className="bg-[#010080] rounded-lg text-white px-3 py-1 inline-block">
              Vision & Mission
            </span>
          </h2>

          {/* Mission and Vision - Stacked Vertically */}
          <div className="flex flex-col gap-8 lg:gap-16">
            {/* The Mission */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start">
              <div className="shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
                <Image
                  src="/mission.svg"
                  alt="The Mission"
                  width={452}
                  height={485}
                  className="w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[350px] h-auto"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-semibold text-[#00406E] mt-4 lg:mt-16 mb-3 lg:mb-4 text-left">
                  The Mission
                </h3>
                <p className="text-lg lg:text-xl text-[#00406E] leading-relaxed text-left">
                  Our mission is to empower mid-market enterprises by
                  establishing next-gen Capability Centers. We utilize our 'Sum
                  of Parts' approach to augment in-house talent with domain
                  expertise, delivering rapid and transformational results.
                </p>
              </div>
            </div>

            {/* The Vision */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start">
              <div className="shrink-0 w-full lg:w-auto lg:order-2 flex justify-center lg:justify-start">
                <Image
                  src="/vision.svg"
                  alt="The Vision"
                  width={496}
                  height={409}
                  className="w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[350px] h-auto -mt-4 lg:-mt-16 lg:ml-0"
                />
              </div>
              <div className="flex-1 lg:order-1">
                <h3 className="text-2xl lg:text-3xl font-semibold mt-2 lg:mt-10 text-[#00406E] mb-3 lg:mb-4 text-left">
                  The Vision
                </h3>
                <p className="text-lg lg:text-xl text-[#00406E] leading-relaxed text-left">
                  To be the essential global partner that transforms client
                  operations into a sustainable source of innovation,
                  competitive differentiation, and accelerated market
                  leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
