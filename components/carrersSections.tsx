"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface JobPosition {
  id: string;
  title: string;
  location: string;
  responsibilities: string[];
  requiredSkills: string[];
  qualifications: string[];
}

const jobPositions: JobPosition[] = [
  {
    id: "1",
    title: "Copy writer",
    location: "Gurugram, Haryana",
    responsibilities: [
      "Execute assigned tasks efficiently and meet project deadlines",
      "Collaborate with cross-functional teams to achieve project goals",
      "Communicate progress and challenges effectively",
      "Maintain quality standards and best practices",
    ],
    requiredSkills: [
      "Strong understanding of core concepts",
      "Ability to work independently and in a team",
      "Good communication and interpersonal skills",
      "Problem-solving and critical-thinking abilities",
    ],
    qualifications: [
      "Prior experience in a similar role or industry",
      "Knowledge of advanced tools, frameworks, or best practices",
    ],
  },
  {
    id: "2",
    title: "Marketing Manager",
    location: "Newark, Delaware",
    responsibilities: [
      "Develop and implement marketing strategies to achieve business objectives",
      "Manage marketing campaigns and track results",
      "Analyze market trends and consumer behavior",
      "Collaborate with cross-functional teams to achieve project goals",
    ],
    requiredSkills: [
      "Strong understanding of marketing principles and best practices",
      "Ability to work independently and in a team",
      "Good communication and interpersonal skills",
      "Problem-solving and critical-thinking abilities", 
      "Strong analytical skills",
    ],
    qualifications: [
        "Bachelor's degree in Marketing or a related field",
        "5+ years of experience in marketing",
        "Strong leadership and management skills",
        "Strong analytical skills",
        "Strong communication and interpersonal skills",
        "Strong problem-solving and critical-thinking abilities",
        "Strong ability to work independently and in a team",
        "Strong ability to work independently and in a team",
    ],
  },
  // Add more job positions as needed
];


export default function CareersSection() {
  const [expandedJobs, setExpandedJobs] = useState<Set<string>>(new Set());

  const toggleJob = (jobId: string) => {
    setExpandedJobs((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(jobId)) {
        newSet.delete(jobId);
      } else {
        newSet.add(jobId);
      }
      return newSet;
    });
  };

  return (
    <section className="w-full bg-white py-16 px-8">
      <div className="container border-2 border-gray-200 p-5 rounded-xl mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {/* Left Section - 30% */}
          <div className="lg:col-span-4">
            <h2 className="text-5xl mb-6 text-[#00406E]">
              Join our Team
            </h2>
            <p className="text-lg text-black leading-relaxed">
              Join Colab 91 and help shape ideas that inspire.
            </p>
          </div>

          {/* Right Section - 70% */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl mb-8 text-[#00406E]">
              Open positions
            </h2>

            <div className="space-y-4">
              {jobPositions.map((job) => {
                const isExpanded = expandedJobs.has(job.id);
                return (
                  <div key={job.id} className="space-y-4">
                    {/* Job Header - Always Visible in its own border */}
                    <div
                      className={`border border-gray-200 rounded-lg ${
                        isExpanded ? "border-r-4 border-r-[#00406E]" : ""
                      }`}
                    >
                      <button
                        onClick={() => toggleJob(job.id)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div>
                          <h3 className="text-xl font-semibold text-black mb-1">
                            {job.title}
                          </h3>
                          <p className="text-base text-gray-600">{job.location}</p>
                        </div>
                        <div className="text-black shrink-0 ml-4">
                          {isExpanded ? (
                            <Minus size={20} />
                          ) : (
                            <Plus size={20} />
                          )}
                        </div>
                      </button>
                    </div>

                    {/* Job Details - Collapsible in separate border */}
                    {isExpanded && (
                      <div className="border border-gray-200 rounded-lg bg-white">
                        <div className="p-6 space-y-6">
                          {/* Responsibilities */}
                          <div>
                            <h4 className="text-lg font-semibold text-black mb-3">
                              Responsibilities:
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-black">
                              {job.responsibilities.map((responsibility, idx) => (
                                <li key={idx} className="text-base leading-relaxed">
                                  {responsibility}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Required Skills */}
                          <div>
                            <h4 className="text-lg font-semibold text-black mb-3">
                              Required skills:
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-black">
                              {job.requiredSkills.map((skill, idx) => (
                                <li key={idx} className="text-base leading-relaxed">
                                  {skill}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Qualifications */}
                          <div>
                            <h4 className="text-lg font-semibold text-black mb-3">
                              Qualifications:
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-black">
                              {job.qualifications.map((qualification, idx) => (
                                <li key={idx} className="text-base leading-relaxed">
                                  {qualification}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

