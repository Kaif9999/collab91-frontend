import Image from "next/image";
// Bullet Point Icon
const BulletIcon = () => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <circle cx="4" cy="4" r="4" fill="black" />
  </svg>
);

// Document/Building Icon
const DocumentIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path d="M2 2H10V10H2V2Z" stroke="black" strokeWidth="1" fill="none" />
    <path d="M4 4H8M4 6H8M4 8H7" stroke="black" strokeWidth="0.8" />
  </svg>
);

// Blue Circle Icon for divider
const BlueCircleIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="8" fill="#00406E" />
  </svg>
);

interface ExpertiseItem {
  text: string;
  icon: "bullet" | "document";
}

interface ExpertiseCategory {
  title: string;
  items: ExpertiseItem[];
}

const expertiseCategories: ExpertiseCategory[] = [
  {
    title: "Sourcing & Procurement",
    items: [
      { text: "Buy-desk Support", icon: "bullet" },
      { text: "Category Management", icon: "bullet" },
      { text: "Contract Lifecycle Management", icon: "bullet" },
      { text: "Spend Analytics & Reporting", icon: "bullet" },
      { text: "P2P Managed Services", icon: "bullet" },
      { text: "Strategic Sourcing", icon: "bullet" },
      { text: "Savings Tracking", icon: "bullet" },
    ],
  },
  {
    title: "Business Analytics",
    items: [
      { text: "Commercial and Revenue Analytics", icon: "document" },
      { text: "Procurement & Supply Chain Analytics", icon: "document" },
      { text: "Diagnostic Analytics", icon: "document" },
      { text: "Predictive Analytics", icon: "document" },
      { text: "Operational Analytics", icon: "document" },
      { text: "Customer Analytics", icon: "document" },
    ],
  },
];

export default function OurFunctional() {
  return (
    <section className="w-full bg-white py-8 lg:py-16 px-4 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Main Title */}
        <h2 className="text-4xl lg:text-5xl font-semibold mb-12 text-center lg:text-left">
          <span className="text-[#00406E]">Our</span>{" "}
          <span className="bg-[#010080] rounded-lg text-white px-3 py-1 inline-block">
            functional expertise
          </span>
        </h2>

        {/* Two Column Layout with Divider */}
        <div className="relative">
          {/* Vertical Gradient Divider Line - Mobile on left, Desktop in center */}
          <div className="block lg:hidden absolute left-0 top-0 bottom-0 w-3 bg-linear-to-b from-[#FFFFFF] via-[#2E75B7] to-[#FFFFFF] z-0"></div>
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-3 bg-linear-to-b from-[#FFFFFF] via-[#2E75B7] to-[#FFFFFF] transform -translate-x-1/2 z-0"></div>

          {/* Mobile Layout: All three grids on the right */}
          <div className="block lg:hidden relative z-10 pl-8">
            <div className="space-y-8">
              {/* Sourcing & Procurement - Mobile */}
              <div className="relative">
                <h3 className="text-2xl font-semibold text-[#00406E] mb-6">
                  {expertiseCategories[0].title}
                </h3>

                <div className="space-y-3 bg-[#DEEAF6] rounded-lg p-4">
                  {expertiseCategories[0].items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3"
                    >
                      <div className="shrink-0">
                        <BulletIcon />
                      </div>
                      <span className="text-base text-black">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Bullet between gradient and grid - Mobile */}
                <Image
                  src="/bullet.svg"
                  alt="Bullet"
                  width={35}
                  height={35}
                  className="absolute -left-12 top-[30%] z-20"
                />
              </div>

              {/* Third box - Mobile */}
              <div className="relative">
                <h3 className="text-2xl font-semibold text-[#00406E] mb-6">
                  Third box
                </h3>

                <div className="space-y-3 bg-[#DEEAF6] rounded-lg p-4">
                  {expertiseCategories[0].items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3"
                    >
                      <div className="shrink-0">
                        <BulletIcon />
                      </div>
                      <span className="text-base text-black">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Bullet between gradient and grid - Mobile */}
                <Image
                  src="/bullet.svg"
                  alt="Bullet"
                  width={35}
                  height={35}
                  className="absolute -left-12 top-[30%] z-20"
                />
              </div>

              {/* Business Analytics - Mobile */}
              <div className="relative">
                <h3 className="text-2xl font-semibold text-[#00406E] mb-6">
                  {expertiseCategories[1].title}
                </h3>

                <div className="space-y-3 bg-[#DEEAF6] rounded-lg p-4">
                  {expertiseCategories[1].items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3"
                    >
                      <div className="shrink-0">
                        <DocumentIcon />
                      </div>
                      <span className="text-base text-black">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Bullet between gradient and grid - Mobile */}
                <Image
                  src="/bullet.svg"
                  alt="Bullet"
                  width={35}
                  height={35}
                  className="absolute -left-12 top-[30%] z-20"
                />
              </div>
            </div>
          </div>

          {/* Desktop Layout: Two Column */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
            {/* Left Column */}
            <div className="space-y-8 pr-12 lg:pr-10 relative">
              {/* Sourcing & Procurement */}
              <div className="relative">
                <h3 className="text-2xl lg:text-3xl font-semibold text-[#00406E] mb-6">
                  {expertiseCategories[0].title}
                </h3>

                <div className="space-y-3 bg-[#DEEAF6] rounded-lg p-4">
                  {expertiseCategories[0].items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3"
                    >
                      <div className="shrink-0">
                        <BulletIcon />
                      </div>
                      <span className="text-base text-black">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Bullet positioned at column edge, moved down by 30% */}
                <Image
                  src="/bullet.svg"
                  alt="Bullet"
                  width={35}
                  height={35}
                  className="hidden lg:block absolute -right-16 lg:-right-12 top-[30%] z-20"
                />
            </div>

              {/* Third box */}
              <div className="relative">
                <h3 className="text-2xl lg:text-3xl font-semibold text-[#00406E] mb-6">
                  Third box
                </h3>

                <div className="space-y-3 bg-[#DEEAF6] rounded-lg p-4">
                  {expertiseCategories[0].items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3"
                    >
                      <div className="shrink-0">
                        <BulletIcon />
                      </div>
                      <span className="text-base text-black">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Bullet positioned at column edge, moved down by 30% */}
                <Image
                  src="/bullet.svg"
                  alt="Bullet"
                  width={35}
                  height={35}
                  className="hidden lg:block absolute -right-16 lg:-right-12 top-[30%] z-20"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8 lg:mt-64 pl-12 lg:pl-10 relative">
              {/* Business Analytics */}
              <div className="relative text-right">
                <h3 className="text-2xl lg:text-3xl font-semibold text-[#00406E] mb-6">
                  {expertiseCategories[1].title}
                </h3>

                <div className="space-y-3 bg-[#DEEAF6] rounded-lg p-4">
                  {expertiseCategories[1].items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3"
                    >
                      <div className="shrink-0">
                        <DocumentIcon />
                      </div>
                      <span className="text-base text-black">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Bullet positioned at column edge, moved down by 30% */}
                <Image
                  src="/bullet.svg"
                  alt="Bullet"
                  width={35}
                  height={35}
                  className="hidden lg:block absolute -left-16 lg:-left-12 top-[30%] z-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
