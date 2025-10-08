// components/FeaturedServices.jsx
import React from 'react';
import { ChartBarIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Business Plan',
    description:
      "Lay the foundation for your startup's success with a comprehensive business plan tailored to your vision and goals.",
    icon: <ClipboardDocumentListIcon className="h-6 w-6 text-white" />,
    bg: 'bg-indigo-700',
  },
  {
    title: 'Pitch Deck',
    description:
      "Impress investors and stakeholders with a compelling pitch deck that tells your startup's story and highlights its potential.",
    icon: <ChartBarIcon className="h-6 w-6 text-white" />,
    bg: 'bg-orange-500',
  },
  {
    title: 'Financial Modelling & Valuation',
    description:
      'Gain valuable insights into your startup’s financial health and future growth prospects with our expert financial modelling and valuation services.',
    icon: <ClipboardDocumentListIcon className="h-6 w-6 text-white" />,
    bg: 'bg-indigo-700',
  },
  {
    title: 'Fundraising',
    description:
      'Navigate the complexities of fundraising with confidence, from identifying funding opportunities to crafting winning pitches and securing investment.',
    icon: <ChartBarIcon className="h-6 w-6 text-white" />,
    bg: 'bg-orange-500',
  },
  {
    title: 'Mentoring',
    description:
      'Benefit from personalized guidance and mentorship from experienced entrepreneurs who understand the challenges and opportunities of startup life.',
    icon: <ClipboardDocumentListIcon className="h-6 w-6 text-white" />,
    bg: 'bg-indigo-700',
  },
  {
    title: 'Business Presentations',
    description:
      'Elevate your brand with captivating corporate profiles, persuasive sales presentations, or engaging product presentations.',
    icon: <ChartBarIcon className="h-6 w-6 text-white" />,
    bg: 'bg-orange-500',
  },
];

const StartupServices = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      {/* Tag */}
      <div className="flex justify-center mb-2">
        <span className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-semibold">
          Our Bestsellers
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">Featured Services</h2>

      {/* Grid */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((service, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl p-6 border transform transition-all duration-300 hover:shadow-xl hover:scale-105"
    >
      {/* Icon circle */}
      <div className={`h-16 w-16 rounded-full flex items-center justify-center mb-4 ${service.bg}`}>
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600">{service.description}</p>
    </div>
  ))}
</div>

    </section>
  );
};

export default StartupServices;
