import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#DEEAF6] py-16 px-8 border-b border-gray-400">
      <div className="w-full">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Image src="/colab.svg" alt="COLAB 91 Logo" width={80} height={30} className="w-auto h-auto" />
            </div>
            <p className="text-gray-500 text-sm mb-4">SUM OF PARTS</p>
            <a href="mailto:Contact@colab91.com" className="text-[#00406E] text-sm hover:underline block mb-4">
              Contact@colab91.com
            </a>
            <p className="text-[#00406E] text-sm">©2025 Collab 91. All Rights Reserved.</p>
          </div>

          {/* Addresses Section - Two Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-[#00406E] font-bold mb-3">INDIA</h4>
              <p className="text-[#00406E] text-sm font-normal leading-relaxed">
                Wework Forum, DLF Cyber City
                <br />
                Gurugram, Haryana 122002
              </p>
            </div>
            <div>
              <h4 className="text-[#00406E] font-bold mb-3">USA</h4>
              <p className="text-[#00406E] text-sm font-normal leading-relaxed">
                Regus, 200 Continental Drive, Suite 401
                <br />
                Newark, Delaware, 19713
              </p>
            </div>
          </div>

          {/* Navigation Links - Four Grid */}
          <div className="grid grid-cols-4 gap-4">
            {/* Column 1: Home */}
            <div>
              <h4 className="text-[#00406E] font-bold mb-4">Home</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#our-business" className="text-[#00406E] text-sm font-normal hover:underline">
                    Our business
                  </a>
                </li>
                <li>
                  <a href="#our-services" className="text-[#00406E] text-sm font-normal hover:underline">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#our-strengths" className="text-[#00406E] text-sm font-normal hover:underline">
                    Our Strengths
                  </a>
                </li>
                <li>
                  <a href="#contact-us" className="text-[#00406E] text-sm font-normal hover:underline">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="text-[#00406E] font-bold mb-4">Services</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-[#00406E] text-sm font-normal hover:underline">
                    Experties
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00406E] text-sm font-normal hover:underline">
                    models
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00406E] text-sm font-normal hover:underline">
                    Maturity map
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00406E] text-sm font-normal hover:underline">
                    Methodology
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Products */}
            <div>
              <h4 className="text-[#00406E] font-bold mb-4">Products</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-[#00406E] text-sm font-normal hover:underline">
                    Experties
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00406E] text-sm font-normal hover:underline">
                    models
                  </a>
                </li>
                
              </ul>
            </div>

            {/* Column 4: About */}
            <div>
              <h4 className="text-[#00406E] font-bold mb-4">About</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-[#00406E] text-sm font-normal hover:underline">
                    Vision & Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00406E] text-sm font-normal hover:underline">
                    Leadership
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00406E] text-sm font-normal hover:underline">
                    Impact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00406E] text-sm font-normal hover:underline">
                    Carrer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Unchanged */}
        <div className="hidden lg:flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Left Section - Logo, Copyright, Email */}
          <div className="shrink-0">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/colab.svg" alt="COLAB 91 Logo" width={120} height={40} className="w-auto h-auto" />
            </div>
            <p className="text-gray-500 text-sm mb-4">SUM OF PARTS</p>
            <p className="text-[#00406E] text-sm mb-4">©2025 Collab 91. All Rights Reserved.</p>
            <a href="mailto:Contact@colab91.com" className="text-[#00406E] text-sm hover:underline">
              Contact@colab91.com
            </a>
          </div>

          {/* Right Section - Navigation + Addresses */}
          <div className="flex flex-col md:flex-row md:gap-12">
            {/* Navigation Columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* Column 1: Home */}
            <div>
              <h4 className="text-[#00406E] font-bold mb-4">Home</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#our-business" className="text-[#00406E] text-sm font-normal hover:underline">
                    Our business
                  </a>
                </li>
                <li>
                  <a href="#our-services" className="text-[#00406E] text-sm font-normal hover:underline">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#our-strengths" className="text-[#00406E] text-sm font-normal hover:underline">
                    Our Strengths
                  </a>
                </li>
                <li>
                  <a href="#contact-us" className="text-[#00406E] text-sm font-normal hover:underline">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="text-[#00406E] font-bold mb-4">Services</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-[#00406E] text-sm font-normal hover:underline">
                    Experties
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00406E] text-sm font-normal hover:underline">
                    models
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00406E] text-sm font-normal hover:underline">
                    Maturity map
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00406E] text-sm font-normal hover:underline">
                    Methodology
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Products */}
            <div>
              <h4 className="text-[#00406E] font-bold mb-4">Products</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-[#00406E] text-sm font-normal hover:underline">
                    Experties
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00406E] text-sm font-normal hover:underline">
                    models
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00406E] text-sm font-normal hover:underline">
                    Maturity map
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00406E] text-sm font-normal hover:underline">
                    Methodology
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: About */}
            <div>
              <h4 className="text-[#00406E] font-bold mb-4">About</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-[#00406E] text-sm font-normal hover:underline">
                    Vision & Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00406E] text-sm font-normal hover:underline">
                    Leadership
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00406E] text-sm font-normal hover:underline">
                    Impact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#00406E] text-sm font-normal hover:underline">
                    Carrer
                  </a>
                </li>
              </ul>
            </div>
            </div>

            {/* Addresses Section */}
            <div className="shrink-0">
              <div className="mb-6">
                <h4 className="text-[#00406E] font-bold mb-3">USA</h4>
                <p className="text-[#00406E] text-sm font-normal leading-relaxed">
                  Regus, 200 Continental Drive, Suite 401
                  <br />
                  Newark, Delaware, 19713
                </p>
              </div>
              <div>
                <h4 className="text-[#00406E] font-bold mb-3">INDIA</h4>
                <p className="text-[#00406E] text-sm font-normal leading-relaxed">
                  Wework Forum, DLF Cyber City
                  <br />
                  Gurugram, Haryana 122002
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
