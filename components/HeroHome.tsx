import Image from "next/image";

export default function HeroHome() {
  return (
    <section className="relative w-full bg-white min-h-[600px] overflow-hidden">

      {/* Main Content Container */}
      <div className="container mx-auto py-8 px-2 bg-white">
        {/* Mobile Layout: Single Column */}
        <div className="flex flex-col lg:hidden gap-6">
          {/* 1. Main Title */}
          <h1 className="text-4xl text-[#00406E] leading-tight px-2">
            Next-gen Capability Centers
          </h1>

          {/* 2. Descriptive Paragraph */}
          <p className="text-2xl text-[#00406E] leading-relaxed px-2">
            Move beyond with our{" "}
            <span className="bg-[#010080] rounded-sm text-white px-2 py-1 font-semibold">
              "sum of parts"
            </span>{" "}
            approach, augmenting in house talent with domain expertise, create
            value, advance innovation and accelerate growth.
          </p>

          {/* 3. Hero Section SVG */}
          <div className="relative w-full min-h-[300px] flex items-center justify-center">
            <Image src="/herosection.svg" alt="Hero Home" width={794} height={554} className="w-full h-auto" />
          </div>

          {/* 4. Call-to-Action Buttons - Centered, Not Full Width */}
          <div className="flex flex-col items-center gap-4 px-2">
            {/* LEARN MORE Button */}
            <button 
              className="w-[200px] px-8 py-1 bg-white border-2 border-[#00406E] rounded-lg hover:bg-blue-50 transition-colors shadow-[0_4px_8px_0_#B4C3D1]"
              style={{ fontFamily: '"Myriad Pro", "Myriad Pro Regular", Myriad, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              <span className="text-[#00406E] uppercase text-lg block tracking-widest">
                LEARN
              </span>
              <span className="text-[#00406E] uppercase text-lg block tracking-widest">
                MORE
              </span>
            </button>

            {/* REQUEST CONSULTATION Button */}
            <button 
              className="w-[200px] px-8 py-1 bg-[#00406E] rounded-lg hover:opacity-90 transition-opacity shadow-[0_4px_8px_0_#B4C3D1]"
              style={{ fontFamily: '"Myriad Pro", "Myriad Pro Regular", Myriad, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              <span className="text-white uppercase text-lg block tracking-widest">
                REQUEST
              </span>
              <span className="text-white uppercase text-lg block tracking-widest">
                CONSULTATION
              </span>
            </button>
          </div>


          <div className=" -ml-2">
            <Image 
              src="/blue-bg.svg" 
              alt="Blue Background" 
              width={321} 
              height={149} 
              className="w-auto h-auto max-w-[321px] sm:max-w-[321px]" 
            />
          </div>
        </div>

        {/* Desktop Layout: Two Column Grid - Unchanged */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 relative z-10">
          {/* Left Section: Text and Buttons - Moved Up */}
          <div className="flex mx-2 flex-col -mt-6 lg:mt-6">
            {/* Main Title */}
            <h1 className="text-4xl lg:text-5xl text-[#00406E] leading-tight whitespace-nowrap">
              Next-gen Capability Centers
            </h1>

            {/* Descriptive Paragraph */}
            <p className="mt-4 text-2xl text-[#00406E] leading-relaxed max-w-xl">
              Move beyond with our{" "}
              <span className="bg-[#010080] rounded-sm text-white px-2 py-1 font-semibold">
                "sum of parts"
              </span>{" "}
              approach, augmenting in house talent with domain expertise, create
              value, advance innovation and accelerate growth.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-row flex-wrap gap-4 mt-4 w-[80%]">
              {/* LEARN MORE Button */}
              <button 
                className="flex-1 min-w-[180px] px-8 py-1 bg-white border-2 border-[#00406E] rounded-lg hover:bg-blue-50 transition-colors shadow-[0_4px_8px_0_#B4C3D1]"
                style={{ fontFamily: '"Myriad Pro", "Myriad Pro Regular", Myriad, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                <span className="text-[#00406E] uppercase text-lg block tracking-widest">
                  LEARN
                </span>
                <span className="text-[#00406E] uppercase text-lg block tracking-widest">
                  MORE
                </span>
              </button>

              {/* REQUEST CONSULTATION Button */}
              <button 
                className="flex-1 min-w-[180px] px-8 py-1 bg-[#00406E] rounded-lg hover:opacity-90 transition-opacity shadow-[0_4px_8px_0_#B4C3D1]"
                style={{ fontFamily: '"Myriad Pro", "Myriad Pro Regular", Myriad, "Helvetica Neue", Helvetica, Arial, sans-serif' }}
              >
                <span className="text-white uppercase text-lg block tracking-widest">
                  REQUEST
                </span>
                <span className="text-white uppercase text-lg block tracking-widest">
                  CONSULTATION
                </span>
              </button>
            </div>
          </div>

          {/* Right Section: Image - Moved Down */}
          <div className="relative w-full h-full min-h-[400px] flex items-center justify-center mt-6 lg:mt-8">
            <Image src="/herosection.svg" alt="Hero Home" width={794} height={554} className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Blue Graphic for Desktop - Flush with Left Edge */}
      <div className="hidden lg:block relative min-h-[149px] w-full">
        <Image 
          src="/blue-bg.svg" 
          alt="Blue Background" 
          width={642} 
          height={299} 
          className="w-auto h-auto max-w-[642px] xl:max-w-[800px] 2xl:max-w-[1000px]" 
        />
      </div>
    </section>
  );
}

