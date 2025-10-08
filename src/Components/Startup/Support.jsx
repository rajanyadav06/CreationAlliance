import React from "react";

const serviceData = [
  {
    title: "Planning & Mentoring",
    icon: (
      <svg
        className="w-8 h-8 md:w-10 md:h-10 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-9 0V3h10v2M9 9h6m-6 4h6m-6 4h6"
        ></path>
      </svg>
    ),
    iconBgColor: "bg-indigo-700",
    points: [
      "Mentoring / idea brainstorming",
      "In-depth research / feasibility study",
      "Compelling business plans",
      "Detailed Project Report (DPR)",
    ],
  },
  {
    title: "Pitch Readiness",
    icon: (
      <svg
        className="w-8 h-8 md:w-10 md:h-10 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 5.882l-7 3.5v3.5A6.7 6.7 0 0012 22a6.7 6.7 0 008-8.118v-3.5l-7-3.5M12 10V4.477M19 12a7 7 0 10-14 0h14z"
        ></path>
      </svg>
    ),
    iconBgColor: "bg-orange-600",
    points: [
      "Pitch Deck",
      "Financial Modelling & Valuation",
      "1-Page / Video Teaser",
      "Mock Pitching",
    ],
  },
  {
    title: "Launch & Growth",
    icon: (
      <svg
        className="w-8 h-8 md:w-10 md:h-10 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
      </svg>
    ),
    iconBgColor: "bg-orange-500",
    points: ["Business", "Brand", "Digital Marketing", "Legal" ,"Website & App",],
  },
  {
    title: "Fundraising",
    icon: (
      <svg
        className="w-8 h-8 md:w-10 md:h-10 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2M9 16h6M8 11.11v-2.001h8v2.001M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
    iconBgColor: "bg-indigo-900",
    points: ["Equity Funding", "Business Loans", "Grants", "Government Schemes"],
  },
];

const ServiceBox = ({ title, icon, iconBgColor, points }) => (
  <div className="flex flex-col p-4 md:p-0">
    <div
      className={`p-4 w-16 h-16 rounded-lg ${iconBgColor} flex items-center justify-center mb-4`}
    >
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const Support = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-16">
        We support startups at every stage
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {/* Left Side */}
        <div className="flex flex-col space-y-16">
          <ServiceBox {...serviceData[0]} />
          <ServiceBox {...serviceData[2]} />
        </div>

        {/* Center Image Section */}
        <div className="relative col-span-2 lg:col-span-1 flex justify-center items-center">
          <div className="relative w-full max-w-sm aspect-[3/4] bg-gray-100 rounded-lg shadow-xl overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/1159212661/photo/portrait-of-successful-young-asian-businesswoman%C3%A2%C2%A0at-office-colleagues-in-background.jpg?s=612x612&w=0&k=20&c=iXO5_SFF7aEj2x7zLqdhW1ZxzEoPpkSYVo-xs6uAh-k="
              alt="Advisory company professional smiling"
              className="w-full h-full object-cover"
            />

            {/* Decorative Stripe */}
            <div className="absolute top-0 right-0 h-full w-8 bg-gray-200 opacity-50 transform skew-x-12 origin-top-right"></div>

            {/* Fixed Experience Box */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[85%] bg-indigo-900 text-white rounded-lg shadow-2xl text-center py-5 px-4 mb-8">
              <p className="text-4xl font-bold">08+</p>
              <p className="text-sm mt-1 leading-tight">
                Years of Experience <br /> In This Advisory Company
              </p>
            </div>

            
          </div>

          {/* Decorative Dots */}
          <div className="absolute bottom-20 left-10 hidden lg:block space-y-1">
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col space-y-16">
          <ServiceBox {...serviceData[1]} />
          <ServiceBox {...serviceData[3]} />
        </div>
      </div>
    </div>
  );
};

export default Support;
