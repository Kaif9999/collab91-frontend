import Image from "next/image";

export default function ServiceHero() {
  return (
    <section className="w-full bg-white py-8 lg:py-16 px-4 lg:px-8">
      <div className="container mt-24 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Section - Content */}
          <div className="flex flex-col">
            {/* Main Heading */}
            <h1 className="text-3xl lg:text-5xl text-[#00406E] leading-tight mb-6">
              Building high-octane teams with domain experts to fuel your next
              stage of growth.
            </h1>

            {/* Sub-text */}
            <p className="text-lg lg:text-xl text-[#015A9C] leading-relaxed mb-8">
              Colab91 helps mid-market and Private-Equity-backed firms generate
              alpha through specialized procurement and analytics teams that
              accelerate execution, drive digital transformation and enhance
              enterprise value.
            </p>

            {/* Call-to-Action Button */}
            <button
              className="w-[200px] lg:w-[200px] px-8 py-1 bg-[#00406E] rounded-lg hover:opacity-90 transition-opacity shadow-[0_4px_8px_0_#B4C3D1]"
              style={{
                fontFamily:
                  '"Myriad Pro", "Myriad Pro Regular", Myriad, "Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              <span className="text-white uppercase text-lg block tracking-widest">
                REQUEST
              </span>
              <span className="text-white uppercase text-lg block tracking-widest">
                CONSULTATION
              </span>
            </button>
          </div>

          {/* Right Section - Rocket Illustration */}
          <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
            <Image
              src="/rocket.svg"
              alt="Rocket Illustration"
              width={809}
              height={687}
              className="w-full h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
