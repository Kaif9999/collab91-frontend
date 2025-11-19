import Image from "next/image";

export default function OurBusiness() {
  return (
    <section className="w-full bg-white py-16 px-8">
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="mb-2">
          <h2 className="text-4xl lg:text-5xl">
            <span className="text-[#00406E]">Our</span>{" "}
            <span className="bg-[#010080] text-white px-3 py-2 rounded-lg inline-block">
              business.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 mb-4">
          {/* Left Section - 30% (Image Space) */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="w-full h-full min-h-[300px] flex items-center justify-center">
              <Image src="/lightbulbs.svg" alt="Lightbulbs" width={1536} height={1024} className="w-4/5 h-auto" />
            </div>
          </div>

          {/* Right Section - 70% (Text with Heading) */}
          <div className="lg:col-span-6 flex flex-col justify-center -mt-24">
            <h3 className="text-3xl lg:text-4xl text-black mb-4">
              Design with simplicity
            </h3>
            <p className="text-xl text-black leading-relaxed">
              We help our customers build <strong className="underline">offshore teams</strong> that serve as <br /> <strong className="underline">strategic hubs</strong> for global operations.
            </p>
          </div>
        </div>

        {/* Three Grid Boxes Section - Gray Background Container */}
        <div className="bg-gray-100 px-4 py-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Box 1 */}
            <div className="bg-white p-6 rounded-lg">
              <p className="text-[#00406E] leading-relaxed">
                We set up dedicated teams of domain experts to deliver rapid, measurable and transformational results for <strong className="bg-blue-200">mid-market companies and private equity portfolios.</strong>
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-6 rounded-lg">
              <p className="text-[#00406E] leading-relaxed">
                We carry deep sectorial experience in <strong className="underline">procurement and analytics</strong> domains to structure organizations, recruit top-tier talent and manage operations.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white p-6 rounded-lg">
              <p className="text-[#00406E] leading-relaxed">
                Our leadership has mastered the art of building high-functioning teams that deliver exceptional results by <strong className="underline">blending onshore expertise with offshore efficiency.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

