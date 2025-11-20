import Image from "next/image";

// LinkedIn Icon Component
const LinkedInIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block"
  >
    <path
      d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5zM4.75 13.5H2.25V6H4.75v7.5zM3.5 4.95c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5 1.5.675 1.5 1.5-.675 1.5-1.5 1.5zm10 8.55H11.25V9.75c0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5v3.75H6.75V6H9v1.05c.3-.6.975-1.05 1.725-1.05 1.5 0 2.75 1.25 2.75 2.75v4.75z"
      fill="black"
    />
  </svg>
);

interface TeamMember {
  firstName: string;
  lastName: string;
  title: string;
  description: string;
  imagePath: string;
  linkedInUrl?: string;
}

const teamMembers: TeamMember[] = [
  {
    firstName: "Madhur",
    lastName: "Kabra",
    title: "Managing partner",
    description:
      "Ex-India Head, Impendi Analytics (acquired by Accenture). Deep expertise in offshoring strategies and building sustainable capability centers.",
    imagePath: "/mockImage.svg",
  },
  {
    firstName: "Vijender",
    lastName: "",
    title: "Managing partner",
    description:
      "Ex-India Head, Impendi Analytics (acquired by Accenture). Deep expertise in offshoring strategies and building sustainable capability centers.",
    imagePath: "/mockImage.svg",
  },
  {
    firstName: "Jeff",
    lastName: "",
    title: "Managing partner",
    description:
      "Ex-India Head, Impendi Analytics (acquired by Accenture). Deep expertise in offshoring strategies and building sustainable capability centers.",
    imagePath: "/mockImage.svg",
  },
  {
    firstName: "Erika",
    lastName: "",
    title: "Managing partner",
    description:
      "Ex-India Head, Impendi Analytics (acquired by Accenture). Deep expertise in offshoring strategies and building sustainable capability centers.",
    imagePath: "/mockImage.svg",
  },
  {
    firstName: "Chris",
    lastName: "",
    title: "Managing partner",
    description:
      "Ex-India Head, Impendi Analytics (acquired by Accenture). Deep expertise in offshoring strategies and building sustainable capability centers.",
    imagePath: "/mockImage.svg",
  },
];

export default function TeamMembers() {
  return (
    <section className="w-full bg-white py-16 px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Main Title */}
        <h2 className="text-4xl lg:text-5xl font-semibold mb-12 text-center lg:text-left">
          <span className="text-[#00406E]">Driven by</span>{" "}
          <span className="bg-[#010080] rounded-lg text-white px-3 py-1 inline-block">
            passionate leadership.
          </span>
        </h2>

        {/* Team Members Grid */}
        <div className="flex flex-col items-center">
          {/* All team members in a single grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full">
            {teamMembers.map((member, index) => {
              // Check if this is the last card and there's an odd number of cards
              const isLastCard = index === teamMembers.length - 1;
              const isOddNumber = teamMembers.length % 2 !== 0;
              const shouldCenter = isLastCard && isOddNumber;

              const cardContent = (
                <div className="bg-white rounded-lg p-4 md:p-6 flex flex-col items-center">
                 
                  <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-tl-2xl rounded-br-2xl overflow-hidden mb-3 md:mb-4 bg-gray-200">
                    <Image
                      src={member.imagePath}
                      alt={`${member.firstName} ${member.lastName}`}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name with LinkedIn Icon - Centered */}
                  <div className="mb-2 md:mb-3 text-center">
                    <h3 className="text-base md:text-xl font-bold text-black inline">
                      {member.firstName} {member.lastName}
                    </h3>
                    <span className="text-black ml-2">
                      <LinkedInIcon />
                    </span>
                  </div>

                  {/* Title in Grey Box */}
                  <div className="w-full mb-2 md:mb-3">
                    <div className="bg-white rounded-lg border border-gray-200 px-2 md:px-4 py-1 md:py-2 text-center">
                      <p className="text-xs md:text-base text-black font-medium">
                        {member.title}
                      </p>
                    </div>
                  </div>

                  {/* Description in Grey Box - Left Aligned */}
                  <div className="w-full">
                    <div className="bg-white rounded-lg border border-gray-200 px-2 md:px-4 py-2 md:py-3">
                      <p className="text-xs md:text-sm text-black leading-relaxed text-left">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              );

              if (shouldCenter) {
                return (
                  <div
                    key={index}
                    className="col-span-2 flex justify-center md:col-span-1 md:flex-none lg:col-span-1"
                  >
                    <div className="w-full max-w-[280px] md:max-w-none">
                      {cardContent}
                    </div>
                  </div>
                );
              }

              return <div key={index}>{cardContent}</div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

