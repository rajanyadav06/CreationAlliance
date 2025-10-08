import React from "react";
import {
  Building,
  Shield,
  BookOpen,
  DollarSign,
  FileText,
  Users,
} from "lucide-react";

const services = [
  { label: "Digital Marketing", Icon: Building }, // 👈 updated here
  { label: "Trademark", Icon: Shield },
  { label: "Accounting", Icon: BookOpen },
  { label: "Income Tax", Icon: DollarSign },
  { label: "GST Services", Icon: FileText },
  { label: "Payroll", Icon: Users },
];

const Service = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50 py-16">
      {/* Background Light Glow Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-blue-200/30 rounded-full blur-3xl top-10 left-[-80px] animate-pulse" />
        <div className="absolute w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl bottom-10 right-[-100px] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#172a5a] mb-3">
          Explore Our Digital Services
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-12 max-w-3xl mx-auto">
          Grow your business and stay compliant with our all-in-one digital
          services—from incorporation to payroll—delivered with precision and care.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.Icon;
            return (
              <div
                key={index}
                className="relative group bg-white rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col items-center justify-center transition-all duration-500 cursor-pointer hover:-translate-y-1 overflow-hidden"
              >
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100 via-white to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon */}
                <div className="relative z-10 bg-blue-100 group-hover:bg-blue-500 p-4 rounded-full transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-blue-500 group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Label */}
                <p className="relative z-10 mt-3 text-base font-semibold text-[#172a5a] group-hover:text-blue-600 transition-colors duration-300">
                  {service.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
