import React from "react";

const OurEngagement = () => {
  const engagementModels = [
    {
      title: "Managed Teams",
      description: [
        "Launch your offshore team",
        "Maximum speed",
        "We manage; you scale.",
      ],
      bestFor:
        "Small-cap customers seeking hassle-free and rapid team setup without operational complexities.",
      details: {
        "Entity Ownership": "Colab91",
        "Intellectual Property": "Client",
        "Quality Control": "Client-led & Client-approved",
        "Talent Acquisition": "Client-led & Client-approved",
        "Operations Support": "Client-led & Client-standards",
      },
    },
    {
      title: "Build-Operate-Transfer",
      description: [
        "Build with experts",
        "Operate with confidence",
        "Transfer with ease.",
      ],
      bestFor:
        "Mid-scale enterprises seeking smooth transition to full control after set up and stabilization of offshore center.",
      details: {
        "Entity Ownership": "Colab91",
        "Intellectual Property": "Client",
        "Quality Control": "Client-led & Colab91-supported",
        "Talent Acquisition": "Client-led & Colab91-supported",
        "Operations Support": "Client-led & Client-standards",
      },
    },
    {
      title: "Global Capability Center",
      description: ["Your team.", "Total control", "Maximum impact."],
      bestFor:
        "Mature set-ups (business size agnostic) desiring full ownership and strategic control of offshore operations.",
      details: {
        "Entity Ownership": "Client",
        "Intellectual Property": "Client",
        "Quality Control": "Client",
        "Talent Acquisition": "Client-led & Client-approved",
        "Operations Support": "Client-led & Client-approved",
      },
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Title Section */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4 text-center lg:text-left">
            <span className="text-[#00406E]">Our</span>{" "}
            <span className="bg-[#010080] rounded-lg text-white px-3 py-1 inline-block">
              engagement models
            </span>
          </h2>
          <p className="text-base lg:text-lg text-black max-w-3xl text-center lg:text-left">
            Flexible partnership options designed to match your organization's
            strategic objectives.
          </p>
        </div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {engagementModels.map((model, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-[0_6px_12px_rgba(0,0,0,0.15),6px_0_12px_rgba(0,0,0,0.15)] flex flex-col"
            >
              {/* Upper Section with Gray Background */}
              <div className="bg-[#E8F1FA] px-3 py-3">
                <h3 className="text-xl lg:text-2xl text-right text-[#00406E] mb-2">
                  {model.title}
                </h3>
                <div className="space-y-1 text-right">
                  {model.description.map((line, lineIndex) => (
                    <p
                      key={lineIndex}
                      className="text-md text-[#00406E]"
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <div className="mt-4 bg-white p-2 rounded-lg">
                  <p className="text-sm text-[#666666] leading-relaxed">
                    <span className="font-semibold text-[#00406E]">Best for:</span>{" "}
                    {model.bestFor}
                  </p>
                </div>
              </div>

              {/* Lower Section with White Background - Details Table */}
              <div className="bg-[#E8F1FA] px-3 py-3 flex-1">
                <div className="space-y-0 border-t border-gray-200">
                  {Object.entries(model.details).map(([key, value], detailIndex) => (
                    <div
                      key={detailIndex}
                      className={`py-3 ${
                        detailIndex !== Object.keys(model.details).length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-md text-[#00406E] shrink-0">
                          {key}:
                        </span>
                        <span className="text-md text-[#434B] text-right flex-1">
                          {value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurEngagement;

